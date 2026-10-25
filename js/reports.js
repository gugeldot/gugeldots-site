// ==========================================================================
// Reports page - report cards, PDF viewer and language toggle
// ==========================================================================

// Set `pdf` to the exported file once a report is ready; null shows "Coming soon".
// icon: file name in resources/icons (png unless `ext` says otherwise)
// group: machines (12 easy boxes) | labs (5 large labs) | guides (2 study guides)
const REPORTS = [
    { group: 'machines', name: 'Editorial',   icon: 'editorial',   meta: 'Hack The Box · Linux · Easy',   tags: ['SSRF', 'Git secrets', 'Sudo abuse'],            pdf: 'reports/editorial.pdf' },
    { group: 'machines', name: 'MonitorsTwo', icon: 'monitorstwo', meta: 'Hack The Box · Linux · Easy',   tags: ['Web RCE', 'Docker', 'Cacti'],        pdf: 'reports/monitorstwo.pdf' },
    { group: 'machines', name: 'TwoMillion',  icon: 'twomillion',  meta: 'Hack The Box · Linux · Easy',   tags: ['API abuse', 'RCE', 'Kernel exploit'],           pdf: 'reports/twomillion.pdf' },
    { group: 'machines', name: 'Sea',         icon: 'sea',         meta: 'Hack The Box · Linux · Easy',   tags: ['XSS', 'Tunneling', 'SUID'],                     pdf: null },
    { group: 'machines', name: 'Fluffy',      icon: 'fluffy',      meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'ADCS', 'ESC16'], pdf: null },
    { group: 'machines', name: 'Support',     icon: 'support',     meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'LDAP', 'RBCD'],             pdf: null },
    { group: 'machines', name: 'Pilgrimage',  icon: 'pilgrimage',  meta: 'Hack The Box · Linux · Easy',   tags: ['Git secrets', 'File read', 'Cron'],             pdf: null },
    { group: 'machines', name: 'Keeper',      icon: 'keeper',      meta: 'Hack The Box · Linux · Easy',   tags: ['Default creds', 'KeePass', 'SSH keys'],         pdf: null },
    { group: 'machines', name: 'Analytics',   icon: 'analytics',   meta: 'Hack The Box · Linux · Easy',   tags: ['Web RCE', 'Docker', 'Kernel exploit'],          pdf: null },
    { group: 'machines', name: 'Valentine',   icon: 'valentine',   meta: 'Hack The Box · Linux · Easy',   tags: ['Heartbleed', 'SSH keys', 'tmux'],               pdf: null },
    { group: 'machines', name: 'Cicada',      icon: 'cicada',      meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'SMB', 'SeBackup'],          pdf: null },
    { group: 'machines', name: 'SteamCloud',  icon: 'steamcloud',  meta: 'Hack The Box · Linux · Easy',   tags: ['Kubernetes', 'Kubelet', 'Pod escape'],    pdf: null },

    { group: 'labs', name: 'Wreath',         icon: 'wreath',         meta: 'TryHackMe · 3 hosts',        tags: ['Pivoting', 'Multi-host'],                  pdf: null },
    { group: 'labs', name: 'BigPivoting',    icon: 'bigpivoting',    meta: 'Dockerlabs · 5 hosts',       tags: ['Pivoting', 'Chisel', 'Proxychains'],       pdf: null },
    { group: 'labs', name: 'LittlePivoting', icon: 'littlepivoting', meta: 'Dockerlabs · 3 hosts',       tags: ['Pivoting', 'Multi-host'],                  pdf: null },
    { group: 'labs', name: 'Blackfield',     icon: 'blackfield',     meta: 'Hack The Box · Windows',     tags: ['Active Directory', 'AS-REP roasting', 'DCSync'], pdf: null },
    { group: 'labs', name: 'Dante',          icon: 'dante', big: true, meta: 'HTB Pro Lab · Multi-host',   tags: ['Active Directory', 'Pivoting'],            pdf: null },
    { group: 'labs', name: 'Wanderer',       icon: 'wanderer', ext: 'svg', big: true, meta: 'HTB Pro Lab · Recon',        tags: ['Recon', 'Lateral movement'],               pdf: null },

    { group: 'guides', name: 'eJPTv2 Study Guide',  icon: 'ejptv2', ext: 'svg', meta: 'INE · Study guide', tags: ['eJPT', 'Methodology', 'Checklist'], pdf: null },
    { group: 'guides', name: 'eCPPTv3 Study Guide', icon: 'ecpptv3', ext: 'svg', meta: 'INE · Study guide', tags: ['eCPPT', 'Methodology', 'Roadmap'],  pdf: null }
];

const I18N = {
    en: {
        soon: 'Coming soon', ready: 'Available', view: 'View report',
        checksumLoading: 'SHA-256 …', checksumCopied: 'Copied!', checksumTitle: 'Click to copy the full SHA-256 hash',
        groups: {
            machines: ['Machines', ''],
            labs: ['Labs & Large Machines', 'Multi-host environments: Active Directory, pivoting and recon'],
            guides: ['Study Guides', 'Public syllabus, methodology and tooling only — no exam content']
        }
    },
    es: {
        soon: 'Próximamente', ready: 'Disponible', view: 'Ver informe',
        checksumLoading: 'SHA-256 …', checksumCopied: '¡Copiado!', checksumTitle: 'Clic para copiar el hash SHA-256 completo',
        groups: {
            machines: ['Máquinas', ''],
            labs: ['Labs y máquinas grandes', 'Entornos multi-host: Active Directory, pivoting y reconocimiento'],
            guides: ['Guías de estudio', 'Solo syllabus público, metodología y herramientas — sin contenido de examen']
        }
    }
};

// pdf path -> full hex SHA-256, filled in lazily and kept for the session
const checksumCache = new Map();
let checksumToken = 0;

function shortHash(hash) {
    return `${hash.slice(0, 6)}…${hash.slice(-6)}`;
}

async function sha256Hex(url) {
    const buf = await fetch(url).then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.arrayBuffer();
    });
    const digest = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function updateChecksumBadge(pdf) {
    const t = I18N[reportsLanguage];
    const btn = document.getElementById('pdfChecksum');
    const myToken = ++checksumToken;

    if (checksumCache.has(pdf)) {
        const hash = checksumCache.get(pdf);
        btn.hidden = false;
        btn.textContent = `SHA-256 ${shortHash(hash)}`;
        btn.title = t.checksumTitle;
        btn.dataset.fullHash = hash;
        return;
    }

    btn.hidden = false;
    btn.textContent = t.checksumLoading;
    btn.removeAttribute('title');
    delete btn.dataset.fullHash;

    sha256Hex(pdf).then(hash => {
        if (myToken !== checksumToken) return; // modal moved on to another report meanwhile
        checksumCache.set(pdf, hash);
        btn.textContent = `SHA-256 ${shortHash(hash)}`;
        btn.title = t.checksumTitle;
        btn.dataset.fullHash = hash;
    }).catch(err => {
        if (myToken !== checksumToken) return;
        // Most common cause locally: opened via file:// (fetch() can't read local files there).
        // Works fine once served over http(s), e.g. GitHub Pages.
        btn.textContent = 'SHA-256 n/a';
        btn.title = location.protocol === 'file:'
            ? 'Checksum needs http(s):// (fetch() is blocked on file://). Serve the site locally to test it.'
            : `Could not fetch the PDF to hash it (${err.message}).`;
    });
}

let reportsLanguage = 'en';

function escapeHtml(text) {
    const el = document.createElement('div');
    el.textContent = text;
    return el.innerHTML;
}

function renderCard(r, t) {
    const ready = Boolean(r.pdf);
    const attrs = ready
        ? `class="report-card" tabindex="0" role="button" data-pdf="${escapeHtml(r.pdf)}" data-name="${escapeHtml(r.name)}"`
        : 'class="report-card report-card--soon"';
    const icon = `<img src="resources/icons/${r.icon}.${r.ext || 'png'}" alt="" onerror="this.parentNode.classList.add('report-icon--missing');this.remove()">`;

    return `
    <article ${attrs}>
        <div class="report-body">
            <span class="report-status ${ready ? 'report-status--ready' : ''}">${ready ? t.ready : t.soon}</span>
            <h3>${escapeHtml(r.name)}</h3>
            <p class="report-meta">${escapeHtml(r.meta)}</p>
            <div class="report-tags">
                ${r.tags.map(tag => `<span class="report-tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
            ${ready ? `<span class="report-cta">${t.view} &rarr;</span>` : ''}
        </div>
        <div class="report-icon${r.big ? ' report-icon--big' : ''}" data-initial="${escapeHtml(r.name.charAt(0))}">${icon}</div>
    </article>`;
}

function renderReports() {
    const t = I18N[reportsLanguage];

    document.getElementById('reportsGrid').innerHTML = ['machines', 'labs', 'guides'].map(group => {
        const items = REPORTS.filter(r => r.group === group);
        const [title, subtitle] = t.groups[group];
        return `
        <section class="report-group">
            <div class="report-group-head">
                <h2>${title} <span class="report-group-count">${items.length}</span></h2>
                ${subtitle ? `<p>${subtitle}</p>` : ''}
            </div>
            <div class="report-cards">${items.map(r => renderCard(r, t)).join('')}</div>
        </section>`;
    }).join('');
}

function applyReportsLanguage() {
    document.documentElement.lang = reportsLanguage;
    document.querySelectorAll('[data-en][data-es]').forEach(el => {
        el.innerHTML = el.dataset[reportsLanguage];
    });
    renderReports();
}

function openPdfModal(name, pdf) {
    document.getElementById('pdfTitle').textContent = name;
    document.getElementById('pdfFrame').src = pdf;
    document.getElementById('pdfOpen').href = pdf;
    document.getElementById('pdfDownload').href = pdf;
    document.getElementById('pdfModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateChecksumBadge(pdf);
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
    document.getElementById('pdfFrame').src = 'about:blank';
    document.body.style.overflow = '';
    checksumToken++; // invalidate any checksum still being computed
}

function copyChecksum() {
    const btn = document.getElementById('pdfChecksum');
    const hash = btn.dataset.fullHash;
    if (!hash) return;
    navigator.clipboard.writeText(hash).catch(() => {});
    const t = I18N[reportsLanguage];
    const original = btn.textContent;
    btn.textContent = t.checksumCopied;
    btn.classList.add('pdf-checksum--copied');
    setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('pdf-checksum--copied');
    }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    // Language is chosen on the main page: it arrives via ?lang= (standalone) or postMessage (panel)
    const requested = new URLSearchParams(location.search).get('lang');
    if (I18N[requested]) reportsLanguage = requested;
    applyReportsLanguage();

    const grid = document.getElementById('reportsGrid');
    const openFromCard = card => {
        if (card && card.dataset.pdf) openPdfModal(card.dataset.name, card.dataset.pdf);
    };
    grid.addEventListener('click', e => openFromCard(e.target.closest('.report-card')));
    grid.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFromCard(e.target.closest('.report-card'));
        }
    });

    document.getElementById('pdfModal').addEventListener('click', e => {
        if (e.target.id === 'pdfModal') closePdfModal();
    });

    document.getElementById('pdfChecksum').addEventListener('click', copyChecksum);

    const embedded = document.documentElement.classList.contains('embed') && window.parent !== window;
    const closeParentPanel = () => window.parent.postMessage({ type: 'close-reports' }, '*');

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (document.getElementById('pdfModal').classList.contains('active')) closePdfModal();
        else if (embedded) closeParentPanel();
    });

    if (embedded) {
        // Inside the portfolio's sliding panel: slide back instead of navigating
        document.getElementById('backLink').addEventListener('click', e => {
            e.preventDefault();
            closeParentPanel();
        });
        // The portfolio pushes its language choice down to the panel
        window.addEventListener('message', e => {
            if (e.data && e.data.type === 'set-lang' && I18N[e.data.lang]) {
                reportsLanguage = e.data.lang;
                applyReportsLanguage();
            }
        });
    }
});
