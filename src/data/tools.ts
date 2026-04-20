export type ToolItem = {
  title: string;
  description: string;
  relatedLabel: string;
  relatedHref: string;
};

export type RelatedGuide = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export const tools: ToolItem[] = [
  {
    title: "Meta Tag Analyzer",
    description:
      "Review head markup for title tags, meta descriptions, canonicals, robots directives, and social metadata.",
    relatedLabel: "Canonical tags guide",
    relatedHref: "/blog/canonical-tags-guide"
  },
  {
    title: "robots.txt Validator",
    description:
      "Check for user-agent coverage, sitemap directives, and unexpected lines before launch or audit handoff.",
    relatedLabel: "robots.txt guide",
    relatedHref: "/blog/robots-txt-guide"
  },
  {
    title: "Schema Markup Generator",
    description:
      "Generate starter JSON-LD structures for portfolio, business, or project entities used in technical SEO work.",
    relatedLabel: "Technical SEO checklist",
    relatedHref: "/blog/technical-seo-checklist"
  },
  {
    title: "XML Sitemap Validator",
    description:
      "Validate sitemap structure, URL counts, and HTTPS usage to support cleaner crawl discovery signals.",
    relatedLabel: "Technical SEO checklist",
    relatedHref: "/blog/technical-seo-checklist"
  }
];

export const relatedGuides: RelatedGuide[] = [
  {
    title: "Technical SEO Checklist",
    description:
      "Use the checklist to turn metadata, crawlability, and sitemap checks into a broader review workflow.",
    href: "/blog/technical-seo-checklist",
    ctaLabel: "Read the checklist"
  },
  {
    title: "Technical SEO Portfolio Optimization",
    description:
      "See how metadata, schema, internal linking, and technical QA fit together in a practical portfolio audit.",
    href: "/projects",
    ctaLabel: "View project work"
  }
];
