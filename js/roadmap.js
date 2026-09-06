// ==========================================================================
// Career Roadmap - 3 parallel timelines (Working Position, Formal Education,
// Certifications) drawn as straight lines that grow left-to-right, popping
// each milestone node in as the line reaches it.
//
// Architecture: `careerLanes` is the only thing you touch to add/remove a
// milestone or a whole lane - push a node into a lane's `nodes` array, or a
// new lane object into `careerLanes` (and its id into LANE_ORDER). Every
// position (node spacing, lane spacing, canvas size) is *computed* by
// computeCareerLayout() from that data plus the LAYOUT constants below -
// nothing is hand-placed in pixels. If the canvas ends up wider than the
// viewport, the surrounding .roadmap-container scrolls horizontally rather
// than compressing nodes into an unreadable cluster.
// ==========================================================================

const SVG_NS = 'http://www.w3.org/2000/svg';

// Matches the marker colors in css/styles.css (.status-* .checkpoint-marker)
const STATUS_COLORS = {
    completed: '#4caf50',
    'in-progress': '#ffc107',
    planned: '#7209b7'
};

const careerLanes = [
    {
        id: 'work',
        label: 'Working Position',
        labelEs: 'Puesto de Trabajo',
        nodes: [
            {
                key: 'inta',
                title: 'Cybersecurity Intern',
                titleEs: 'Becario en Ciberseguridad',
                shortTitle: 'Cybersecurity Intern',
                shortTitleEs: 'Becario en Ciberseguridad',
                org: 'INTA',
                orgEs: 'INTA',
                dateLabel: 'Sep - Nov 2025',
                dateLabelEs: 'Sep - Nov 2025',
                t: 2025.667,
                status: 'completed',
                description: 'Cybersecurity internship at Spain\'s national aerospace research institute',
                descriptionEs: 'Prácticas de ciberseguridad en el instituto nacional de técnica aeroespacial'
            },
            {
                key: 'indraIntern',
                title: 'Software Engineer Intern',
                titleEs: 'Becario de Ingeniería de Software',
                shortTitle: 'SWE Intern',
                shortTitleEs: 'Becario SWE',
                org: 'Indra ATM',
                orgEs: 'Indra ATM',
                dateLabel: 'Nov 2025 - Apr 2026',
                dateLabelEs: 'Nov 2025 - Abr 2026',
                t: 2025.833,
                status: 'completed',
                description: 'Software engineering internship within Indra\'s Air Traffic Management division',
                descriptionEs: 'Prácticas de ingeniería de software en la división de Gestión de Tráfico Aéreo de Indra'
            },
            {
                key: 'indraJunior',
                title: 'Junior Software Engineer',
                titleEs: 'Ingeniero de Software Junior',
                shortTitle: 'Junior SWE',
                shortTitleEs: 'Ing. Software Jr.',
                org: 'Indra ATM',
                orgEs: 'Indra ATM',
                dateLabel: 'May 2026 - Present',
                dateLabelEs: 'Mayo 2026 - Actualidad',
                t: 2026.333,
                status: 'in-progress',
                icon: '»',
                description: 'Full-time software engineering role at Indra ATM',
                descriptionEs: 'Puesto a tiempo completo como ingeniero de software en Indra ATM'
            }
        ]
    },
    {
        id: 'education',
        label: 'Formal Education',
        labelEs: 'Formación Académica',
        nodes: [
            {
                key: 'tfg',
                title: 'Systems Information Engineering',
                titleEs: 'Ingeniería de Sistemas de Información',
                shortTitle: 'Bachelor\'s Degree',
                shortTitleEs: 'Grado',
                dateLabel: '2026',
                dateLabelEs: '2026',
                t: 2026.5,
                status: 'completed',
                description: 'Information Systems Engineering from Universidad de Alcalá',
                descriptionEs: 'Ingeniería de Sistemas de Información por la Universidad de Alcalá'
            },
            {
                key: 'master',
                title: 'Master\'s in Cybersecurity',
                titleEs: 'Máster en Ciberseguridad',
                shortTitle: 'Master\'s Degree',
                shortTitleEs: 'Máster',
                dateLabel: '2027',
                dateLabelEs: '2027',
                t: 2027.3,
                status: 'in-progress',
                description: 'Master\'s in Cybersecurity (UNIR) - OT/ICS Security focus',
                descriptionEs: 'Máster en Ciberseguridad (UNIR) - enfoque en Seguridad OT/ICS'
            },
            {
                key: 'phd1',
                title: 'PhD in Cybersecurity - Year 1',
                titleEs: 'Doctorado en Ciberseguridad - Año 1',
                shortTitle: 'PhD - Year 1',
                shortTitleEs: 'Doctorado - Año 1',
                dateLabel: '2027-2028',
                dateLabelEs: '2027-2028',
                t: 2027.667,
                status: 'planned',
                description: 'Doctoral studies begin after the Master\'s - no new certifications planned in Year 1',
                descriptionEs: 'El doctorado comienza tras el Máster - sin nuevas certificaciones previstas en el primer año'
            },
            {
                key: 'phd2',
                title: 'PhD in Cybersecurity - Year 2',
                titleEs: 'Doctorado en Ciberseguridad - Año 2',
                shortTitle: 'PhD - Year 2',
                shortTitleEs: 'Doctorado - Año 2',
                dateLabel: '2028-2029',
                dateLabelEs: '2028-2029',
                t: 2028.667,
                status: 'planned',
                description: 'Deepening research focus, publishing initial findings, continuing coursework',
                descriptionEs: 'Profundización en la investigación, primeras publicaciones y finalización de cursos'
            },
            {
                key: 'phd3',
                title: 'PhD in Cybersecurity - Year 3',
                titleEs: 'Doctorado en Ciberseguridad - Año 3',
                shortTitle: 'PhD - Year 3',
                shortTitleEs: 'Doctorado - Año 3',
                dateLabel: '2029-2030',
                dateLabelEs: '2029-2030',
                t: 2029.667,
                status: 'planned',
                description: 'Core research phase - experiments, data collection and conference publications',
                descriptionEs: 'Fase central de investigación - experimentos, recogida de datos y publicaciones en congresos'
            },
            {
                key: 'phd4',
                title: 'PhD in Cybersecurity - Year 4',
                titleEs: 'Doctorado en Ciberseguridad - Año 4',
                shortTitle: 'PhD - Year 4',
                shortTitleEs: 'Doctorado - Año 4',
                dateLabel: '2030-2031',
                dateLabelEs: '2030-2031',
                t: 2030.667,
                status: 'planned',
                description: 'Consolidating research results and drafting dissertation chapters',
                descriptionEs: 'Consolidación de resultados de investigación y redacción de capítulos de la tesis'
            },
            {
                key: 'phd5',
                title: 'PhD in Cybersecurity - Year 5',
                titleEs: 'Doctorado en Ciberseguridad - Año 5',
                shortTitle: 'PhD - Year 5',
                shortTitleEs: 'Doctorado - Año 5',
                dateLabel: '2031-2032',
                dateLabelEs: '2031-2032',
                t: 2031.667,
                status: 'planned',
                description: 'Dissertation writing and defense, wrapping up the doctoral program',
                descriptionEs: 'Redacción y defensa de la tesis doctoral, cierre del programa'
            }
        ]
    },
    {
        id: 'certifications',
        label: 'Certifications',
        labelEs: 'Certificaciones',
        nodes: [
            {
                key: 'ejptv2',
                title: 'eJPTv2',
                titleEs: 'eJPTv2',
                shortTitle: 'eJPTv2',
                shortTitleEs: 'eJPTv2',
                dateLabel: '2025',
                dateLabelEs: '2025',
                t: 2025.2,
                status: 'completed',
                description: 'eLearnSecurity Junior Penetration Tester certification',
                descriptionEs: 'Certificación eLearnSecurity Junior Penetration Tester'
            },
            {
                key: 'ecppt',
                title: 'eCPPT',
                titleEs: 'eCPPT',
                shortTitle: 'eCPPT',
                shortTitleEs: 'eCPPT',
                dateLabel: 'Summer 2026',
                dateLabelEs: 'Verano 2026',
                t: 2026.583,
                status: 'completed',
                description: 'eLearnSecurity Certified Professional Penetration Tester',
                descriptionEs: 'Certificación eLearnSecurity Certified Professional Penetration Tester'
            },
            {
                key: 'cloud',
                title: 'Cloud Fundamentals',
                titleEs: 'Fundamentos Cloud',
                shortTitle: 'Azure & AWS',
                shortTitleEs: 'Azure y AWS',
                dateLabel: '2027',
                dateLabelEs: '2027',
                t: 2027.5,
                status: 'planned',
                description: 'Azure Fundamentals (AZ-900) & AWS Fundamentals',
                descriptionEs: 'Azure Fundamentals (AZ-900) y AWS Fundamentals'
            },
            {
                key: 'iso',
                title: 'ISO 27001 Internal Auditor',
                titleEs: 'Auditor Interno ISO 27001',
                shortTitle: 'ISO 27001',
                shortTitleEs: 'ISO 27001',
                dateLabel: '2027',
                dateLabelEs: '2027',
                t: 2027.55,
                status: 'planned',
                description: 'Information security management systems auditing',
                descriptionEs: 'Auditoría de sistemas de gestión de seguridad de la información'
            },
            {
                key: 'ewptx',
                title: 'eWPTx',
                titleEs: 'eWPTx',
                shortTitle: 'eWPTx',
                shortTitleEs: 'eWPTx',
                dateLabel: 'Summer 2028',
                dateLabelEs: 'Verano 2028',
                t: 2028.583,
                status: 'planned',
                description: 'Web Application Penetration Tester eXtreme',
                descriptionEs: 'Web Application Penetration Tester eXtreme'
            },
            {
                key: 'cpts',
                title: 'CPTS',
                titleEs: 'CPTS',
                shortTitle: 'CPTS',
                shortTitleEs: 'CPTS',
                dateLabel: 'Summer 2029',
                dateLabelEs: 'Verano 2029',
                t: 2029.583,
                status: 'planned',
                description: 'HackTheBox Certified Penetration Testing Specialist',
                descriptionEs: 'HackTheBox Certified Penetration Testing Specialist'
            },
            {
                key: 'oscp',
                title: 'OSCP',
                titleEs: 'OSCP',
                shortTitle: 'OSCP',
                shortTitleEs: 'OSCP',
                dateLabel: 'TBD',
                dateLabelEs: 'Por determinar',
                status: 'planned',
                tbd: true,
                tbdAfter: 'phd3',
                tbdBefore: 'phd4',
                description: 'Offensive Security Certified Professional - timeline depends on PhD Year 3 workload',
                descriptionEs: 'Offensive Security Certified Professional - fecha pendiente de la carga del tercer año de doctorado'
            }
        ]
    }
];

const LANE_ORDER = ['work', 'education', 'certifications'];

// Every desktop measurement is derived from these - change one number here
// instead of hunting through the render code. The vertical rhythm of a lane
// row is: [labelClearance: header] -> line+markers -> [contentClearance:
// org/title/date] -> [laneGap: breathing room] -> next lane's header.
// Both nodeGap (horizontal) and laneGap (vertical) are *adaptive* - see
// computeCareerLayout(): they measure the real space .roadmap-container has
// and stretch to fill it (clamped between a min and max), so the roadmap
// uses the actual window instead of scrolling or leaving dead space.
const LAYOUT = {
    idealNodeGap: 136,     // px spacing at which markers/text render at scale 1
    minScale: 0.6,         // never shrink markers/text past 60% of full size
    maxScale: 1.7,         // never grow them past 170%, even on an ultrawide monitor
    leftMargin: 60,        // px canvas inset before the line itself starts
    rightMargin: 50,       // px canvas inset after the line itself ends
    // Prudential stretch of bare line, with no node on it, at both ends of
    // the shared axis - just a bit of visual breathing room. The first/last
    // node's hover tooltip no longer needs a big margin here to avoid
    // overflowing the canvas: see TOOLTIP_EDGE_THRESHOLD, which flips it to
    // open inward instead near either edge.
    edgeRunway: 40,
    labelClearance: 74,    // px above the line reserved for that lane's header, at scale 1
    contentClearance: 96,  // px below the line reserved for org/title/date, at scale 1
    minLaneGap: 30,        // px, floor for the adaptive gap between lanes
    maxLaneGap: 280,       // px, ceiling for the adaptive gap between lanes
    // The first lane's tooltip pops up from its marker and needs room
    // above the canvas's own top edge to not get clipped by
    // .roadmap-container's overflow-y:hidden (a tooltip is a fixed ~280px
    // box; roughly 15px gap + its own height + marker radius needs ~190px).
    // Raising this eats into the adaptive lane gap below (see
    // computeCareerLayout), which also nudges lanes a little closer
    // together - a deliberate, small trade-off.
    topMargin: 190
};

// px of vertical room to leave below the canvas (roughly the section's own
// bottom padding) when measuring how tall the canvas can be.
const BOTTOM_PADDING_ALLOWANCE = 70;

let careerRoadmapRevealed = false;
let careerObserverAttached = false;
// Bumped on every rebuild/reveal/hide so in-flight setTimeout callbacks from
// a PREVIOUS animation (e.g. a reveal that hadn't finished when the user
// scrolled away and a hide started) can recognize they're stale and skip
// applying - otherwise leaving and re-entering quickly could leave nodes in
// a half-animated, contradictory state.
let careerAnimationGeneration = 0;

function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isEs() {
    return typeof currentLanguage !== 'undefined' && currentLanguage === 'es';
}

function pick(node, field) {
    const esField = field + 'Es';
    if (isEs() && node[esField]) return node[esField];
    return node[field];
}

function laneLabelText(lane) {
    return isEs() && lane.labelEs ? lane.labelEs : lane.label;
}

function getLane(id) {
    return careerLanes.find(l => l.id === id);
}

// Maps an arbitrary point in time (e.g. "today") onto the same rank-based
// x-axis as the milestones, by interpolating/extrapolating between the two
// chronologically nearest real nodes. Lets a "Present" marker (or any future
// reference line) line up correctly with the rank scale instead of needing
// its own hand-picked pixel position.
function xForDate(t, sortedReal, leftMargin, nodeGap) {
    const n = sortedReal.length;
    if (n === 0) return leftMargin;
    if (n === 1) return leftMargin;

    let i = 0;
    while (i < n - 2 && t > sortedReal[i + 1].t) i++;
    const a = sortedReal[i];
    const b = sortedReal[i + 1];
    const frac = (t - a.t) / (b.t - a.t);
    const rank = i + frac;
    return leftMargin + rank * nodeGap;
}

function computeCareerLayout() {
    const allReal = [];
    LANE_ORDER.forEach(id => {
        getLane(id).nodes.forEach(node => {
            if (!node.tbd) allReal.push(node);
        });
    });
    allReal.sort((a, b) => a.t - b.t);

    const rankOf = new Map();
    const rankByKey = new Map();
    allReal.forEach((node, i) => {
        rankOf.set(node, i);
        rankByKey.set(node.key, i);
    });

    // Measure the real space .roadmap-container actually has, instead of
    // guessing - both axes then adapt to fill it (clamped to a sane range),
    // so the roadmap fits the window instead of relying on scrolling. Lines
    // fall back to scrolling only if the window is too narrow/short even
    // for the *minimum* legible spacing.
    const container = document.querySelector('.roadmap-container');
    const containerRect = container ? container.getBoundingClientRect() : null;
    const availableWidth = container ? container.clientWidth : 1600;
    const availableHeight = containerRect
        ? Math.max(400, window.innerHeight - containerRect.top - BOTTOM_PADDING_ALLOWANCE)
        : 600;

    // Fill the available width exactly (nodeGap = availableForNodes /
    // gapCount, uncapped) rather than clamping to a fixed minimum - a fixed
    // minimum is what forces a horizontal scrollbar on an ordinary laptop
    // window, since ~14 nodes need more width than most windows have at a
    // fixed "comfortable" spacing. Instead, `scale` (applied to markers,
    // text and vertical clearances via --roadmap-scale in CSS) shrinks or
    // grows everything to fit, and only bottoms out - falling back to
    // scroll - once even LAYOUT.minScale wouldn't be legible.
    const gapCount = allReal.length - 1;
    const availableForNodes = availableWidth - LAYOUT.leftMargin - LAYOUT.rightMargin - 2 * LAYOUT.edgeRunway;
    const rawNodeGap = gapCount > 0 ? availableForNodes / gapCount : LAYOUT.idealNodeGap;
    const absoluteMinNodeGap = LAYOUT.idealNodeGap * LAYOUT.minScale;
    const nodeGap = Math.max(absoluteMinNodeGap, rawNodeGap);
    const scale = Math.min(LAYOUT.maxScale, Math.max(LAYOUT.minScale, nodeGap / LAYOUT.idealNodeGap));
    // Nodes sit *after* the leading edgeRunway, and the line itself starts
    // edgeRunway before the first one and ends edgeRunway past the last one.
    const xOfRank = (i) => LAYOUT.leftMargin + LAYOUT.edgeRunway + i * nodeGap;
    const lineStart = LAYOUT.leftMargin;

    const labelClearance = LAYOUT.labelClearance * scale;
    const contentClearance = LAYOUT.contentClearance * scale;

    // Adaptive vertical rhythm: the parts of a lane row that MUST exist
    // (its header + its content) scale with the same factor as everything
    // else, but the breathing room between one lane's content and the next
    // lane's header stretches (or shrinks) to use whatever height is
    // actually available, clamped to a sane range - so a short window
    // compacts gracefully instead of clipping, and a tall one doesn't leave
    // a dead empty band below.
    const numLanes = LANE_ORDER.length;
    const fixedVertical = LAYOUT.topMargin
        + numLanes * labelClearance
        + numLanes * contentClearance
        + 50; // bottom buffer
    const laneGapCount = numLanes - 1;
    const laneGap = laneGapCount > 0
        ? Math.min(LAYOUT.maxLaneGap, Math.max(LAYOUT.minLaneGap, (availableHeight - fixedVertical) / laneGapCount))
        : LAYOUT.minLaneGap;
    const laneRowHeight = labelClearance + contentClearance + laneGap;

    // Every lane's line spans the SAME [lineStart, sharedLineEnd] range and
    // every header sits at the SAME lineStart column - a lane whose first
    // real milestone happens to fall later (or last one earlier) than
    // another's still reads as one continuous, aligned timeline instead of
    // looking like a broken/disconnected fragment.
    const sharedLineEnd = LAYOUT.leftMargin + 2 * LAYOUT.edgeRunway + Math.max(0, allReal.length - 1) * nodeGap;

    const lanes = LANE_ORDER.map((id, laneIndex) => {
        const lane = getLane(id);
        const y = LAYOUT.topMargin + labelClearance + laneIndex * laneRowHeight;

        const realNodes = lane.nodes
            .filter(node => !node.tbd)
            .map(node => ({ node, x: xOfRank(rankOf.get(node)) }));
        const tbdSources = lane.nodes.filter(node => node.tbd);

        // An undated (TBD) node has no rank of its own. By default it rides
        // half a step past this lane's own last real milestone; setting
        // tbdAfter (and optionally tbdBefore) on the node instead places it
        // at the midpoint between two specific milestones - by key, from
        // ANY lane - on the shared axis, e.g. "between PhD Year 2 and 3". A
        // lane can have more than one TBD node (they just need distinct
        // tbdAfter/tbdBefore pairs, or they'd overlap).
        const ownLastRank = realNodes.length
            ? Math.max(...realNodes.map(r => rankOf.get(r.node)))
            : 0;
        const tbdList = tbdSources.map(tbdSource => {
            let tbdRank;
            if (tbdSource.tbdAfter && rankByKey.has(tbdSource.tbdAfter)) {
                const afterRank = rankByKey.get(tbdSource.tbdAfter);
                const beforeRank = tbdSource.tbdBefore && rankByKey.has(tbdSource.tbdBefore)
                    ? rankByKey.get(tbdSource.tbdBefore)
                    : afterRank + 1;
                tbdRank = (afterRank + beforeRank) / 2;
            } else {
                tbdRank = ownLastRank + 0.5;
            }
            return { node: tbdSource, x: xOfRank(tbdRank) };
        });

        return { id, laneIndex, y, lane, realNodes, tbdList, lineX1: lineStart, lineX2: sharedLineEnd };
    });

    // A TBD node's own extra half-step (see above) never pushes past
    // sharedLineEnd in practice, but guard it anyway; then snap to
    // availableWidth when we're within a couple of px of it so rounding
    // doesn't leave a permanent 1px horizontal scrollbar at rest.
    const rightmostX = Math.max(
        sharedLineEnd,
        ...lanes.map(l => l.lineX2),
        ...lanes.flatMap(l => l.tbdList.map(t => t.x))
    );
    const rawWidth = Math.max(availableWidth, rightmostX + LAYOUT.rightMargin);
    const width = rawWidth <= availableWidth + 2 ? availableWidth : rawWidth;
    const height = LAYOUT.topMargin + labelClearance
        + laneGapCount * laneRowHeight
        + contentClearance + 50;

    const now = new Date();
    const todayT = now.getFullYear() + now.getMonth() / 12;
    const today = {
        x: xForDate(todayT, allReal, LAYOUT.leftMargin + LAYOUT.edgeRunway, nodeGap),
        y1: LAYOUT.topMargin - 30,
        y2: height - 30
    };

    return { lanes, width, height, today, scale, labelClearance };
}

// Attaches the scroll-triggered reveal/hide observer used on DESKTOP only.
// Mobile deliberately never calls this - see initRoadmap().
function attachCareerObserver() {
    if (careerObserverAttached) return;
    const wrapper = document.querySelector('.roadmap-wrapper');
    if (wrapper && 'IntersectionObserver' in window) {
        // Kept observing indefinitely (never disconnected): leaving the
        // section plays the reveal in reverse, so coming back to it later
        // plays the full entrance again instead of just snapping everything
        // back into place.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !careerRoadmapRevealed) {
                    careerRoadmapRevealed = true;
                    careerAnimationGeneration++;
                    revealCareerRoadmap(!prefersReducedMotion());
                } else if (!entry.isIntersecting && careerRoadmapRevealed) {
                    careerRoadmapRevealed = false;
                    careerAnimationGeneration++;
                    hideCareerRoadmap(!prefersReducedMotion());
                }
            });
        }, { threshold: 0.3 });
        observer.observe(wrapper);
    } else {
        careerRoadmapRevealed = true;
        revealCareerRoadmap(false);
    }
    careerObserverAttached = true;
}

function initRoadmap() {
    const roadmapSvg = document.getElementById('roadmapPath');
    const checkpointsContainer = document.getElementById('roadmapCheckpoints');

    if (!roadmapSvg || !checkpointsContainer) return;

    const isMobileNow = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    // Mobile is a long scrollable page (3 stacked lanes, every card in
    // them), not a single-screen diagram - it just shows everything
    // immediately, with no scroll-triggered entrance/exit animation. Trying
    // to gate that on IntersectionObserver was also the source of a real
    // bug: threshold is a fraction of the WRAPPER'S OWN height, and on
    // mobile that wrapper is several screens tall, so it never became 30%
    // visible at once and the reveal never fired (cards stuck invisible).
    if (isMobileNow) {
        careerRoadmapRevealed = true;
    }

    buildCareerRoadmapDOM();
    if (careerRoadmapRevealed) {
        revealCareerRoadmap(false);
    }

    if (!isMobileNow) {
        attachCareerObserver();
    }

    // Re-render on mobile/desktop breakpoint crossing, or when the viewport
    // height changes enough to shift the adaptive lane gap (see
    // computeCareerLayout) - keeps the diagram filling the window well
    // instead of only sizing itself once at load.
    let resizeTimeout;
    let lastIsMobile = isMobileNow;
    let lastHeight = window.innerHeight;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newIsMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;
            const heightChanged = Math.abs(window.innerHeight - lastHeight) > 40;
            if (newIsMobile !== lastIsMobile || (!newIsMobile && heightChanged)) {
                lastIsMobile = newIsMobile;
                lastHeight = window.innerHeight;
                if (newIsMobile) {
                    careerRoadmapRevealed = true;
                } else {
                    attachCareerObserver();
                }
                buildCareerRoadmapDOM();
                if (careerRoadmapRevealed) revealCareerRoadmap(false);
            }
        }, 250);
    });
}

// Rebuilds the whole roadmap DOM in its "hidden / pending" state (or
// already shown, if it was revealed before this rebuild was triggered).
function buildCareerRoadmapDOM() {
    const roadmapSvg = document.getElementById('roadmapPath');
    const checkpointsContainer = document.getElementById('roadmapCheckpoints');
    const canvas = document.getElementById('roadmapCanvas');
    if (!roadmapSvg || !checkpointsContainer || !canvas) return;

    careerAnimationGeneration++;
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    roadmapSvg.innerHTML = '';
    checkpointsContainer.innerHTML = '';

    if (isMobile) {
        canvas.style.width = '';
        canvas.style.height = '';
        roadmapSvg.style.display = 'none';
        buildMobileRoadmap(checkpointsContainer);
    } else {
        roadmapSvg.style.display = '';
        buildDesktopRoadmap(roadmapSvg, checkpointsContainer, canvas);
    }
}

function buildDesktopRoadmap(roadmapSvg, checkpointsContainer, canvas) {
    const layout = computeCareerLayout();

    canvas.style.width = `${layout.width}px`;
    canvas.style.height = `${layout.height}px`;
    canvas.style.setProperty('--roadmap-scale', layout.scale);
    roadmapSvg.setAttribute('width', layout.width);
    roadmapSvg.setAttribute('height', layout.height);

    // gradientUnits="userSpaceOnUse" with explicit non-zero coordinates is
    // required here: the default objectBoundingBox mode divides by the
    // shape's own bounding-box height, and a perfectly horizontal <line>
    // has a bounding box height of 0 - per spec, that makes the gradient
    // (and therefore the whole stroke) simply not render.
    const defs = document.createElementNS(SVG_NS, 'defs');
    roadmapSvg.appendChild(defs);

    layout.lanes.forEach(laneLayout => {
        const { laneIndex, y, lane, realNodes, tbdList, lineX1, lineX2 } = laneLayout;

        // Lane label - sits directly above the line, in its own reserved
        // vertical band (labelClearance), so it can never collide with
        // another lane's content below it.
        const label = document.createElement('div');
        label.className = 'lane-label';
        label.textContent = laneLabelText(lane);
        label.style.left = `${lineX1}px`;
        label.style.top = `${y - layout.labelClearance}px`;
        checkpointsContainer.appendChild(label);

        // Main solid line (draw-in animation via stroke-dashoffset). Its
        // color is a gradient with a stop AT EACH of this lane's own real
        // nodes, colored by that node's own status - so the segment between
        // e.g. a completed and an in-progress node genuinely transitions
        // green -> amber there, instead of every lane sharing one gradient
        // keyed to fixed 0/30/60/100% marks that have nothing to do with
        // where THIS lane's nodes/status changes actually fall.
        if (lineX2 > lineX1 && realNodes.length) {
            const len = lineX2 - lineX1;
            const gradientId = `lineGradient-${lane.id}`;
            const gradient = document.createElementNS(SVG_NS, 'linearGradient');
            gradient.setAttribute('id', gradientId);
            gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
            gradient.setAttribute('x1', lineX1);
            gradient.setAttribute('y1', '0');
            gradient.setAttribute('x2', lineX2);
            gradient.setAttribute('y2', '0');

            const firstColor = STATUS_COLORS[realNodes[0].node.status] || STATUS_COLORS.planned;
            const lastColor = STATUS_COLORS[realNodes[realNodes.length - 1].node.status] || STATUS_COLORS.planned;
            const stops = [{ offset: 0, color: firstColor }];
            realNodes.forEach(({ node, x }) => {
                stops.push({ offset: (x - lineX1) / len, color: STATUS_COLORS[node.status] || STATUS_COLORS.planned });
            });
            stops.push({ offset: 1, color: lastColor });

            stops.forEach(({ offset, color }) => {
                const stop = document.createElementNS(SVG_NS, 'stop');
                stop.setAttribute('offset', `${(offset * 100).toFixed(2)}%`);
                stop.setAttribute('stop-color', color);
                gradient.appendChild(stop);
            });
            defs.appendChild(gradient);

            const line = document.createElementNS(SVG_NS, 'line');
            line.setAttribute('class', 'lane-line lane-line--main');
            line.setAttribute('x1', lineX1);
            line.setAttribute('y1', y);
            line.setAttribute('x2', lineX2);
            line.setAttribute('y2', y);
            line.setAttribute('stroke', `url(#${gradientId})`);
            line.setAttribute('stroke-width', '4');
            line.setAttribute('stroke-dasharray', `${len} ${len}`);
            line.setAttribute('stroke-dashoffset', careerRoadmapRevealed ? '0' : `${len}`);
            line.dataset.laneIndex = laneIndex;
            roadmapSvg.appendChild(line);
        }

        // Checkpoints
        realNodes.forEach(({ node, x }) => {
            const progress = lineX2 > lineX1 ? (x - lineX1) / (lineX2 - lineX1) : 0;
            const checkpoint = createDesktopCheckpoint(node, x, y, layout.width);
            checkpoint.dataset.laneIndex = laneIndex;
            checkpoint.dataset.progress = progress;
            checkpointsContainer.appendChild(checkpoint);
        });
        tbdList.forEach(({ node, x }) => {
            // TBD nodes now normally ride somewhere WITHIN the line's real
            // span (see tbdAfter/tbdBefore), so they use the same
            // progress-based reveal/hide timing as any other node.
            const progress = lineX2 > lineX1 ? (x - lineX1) / (lineX2 - lineX1) : 0;
            const checkpoint = createDesktopCheckpoint(node, x, y, layout.width);
            checkpoint.dataset.laneIndex = laneIndex;
            checkpoint.dataset.progress = progress;
            checkpoint.dataset.tbd = 'true';
            checkpointsContainer.appendChild(checkpoint);
        });
    });

    // "Present" marker - a vertical dashed red line crossing all 3 lanes
    // at today's date, positioned on the same rank-based x-axis via
    // xForDate() so it lines up correctly with the milestones around it. It
    // enters by sliding in from the very left of the lines to its resting
    // spot (see revealDesktop) rather than just fading in in place.
    const { x: todayX, y1: todayY1, y2: todayY2 } = layout.today;
    const todayTravel = todayX - LAYOUT.leftMargin;
    const todayLine = document.createElementNS(SVG_NS, 'line');
    todayLine.setAttribute('class', 'today-line');
    todayLine.setAttribute('x1', todayX);
    todayLine.setAttribute('y1', todayY1);
    todayLine.setAttribute('x2', todayX);
    todayLine.setAttribute('y2', todayY2);
    todayLine.dataset.travel = todayTravel;
    todayLine.style.transform = careerRoadmapRevealed ? 'translateX(0)' : `translateX(${-todayTravel}px)`;
    todayLine.style.opacity = careerRoadmapRevealed ? '1' : '0';
    roadmapSvg.appendChild(todayLine);

    // The label rides along with the line - same travel distance, so both
    // arrive together instead of the line sliding in while the label just
    // fades in already sitting at the destination.
    const todayLabel = document.createElement('div');
    todayLabel.className = 'today-label';
    todayLabel.textContent = isEs() ? 'ACTUALIDAD' : 'PRESENT';
    todayLabel.style.left = `${todayX}px`;
    todayLabel.style.top = `${todayY1}px`;
    todayLabel.dataset.travel = todayTravel;
    todayLabel.style.transform = careerRoadmapRevealed
        ? 'translate(-50%, -100%) translateX(0)'
        : `translate(-50%, -100%) translateX(${-todayTravel}px)`;
    todayLabel.style.opacity = careerRoadmapRevealed ? '1' : '0';
    checkpointsContainer.appendChild(todayLabel);
}

// A tooltip is a fixed 280px wide, so a node within half that of either
// canvas edge would normally have it overflow past the canvas's own
// declared width - which grows .roadmap-container's scrollbar on hover.
// Rather than reserve that much margin everywhere (which forces smaller
// nodeGap - and a scrollbar at REST - on an ordinary laptop window), edge
// nodes just open their tooltip inward instead of centered.
const TOOLTIP_EDGE_THRESHOLD = 150;

function createDesktopCheckpoint(node, x, y, canvasWidth) {
    const checkpoint = document.createElement('div');
    checkpoint.classList.add('roadmap-checkpoint');
    checkpoint.classList.add(`status-${node.status}`);
    if (node.tbd) checkpoint.classList.add('checkpoint--tbd');
    if (typeof canvasWidth === 'number') {
        if (x < TOOLTIP_EDGE_THRESHOLD) {
            checkpoint.classList.add('tooltip-start');
        } else if (x > canvasWidth - TOOLTIP_EDGE_THRESHOLD) {
            checkpoint.classList.add('tooltip-end');
        }
    }

    checkpoint.style.left = `${x}px`;
    checkpoint.style.top = `${y}px`;

    if (!careerRoadmapRevealed) {
        checkpoint.style.opacity = '0';
        checkpoint.style.transform = 'translate(-50%, -50%) scale(0.3)';
    }

    fillCheckpointContent(checkpoint, node);
    attachCheckpointBehavior(checkpoint, node);
    return checkpoint;
}

function buildMobileRoadmap(checkpointsContainer) {
    LANE_ORDER.forEach(laneId => {
        const lane = getLane(laneId);

        const heading = document.createElement('div');
        heading.className = 'lane-heading-mobile';
        heading.textContent = laneLabelText(lane);
        checkpointsContainer.appendChild(heading);

        lane.nodes.forEach((node, index) => {
            const checkpoint = document.createElement('div');
            checkpoint.classList.add('roadmap-checkpoint');
            checkpoint.classList.add(`status-${node.status}`);
            if (node.tbd) checkpoint.classList.add('checkpoint--tbd');
            if (index === 0) checkpoint.classList.add('lane-first');
            if (careerRoadmapRevealed) checkpoint.classList.add('revealed');

            fillCheckpointContent(checkpoint, node);
            attachCheckpointBehavior(checkpoint, node);
            checkpointsContainer.appendChild(checkpoint);
        });
    });
}

function fillCheckpointContent(checkpoint, node) {
    let statusIcon = '○';
    if (node.status === 'completed') statusIcon = '✓';
    else if (node.status === 'in-progress') statusIcon = '⟳';
    else if (node.tbd) statusIcon = '?';
    if (node.icon) statusIcon = node.icon;

    const orgHtml = node.org ? `<div class="checkpoint-org">${pick(node, 'org')}</div>` : '';

    checkpoint.innerHTML = `
        <div class="checkpoint-marker">${statusIcon}</div>
        <div class="checkpoint-content">
            ${orgHtml}
            <div class="checkpoint-title">${pick(node, 'shortTitle')}</div>
            <div class="checkpoint-date">${pick(node, 'dateLabel')}</div>
        </div>
        <div class="checkpoint-tooltip">
            <h4>${pick(node, 'title')}</h4>
            ${node.org ? `<p><strong>${pick(node, 'org')}</strong></p>` : ''}
            <p>${pick(node, 'description')}</p>
            <span class="checkpoint-status">${node.status.replace('-', ' ')}</span>
        </div>
    `;
}

function attachCheckpointBehavior(checkpoint, node) {
    const tooltip = checkpoint.querySelector('.checkpoint-tooltip');
    const marker = checkpoint.querySelector('.checkpoint-marker');

    // Hover only triggers the tooltip over the marker circle itself, not
    // the title/date/org text beneath it.
    marker.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
        requestAnimationFrame(() => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
    });

    marker.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.display = 'none';
        }, 300);
    });

    checkpoint.addEventListener('click', () => {
        if (node.key) {
            openSidebar(node.key);
        }
    });
}

// Desktop-only timing: reveal runs forward (line draws in, nodes pop as it
// passes) slowly and deliberately. Leaving the section runs the same
// choreography in reverse (line retracts, nodes vanish in the opposite
// order) via hideCareerRoadmap(), but much faster - it's a quick "get out
// of the way", not a second performance. Mobile has no animation at all
// (see revealMobile/hideMobile).
const ROADMAP_LINE_DURATION = 2600;
const ROADMAP_LANE_STAGGER = 400;
const ROADMAP_HIDE_LINE_DURATION = 450;
const ROADMAP_HIDE_LANE_STAGGER = 60;

// Plays (or instantly applies) the "shown" state on whatever is currently
// rendered - lines draw in, nodes pop in as the line reaches them.
function revealCareerRoadmap(animate) {
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    if (isMobile) {
        revealMobile(animate);
    } else {
        revealDesktop(animate);
    }
}

// Reverses whatever is currently shown - lines retract back to nothing,
// nodes fade back out, played back-to-front (mirroring the entrance).
function hideCareerRoadmap(animate) {
    const isMobile = window.isMobileDevice ? window.isMobileDevice() : window.innerWidth <= 768;

    if (isMobile) {
        hideMobile(animate);
    } else {
        hideDesktop(animate);
    }
}

function revealDesktop(animate) {
    const roadmapSvg = document.getElementById('roadmapPath');
    if (!roadmapSvg) return;
    const gen = careerAnimationGeneration;

    const mainLines = roadmapSvg.querySelectorAll('.lane-line--main');

    mainLines.forEach((line) => {
        const laneIndex = parseInt(line.dataset.laneIndex, 10) || 0;
        if (animate) {
            line.style.transition = `stroke-dashoffset ${ROADMAP_LINE_DURATION}ms ease-out ${laneIndex * ROADMAP_LANE_STAGGER}ms`;
            requestAnimationFrame(() => {
                if (gen !== careerAnimationGeneration) return;
                line.style.strokeDashoffset = '0';
            });
        } else {
            line.style.transition = 'none';
            line.style.strokeDashoffset = '0';
        }
    });

    document.querySelectorAll('.roadmap-checkpoint').forEach(checkpoint => {
        const revealNode = () => {
            if (gen !== careerAnimationGeneration) return;
            checkpoint.style.transition = animate
                ? 'opacity 0.5s ease-out, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                : 'none';
            checkpoint.style.opacity = '1';
            checkpoint.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        if (!animate) {
            revealNode();
            return;
        }

        // TBD nodes ride along the line at their own position now (see
        // computeCareerLayout), so they use the same progress-based timing
        // as any other node - no separate case needed.
        const laneIndex = parseInt(checkpoint.dataset.laneIndex, 10) || 0;
        const progress = parseFloat(checkpoint.dataset.progress || '0');
        const delay = laneIndex * ROADMAP_LANE_STAGGER + progress * ROADMAP_LINE_DURATION + 100;

        setTimeout(revealNode, delay);
    });

    const todayDelay = 2 * ROADMAP_LANE_STAGGER + ROADMAP_LINE_DURATION + 400;
    const todayLine = roadmapSvg.querySelector('.today-line');
    const todayLabel = document.querySelector('.today-label');
    [todayLine, todayLabel].forEach(el => {
        if (!el) return;
        const isLine = el === todayLine;
        const revealToday = () => {
            if (gen !== careerAnimationGeneration) return;
            el.style.transition = animate
                ? 'opacity 0.3s ease-out, transform 1.3s ease-out'
                : 'none';
            el.style.opacity = '1';
            el.style.transform = isLine ? 'translateX(0)' : 'translate(-50%, -100%) translateX(0)';
        };
        if (animate) {
            setTimeout(revealToday, todayDelay);
        } else {
            revealToday();
        }
    });
}

function hideDesktop(animate) {
    const roadmapSvg = document.getElementById('roadmapPath');
    if (!roadmapSvg) return;
    const gen = careerAnimationGeneration;
    const numLanes = LANE_ORDER.length;

    const todayLine = roadmapSvg.querySelector('.today-line');
    const todayLabel = document.querySelector('.today-label');
    [todayLine, todayLabel].forEach(el => {
        if (!el) return;
        const isLine = el === todayLine;
        el.style.transition = animate ? 'opacity 0.3s ease-in, transform 0.3s ease-in' : 'none';
        el.style.opacity = '0';
        const travel = parseFloat(el.dataset.travel || '0');
        el.style.transform = isLine ? `translateX(${-travel}px)` : `translate(-50%, -100%) translateX(${-travel}px)`;
    });

    document.querySelectorAll('.roadmap-checkpoint').forEach(checkpoint => {
        const hideNode = () => {
            if (gen !== careerAnimationGeneration) return;
            checkpoint.style.transition = animate
                ? 'opacity 0.2s ease-in, transform 0.2s ease-in'
                : 'none';
            checkpoint.style.opacity = '0';
            checkpoint.style.transform = 'translate(-50%, -50%) scale(0.3)';
        };

        if (!animate) {
            hideNode();
            return;
        }

        const laneIndex = parseInt(checkpoint.dataset.laneIndex, 10) || 0;
        const reverseLaneIndex = numLanes - 1 - laneIndex;
        const progress = parseFloat(checkpoint.dataset.progress || '0');
        const delay = reverseLaneIndex * ROADMAP_HIDE_LANE_STAGGER + (1 - progress) * ROADMAP_HIDE_LINE_DURATION;

        setTimeout(hideNode, delay);
    });

    const mainLines = roadmapSvg.querySelectorAll('.lane-line--main');
    mainLines.forEach((line) => {
        const laneIndex = parseInt(line.dataset.laneIndex, 10) || 0;
        const reverseLaneIndex = numLanes - 1 - laneIndex;
        const len = parseFloat(line.getAttribute('x2')) - parseFloat(line.getAttribute('x1'));
        if (animate) {
            line.style.transition = `stroke-dashoffset ${ROADMAP_HIDE_LINE_DURATION}ms ease-in ${reverseLaneIndex * ROADMAP_HIDE_LANE_STAGGER}ms`;
            requestAnimationFrame(() => {
                if (gen !== careerAnimationGeneration) return;
                line.style.strokeDashoffset = `${len}`;
            });
        } else {
            line.style.transition = 'none';
            line.style.strokeDashoffset = `${len}`;
        }
    });
}

// Mobile deliberately has no entrance/exit animation at all - it's a long
// scrollable page (see initRoadmap), so these just apply/remove the class
// instantly for every card. The `animate` param is accepted (and ignored)
// only so revealCareerRoadmap/hideCareerRoadmap can call these the same way
// they call the desktop versions.
function revealMobile() {
    document.querySelectorAll('.roadmap-checkpoint').forEach(checkpoint => {
        checkpoint.classList.add('revealed');
    });
}

function hideMobile() {
    document.querySelectorAll('.roadmap-checkpoint').forEach(checkpoint => {
        checkpoint.classList.remove('revealed');
    });
}

function updateCareerRoadmapLanguage() {
    buildCareerRoadmapDOM();
    if (careerRoadmapRevealed) {
        revealCareerRoadmap(false);
    }
}

window.updateCareerRoadmapLanguage = updateCareerRoadmapLanguage;
