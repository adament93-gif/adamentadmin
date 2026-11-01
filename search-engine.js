/* Shared, offline search engine. The same installer runs in the page and Worker. */
(function installSearchEngine(root) {
    'use strict';
    const fields = [
        ['questionText', 10], ['optionA', 5], ['optionB', 5], ['optionC', 5], ['optionD', 5], ['optionE', 5],
        ['explanation', 3], ['subject', 4], ['chapter', 4], ['topic', 4], ['subtopic', 4], ['tags', 4],
        ['book', 2], ['group', 2], ['referenceName', 2], ['referenceEdition', 1], ['referencePage', 1], ['reference', 2], ['source', 1]
    ];
    function fold(value) {
        return String(value == null ? '' : value).normalize('NFKD').toLowerCase()
            .replace(/[\p{M}\u0640]/gu, '')
            .replace(/[أإآٱ]/g, 'ا').replace(/[ىی]/g, 'ي').replace(/ک/g, 'ك').replace(/ة/g, 'ه')
            .replace(/[٠-٩۰-۹]/g, c => String(c.charCodeAt(0) - (c <= '٩' ? 0x660 : 0x6f0)))
            .replace(/['’‘]/g, '');
    }
    function normalize(value) {
        return fold(value).replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
    }
    function tokenize(value) { const text = normalize(value); return text ? text.split(' ') : []; }
    function aliases(word) {
        return word.startsWith('ال') && word.length > 3 ? [word, word.slice(2)] : [word];
    }
    function lowerBound(words, prefix) {
        let lo = 0, hi = words.length;
        while (lo < hi) { const mid = (lo + hi) >>> 1; if (words[mid] < prefix) lo = mid + 1; else hi = mid; }
        return lo;
    }
    function createIndex(questions) {
        const started = typeof performance !== 'undefined' ? performance.now() : Date.now();
        const postings = new Map(), documents = new Map(), queryCache = new Map();
        // Question banks repeat options, explanations and citation fields extensively.
        // Cache their normalization only while building; queries retain just the inverted index.
        const values = new Map();
        const readValue = raw => {
            const text = String(raw == null ? '' : raw);
            if (values.has(text)) return values.get(text);
            const phrase = normalize(text), value = { phrase, tokens: new Set(phrase ? phrase.split(' ') : []) };
            if (values.size < 32768) values.set(text, value);
            return value;
        };
        for (let order = 0; order < questions.length; order++) {
            const q = questions[order], phrase = readValue(q.questionText).phrase;
            documents.set(q.id, { order, phrase });
            for (const [field, weight] of fields) {
                const raw = Array.isArray(q[field]) ? q[field].join(' ') : q[field] && typeof q[field] === 'object' ? Object.values(q[field]).join(' ') : q[field];
                for (const word of readValue(raw).tokens) for (const alias of aliases(word)) {
                    if (!postings.has(alias)) postings.set(alias, new Map());
                    const ids = postings.get(alias);
                    ids.set(q.id, Math.max(ids.get(q.id) || 0, weight));
                }
            }
        }
        values.clear();
        const words = [...postings.keys()].sort();
        const stats = { questionCount: questions.length, termCount: words.length, queryCount: 0, cacheHits: 0,
            buildMs: (typeof performance !== 'undefined' ? performance.now() : Date.now()) - started };
        function search(query) {
            if (!String(query == null ? '' : query).trim()) return null;
            const normalized = normalize(query);
            if (!normalized) return [];
            if (queryCache.has(normalized)) { stats.cacheHits++; return queryCache.get(normalized).slice(); }
            stats.queryCount++;
            const terms = [...new Set(normalized.split(' '))];
            const matches = terms.map(term => {
                const ids = new Map();
                for (let i = lowerBound(words, term); i < words.length && words[i].startsWith(term); i++) {
                    const word = words[i], multiplier = word === term ? 2 : 1;
                    for (const [id, weight] of postings.get(word)) ids.set(id, Math.max(ids.get(id) || 0, weight * multiplier));
                }
                return ids;
            }).sort((a, b) => a.size - b.size);
            const ranked = [];
            if (matches[0] && matches[0].size) for (const [id] of matches[0]) {
                if (!matches.every(ids => ids.has(id))) continue;
                const doc = documents.get(id);
                let score = matches.reduce((sum, ids) => sum + ids.get(id), 0);
                if (doc.phrase === normalized) score += 1000;
                else if (doc.phrase.startsWith(normalized)) score += 200;
                else if ((' ' + doc.phrase + ' ').includes(' ' + normalized + ' ')) score += 120;
                ranked.push({ id, score, order: doc.order });
            }
            ranked.sort((a, b) => b.score - a.score || a.order - b.order);
            const result = ranked.map(row => row.id);
            queryCache.set(normalized, result);
            if (queryCache.size > 100) queryCache.delete(queryCache.keys().next().value);
            return result.slice();
        }
        return { search, stats };
    }
    function filterQuestions(questions, filters, specialIds = {}) {
        const f = filters || {}, special = f.special || 'all';
        const ids = special === 'bookmarked' ? specialIds.bmIds : special === 'highyield' ? specialIds.hyIds : special === 'missed' ? specialIds.missedIds : null;
        const selected = ids == null ? null : new Set(ids);
        return questions.filter(q =>
            (!f.subject || f.subject === 'all' || (q.subject || 'Uncategorized') === f.subject) &&
            (!f.chapter || f.chapter === 'all' || (q.chapter || 'General') === f.chapter) &&
            (!f.topic || f.topic === 'all' || (q.topic || 'General') === f.topic) &&
            (!f.difficulty || f.difficulty === 'all' || (q.difficulty || 'Medium') === f.difficulty) &&
            (special !== 'free' || q.isFree === true) &&
            (!selected || selected.has(q.id)));
    }
    function matchRanges(value, query) {
        const raw = String(value == null ? '' : value), terms = tokenize(query);
        if (!terms.length) return [];
        const ranges = [];
        const pattern = /[\p{L}\p{N}][\p{L}\p{N}\p{M}\u0640'’‘]*/gu;
        for (const match of raw.matchAll(pattern)) {
            const token = normalize(match[0]);
            if (terms.some(term => aliases(token).some(alias => alias.startsWith(term)))) ranges.push([match.index, match.index + match[0].length]);
        }
        return ranges;
    }
    const api = { normalize, tokenize, createIndex, filterQuestions, matchRanges,
        workerSource: () => '(' + installSearchEngine.toString() + ')(self);' };
    root.ENTSearch = api;
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
