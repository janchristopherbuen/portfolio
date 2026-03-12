// main.js - entry point that initializes components on every page

import { initMobileMenu, initScrollReveal, initScrollProgress } from './core.js';
import { loadGitHubRepos } from './github.js';
import { initMetaAnalyzer, initRobotsValidator, initSchemaGenerator, initSitemapValidator } from './tools.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollReveal();
    initScrollProgress();
    // Projects page GitHub integration
    loadGitHubRepos('github-projects');
    // Tools initialization
    initMetaAnalyzer();
    initRobotsValidator();
    initSchemaGenerator();
    initSitemapValidator();
});