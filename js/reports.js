// ==========================================================================
// Reports page - report cards, PDF viewer and language toggle
// ==========================================================================

// Set `pdf` to the exported file once a report is ready; null shows "Coming soon".
// `sha256`: hardcoded checksum of that exact pdf file, computed with `sha256sum reports/<file>.pdf`.
// Recompute and update it by hand whenever a report's pdf is regenerated/replaced.
// icon: file name in resources/icons (png unless `ext` says otherwise)
// group: machines (12 easy boxes) | labs (5 large labs) | guides (2 study guides)
const REPORTS = [
    { group: 'machines', name: 'Editorial',   icon: 'editorial',   meta: 'Hack The Box · Linux · Easy',   tags: ['SSRF', 'Git secrets', 'Sudo abuse'],            pdf: 'reports/editorial.pdf', sha256: 'cd6f05fddad325f0a2722cd6833b2dcbc0221bf7a4fb5e6d7626758c860f0dd6' },
    { group: 'machines', name: 'MonitorsTwo', icon: 'monitorstwo', meta: 'Hack The Box · Linux · Easy',   tags: ['Web RCE', 'Docker', 'Cacti'],        pdf: 'reports/monitorstwo.pdf', sha256: '4814428936b46836c3d68fa200b1e467f3cdcf90a83fc053305380dd30d3fb3b' },
    { group: 'machines', name: 'TwoMillion',  icon: 'twomillion',  meta: 'Hack The Box · Linux · Easy',   tags: ['API abuse', 'RCE', 'Kernel exploit'],           pdf: 'reports/twomillion.pdf', sha256: '8b83bb2f3258849dae236f080e7e7dcff8562ecec15be8de0e5e57d24d0ea77c' },
    { group: 'machines', name: 'Sea',         icon: 'sea',         meta: 'Hack The Box · Linux · Easy',   tags: ['XSS', 'Tunneling', 'SUID'],                     pdf: 'reports/sea.pdf', sha256: '967e284fa76ee894f12a8d8010a51f3f6944388cfc724345c5bbc0c8afa56ad3' },
    { group: 'machines', name: 'Fluffy',      icon: 'fluffy',      meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'ADCS', 'ESC16'], pdf: 'reports/fluffy.pdf', sha256: '5a6e7775e5a21ae601822a7fbfd365a089c098ea01afd6e5b62cb58a360f78d0' },
    { group: 'machines', name: 'Support',     icon: 'support',     meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'LDAP', 'RBCD'],             pdf: 'reports/support.pdf', sha256: '37bb54ba7573b523485d32da0cf93c2183c4652305a82767fa4c15c377e4ef60' },
    { group: 'machines', name: 'Pilgrimage',  icon: 'pilgrimage',  meta: 'Hack The Box · Linux · Easy',   tags: ['Git secrets', 'File read', 'Cron'],             pdf: 'reports/pilgrimage.pdf', sha256: 'c6cf36e881fcd62e6aff8c09ff3a6e2bc2ed9d23138884066c104047528c9b00' },
    { group: 'machines', name: 'Keeper',      icon: 'keeper',      meta: 'Hack The Box · Linux · Easy',   tags: ['Default creds', 'KeePass', 'SSH keys'],         pdf: 'reports/keeper.pdf', sha256: '214a5362ac0823d1d159aea8b6758e0b2f442eda3af24a9247863a4cb91acd49' },
    { group: 'machines', name: 'Analytics',   icon: 'analytics',   meta: 'Hack The Box · Linux · Easy',   tags: ['Web RCE', 'Docker', 'Kernel exploit'],          pdf: 'reports/analytics.pdf', sha256: 'b562649c5c554fbd1f66c311676e160bebcb4b73afed55eec677b28dc7f37a03' },
    { group: 'machines', name: 'Valentine',   icon: 'valentine',   meta: 'Hack The Box · Linux · Easy',   tags: ['Heartbleed', 'SSH keys', 'tmux'],               pdf: 'reports/valentine.pdf', sha256: 'e2f334fbdf95af62e5bcfb1df36df58a5b9f8957fc4def77a1c2b6750b03f775' },
    { group: 'machines', name: 'Cicada',      icon: 'cicada',      meta: 'Hack The Box · Windows · Easy', tags: ['Active Directory', 'SMB', 'SeBackup'],          pdf: 'reports/cicada.pdf', sha256: '693d95be72ff8691c3adb9c7e87641c00e2da7e255908dc6171021a749309dff' },
    { group: 'machines', name: 'SteamCloud',  icon: 'steamcloud',  meta: 'Hack The Box · Linux · Easy',   tags: ['Kubernetes', 'Kubelet', 'Pod escape'],    pdf: 'reports/steamcloud.pdf', sha256: '26788425db12d0276891baa5b6a471cefce658e5413e7890bf923d9030e23b12' },
    { group: 'machines', name: 'Paper',       icon: 'paper',       meta: 'Hack The Box · Linux · Easy',   tags: ['WordPress', 'Info leak', 'Rocket.Chat'],  pdf: null },
    { group: 'machines', name: 'Usage',       icon: 'usage',       meta: 'Hack The Box · Linux · Easy',   tags: ['SQL injection', 'Laravel', '7-Zip abuse'], pdf: null },
    { group: 'machines', name: 'Artificial',  icon: 'artificial',  meta: 'Hack The Box · Linux · Easy',   tags: ['Keras RCE', 'SQLite creds', 'Backrest'],  pdf: null },

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
        checksumCopied: 'Copied!', checksumTitle: 'Click to copy the full SHA-256 hash',
        groups: {
            machines: ['Machines', ''],
            labs: ['Labs & Large Machines', 'Multi-host environments: Active Directory, pivoting and recon'],
            guides: ['Study Guides', 'Public syllabus, methodology and tooling only — no exam content']
        }
    },
    es: {
        soon: 'Próximamente', ready: 'Disponible', view: 'Ver informe',
        checksumCopied: '¡Copiado!', checksumTitle: 'Clic para copiar el hash SHA-256 completo',
        groups: {
            machines: ['Máquinas', ''],
            labs: ['Labs y máquinas grandes', 'Entornos multi-host: Active Directory, pivoting y reconocimiento'],
            guides: ['Guías de estudio', 'Solo syllabus público, metodología y herramientas — sin contenido de examen']
        }
    }
};

function shortHash(hash) {
    return `${hash.slice(0, 6)}…${hash.slice(-6)}`;
}

function updateChecksumBadge(sha256) {
    const t = I18N[reportsLanguage];
    const btn = document.getElementById('pdfChecksum');
    if (!sha256) {
        btn.hidden = true;
        return;
    }
    btn.hidden = false;
    btn.textContent = `SHA-256 ${shortHash(sha256)}`;
    btn.title = t.checksumTitle;
    btn.dataset.fullHash = sha256;
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
        ? `class="report-card" tabindex="0" role="button" data-pdf="${escapeHtml(r.pdf)}" data-name="${escapeHtml(r.name)}" data-sha256="${escapeHtml(r.sha256 || '')}"`
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

function openPdfModal(name, pdf, sha256) {
    document.getElementById('pdfTitle').textContent = name;
    document.getElementById('pdfFrame').src = pdf;
    document.getElementById('pdfOpen').href = pdf;
    document.getElementById('pdfDownload').href = pdf;
    document.getElementById('pdfModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateChecksumBadge(sha256);
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
    document.getElementById('pdfFrame').src = 'about:blank';
    document.body.style.overflow = '';
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
        if (card && card.dataset.pdf) openPdfModal(card.dataset.name, card.dataset.pdf, card.dataset.sha256);
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
