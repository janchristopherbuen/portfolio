import type { Metadata } from "next";

import { SectionTitle } from "@/components/section-title";
import { contactLinks, contactMethods } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jan Christopher Buen for WordPress development, WooCommerce work, and technical SEO collaboration."
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <SectionTitle
        eyebrow="Contact"
        title="Let&apos;s collaborate on your next WordPress build or SEO improvement project."
        description="If you need a responsive website, WooCommerce support, landing page work, or technical SEO help, I&apos;d be glad to connect."
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {contactMethods.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.75rem] border border-line bg-white/[0.03] p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-accent">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 block text-lg font-medium text-foreground transition hover:text-accent"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-medium text-foreground">{item.value}</p>
              )}
            </article>
          ))}

          <div className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-line bg-white/[0.03] p-5 transition hover:border-accent/40 hover:bg-white/[0.05]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {link.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        <section className="rounded-[2rem] border border-line bg-white/[0.03] p-6 sm:p-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">Send a message</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            This form is ready for UI use now and can be connected to your preferred backend or
            email service later.
          </p>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Name</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border border-line bg-slate-950/60 px-4 py-3 text-foreground placeholder:text-muted"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block">Email</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-line bg-slate-950/60 px-4 py-3 text-foreground placeholder:text-muted"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block">Project type</span>
              <input
                type="text"
                name="projectType"
                className="w-full rounded-2xl border border-line bg-slate-950/60 px-4 py-3 text-foreground placeholder:text-muted"
                placeholder="Website build, WooCommerce, SEO, landing page..."
              />
            </label>

            <label className="block text-sm text-slate-200">
              <span className="mb-2 block">Message</span>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-2xl border border-line bg-slate-950/60 px-4 py-3 text-foreground placeholder:text-muted"
                placeholder="Tell me a little about the project and what you need help with."
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90"
            >
              Start the Conversation
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}
