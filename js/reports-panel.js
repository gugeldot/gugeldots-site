// ==========================================================================
// Reports Panel (desktop) - slides the view up to a panel above the main line
// ==========================================================================

window.reportsOpen = false;

function openReportsPanel() {
    const stage = document.getElementById('stage');
    const frame = document.getElementById('reportsFrame');
    const panel = document.getElementById('reportsPanel');

    // Lazy-load the reports page the first time the panel is opened
    if (!frame.getAttribute('src')) {
        frame.addEventListener('load', syncReportsLanguage, { once: true });
        frame.src = 'reports.html?embed=1';
    } else {
        syncReportsLanguage();
    }

    window.reportsOpen = true;
    stage.classList.add('reports-open');
    document.body.classList.add('reports-open');
    panel.setAttribute('aria-hidden', 'false');
    frame.tabIndex = 0;
    frame.focus();
}

function closeReportsPanel() {
    if (!window.reportsOpen) return;
    window.reportsOpen = false;
    document.getElementById('stage').classList.remove('reports-open');
    document.body.classList.remove('reports-open');
    document.getElementById('reportsPanel').setAttribute('aria-hidden', 'true');
    document.getElementById('reportsFrame').tabIndex = -1;
}

function syncReportsLanguage() {
    // Mobile opens reports.html as a plain page, so carry the language in the link
    const link = document.getElementById('reportsLink');
    if (link && typeof currentLanguage !== 'undefined') link.href = `reports.html?lang=${currentLanguage}`;

    const frame = document.getElementById('reportsFrame');
    if (frame && frame.contentWindow && typeof currentLanguage !== 'undefined') {
        frame.contentWindow.postMessage({ type: 'set-lang', lang: currentLanguage }, '*');
    }
}

function initReportsPanel() {
    const link = document.getElementById('reportsLink');
    if (!link) return;

    // Mobile keeps the plain link to reports.html; desktop slides the panel in
    link.addEventListener('click', (e) => {
        const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;
        if (isMobile) return;
        e.preventDefault();
        openReportsPanel();
    });

    // The embedded page asks the parent to close (its back link / Escape key)
    window.addEventListener('message', (e) => {
        if (e.origin !== window.location.origin && window.location.origin !== 'null') return;
        if (e.data && e.data.type === 'close-reports') closeReportsPanel();
    });

    // Keep the embedded page and the mobile link in the same language as the portfolio
    const originalToggle = window.toggleLanguage;
    if (typeof originalToggle === 'function') {
        window.toggleLanguage = function () {
            originalToggle();
            syncReportsLanguage();
        };
    }
}

document.addEventListener('DOMContentLoaded', initReportsPanel);
