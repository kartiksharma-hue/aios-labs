import type { NextConfig } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

/**
 * The live site is a static, rebranded mirror living under public/site/.
 * We derive one route per index.html found there and rewrite the clean URL
 * (e.g. /services/seo/) to its static file. `beforeFiles` runs ahead of the
 * App Router, so these win over any framework route.
 */
function collectRoutes(dir: string, base = ""): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...collectRoutes(full, `${base}/${entry}`));
    } else if (entry === "index.html") {
      out.push(base || "/");
    }
  }
  return out;
}

const SITE_DIR = join(process.cwd(), "public", "site");
const routes = collectRoutes(SITE_DIR);

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    const rules = routes.flatMap((route) => {
      const dest =
        route === "/" ? "/site/index.html" : `/site${route}/index.html`;
      const clean = route === "/" ? "/" : route;
      return [
        { source: clean, destination: dest },
        { source: `${clean === "/" ? "" : clean}/`, destination: dest },
      ];
    });
    return { beforeFiles: rules, afterFiles: [], fallback: [] };
  },
};

export default nextConfig;
