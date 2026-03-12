// tools.js - logic for interactive SEO utilities

export function initMetaAnalyzer(){
    const form = document.getElementById('meta-form');
    if(!form) return;
    form.addEventListener('submit', e=>{
        e.preventDefault();
        const input = document.getElementById('meta-input').value;
        const output = document.getElementById('meta-output');
        const hasTitle = /<title>.*<\/title>/i.test(input);
        const hasDesc = /<meta\s+name=["']description["']\s+content=["'][^"']+["']\s*\/?>/i.test(input);
        output.textContent = `Title tag: ${hasTitle ? '✔️' : '❌'}\nMeta description: ${hasDesc ? '✔️' : '❌'}`;
    });
}

export function initRobotsValidator(){
    const form = document.getElementById('robots-form');
    if(!form) return;
    form.addEventListener('submit', e=>{
        e.preventDefault();
        const txt = document.getElementById('robots-input').value;
        const output = document.getElementById('robots-output');
        const hasUserAgent = /User-agent:\s*\*/i.test(txt);
        const hasSitemap = /Sitemap:\s*https?:\/\//i.test(txt);
        output.textContent = `User-agent * present: ${hasUserAgent}\nSitemap line present: ${hasSitemap}`;
    });
}

export function initSchemaGenerator(){
    const form = document.getElementById('schema-form');
    if(!form) return;
    form.addEventListener('submit', e=>{
        e.preventDefault();
        const type = document.getElementById('schema-type').value;
        const name = document.getElementById('schema-name').value;
        const url = document.getElementById('schema-url').value;
        const output = document.getElementById('schema-output');
        let schema = {"@context":"https://schema.org","@type":type};
        if(name) schema.name = name;
        if(url) schema.url = url;
        output.textContent = JSON.stringify(schema, null, 2);
    });
}

export function initSitemapValidator(){
    const form = document.getElementById('sitemap-form');
    if(!form) return;
    form.addEventListener('submit', e=>{
        e.preventDefault();
        const xml = document.getElementById('sitemap-input').value;
        const output = document.getElementById('sitemap-output');
        const valid = /<urlset[^>]*>/.test(xml) && /<url>/.test(xml);
        output.textContent = valid ? 'Looks like a valid sitemap.' : 'Invalid sitemap format.';
    });
}