// ==========================================================================
// Navigation & Scrolling
// ==========================================================================

let currentSection = 0;
const totalSections = 6;

function scrollToSection(index) {
    currentSection = index;
    const container = document.getElementById('scrollContainer');
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: scroll to section naturally (no fixed pages)
        const sections = document.querySelectorAll('.section');
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        // Desktop: horizontal scroll with transform
        container.style.transform = `translateX(-${index * 100}vw)`;
    }

    updateNavDots();
    updateDuckVisibility();
}

let duckTimeout;

function updateDuckVisibility() {
    const duckImage = document.getElementById('duckImage');

    // Clear any existing timeout
    if (duckTimeout) {
        clearTimeout(duckTimeout);
    }

    // Section 5 is the Contact section (0-indexed: Home=0, About=1, Roadmap=2, Projects=3, Repos=4, Contact=5)
    if (currentSection === 5) {
        duckTimeout = setTimeout(() => {
            duckImage.classList.add('visible');
        }, 1000);
    } else {
        duckImage.classList.remove('visible');
    }
}

function updateNavDots() {
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSection);
    });
}

// Navigation dots click handler
function initNavDots() {
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            scrollToSection(parseInt(dot.dataset.index));
        });
    });
}

// Keyboard navigation
function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

        if (!isMobile) {
            // Desktop only: left/right arrow keys
            if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
                scrollToSection(currentSection + 1);
            } else if (e.key === 'ArrowLeft' && currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        }
        // Mobile uses native scroll, no keyboard navigation needed

        if (e.key === 'Escape') {
            closeSidebar();
            closeCVModal();
        }
    });
}

// Wheel navigation
function initWheelNav() {
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    // Skip wheel navigation for mobile (use native scroll)
    if (isMobile) {
        return;
    }

    // Desktop wheel navigation only
    let scrollTimeout;
    document.addEventListener('wheel', (e) => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0 && currentSection < totalSections - 1) {
                scrollToSection(currentSection + 1);
            } else if (e.deltaY < 0 && currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        }, 50);
    }, { passive: true });
}

// Touch navigation for mobile
function initTouchNav() {
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    // Skip touch navigation for mobile (use native scroll)
    if (isMobile) {
        return;
    }

    // Desktop touch navigation only
    let touchStartX = 0;
    let touchEndX = 0;

    const scrollContainer = document.getElementById('scrollContainer');

    scrollContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    scrollContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        const minSwipeDistance = 50;

        // Desktop: horizontal swipe only
        if (Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0 && currentSection < totalSections - 1) {
                scrollToSection(currentSection + 1);
            } else if (diffX < 0 && currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        }
    }
}

// Scroll spy for mobile continuous scroll
function initScrollSpy() {
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    if (!isMobile) {
        return; // Only for mobile
    }

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateCurrentSectionFromScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function updateCurrentSectionFromScroll() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (currentSection !== index) {
                currentSection = index;
                updateNavDots();
                updateDuckVisibility();
            }
        }
    });
}

// Initialize all navigation
function initNavigation() {
    initNavDots();
    initKeyboardNav();
    initWheelNav();
    initTouchNav();
    initScrollSpy();
}
