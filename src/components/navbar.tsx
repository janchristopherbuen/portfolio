"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg tracking-tight text-foreground">
            Jan Christopher Buen
          </span>
          <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-muted">
            WordPress & SEO
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition hover:border-accent hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </div>
        </button>

        <nav
          id="site-navigation"
          className={cn(
            "absolute left-4 right-4 top-[calc(100%+0.75rem)] rounded-3xl border border-line bg-panel p-4 shadow-soft md:static md:flex md:items-center md:gap-2 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            open ? "block" : "hidden md:flex"
          )}
          aria-label="Primary"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive =
              link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-full px-4 py-3 text-sm font-medium transition md:px-4 md:py-2.5",
                  isActive
                    ? "bg-accent text-slate-950"
                    : "text-slate-200 hover:bg-white/[0.06] hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
