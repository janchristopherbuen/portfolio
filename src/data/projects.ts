export type ProjectLink = {
  label: "Live Demo" | "GitHub";
  href: string;
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Box & Bloom - WooCommerce Website Build & SEO",
    description:
      "A WooCommerce store build focused on improving store structure, product discovery, and launch-ready search visibility.",
    highlights: [
      "Developed WooCommerce store with improved structure and navigation.",
      "Implemented on-page SEO including metadata, internal linking, and content optimization."
    ],
    tags: ["WooCommerce", "WordPress", "Technical SEO", "On-Page SEO"],
    featured: true
  },
  {
    title: "WordPress Website Build with Elementor Pro",
    description:
      "A full website project taken from concept to launch with responsive layouts, polished visual hierarchy, and a custom child theme foundation.",
    highlights: [
      "Designed and developed a full website from concept to launch using Elementor Pro and a custom child theme.",
      "Built responsive layouts and improved user experience."
    ],
    tags: ["Elementor Pro", "Custom Child Theme", "Responsive Design"],
    featured: true
  },
  {
    title: "Conversion-Focused Landing Page",
    description:
      "A responsive landing page optimized for lead generation, clarity, and action with a strong emphasis on conversion-focused UX.",
    highlights: [
      "Built a responsive landing page using Astra templates.",
      "Focused on lead generation and conversion-focused UX."
    ],
    tags: ["Landing Pages", "Astra", "Lead Generation", "UX"],
    featured: true
  },
  {
    title: "Technical SEO Portfolio Optimization",
    description:
      "A technical SEO audit and implementation pass centered on crawlability, indexing, metadata quality, structured data, and internal linking.",
    highlights: [
      "Conducted SEO audit covering crawlability, indexing, metadata cleanup, structured data, and internal linking improvements."
    ],
    tags: ["Technical SEO", "Structured Data", "Metadata", "Internal Linking"]
  },
  {
    title: "WooCommerce Setup and Website Operations",
    description:
      "An operations-focused WordPress setup that connected storefront functionality with dependable hosting, payments, and site maintenance workflows.",
    highlights: [
      "Implemented WooCommerce product setup, checkout flow, and payment integration.",
      "Configured security, backups, SMTP, and deployment setup."
    ],
    tags: ["WooCommerce", "Payments", "Security", "Deployment"]
  }
];
