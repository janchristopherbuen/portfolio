import type { Metadata } from "next";

import { CertificateCard } from "@/components/certificate-card";
import { SectionTitle } from "@/components/section-title";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certificates and training completed by Jan Christopher Buen across SEO, technical search, and responsive web development."
};

export default function CertificatesPage() {
  return (
    <div className="space-y-12 pb-16 pt-8 sm:space-y-16 sm:pt-12">
      <SectionTitle
        eyebrow="Certificates"
        title="Certifications that reinforce technical SEO and front-end foundations."
        description="Structured learning across SEO platforms, technical search workflows, and responsive web development, with direct verification links for every credential."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
