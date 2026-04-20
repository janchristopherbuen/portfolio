import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { SectionTitle } from "@/components/section-title";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical SEO guides on robots.txt, canonical tags, and practical optimization checklists written by Jan Christopher Buen."
};

export default function BlogPage() {
  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <SectionTitle
        eyebrow="Blog"
        title="Technical SEO guides written with an implementation-first mindset."
        description="Articles carried over from the original portfolio, now organized inside the Next.js app with structured metadata and reusable content data."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
