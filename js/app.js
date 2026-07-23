// ==========================================================================
// Main Application Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile detection FIRST (affects layout)
    initMobileDetection();

    // Initialize all other modules
    createParticles();
    initNavigation();
    initSearch();
    initSidebarClickOutside();
    initRoadmap();

    console.log('Portfolio initialized successfully');
});
