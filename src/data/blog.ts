export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  byline: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
  summary: string;
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "technical-seo-checklist",
    category: "Checklist",
    title: "Technical SEO Checklist",
    byline: "Jan Christopher Buen",
    publishedAt: "2026-03-12",
    publishedLabel: "March 12, 2026",
    readingTime: "6 min read",
    summary:
      "A practical technical SEO checklist for audits covering crawlability, indexation, performance, and structured data.",
    sections: [
      {
        heading: "1. Crawlability",
        paragraphs: [
          "Check robots.txt rules, noindex directives, canonical targets, and internal link access to important pages. If a crawler cannot discover a URL consistently, later optimizations matter less.",
          "It also helps to compare crawlable URLs against the pages you actually want users and search engines to reach. That gap analysis can expose blocked templates, weak internal paths, or leftover staging behavior early."
        ]
      },
      {
        heading: "2. Indexation",
        paragraphs: [
          "Compare live URLs against XML sitemaps and search console data. Look for orphan pages, duplicate variations, and pages that should be indexed but lack strong internal paths.",
          "Indexation review works best when you separate pages that should rank from pages that only support the experience. That makes it easier to spot thin archives, duplicate URLs, or utility pages that need stronger controls."
        ]
      },
      {
        heading: "3. Metadata and Markup",
        paragraphs: [
          "Review title tags, meta descriptions, heading hierarchy, canonical tags, Open Graph tags, and structured data. Templates should handle these consistently across the site.",
          "Consistency matters because metadata problems often scale through templates rather than staying isolated to one page. A good checklist should catch both page-level mistakes and repeated CMS or theme patterns."
        ]
      },
      {
        heading: "4. Architecture and Performance",
        paragraphs: [
          "Reduce unnecessary depth, tighten internal linking, and evaluate render-blocking assets. Crawl efficiency and user experience often improve together when the structure is simplified.",
          "Even a small portfolio or service site benefits from this pass. Cleaner architecture makes important pages easier to discover, easier to maintain, and more credible when someone reviews the implementation quality."
        ]
      }
    ]
  },
  {
    slug: "robots-txt-guide",
    category: "Guide",
    title: "robots.txt Guide",
    byline: "Jan Christopher Buen",
    publishedAt: "2026-03-12",
    publishedLabel: "March 12, 2026",
    readingTime: "5 min read",
    summary:
      "What robots.txt can and cannot do, plus the rules that matter during a technical SEO review.",
    sections: [
      {
        heading: "What robots.txt Does",
        paragraphs: [
          "robots.txt gives crawlers instructions about where they are allowed to crawl. It does not reliably prevent indexing if blocked URLs are still linked or referenced elsewhere.",
          "That distinction matters because many site owners use robots.txt as if it were a removal tool. In practice, it is best treated as a crawl-management file that works alongside canonicals, meta robots, and strong internal linking."
        ]
      },
      {
        heading: "Common Mistakes",
        paragraphs: [
          "Blocking critical assets, accidentally disallowing important directories, and assuming robots.txt replaces meta robots directives are frequent issues. A sitemap line is also commonly forgotten.",
          "Search-result pages, staging folders, and plugin-generated paths are common places to double-check. One overly broad rule can unintentionally hide pages or resources that support rendering and discovery."
        ]
      },
      {
        heading: "Audit Use Case",
        paragraphs: [
          "During a technical SEO audit, review robots.txt alongside XML sitemaps, canonicals, and internal links. The file should support crawl efficiency without hiding pages that need to be discovered.",
          "A short validation step before launch can catch syntax issues, missing sitemap declarations, and logic problems before they become indexation headaches."
        ]
      }
    ]
  },
  {
    slug: "canonical-tags-guide",
    category: "Canonicalization",
    title: "Canonical Tags Guide",
    byline: "Jan Christopher Buen",
    publishedAt: "2026-03-12",
    publishedLabel: "March 12, 2026",
    readingTime: "5 min read",
    summary:
      "How to use canonical tags correctly to consolidate duplicate URLs and support clean indexing signals.",
    sections: [
      {
        heading: "Why Canonical Tags Matter",
        paragraphs: [
          "Canonical tags help search engines understand which URL should be treated as the preferred version when duplicate or near-duplicate pages exist.",
          "They are especially useful on sites with filtering, tracking parameters, pagination variants, or CMS behavior that can create multiple accessible URLs for substantially similar content."
        ]
      },
      {
        heading: "Common Implementation Issues",
        paragraphs: [
          "Self-referencing canonicals are standard, but mismatched protocols, query-parameter duplicates, and canonicals that point to non-equivalent pages can cause confusion.",
          "It is also worth checking whether canonical targets return clean 200 responses and match the intended internal-link version. A technically correct tag can still send a mixed signal if the surrounding site structure points elsewhere."
        ]
      },
      {
        heading: "Audit Approach",
        paragraphs: [
          "Check canonical consistency against internal links, sitemaps, and indexability rules. A canonical tag works best when it supports the rest of the technical SEO signal set.",
          "A practical review usually starts with templates, then moves into exceptions such as archives, filtered views, and campaign URLs where duplication risk is higher."
        ]
      }
    ]
  }
];
