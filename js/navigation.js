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
        // Mobile: vertical scroll
        container.style.transform = `translateY(-${index * 100}vh)`;
    } else {
        // Desktop: horizontal scroll
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

        if (isMobile) {
            // Mobile: up/down arrow keys
            if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
                scrollToSection(currentSection + 1);
            } else if (e.key === 'ArrowUp' && currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        } else {
            // Desktop: left/right arrow keys
            if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
                scrollToSection(currentSection + 1);
            } else if (e.key === 'ArrowLeft' && currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        }

        if (e.key === 'Escape') {
            closeSidebar();
            closeCVModal();
        }
    });
}

// Wheel navigation
function initWheelNav() {
    let scrollTimeout;
    document.addEventListener('wheel', (e) => {
        // Check if scrolling inside a scrollable container
        const target = e.target;
        const scrollableContainer = target.closest('.repos-grid, .roadmap-container, .section');

        // If inside repos-grid or other scrollable containers, don't navigate sections
        if (scrollableContainer && (
            scrollableContainer.classList.contains('repos-grid') ||
            (scrollableContainer.classList.contains('section') && scrollableContainer.scrollHeight > scrollableContainer.clientHeight)
        )) {
            // Let the container handle its own scroll
            return;
        }

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
    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;

    const scrollContainer = document.getElementById('scrollContainer');

    scrollContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    scrollContainer.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;
        const diffY = touchStartY - touchEndY;
        const diffX = touchStartX - touchEndX;
        const minSwipeDistance = 50;

        if (isMobile) {
            // Mobile: vertical swipe
            if (Math.abs(diffY) > minSwipeDistance) {
                if (diffY > 0 && currentSection < totalSections - 1) {
                    // Swipe up - go to next section
                    scrollToSection(currentSection + 1);
                } else if (diffY < 0 && currentSection > 0) {
                    // Swipe down - go to previous section
                    scrollToSection(currentSection - 1);
                }
            }
        } else {
            // Desktop: horizontal swipe (for touchscreen laptops)
            if (Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0 && currentSection < totalSections - 1) {
                    // Swipe left - go to next section
                    scrollToSection(currentSection + 1);
                } else if (diffX < 0 && currentSection > 0) {
                    // Swipe right - go to previous section
                    scrollToSection(currentSection - 1);
                }
            }
        }
    }
}

// Initialize all navigation
function initNavigation() {
    initNavDots();
    initKeyboardNav();
    initWheelNav();
    initTouchNav();
}
