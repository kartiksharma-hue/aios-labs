import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Service } from "@/content/services";

type ServiceStopProps = {
  service: Service;
  /** Which side of the road the content sits on at desktop. */
  side: "left" | "right";
  /**
   * `null` means "no journey is driving the page" — no JavaScript, reduced
   * motion, or before the first scroll. Every stop then renders at full
   * prominence, so the content never depends on an animation having run.
   */
  isActive: boolean | null;
};

export function ServiceStop({ service, side, isActive }: ServiceStopProps) {
  const prominent = isActive !== false;

  return (
    <li
      data-stop
      className="relative grid items-center gap-x-8 pl-16 md:grid-cols-[1fr_9rem_1fr] md:gap-x-10 md:pl-0"
    >
      {/* Node on the road. Fills when the taxi arrives. */}
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 left-6 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-base ease-signature md:left-1/2",
          prominent
            ? "border-signal bg-signal"
            : "border-line-strong bg-elevated",
        )}
      />

      <Link
        href={service.href}
        className={cn(
          "group flex flex-col gap-3 py-10 md:py-16",
          // Row 1 of 3 at desktop; the side decides which outer column.
          side === "left"
            ? "md:col-start-1 md:items-end md:text-right"
            : "md:col-start-3 md:items-start md:text-left",
        )}
      >
        <span
          className={cn(
            "label transition-colors duration-base ease-signature",
            prominent ? "text-signal" : "text-ink-faint",
          )}
        >
          {service.index}
        </span>

        <h3
          className={cn(
            "text-h3 md:text-h2 transition-colors duration-base ease-signature",
            prominent ? "text-ink" : "text-ink-muted",
          )}
        >
          {service.name}
        </h3>

        <p
          className={cn(
            "max-w-[36ch] transition-colors duration-base ease-signature",
            prominent ? "text-ink-muted" : "text-ink-faint",
          )}
        >
          {service.summary}
        </p>

        <span
          className={cn(
            "text-small mt-1 inline-flex items-center gap-2 transition-colors duration-base ease-signature",
            prominent ? "text-ink" : "text-ink-faint",
          )}
        >
          Explore
          <span
            aria-hidden
            className="transition-transform duration-quick ease-signature group-hover:translate-x-1 group-focus-visible:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>
    </li>
  );
}
