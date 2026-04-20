import Link from "next/link";

import { contactLinks } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:px-8">
        <div>
          <p className="font-display text-xl text-foreground">{siteConfig.name}</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">{siteConfig.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Navigate</p>
          <nav aria-label="Footer" className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted">
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-accent">
            {siteConfig.email}
          </Link>
          <p>{siteConfig.location}</p>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
