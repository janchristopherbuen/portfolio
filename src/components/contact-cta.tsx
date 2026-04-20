import Link from "next/link";

import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <section className="rounded-[2rem] border border-accent/20 bg-gradient-to-br from-accent/12 via-white/[0.04] to-white/[0.02] px-6 py-10 sm:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Let&apos;s Build
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          Need a WordPress site or SEO-focused landing page that feels polished and performs well?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          I collaborate on builds that balance clean UI, technical SEO, and practical business goals.
          If you&apos;re planning a new website, store, or optimization project, let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90"
          >
            Contact Me
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
