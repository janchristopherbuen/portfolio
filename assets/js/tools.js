function renderList(output, items) {
  output.innerHTML = `<ul class="result-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function getStatusLabel(state, text) {
  return `<span class="${state}">${text}</span>`;
}

export function initMetaAnalyzer() {
  const form = document.getElementById("meta-form");
  const output = document.getElementById("meta-output");
  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("meta-input").value;
    const titleMatch = input.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const descMatch = input.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
    const canonicalMatch = /<link[^>]+rel=["']canonical["']/i.test(input);
    const ogTitleMatch = /<meta[^>]+property=["']og:title["']/i.test(input);
    const twitterCardMatch = /<meta[^>]+name=["']twitter:card["']/i.test(input);
    const robotsMatch = /<meta[^>]+name=["']robots["']/i.test(input);
    const titleLength = titleMatch ? titleMatch[1].trim().length : 0;
    const descLength = descMatch ? descMatch[1].trim().length : 0;

    renderList(output, [
      `Title tag: ${titleMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-bad", "Missing")} ${titleMatch ? `(Length: ${titleLength})` : ""}`,
      `Meta description: ${descMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-bad", "Missing")} ${descMatch ? `(Length: ${descLength})` : ""}`,
      `Canonical tag: ${canonicalMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Missing")}`,
      `Robots meta: ${robotsMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Missing")}`,
      `Open Graph title: ${ogTitleMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Missing")}`,
      `Twitter card: ${twitterCardMatch ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Missing")}`
    ]);
  });
}

export function initRobotsValidator() {
  const form = document.getElementById("robots-form");
  const output = document.getElementById("robots-output");
  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lines = document.getElementById("robots-input").value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    const hasUserAgent = lines.some((line) => /^User-agent:/i.test(line));
    const hasWildcardAgent = lines.some((line) => /^User-agent:\s*\*/i.test(line));
    const hasSitemap = lines.some((line) => /^Sitemap:\s*https?:\/\//i.test(line));
    const invalidLines = lines.filter((line) => !/^(User-agent|Disallow|Allow|Sitemap|#|Crawl-delay)\s*:/i.test(line));

    renderList(output, [
      `User-agent directive: ${hasUserAgent ? getStatusLabel("status-good", "Present") : getStatusLabel("status-bad", "Missing")}`,
      `Wildcard user-agent: ${hasWildcardAgent ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Not found")}`,
      `Sitemap directive: ${hasSitemap ? getStatusLabel("status-good", "Present") : getStatusLabel("status-warn", "Missing")}`,
      `Unexpected lines: ${invalidLines.length ? getStatusLabel("status-bad", invalidLines.join(" | ")) : getStatusLabel("status-good", "None detected")}`
    ]);
  });
}

export function initSchemaGenerator() {
  const form = document.getElementById("schema-form");
  const output = document.getElementById("schema-output");
  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("schema-type").value;
    const name = document.getElementById("schema-name").value.trim();
    const url = document.getElementById("schema-url").value.trim();
    const description = document.getElementById("schema-description").value.trim();
    const schema = {
      "@context": "https://schema.org",
      "@type": type
    };

    if (name) schema.name = name;
    if (url) schema.url = url;
    if (description) schema.description = description;

    if (type === "Person") {
      schema.jobTitle = "Technical SEO Specialist";
    }

    if (type === "WebSite" && url) {
      schema.potentialAction = {
        "@type": "SearchAction",
        target: `${url.replace(/\/$/, "")}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      };
    }

    output.textContent = JSON.stringify(schema, null, 2);
  });
}

export function initSitemapValidator() {
  const form = document.getElementById("sitemap-form");
  const output = document.getElementById("sitemap-output");
  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const xml = document.getElementById("sitemap-input").value;
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    const parserErrors = doc.querySelector("parsererror");
    if (parserErrors) {
      renderList(output, [`XML parse status: ${getStatusLabel("status-bad", "Invalid XML")}`]);
      return;
    }

    const urlset = doc.querySelector("urlset");
    const urls = Array.from(doc.querySelectorAll("url loc")).map((node) => node.textContent.trim()).filter(Boolean);
    renderList(output, [
      `Root element: ${urlset ? getStatusLabel("status-good", "urlset detected") : getStatusLabel("status-bad", "Missing urlset")}`,
      `URL count: ${urls.length ? getStatusLabel("status-good", String(urls.length)) : getStatusLabel("status-warn", "No URLs found")}`,
      `HTTPS URLs: ${urls.every((url) => url.startsWith("https://")) ? getStatusLabel("status-good", "All HTTPS") : getStatusLabel("status-warn", "Some URLs are not HTTPS")}`
    ]);
  });
}
