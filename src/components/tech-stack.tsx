import { siteConfig } from "@/data/site";

export function TechStack() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {siteConfig.expertise.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-line bg-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200 transition hover:border-accent/40 hover:bg-white/[0.05]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
