import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.03] p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/40">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex-1">
        <h3 className="font-display text-2xl tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={`${project.title}-${link.label}`}
              href={link.href}
              className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
