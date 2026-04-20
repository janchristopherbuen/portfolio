import Link from "next/link";

import type { ToolItem } from "@/data/tools";

type ToolCardProps = {
  tool: ToolItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]">
      <div className="flex-1">
        <h2 className="font-display text-2xl tracking-tight text-foreground">{tool.title}</h2>
        <p className="mt-4 text-sm leading-7 text-muted">{tool.description}</p>
      </div>
      <div className="mt-6">
        <Link
          href={tool.relatedHref}
          className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          {tool.relatedLabel}
        </Link>
      </div>
    </article>
  );
}
