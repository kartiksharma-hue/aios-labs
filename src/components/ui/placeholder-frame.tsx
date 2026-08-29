import { cn } from "@/lib/cn";

type PlaceholderFrameProps = {
  /** What will eventually fill this slot, e.g. "Case study visual". */
  label: string;
  /** CSS aspect-ratio value, e.g. "4 / 3" or "4 / 5". */
  ratio?: string;
  className?: string;
};

/**
 * A reserved media slot, marked so it reads as deliberately empty rather than
 * as a broken image. Every one of these is waiting on real assets — none of
 * them should be filled with stock imagery.
 */
export function PlaceholderFrame({
  label,
  ratio = "4 / 3",
  className,
}: PlaceholderFrameProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "border-line bg-surface placeholder-hatch relative w-full overflow-hidden rounded-xs border",
        className,
      )}
    >
      <span className="label text-ink-faint absolute inset-x-0 bottom-4 px-4 text-center">
        {label}
      </span>
    </div>
  );
}
