import Image from "next/image";
import { cn } from "@/lib/cn";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";

/**
 * A media slot that may not have its asset yet. Case study visuals, founder
 * portraits and team photography are all this shape.
 */
export type MediaSlot = {
  /** What occupies the slot. Shown on the placeholder, and the alt fallback. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 10" or "4 / 5". */
  ratio: string;
  /** Real asset path. `null` renders the marked placeholder frame instead. */
  src: string | null;
  /** Described for screen readers once a real asset exists. */
  alt: string | null;
};

/**
 * With no `src` this renders the marked placeholder; with one it renders the
 * real asset at the same ratio. Adding artwork is therefore a content change —
 * the layout, ratios and spacing do not move.
 */
export function MediaFrame({
  slot,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  /** Presentation override, for slots cropped differently to their content ratio. */
  ratio,
  className,
}: {
  slot: MediaSlot;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
  className?: string;
}) {
  const aspect = ratio ?? slot.ratio;

  if (!slot.src) {
    return (
      <PlaceholderFrame
        label={`${slot.label} — pending`}
        ratio={aspect}
        className={className}
      />
    );
  }

  return (
    <div
      style={{ aspectRatio: aspect }}
      className={cn(
        "border-line bg-surface relative w-full overflow-hidden rounded-xs border",
        className,
      )}
    >
      <Image
        src={slot.src}
        alt={slot.alt ?? slot.label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
