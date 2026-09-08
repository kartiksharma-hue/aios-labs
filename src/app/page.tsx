/**
 * The site root is served from public/site/index.html through the beforeFiles
 * rewrite in next.config.ts, so this component is never actually rendered. It
 * exists only so the App Router has a "/" route for the build.
 */
export default function Page() {
  return null;
}
