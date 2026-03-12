const API_URL = "https://api.github.com/users/janchristopherbuen/repos?per_page=100&sort=updated";

function formatDate(dateString) {
  const value = new Date(dateString);
  return Number.isNaN(value.getTime()) ? "Unknown update date" : value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function buildRepoCard(repo) {
  return `
    <article class="card card--project" data-reveal>
      <p class="tag">${repo.language || "Repository"}</p>
      <h3>${repo.name}</h3>
      <p>${repo.description || "No repository description provided yet."}</p>
      <p class="meta-line">Stars: ${repo.stargazers_count} • Updated: ${formatDate(repo.updated_at)}</p>
      <a class="button button--secondary" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View project</a>
    </article>
  `;
}

export async function loadGitHubRepos(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = '<p class="card">Loading repositories...</p>';

  try {
    const response = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const repos = await response.json();
    const curated = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => (b.stargazers_count - a.stargazers_count) || new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6);

    if (!curated.length) {
      container.innerHTML = '<p class="card">No public repositories were returned.</p>';
      return;
    }

    container.innerHTML = curated.map(buildRepoCard).join("");
  } catch (error) {
    console.error("Failed to load GitHub repositories", error);
    container.innerHTML = '<p class="card">GitHub repositories could not be loaded right now.</p>';
  }
}
