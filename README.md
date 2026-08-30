# AIOS Labs

**Digital Growth, Engineered.**

The AIOS Labs website — a Next.js App Router project in TypeScript, styled with
Tailwind CSS v4 and animated with GSAP.

## Requirements

- Node.js 20.9 or newer (Next.js 16 minimum; CI and Vercel default to Node 22)

## Getting started

```bash
npm install
npm run dev      # development server on http://localhost:3000
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have. Every variable is
read **server-side only** — none is exposed to the browser, and none has a
default baked into the source.

| Variable | Required | Purpose |
| --- | --- | --- |
| `CONTACT_WEBHOOK_URL` | To receive inquiries | Endpoint the contact form POSTs JSON to. Any URL that accepts a JSON body works — a CRM intake URL, an automation webhook, or your own mail service. |
| `CONTACT_WEBHOOK_TOKEN` | Optional | Sent as `Authorization: Bearer <token>` when present. |

**Until `CONTACT_WEBHOOK_URL` is set, the site cannot receive an inquiry.**
`/api/contact` still validates every submission, then responds `503` with
`{ ok: false, reason: "not-configured" }`, and the form tells the visitor
plainly that nothing was sent rather than reporting a success that did not
happen. Setting the variable switches delivery on with no code change.

Never commit real values. `.gitignore` excludes `.env`, `.env.local` and
`.env.*.local`; only `.env.example`, which holds names and no values, is
tracked.

## Project structure

```
src/app/          Routes, route metadata, sitemap.ts, robots.ts, icon.svg,
                  opengraph-image.tsx, not-found.tsx, api/contact
src/components/   UI primitives, layout, motion, and per-section components
src/content/      All page copy, typed. Placeholder states live here.
src/lib/          Site constants, design tokens in code, indexing rules,
                  metadata helpers, GSAP setup, validation
```

Two files are worth knowing before making changes:

- **`src/lib/site.ts`** — site URL, navigation, and the contact channels.
  Unverified details are `null` on purpose and render as visible pending
  states. Filling one in is a content change, not a code change.
- **`src/lib/indexing.ts`** — the single source of truth for which routes are
  indexable. Both the page `robots` directives and `sitemap.ts` read it, so the
  two can never disagree. Indexability is derived from the content models:
  publishing a case study or naming the founder makes that page indexable and
  adds it to the sitemap automatically.

## Design system

`DESIGN.md` documents every colour, type size, spacing step and easing the site
is allowed to use. `/style-guide` is the live reference (noindex).

## Deployment

Standard Next.js deployment on Vercel — no `vercel.json` and no custom build
configuration. Vercel detects the framework, runs `next build`, serves every
route as static or prerendered output, and runs `/api/contact` as the single
serverless function.

Set `CONTACT_WEBHOOK_URL` (and optionally `CONTACT_WEBHOOK_TOKEN`) in the
Vercel project's environment variables.

The canonical production URL is `https://aioslabs.in`, set in `src/lib/site.ts`
and used for canonicals, Open Graph URLs, `robots.txt` and the sitemap. It is
deliberately independent of whichever deployment URL Vercel serves, so a
preview or `.vercel.app` deployment never advertises itself as the canonical
site.
