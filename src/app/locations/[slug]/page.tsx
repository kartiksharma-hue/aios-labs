import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPage } from "@/components/locations/location-page";
import {
  getLocation,
  isIndexable,
  publishedLocations,
} from "@/content/locations";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return publishedLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const url = `/locations/${slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: url },
    // Indexed only once the page carries researched, market-specific content.
    // Four pages differing by a city name would be a doorway-page network.
    robots: isIndexable(location)
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      title: `${location.metaTitle} — ${site.name}`,
      description: location.metaDescription,
      url,
      siteName: site.name,
    },
  };
}

/**
 * No LocalBusiness, Organization or Place structured data is emitted. AIOS
 * Labs has no verified office in these markets, and a city in a URL is not a
 * business location. It goes in only if a verified office is added to the
 * content record.
 */
export default async function LocationRoute({
  params,
}: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  const referenced = location.services
    .map((serviceSlug) =>
      services.find((entry) => entry.href === `/services/${serviceSlug}`),
    )
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return <LocationPage location={location} services={referenced} />;
}
