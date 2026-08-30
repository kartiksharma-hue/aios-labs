import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/legal-document";
import { termsAndConditions } from "@/content/legal";
import { INDEX_FOLLOW } from "@/lib/indexing";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: { absolute: termsAndConditions.metaTitle },
  description: termsAndConditions.metaDescription,
  alternates: { canonical: "/terms" },
  robots: INDEX_FOLLOW,
  ...socialCard({
    title: termsAndConditions.metaTitle,
    description: termsAndConditions.metaDescription,
    url: "/terms",
  }),
};

/** No structured data — see the note in /privacy. */
export default function TermsPage() {
  return <LegalDocumentPage document={termsAndConditions} />;
}
