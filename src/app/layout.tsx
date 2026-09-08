import type { Metadata } from "next";
import "./globals.css";

/**
 * Minimal root layout. The live site is the static export served from
 * public/site/ via the rewrites in next.config.ts, so this React tree only
 * needs to satisfy the build for the (never-served) "/" App Router route.
 */
export const metadata: Metadata = {
  title: "AIOS Labs",
  description: "Digital Marketing & Performance Agency in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
