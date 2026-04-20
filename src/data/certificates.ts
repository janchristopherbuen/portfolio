export type Certificate = {
  title: string;
  issuer: string;
  summary: string;
  verificationUrl: string;
};

export const certificates: Certificate[] = [
  {
    title: "Technical SEO and AI Search Essentials",
    issuer: "Semrush Academy",
    summary: "Focused on technical SEO fundamentals, AI search visibility, and practical optimization workflows.",
    verificationUrl:
      "https://static.semrush.com/academy/certificates/a730b13fe9/jan-christopher-buen_25.pdf"
  },
  {
    title: "SEO Toolkit Crash Course",
    issuer: "Semrush Academy",
    summary: "Covered SEO research, auditing, and reporting workflows using modern search tools.",
    verificationUrl:
      "https://static.semrush.com/academy/certificates/01cfb57b77/jan-christopher-buen_25.pdf"
  },
  {
    title: "SEO Certification",
    issuer: "HubSpot Academy",
    summary: "Validated core SEO strategy, content optimization, and search growth fundamentals.",
    verificationUrl:
      "https://app-na2.hubspot.com/academy/achievements/mwqcd44w/en/1/jan-christopher-buen/seo"
  },
  {
    title: "Ahrefs Marketing Platform Certification",
    issuer: "Ahrefs",
    summary: "Demonstrated platform knowledge across keyword research, backlink analysis, and site auditing.",
    verificationUrl:
      "https://ahrefs.com/academy/certificate/7698a4e0522f43c29026c61e921b49eb"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    summary: "Covered accessible, responsive HTML and CSS layouts with a strong front-end foundation.",
    verificationUrl:
      "https://www.freecodecamp.org/certification/janchristopherbuen/responsive-web-design-v9"
  }
];
