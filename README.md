# Technical SEO Portfolio

This repository is a multi-page personal portfolio demonstrating technical SEO
skills and web development projects. The site is optimized for performance,
accessibility, and search engines, and is deployable via GitHub Pages.

## Structure

```
/ (root)
  index.html           ← landing page with hero and navigation
  about.html
  projects.html        ← case study index + GitHub integration
  blog.html            ← static blog index
  contact.html
  certificates.html
  robots.txt
  sitemap.xml
  README.md
  /assets/
    /css/
      style.css        ← aggregator that imports modules
      /modules/
        base.css
        layout.css
        components.css
    /js/
      core.js          ← UI helpers (menu, scroll reveal, progress)
      github.js        ← GitHub API fetcher
      tools.js         ← logic for interactive SEO tools
      main.js          ← entrypoint imports modules
    /images/           ← all image assets
  /projects/           ← case study pages
    project-*.html
  /blog/               ← article pages
    *.html
  /tools/              ← interactive SEO utility pages
    *.html
```

## Adding Content

### New Projects
1. Create a new HTML file under `/projects/` using an existing case study as a
   template.
2. Add a card link to `projects.html` inside the `Case Studies` section.
3. Update `sitemap.xml` with the new URL.

### New Blog Posts
1. Add a new HTML file under `/blog/` following the article template.
2. Create a card for it in `blog.html`.
3. Update `sitemap.xml`.

### Interactive Tools
Each tool page is self-contained and uses [`assets/js/tools.js`] for logic.
To create a new tool, add the HTML page under `/tools/`, add the appropriate
initialization in `tools.js`, and link to it from another page if desired.

## GitHub Pages Deployment

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
2. Pages are served from the `main` branch root by default (or `gh-pages` if
   configured). The live site will update automatically within a few minutes.

## SEO & Performance Notes

* Meta, Open Graph, and Twitter tags included on every page.
* Canonical URLs and `robots.txt`/`sitemap.xml` configured.
* Structured data for `Person`, `WebSite`, and `BreadcrumbList`.
* Lazy-loading images and responsive design using Flexbox/Grid.
* CSS is modular; JS is split into ES modules imported via `<script type="module">`.

## Accessibility

* ARIA labels on navigation elements.
* Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`).
* High contrast color palette, focus-visible outlines, keyboard-friendly menu.

## Performance Tips

* The CSS imports can be concatenated and minified for production.
* JS modules can be bundled or minified via a build step if desired.
* Ensure images are converted to WebP and served with `loading="lazy"`.
<https://web.dev/fast>

---

Feel free to fork, customize, and expand the portfolio around your own work.
