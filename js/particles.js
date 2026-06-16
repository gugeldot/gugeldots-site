// ==========================================================================
// Background Particle Animation - Enhanced with glowing purple dust
// ==========================================================================

function createParticles() {
    const container = document.getElementById('particles');

    // Create multiple types of particles for variety - INCREASED INTENSITY (+35%)
    for (let i = 0; i < 135; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';

        // Varied sizes (smaller to larger)
        const size = Math.random() * 8 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Different animation durations for natural flow
        particle.style.animationDuration = Math.random() * 20 + 10 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';

        // Random opacity for depth effect - INCREASED
        const opacity = Math.random() * 0.6 + 0.3;
        particle.style.setProperty('--particle-opacity', opacity);

        // Add glow class to MORE particles
        if (Math.random() > 0.4) {
            particle.classList.add('particle-glow');
        }

        container.appendChild(particle);
    }

    // Create special horizontal floating particles - INCREASED (+35%)
    for (let i = 0; i < 40; i++) {
        const driftParticle = document.createElement('div');
        driftParticle.classList.add('particle-drift');

        driftParticle.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 6 + 2;
        driftParticle.style.width = size + 'px';
        driftParticle.style.height = size + 'px';
        driftParticle.style.animationDuration = Math.random() * 25 + 15 + 's';
        driftParticle.style.animationDelay = Math.random() * 15 + 's';

        container.appendChild(driftParticle);
    }
}
