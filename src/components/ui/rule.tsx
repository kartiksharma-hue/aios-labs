import { cn } from "@/lib/cn";

/** Full-bleed hairline. The primary structural device of the layout. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn("h-px w-full border-0 bg-line", className)} />;
}
