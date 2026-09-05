// ==========================================================================
// Interactive Roadmap with Sinuous Path and Checkpoints
// ==========================================================================

// Roadmap data structure
const roadmapData = [
    {
        id: 1,
        title: 'eJPTv2',
        shortTitle: 'eJPTv2',
        date: '2025',
        status: 'completed',
        type: 'certification',
        description: 'eLearnSecurity Junior Penetration Tester certification',
        key: 'ejptv2'
    },
    {
        id: 2,
        title: 'Systems Information Engineering',
        shortTitle: 'Bachelor\'s Degree',
        date: '2026',
        status: 'completed',
        type: 'degree',
        description: 'Information Systems Engineering from Universidad de Alcalá',
        key: 'tfg'
    },
    {
        id: 3,
        title: 'eCPPT',
        shortTitle: 'eCPPT',
        date: 'Summer 2026',
        status: 'completed',
        type: 'certification',
        description: 'eLearnSecurity Certified Professional Penetration Tester',
        key: 'ecppt'
    },
    {
        id: 4,
        title: 'Master\'s in Cybersecurity',
        shortTitle: 'Master\'s Degree',
        date: '2027',
        status: 'in-progress',
        type: 'degree',
        description: 'Master\'s in Cybersecurity (UNIR) - OT/ICS Security focus',
        key: 'master'
    },
    {
        id: 5,
        title: 'Cloud Fundamentals',
        shortTitle: 'Azure & AWS',
        date: '2027',
        status: 'planned',
        type: 'certification',
        description: 'Azure Fundamentals (AZ-900) & AWS Fundamentals',
        key: 'cloud'
    },
    {
        id: 6,
        title: 'ISO 27001 Internal Auditor',
        shortTitle: 'ISO 27001',
        date: '2027',
        status: 'planned',
        type: 'certification',
        description: 'Information security management systems auditing',
        key: 'iso'
    },
    {
        id: 7,
        title: 'eWPT',
        shortTitle: 'eWPT',
        date: 'Summer 2027',
        status: 'planned',
        type: 'certification',
        description: 'Web Application Penetration Tester',
        key: 'ewpt'
    },
    {
        id: 8,
        title: 'eWPTx',
        shortTitle: 'eWPTx',
        date: 'Summer 2028',
        status: 'planned',
        type: 'certification',
        description: 'Web Application Penetration Tester eXtreme',
        key: 'ewptx'
    },
    {
        id: 9,
        title: 'OSCP',
        shortTitle: 'OSCP',
        date: '2028-2029',
        status: 'planned',
        type: 'certification',
        description: 'Offensive Security Certified Professional',
        key: 'oscp'
    }
];

function initRoadmap() {
    const roadmapSvg = document.getElementById('roadmapPath');
    const checkpointsContainer = document.getElementById('roadmapCheckpoints');

    if (!roadmapSvg || !checkpointsContainer) return;

    // Detect mobile
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    // Calculate path based on number of items and layout
    const pathData = isMobile ? generateVerticalPath(roadmapData.length) : generateSinuousPath(roadmapData.length);

    // Gradient direction changes for mobile (vertical)
    const gradientAttrs = isMobile ? 'x1="0%" y1="0%" x2="0%" y2="100%"' : 'x1="0%" y1="0%" x2="100%" y2="0%"';
    const strokeWidth = isMobile ? '6' : '4'; // Thicker line for mobile

    // Update viewBox for mobile/desktop
    if (isMobile) {
        roadmapSvg.setAttribute('viewBox', '0 0 300 700');
        console.log('Mobile roadmap path:', pathData);
    } else {
        roadmapSvg.setAttribute('viewBox', '0 0 1200 400');
    }

    // Create SVG with gradient definition and path
    roadmapSvg.innerHTML = `
        <defs>
            <linearGradient id="pathGradient" ${gradientAttrs}>
                <stop offset="0%" style="stop-color:#4caf50;stop-opacity:1" />
                <stop offset="30%" style="stop-color:#ffc107;stop-opacity:1" />
                <stop offset="60%" style="stop-color:#7209b7;stop-opacity:0.9" />
                <stop offset="100%" style="stop-color:#5a189a;stop-opacity:0.8" />
            </linearGradient>
        </defs>
        <path d="${pathData}" stroke="url(#pathGradient)" stroke-width="${strokeWidth}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `;

    // Create checkpoints
    roadmapData.forEach((item, index) => {
        const checkpoint = createCheckpoint(item, index, roadmapData.length);
        checkpointsContainer.appendChild(checkpoint);
    });

    // Re-initialize on resize (for mobile/desktop switch)
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Clear and re-render
            const newIsMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                checkpointsContainer.innerHTML = '';
                initRoadmap();
            }
        }, 250);
    });
}

function generateVerticalPath(itemCount) {
    const containerWidth = 300;
    const containerHeight = 700;

    // Simple straight vertical line from top to bottom
    const x = containerWidth / 2; // Center horizontally (150)
    const startY = 20; // Start with padding
    const endY = containerHeight - 20; // End with padding

    // Straight line path
    return `M ${x} ${startY} L ${x} ${endY}`;
}

function generateSinuousPath(itemCount) {
    const points = [];
    const containerWidth = 1200; // Max width (must match viewBox)
    const containerHeight = 400;  // Max height (must match viewBox)

    // Same spacing calculation as createCheckpoint
    const spacing = containerWidth / (itemCount - 1);

    for (let i = 0; i < itemCount; i++) {
        const x = i * spacing;
        // EXACT same formula as createCheckpoint
        const y = containerHeight / 2 + Math.sin(i * 0.8) * 80;
        points.push({ x, y });
    }

    // Create smooth SVG path
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        // Control points for smooth curves
        const cp1x = prev.x + (curr.x - prev.x) / 3;
        const cp1y = prev.y;
        const cp2x = prev.x + (2 * (curr.x - prev.x)) / 3;
        const cp2y = curr.y;

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    return path;
}

function createCheckpoint(item, index, total) {
    const checkpoint = document.createElement('div');
    checkpoint.classList.add('roadmap-checkpoint');
    checkpoint.classList.add(`status-${item.status}`);

    // Detect mobile
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    // Calculate position along path
    let x, y;
    if (isMobile) {
        // Vertical layout for mobile - straight line
        const containerWidth = 300;
        const containerHeight = 700;
        const padding = 20;
        const usableHeight = containerHeight - (padding * 2);
        const spacing = usableHeight / (total - 1);
        x = containerWidth / 2;
        y = padding + (index * spacing);

        checkpoint.style.left = `${(x / containerWidth) * 100}%`;
        checkpoint.style.top = `${(y / containerHeight) * 100}%`;
    } else {
        // Sinuous layout for desktop
        const containerWidth = 1200;
        const containerHeight = 400;
        const spacing = containerWidth / (total - 1);
        x = index * spacing;
        y = containerHeight / 2 + Math.sin(index * 0.8) * 80;

        checkpoint.style.left = `${(x / containerWidth) * 100}%`;
        checkpoint.style.top = `${(y / containerHeight) * 100}%`;
    }

    // Status icon
    let statusIcon = '';
    if (item.status === 'completed') {
        statusIcon = '✓';
    } else if (item.status === 'in-progress') {
        statusIcon = '⟳';
    } else {
        statusIcon = '○';
    }

    checkpoint.innerHTML = `
        <div class="checkpoint-marker">${statusIcon}</div>
        <div class="checkpoint-content">
            <div class="checkpoint-title">${item.shortTitle}</div>
            <div class="checkpoint-date">${item.date}</div>
        </div>
        <div class="checkpoint-tooltip">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span class="checkpoint-status">${item.status.replace('-', ' ')}</span>
        </div>
    `;

    // Handle hover for tooltip
    const tooltip = checkpoint.querySelector('.checkpoint-tooltip');

    checkpoint.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
        requestAnimationFrame(() => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
    });

    checkpoint.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.display = 'none';
        }, 300);
    });

    checkpoint.addEventListener('click', () => {
        if (item.key) {
            openSidebar(item.key);
        }
    });

    return checkpoint;
}

// Add new checkpoint dynamically
function addCheckpoint(checkpointData) {
    roadmapData.push(checkpointData);
    initRoadmap(); // Re-render roadmap
}
