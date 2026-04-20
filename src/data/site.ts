export const siteConfig = {
  name: "Jan Christopher Buen",
  title: "WordPress Developer & Technical SEO Specialist",
  description:
    "I build responsive WordPress websites, landing pages, and WooCommerce experiences with a strong focus on technical SEO, performance, usability, and conversion.",
  email: "buenjanchristopher@gmail.com",
  phone: "0969 601 2157",
  location: "Philippines (GMT+8)",
  portfolioUrl: "https://janchristopherbuen.github.io/portfolio/",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" }
  ],
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
