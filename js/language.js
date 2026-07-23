// ==========================================================================
// Language Toggle - English / Español
// ==========================================================================

let currentLanguage = 'en';

const translations = {
    en: {
        // Hero Section
        heroTitle: "Rodrigo Palomo Cuenca",
        heroNickname: "GUGELDOT",
        heroSubtitle: "Cybersecurity Enthusiast",
        heroTagline: "Information Systems Engineer exploring OT/ICS Security and Penetration Testing<br>Building skills in offensive security and industrial systems",

        // About Section
        aboutTitle: "About Me",
        aboutSubtitle: "Information Systems Engineer from University of Alcalá de Henares, Spain<br>Currently pursuing Master's in Cybersecurity at UNIR, focusing on OT/ICS Security",

        // Roadmap
        roadmapTitle: "Certification Roadmap",

        // Projects
        projectsTitle: "Academic & Research Projects",

        // Repos
        reposTitle: "GitHub Repositories",

        // Contact
        contactTitle: "Get In Touch",
        contactText: "Interested in collaboration or have questions? Let's connect.",
        contactFooter: "© 2026 Rodrigo Palomo Cuenca<br>Cybersecurity Researcher | Pentester | OT/ICS Security Specialist"
    },
    es: {
        // Hero Section
        heroTitle: "Rodrigo Palomo Cuenca",
        heroNickname: "GUGELDOT",
        heroSubtitle: "Entusiasta de Ciberseguridad",
        heroTagline: "Ingeniero de Sistemas de Información explorando Seguridad OT/ICS y Pentesting<br>Desarrollando habilidades en seguridad ofensiva y sistemas industriales",

        // About Section
        aboutTitle: "Sobre Mí",
        aboutSubtitle: "Ingeniero de Sistemas de Información de la Universidad de Alcalá de Henares, España<br>Actualmente cursando Máster en Ciberseguridad en UNIR, enfocado en Seguridad OT/ICS",

        // Roadmap
        roadmapTitle: "Hoja de Ruta de Certificaciones",

        // Projects
        projectsTitle: "Proyectos Académicos e Investigación",

        // Repos
        reposTitle: "Repositorios de GitHub",

        // Contact
        contactTitle: "Contacta Conmigo",
        contactText: "¿Interesado en colaborar o tienes preguntas? Hablemos.",
        contactFooter: "© 2026 Rodrigo Palomo Cuenca<br>Investigador en Ciberseguridad | Pentester | Especialista en Seguridad OT/ICS"
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateLanguage();
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
        element.textContent = element.dataset[currentLanguage];
    });

    // Update specific sections
    updateHeroSection(t);
    updateAboutSection(t);
    updateRoadmapSection(t);
    updateProjectsSection(t);
    updateReposSection(t);
    updateContactSection(t);
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
}

function updateProjectsSection(t) {
    const projectsTitle = document.querySelector('.section:has(.projects-grid) h2');
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;
}

function updateReposSection(t) {
    const reposTitle = document.querySelector('.repos-wrapper h2');
    if (reposTitle) reposTitle.textContent = t.reposTitle;
}

function updateContactSection(t) {
    const contactTitle = document.querySelector('.contact-container h2');
    const contactText = document.querySelector('.contact-container > p:first-of-type');
    const contactFooter = document.querySelector('.contact-container > p:last-of-type');

    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactText) contactText.textContent = t.contactText;
    if (contactFooter) contactFooter.innerHTML = t.contactFooter;
}

// Make toggle function globally accessible
window.toggleLanguage = toggleLanguage;
