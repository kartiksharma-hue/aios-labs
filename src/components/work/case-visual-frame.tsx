import Image from "next/image";
import { cn } from "@/lib/cn";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import type { CaseVisual } from "@/content/work-types";

/**
 * One visual slot in a case study.
 *
 * With no `src` it renders the marked placeholder frame; with one it renders
 * the real asset at the same aspect ratio. Dropping in artwork is therefore a
 * content change — the page layout, ratios and spacing do not move.
 */
export function CaseVisualFrame({
  visual,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  /**
   * Presentation override. A full-bleed slot crops to a cinematic ratio; at
   * container width the content's own 16/10 becomes an 800px-tall block that
   * reads as broken rather than composed.
   */
  ratio,
  className,
}: {
  visual: CaseVisual;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
  className?: string;
}) {
  const aspect = ratio ?? visual.ratio;

  if (!visual.src) {
    return (
      <PlaceholderFrame
        label={`${visual.label} — pending`}
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
        src={visual.src}
        alt={visual.alt ?? visual.label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
