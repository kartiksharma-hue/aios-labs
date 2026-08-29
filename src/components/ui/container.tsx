import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const widths = {
  page: "max-w-page",
  content: "max-w-content",
  narrow: "max-w-narrow",
  prose: "max-w-prose",
} as const;

export type ContainerWidth = keyof typeof widths;

type ContainerProps = {
  children: ReactNode;
  /** `content` (1280px) is the default measure for almost every section. */
  width?: ContainerWidth;
  as?: ElementType;
  className?: string;
};

/** Horizontal measure + responsive gutters. The only place page padding lives. */
export function Container({
  children,
  width = "content",
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-gutter", widths[width], className)}>
      {children}
    </Tag>
  );
}
