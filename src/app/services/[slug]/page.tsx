import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getServicePage, servicePages } from "@/content/service-pages";
import { services } from "@/content/services";
import { site } from "@/lib/site";

/** All eight pages are known at build time, so all eight are static. */
export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

function findService(slug: string) {
  return services.find((entry) => entry.href === `/services/${slug}`);
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const content = getServicePage(slug);
  if (!content) return {};

  const url = `/services/${slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${content.metaTitle} — ${site.name}`,
      description: content.metaDescription,
      url,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.metaTitle} — ${site.name}`,
      description: content.metaDescription,
    },
  };
}

export default async function ServiceRoute({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const content = getServicePage(slug);
  const service = findService(slug);

  if (!content || !service) notFound();

  const related = content.related
    .map((relatedSlug) => findService(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  /**
   * Structured data describes only what the page actually contains: the
   * service and its visible FAQ. No ratings, no reviews, no aggregate claims —
   * there is nothing verified to describe.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: content.serviceType,
        description: content.metaDescription,
        url: `${site.url}/services/${slug}`,
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage content={content} service={service} related={related} />
    </>
  );
}
