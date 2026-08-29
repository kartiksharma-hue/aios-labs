import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** `h2` by default; pass `h1` only on a page's single primary heading. */
  as?: "h1" | "h2" | "h3";
  size?: "display" | "h1" | "h2";
  align?: "start" | "center";
  className?: string;
};

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
} as const;

/** Eyebrow + headline + lead. Keeps heading rhythm identical across pages. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  lead,
  as: Tag = "h2",
  size = "h2",
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow index={index}>{eyebrow}</Eyebrow> : null}
      <Tag className={cn(sizes[size], "text-ink")}>{title}</Tag>
      {lead ? (
        <p
          className={cn(
            "text-lead max-w-prose text-ink-muted",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
