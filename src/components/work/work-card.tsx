import Link from "next/link";
import { cn } from "@/lib/cn";
import { CaseVisualFrame } from "@/components/work/case-visual-frame";
import { Reveal } from "@/components/motion/reveal";
import type { CaseStudy } from "@/content/work-types";
import type { Service } from "@/content/services";

/**
 * A case study on the index. `featured` gets the full width and the larger
 * type; the rest sit two-up beneath it.
 */
export function WorkCard({
  study,
  services,
  featured = false,
  className,
}: {
  study: CaseStudy;
  services: readonly Service[];
  featured?: boolean;
  className?: string;
}) {
  return (
    <Reveal as="article" className={className}>
      <Link
        href={`/work/${study.slug}`}
        className="group flex flex-col gap-7"
        aria-label={`${study.title} — ${study.reference}`}
      >
        <CaseVisualFrame
          visual={study.gallery[0]}
          ratio={featured ? "21 / 9" : undefined}
          sizes={
            featured
              ? "(min-width: 1024px) 1280px, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          priority={featured}
          className="transition-colors duration-base ease-signature group-hover:border-line-strong"
        />

        <div className={cn("flex flex-col gap-4", featured && "md:max-w-[52ch]")}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="label text-signal">{study.reference}</span>
            <span aria-hidden className="bg-line-strong h-px w-6" />
            <span className="label text-ink-faint">{study.category}</span>
          </div>

          <h3
            className={cn(
              "text-ink transition-transform duration-base ease-signature group-hover:translate-x-1",
              featured ? "text-h1" : "text-h2",
            )}
          >
            {study.title}
          </h3>

          <p className="text-ink-muted max-w-prose">{study.summary}</p>

          {services.length > 0 ? (
            <ul className="flex flex-wrap gap-x-3 gap-y-2 pt-1">
              {services.map((service) => (
                <li
                  key={service.href}
                  className="label text-ink-faint border-line rounded-xs border px-2.5 py-1"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="text-small text-ink-muted group-hover:text-ink mt-2 inline-flex items-center gap-2 transition-colors duration-base ease-signature">
            View Case Study
            <span
              aria-hidden
              className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
