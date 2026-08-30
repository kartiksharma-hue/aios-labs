import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal/legal-document";
import { privacyPolicy } from "@/content/legal";
import { INDEX_FOLLOW } from "@/lib/indexing";
import { socialCard } from "@/lib/metadata";

export const metadata: Metadata = {
  title: { absolute: privacyPolicy.metaTitle },
  description: privacyPolicy.metaDescription,
  alternates: { canonical: "/privacy" },
  robots: INDEX_FOLLOW,
  ...socialCard({
    title: privacyPolicy.metaTitle,
    description: privacyPolicy.metaDescription,
    url: "/privacy",
  }),
};

/** No structured data. There is nothing here to describe in schema that would
 *  not amount to asserting an unverified legal entity. */
export default function PrivacyPage() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
