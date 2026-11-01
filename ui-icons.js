/* Adam ENT interface icons. Static artwork only; user content is never inspected. */
(function (global) {
    'use strict';

    const artwork = Object.freeze({
        search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
        dashboard: '<rect x="3" y="3" width="7" height="10" rx="2"/><rect x="13" y="3" width="8" height="6" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/><rect x="13" y="12" width="8" height="9" rx="2"/>',
        study: '<path d="M12 5.5C9.4 3.4 6.4 3 3 4v15c3.4-1 6.4-.6 9 1.5 2.6-2.1 5.6-2.5 9-1.5V4c-3.4-1-6.4-.6-9 1.5ZM12 5.5v15M6 8h3M6 11h3M15 8h3M15 11h3"/>',
        exam: '<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="m8 9 2 2 4-4M8 15h8M8 18h5"/>',
        questions: '<path d="M17 16h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1M3 8h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7l-4 3V10a2 2 0 0 1 2-2"/><path d="M8 11.5a2 2 0 0 1 3.8.8c0 1.4-1.8 1.4-1.8 2.7M10 17h.01"/>',
        import: '<path d="M12 3v12m-4-4 4 4 4-4M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
        export: '<path d="M12 15V3m-4 4 4-4 4 4M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
        settings: '<path d="m10 3-.6 2.1-2 .9-1.9-1-2 3.5L5 10v2l-1.5 1.5 2 3.5 1.9-1 2 .9.6 2.1h4l.6-2.1 2-.9 1.9 1 2-3.5L19 12v-2l1.5-1.5-2-3.5-1.9 1-2-.9L14 3Z"/><circle cx="12" cy="11" r="3"/>',
        moon: '<path d="M20.5 14.3A8.7 8.7 0 0 1 9.7 3.5 9 9 0 1 0 20.5 14.3Z"/>',
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
        lock: '<rect x="5" y="10" width="14" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
        unlock: '<rect x="5" y="10" width="14" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 7.5-2M12 14v3"/>',
        bookmark: '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/>',
        'bookmark-filled': '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/>',
        star: '<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9Z"/>',
        'star-filled': '<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9Z"/>',
        flame: '<path d="M13 2c1.2 5.6 5.7 6.7 5.7 11.7A6.7 6.7 0 0 1 5.3 14c0-3.1 1.7-5.3 3.4-7 .1 2 1 3.1 2.3 3.8C12.6 8.4 13.1 5.3 13 2Z"/><path d="M12 13c.1 2 2.3 2.7 2.3 4.6a2.3 2.3 0 0 1-4.6 0c0-1.7 1.7-2.4 2.3-4.6Z"/>',
        brain: '<path d="M12 5a3 3 0 0 0-5.8-1A3.5 3.5 0 0 0 3 8.5a3.8 3.8 0 0 0 .5 6.8A3.5 3.5 0 0 0 7 20a3 3 0 0 0 5-1V5Zm0 0a3 3 0 0 1 5.8-1A3.5 3.5 0 0 1 21 8.5a3.8 3.8 0 0 1-.5 6.8A3.5 3.5 0 0 1 17 20a3 3 0 0 1-5-1"/><path d="M7 7c2 0 2.5 1.4 2 3M4 14c1.2-1.1 2.5-1 3.5 0M7 17c1-1.2 2.5-1.3 4-1M17 7c-2 0-2.5 1.4-2 3M20 14c-1.2-1.1-2.5-1-3.5 0M17 17c-1-1.2-2.5-1.3-4-1"/>',
        target: '<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4.5"/><path d="m11 13 9-9M16 4h4v4"/>',
        calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M7 3v4M17 3v4M3 10h18M7 14h2M15 14h2M7 17h2M15 17h2"/>',
        library: '<rect x="3" y="4" width="4" height="17" rx="1"/><rect x="9" y="3" width="4" height="18" rx="1"/><path d="m15 5 3.5-.7L22 20l-3.5.7ZM3 8h4M9 7h4"/>',
        chart: '<path d="M3 4v16a1 1 0 0 0 1 1h17"/><rect x="7" y="12" width="3" height="5" rx=".8"/><rect x="12" y="8" width="3" height="9" rx=".8"/><rect x="17" y="4" width="3" height="13" rx=".8"/>',
        check: '<path d="m5 12 4.5 4.5L19 7"/>',
        x: '<path d="m6 6 12 12M18 6 6 18"/>',
        alert: '<path d="m10.3 4.2-8 13.5A2 2 0 0 0 4 20.7h16a2 2 0 0 0 1.7-3l-8-13.5a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
        plus: '<path d="M12 5v14M5 12h14"/>',
        minus: '<path d="M5 12h14"/>',
        edit: '<path d="m15 4 5 5M4 20l4.8-1 11-11a2 2 0 0 0-4.8-4.8l-11 11ZM4 20l1-4.8 3.8 3.8M13 21h8"/>',
        trash: '<path d="M3 6h18M9 6V3h6v3M6 6l1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-14M10 10v7M14 10v7"/>',
        eye: '<path d="M2.5 12s3.2-7 9.5-7 9.5 7 9.5 7-3.2 7-9.5 7-9.5-7-9.5-7Z"/><circle cx="12" cy="12" r="3"/>',
        refresh: '<path d="M20 8a8.5 8.5 0 0 0-14.8-3L3 8m0-5v5h5M4 16a8.5 8.5 0 0 0 14.8 3l2.2-3m0 5v-5h-5"/>',
        play: '<path d="M7 4.5v15L20 12Z"/>',
        stop: '<rect x="5" y="5" width="14" height="14" rx="2.5"/>',
        'chevron-left': '<path d="m15 5-7 7 7 7"/>',
        'chevron-right': '<path d="m9 5 7 7-7 7"/>',
        'arrow-left': '<path d="M20 12H4m7-7-7 7 7 7"/>',
        'arrow-right': '<path d="M4 12h16m-7-7 7 7-7 7"/>',
        download: '<path d="M12 3v13m-4-4 4 4 4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
        upload: '<path d="M12 16V3m-4 4 4-4 4 4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
        save: '<path d="M4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M7 3v6h9V3M7 21v-8h10v8M13 5v2"/>',
        database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
        restore: '<path d="M4 8a9 9 0 1 1-1 7M4 3v5h5"/><path d="M12 7v5l3 2"/>',
        folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
        file: '<path d="M5 3h9l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1ZM14 3v5h5M8 12h8M8 16h6"/>',
        tag: '<path d="M3 4v7l9 10 9-9-9-9H4a1 1 0 0 0-1 1Z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
        trophy: '<path d="M7 3h10v5a5 5 0 0 1-10 0ZM7 5H3v3a4 4 0 0 0 5 4M17 5h4v3a4 4 0 0 1-5 4M12 13v5M8 21v-3h8v3M6 21h12"/>',
        rocket: '<path d="M9 15c0-6.5 4.8-11 12-12 0 7.2-4.5 12-11 12ZM9 9H5l-3 5h7M15 15v4l-5 3v-7M6.5 17.5 3 21"/><circle cx="16" cy="8" r="2"/>',
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
        logout: '<path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5M10 12h11m-4-4 4 4-4 4"/>',
        image: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8" cy="8" r="2"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',
        'zoom-in': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M7.5 10.5h6M10.5 7.5v6"/>',
        'zoom-out': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M7.5 10.5h6"/>',
        close: '<path d="m6 6 12 12M18 6 6 18"/>',
        filter: '<path d="M3 4h18l-7 8v7l-4 2v-9Z"/>'
    });

    function uiIcon(name) {
        if (typeof name !== 'string' || !Object.prototype.hasOwnProperty.call(artwork, name)) return '';
        const filled = name === 'bookmark-filled' || name === 'star-filled';
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"'
            + ' aria-hidden="true" focusable="false" class="ui-icon' + (filled ? ' ui-icon-filled' : '')
            + '" data-ui-icon="' + name + '" fill="' + (filled ? 'currentColor' : 'none')
            + '" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
            + ' style="pointer-events:none">' + artwork[name] + '</svg>';
    }

    global.uiIcon = uiIcon;
    global.UIIcons = Object.freeze({ render: uiIcon, names: Object.freeze(Object.keys(artwork)) });
})(window);
