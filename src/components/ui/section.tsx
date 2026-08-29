import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  /** Renders the inverted editorial (paper) treatment. */
  tone?: "dark" | "light";
  /** `sm` for tight, supporting sections. */
  space?: "default" | "sm" | "none";
  as?: ElementType;
  id?: string;
  className?: string;
};

const spacing = {
  default: "py-section",
  sm: "py-section-sm",
  none: "",
} as const;

/** Vertical rhythm + surface tone. Pair with <Container> for the measure. */
export function Section({
  children,
  tone = "dark",
  space = "default",
  as: Tag = "section",
  id,
  className,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        spacing[space],
        tone === "light" && "surface-light",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
