/* Adam ENT (Admin) - cloud publishing.
 *
 * Signs you in to Firebase with an account that is listed in the `admins` collection and publishes
 * the FULL question bank so subscribed students can download it:
 *
 *   packs/main                       -> small document: version, size, checksum, chunk count
 *   packs/main/chunks/<prefix>_0000  -> the compressed package, split into ~600 KB pieces
 *
 * Firestore rules only let active subscribers (and admins) read the chunks. Publishing again
 * replaces the previous version's chunks after the new ones are in place.
 */
(function () {
  'use strict';

  var CFG = window.ENT_FIREBASE || {};
  var CONFIGURED = !!(CFG.apiKey && CFG.projectId);
  var SESSION_KEY = 'ent_admin_cloud_session_v1';
  var INFO_KEY = 'ent_admin_cloud_info_v1';
  var CHUNK_BYTES = 600 * 1024;
  var REFRESH_MARGIN_MS = 60 * 1000;
  var FS = 'https://firestore.googleapis.com/v1/projects/' + encodeURIComponent(CFG.projectId || '') + '/databases/(default)/documents';
  var busy = false;

  /* ------------------------------------------------------------------ storage */

  function load(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (e) { return null; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function drop(key) { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }

  /* ------------------------------------------------------------------ http */

  function cloudError(code, extra) {
    var e = new Error(code);
    e.code = code;
    if (extra) Object.assign(e, extra);
    return e;
  }

  async function request(url, options) {
    var res;
    try { res = await fetch(url, options); } catch (e) { throw cloudError('NETWORK'); }
    var data = null;
    try { data = await res.json(); } catch (e) { data = null; }
    if (!res.ok) {
      var raw = (data && data.error && (data.error.message || data.error.status)) || ('HTTP_' + res.status);
      throw cloudError(String(raw).split(/[\s:]/)[0], { status: res.status });
    }
    return data;
  }

  function authHeaders(token, json) {
    var h = { Authorization: 'Bearer ' + token };
    if (json) h['Content-Type'] = 'application/json';
    return h;
  }

  function friendly(e) {
    switch (e && e.code) {
      case 'NETWORK': return 'No internet connection.';
      case 'NOT_ADMIN': return 'This account is not an admin. Add its UID to the admins collection in Firebase first.';
      case 'INVALID_LOGIN_CREDENTIALS':
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD': return 'Wrong email or password.';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER': return 'Too many attempts. Try again in a few minutes.';
      case 'PERMISSION_DENIED': return 'Firestore refused the request. Check that the rules are published and this account is an admin.';
      default: return (e && e.message) || 'Something went wrong.';
    }
  }

  /* ------------------------------------------------------------------ session */

  async function signIn(email, password) {
    var data = await request('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + encodeURIComponent(CFG.apiKey), {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: String(email).trim(), password: password, returnSecureToken: true })
    });
    // Only accounts listed in /admins/{uid} may publish.
    try {
      await request(FS + '/admins/' + encodeURIComponent(data.localId), { headers: authHeaders(data.idToken) });
    } catch (e) {
      if (e.status === 404 || e.status === 403) throw cloudError('NOT_ADMIN');
      throw e;
    }
    var s = { uid: data.localId, email: String(email).trim(), idToken: data.idToken, refreshToken: data.refreshToken,
      expiresAt: Date.now() + Number(data.expiresIn || 3600) * 1000 };
    save(SESSION_KEY, s);
    return s;
  }

  async function token() {
    var s = load(SESSION_KEY);
    if (!s) throw cloudError('NOT_SIGNED_IN');
    if (s.expiresAt - Date.now() > REFRESH_MARGIN_MS) return s.idToken;
    var d = await request('https://securetoken.googleapis.com/v1/token?key=' + encodeURIComponent(CFG.apiKey), {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(s.refreshToken)
    });
    s = Object.assign({}, s, { idToken: d.id_token, refreshToken: d.refresh_token || s.refreshToken,
      expiresAt: Date.now() + Number(d.expires_in || 3600) * 1000 });
    save(SESSION_KEY, s);
    return s.idToken;
  }

  function signOut() { drop(SESSION_KEY); }

  /* ------------------------------------------------------------------ publishing */

  function hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }

  function bytesToB64(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }

  function pad(i) { return String(i).padStart(4, '0'); }
  function sv(v) { return { stringValue: String(v) }; }
  function iv(v) { return { integerValue: String(v) }; }

  function parseMeta(doc) {
    var f = (doc && doc.fields) || {};
    var n = function (x) { return x && x.integerValue != null ? Number(x.integerValue) : 0; };
    var s = function (x) { return x && x.stringValue != null ? x.stringValue : ''; };
    return { version: s(f.version), prefix: s(f.prefix), chunkCount: n(f.chunkCount), gzBytes: n(f.gzBytes),
      rawBytes: n(f.rawBytes), questions: n(f.questions), updatedAt: f.updatedAt && f.updatedAt.timestampValue || '' };
  }

  async function readMeta(tk) {
    try { return parseMeta(await request(FS + '/packs/main', { headers: authHeaders(tk) })); }
    catch (e) { if (e.status === 404) return null; throw e; }
  }

  async function publish(progress) {
    var U = window.__entUpdatePkg;
    if (!U || typeof U.buildEntpkg !== 'function') throw cloudError('TOOLS', { message: 'The update tools are not ready yet.' });
    progress('Building the full package...');
    var built = await U.buildEntpkg({ mode: 'full' });
    var version = built.manifest.packageVersion;
    var raw = new Uint8Array(await built.blob.arrayBuffer());

    progress('Compressing...');
    var gz = new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());
    var sha = hex(await crypto.subtle.digest('SHA-256', gz));
    var prefix = 'v' + String(version).replace(/[^A-Za-z0-9]/g, '');
    var count = Math.max(1, Math.ceil(gz.length / CHUNK_BYTES));

    var tk = await token();
    var previous = await readMeta(tk);

    for (var i = 0; i < count; i++) {
      progress('Uploading ' + (i + 1) + ' / ' + count + '...');
      var part = gz.subarray(i * CHUNK_BYTES, Math.min(gz.length, (i + 1) * CHUNK_BYTES));
      await request(FS + '/packs/main/chunks/' + prefix + '_' + pad(i), {
        method: 'PATCH', headers: authHeaders(tk, true),
        body: JSON.stringify({ fields: { prefix: sv(prefix), i: iv(i), data: { bytesValue: bytesToB64(part) } } })
      });
    }

    progress('Publishing...');
    var updatedAt = new Date().toISOString();
    var questions = built.manifest.contentSummary.questions;
    await request(FS + '/packs/main', {
      method: 'PATCH', headers: authHeaders(tk, true),
      body: JSON.stringify({ fields: { version: sv(version), prefix: sv(prefix), chunkCount: iv(count), gzBytes: iv(gz.length),
        rawBytes: iv(raw.length), sha256: sv(sha), questions: iv(questions), updatedAt: { timestampValue: updatedAt } } })
    });

    // The new version is live; remove the previous version's chunks (best effort).
    if (previous && previous.prefix && previous.prefix !== prefix) {
      for (var j = 0; j < previous.chunkCount; j++) {
        try { await request(FS + '/packs/main/chunks/' + previous.prefix + '_' + pad(j), { method: 'DELETE', headers: authHeaders(tk) }); }
        catch (e) { /* leftover chunk is harmless */ }
      }
    }

    var info = { version: version, questions: questions, gzBytes: gz.length, rawBytes: raw.length, chunkCount: count, updatedAt: updatedAt };
    save(INFO_KEY, info);
    return info;
  }

  /* ------------------------------------------------------------------ student accounts */

  var pageSize = 300;
  var accounts = [];

  function tsMs(f) { return f && f.timestampValue ? Date.parse(f.timestampValue) : null; }
  function strOf(f) { return f && f.stringValue != null ? f.stringValue : ''; }

  function parseUser(doc) {
    var f = doc.fields || {};
    return {
      uid: String(doc.name || '').split('/').pop(),
      identifier: strOf(f.identifier) || '(no name)',
      createdAt: tsMs(f.createdAt) || 0,
      plan: strOf(f.plan) || 'none',
      expiresAt: tsMs(f.expiresAt)
    };
  }

  // Reads every student profile (one Firestore read each, so load on demand, not automatically).
  async function loadAccounts(progress) {
    var tk = await token();
    var out = [];
    var pageToken = '';
    do {
      var url = FS + '/users?pageSize=' + pageSize + (pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : '');
      var d = await request(url, { headers: authHeaders(tk) });
      (d.documents || []).forEach(function (doc) { out.push(parseUser(doc)); });
      pageToken = d.nextPageToken || '';
      if (progress) progress('Loaded ' + out.length + ' account(s)...');
    } while (pageToken && out.length < 5000);
    accounts = out.sort(function (a, b) { return b.createdAt - a.createdAt; });
    return accounts;
  }

  function fmtDay(ms) {
    return new Date(ms).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function accessOf(a) {
    if (a.plan === 'none' || !a.expiresAt) return { kind: 'free', text: 'Free (no subscription)' };
    var days = Math.ceil((a.expiresAt - Date.now()) / 86400000);
    if (a.expiresAt > Date.now()) return { kind: 'active', text: 'Active until ' + fmtDay(a.expiresAt) + ' (' + days + (days === 1 ? ' day' : ' days') + ' left)' };
    return { kind: 'expired', text: 'Expired on ' + fmtDay(a.expiresAt) };
  }

  function addMonths(ms, n) {
    var d = new Date(ms);
    d.setMonth(d.getMonth() + n);
    return d.getTime();
  }

  async function saveAccess(a, plan, expiresAt) {
    var tk = await token();
    await request(FS + '/users/' + encodeURIComponent(a.uid) + '?updateMask.fieldPaths=plan&updateMask.fieldPaths=expiresAt', {
      method: 'PATCH', headers: authHeaders(tk, true),
      body: JSON.stringify({ fields: { plan: sv(plan), expiresAt: expiresAt ? { timestampValue: new Date(expiresAt).toISOString() } : { nullValue: null } } })
    });
    a.plan = plan;
    a.expiresAt = expiresAt || null;
  }

  // +N months counts from the current expiry while the account is still active, otherwise from today.
  function extendAccount(a, months, label) {
    var base = a.expiresAt && a.expiresAt > Date.now() ? a.expiresAt : Date.now();
    return saveAccess(a, label, addMonths(base, months));
  }

  function acctMsg(text, isError) {
    var el = document.getElementById('entAcctMsg');
    if (!el) return;
    el.textContent = text || '';
    el.style.color = isError ? 'var(--danger)' : 'var(--text2)';
  }

  function accountsCardHTML() {
    return '<div class="card"><div class="card-header">Student accounts</div>' +
      '<p style="font-size:0.85rem;color:var(--text2);">Every account that signs up appears here. Activate it for as long as you agree with the student; the app unlocks the question bank on their next launch.</p>' +
      '<button class="btn btn-outline btn-block" id="btnAcctLoad">Load accounts</button>' +
      '<input type="search" id="entAcctFilter" placeholder="Search username or email" autocomplete="off" autocapitalize="none" spellcheck="false" style="margin-top:10px;">' +
      '<div id="entAcctSummary" style="margin:6px 0;font-size:0.82rem;color:var(--text2);"></div>' +
      '<div id="entAcctList"></div>' +
      '<div id="entAcctMsg" style="margin-top:8px;font-size:0.82rem;color:var(--text2);"></div></div>';
  }

  function renderAccounts() {
    var list = document.getElementById('entAcctList');
    if (!list) return;
    var filterEl = document.getElementById('entAcctFilter');
    var q = filterEl ? filterEl.value.trim().toLowerCase() : '';
    var counts = { active: 0, expired: 0, free: 0 };
    accounts.forEach(function (a) { counts[accessOf(a).kind]++; });
    var summary = document.getElementById('entAcctSummary');
    if (summary) {
      summary.textContent = accounts.length
        ? accounts.length + ' account(s): ' + counts.active + ' active, ' + counts.expired + ' expired, ' + counts.free + ' free'
        : '';
    }
    list.textContent = '';
    accounts.filter(function (a) { return !q || a.identifier.toLowerCase().indexOf(q) !== -1; }).forEach(function (a) {
      var st = accessOf(a);
      var row = document.createElement('div');
      row.className = 'ent-acct';
      row.setAttribute('data-uid', a.uid);
      row.style.cssText = 'border:1px solid var(--border);border-radius:12px;padding:10px 12px;margin-bottom:8px;';

      var top = document.createElement('div');
      var name = document.createElement('b');
      name.textContent = a.identifier;
      top.appendChild(name);
      if (a.createdAt) {
        var created = document.createElement('span');
        created.style.cssText = 'font-size:0.75rem;color:var(--text-muted);margin-left:8px;';
        created.textContent = 'joined ' + fmtDay(a.createdAt);
        top.appendChild(created);
      }
      row.appendChild(top);

      var status = document.createElement('div');
      status.className = 'ent-acct-status';
      status.style.cssText = 'font-size:0.85rem;margin:4px 0 8px;color:' +
        (st.kind === 'active' ? 'var(--success,#16a34a)' : st.kind === 'expired' ? 'var(--danger,#dc2626)' : 'var(--text2)') + ';';
      status.textContent = st.text;
      row.appendChild(status);

      var actions = document.createElement('div');
      actions.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;';
      [['m1', '+1 month'], ['m3', '+3 months'], ['m12', '+12 months'], ['date', 'Set date'], ['stop', 'Stop']].forEach(function (pair) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-sm ' + (pair[0] === 'stop' ? 'btn-danger' : 'btn-outline');
        b.setAttribute('data-act', pair[0]);
        b.textContent = pair[1];
        actions.appendChild(b);
      });
      row.appendChild(actions);
      list.appendChild(row);
    });
  }

  async function onAccountAction(e) {
    var btn = e.target.closest && e.target.closest('button[data-act]');
    if (!btn) return;
    if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
    var row = btn.closest('.ent-acct');
    var a = accounts.filter(function (x) { return row && x.uid === row.getAttribute('data-uid'); })[0];
    if (!a) return;
    var act = btn.getAttribute('data-act');
    try {
      if (act === 'm1') await extendAccount(a, 1, '1m');
      else if (act === 'm3') await extendAccount(a, 3, '3m');
      else if (act === 'm12') await extendAccount(a, 12, '12m');
      else if (act === 'date') {
        var d0 = a.expiresAt ? new Date(a.expiresAt) : new Date();
        var def = d0.getFullYear() + '-' + String(d0.getMonth() + 1).padStart(2, '0') + '-' + String(d0.getDate()).padStart(2, '0');
        var typed = window.prompt('Active until (YYYY-MM-DD) for ' + a.identifier + ':', def);
        if (typed === null) return;
        var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(typed).trim());
        var when = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 23, 59, 59) : null;
        if (!when || isNaN(when.getTime()) || when.getMonth() !== Number(m[2]) - 1) return acctMsg('Enter the date as YYYY-MM-DD, for example 2027-03-15.', true);
        await saveAccess(a, 'custom', when.getTime());
      } else if (act === 'stop') {
        if (!window.confirm('Stop access for ' + a.identifier + '? They keep their progress but lose the paid questions.')) return;
        await saveAccess(a, 'none', null);
      }
      renderAccounts();
      acctMsg(a.identifier + ': ' + accessOf(a).text + '.');
    } catch (err) {
      acctMsg('Could not update ' + a.identifier + ': ' + friendly(err), true);
    }
  }

  function wireAccounts() {
    var load = document.getElementById('btnAcctLoad');
    if (!load) return;
    renderAccounts(); // accounts loaded earlier in this session stay visible after Settings re-renders
    load.addEventListener('click', async function () {
      if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
      load.disabled = true;
      acctMsg('Loading...');
      try {
        await loadAccounts(acctMsg);
        renderAccounts();
        acctMsg(accounts.length ? '' : 'No accounts yet.');
      } catch (e) {
        acctMsg('Could not load accounts: ' + friendly(e), true);
      } finally {
        load.disabled = false;
      }
    });
    var filter = document.getElementById('entAcctFilter');
    if (filter) filter.addEventListener('input', renderAccounts);
    var list = document.getElementById('entAcctList');
    if (list) list.addEventListener('click', onAccountAction);
  }

  /* ------------------------------------------------------------------ question reports */

  var REASON_LABELS = { wrong_answer: 'Wrong answer', wrong_explanation: 'Wrong explanation', typo: 'Typo / unclear', other: 'Other' };
  var reports = [];

  function parseReport(doc) {
    var f = doc.fields || {};
    return {
      id: String(doc.name || '').split('/').pop(),
      questionUid: strOf(f.questionUid),
      questionText: strOf(f.questionText),
      subject: strOf(f.subject),
      chapter: strOf(f.chapter),
      correctAnswer: strOf(f.correctAnswer),
      reason: strOf(f.reason),
      note: strOf(f.note),
      reporter: strOf(f.reporterIdentifier),
      createdAt: tsMs(f.createdAt) || 0
    };
  }

  // One Firestore read per report: load on demand, resolve (delete) reports once handled.
  async function loadReports(progress) {
    var tk = await token();
    var out = [];
    var pageToken = '';
    do {
      var url = FS + '/reports?pageSize=' + pageSize + (pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : '');
      var d = await request(url, { headers: authHeaders(tk) });
      (d.documents || []).forEach(function (doc) { out.push(parseReport(doc)); });
      pageToken = d.nextPageToken || '';
      if (progress) progress('Loaded ' + out.length + ' report(s)...');
    } while (pageToken && out.length < 5000);
    reports = out.sort(function (a, b) { return b.createdAt - a.createdAt; });
    return reports;
  }

  function reportsCardHTML() {
    return '<div class="card"><div class="card-header">Question reports</div>' +
      '<p style="font-size:0.85rem;color:var(--text2);">Problems students report on questions. Open the question, fix it in the Questions list, then tap Resolve.</p>' +
      '<button class="btn btn-outline btn-block" id="btnRepLoad">Load reports</button>' +
      '<input type="search" id="entRepFilter" placeholder="Search question, student or note" autocomplete="off" spellcheck="false" style="margin-top:10px;">' +
      '<div id="entRepSummary" style="margin:6px 0;font-size:0.82rem;color:var(--text2);"></div>' +
      '<div id="entRepList"></div>' +
      '<div id="entRepMsg" style="margin-top:8px;font-size:0.82rem;color:var(--text2);"></div></div>';
  }

  function repMsg(text, isError) {
    var el = document.getElementById('entRepMsg');
    if (!el) return;
    el.textContent = text || '';
    el.style.color = isError ? 'var(--danger)' : 'var(--text2)';
  }

  function renderReports() {
    var list = document.getElementById('entRepList');
    if (!list) return;
    var filterEl = document.getElementById('entRepFilter');
    var q = filterEl ? filterEl.value.trim().toLowerCase() : '';
    var counts = {};
    reports.forEach(function (r) { counts[r.reason] = (counts[r.reason] || 0) + 1; });
    var summary = document.getElementById('entRepSummary');
    if (summary) {
      summary.textContent = reports.length
        ? reports.length + ' open report(s): ' + Object.keys(REASON_LABELS).map(function (k) { return (counts[k] || 0) + ' ' + REASON_LABELS[k].toLowerCase(); }).join(', ')
        : '';
    }
    list.textContent = '';
    reports.filter(function (r) {
      return !q || (r.questionText + ' ' + r.reporter + ' ' + r.note + ' ' + r.subject + ' ' + r.chapter).toLowerCase().indexOf(q) !== -1;
    }).forEach(function (r) {
      var row = document.createElement('div');
      row.className = 'ent-report';
      row.setAttribute('data-rid', r.id);
      row.style.cssText = 'border:1px solid var(--border);border-radius:12px;padding:10px 12px;margin-bottom:8px;';

      var top = document.createElement('div');
      var reason = document.createElement('b');
      reason.className = 'ent-report-reason';
      reason.textContent = REASON_LABELS[r.reason] || r.reason || 'Report';
      top.appendChild(reason);
      var when = document.createElement('span');
      when.style.cssText = 'font-size:0.75rem;color:var(--text-muted);margin-left:8px;';
      when.textContent = r.createdAt ? fmtDay(r.createdAt) : '';
      top.appendChild(when);
      row.appendChild(top);

      var text = document.createElement('div');
      text.style.cssText = 'font-size:0.88rem;margin:4px 0;';
      text.setAttribute('dir', 'auto');
      text.textContent = r.questionText.length > 140 ? r.questionText.slice(0, 140) + '...' : r.questionText;
      row.appendChild(text);

      var meta = document.createElement('div');
      meta.style.cssText = 'font-size:0.78rem;color:var(--text2);';
      meta.textContent = [r.subject, r.chapter].filter(Boolean).join(' / ') + (r.subject || r.chapter ? ' - ' : '') + 'from ' + (r.reporter || 'unknown');
      row.appendChild(meta);

      if (r.note) {
        var note = document.createElement('div');
        note.style.cssText = 'font-size:0.85rem;margin-top:6px;padding:6px 8px;border-radius:8px;background:var(--bg-secondary,rgba(0,0,0,.05));';
        note.setAttribute('dir', 'auto');
        note.textContent = r.note;
        row.appendChild(note);
      }

      var detail = document.createElement('div');
      detail.className = 'ent-report-detail';
      detail.style.cssText = 'display:none;margin-top:8px;font-size:0.85rem;';
      row.appendChild(detail);

      var actions = document.createElement('div');
      actions.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;';
      [['show', 'Show question'], ['resolve', 'Resolve']].forEach(function (pair) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-sm btn-outline';
        b.setAttribute('data-act', pair[0]);
        b.textContent = pair[1];
        actions.appendChild(b);
      });
      row.appendChild(actions);
      list.appendChild(row);
    });
  }

  // Shows the question as it is in THIS device's database (the one you edit), so you can check it.
  async function showReportedQuestion(r, holder) {
    if (holder.style.display === 'block') { holder.style.display = 'none'; return; }
    holder.textContent = '';
    var all = await db.getAllQuestions();
    var q = all.filter(function (x) { return x.uid && x.uid === r.questionUid; })[0];
    if (!q) {
      holder.textContent = 'This question was not found in this database (it may have been deleted, or this device does not have it).';
    } else {
      var line = function (label, value, strong) {
        var d = document.createElement('div');
        d.style.margin = '2px 0';
        d.setAttribute('dir', 'auto');
        if (label) { var s = document.createElement('b'); s.textContent = label + ' '; d.appendChild(s); }
        var t = document.createElement(strong ? 'b' : 'span');
        t.textContent = value;
        d.appendChild(t);
        holder.appendChild(d);
      };
      line('Q:', q.questionText);
      ['A', 'B', 'C', 'D', 'E'].forEach(function (l) {
        if (q['option' + l]) line(l + '.', q['option' + l] + (l === q.correctAnswer ? '  \u2713' : ''), l === q.correctAnswer);
      });
      if (r.correctAnswer && r.correctAnswer !== q.correctAnswer) line('', 'Note: the student saw "' + r.correctAnswer + '" as the correct answer; it is now "' + q.correctAnswer + '".');
      if (q.explanation) line('Explanation:', q.explanation);
    }
    holder.style.display = 'block';
  }

  async function onReportAction(e) {
    var btn = e.target.closest && e.target.closest('button[data-act]');
    if (!btn) return;
    if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
    var row = btn.closest('.ent-report');
    var r = reports.filter(function (x) { return row && x.id === row.getAttribute('data-rid'); })[0];
    if (!r) return;
    try {
      if (btn.getAttribute('data-act') === 'show') {
        await showReportedQuestion(r, row.querySelector('.ent-report-detail'));
      } else {
        if (!window.confirm('Mark this report as resolved? It will be deleted.')) return;
        var tk = await token();
        await request(FS + '/reports/' + encodeURIComponent(r.id), { method: 'DELETE', headers: authHeaders(tk) });
        reports = reports.filter(function (x) { return x.id !== r.id; });
        renderReports();
        repMsg('Report resolved.');
      }
    } catch (err) {
      repMsg('Could not complete that: ' + friendly(err), true);
    }
  }

  function wireReports() {
    var load = document.getElementById('btnRepLoad');
    if (!load) return;
    renderReports(); // reports loaded earlier in this session stay visible after Settings re-renders
    load.addEventListener('click', async function () {
      if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
      load.disabled = true;
      repMsg('Loading...');
      try {
        await loadReports(repMsg);
        renderReports();
        repMsg(reports.length ? '' : 'No open reports.');
      } catch (e) {
        repMsg('Could not load reports: ' + friendly(e), true);
      } finally {
        load.disabled = false;
      }
    });
    var filter = document.getElementById('entRepFilter');
    if (filter) filter.addEventListener('input', renderReports);
    var list = document.getElementById('entRepList');
    if (list) list.addEventListener('click', onReportAction);
  }

  /* ------------------------------------------------------------------ UI */

  function fmtBytes(n) {
    return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
  }

  function cardHTML() {
    var head = '<div class="card"><div class="card-header">Cloud (Firebase)</div>';
    if (!CONFIGURED) {
      return head + '<p style="font-size:0.85rem;color:var(--text2);">Firebase is not set up yet. Fill in <code>firebase-config.js</code> first.</p></div>';
    }
    var s = load(SESSION_KEY);
    if (!s) {
      return head +
        '<p style="font-size:0.85rem;color:var(--text2);">Sign in with your admin account to publish the question bank to subscribers.</p>' +
        '<label class="modal-field">Email<input type="email" id="entCloudEmail" autocomplete="username" autocapitalize="none" spellcheck="false"></label>' +
        '<label class="modal-field">Password<input type="password" id="entCloudPassword" autocomplete="current-password"></label>' +
        '<button class="btn btn-primary btn-block mt-2" id="btnCloudSignIn">Sign in</button>' +
        '<div id="entCloudMsg" style="margin-top:10px;font-size:0.82rem;color:var(--text2);"></div></div>';
    }
    var info = load(INFO_KEY);
    var last = info
      ? 'Last published: <b id="entCloudLast"></b>'
      : 'Nothing published from this device yet.';
    return head +
      '<p style="font-size:0.85rem;color:var(--text2);margin-bottom:6px;">Signed in as <b id="entCloudWho"></b></p>' +
      '<p style="font-size:0.85rem;color:var(--text2);">' + last + '</p>' +
      '<p style="font-size:0.8rem;color:var(--text-muted);">Publishes <b>all</b> current content (not only the Free questions). Students with an active subscription download it automatically.</p>' +
      '<button class="btn btn-accent btn-block mt-2" id="btnCloudPublish">Publish question bank</button>' +
      '<button class="btn btn-outline btn-block mt-2" id="btnCloudSignOut">Sign out</button>' +
      '<div id="entCloudMsg" style="margin-top:10px;font-size:0.82rem;color:var(--text2);"></div></div>' +
      accountsCardHTML() + reportsCardHTML();
  }

  function setMsg(text, isError) {
    var el = document.getElementById('entCloudMsg');
    if (!el) return;
    el.textContent = text || '';
    el.style.color = isError ? 'var(--danger)' : 'var(--text2)';
  }

  function rerender() {
    try { if (typeof navigateTo === 'function') navigateTo('settings'); } catch (e) { /* ignore */ }
  }

  function wire() {
    var s = load(SESSION_KEY);
    var who = document.getElementById('entCloudWho');
    if (who && s) who.textContent = s.email;
    var last = document.getElementById('entCloudLast');
    var info = load(INFO_KEY);
    if (last && info) {
      last.textContent = info.version + ' - ' + info.questions + ' questions, ' + fmtBytes(info.gzBytes) +
        ' (' + new Date(info.updatedAt).toLocaleString() + ')';
    }

    var signInBtn = document.getElementById('btnCloudSignIn');
    if (signInBtn) signInBtn.addEventListener('click', async function () {
      if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
      var email = document.getElementById('entCloudEmail').value;
      var password = document.getElementById('entCloudPassword').value;
      if (!email || !password) return setMsg('Enter your email and password.', true);
      signInBtn.disabled = true;
      setMsg('Signing in...');
      try { await signIn(email, password); rerender(); }
      catch (e) { setMsg(friendly(e), true); signInBtn.disabled = false; }
    });

    var outBtn = document.getElementById('btnCloudSignOut');
    if (outBtn) outBtn.addEventListener('click', function () { signOut(); rerender(); });

    var pubBtn = document.getElementById('btnCloudPublish');
    if (pubBtn) pubBtn.addEventListener('click', async function () {
      if (typeof RBAC !== 'undefined' && !RBAC.requireAdmin()) return;
      if (busy) return;
      busy = true;
      pubBtn.disabled = true;
      try {
        var info2 = await publish(function (t) { setMsg(t); });
        setMsg('Published ' + info2.version + ': ' + info2.questions + ' questions, ' + fmtBytes(info2.gzBytes) +
          ' in ' + info2.chunkCount + ' part(s).');
        if (typeof showToast === 'function') showToast('Question bank published.', 'success');
        var lastEl = document.getElementById('entCloudLast');
        if (lastEl) lastEl.textContent = info2.version + ' - ' + info2.questions + ' questions, ' + fmtBytes(info2.gzBytes);
      } catch (e) {
        if (e.code === 'NOT_SIGNED_IN') { signOut(); rerender(); }
        setMsg('Publish failed: ' + friendly(e), true);
        console.error('Cloud publish error', e);
      } finally {
        busy = false;
        pubBtn.disabled = false;
      }
    });

    wireAccounts();
    wireReports();
  }

  window.EntCloudAdmin = {
    cardHTML: cardHTML, wire: wire, publish: publish, signIn: signIn, signOut: signOut, isConfigured: CONFIGURED,
    loadAccounts: loadAccounts,
    loadReports: loadReports,
    setPageSize: function (n) { pageSize = n; }
  };
})();
