import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionTitle } from "@/components/section-title";
import { blogPosts } from "@/data/blog";

type BlogArticlePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: BlogArticlePageProps): Metadata {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <section className="max-w-4xl">
        <SectionTitle eyebrow={post.category} title={post.title} description={post.summary} />
        <p className="mt-6 text-sm text-muted">
          By {post.byline} · {post.publishedLabel} · {post.readingTime}
        </p>
      </section>

      <article className="max-w-4xl space-y-8">
        {post.sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-[2rem] border border-line bg-white/[0.03] p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl tracking-tight text-foreground">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <div className="max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
