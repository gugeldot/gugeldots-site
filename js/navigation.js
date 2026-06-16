// ==========================================================================
// Navigation & Scrolling
// ==========================================================================

let currentSection = 0;
const totalSections = 5;

function scrollToSection(index) {
    currentSection = index;
    const container = document.getElementById('scrollContainer');
    container.style.transform = `translateX(-${index * 100}vw)`;
    updateNavDots();
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
        if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            scrollToSection(currentSection + 1);
        } else if (e.key === 'ArrowLeft' && currentSection > 0) {
            scrollToSection(currentSection - 1);
        } else if (e.key === 'Escape') {
            closeSidebar();
            closeCVModal();
        }
    });
}

// Wheel navigation
function initWheelNav() {
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

// Initialize all navigation
function initNavigation() {
    initNavDots();
    initKeyboardNav();
    initWheelNav();
}
