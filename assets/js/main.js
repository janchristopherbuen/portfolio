import { initNavigation, initReveal, initYear } from "./core.js";
import { loadGitHubRepos } from "./github.js";
import { initMetaAnalyzer, initRobotsValidator, initSchemaGenerator, initSitemapValidator } from "./tools.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initReveal();
  initYear();
  loadGitHubRepos("github-projects");
  initMetaAnalyzer();
  initRobotsValidator();
  initSchemaGenerator();
  initSitemapValidator();
});
