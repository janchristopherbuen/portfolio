import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-16">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-radial-shell opacity-100"
        aria-hidden="true"
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            {siteConfig.name}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-soft">
          <div className="rounded-[1.5rem] border border-accent/20 bg-slate-950/60 p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">Focused Delivery</p>
            <div className="mt-6 space-y-5">
              {[
                "Responsive WordPress websites and landing pages",
                "WooCommerce experiences built for usability and conversion",
                "Technical SEO work that supports performance and visibility"
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <p className="text-sm leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
