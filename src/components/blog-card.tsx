import Link from "next/link";

import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {post.category}
      </p>
      <div className="mt-4 flex-1">
        <h2 className="font-display text-2xl tracking-tight text-foreground">{post.title}</h2>
        <p className="mt-3 text-sm text-muted">
          By {post.byline} · {post.publishedLabel} · {post.readingTime}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-200">{post.summary}</p>
      </div>
      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
