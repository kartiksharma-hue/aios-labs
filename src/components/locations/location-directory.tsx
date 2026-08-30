import Link from "next/link";
import type { LocationPage } from "@/content/location-page-types";

/**
 * The location directory — an editorial list, not a card grid.
 *
 * Each row is one real <a>, so the whole row is keyboard reachable and carries
 * a meaningful accessible name. Nothing is revealed on hover.
 */
export function LocationDirectory({
  locations,
}: {
  locations: readonly LocationPage[];
}) {
  return (
    <ul className="flex flex-col">
      {locations.map((location, index) => (
        <li key={location.slug}>
          <Link
            href={`/locations/${location.slug}`}
            className="group border-line hover:bg-surface focus-visible:bg-surface -mx-gutter flex items-start gap-5 border-t px-gutter py-7 transition-colors duration-base ease-signature md:items-center md:gap-8 md:py-9"
          >
            <span className="label text-signal w-6 shrink-0 pt-1.5 md:pt-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="flex flex-1 flex-col gap-1.5 md:flex-row md:items-center md:gap-8">
              <span className="text-h3 md:text-h2 text-ink transition-transform duration-base ease-signature group-hover:translate-x-2 group-focus-visible:translate-x-2 md:flex-1">
                {location.city}
              </span>
              <span className="text-small text-ink-muted md:max-w-[34ch] md:flex-1">
                Growth systems for businesses operating in {location.city}.
              </span>
            </span>

            <span
              aria-hidden
              className="text-ink-muted group-hover:text-signal group-focus-visible:text-signal shrink-0 -translate-x-2 pt-1 opacity-0 transition-all duration-base ease-signature group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:pt-0"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
