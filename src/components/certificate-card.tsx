import type { Certificate } from "@/data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-white/[0.03] p-6 transition duration-200 hover:border-accent/40 hover:bg-white/[0.05]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {certificate.issuer}
      </p>
      <div className="mt-3 flex-1">
        <h3 className="font-display text-2xl tracking-tight text-foreground">
          {certificate.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">{certificate.summary}</p>
      </div>
      <div className="mt-6">
        <a
          href={certificate.verificationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
        >
          Verify Certificate
        </a>
      </div>
    </article>
  );
}
