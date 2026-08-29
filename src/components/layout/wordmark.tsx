import Link from "next/link";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  /** `lg` is the footer treatment, `xl` the intro reveal. */
  size?: "sm" | "lg" | "xl";
  /** Renders plain text instead of a link. */
  asLink?: boolean;
  className?: string;
};

const sizes = {
  sm: "text-body",
  lg: "text-h2",
  xl: "text-display-xl",
} as const;

/**
 * AIOS LABS wordmark. "AIOS" carries the weight, "LABS" recedes — the split
 * gives the mark a hierarchy without needing a logotype file.
 */
export function Wordmark({
  size = "sm",
  asLink = true,
  className,
}: WordmarkProps) {
  const mark = (
    <span
      className={cn(
        "font-medium tracking-[-0.02em] whitespace-nowrap",
        sizes[size],
        className,
      )}
    >
      <span className="text-ink">AIOS</span>{" "}
      <span className="text-ink-muted group-hover:text-ink transition-colors duration-quick ease-signature">
        LABS
      </span>
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" aria-label="AIOS Labs — home" className="group">
      {mark}
    </Link>
  );
}
