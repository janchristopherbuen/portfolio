import type { Metadata } from "next";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { ToolCard } from "@/components/tool-card";
import { relatedGuides, tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Technical SEO tools and related guides covering metadata checks, robots.txt review, schema markup, and XML sitemap validation."
};

export default function ToolsPage() {
  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <SectionTitle
        eyebrow="Tools"
        title="Technical SEO tools and utilities carried over into the Vercel portfolio."
        description="A curated toolkit built around common audit checks including metadata review, crawl controls, schema support, and XML sitemap validation."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </section>

      <section className="space-y-8 rounded-[2rem] border border-line bg-white/[0.03] p-6 sm:p-8">
        <SectionTitle
          eyebrow="Related Guides"
          title="Practical reading that pairs with the toolset."
          description="Each guide connects the checklist or validation step to real SEO implementation decisions."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {relatedGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-3xl border border-line bg-slate-950/40 p-6 transition hover:border-accent/40"
            >
              <h2 className="font-display text-2xl tracking-tight text-foreground">{guide.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{guide.description}</p>
              <Link
                href={guide.href}
                className="mt-6 inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                {guide.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
