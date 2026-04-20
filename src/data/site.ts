export const siteConfig = {
  name: "Jan Christopher Buen",
  title: "WordPress Developer & Technical SEO Specialist",
  description:
    "I build responsive WordPress websites, landing pages, and WooCommerce experiences with a strong focus on technical SEO, performance, usability, and conversion.",
  summary:
    "WordPress Developer and Technical SEO Specialist with hands-on experience building and optimizing websites using Elementor Pro, custom child themes, and WooCommerce. Skilled in developing conversion-focused landing pages, implementing local SEO strategies, and managing full WordPress ecosystems including hosting, security, backups, and analytics. Focused on improving site performance, user experience, and search visibility.",
  email: "buenjanchristopher@gmail.com",
  phone: "0969 601 2157",
  location: "Philippines (GMT+8)",
  portfolioUrl: "https://janchristopherbuen.com",
  logoPath: "/images/logo-header.png",
  heroImagePath: "/images/hero-image.jpg",
  expertise: [
    "WordPress",
    "Elementor Pro",
    "WooCommerce",
    "Technical SEO",
    "Responsive Design",
    "Website Performance Optimization",
    "Local SEO",
    "On-Page SEO",
    "Structured Data",
    "Hostinger Deployment"
  ],
  coreExpertise: [
    "WordPress Website Development",
    "Elementor Pro & Custom Child Themes",
    "WooCommerce Setup & Optimization",
    "Conversion-Focused Landing Pages",
    "Technical SEO Implementation",
    "Local SEO & Backlink Building",
    "Website Performance Optimization"
  ],
  tools: [
    "Screaming Frog",
    "Google Search Console",
    "Semrush",
    "Ahrefs",
    "Google Lighthouse",
    "PageSpeed Insights",
    "Rank Math SEO",
    "Wordfence",
    "UpdraftPlus",
    "WP Mail SMTP"
  ],
  approach: [
    "Build clean, conversion-focused WordPress experiences with scalable page structures.",
    "Treat technical SEO, usability, and content hierarchy as part of the same delivery process.",
    "Launch with performance, security, backups, analytics, and maintainability already considered."
  ]
} as const;

export type SiteConfig = typeof siteConfig;
