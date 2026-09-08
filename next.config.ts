import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The site root serves the MADDEX Media homepage, kept as a self-contained
   * static document at public/maddex-media/index.html. A `beforeFiles` rewrite
   * runs ahead of filesystem routing, so "/" resolves to that static file
   * instead of the App Router's own page.
   */
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/maddex-media/index.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
