// ==========================================================================
// Mobile Detection & Warning Modal
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

function hasSeenMobileWarning() {
    return localStorage.getItem('portfolioMobileWarningSeen') === 'true';
}

function setMobileWarningSeen() {
    localStorage.setItem('portfolioMobileWarningSeen', 'true');
}

function createMobileWarningModal() {
    const modal = document.createElement('div');
    modal.id = 'mobileWarningModal';
    modal.className = 'mobile-warning-modal active';

    modal.innerHTML = `
        <div class="mobile-warning-content">
            <div class="mobile-warning-icon">📱</div>
            <h2>Mobile Device Detected</h2>
            <p>This portfolio is optimized for <strong>desktop viewing</strong> to provide the best interactive experience.</p>
            <p>Some features and animations may not display correctly on mobile devices.</p>
            <div class="mobile-warning-recommendations">
                <p><strong>For the best experience:</strong></p>
                <ul>
                    <li>View on a desktop or laptop computer</li>
                    <li>Use landscape orientation if viewing on tablet</li>
                    <li>Enable JavaScript for full functionality</li>
                </ul>
            </div>
            <div class="mobile-warning-buttons">
                <button class="mobile-warning-btn primary" onclick="closeMobileWarning(true)">
                    Continue Anyway
                </button>
                <button class="mobile-warning-btn secondary" onclick="closeMobileWarning(false)">
                    I Understand
                </button>
            </div>
            <label class="mobile-warning-checkbox">
                <input type="checkbox" id="dontShowAgain">
                <span>Don't show this again</span>
            </label>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeMobileWarning(dontShowAgain) {
    const modal = document.getElementById('mobileWarningModal');
    const checkbox = document.getElementById('dontShowAgain');

    if (checkbox && checkbox.checked || dontShowAgain) {
        setMobileWarningSeen();
    }

    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

function initMobileDetection() {
    // Only show if it's a mobile device and user hasn't seen the warning
    if (isMobileDevice() && !hasSeenMobileWarning()) {
        // Wait a bit for page to load
        setTimeout(() => {
            createMobileWarningModal();
        }, 500);
    }
}

// Make closeMobileWarning globally accessible
window.closeMobileWarning = closeMobileWarning;
