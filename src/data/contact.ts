export type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  description: string;
};

export type ContactLink = {
  label: string;
  href: string;
  description: string;
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "buenjanchristopher@gmail.com",
    href: "mailto:buenjanchristopher@gmail.com",
    description: "Best for project inquiries, website builds, and technical SEO collaboration."
  },
  {
    label: "Phone",
    value: "0969 601 2157",
    href: "tel:09696012157",
    description: "Available for direct conversations about active projects and client work."
  },
  {
    label: "Location",
    value: "Philippines (GMT+8)",
    description: "Working remotely with clients and teams across different time zones."
  }
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/janchristopherbuen",
    description: "Review repositories, implementation work, and ongoing front-end projects."
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-christopher-buen-24715117a",
    description: "Connect for professional networking, recruiter outreach, and collaboration."
  },
  {
    label: "Resume download",
    href: "https://drive.google.com/file/d/1ZiKR56uAGR9FtkeWdw-NSjNUguvzmQMO/view",
    description: "Open the latest resume for experience, skills, and certification details."
  }
];
