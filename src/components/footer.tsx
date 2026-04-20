import Link from "next/link";

import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-container flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl text-foreground">{siteConfig.name}</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{siteConfig.description}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-accent">
            {siteConfig.email}
          </Link>
          <p>{siteConfig.location}</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
