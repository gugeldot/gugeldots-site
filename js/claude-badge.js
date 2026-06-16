// ==========================================================================
// Claude Badge Animation
// ==========================================================================

function initClaudeBadgeAnimation() {
    const badgeSpan = document.querySelector('.claude-badge span');
    const text = 'Created with Claude';

    // Set the full text immediately (hidden by CSS)
    badgeSpan.textContent = text;

    // Wait 1s delay + 1s line animation = 2s, then reveal text
    setTimeout(() => {
        badgeSpan.classList.add('typing');
    }, 2000);
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClaudeBadgeAnimation);
} else {
    initClaudeBadgeAnimation();
}
