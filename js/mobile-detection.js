// ==========================================================================
// Mobile Detection & Adaptive Layout
// ==========================================================================

function isMobileDevice() {
    // Check for mobile devices
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check screen size
    const isMobileScreen = window.innerWidth <= 768;

    // Check user agent
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

    // Check touch capability
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    return isMobileScreen || isMobileUA || isTouchDevice;
}

function applyMobileLayout() {
    const body = document.body;
    const mainWrapper = document.getElementById('mainWrapper');
    const scrollContainer = document.getElementById('scrollContainer');

    // Add mobile class to body for CSS targeting
    body.classList.add('mobile-layout');

    // Change scroll container to vertical layout
    if (scrollContainer) {
        scrollContainer.classList.add('mobile-vertical');
    }

    console.log('Mobile layout applied');
}

function applyDesktopLayout() {
    const body = document.body;
    const scrollContainer = document.getElementById('scrollContainer');

    body.classList.remove('mobile-layout');

    if (scrollContainer) {
        scrollContainer.classList.remove('mobile-vertical');
    }

    console.log('Desktop layout applied');
}

function initMobileDetection() {
    // Apply appropriate layout on load
    if (isMobileDevice()) {
        applyMobileLayout();
    } else {
        applyDesktopLayout();
    }

    // Handle orientation and resize changes
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (isMobileDevice()) {
                applyMobileLayout();
            } else {
                applyDesktopLayout();
            }
        }, 250);
    });
}

// Export for global access
window.isMobileDevice = isMobileDevice;
