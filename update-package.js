/* ============================================================================
   ENT Master Bank — Offline Update Package System
   ----------------------------------------------------------------------------
   Adds:
     Student: Settings -> Import Update  (.entpkg / .zip / .json)
     Admin:   Settings -> Export Update, Database Version, Backup Database,
              Restore Backup

   Design notes (kept here rather than scattered in comments below):

   - CONTENT vs USER DATA. Two different kinds of thing live in this app's
     database. "Content" (questions, lectures/summaries, flashcards, book
     metadata, taxonomy) is what update packages carry and are allowed to
     add/update. "User data" (bookmarks, notes, exam history, performance,
     highYield/favorites, study streak/goal) belongs to the person studying
     and is never read from or written to by the import/merge engine below.

   - STABLE IDS. IndexedDB's own auto-increment `id` is local to each
     device/install and is NOT safe to use as a cross-device identity (two
     different phones can both have a question with local id 5 that are
     completely unrelated). Every content item therefore also carries a
     `uid` (a UUID) that travels with it inside packages. Merges match on
     `uid`, then update the existing row in place (same local `id`) so that
     bookmarks/notes/performance rows -- which point at the local `id` --
     never go stale. Pre-existing rows from before this system was added
     get a `uid` assigned automatically on first load (see ensureUidsBackfilled).

   - CHECKSUM vs SIGNATURE. manifest.checksum is a real SHA-256 hash of
     database.json, verified on import, and it does its job: it catches
     corruption and accidental edits. manifest.signature is left as an
     honest placeholder (see SIGNATURE_NOTE below) rather than dressed up
     to look like real authentication -- with no server and a single code
     bundle shared by every install, there is nowhere to keep a signing key
     secret from the people the signature would need to be secret from.

   - COMPRESSION. .entpkg files are ordinary zip archives (built with the
     vendored JSZip). Entries are written uncompressed (STORE) rather than
     DEFLATEd -- this was a deliberate choice made after testing, see the
     project notes; reading DEFLATE-compressed zips (e.g. one a student
     zipped up some other way) still works fine, only this app's own writer
     uses STORE. The .entpkg/.zip file itself is still a completely
     standard, valid zip.
   ============================================================================ */
(function () {
    'use strict';

    // ------------------------------------------------------------------
    // 1. Versioning constants
    // ------------------------------------------------------------------
    const APP_VERSION = '1.3.0';           // this app build (semantic)
    const PACKAGE_FORMAT_VERSION = 1;      // internal database.json shape version
    const CLASSIFICATION_POLICY_VERSION = 2;

    const SETTINGS_KEYS = {
        CONTENT_DB_VERSION: 'ent_content_db_version',   // e.g. "2026.08.04"
        APPLIED_PACKAGES: 'ent_applied_package_ids',    // [{packageId, packageVersion, appliedAt}]
        IMPORT_HISTORY: 'ent_import_history',           // [{...summary}], most recent last
        TAXONOMY_EXTRA: 'ent_taxonomy_extra',           // {Subject: [chapters...]} merged in from packages
        UID_BACKFILL_DONE: 'ent_uid_backfill_done',
        LAST_EXPORTED_VERSION: 'ent_last_exported_version'
    };

    const CONTENT_STORES = ['questions', 'lectures', 'flashcards', 'bookMeta'];
    // Never touched by import/merge; listed explicitly so it's obvious at a glance what's protected.
    const USER_DATA_STORES = ['bookmarks', 'notes', 'examHistory', 'performance', 'highYield'];

    const SIGNATURE_NOTE = "Placeholder only. This build has no server and every install " +
        "runs the same code, so there's no way to keep a signing key secret from the " +
        "people it would need to be secret from. The checksum above is real and does " +
        "catch corruption/accidental edits; treat this field as reserved for a future " +
        "server-backed signing flow, not as proof of authorship.";

    // ------------------------------------------------------------------
    // 2. Small utilities
    // ------------------------------------------------------------------

    /** Generic dotted-version compare, works for both "1.0.0" and "2026.08.04" styles. -1/0/1 */
    function compareVersions(a, b) {
        const pa = String(a == null ? '0' : a).split('.').map(n => parseInt(n, 10) || 0);
        const pb = String(b == null ? '0' : b).split('.').map(n => parseInt(n, 10) || 0);
        const len = Math.max(pa.length, pb.length);
        for (let i = 0; i < len; i++) {
            const na = pa[i] || 0, nb = pb[i] || 0;
            if (na !== nb) return na < nb ? -1 : 1;
        }
        return 0;
    }

    function todayVersionString(d) {
        d = d || new Date();
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}.${mm}.${dd}`;
    }

    function genUid() {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID();
        // Fallback for older WebViews without crypto.randomUUID
        return 'uid-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    }

    async function sha256Hex(str) {
        const enc = new TextEncoder().encode(str);
        const buf = await crypto.subtle.digest('SHA-256', enc);
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
    }

    function formatDuration(ms) {
        if (ms < 1000) return ms + ' ms';
        return (ms / 1000).toFixed(2) + ' s';
    }

    // Question image metadata never points at a network URL. Images travel as raster
    // bytes in the same archive and are validated before any content is changed.
    const IMAGE_CONTENT_VERSION = 1;
    const MAX_QUESTION_IMAGE_BYTES = 5 * 1024 * 1024;
    const MAX_QUESTION_IMAGE_PIXELS = 20000000;

    function questionImagePath(image) {
        const path = typeof image === 'string' ? image : image && image.path;
        if (typeof path !== 'string' || !path || path.length > 180 || !/^(?:images\/)?[a-zA-Z0-9][a-zA-Z0-9_.-]*\.(?:png|jpe?g|webp)$/i.test(path) || path.includes('..')) {
            throw new Error('Question image paths must be local PNG, JPEG or WebP files inside images/.');
        }
        if (typeof image !== 'string') {
            if (!image || typeof image !== 'object' || Array.isArray(image)) throw new Error('Invalid question image descriptor.');
            if (image.role != null && !['question', 'explanation'].includes(image.role)) throw new Error('Question image role must be question or explanation.');
            if (image.caption != null && (typeof image.caption !== 'string' || image.caption.length > 2000)) throw new Error('Invalid question image caption.');
        }
        return path;
    }

    function questionImageArchivePath(image) {
        const path = questionImagePath(image);
        return path.includes('/') ? path : 'images/' + path;
    }

    async function sha256Bytes(bytes) {
        const buffer = bytes instanceof Blob ? await bytes.arrayBuffer() : bytes;
        const hash = await crypto.subtle.digest('SHA-256', buffer);
        return Array.from(new Uint8Array(hash)).map(n => n.toString(16).padStart(2, '0')).join('');
    }

    async function validateRasterImage(blob, descriptor) {
        if (!(blob instanceof Blob) || !blob.size || blob.size > MAX_QUESTION_IMAGE_BYTES) {
            throw new Error('Each question image must contain raster data and be no larger than 5 MB.');
        }
        const head = new Uint8Array(await blob.slice(0, 16).arrayBuffer());
        const isPng = head.length >= 8 && [137,80,78,71,13,10,26,10].every((n,i) => head[i] === n);
        const isJpeg = head.length >= 3 && head[0] === 255 && head[1] === 216 && head[2] === 255;
        const isWebp = head.length >= 12 && String.fromCharCode(...head.slice(0,4)) === 'RIFF' && String.fromCharCode(...head.slice(8,12)) === 'WEBP';
        const mime = isPng ? 'image/png' : isJpeg ? 'image/jpeg' : isWebp ? 'image/webp' : '';
        if (!mime) throw new Error('Question image bytes are not PNG, JPEG or WebP.');
        const path = questionImagePath(descriptor);
        const extension = path.match(/\.([^.]+)$/)[1].toLowerCase();
        if ((mime === 'image/png' && extension !== 'png') || (mime === 'image/jpeg' && !['jpg','jpeg'].includes(extension)) || (mime === 'image/webp' && extension !== 'webp')) {
            throw new Error('Question image filename does not match its raster format.');
        }
        if (typeof descriptor === 'object' && descriptor.mime != null && descriptor.mime !== mime) throw new Error('Question image MIME type does not match its bytes.');
        const typed = blob.type === mime ? blob : new Blob([blob], {type:mime});
        let width, height;
        if (typeof createImageBitmap === 'function') {
            let bitmap;
            try { bitmap = await createImageBitmap(typed); width = bitmap.width; height = bitmap.height; }
            catch (error) { throw new Error('A question image is damaged or cannot be decoded.'); }
            finally { if (bitmap) bitmap.close(); }
        } else {
            const url = URL.createObjectURL(typed);
            try {
                const dimensions = await new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => resolve([image.naturalWidth,image.naturalHeight]);
                    image.onerror = () => reject(new Error('A question image is damaged or cannot be decoded.'));
                    image.src = url;
                });
                [width,height] = dimensions;
            } finally { URL.revokeObjectURL(url); }
        }
        if (!width || !height || width * height > MAX_QUESTION_IMAGE_PIXELS) throw new Error('A question image is too large to display safely.');
        if (typeof descriptor === 'object') {
            if (descriptor.width != null && descriptor.width !== width) throw new Error('Question image width does not match its bytes.');
            if (descriptor.height != null && descriptor.height !== height) throw new Error('Question image height does not match its bytes.');
            if (descriptor.size != null && descriptor.size !== blob.size) throw new Error('Question image size does not match its bytes.');
        }
        return {blob:typed,mime,width,height,hash:await sha256Bytes(typed)};
    }

    async function validateQuestionImageAssets(manifest, database, assets) {
        if (Number(manifest.imageContentVersion || 0) > IMAGE_CONTENT_VERSION || Number(database.imageContentVersion || 0) > IMAGE_CONTENT_VERSION) {
            throw new Error('This package needs a newer image content reader. Update the app before importing.');
        }
        const checksums = manifest.assetChecksums;
        const requireHashes = Number(manifest.imageContentVersion || database.imageContentVersion || 0) >= 1;
        if (requireHashes && (!checksums || typeof checksums !== 'object' || Array.isArray(checksums))) throw new Error('This image package is missing its image checksums.');
        const verified = new Map();
        for (const q of (database.questions || [])) {
            if (q.images == null) continue;
            if (!Array.isArray(q.images) || q.images.length > 8) throw new Error('Question images must be a list with no more than 8 attachments.');
            if (q.images.length && (typeof q.uid !== 'string' || !q.uid.trim())) throw new Error('Questions with images must have a stable UID.');
            const seen = new Set(), roleCounts = {question:0,explanation:0};
            for (const image of q.images) {
                const path = questionImagePath(image), archivePath = questionImageArchivePath(image);
                const role = typeof image === 'string' ? 'question' : (image.role || 'question');
                if (++roleCounts[role] > 4) throw new Error('A question can include at most 4 question images and 4 explanation images.');
                if (seen.has(archivePath)) throw new Error('A question lists the same image more than once.');
                seen.add(archivePath);
                const blob = assets.get(path) || assets.get(archivePath);
                if (!blob) throw new Error('A referenced question image is missing from the package: ' + archivePath);
                // Validate descriptors separately even when several questions share the same bytes.
                const valid = await validateRasterImage(blob, image);
                if (requireHashes && (typeof checksums[archivePath] !== 'string' || !/^[a-f0-9]{64}$/i.test(checksums[archivePath]) || valid.hash !== checksums[archivePath].toLowerCase())) {
                    throw new Error('A question image checksum does not match its contents: ' + archivePath);
                }
                const previous = verified.get(archivePath);
                if (previous && previous.hash !== valid.hash) throw new Error('Conflicting question image bytes share one package path.');
                verified.set(archivePath,valid);
                assets.set(path,valid.blob);
                assets.set(archivePath,valid.blob);
            }
        }
        return verified;
    }

    /** Normalize text the same way the rest of this app already does for fuzzy duplicate matching. */
    function normalizeText(s) {
        return (s || '').replace(/\s+/g, ' ').replace(/[^a-z0-9 ]/gi, '').trim().toLowerCase();
    }

    /** Equality check for merge decisions: ignores bookkeeping fields, compares the rest. */
    function contentEquals(a, b) {
        const strip = (o) => {
            const c = { ...o };
            delete c.id; delete c.uid; delete c.pkgVersion; delete c.dateAdded; delete c.updatedAt;
            return c;
        };
        return JSON.stringify(strip(a)) === JSON.stringify(strip(b));
    }

    // ------------------------------------------------------------------
    // 3. Taxonomy merge (Subjects / Chapters carried by a package)
    // ------------------------------------------------------------------

    /** Mutates the live ENT_DATA/ALL_SUBJECTS/ALL_CHAPTERS (from app.js) in place, then persists. */
    async function mergeTaxonomy(extra) {
        if (!extra || typeof extra !== 'object') return { subjectsAdded: 0, chaptersAdded: 0 };
        let subjectsAdded = 0, chaptersAdded = 0;
        for (const subject of Object.keys(extra)) {
            if (!subject) continue;
            if (!ENT_DATA[subject]) { ENT_DATA[subject] = []; subjectsAdded++; }
            const chapters = Array.isArray(extra[subject]) ? extra[subject] : [];
            for (const ch of chapters) {
                if (ch && !ENT_DATA[subject].includes(ch)) { ENT_DATA[subject].push(ch); chaptersAdded++; }
            }
        }
        // ALL_SUBJECTS / ALL_CHAPTERS are `const` arrays computed once at load; refresh in place
        // (mutating the array contents, not rebinding) so dropdowns pick up new entries immediately.
        ALL_SUBJECTS.length = 0;
        ALL_SUBJECTS.push(...Object.keys(ENT_DATA).sort());
        ALL_CHAPTERS.length = 0;
        ALL_CHAPTERS.push(...Object.values(ENT_DATA).flat().sort((a, b) => a.localeCompare(b)));

        // Persist the cumulative extra-taxonomy record (merged with anything already stored)
        // so it survives reloads (ENT_DATA itself resets to its hardcoded baseline on every load).
        let stored = {};
        try { stored = JSON.parse(await db.getSetting(SETTINGS_KEYS.TAXONOMY_EXTRA, '{}')); } catch (e) { stored = {}; }
        for (const subject of Object.keys(extra)) {
            stored[subject] = Array.from(new Set([...(stored[subject] || []), ...(extra[subject] || [])]));
        }
        await db.setSetting(SETTINGS_KEYS.TAXONOMY_EXTRA, JSON.stringify(stored));
        return { subjectsAdded, chaptersAdded };
    }

    /** Called once at startup to re-apply whatever taxonomy extensions earlier packages added. */
    async function reapplyStoredTaxonomy() {
        try {
            const stored = JSON.parse(await db.getSetting(SETTINGS_KEYS.TAXONOMY_EXTRA, '{}'));
            if (Object.keys(stored).length) await mergeTaxonomy(stored);
        } catch (e) { /* nothing stored yet, or malformed — safe to ignore */ }
    }

    // ------------------------------------------------------------------
    // 4. uid backfill — one-time lazy migration for pre-existing rows
    // ------------------------------------------------------------------
    async function ensureUidsBackfilled() {
        const done = await db.getSetting(SETTINGS_KEYS.UID_BACKFILL_DONE, false);
        if (done) return;
        await db.ensureReady();
        for (const storeName of ['questions', 'lectures']) {
            const items = await new Promise(resolve => {
                db.db.transaction(storeName, 'readonly').objectStore(storeName).getAll().onsuccess = e => resolve(e.target.result || []);
            });
            const missing = items.filter(it => !it.uid);
            if (!missing.length) continue;
            await new Promise((resolve, reject) => {
                const tx = db.db.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                missing.forEach(it => { it.uid = genUid(); store.put(it); });
                tx.oncomplete = resolve;
                tx.onerror = () => reject(tx.error);
            });
        }
        db._invalidateCache();
        await db.setSetting(SETTINGS_KEYS.UID_BACKFILL_DONE, true);
    }

    // ------------------------------------------------------------------
    // 5. Backup / Restore engine
    // ------------------------------------------------------------------

    /** Reads the full database (via the same exportAllData used by the legacy Backup/Restore buttons,
     *  now fixed to include every store) and wraps it with a bit of bookkeeping for the backups list. */
    async function captureFullSnapshot(reason) {
        await db.ensureReady();
        const data = await db.exportAllData();
        return {
            takenAt: new Date().toISOString(),
            reason: reason || 'manual',
            appVersion: APP_VERSION,
            contentDbVersion: await db.getSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, todayVersionString()),
            data
        };
    }

    /** Persists a snapshot into the `backups` store, pruning older ones beyond the keep limit. */
    async function saveBackupRecord(snapshot, keep) {
        keep = keep || 5;
        await db.ensureReady();
        const id = await new Promise((resolve, reject) => {
            const tx = db.db.transaction('backups', 'readwrite');
            const req = tx.objectStore('backups').add(snapshot);
            req.onsuccess = () => resolve(req.result);
            tx.onerror = () => reject(tx.error);
        });
        const all = await listBackups();
        if (all.length > keep) {
            const toDelete = all.slice(0, all.length - keep); // listBackups() is oldest-first
            await new Promise(resolve => {
                const tx = db.db.transaction('backups', 'readwrite');
                toDelete.forEach(b => tx.objectStore('backups').delete(b.id));
                tx.oncomplete = resolve;
            });
        }
        return id;
    }

    async function listBackups() {
        await db.ensureReady();
        const all = await new Promise(resolve => {
            db.db.transaction('backups', 'readonly').objectStore('backups').getAll().onsuccess = e => resolve(e.target.result || []);
        });
        return all.sort((a, b) => new Date(a.takenAt) - new Date(b.takenAt));
    }

    async function getBackup(id) {
        await db.ensureReady();
        return new Promise(resolve => {
            db.db.transaction('backups', 'readonly').objectStore('backups').get(id).onsuccess = e => resolve(e.target.result || null);
        });
    }

    /** Full, destructive restore: replaces every store's content with what's in the snapshot. */
    async function restoreFullSnapshot(snapshot) {
        await db.ensureReady();
        await db.restoreSnapshotData(snapshot.data);
        if (snapshot.contentDbVersion) await db.setSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, snapshot.contentDbVersion);
        db._invalidateCache();
    }

    // Expose the small pieces other sections of this file need; the rest stays module-private.
    window.__entUpdatePkg = window.__entUpdatePkg || {};
    Object.assign(window.__entUpdatePkg, {
        APP_VERSION, PACKAGE_FORMAT_VERSION, CLASSIFICATION_POLICY_VERSION, SETTINGS_KEYS, CONTENT_STORES, USER_DATA_STORES, SIGNATURE_NOTE,
        IMAGE_CONTENT_VERSION, questionImagePath, questionImageArchivePath, validateRasterImage, validateQuestionImageAssets, sha256Bytes,
        compareVersions, todayVersionString, genUid, sha256Hex, formatBytes, formatDuration, normalizeText, contentEquals,
        mergeTaxonomy, reapplyStoredTaxonomy, ensureUidsBackfilled,
        captureFullSnapshot, saveBackupRecord, listBackups, getBackup, restoreFullSnapshot
    });
})();

/* ============================================================================
   Part 2 — Package parsing, validation, merge engine, import orchestration
   ============================================================================ */
(function () {
    'use strict';
    const U = window.__entUpdatePkg;
    const { compareVersions, todayVersionString, genUid, sha256Hex, normalizeText, contentEquals,
            mergeTaxonomy, captureFullSnapshot, saveBackupRecord, restoreFullSnapshot, SETTINGS_KEYS, APP_VERSION } = U;

    const REQUIRED_MANIFEST_FIELDS = ['packageId', 'packageVersion', 'checksum'];
    const RECOGNIZED_CONTENT_KEYS = ['questions', 'lectures', 'flashcards', 'bookMeta'];
    // Where a content type's attached files live inside the package, per the required package structure.
    const ASSET_FOLDER = { questions: 'images', lectures: 'summaries', flashcards: 'flashcards', bookMeta: 'books' };

    // ---------------------------------------------------------------
    // Parsing
    // ---------------------------------------------------------------
    async function parsePackageFile(file) {
        const name = (file.name || '').toLowerCase();
        if (name.endsWith('.json')) {
            let text, flat;
            try { text = await file.text(); flat = JSON.parse(text); }
            catch (e) { throw new Error("This .json file isn't valid JSON (" + e.message + ")."); }
            if (!flat || typeof flat !== 'object' || !flat.manifest || !flat.database) {
                throw new Error('This .json file is missing a "manifest" and/or "database" section, so it doesn\'t look like an update package.');
            }
            const databaseRawText = JSON.stringify(flat.database);
            return { manifest: flat.manifest, database: flat.database, databaseRawText, assets: new Map() };
        }

        // .entpkg or .zip (or anything else — try as a zip, since .entpkg literally is one)
        if (typeof JSZip === 'undefined') throw new Error('The zip reader (JSZip) failed to load — try reloading the app before importing.');
        let zip;
        try {
            zip = await JSZip.loadAsync(await file.arrayBuffer());
        } catch (e) {
            throw new Error("Couldn't open this file as a zip/.entpkg package (" + e.message + ").");
        }

        const manifestEntry = zip.file('manifest.json');
        const databaseEntry = zip.file('database.json');
        if (!manifestEntry || !databaseEntry) {
            throw new Error('This package is missing manifest.json and/or database.json, so it doesn\'t look like a valid .entpkg/.zip update package.');
        }

        let manifest, database, databaseRawText;
        try { manifest = JSON.parse(await manifestEntry.async('string')); }
        catch (e) { throw new Error('manifest.json inside the package is not valid JSON (' + e.message + ').'); }
        try { databaseRawText = await databaseEntry.async('string'); database = JSON.parse(databaseRawText); }
        catch (e) { throw new Error('database.json inside the package is not valid JSON (' + e.message + ').'); }

        const assets = new Map(); // relative path -> Blob
        const assetEntries = [];
        zip.forEach((relPath, entry) => {
            if (entry.dir) return;
            if (relPath === 'manifest.json' || relPath === 'database.json') return;
            assetEntries.push([relPath, entry]);
        });
        for (const [relPath, entry] of assetEntries) {
            try { assets.set(relPath, await entry.async('blob')); }
            catch (e) { /* one unreadable asset shouldn't sink the whole import; it'll just be missing */ }
        }

        return { manifest, database, databaseRawText, assets };
    }

    // ---------------------------------------------------------------
    // Validation
    // ---------------------------------------------------------------
    function validatePackageStructure(manifest, database) {
        const errors = [];
        if (!manifest || typeof manifest !== 'object') errors.push('manifest.json is missing or not an object.');
        else {
            for (const f of REQUIRED_MANIFEST_FIELDS) if (!manifest[f]) errors.push(`manifest.json is missing required field "${f}".`);
            for (const field of ['packageVersion', 'targetDbVersion', 'baseDbVersion']) {
                if (manifest[field] != null && !/^\d+(?:\.\d+)*$/.test(String(manifest[field]))) {
                    errors.push(`manifest.json "${field}" must contain numbers separated by dots.`);
                }
            }
        }

        if (!database || typeof database !== 'object') {
            errors.push('database.json is missing or not an object.');
        } else {
            const presentKeys = RECOGNIZED_CONTENT_KEYS.filter(k => database[k] !== undefined);
            const hasTaxonomy = database.taxonomy && typeof database.taxonomy === 'object' && Object.keys(database.taxonomy).length;
            if (!presentKeys.length && !hasTaxonomy) {
                errors.push('database.json contains no recognized content (no questions, lectures, flashcards, bookMeta, or taxonomy).');
            }
            for (const k of presentKeys) {
                if (!Array.isArray(database[k])) errors.push(`database.json "${k}" should be a list, but isn't.`);
                else {
                    const uids = new Set();
                    for (const item of database[k]) {
                        if (!item || typeof item !== 'object' || Array.isArray(item)) { errors.push(`database.json "${k}" contains an invalid item.`); break; }
                        if (item.uid != null) {
                            if (typeof item.uid !== 'string' || !item.uid.trim()) { errors.push(`database.json "${k}" contains an invalid UID.`); break; }
                            if (uids.has(item.uid)) { errors.push(`database.json "${k}" repeats UID "${item.uid}".`); break; }
                            uids.add(item.uid);
                        }
                    }
                }
            }
            if (!presentKeys.some(k => Array.isArray(database[k]) && database[k].length) && !hasTaxonomy) {
                errors.push('This package contains no questions, lectures, flashcards, book entries or classification updates. Export a Full package from the manager after adding content.');
            }
        }
        return { valid: errors.length === 0, errors };
    }

    async function verifyChecksum(manifest, databaseRawText) {
        if (!manifest.checksum) return false;
        const actual = await sha256Hex(databaseRawText);
        return actual.toLowerCase() === String(manifest.checksum).toLowerCase();
    }

    function checkCompatibility(manifest, currentContentDbVersion) {
        const errors = [], warnings = [];
        if (Number(manifest.classificationPolicyVersion || 0) > U.CLASSIFICATION_POLICY_VERSION) {
            errors.push('This package uses a newer classification policy. Update the app before importing it.');
        }
        if (manifest.minAppVersion && compareVersions(APP_VERSION, manifest.minAppVersion) < 0) {
            errors.push(`This package needs app version ${manifest.minAppVersion} or newer — this app is ${APP_VERSION}.`);
        }
        if (manifest.exportType === 'incremental' && manifest.baseDbVersion) {
            if (compareVersions(currentContentDbVersion, manifest.baseDbVersion) < 0) {
                warnings.push(`This is an incremental update built on database version ${manifest.baseDbVersion}, ` +
                    `newer than your current ${currentContentDbVersion}. It's still safe to apply, but you may be ` +
                    `missing other updates in between.`);
            }
        }
        return { compatible: errors.length === 0, errors, warnings };
    }

    function validateItemFields(type, item) {
        switch (type) {
            case 'questions': {
                if (!item.questionText) return 'missing questionText';
                const errors = validateQuestionAnswer(item);
                return errors.length ? errors.join(' ') : null;
            }
            case 'lectures':
                if (!item.title) return 'missing title';
                if (!item.content) return 'missing content';
                return null;
            case 'flashcards':
                if (!item.front) return 'missing front';
                if (!item.back) return 'missing back';
                return null;
            case 'bookMeta':
                if (!item.title) return 'missing title';
                return null;
            default:
                return null;
        }
    }

    // ---------------------------------------------------------------
    // Merge engine
    // ---------------------------------------------------------------
    async function buildExistingLookup(storeName, getAllFn) {
        const items = await getAllFn();
        const byUid = new Map();
        const byNormalizedText = new Map(); // legacy items with no uid yet (pre-dates this system)
        for (const it of items) {
            if (it.uid) byUid.set(it.uid, it);
            else if (storeName === 'questions' && it.questionText) byNormalizedText.set(normalizeText(it.questionText), it);
            else if (storeName === 'lectures' && it.title) byNormalizedText.set(normalizeText(it.title + '|' + (it.content || '')), it);
        }
        return { byUid, byNormalizedText };
    }

    async function mergePackageIntoDb(manifest, database, assets) {
        prepareQuestionAnswers(database.questions || []);
        await U.validateQuestionImageAssets(manifest, database, assets);
        await db.ensureReady();
        const stats = { added: 0, updated: 0, skipped: 0, duplicates: 0, imagesWritten: 0, errors: [] };

        const rawGetAll = (storeName) => new Promise(resolve => {
            db.db.transaction(storeName, 'readonly').objectStore(storeName).getAll().onsuccess = e => resolve(e.target.result || []);
        });
        const lookups = {
            questions: await buildExistingLookup('questions', () => db.getAllQuestions()),
            lectures: await buildExistingLookup('lectures', () => db.getAllLectures()),
            flashcards: await buildExistingLookup('flashcards', () => rawGetAll('flashcards')),
            bookMeta: await buildExistingLookup('bookMeta', () => rawGetAll('bookMeta'))
        };

        const involvedStores = RECOGNIZED_CONTENT_KEYS.filter(k => Array.isArray(database[k]) && database[k].length);
        if (assets.size || (database.questions || []).some(q => Array.isArray(q.images) && q.images.length)) involvedStores.push('assets');
        if (!involvedStores.length) return stats; // nothing to do (e.g. taxonomy-only package)

        const now = new Date().toISOString();
        const pendingAssetWrites = []; // {assetKey, blob} — decided while classifying items, written in the same tx
        const pendingQuestionDescriptors = new Map();

        function classify(type, incoming) {
            const problem = validateItemFields(type, incoming);
            if (problem) { stats.errors.push({ type, uid: incoming.uid || null, reason: problem }); return null; }

            const { byUid, byNormalizedText } = lookups[type];
            let existing = incoming.uid ? byUid.get(incoming.uid) : null;
            if (!existing) {
                const key = type === 'questions' ? normalizeText(incoming.questionText)
                    : type === 'lectures' ? normalizeText(incoming.title + '|' + (incoming.content || ''))
                    : null;
                if (key) existing = byNormalizedText.get(key);
            }

            const prepared = { ...incoming };
            if (type === 'questions') {
                prepared.correctAnswer = normalizeCorrectAnswer(prepared.correctAnswer);
                normalizeQuestionReferenceMetadata(prepared);
                // Package labels and review flags are source metadata, including Uncategorized.
                // Fill missing source labels before merging so an update cannot retain an
                // older classification. This normalizer never infers labels from text.
                normalizeQuestionClassification(prepared, { infer: false, readNested: false });
                // Use the same optional-field defaults before comparing added and existing rows.
                prepared.tags = prepared.tags || [];
                prepared.group = prepared.group || '';
                prepared.book = prepared.book || '';
            }
            if (!prepared.uid) prepared.uid = genUid();
            prepared.pkgVersion = manifest.packageVersion || prepared.pkgVersion || '0';

            if (!existing) {
                prepared.dateAdded = prepared.dateAdded || now;
                prepared.updatedAt = now;
                return { action: 'add', record: prepared };
            }

            if (contentEquals(existing, prepared)) return { action: 'duplicate', record: existing };

            const existingVersion = existing.pkgVersion || '0';
            if (compareVersions(prepared.pkgVersion, existingVersion) > 0) {
                const merged = { ...existing, ...prepared, id: existing.id, dateAdded: existing.dateAdded || now, updatedAt: now };
                // Synchronize any legacy nested metadata with the incoming flat labels.
                if (type === 'questions') normalizeQuestionClassification(merged, { infer: false, readNested: false });
                return { action: 'update', record: merged };
            }
            return { action: 'skip' };
        }

        function queueAssets(type, itemUid, images) {
            if (!Array.isArray(images)) return;
            const folder = ASSET_FOLDER[type] || 'assets';
            for (const img of images) {
                const path = typeof img === 'string' ? img : img.path;
                if (!path) continue;
                const blob = assets.get(path) || assets.get(folder + '/' + path.split('/').pop());
                if (!blob) continue; // referenced but not included in the package — skip quietly
                const assetKey = itemUid + '::' + path;
                pendingAssetWrites.push({ assetKey, blob });
                if (type === 'questions') pendingQuestionDescriptors.set(assetKey,img);
            }
        }

        const decisions = { questions: [], lectures: [], flashcards: [], bookMeta: [] };
        for (const type of RECOGNIZED_CONTENT_KEYS) {
            for (const incoming of (database[type] || [])) {
                const d = classify(type, incoming);
                if (!d) continue;
                if (d.action === 'duplicate') {
                    stats.duplicates++;
                    // Reapplying an identical valid package can restore a missing or damaged local image.
                    // Older/changed records are skipped below and never replace their newer assets.
                    if (type === 'questions' && incoming.uid === d.record.uid) {
                        for (const image of (d.record.images || [])) {
                            const imagePath = U.questionImagePath(image);
                            const local = await new Promise((resolve, reject) => {
                                const request = db.db.transaction('assets','readonly').objectStore('assets').get(d.record.uid+'::'+imagePath);
                                request.onsuccess=()=>resolve(request.result); request.onerror=()=>reject(request.error);
                            });
                            let repair = !local || !(local.blob instanceof Blob) || !local.blob.size;
                            if (!repair) {
                                try {
                                    const validLocal = await U.validateRasterImage(local.blob,image);
                                    const incomingBlob = assets.get(imagePath) || assets.get(U.questionImageArchivePath(image));
                                    // Queue differing bytes too: the immutable-path guard below rejects
                                    // overwriting a valid image rather than silently accepting the conflict.
                                    repair = validLocal.hash !== await U.sha256Bytes(incomingBlob);
                                } catch (error) { repair = true; }
                            }
                            if (repair) queueAssets(type,d.record.uid,[image]);
                        }
                    }
                    continue;
                }
                if (d.action === 'skip') { stats.skipped++; continue; }
                decisions[type].push(d);
                if (d.action === 'add') stats.added++; else stats.updated++;
                queueAssets(type, d.record.uid, d.record.images);
            }
        }

        // Uploaded image paths are immutable: an exam snapshot may still refer to an old path.
        // A valid image may only be replaced by a descriptor with a new path.
        for (const asset of pendingAssetWrites) {
            const descriptor=pendingQuestionDescriptors.get(asset.assetKey);
            if (!descriptor) continue;
            const local=await new Promise((resolve,reject)=>{
                const request=db.db.transaction('assets','readonly').objectStore('assets').get(asset.assetKey);
                request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
            });
            if (!local || !(local.blob instanceof Blob) || !local.blob.size) continue;
            let localImage;
            try { localImage=await U.validateRasterImage(local.blob,U.questionImagePath(descriptor)); }
            catch (error) { continue; } // a damaged local image can be repaired with verified bytes
            if (localImage.hash !== await U.sha256Bytes(asset.blob)) throw new Error('A question image path was reused for different content. Replace the image in the editor and export again.');
        }

        await new Promise((resolve, reject) => {
            const tx = db.db.transaction(involvedStores, 'readwrite');
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error || new Error('Merge transaction failed'));
            tx.onabort = () => reject(tx.error || new Error('Merge transaction aborted'));
            try {
                for (const type of RECOGNIZED_CONTENT_KEYS) {
                    if (!decisions[type].length) continue;
                    const store = tx.objectStore(type);
                    for (const d of decisions[type]) {
                        if (d.action === 'add') { const rec = { ...d.record }; delete rec.id; store.add(rec); }
                        else store.put(d.record);
                    }
                }
                if (pendingAssetWrites.length) {
                    const assetStore = tx.objectStore('assets');
                    for (const a of pendingAssetWrites) assetStore.put(a);
                }
            } catch (error) {
                // A synchronous put/add error must also cancel earlier queued requests.
                // Rejecting the Promise alone would otherwise leave the transaction free to commit.
                try { tx.abort(); } catch (abortError) { /* already finished/aborted */ }
                reject(error);
            }
        });

        stats.imagesWritten = pendingAssetWrites.length;
        db._invalidateCache();
        return stats;
    }

    // ---------------------------------------------------------------
    // Student-facing orchestration
    // ---------------------------------------------------------------
    async function importUpdatePackage(file) {
        const t0 = (typeof performance !== 'undefined' ? performance.now() : Date.now());
        let parsed;
        try { parsed = await parsePackageFile(file); }
        catch (e) { return { success: false, stage: 'parse', message: e.message }; }

        const { manifest, database, databaseRawText, assets } = parsed;

        const structural = validatePackageStructure(manifest, database);
        if (!structural.valid) return { success: false, stage: 'validate', message: structural.errors.join(' '), errors: structural.errors };

        const checksumOk = await verifyChecksum(manifest, databaseRawText);
        if (!checksumOk) return { success: false, stage: 'checksum', message: "The package's checksum doesn't match its contents — it may be corrupted or was edited after export. Nothing was changed." };

        try { prepareQuestionAnswers(database.questions || []); }
        catch (questionError) { return { success: false, stage: 'questions', message: questionError.message }; }

        try { await U.validateQuestionImageAssets(manifest, database, assets); }
        catch (imageError) { return {success:false,stage:'images',message:imageError.message}; }

        const previousContentDbVersion = await db.getSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, todayVersionString());
        const compat = checkCompatibility(manifest, previousContentDbVersion);
        if (!compat.compatible) return { success: false, stage: 'compatibility', message: compat.errors.join(' '), errors: compat.errors };

        // From here on we're committed to either a full success or an explicit rollback.
        const snapshot = await captureFullSnapshot('pre-import:' + (manifest.packageId || 'unknown'));
        const backupId = await saveBackupRecord(snapshot);

        let stats;
        try {
            stats = await mergePackageIntoDb(manifest, database, assets);
        } catch (mergeErr) {
            try { await restoreFullSnapshot(snapshot); } catch (e2) { /* IndexedDB already didn't commit the failed writes either way */ }
            return { success: false, stage: 'merge', message: 'Import failed and was rolled back — nothing was changed: ' + mergeErr.message, backupId };
        }

        let taxonomyResult = { subjectsAdded: 0, chaptersAdded: 0 };
        if (database.taxonomy) { try { taxonomyResult = await mergeTaxonomy(database.taxonomy); } catch (e) { /* non-fatal */ } }

        let newContentDbVersion = previousContentDbVersion;
        if (manifest.targetDbVersion && compareVersions(manifest.targetDbVersion, previousContentDbVersion) > 0) {
            newContentDbVersion = manifest.targetDbVersion;
        }
        await db.setSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, newContentDbVersion);

        const appliedRaw = await db.getSetting(SETTINGS_KEYS.APPLIED_PACKAGES, '[]');
        let applied = []; try { applied = JSON.parse(appliedRaw); } catch (e) { applied = []; }
        applied.push({ packageId: manifest.packageId, packageVersion: manifest.packageVersion, appliedAt: new Date().toISOString() });
        await db.setSetting(SETTINGS_KEYS.APPLIED_PACKAGES, JSON.stringify(applied.slice(-100)));

        const durationMs = (typeof performance !== 'undefined' ? performance.now() : Date.now()) - t0;
        const received = RECOGNIZED_CONTENT_KEYS.reduce((sum, key) => sum + (Array.isArray(database[key]) ? database[key].length : 0), 0);
        const noNewContent = stats.added + stats.updated + (stats.imagesWritten || 0) === 0
            && taxonomyResult.subjectsAdded + taxonomyResult.chaptersAdded === 0;
        let message = '';
        if (!received) message = 'This package contains classification updates only; it contains no questions or other study content. Export a Full package from the manager to include them.';
        else if (noNewContent && stats.skipped) message = 'No new content was added. Some items were skipped because this device already has the same or a newer version. Export the corrected content with a newer package version.';
        else if (noNewContent && stats.errors.length) message = 'No new content was imported. Review the item errors below.';
        else if (noNewContent) message = 'No new content. This device already contains all items in this package.';
        const summary = {
            success: true, appliedAt: new Date().toISOString(),
            previousContentDbVersion, newContentDbVersion,
            packageVersion: manifest.packageVersion, packageId: manifest.packageId,
            added: stats.added, updated: stats.updated, skipped: stats.skipped, duplicates: stats.duplicates,
            imagesWritten: stats.imagesWritten || 0, received, noNewContent, message,
            errors: stats.errors, durationMs, warnings: compat.warnings, taxonomyResult, backupId
        };

        const historyRaw = await db.getSetting(SETTINGS_KEYS.IMPORT_HISTORY, '[]');
        let history = []; try { history = JSON.parse(historyRaw); } catch (e) { history = []; }
        history.push(summary);
        await db.setSetting(SETTINGS_KEYS.IMPORT_HISTORY, JSON.stringify(history.slice(-50)));

        return summary;
    }

    Object.assign(U, {
        parsePackageFile, validatePackageStructure, verifyChecksum, checkCompatibility, validateItemFields,
        mergePackageIntoDb, importUpdatePackage, RECOGNIZED_CONTENT_KEYS, ASSET_FOLDER
    });
})();

/* ============================================================================
   Part 3 — Export engine (admin: build & download a .entpkg)
   ============================================================================ */
(function () {
    'use strict';
    const U = window.__entUpdatePkg;
    const { genUid, sha256Hex, todayVersionString, compareVersions, SETTINGS_KEYS,
            APP_VERSION, PACKAGE_FORMAT_VERSION, CLASSIFICATION_POLICY_VERSION, SIGNATURE_NOTE, RECOGNIZED_CONTENT_KEYS, ASSET_FOLDER } = U;

    function versionToDate(v) {
        const parts = String(v || '').split('.').map(n => parseInt(n, 10));
        if (parts.length < 3 || parts.some(isNaN)) return null;
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    async function rawGetAll(storeName) {
        await db.ensureReady();
        if (!db.db.objectStoreNames.contains(storeName)) return [];
        return new Promise(resolve => {
            db.db.transaction(storeName, 'readonly').objectStore(storeName).getAll().onsuccess = e => resolve(e.target.result || []);
        });
    }

    async function gatherExportContent(mode, sinceVersion) {
        const sinceDate = mode === 'incremental' ? versionToDate(sinceVersion) : null;
        const inScope = (item) => {
            if (!sinceDate) return true;
            const ts = item.updatedAt || item.dateAdded;
            if (!ts) return false; // undated legacy item — treat as already-shipped, not "new"
            return new Date(ts) >= sinceDate;
        };

        // Classification is metadata, not a publication filter. Preserve labels and
        // review decisions while including Uncategorized and pending-review questions.
        const freeOnly = mode === 'free';
        const questions = (await db.getAllQuestions()).filter(inScope)
            .filter(question => !freeOnly || question.isFree === true).map(question => {
            const copy = { ...question };
            // Always explicit, so un-marking a question later also reaches students.
            copy.isFree = question.isFree === true;
            normalizeQuestionReferenceMetadata(copy);
            return copy;
        });
        const reviewPending = questions.filter(q => !isQuestionClassificationApproved(q)).length;
        // The free pack carries questions only; lectures, flashcards and books are subscriber content.
        const lectures = freeOnly ? [] : (await db.getAllLectures()).filter(inScope);
        const flashcards = freeOnly ? [] : (await rawGetAll('flashcards')).filter(inScope);
        const bookMeta = freeOnly ? [] : (await rawGetAll('bookMeta')).filter(inScope);

        let taxonomy = {};
        try { Object.keys(ENT_DATA).forEach(s => { taxonomy[s] = [...ENT_DATA[s]]; }); } catch (e) { taxonomy = {}; }

        return { questions, lectures, flashcards, bookMeta, taxonomy, reviewPending };
    }

    /** Assigns + persists a uid to any local item that doesn't have one yet (so future exports stay stable). */
    async function ensureLocalUidsAndStamp(items, storeName, packageVersion) {
        const toPersist = [];
        for (const it of items) {
            let changed = false;
            if (!it.uid) { it.uid = genUid(); changed = true; }
            if (it.pkgVersion !== packageVersion) { it.pkgVersion = packageVersion; changed = true; }
            if (changed) toPersist.push(it);
        }
        if (toPersist.length) {
            await db.ensureReady();
            await new Promise((resolve, reject) => {
                const tx = db.db.transaction(storeName, 'readwrite');
                const store = tx.objectStore(storeName);
                toPersist.forEach(it => store.put(it));
                tx.oncomplete = resolve;
                tx.onerror = () => reject(tx.error);
            });
        }
    }

    function stripLocalId(item) {
        const c = { ...item };
        delete c.id;
        return c;
    }

    async function collectAssetsFor(items, type) {
        const folder = ASSET_FOLDER[type] || 'assets';
        const out = []; // {path, blob}
        for (const item of items) {
            if (type === 'questions' && item.images != null && (!Array.isArray(item.images) || item.images.length > 8)) throw new Error('Question images must be a list with no more than 8 attachments.');
            if (!Array.isArray(item.images)) continue;
            if (type === 'questions' && item.images.length && !item.uid) throw new Error('Questions with images need a stable UID before export.');
            const seenPaths = new Set(), roleCounts = {question:0,explanation:0};
            for (const img of item.images) {
                const path = type === 'questions' ? U.questionImagePath(img) : (typeof img === 'string' ? img : img.path);
                if (!path) continue;
                if (type === 'questions') {
                    const role = typeof img === 'string' ? 'question' : (img.role || 'question');
                    if (++roleCounts[role] > 4) throw new Error('A question can include at most 4 question images and 4 explanation images.');
                    const archivePath=U.questionImageArchivePath(img);
                    if (seenPaths.has(archivePath)) throw new Error('A question lists the same image more than once.');
                    seenPaths.add(archivePath);
                }
                const assetKey = item.uid + '::' + path;
                const rec = await new Promise((resolve, reject) => {
                    const request = db.db.transaction('assets', 'readonly').objectStore('assets').get(assetKey);
                    request.onsuccess = e => resolve(e.target.result || null);
                    request.onerror = () => reject(request.error);
                });
                if (type === 'questions') {
                    if (!rec || !rec.blob) throw new Error('Cannot export a missing question image: '+path);
                    const checked = await U.validateRasterImage(rec.blob,img);
                    out.push({path:U.questionImageArchivePath(img),blob:checked.blob,hash:checked.hash,questionImage:true});
                } else if (rec && rec.blob) out.push({ path: path.includes('/') ? path : folder + '/' + path, blob: rec.blob });
            }
        }
        return out;
    }

    /** A correction must outrank every earlier publication, including exports on the same day. */
    async function nextExportVersion(requestedVersion) {
        const requested = String(requestedVersion || todayVersionString()).trim();
        if (!/^\d+(?:\.\d+)*$/.test(requested)) throw new Error('Package version must contain numbers separated by dots.');
        let highest = String(await db.getSetting(SETTINGS_KEYS.LAST_EXPORTED_VERSION, '0'));
        const contentVersion = String(await db.getSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, '0'));
        if (compareVersions(contentVersion, highest) > 0) highest = contentVersion;
        for (const storeName of RECOGNIZED_CONTENT_KEYS) {
            for (const item of await rawGetAll(storeName)) {
                if (item.pkgVersion && compareVersions(item.pkgVersion, highest) > 0) highest = String(item.pkgVersion);
            }
        }
        if (compareVersions(requested, highest) > 0) return requested;
        const parts = highest.split('.').map(n => parseInt(n, 10) || 0);
        if (parts.length <= 3) parts.push(1);
        else parts[parts.length - 1]++;
        return parts.join('.');
    }

    let exportBuildQueue = Promise.resolve();
    function buildEntpkg(options) {
        const pending = exportBuildQueue.then(() => buildEntpkgInternal(options));
        exportBuildQueue = pending.catch(() => {});
        return pending;
    }

    async function buildEntpkgInternal(options) {
        if (CLASSIFICATION_MODE !== 'admin' || typeof RBAC === 'undefined' || !RBAC.isAdmin()) {
            throw new Error('Admin access required to publish an update package.');
        }
        options = options || {};
        await db.ensureReady();
        const mode = options.mode === 'incremental' ? 'incremental' : options.mode === 'free' ? 'free' : 'full';
        const packageVersion = await nextExportVersion(options.packageVersion);
        const author = options.author || 'Abd alzuhairy';
        const content = await gatherExportContent(mode, options.sinceVersion);
        content.questions = prepareQuestionAnswers(content.questions);
        const contentCount = RECOGNIZED_CONTENT_KEYS.reduce((sum, key) => sum + (content[key] || []).length, 0);
        if (!contentCount) {
            throw new Error(mode === 'free'
                ? 'No questions are marked Free. Tap "Free" on the questions you want in the free version, then export again.'
                : mode === 'incremental'
                ? 'No new or modified content matches this incremental export. Choose Full to include all current content, or check the Since version.'
                : 'No content to export. Add questions, lectures, flashcards or book entries before creating an update package.');
        }
        const reviewPending = content.reviewPending || 0;
        const hasQuestionImages = content.questions.some(q => Array.isArray(q.images) && q.images.length);
        // Fail missing/invalid question images before stamping any publication version.
        const preparedQuestionAssets = await collectAssetsFor(content.questions, 'questions');
        // Older readers can reclassify authoritative JSON/Uncategorized metadata.
        const requiredAppVersion = '1.2.7';
        const minAppVersion = compareVersions(options.minAppVersion || '0', requiredAppVersion) > 0 ? options.minAppVersion : requiredAppVersion;

        await ensureLocalUidsAndStamp(content.questions, 'questions', packageVersion);
        await ensureLocalUidsAndStamp(content.lectures, 'lectures', packageVersion);
        await ensureLocalUidsAndStamp(content.flashcards, 'flashcards', packageVersion);
        await ensureLocalUidsAndStamp(content.bookMeta, 'bookMeta', packageVersion);
        db._invalidateCache();

        const databaseObj = {
            schemaVersion: PACKAGE_FORMAT_VERSION,
            classificationPolicyVersion: CLASSIFICATION_POLICY_VERSION,
            ...(hasQuestionImages ? {imageContentVersion:U.IMAGE_CONTENT_VERSION} : {}),
            questions: content.questions.map(stripLocalId),
            lectures: content.lectures.map(stripLocalId),
            flashcards: content.flashcards.map(stripLocalId),
            bookMeta: content.bookMeta.map(stripLocalId),
            taxonomy: content.taxonomy
        };
        const databaseRawText = JSON.stringify(databaseObj);
        const checksum = await sha256Hex(databaseRawText);

        const manifest = {
            packageId: genUid(),
            packageVersion,
            createdAt: new Date().toISOString(),
            author,
            minAppVersion,
            targetDbVersion: packageVersion,
            baseDbVersion: mode === 'incremental' ? (options.sinceVersion || null) : null,
            exportType: mode,
            schemaVersion: PACKAGE_FORMAT_VERSION,
            classificationPolicyVersion: CLASSIFICATION_POLICY_VERSION,
            classificationSummary: { included: content.questions.length, approved: content.questions.length - reviewPending, pendingReview: reviewPending },
            ...(hasQuestionImages ? {imageContentVersion:U.IMAGE_CONTENT_VERSION,assetChecksums:{}} : {}),
            checksum,
            signature: { algorithm: null, value: null, placeholder: true, note: SIGNATURE_NOTE },
            contentSummary: {
                questions: databaseObj.questions.length,
                lectures: databaseObj.lectures.length,
                flashcards: databaseObj.flashcards.length,
                bookMeta: databaseObj.bookMeta.length,
                pendingReview: reviewPending
            }
        };

        const zip = new JSZip();
        zip.file('manifest.json', JSON.stringify(manifest, null, 2));
        zip.file('database.json', databaseRawText);
        for (const folder of ['images', 'summaries', 'flashcards', 'books', 'assets']) zip.folder(folder);

        let imageCount = 0;
        const archiveHashes = new Map();
        for (const [items, type] of [[content.questions, 'questions'], [content.lectures, 'lectures'], [content.flashcards, 'flashcards'], [content.bookMeta, 'bookMeta']]) {
            const assetList = type === 'questions' ? preparedQuestionAssets : await collectAssetsFor(items, type);
            for (const a of assetList) {
                const bytes = a.blob.arrayBuffer ? await a.blob.arrayBuffer() : a.blob;
                const hash = a.hash || await U.sha256Bytes(bytes);
                if (archiveHashes.has(a.path)) {
                    if (archiveHashes.get(a.path) !== hash) throw new Error('Conflicting asset files share the path '+a.path);
                    if (a.questionImage) manifest.assetChecksums[a.path] = hash;
                    continue;
                }
                archiveHashes.set(a.path,hash);
                zip.file(a.path, bytes);
                if (a.questionImage) manifest.assetChecksums[a.path] = hash;
                imageCount++;
            }
        }
        manifest.contentSummary.images = imageCount;
        zip.file('manifest.json', JSON.stringify(manifest, null, 2)); // rewrite with final image count

        // STORE (no DEFLATE): see the file header note — this app's own vendored zip writer
        // only checks out reliably in uncompressed mode; reading DEFLATE-compressed zips still
        // works fine, this only affects files this app itself produces.
        const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });

        await db.setSetting(SETTINGS_KEYS.LAST_EXPORTED_VERSION, packageVersion);

        // Exporting is a version-defining event for the admin's own copy too.
        const currentLocal = await db.getSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, todayVersionString());
        if (compareVersions(packageVersion, currentLocal) > 0) await db.setSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, packageVersion);

        return { blob, manifest, sizeBytes: blob.size, reviewPending };
    }

    async function exportUpdatePackage(options) {
        const result = await buildEntpkg(options);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(result.blob);
        a.download = options && options.mode === 'free' ? 'free-pack.entpkg' : `ent-update-${result.manifest.packageVersion}.entpkg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return result;
    }

    Object.assign(U, { versionToDate, gatherExportContent, nextExportVersion, buildEntpkg, exportUpdatePackage });
})();

/* ============================================================================
   Part 4 — Settings UI, event wiring, init
   ============================================================================ */
(function () {
    'use strict';
    const U = window.__entUpdatePkg;
    const { compareVersions, todayVersionString, formatBytes, formatDuration, SETTINGS_KEYS,
            APP_VERSION, SIGNATURE_NOTE, importUpdatePackage, exportUpdatePackage,
            listBackups, getBackup, restoreFullSnapshot, captureFullSnapshot, saveBackupRecord,
            ensureUidsBackfilled, reapplyStoredTaxonomy } = U;

    function esc(s) {
        const text = String(s == null ? '' : s);
        return typeof escapeHTML === 'function' ? escapeHTML(text) : text.replace(/[&<>"']/g, char => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[char]);
    }

    async function rawCount(storeName) {
        await db.ensureReady();
        if (!db.db.objectStoreNames.contains(storeName)) return 0;
        return new Promise(resolve => {
            const req = db.db.transaction(storeName, 'readonly').objectStore(storeName).count();
            req.onsuccess = () => resolve(req.result);
        });
    }

    // ---------------------------------------------------------------
    // "Update Complete" result panel
    // ---------------------------------------------------------------
    function renderImportResultHTML(r) {
        if (!r.success) {
            const errList = (r.errors || []).slice(0, 6).map(e => `<li>${esc(e)}</li>`).join('');
            return `
            <div class="card" style="border-color:var(--danger);">
              <div class="card-header" style="color:var(--danger);">${uiIcon("x")} Import Failed</div>
              <p style="font-size:0.9rem;">${esc(r.message)}</p>
              ${errList ? `<ul style="font-size:0.82rem;color:var(--text2);margin:8px 0 0 18px;">${errList}</ul>` : ''}
              <p style="font-size:0.8rem;color:var(--text-muted);margin-top:10px;">No data was changed.</p>
            </div>`;
        }
        const itemErrors = (r.errors || []);
        const errRows = itemErrors.slice(0, 6).map(e => `<li>${esc(e.type)} ${e.uid ? '(' + esc(e.uid).slice(0, 8) + '…)' : ''}: ${esc(e.reason)}</li>`).join('');
        const moreErr = itemErrors.length > 6 ? `<li>…and ${itemErrors.length - 6} more</li>` : '';
        const warnRows = (r.warnings || []).map(w => `<p style="font-size:0.8rem;color:var(--warning,#b45309);">${uiIcon("alert")} ${esc(w)}</p>`).join('');
        const noNewContent = r.noNewContent === true;
        const taxLine = (r.taxonomyResult && (r.taxonomyResult.subjectsAdded || r.taxonomyResult.chaptersAdded))
            ? `<div class="stat-row"><span>New subjects/chapters</span><b>${r.taxonomyResult.subjectsAdded} / ${r.taxonomyResult.chaptersAdded}</b></div>` : '';
        return `
        <div class="card" style="border-color:var(--success,#16a34a);">
          <div class="card-header" style="color:var(--success,#16a34a);">${uiIcon(noNewContent ? "info" : "check")} ${noNewContent ? 'No New Content' : 'Update Complete'}</div>
          ${r.message ? `<p style="font-size:0.9rem;">${esc(r.message)}</p>` : ''}
          ${warnRows}
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:0.88rem;margin-top:6px;">
            <div>Database version</div><b style="text-align:right;">${esc(r.newContentDbVersion)}</b>
            <div>Previous version</div><b style="text-align:right;">${esc(r.previousContentDbVersion)}</b>
            <div>Package version</div><b style="text-align:right;">${esc(r.packageVersion)}</b>
          </div>
          <hr style="border:none;border-top:1px solid var(--border);margin:12px 0;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:0.88rem;">
            <div>Added</div><b style="text-align:right;color:var(--success,#16a34a);">${r.added}</b>
            <div>Updated</div><b style="text-align:right;">${r.updated}</b>
            <div>Skipped</div><b style="text-align:right;">${r.skipped}</b>
            <div>Duplicates</div><b style="text-align:right;">${r.duplicates}</b>
            <div>Images saved or repaired</div><b style="text-align:right;">${r.imagesWritten || 0}</b>
            <div>Errors</div><b style="text-align:right;color:${itemErrors.length ? 'var(--danger)' : 'inherit'};">${itemErrors.length}</b>
          </div>
          ${taxLine ? `<div style="margin-top:8px;font-size:0.85rem;">${taxLine}</div>` : ''}
          ${errRows ? `<ul style="font-size:0.78rem;color:var(--text2);margin:10px 0 0 18px;">${errRows}${moreErr}</ul>` : ''}
          <p style="font-size:0.78rem;color:var(--text-muted);margin-top:10px;">Import took ${esc(formatDuration(r.durationMs))}. A backup was taken automatically before this import.</p>
        </div>`;
    }

    // ---------------------------------------------------------------
    // Main Settings view
    // ---------------------------------------------------------------
    async function renderSettings() {
        await db.ensureReady();
        await ensureUidsBackfilled();
        const isAdmin = (typeof RBAC !== 'undefined') && RBAC.isAdmin();
        const contentDbVersion = await db.getSetting(SETTINGS_KEYS.CONTENT_DB_VERSION, todayVersionString());

        const importCard = `
        <div class="card">
          <div class="card-header">${uiIcon("import")} Import Update</div>
          <p style="font-size:0.85rem;color:var(--text2);margin-bottom:10px;">
            Add new or updated questions, summaries, flashcards and more from an update package.
            Your bookmarks, notes, progress and stats are never touched.
          </p>
          <input type="file" id="importUpdateFile" accept=".entpkg,.zip,.json">
          <button class="btn btn-primary btn-block mt-2" id="btnRunImportUpdate">${uiIcon("import")} Import Update</button>
          <div id="importUpdateResult" style="margin-top:12px;"></div>
        </div>`;

        const aboutCard = `
        <div class="card">
          <div class="card-header">${uiIcon("info")} About</div>
          <div style="font-size:0.88rem;line-height:1.8;">
            <div style="font-weight:700;font-size:1rem;">Adam ENT Master Bank</div>
            <div style="color:var(--text2);margin-bottom:10px;">Offline ENT question bank and exam preparation platform.</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;">
              <div>Version</div><b style="text-align:right;">${esc(APP_VERSION)}</b>
              <div>Developer</div><b style="text-align:right;">Abd alzuhairy</b>
              <div>Contact</div><b style="text-align:right;"><a href="mailto:your-email@example.com" style="color:var(--primary);text-decoration:none;">your-email@example.com</a></b>
            </div>
          </div>
        </div>`;

        if (!isAdmin) {
            return `<div class="view-header"><h2>${uiIcon("settings")} Settings</h2></div>` + importCard + aboutCard;
        }

        // --- Admin-only sections below ---
        const counts = {
            questions: await rawCount('questions'), lectures: await rawCount('lectures'),
            flashcards: await rawCount('flashcards'), bookMeta: await rawCount('bookMeta')
        };
        const questionPublication = await U.gatherExportContent('full');
        const defaultPackageVersion = await U.nextExportVersion();
        const historyRaw = await db.getSetting(SETTINGS_KEYS.IMPORT_HISTORY, '[]');
        let history = []; try { history = JSON.parse(historyRaw); } catch (e) { history = []; }
        const recentHistory = history.slice(-5).reverse();
        const historyRows = recentHistory.length ? recentHistory.map(h => `
            <div style="display:flex;justify-content:space-between;font-size:0.8rem;padding:4px 0;border-bottom:1px solid var(--border);">
              <span>${esc(h.packageVersion)} → v${esc(h.newContentDbVersion)}</span>
              <span style="color:var(--text-muted);">+${esc(h.added)} / ~${esc(h.updated)} · ${h.appliedAt ? new Date(h.appliedAt).toLocaleDateString() : ''}</span>
            </div>`).join('') : `<p style="font-size:0.8rem;color:var(--text-muted);">No imports yet on this device.</p>`;

        const exportCard = `
        <div class="card">
          <div class="card-header">${uiIcon("export")} Export Update Package</div>
          <p style="font-size:0.85rem;color:var(--text2);">Full export includes <b>${questionPublication.questions.length}</b> questions, including <b>${questionPublication.reviewPending || 0}</b> Uncategorized or awaiting classification review. Source classifications and review flags are preserved. Invalid question or answer data must be corrected before export.</p>
          <button class="btn btn-outline btn-block mt-2" id="btnDownloadClassificationGuide">${uiIcon("download")} Download Classification Guide (JSON)</button>
          <p style="font-size:0.8rem;color:var(--text-muted);margin:8px 0;">Attach this guide with the MCQ book and your import prompt so classification uses the subjects, chapters and topics currently available in this app.</p>
          <label class="modal-field">Package type
            <select id="exportMode">
              <option value="full">Full (all current content)</option>
              <option value="incremental">Incremental (only new/modified)</option>
            </select>
          </label>
          <div id="exportSinceWrap" style="display:none;">
            <label class="modal-field">Since version
              <input type="text" id="exportSinceVersion" placeholder="e.g. ${esc(contentDbVersion)}" value="${esc(contentDbVersion)}">
            </label>
          </div>
          <label class="modal-field">Package version
            <input type="text" id="exportPackageVersion" value="${esc(defaultPackageVersion)}">
          </label>
          <label class="modal-field">Author
            <input type="text" id="exportAuthor" value="Abd alzuhairy">
          </label>
          <button class="btn btn-accent btn-block mt-2" id="btnRunExportUpdate">${uiIcon("export")} Export Update Package (.entpkg)</button>
          <div id="exportUpdateResult" style="margin-top:12px;font-size:0.82rem;color:var(--text2);"></div>
          <hr style="border:none;border-top:1px solid var(--border);margin:14px 0;">
          <p style="font-size:0.85rem;color:var(--text2);"><b>Free version:</b> <b>${questionPublication.questions.filter(q => q.isFree === true).length}</b> question(s) are marked Free. This exports only those as <code>free-pack.entpkg</code>. Put that file next to <code>index.html</code> in the Student app before publishing it.</p>
          <button class="btn btn-outline btn-block" id="btnRunExportFree">${uiIcon("export")} Export Free Pack (free-pack.entpkg)</button>
          <div id="exportFreeResult" style="margin-top:12px;font-size:0.82rem;color:var(--text2);"></div>
        </div>`;

        const dbVersionCard = `
        <div class="card">
          <div class="card-header">${uiIcon("database")} Database Version</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:0.88rem;">
            <div>App version</div><b style="text-align:right;">${esc(APP_VERSION)}</b>
            <div>Database (content) version</div><b style="text-align:right;">${esc(contentDbVersion)}</b>
          </div>
          <hr style="border:none;border-top:1px solid var(--border);margin:12px 0;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 14px;font-size:0.85rem;">
            <div>Questions</div><b style="text-align:right;">${counts.questions}</b>
            <div>Lectures / Summaries</div><b style="text-align:right;">${counts.lectures}</b>
            <div>Flashcards</div><b style="text-align:right;">${counts.flashcards}</b>
            <div>Book metadata</div><b style="text-align:right;">${counts.bookMeta}</b>
          </div>
          <hr style="border:none;border-top:1px solid var(--border);margin:12px 0;">
          <div style="font-size:0.85rem;color:var(--text2);margin-bottom:4px;">Recent imports on this device</div>
          ${historyRows}
        </div>`;

        const backupCard = `
        <div class="card">
          <div class="card-header">${uiIcon("save")} Backup Database</div>
          <p style="font-size:0.85rem;color:var(--text2);margin-bottom:10px;">
            Downloads a complete backup file (content + your bookmarks/notes/progress) and keeps a copy on this device.
          </p>
          <button class="btn btn-success btn-block" id="btnRunBackup">${uiIcon("save")} Create Backup Now</button>
          <div id="backupResult" style="margin-top:10px;font-size:0.82rem;color:var(--text2);"></div>
        </div>`;

        const backupsListHTML = await renderBackupsListHTML();
        const restoreCard = `
        <div class="card">
          <div class="card-header">${uiIcon("restore")} Restore Backup</div>
          <p style="font-size:0.85rem;color:var(--text2);margin-bottom:10px;">
            Replaces <b>all</b> data on this device with a backup. This can't be undone.
          </p>
          <div id="backupsListWrap">${backupsListHTML}</div>
          <div style="margin-top:12px;">
            <label class="modal-field">Or restore from a downloaded backup file
              <input type="file" id="restoreBackupFile" accept=".json">
            </label>
            <button class="btn btn-outline btn-block" id="btnRestoreFromFile">${uiIcon("restore")} Restore From File</button>
          </div>
        </div>`;

        return `<div class="view-header"><h2>${uiIcon("settings")} Settings</h2></div>` +
            importCard + exportCard + (window.EntCloudAdmin ? window.EntCloudAdmin.cardHTML() : '') + dbVersionCard + backupCard + restoreCard + aboutCard;
    }

    async function renderBackupsListHTML() {
        const backups = (await listBackups()).slice().reverse(); // newest first
        if (!backups.length) return `<p style="font-size:0.8rem;color:var(--text-muted);">No backups on this device yet.</p>`;
        return backups.slice(0, 8).map(b => {
            const when = new Date(b.takenAt).toLocaleString();
            const reason = b.reason && b.reason.startsWith('pre-import') ? 'auto (before an import)' : 'manual';
            return `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);">
              <div style="font-size:0.82rem;">
                <div>${esc(when)}</div>
                <div style="color:var(--text-muted);">${esc(reason)} · v${esc(b.contentDbVersion)}</div>
              </div>
              <button class="btn btn-sm btn-outline restore-backup-btn" data-backup-id="${b.id}">Restore</button>
            </div>`;
        }).join('');
    }

    // ---------------------------------------------------------------
    // Event wiring
    // ---------------------------------------------------------------
    async function attachSettingsListeners() {
        const importBtn = document.getElementById('btnRunImportUpdate');
        if (!importBtn) return; // not currently showing the Settings view

        importBtn.addEventListener('click', async () => {
            const fileInput = document.getElementById('importUpdateFile');
            const resultBox = document.getElementById('importUpdateResult');
            const file = fileInput && fileInput.files[0];
            if (!file) { showToast('Choose an .entpkg, .zip, or .json update package first.', 'warning'); return; }
            importBtn.disabled = true;
            const originalLabel = importBtn.innerHTML;
            importBtn.innerHTML = (uiIcon("clock") + " Validating…");
            resultBox.innerHTML = '';
            try {
                const result = await importUpdatePackage(file);
                resultBox.innerHTML = renderImportResultHTML(result);
                if (result.success) {
                    showToast(result.noNewContent ? (result.message || 'No new content in this package.') : `Update applied: +${result.added} added, ${result.updated} updated.`, result.noNewContent ? 'info' : 'success');
                    fileInput.value = '';
                } else {
                    showToast('Import failed: ' + result.message, 'error');
                }
            } catch (e) {
                resultBox.innerHTML = renderImportResultHTML({ success: false, message: 'Unexpected error: ' + e.message });
                showToast('Import failed: ' + e.message, 'error');
                console.error('Import update error', e);
            } finally {
                importBtn.disabled = false;
                importBtn.innerHTML = originalLabel;
            }
        });

        // --- Admin-only wiring below (elements simply won't exist for students) ---
        const guideBtn = document.getElementById('btnDownloadClassificationGuide');
        if (guideBtn) guideBtn.addEventListener('click', async () => {
            try {
                await ClassificationGuide.download();
            } catch (error) {
                showToast('Could not download the classification guide: ' + error.message, 'error');
            }
        });

        const exportModeSel = document.getElementById('exportMode');
        if (exportModeSel) {
            exportModeSel.addEventListener('change', () => {
                const wrap = document.getElementById('exportSinceWrap');
                if (wrap) wrap.style.display = exportModeSel.value === 'incremental' ? 'block' : 'none';
            });
        }

        const exportBtn = document.getElementById('btnRunExportUpdate');
        if (exportBtn) {
            exportBtn.addEventListener('click', async () => {
                if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
                const mode = document.getElementById('exportMode').value;
                const packageVersion = (document.getElementById('exportPackageVersion').value || '').trim() || todayVersionString();
                const author = (document.getElementById('exportAuthor').value || '').trim() || 'Abd alzuhairy';
                const sinceVersion = (document.getElementById('exportSinceVersion').value || '').trim();
                const resultBox = document.getElementById('exportUpdateResult');
                exportBtn.disabled = true;
                const originalLabel = exportBtn.innerHTML;
                exportBtn.innerHTML = (uiIcon("clock") + " Building package…");
                try {
                    const result = await exportUpdatePackage({ mode, packageVersion, author, sinceVersion });
                    const c = result.manifest.contentSummary;
                    document.getElementById('exportPackageVersion').value = await U.nextExportVersion();
                    resultBox.innerHTML = `${uiIcon("check")} Exported <b>${esc(result.manifest.packageVersion)}</b> (${formatBytes(result.sizeBytes)}) —
                        ${c.questions} questions, ${c.lectures} lectures, ${c.flashcards} flashcards, ${c.bookMeta} book entries, ${c.images} images.
                        <br><b>${result.reviewPending || 0}</b> included question(s) are Uncategorized or awaiting classification review; their review flags are unchanged.`;
                    showToast('Update package downloaded.', 'success');
                } catch (e) {
                    resultBox.innerHTML = `<span style="color:var(--danger);">Export failed: ${esc(e.message)}</span>`;
                    showToast('Export failed: ' + e.message, 'error');
                    console.error('Export update error', e);
                } finally {
                    exportBtn.disabled = false;
                    exportBtn.innerHTML = originalLabel;
                }
            });
        }

        if (window.EntCloudAdmin) window.EntCloudAdmin.wire();

        const exportFreeBtn = document.getElementById('btnRunExportFree');
        if (exportFreeBtn) {
            exportFreeBtn.addEventListener('click', async () => {
                if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
                const resultBox = document.getElementById('exportFreeResult');
                exportFreeBtn.disabled = true;
                const originalLabel = exportFreeBtn.innerHTML;
                exportFreeBtn.innerHTML = (uiIcon("clock") + " Building free pack…");
                try {
                    const result = await exportUpdatePackage({ mode: 'free' });
                    const c = result.manifest.contentSummary;
                    resultBox.innerHTML = `${uiIcon("check")} Exported <b>free-pack.entpkg</b> (${formatBytes(result.sizeBytes)}) — ${c.questions} free questions, ${c.images} images.`;
                    showToast('Free pack downloaded.', 'success');
                } catch (e) {
                    resultBox.innerHTML = `<span style="color:var(--danger);">Export failed: ${esc(e.message)}</span>`;
                    showToast('Export failed: ' + e.message, 'error');
                } finally {
                    exportFreeBtn.disabled = false;
                    exportFreeBtn.innerHTML = originalLabel;
                }
            });
        }

        const backupBtn = document.getElementById('btnRunBackup');
        if (backupBtn) {
            backupBtn.addEventListener('click', async () => {
                if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
                const resultBox = document.getElementById('backupResult');
                backupBtn.disabled = true;
                try {
                    const snapshot = await captureFullSnapshot('manual');
                    await saveBackupRecord(snapshot);
                    const blob = new Blob([JSON.stringify(snapshot.data)], { type: 'application/json' });
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = `ent-backup-${new Date().toISOString().slice(0, 10)}.json`;
                    document.body.appendChild(a); a.click(); a.remove();
                    resultBox.textContent = `Backup saved and downloaded (${formatBytes(blob.size)}).`;
                    showToast('Backup created.', 'success');
                    const wrap = document.getElementById('backupsListWrap');
                    if (wrap) wrap.innerHTML = await renderBackupsListHTML();
                    attachRestoreButtons();
                } catch (e) {
                    resultBox.textContent = 'Backup failed: ' + e.message;
                    showToast('Backup failed: ' + e.message, 'error');
                } finally {
                    backupBtn.disabled = false;
                }
            });
        }

        function attachRestoreButtons() {
            document.querySelectorAll('.restore-backup-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
                    if (!confirm('Replace ALL data on this device with this backup? This cannot be undone.')) return;
                    try {
                        const snapshot = await getBackup(parseInt(btn.dataset.backupId, 10));
                        if (!snapshot) { showToast('Backup not found.', 'error'); return; }
                        await restoreFullSnapshot(snapshot);
                        await reapplyStoredTaxonomy();
                        showToast('Database restored.', 'success');
                        navigateTo('settings');
                    } catch (e) {
                        showToast('Restore failed: ' + e.message, 'error');
                        console.error('Restore backup error', e);
                    }
                });
            });
        }
        attachRestoreButtons();

        const restoreFileBtn = document.getElementById('btnRestoreFromFile');
        if (restoreFileBtn) {
            restoreFileBtn.addEventListener('click', async () => {
                if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
                const fileInput = document.getElementById('restoreBackupFile');
                const file = fileInput && fileInput.files[0];
                if (!file) { showToast('Choose a backup .json file first.', 'warning'); return; }
                try {
                    const text = await file.text();
                    const data = JSON.parse(text);
                    if (!confirm(`Restore ${data.questions ? data.questions.length : 0} questions and all other data from this file? This replaces everything currently on this device.`)) return;
                    await db.restoreSnapshotData(data);
                    showToast('Database restored from file.', 'success');
                    navigateTo('settings');
                } catch (e) {
                    showToast('Restore failed: ' + e.message, 'error');
                    console.error('Restore from file error', e);
                }
            });
        }
    }

    // ---------------------------------------------------------------
    // Init
    // ---------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            await db.ensureReady();
            await ensureUidsBackfilled();
            await reapplyStoredTaxonomy();
        } catch (e) { console.error('Update Package System init error:', e); }
    });

    window.renderSettings = renderSettings;
    window.attachSettingsListeners = attachSettingsListeners;
})();
