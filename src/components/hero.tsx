import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-16">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-radial-shell opacity-100"
        aria-hidden="true"
      />
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-14">
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

        <div className="w-full">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-soft sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-panel">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background/50 to-transparent"
                aria-hidden="true"
              />
              <Image
                src={siteConfig.heroImagePath}
                alt="Jan Christopher Buen portfolio hero image"
                width={1200}
                height={1400}
                priority
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
