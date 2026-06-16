// ==========================================================================
// Interactive Roadmap with Sinuous Path and Checkpoints
// ==========================================================================

// Roadmap data structure
const roadmapData = [
    {
        id: 1,
        title: 'Systems Information Engineering',
        shortTitle: 'Bachelor\'s Degree',
        date: '2026',
        status: 'completed',
        type: 'degree',
        description: 'Information Systems Engineering from Universidad de Alcalá',
        key: 'tfg'
    },
    {
        id: 2,
        title: 'eJPTv2',
        shortTitle: 'eJPTv2',
        date: '2025',
        status: 'completed',
        type: 'certification',
        description: 'eLearnSecurity Junior Penetration Tester certification',
        key: 'ejptv2'
    },
    {
        id: 3,
        title: 'eCPPT',
        shortTitle: 'eCPPT',
        date: 'Summer 2026',
        status: 'in-progress',
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
        title: 'eWPTx',
        shortTitle: 'eWPTx',
        date: 'Summer 2027',
        status: 'planned',
        type: 'certification',
        description: 'Web Application Penetration Tester eXtreme',
        key: 'ewptx'
    },
    {
        id: 8,
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

    // Calculate path based on number of items
    const pathData = generateSinuousPath(roadmapData.length);

    // Create SVG with gradient definition and path
    roadmapSvg.innerHTML = `
        <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#4caf50;stop-opacity:0.8" />
                <stop offset="30%" style="stop-color:#ffc107;stop-opacity:0.8" />
                <stop offset="60%" style="stop-color:#7209b7;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#5a189a;stop-opacity:0.4" />
            </linearGradient>
        </defs>
        <path d="${pathData}" stroke="url(#pathGradient)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    `;

    // Create checkpoints
    roadmapData.forEach((item, index) => {
        const checkpoint = createCheckpoint(item, index, roadmapData.length);
        checkpointsContainer.appendChild(checkpoint);
    });
}

function generateSinuousPath(itemCount) {
    const points = [];
    const containerWidth = 1200; // Max width
    const containerHeight = 400;
    const spacing = containerWidth / (itemCount - 1);

    for (let i = 0; i < itemCount; i++) {
        const x = i * spacing;
        // Sinusoidal wave for vertical position
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

    // Calculate position along sinuous path
    const containerWidth = 1200;
    const containerHeight = 400;
    const spacing = containerWidth / (total - 1);
    const x = index * spacing;
    const y = containerHeight / 2 + Math.sin(index * 0.8) * 80;

    checkpoint.style.left = `${(x / containerWidth) * 100}%`;
    checkpoint.style.top = `${(y / containerHeight) * 100}%`;

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
