// ==========================================================================
// Main Application Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    createParticles();
    initNavigation();
    initSearch();
    initSidebarClickOutside();
    initRoadmap();

    console.log('Portfolio initialized successfully');
});
