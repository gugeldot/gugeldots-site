// ==========================================================================
// Search Functionality
// ==========================================================================

const searchableContent = [
    { term: 'BadUSB', section: 3, desc: 'Hardware security research project' },
    { term: 'DevSecOps', section: 3, desc: 'AI-assisted pipeline project' },
    { term: 'SLYS', section: 3, desc: 'File fragmentation tool' },
    { term: 'IRONGATE', section: 3, desc: 'Industrial protocol fuzzer' },
    { term: 'eJPTv2', section: 2, desc: 'Junior penetration tester certification (completed)' },
    { term: 'eCPPT', section: 2, desc: 'Penetration testing certification' },
    { term: 'OSCP', section: 2, desc: 'Offensive security certification' },
    { term: 'eWPTx', section: 2, desc: 'Web application security certification' },
    { term: 'Modbus', section: 3, desc: 'Industrial protocol research' },
    { term: 'S7comm', section: 3, desc: 'Siemens protocol analysis' },
    { term: 'Rust', section: 3, desc: 'Programming language used in projects' },
    { term: 'Python', section: 3, desc: 'Programming language for security tools' },
    { term: 'Penetration Testing', section: 1, desc: 'Core expertise area' },
    { term: 'OT/ICS', section: 1, desc: 'Industrial control systems security' },
    { term: 'GitHub', section: 4, desc: 'Contact and projects' },
    { term: 'Master', section: 2, desc: 'Cybersecurity master\'s degree' },
    { term: 'UNIR', section: 2, desc: 'Universidad Internacional de La Rioja' },
    { term: 'Azure', section: 2, desc: 'Cloud certification planned' },
    { term: 'AWS', section: 2, desc: 'Cloud certification planned' },
    { term: 'ISO 27001', section: 2, desc: 'Security management certification' },
    { term: 'HackTheBox', section: 3, desc: '70+ rooted machines • Professional Grade 3' },
    { term: 'TryHackMe', section: 3, desc: 'Level Master • Top 3% • 180+ rooms' },
];

function typewriterPlaceholder(element, text, speed = 100) {
    let i = 0;
    element.placeholder = '';

    const typing = setInterval(() => {
        if (i < text.length) {
            element.placeholder += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            isTyping = false;
        }
    }, speed);

    return typing;
}

let typingInterval;
let isTyping = false;

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchContainer = searchInput.closest('.search-container');
    const placeholderText = 'Search in Portfolio';

    searchInput.placeholder = '';

    searchContainer.addEventListener('mouseenter', () => {
        searchContainer.classList.add('expanded');
        if (!isTyping && searchInput.placeholder !== placeholderText) {
            isTyping = true;
            if (typingInterval) clearInterval(typingInterval);
            typingInterval = typewriterPlaceholder(searchInput, placeholderText, 80);
        }
    });

    searchContainer.addEventListener('mouseleave', () => {
        if (!searchInput.matches(':focus')) {
            if (typingInterval) clearInterval(typingInterval);
            searchContainer.classList.remove('expanded');
            searchInput.placeholder = '';
            isTyping = false;
        }
    });

    searchInput.addEventListener('focus', () => {
        searchContainer.classList.add('expanded');
        // Si está escribiendo, completar el texto inmediatamente
        if (isTyping) {
            if (typingInterval) clearInterval(typingInterval);
            searchInput.placeholder = placeholderText;
            isTyping = false;
        } else if (searchInput.placeholder !== placeholderText) {
            searchInput.placeholder = placeholderText;
        }
    });

    searchInput.addEventListener('blur', () => {
        if (!searchContainer.matches(':hover')) {
            if (typingInterval) clearInterval(typingInterval);
            searchContainer.classList.remove('expanded');
            searchInput.placeholder = '';
            isTyping = false;
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }

        const matches = searchableContent.filter(item =>
            item.term.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            searchResults.innerHTML = matches.map(match =>
                `<div class="search-result-item" onclick="handleSearchResult(${match.section})">
                    <strong>${match.term}</strong><br>
                    <small>${match.desc}</small>
                </div>`
            ).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.classList.add('active');
        }
    });

    searchInput.addEventListener('blur', () => {
        setTimeout(() => searchResults.classList.remove('active'), 200);
    });
}

function handleSearchResult(section) {
    scrollToSection(section);
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').classList.remove('active');
}
