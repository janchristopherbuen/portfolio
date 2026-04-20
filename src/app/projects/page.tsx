import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse WordPress, WooCommerce, landing page, and technical SEO projects by Jan Christopher Buen."
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <SectionTitle
        eyebrow="Projects"
        title="WordPress and technical SEO projects built for clarity, performance, and business goals."
        description="A collection of website builds, conversion-focused pages, and SEO work shaped around cleaner structure, better usability, and stronger search visibility."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
