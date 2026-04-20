import Link from "next/link";

import { CertificateCard } from "@/components/certificate-card";
import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { TechStack } from "@/components/tech-stack";
import { certificates } from "@/data/certificates";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const certificatePreview = certificates.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16 sm:space-y-24">
      <Hero />

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Expertise"
          title="Development and SEO work shaped around performance, usability, and conversion."
          description="A focused toolset for building WordPress sites and storefronts that are easy to manage, responsive across devices, and positioned for search visibility."
        />
        <TechStack />
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Selected work across WooCommerce, landing pages, and technical SEO."
            description="A concise view of recent portfolio work with an emphasis on practical builds and optimization outcomes."
          />
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent transition hover:text-accent/80"
          >
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Certificates"
            title="Training that supports both hands-on execution and search strategy."
            description="Recent certifications across SEO, search tooling, and responsive web development."
          />
          <Link
            href="/certificates"
            className="text-sm font-semibold text-accent transition hover:text-accent/80"
          >
            View all certificates
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {certificatePreview.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
