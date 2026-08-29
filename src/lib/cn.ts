/**
 * Minimal class-name joiner. Deliberately dependency-free — the component
 * variants in this project never emit conflicting Tailwind classes, so a
 * merge library (clsx + tailwind-merge) would be weight without a job.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
