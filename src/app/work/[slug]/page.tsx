import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/work/case-study-page";
import {
  getCaseStudy,
  getCaseStudyNeighbours,
  publishedCaseStudies,
} from "@/content/work";
import { services } from "@/content/services";
import { isCaseStudyIndexable, robotsFor } from "@/lib/indexing";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return publishedCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const url = `/work/${slug}`;
  const title = `${study.title} — ${study.reference}`;

  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    // Placeholders carry no client information and nothing worth ranking, so
    // they are kept out of the index until real content replaces them. The
    // same rule decides sitemap inclusion — see src/lib/indexing.ts.
    robots: robotsFor(isCaseStudyIndexable(study)),
    openGraph: {
      type: "article",
      title: `${title} — ${site.name}`,
      description: study.summary,
      url,
      siteName: site.name,
    },
  };
}

export default async function CaseStudyRoute({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const used = study.services
    .map((serviceSlug) =>
      services.find((entry) => entry.href === `/services/${serviceSlug}`),
    )
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const { previous, next } = getCaseStudyNeighbours(slug);

  /**
   * No structured data is emitted. A CreativeWork or Service record here would
   * describe a project that has not happened yet — see the content rule in
   * work-types.ts. It goes in with the first verified case study.
   */
  return (
    <CaseStudyPage
      study={study}
      services={used}
      previous={previous}
      next={next}
    />
  );
}
