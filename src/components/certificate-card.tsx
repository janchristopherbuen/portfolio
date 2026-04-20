import type { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-white/[0.03] p-6 transition duration-200 hover:border-accent/40 hover:bg-white/[0.05]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {certificate.issuer}
      </p>
      <h3 className="mt-3 font-display text-2xl tracking-tight text-foreground">
        {certificate.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{certificate.summary}</p>
    </article>
  );
}
