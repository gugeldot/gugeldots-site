// ==========================================================================
// GitHub Repositories
// ==========================================================================

const GITHUB_USERNAME = 'gugeldot';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

// Hardcoded pinned repos (update manually when you change your pinned repos on GitHub)
const PINNED_REPO_NAMES = [
    'image-to-pdf',
    'auto-scanner-nmap',
    'stocker-htb-script',
    'late-htb-script'
];

// Language colors from GitHub
const languageColors = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'TypeScript': '#2b7489',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C++': '#f34b7d',
    'C': '#555555',
    'Shell': '#89e051',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Swift': '#ffac45',
    'Kotlin': '#F18E33',
    'Dart': '#00B4AB',
};

let allRepos = [];
let pinnedRepos = [];
let currentFilter = 'pinned';

async function fetchGitHubData() {
    const reposGrid = document.getElementById('reposGrid');

    try {
        // Fetch all public repos
        const reposResponse = await fetch(`${GITHUB_API_URL}/repos?per_page=100&sort=updated`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');

        allRepos = await reposResponse.json();
        allRepos = allRepos.filter(repo => !repo.private && !repo.fork);

        // Use hardcoded pinned repos first (fastest)
        if (PINNED_REPO_NAMES.length > 0) {
            pinnedRepos = allRepos.filter(repo => PINNED_REPO_NAMES.includes(repo.name));
        }

        // Fallback: show top 6 by stars if no pinned repos configured
        if (pinnedRepos.length === 0) {
            pinnedRepos = [...allRepos]
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 6);
        }

        renderRepos(currentFilter);

    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        reposGrid.innerHTML = `
            <div class="error-message">
                <p>Unable to load repositories. Please try again later.</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem;">Or visit <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" style="color: var(--purple-accent);">github.com/${GITHUB_USERNAME}</a></p>
            </div>
        `;
    }
}

function renderRepos(filter) {
    const reposGrid = document.getElementById('reposGrid');
    const repos = filter === 'pinned' ? pinnedRepos : allRepos;

    if (repos.length === 0) {
        reposGrid.innerHTML = '<div class="error-message"><p>No repositories found.</p></div>';
        return;
    }

    reposGrid.innerHTML = repos.map(repo => {
        const isPinned = pinnedRepos.some(p => p.name === repo.name);
        const languageColor = languageColors[repo.language] || '#858585';

        return `
            <div class="repo-card ${isPinned ? 'pinned' : ''}" onclick="window.open('${repo.html_url}', '_blank')">
                <div class="repo-header">
                    <a href="${repo.html_url}" class="repo-name" target="_blank" onclick="event.stopPropagation()">
                        ${repo.name}
                    </a>
                    <span class="repo-visibility">${repo.visibility || 'public'}</span>
                </div>
                <p class="repo-description">${repo.description || 'No description available'}</p>
                ${repo.language ? `
                    <div class="repo-language">
                        <span class="language-dot" style="background-color: ${languageColor}"></span>
                        ${repo.language}
                    </div>
                ` : ''}
                <div class="repo-stats">
                    <span class="repo-stat">⭐ ${repo.stargazers_count}</span>
                    <span class="repo-stat">🔱 ${repo.forks_count}</span>
                    ${repo.open_issues_count > 0 ? `<span class="repo-stat">🐛 ${repo.open_issues_count}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function initGitHubRepos() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderRepos(currentFilter);
        });
    });

    fetchGitHubData();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGitHubRepos);
} else {
    initGitHubRepos();
}
