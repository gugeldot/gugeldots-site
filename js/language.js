// ==========================================================================
// Language Toggle - English / Español
// ==========================================================================

let currentLanguage = 'en';

const translations = {
    en: {
        // Hero Section
        heroSubtitle: "Cybersecurity Enthusiast",
        heroTagline: "Information Systems Engineer exploring OT/ICS Security and Penetration Testing<br>Building skills in offensive security and industrial systems",

        // About Section
        aboutTitle: "About Me",
        aboutSubtitle: "Information Systems Engineer from University of Alcalá de Henares, Spain<br>Currently pursuing Master's in Cybersecurity at UNIR, focusing on OT/ICS Security",

        // Roadmap
        roadmapTitle: "Career Roadmap",

        // Projects
        projectsTitle: "Academic & Research Projects",
        htbStats: "+162 rooted machines • Prodigy I Rank",
        thmStats: "Level Guru • Top 2% • 180+ rooms",

        // Repos
        reposTitle: "GitHub Repositories",
        reposFilterPinned: "Pinned",
        reposFilterAll: "All Public",

        // Contact
        contactTitle: "Get In Touch",
        contactText: "Interested in collaboration or have questions? Let's connect.",
        contactEmail: "Email",
        contactGitHub: "GitHub",
        contactLinkedIn: "LinkedIn",
        contactFooter: "© 2026 Rodrigo Palomo Cuenca<br>Cybersecurity Enthusiast",

        // Search
        searchPlaceholder: "Search in Portfolio",
        searchNoResults: "No results found"
    },
    es: {
        // Hero Section
        heroSubtitle: "Entusiasta de Ciberseguridad",
        heroTagline: "Ingeniero de Sistemas de Información explorando Seguridad OT/ICS y Pentesting<br>Desarrollando habilidades en seguridad ofensiva y sistemas industriales",

        // About Section
        aboutTitle: "Sobre Mí",
        aboutSubtitle: "Ingeniero de Sistemas de Información de la Universidad de Alcalá de Henares, España<br>Actualmente cursando Máster en Ciberseguridad en UNIR, enfocado en Seguridad OT/ICS",

        // Roadmap
        roadmapTitle: "Hoja de Ruta Profesional",

        // Projects
        projectsTitle: "Proyectos Académicos e Investigación",
        htbStats: "+162 máquinas rooteadas • Rango Prodigy I",
        thmStats: "Nivel Guru • Top 2% • 180+ salas",

        // Repos
        reposTitle: "Repositorios de GitHub",
        reposFilterPinned: "Fijados",
        reposFilterAll: "Todos Públicos",

        // Contact
        contactTitle: "Contacta Conmigo",
        contactText: "¿Interesado en colaborar o tienes preguntas? Hablemos.",
        contactEmail: "Correo",
        contactGitHub: "GitHub",
        contactLinkedIn: "LinkedIn",
        contactFooter: "© 2026 Rodrigo Palomo Cuenca<br>Entusiasta de Ciberseguridad",

        // Search
        searchPlaceholder: "Buscar en el Portfolio",
        searchNoResults: "No se encontraron resultados"
    }
};

// Sidebar translations
const sidebarTranslations = {
    en: {
        penetration: {
            title: 'Penetration Testing',
            content: `
                <h3>Offensive Security Learning Path</h3>
                <p>Developing skills in identifying and exploiting vulnerabilities through hands-on practice and structured learning.</p>
                <h3>Areas of Study</h3>
                <p>• Network security assessment<br>• Web application security (OWASP Top 10)<br>• Basic exploitation techniques<br>• Vulnerability analysis<br>• Security reporting</p>
                <h3>Certifications in Progress</h3>
                <p>eCPPT completed, with plans for eWPTx and OSCP.</p>
            `
        },
        hardware: {
            title: 'Hardware Security',
            content: `
                <h3>Embedded Systems & Hardware Research</h3>
                <p>Exploring hardware-level security through academic research, focusing on USB-based attack vectors and HID emulation devices.</p>
                <h3>Research Areas</h3>
                <p>• BadUSB attack vectors<br>• Basic firmware analysis<br>• USB protocol understanding<br>• Hardware security fundamentals<br>• Detection mechanisms</p>
                <h3>Academic Work</h3>
                <p>Bachelor's thesis investigating BadUSB analysis and proposing detection approaches.</p>
            `
        },
        ot: {
            title: 'OT/ICS Security',
            content: `
                <h3>Industrial Control Systems Research</h3>
                <p>Learning about industrial security through hands-on research projects and academic study of critical infrastructure protection.</p>
                <h3>Study Areas</h3>
                <p>• Modbus TCP protocol basics<br>• S7comm protocol fundamentals<br>• PLC architecture understanding<br>• SCADA system concepts<br>• Industrial network security<br>• Protocol fuzzing research</p>
                <h3>Research Project</h3>
                <p>PROJECT IRONGATE: Developing an industrial protocol fuzzer as a learning project and research contribution.</p>
            `
        },
        devsecops: {
            title: 'DevSecOps',
            content: `
                <h3>Security in Development Pipelines</h3>
                <p>Learning to integrate security into development workflows through academic projects and practical experimentation.</p>
                <h3>Learning Focus</h3>
                <p>• CI/CD security concepts<br>• SAST/DAST tool integration<br>• Container security basics<br>• Infrastructure security<br>• Automated security testing</p>
                <h3>Master's Project</h3>
                <p>Developing an AI-assisted DevSecOps system as part of master's thesis to explore automation in security analysis.</p>
            `
        },
        tfg: {
            title: "Bachelor's Thesis: BadUSB Analysis",
            content: `
                <h3>Universidad de Alcalá | 2026</h3>
                <p><strong>Grade:</strong> 10/10 (Honors)</p>
                <p>Comprehensive research on HID emulation devices analyzing attack vectors and mitigation strategies.</p>
                <h3>Research Focus</h3>
                <p>• Attack vector analysis<br>• Firmware reverse engineering<br>• Detection mechanisms<br>• Behavioral analysis<br>• Mitigation strategies</p>
                <h3>Results</h3>
                <p>Proposed detection framework based on behavioral analysis of USB devices.</p>
            `
        },
        tfm: {
            title: "Master's Thesis: AI-Assisted DevSecOps",
            content: `
                <h3>UNIR | Expected 2027</h3>
                <p>Development of intelligent CI/CD pipeline integrating SAST and DAST with LLM assistance.</p>
                <h3>Objectives</h3>
                <p>• Optimize vulnerability detection<br>• Reduce false positives<br>• Contextual security analysis<br>• Automated remediation suggestions</p>
                <h3>Status</h3>
                <p>Implementation phase - pipeline architecture completed</p>
            `
        },
        slys: {
            title: 'SLYS: File Fragmentator',
            content: `
                <h3>Privacy-Focused Tool | Open Source</h3>
                <p>File fragmentation and encryption tool with secure self-erasure mechanism.</p>
                <h3>Features</h3>
                <p>• Fragment encryption<br>• Seed-based reconstruction<br>• Password protection<br>• Zero-overwrite deletion<br>• Cross-platform support</p>
                <h3>Technology</h3>
                <p>Rust | Cryptography | Privacy Tools</p>
            `
        },
        irongate: {
            title: 'PROJECT IRONGATE',
            content: `
                <h3>Industrial Protocol Fuzzer</h3>
                <p><strong>Status:</strong> Early Planning</p>
                <p>Rust-based fuzzer for OT/ICS protocols (Modbus TCP, S7comm) with mutation engine and anomaly detection.</p>
                <h3>Capabilities</h3>
                <p>• Protocol fuzzing (Modbus TCP, S7comm)<br>• Mutation engine<br>• PLC anomaly detection<br>• Research-focused design</p>
                <h3>Goal</h3>
                <p>Publication at industrial security conferences (S4x, ICS-CERT)</p>
            `
        },
        phd1: {
            title: 'PhD - Year 1',
            content: `
                <h3>Doctoral Studies - First Year</h3>
                <p><strong>Timeline:</strong> 2027-2028<br><strong>Status:</strong> Planned</p>
                <p>Full focus on coursework and research onboarding for the PhD program. No new certifications are scheduled during this year.</p>
            `
        },
        phd2: {
            title: 'PhD - Year 2',
            content: `
                <h3>Doctoral Studies - Second Year</h3>
                <p><strong>Timeline:</strong> 2028-2029<br><strong>Status:</strong> Planned</p>
                <p>Deepening research focus, publishing initial findings, and continuing coursework requirements.</p>
            `
        },
        phd3: {
            title: 'PhD - Year 3',
            content: `
                <h3>Doctoral Studies - Third Year</h3>
                <p><strong>Timeline:</strong> 2029-2030<br><strong>Status:</strong> Planned</p>
                <p>Core research phase - experiments, data collection, and conference publications.</p>
            `
        },
        phd4: {
            title: 'PhD - Year 4',
            content: `
                <h3>Doctoral Studies - Fourth Year</h3>
                <p><strong>Timeline:</strong> 2030-2031<br><strong>Status:</strong> Planned</p>
                <p>Consolidating research results and drafting dissertation chapters.</p>
            `
        },
        phd5: {
            title: 'PhD - Year 5',
            content: `
                <h3>Doctoral Studies - Fifth Year</h3>
                <p><strong>Timeline:</strong> 2031-2032<br><strong>Status:</strong> Planned</p>
                <p>Dissertation writing and defense, wrapping up the doctoral program.</p>
            `
        },
        inta: {
            title: 'Cybersecurity Intern - INTA',
            content: `
                <h3>Instituto Nacional de Técnica Aeroespacial «Esteban Terradas»</h3>
                <p><strong>Type:</strong> Internship<br><strong>Duration:</strong> Sep 2025 - Nov 2025 (3 months)</p>
                <p>First hands-on cybersecurity experience within Spain's national aerospace research institute, gaining exposure to security practices in a critical, high-assurance environment.</p>
            `
        },
        indraIntern: {
            title: 'Software Engineer Intern - Indra ATM',
            content: `
                <h3>Indra Group</h3>
                <p><strong>Type:</strong> Internship (Indra ATM)<br><strong>Duration:</strong> Nov 2025 - Apr 2026 (6 months)</p>
                <p>Transitioned into software engineering within Indra's Air Traffic Management division, contributing to real production systems and development workflows.</p>
            `
        },
        indraJunior: {
            title: 'Junior Software Engineer - Indra ATM',
            content: `
                <h3>Indra ATM</h3>
                <p><strong>Type:</strong> Full-time<br><strong>Duration:</strong> May 2026 - Present</p>
                <p>Promoted to Junior Software Engineer within Indra's Air Traffic Management division, continuing to build professional software development experience while pursuing cybersecurity specialization in parallel.</p>
            `
        }
    },
    es: {
        penetration: {
            title: 'Pentesting',
            content: `
                <h3>Camino de Aprendizaje en Seguridad Ofensiva</h3>
                <p>Desarrollando habilidades en identificación y explotación de vulnerabilidades a través de práctica y aprendizaje estructurado.</p>
                <h3>Áreas de Estudio</h3>
                <p>• Evaluación de seguridad de redes<br>• Seguridad de aplicaciones web (OWASP Top 10)<br>• Técnicas básicas de explotación<br>• Análisis de vulnerabilidades<br>• Reportes de seguridad</p>
                <h3>Certificaciones en Progreso</h3>
                <p>eCPPT completado, con planes para eWPTx y OSCP.</p>
            `
        },
        hardware: {
            title: 'Seguridad de Hardware',
            content: `
                <h3>Investigación en Sistemas Embebidos y Hardware</h3>
                <p>Explorando seguridad a nivel de hardware a través de investigación académica, enfocándome en vectores de ataque basados en USB y dispositivos de emulación HID.</p>
                <h3>Áreas de Investigación</h3>
                <p>• Vectores de ataque BadUSB<br>• Análisis básico de firmware<br>• Comprensión del protocolo USB<br>• Fundamentos de seguridad de hardware<br>• Mecanismos de detección</p>
                <h3>Trabajo Académico</h3>
                <p>Tesis de grado investigando análisis BadUSB y proponiendo enfoques de detección.</p>
            `
        },
        ot: {
            title: 'Seguridad OT/ICS',
            content: `
                <h3>Investigación en Sistemas de Control Industrial</h3>
                <p>Aprendiendo sobre seguridad industrial a través de proyectos de investigación prácticos y estudio académico de protección de infraestructuras críticas.</p>
                <h3>Áreas de Estudio</h3>
                <p>• Fundamentos del protocolo Modbus TCP<br>• Fundamentos del protocolo S7comm<br>• Comprensión de arquitectura PLC<br>• Conceptos de sistemas SCADA<br>• Seguridad de redes industriales<br>• Investigación en fuzzing de protocolos</p>
                <h3>Proyecto de Investigación</h3>
                <p>PROJECT IRONGATE: Desarrollando un fuzzer de protocolos industriales como proyecto de aprendizaje y contribución a la investigación.</p>
            `
        },
        devsecops: {
            title: 'DevSecOps',
            content: `
                <h3>Seguridad en Pipelines de Desarrollo</h3>
                <p>Aprendiendo a integrar seguridad en flujos de trabajo de desarrollo a través de proyectos académicos y experimentación práctica.</p>
                <h3>Enfoque de Aprendizaje</h3>
                <p>• Conceptos de seguridad CI/CD<br>• Integración de herramientas SAST/DAST<br>• Fundamentos de seguridad de contenedores<br>• Seguridad de infraestructura<br>• Pruebas de seguridad automatizadas</p>
                <h3>Proyecto de Máster</h3>
                <p>Desarrollando un sistema DevSecOps asistido por IA como parte de la tesis de máster para explorar automatización en análisis de seguridad.</p>
            `
        },
        tfg: {
            title: "TFG: Análisis de BadUSB",
            content: `
                <h3>Universidad de Alcalá | 2026</h3>
                <p><strong>Calificación:</strong> 10/10 (Matrícula de Honor)</p>
                <p>Investigación exhaustiva sobre dispositivos de emulación HID analizando vectores de ataque y estrategias de mitigación.</p>
                <h3>Enfoque de Investigación</h3>
                <p>• Análisis de vectores de ataque<br>• Ingeniería inversa de firmware<br>• Mecanismos de detección<br>• Análisis de comportamiento<br>• Estrategias de mitigación</p>
                <h3>Resultados</h3>
                <p>Marco de detección propuesto basado en análisis de comportamiento de dispositivos USB.</p>
            `
        },
        tfm: {
            title: "TFM: DevSecOps Asistido por IA",
            content: `
                <h3>UNIR | Previsto 2027</h3>
                <p>Desarrollo de pipeline CI/CD inteligente integrando SAST y DAST con asistencia LLM.</p>
                <h3>Objetivos</h3>
                <p>• Optimizar detección de vulnerabilidades<br>• Reducir falsos positivos<br>• Análisis de seguridad contextual<br>• Sugerencias de remediación automatizadas</p>
                <h3>Estado</h3>
                <p>Fase de implementación - arquitectura del pipeline completada</p>
            `
        },
        slys: {
            title: 'SLYS: Fragmentador de Archivos',
            content: `
                <h3>Herramienta de Privacidad | Código Abierto</h3>
                <p>Herramienta de fragmentación y cifrado de archivos con mecanismo de auto-borrado seguro.</p>
                <h3>Características</h3>
                <p>• Cifrado de fragmentos<br>• Reconstrucción basada en semilla<br>• Protección por contraseña<br>• Borrado con sobrescritura cero<br>• Soporte multiplataforma</p>
                <h3>Tecnología</h3>
                <p>Rust | Criptografía | Herramientas de Privacidad</p>
            `
        },
        irongate: {
            title: 'PROYECTO IRONGATE',
            content: `
                <h3>Fuzzer de Protocolos Industriales</h3>
                <p><strong>Estado:</strong> Planteamiento Temprano</p>
                <p>Fuzzer basado en Rust para protocolos OT/ICS (Modbus TCP, S7comm) con motor de mutación y detección de anomalías.</p>
                <h3>Capacidades</h3>
                <p>• Fuzzing de protocolos (Modbus TCP, S7comm)<br>• Motor de mutación<br>• Detección de anomalías en PLC<br>• Diseño enfocado a investigación</p>
                <h3>Objetivo</h3>
                <p>Publicación en conferencias de seguridad industrial (S4x, ICS-CERT)</p>
            `
        },
        phd1: {
            title: 'Doctorado - Año 1',
            content: `
                <h3>Estudios de Doctorado - Primer Año</h3>
                <p><strong>Duración:</strong> 2027-2028<br><strong>Estado:</strong> Planeado</p>
                <p>Enfoque total en cursos y adaptación a la investigación del programa de doctorado. No hay certificaciones nuevas previstas durante este año.</p>
            `
        },
        phd2: {
            title: 'Doctorado - Año 2',
            content: `
                <h3>Estudios de Doctorado - Segundo Año</h3>
                <p><strong>Duración:</strong> 2028-2029<br><strong>Estado:</strong> Planeado</p>
                <p>Profundización en la línea de investigación, primeras publicaciones y finalización de los cursos.</p>
            `
        },
        phd3: {
            title: 'Doctorado - Año 3',
            content: `
                <h3>Estudios de Doctorado - Tercer Año</h3>
                <p><strong>Duración:</strong> 2029-2030<br><strong>Estado:</strong> Planeado</p>
                <p>Fase central de investigación - experimentos, recogida de datos y publicaciones en congresos.</p>
            `
        },
        phd4: {
            title: 'Doctorado - Año 4',
            content: `
                <h3>Estudios de Doctorado - Cuarto Año</h3>
                <p><strong>Duración:</strong> 2030-2031<br><strong>Estado:</strong> Planeado</p>
                <p>Consolidación de resultados de investigación y redacción de capítulos de la tesis.</p>
            `
        },
        phd5: {
            title: 'Doctorado - Año 5',
            content: `
                <h3>Estudios de Doctorado - Quinto Año</h3>
                <p><strong>Duración:</strong> 2031-2032<br><strong>Estado:</strong> Planeado</p>
                <p>Redacción y defensa de la tesis doctoral, cierre del programa.</p>
            `
        },
        inta: {
            title: 'Becario en Ciberseguridad - INTA',
            content: `
                <h3>Instituto Nacional de Técnica Aeroespacial «Esteban Terradas»</h3>
                <p><strong>Tipo:</strong> Prácticas<br><strong>Duración:</strong> Sep 2025 - Nov 2025 (3 meses)</p>
                <p>Primera experiencia práctica en ciberseguridad dentro del instituto nacional de técnica aeroespacial, con exposición a prácticas de seguridad en un entorno crítico de alta exigencia.</p>
            `
        },
        indraIntern: {
            title: 'Becario de Ingeniería de Software - Indra ATM',
            content: `
                <h3>Indra Group</h3>
                <p><strong>Tipo:</strong> Prácticas (Indra ATM)<br><strong>Duración:</strong> Nov 2025 - Abr 2026 (6 meses)</p>
                <p>Transición a la ingeniería de software dentro de la división de Gestión de Tráfico Aéreo de Indra, contribuyendo a sistemas en producción y flujos de desarrollo reales.</p>
            `
        },
        indraJunior: {
            title: 'Ingeniero de Software Junior - Indra ATM',
            content: `
                <h3>Indra ATM</h3>
                <p><strong>Tipo:</strong> Tiempo completo<br><strong>Duración:</strong> Mayo 2026 - Actualidad</p>
                <p>Promocionado a Ingeniero de Software Junior dentro de la división de Gestión de Tráfico Aéreo de Indra, continuando el desarrollo profesional en software mientras compagina la especialización en ciberseguridad.</p>
            `
        }
    }
};

let langSwitching = false;

function toggleLanguage() {
    if (langSwitching) return;
    langSwitching = true;

    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

    // Update the toggle immediately so it feels responsive
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLanguage);
    });

    // Fade out, swap text while invisible, fade back in
    const container = document.getElementById('scrollContainer');
    if (!container) {
        updateLanguage();
        langSwitching = false;
        return;
    }
    container.classList.add('lang-fade');
    setTimeout(() => {
        updateLanguage();
        // Double rAF so the new text is laid out before fading in
        requestAnimationFrame(() => requestAnimationFrame(() => {
            container.classList.remove('lang-fade');
            setTimeout(() => { langSwitching = false; }, 300);
        }));
    }, 280);
}

function updateLanguage() {
    const t = translations[currentLanguage];

    // Update language toggle button
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Update all elements with data-en and data-es attributes
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        if (element.innerHTML && element.dataset.enHtml) {
            element.innerHTML = currentLanguage === 'en' ? element.dataset.enHtml : element.dataset.esHtml;
        } else {
            element.textContent = element.dataset[currentLanguage];
        }
    });

    // Update specific sections
    updateHeroSection(t);
    updateAboutSection(t);
    updateRoadmapSection(t);
    updateProjectsSection(t);
    updatePlatformsSection(t);
    updateReposSection(t);
    updateContactSection(t);
    updateSearchSection(t);
}

function updateSearchSection(t) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const searchContainer = searchInput.closest('.search-container');

        // Si el search box está expandido (hover o focus), actualizar placeholder
        if (searchContainer && (searchContainer.classList.contains('expanded') || searchInput.matches(':focus'))) {
            searchInput.setAttribute('placeholder', t.searchPlaceholder);
        } else {
            // Si está colapsado, dejarlo vacío (se actualizará cuando se expanda)
            searchInput.placeholder = '';
        }

        // Guardar el placeholder traducido para cuando se expanda
        searchInput.dataset.placeholderText = t.searchPlaceholder;
    }
}

function updateHeroSection(t) {
    const subtitle = document.querySelector('.hero-content .subtitle');
    const tagline = document.querySelector('.hero-content .tagline');

    if (subtitle) subtitle.innerHTML = t.heroSubtitle;
    if (tagline) tagline.innerHTML = t.heroTagline;
}

function updateAboutSection(t) {
    const aboutTitle = document.querySelector('.about-container h2');
    const aboutSubtitle = document.querySelector('.about-subtitle');

    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutSubtitle) aboutSubtitle.innerHTML = t.aboutSubtitle;
}

function updateRoadmapSection(t) {
    const roadmapTitle = document.querySelector('.roadmap-wrapper h2');
    if (roadmapTitle) roadmapTitle.textContent = t.roadmapTitle;

    // Career roadmap (lanes, nodes, tooltips) carries its own bilingual data
    // and rebuilds itself in place - see js/roadmap.js
    if (window.updateCareerRoadmapLanguage) {
        window.updateCareerRoadmapLanguage();
    }
}

function updateProjectsSection(t) {
    const projectsTitle = document.querySelector('.section:has(.projects-grid) h2');
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;
}

function updatePlatformsSection(t) {
    const htbStats = document.querySelector('.platform-badge:has([alt="HackTheBox"]) .platform-stats');
    const thmStats = document.querySelector('.platform-badge:has([alt="TryHackMe"]) .platform-stats');

    if (htbStats) htbStats.textContent = t.htbStats;
    if (thmStats) thmStats.textContent = t.thmStats;
}

function updateReposSection(t) {
    const reposTitle = document.querySelector('.repos-wrapper h2');
    if (reposTitle) reposTitle.textContent = t.reposTitle;

    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === 'pinned') {
            btn.textContent = t.reposFilterPinned;
        } else if (btn.dataset.filter === 'all') {
            btn.textContent = t.reposFilterAll;
        }
    });
}

function updateContactSection(t) {
    const contactTitle = document.querySelector('.contact-container h2');
    const contactText = document.querySelector('.contact-container > p:first-of-type');
    const contactFooter = document.querySelector('.contact-container > p:last-of-type');

    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactText) contactText.textContent = t.contactText;
    if (contactFooter) contactFooter.innerHTML = t.contactFooter;

    // Update contact link labels
    const contactLinks = document.querySelectorAll('.contact-link span');
    contactLinks.forEach(link => {
        const text = link.textContent;
        if (text === 'Email' || text === 'Correo') link.textContent = t.contactEmail;
        if (text === 'GitHub') link.textContent = t.contactGitHub;
        if (text === 'LinkedIn') link.textContent = t.contactLinkedIn;
    });
}

// Update sidebar content based on language
function getSidebarContent(key) {
    if (sidebarTranslations[currentLanguage] && sidebarTranslations[currentLanguage][key]) {
        return sidebarTranslations[currentLanguage][key];
    }
    // Fallback to original sidebarData from sidebar.js
    return window.sidebarData && window.sidebarData[key] ? window.sidebarData[key] : { title: '', content: '' };
}

// Make functions globally accessible
window.toggleLanguage = toggleLanguage;
window.getSidebarContent = getSidebarContent;
