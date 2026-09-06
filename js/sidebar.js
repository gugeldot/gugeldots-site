// ==========================================================================
// Sidebar Modal Content & Controls
// ==========================================================================

const sidebarData = {
    ejptv2: {
        title: 'eJPTv2 Certification',
        content: `
            <h3>eLearnSecurity Junior Penetration Tester v2</h3>
            <p><strong>Completed:</strong> 2025<br><strong>Status:</strong> Certified</p>
            <h3>About</h3>
            <p>Entry-level practical certification covering fundamental penetration testing skills including network scanning, exploitation basics, and web application testing fundamentals.</p>
            <h3>Coverage</h3>
            <p>• Assessment methodologies<br>• Host and network auditing<br>• Web application testing basics<br>• Exploitation fundamentals<br>• Reporting essentials</p>
            <h3>Achievement</h3>
            <p>Foundation certification demonstrating core penetration testing competencies and readiness for advanced certifications like eCPPT.</p>
        `
    },
    penetration: {
        title: 'Penetration Testing',
        content: `
            <h3>Offensive Security Learning Path</h3>
            <p>Developing skills in identifying and exploiting vulnerabilities through hands-on practice and structured learning.</p>
            <h3>Areas of Study</h3>
            <p>• Network security assessment<br>• Web application security (OWASP Top 10)<br>• Basic exploitation techniques<br>• Vulnerability analysis<br>• Security reporting</p>
            <h3>Certifications in Progress</h3>
            <p>eCPPT completed, with plans for eWPTx and OSCP.</p>
        `
    },
    hardware: {
        title: 'Hardware Security',
        content: `
            <h3>Embedded Systems & Hardware Research</h3>
            <p>Exploring hardware-level security through academic research, focusing on USB-based attack vectors and HID emulation devices.</p>
            <h3>Research Areas</h3>
            <p>• BadUSB attack vectors<br>• Basic firmware analysis<br>• USB protocol understanding<br>• Hardware security fundamentals<br>• Detection mechanisms</p>
            <h3>Academic Work</h3>
            <p>Bachelor's thesis investigating BadUSB analysis and proposing detection approaches.</p>
        `
    },
    ot: {
        title: 'OT/ICS Security',
        content: `
            <h3>Industrial Control Systems Research</h3>
            <p>Learning about industrial security through hands-on research projects and academic study of critical infrastructure protection.</p>
            <h3>Study Areas</h3>
            <p>• Modbus TCP protocol basics<br>• S7comm protocol fundamentals<br>• PLC architecture understanding<br>• SCADA system concepts<br>• Industrial network security<br>• Protocol fuzzing research</p>
            <h3>Research Project</h3>
            <p>PROJECT IRONGATE: Developing an industrial protocol fuzzer as a learning project and research contribution.</p>
        `
    },
    devsecops: {
        title: 'DevSecOps',
        content: `
            <h3>Security in Development Pipelines</h3>
            <p>Learning to integrate security into development workflows through academic projects and practical experimentation.</p>
            <h3>Learning Focus</h3>
            <p>• CI/CD security concepts<br>• SAST/DAST tool integration<br>• Container security basics<br>• Infrastructure security<br>• Automated security testing</p>
            <h3>Master's Project</h3>
            <p>Developing an AI-assisted DevSecOps system as part of master's thesis to explore automation in security analysis.</p>
        `
    },
    ecppt: {
        title: 'eCPPT Certification',
        content: `
            <h3>eLearnSecurity Certified Professional Penetration Tester</h3>
            <p><strong>Completed:</strong> Summer 2026<br><strong>Status:</strong> Certified</p>
            <h3>About</h3>
            <p>Practical, hands-on certification validating professional penetration testing skills with real-world exploitation focus.</p>
            <h3>Coverage</h3>
            <p>• Penetration testing methodologies<br>• Network security assessment<br>• Web application testing<br>• Exploitation<br>• Post-exploitation<br>• Professional reporting</p>
        `
    },
    inta: {
        title: 'Cybersecurity Intern - INTA',
        content: `
            <h3>Instituto Nacional de Técnica Aeroespacial «Esteban Terradas»</h3>
            <p><strong>Type:</strong> Internship<br><strong>Duration:</strong> Sep 2025 - Nov 2025 (3 months)</p>
            <p>First hands-on cybersecurity experience within Spain's national aerospace research institute, gaining exposure to security practices in a critical, high-assurance environment.</p>
        `
    },
    indraIntern: {
        title: 'Software Engineer Intern - Indra ATM',
        content: `
            <h3>Indra Group</h3>
            <p><strong>Type:</strong> Internship (Indra ATM)<br><strong>Duration:</strong> Nov 2025 - Apr 2026 (6 months)</p>
            <p>Transitioned into software engineering within Indra's Air Traffic Management division, contributing to real production systems and development workflows.</p>
        `
    },
    indraJunior: {
        title: 'Junior Software Engineer - Indra ATM',
        content: `
            <h3>Indra ATM</h3>
            <p><strong>Type:</strong> Full-time<br><strong>Duration:</strong> May 2026 - Present</p>
            <p>Promoted to Junior Software Engineer within Indra's Air Traffic Management division, continuing to build professional software development experience while pursuing cybersecurity specialization in parallel.</p>
        `
    },
    master: {
        title: "Master's Degree in Cybersecurity",
        content: `
            <h3>Universidad Internacional de La Rioja (UNIR)</h3>
            <p><strong>Completion:</strong> 2027<br><strong>Status:</strong> In Progress</p>
            <h3>Thesis Project</h3>
            <p><strong>Title:</strong> AI-Assisted DevSecOps System for Security Analysis Optimization in CI/CD</p>
            <h3>Research Focus</h3>
            <p>Developing intelligent pipeline integrating SAST, DAST, and container security with LLM assistance to reduce false positives and provide contextual analysis.</p>
            <h3>Technologies</h3>
            <p>Semgrep, OWASP ZAP, Trivy, GitHub Actions, Claude API, Python</p>
        `
    },
    cloud: {
        title: 'Cloud Security Fundamentals',
        content: `
            <h3>Azure & AWS Fundamentals</h3>
            <p><strong>Timeline:</strong> 2027<br><strong>Status:</strong> Planned</p>
            <h3>Certifications Planned</h3>
            <p>• Microsoft Azure Fundamentals (AZ-900)<br>• AWS Certified Cloud Practitioner</p>
            <h3>Learning Objectives</h3>
            <p>Cloud security architectures, IAM, network security, and compliance frameworks across major cloud platforms.</p>
        `
    },
    iso: {
        title: 'ISO 27001 Internal Auditor',
        content: `
            <h3>Information Security Management Systems</h3>
            <p><strong>Timeline:</strong> 2027<br><strong>Status:</strong> Planned</p>
            <h3>Key Competencies</h3>
            <p>• ISO 27001 requirements<br>• Risk assessment methodologies<br>• Internal audit planning<br>• Non-conformity identification<br>• Audit reporting</p>
            <h3>Professional Value</h3>
            <p>Bridges technical security with compliance and governance for organizational strategy.</p>
        `
    },
    ewptx: {
        title: 'eWPTx Certification',
        content: `
            <h3>Web Application Penetration Tester eXtreme</h3>
            <p><strong>Timeline:</strong> Summer 2028 (after PhD Year 1)<br><strong>Status:</strong> Planned</p>
            <h3>Advanced Web Security</h3>
            <p>Advanced-level web application security testing with complex vulnerabilities and sophisticated exploitation.</p>
            <h3>Technical Coverage</h3>
            <p>• Advanced OWASP Top 10<br>• Authentication bypasses<br>• Client-side attacks<br>• Advanced SQLi<br>• API security<br>• Modern framework exploitation</p>
        `
    },
    cpts: {
        title: 'CPTS Certification',
        content: `
            <h3>HackTheBox Certified Penetration Testing Specialist</h3>
            <p><strong>Timeline:</strong> Summer 2029<br><strong>Status:</strong> Planned</p>
            <h3>Practical, Hands-On Certification</h3>
            <p>Full-scope penetration testing exam covering enumeration, exploitation, privilege escalation, Active Directory attacks and professional reporting.</p>
            <h3>Why CPTS</h3>
            <p>Complements OSCP with HackTheBox's own methodology and a strong focus on Active Directory environments, an area of continued practical interest.</p>
        `
    },
    oscp: {
        title: 'OSCP Certification',
        content: `
            <h3>Offensive Security Certified Professional</h3>
            <p><strong>Timeline:</strong> Under consideration<br><strong>Status:</strong> Planned</p>
            <p>No committed date yet - depends on the actual workload of PhD Year 3.</p>
            <h3>Industry Gold Standard</h3>
            <p>Most rigorous penetration testing certification featuring 24-hour practical exam requiring successful compromise of multiple machines.</p>
            <h3>Why OSCP</h3>
            <p>Represents offensive security excellence. "Try Harder" methodology and practical focus invaluable for real-world pentesting.</p>
            <h3>Career Impact</h3>
            <p>Often required for senior penetration testing roles, demonstrates commitment to offensive security excellence.</p>
        `
    },
    phd1: {
        title: 'PhD - Year 1',
        content: `
            <h3>Doctoral Studies - First Year</h3>
            <p><strong>Timeline:</strong> 2027-2028<br><strong>Status:</strong> Planned</p>
            <p>Full focus on coursework and research onboarding for the PhD program. No new certifications are scheduled during this year.</p>
        `
    },
    phd2: {
        title: 'PhD - Year 2',
        content: `
            <h3>Doctoral Studies - Second Year</h3>
            <p><strong>Timeline:</strong> 2028-2029<br><strong>Status:</strong> Planned</p>
            <p>Deepening research focus, publishing initial findings, and continuing coursework requirements.</p>
        `
    },
    phd3: {
        title: 'PhD - Year 3',
        content: `
            <h3>Doctoral Studies - Third Year</h3>
            <p><strong>Timeline:</strong> 2029-2030<br><strong>Status:</strong> Planned</p>
            <p>Core research phase - experiments, data collection, and conference publications.</p>
        `
    },
    phd4: {
        title: 'PhD - Year 4',
        content: `
            <h3>Doctoral Studies - Fourth Year</h3>
            <p><strong>Timeline:</strong> 2030-2031<br><strong>Status:</strong> Planned</p>
            <p>Consolidating research results and drafting dissertation chapters.</p>
        `
    },
    phd5: {
        title: 'PhD - Year 5',
        content: `
            <h3>Doctoral Studies - Fifth Year</h3>
            <p><strong>Timeline:</strong> 2031-2032<br><strong>Status:</strong> Planned</p>
            <p>Dissertation writing and defense, wrapping up the doctoral program.</p>
        `
    },
    tfg: {
        title: "Bachelor's Thesis: BadUSB Analysis",
        content: `
            <h3>Analysis of HID Emulation Devices: Attack Vectors and Mitigation Strategies</h3>
            <p><strong>Institution:</strong> Universidad de Alcalá<br><strong>Date:</strong> 2026<br><strong>Advisor:</strong> Manuel Sánchez Rubio</p>
            <h3>Research Objective</h3>
            <p>Comprehensive investigation of BadUSB attack mechanisms, analyzing how malicious USB devices exploit HID protocols.</p>
            <h3>Methodology</h3>
            <p>• Firmware analysis<br>• Protocol-level USB traffic analysis<br>• OS behavior monitoring<br>• Behavioral detection patterns<br>• Mitigation effectiveness testing</p>
            <h3>Key Contributions</h3>
            <p>Proposed novel detection framework based on behavioral analysis identifying suspicious HID device activity patterns.</p>
        `
    },
    tfm: {
        title: "Master's Thesis: AI-Assisted DevSecOps",
        content: `
            <h3>AI-Assisted DevSecOps System for Security Analysis Optimization in CI/CD</h3>
            <p><strong>Institution:</strong> UNIR<br><strong>Status:</strong> In Development (Expected 2027)<br><strong>Director:</strong> Dr. Manuel Sánchez Rubio</p>
            <h3>Problem Statement</h3>
            <p>Modern CI/CD pipelines generate high volumes of findings with significant false positive rates, overwhelming security teams.</p>
            <h3>Proposed Solution</h3>
            <p>Intelligent analysis layer using LLMs (Claude API) to filter/prioritize findings, provide contextual analysis, and generate remediation guidance.</p>
            <h3>Architecture</h3>
            <p>GitHub Actions orchestrates Semgrep (SAST), Trivy (container), OWASP ZAP (DAST), and Gitleaks (secrets). LLM-powered module enriches findings.</p>
            <h3>Current Status</h3>
            <p>Pipeline architecture completed, implementing LLM analysis layer and testing with real-world applications.</p>
        `
    },
    slys: {
        title: 'SLYS: File Fragmentator',
        content: `
            <h3>Privacy-Focused File Fragmentation & Encryption Tool</h3>
            <p><strong>Status:</strong> In Development<br><strong>License:</strong> Open Source<br><strong>Language:</strong> Rust</p>
            <h3>Motivation</h3>
            <p>Response to unauthorized file access by organizations. SLYS provides complete data control through fragmentation and encryption.</p>
            <h3>Core Capabilities</h3>
            <p><strong>1. File Fragmentation & Encryption</strong><br>Splits files into individually encrypted fragments requiring proper credentials.</p>
            <p><strong>2. Seed Generation</strong><br>Generates unique encrypted seed required for reconstruction.</p>
            <p><strong>3. Secure Self-Erasure</strong><br>Auto-delete with zero-overwriting after inactivity.</p>
            <p><strong>4. Recoverability</strong><br>Reinstall tool and reintroduce seed to reconstruct files.</p>
        `
    },
    irongate: {
        title: 'PROJECT IRONGATE',
        content: `
            <h3>Industrial Protocol Fuzzer for OT/ICS Security Research</h3>
            <p><strong>Status:</strong> Research Phase<br><strong>Language:</strong> Rust<br><strong>Target:</strong> Conference Publication</p>
            <h3>Project Vision</h3>
            <p>Specialized fuzzer for industrial protocols (Modbus TCP, S7comm) to discover PLC vulnerabilities and advance OT/ICS security research.</p>
            <h3>Technical Scope</h3>
            <p><strong>Protocols:</strong> Modbus TCP (502), S7comm (102)<br><strong>Capabilities:</strong> Mutation engine, PLC response parsing, anomaly detection, structured logging, seed corpus</p>
            <h3>Architecture</h3>
            <p>Modular Rust implementation with nom parsers, tokio async I/O, and tracing logging.</p>
            <h3>Research Goals</h3>
            <p>• Identify ICS vulnerabilities<br>• Contribute to OT/ICS knowledge<br>• Conference publication (S4x, ICS-CERT)<br>• Build specialized technical portfolio</p>
        `
    }
};

function openSidebar(key) {
    const sidebar = document.getElementById('sidebarModal');
    const content = document.getElementById('sidebarContent');
    const mainWrapper = document.getElementById('mainWrapper');

    // Try to get translated content first, fallback to original
    const data = (window.getSidebarContent && window.getSidebarContent(key)) || sidebarData[key];

    if (data) {
        content.innerHTML = `<h2>${data.title}</h2>${data.content}`;
        sidebar.classList.add('active');
        mainWrapper.classList.add('sidebar-open');

        // Prevent body scroll on mobile when sidebar is open
        if (window.isMobileDevice && window.isMobileDevice()) {
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebarModal');
    const mainWrapper = document.getElementById('mainWrapper');
    sidebar.classList.remove('active');
    mainWrapper.classList.remove('sidebar-open');

    // Restore body scroll
    document.body.style.overflow = '';
}

// Close sidebar on outside click
function initSidebarClickOutside() {
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebarModal');
        if (sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !e.target.closest('.skill-card, .timeline-item, .project-card')) {
            closeSidebar();
        }
    });
}
