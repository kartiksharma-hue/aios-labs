# MADDEX Media - static homepage replica

A faithful static copy of the homepage at https://maddexmedia.com/.

## What this is

- `index.html` - a self-contained static replica of the MADDEX Media homepage.
- The page markup was preserved from the site's own prerendered export, so the
  layout, sections, and copy match the original.
- Styling is rebuilt with Tailwind (loaded from the Tailwind Play CDN) plus the
  site's custom fonts (Kanit, Bebas Neue, Syne, Gochi Hand, Permanent Marker,
  Special Elite via Google Fonts) and its brand palette
  (`#070C18` / `#101D34` background, `#FAF6EE` text, `#DF9C2C` accent).

## How to view

Because this repo is a Next.js app, files under `public/` are served at the site
root. Run the app and open:

```
/maddex-media/
```

Or open `public/maddex-media/index.html` directly in a browser.

## Notes on assets

- Images and fonts load from the live `maddexmedia.com` origin (the companion
  assets folder was not included, so links point back to the source domain).
  They render when opened in a normal browser with internet access.
- The original React/framer-motion bundle and the Meta Pixel tracking script were
  intentionally removed. A small CSS rule reveals the final animated state of the
  prerendered content so nothing stays hidden without the JS.
- Third-party links (nav, case studies, social, booking) point at the original
  destinations on `maddexmedia.com` and partner sites.
