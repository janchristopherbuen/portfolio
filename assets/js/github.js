// github.js - fetch and render GitHub repositories

export async function loadGitHubRepos(containerId){
    const container = document.getElementById(containerId);
    if(!container) return;

    try{
        const response = await fetch('https://api.github.com/users/janchristopherbuen/repos');
        if(!response.ok) throw new Error('GitHub API error');
        const repos = await response.json();
        repos.sort((a,b)=>b.stargazers_count - a.stargazers_count);

        repos.forEach(repo=>{
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description||''}</p>
                <p class="project-tech">${repo.language||''}</p>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-btn">View on GitHub</a>
            `;
            container.appendChild(card);
        });
    }catch(err){
        console.error('Failed to load GitHub repos', err);
        container.textContent = 'Unable to fetch projects at this time.';
    }
}