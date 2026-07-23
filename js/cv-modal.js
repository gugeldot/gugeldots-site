// ==========================================================================
// CV Modal
// ==========================================================================

function openCVModal() {
    document.getElementById('cvModal').classList.add('active');

    // Prevent body scroll when modal is open
    if (window.isMobileDevice && window.isMobileDevice()) {
        document.body.style.overflow = 'hidden';
    }
}

function closeCVModal() {
    document.getElementById('cvModal').classList.remove('active');

    // Restore body scroll
    document.body.style.overflow = '';
}
