import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WorkHero } from "@/components/work/work-hero";
import { WorkCard } from "@/components/work/work-card";
import { WorkCta } from "@/components/work/work-cta";
import { publishedCaseStudies } from "@/content/work";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { isWorkIndexIndexable, robotsFor } from "@/lib/indexing";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Growth systems, campaigns and digital experiences from AIOS Labs — selected case studies covering search, paid acquisition and conversion.",
  alternates: { canonical: "/work" },
  // A listing of nothing but reserved slots is a thin page. It becomes
  // indexable the moment one real case study is published.
  robots: robotsFor(isWorkIndexIndexable),
  openGraph: {
    type: "website",
    title: `Selected Work — ${site.name}`,
    description:
      "Growth systems, campaigns and digital experiences built around the problem the business actually had.",
    url: "/work",
    siteName: site.name,
  },
};

function servicesFor(slugs: readonly string[]) {
  return slugs
    .map((slug) => services.find((entry) => entry.href === `/services/${slug}`))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
}

export default function WorkPage() {
  const [featured, ...rest] = publishedCaseStudies;

  return (
    <main id="main" className="flex-1">
      <WorkHero />

      <Section aria-labelledby="selected-heading" space="sm">
        <Container width="page" className="flex flex-col gap-16 md:gap-24">
          <h2 id="selected-heading" className="sr-only">
            Selected case studies
          </h2>

          {featured ? (
            <WorkCard
              study={featured}
              services={servicesFor(featured.services)}
              featured
            />
          ) : null}

          {/* The second column drops, so the grid reads as a composition
              rather than a row of equal cards. */}
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:gap-x-16">
            {rest.map((study, index) => (
              <WorkCard
                key={study.slug}
                study={study}
                services={servicesFor(study.services)}
                className={index % 2 === 1 ? "lg:mt-24" : undefined}
              />
            ))}
          </div>
        </Container>
      </Section>

      <WorkCta index="02" />
    </main>
  );
}
