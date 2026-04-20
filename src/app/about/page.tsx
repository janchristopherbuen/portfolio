import type { Metadata } from "next";

import { ContactCta } from "@/components/contact-cta";
import { SectionTitle } from "@/components/section-title";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Jan Christopher Buen, a WordPress Developer and Technical SEO Specialist focused on performance, usability, and search visibility."
};

const summary =
  "WordPress Developer and Technical SEO Specialist with hands-on experience building and optimizing websites using Elementor Pro, custom child themes, and WooCommerce. Skilled in developing conversion-focused landing pages, implementing local SEO strategies, and managing full WordPress ecosystems including hosting, security, backups, and analytics. Focused on improving site performance, user experience, and search visibility.";

const expertise = [
  "WordPress Website Development",
  "Elementor Pro & Custom Child Themes",
  "WooCommerce Setup & Optimization",
  "Conversion-Focused Landing Pages",
  "Technical SEO Implementation",
  "Local SEO & Backlink Building",
  "Website Performance Optimization"
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16 sm:space-y-24">
      <section className="max-w-4xl space-y-6 pt-8 sm:pt-12">
        <SectionTitle
          eyebrow="About"
          title="A WordPress developer with a practical, SEO-aware build process."
          description={summary}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-line bg-white/[0.03] p-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">What I do</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
            {expertise.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-line bg-white/[0.03] p-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">Work approach</h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
            {siteConfig.approach.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-10">
        <SectionTitle
          eyebrow="Tools & Platforms"
          title="A workflow built around WordPress delivery, auditing, and ongoing optimization."
          description="The stack below supports research, implementation, measurement, and maintenance across client sites and SEO projects."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-line bg-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
