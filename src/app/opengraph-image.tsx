import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Site-wide social card. Built with Next's own ImageResponse — no new
 * dependency and no external asset — using the brand's colour tokens so a
 * shared link carries the same surface as the site.
 *
 * Individual pages inherit this unless they define their own.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0C",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#F4C542",
            }}
          />
          <div
            style={{
              color: "#71716F",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 148,
              fontWeight: 600,
              letterSpacing: -6,
            }}
          >
            <span style={{ color: "#F5F4F0" }}>AIOS</span>
            <span style={{ color: "#A3A3A0", marginLeft: 28 }}>LABS</span>
          </div>
          <div style={{ color: "#A3A3A0", fontSize: 34, maxWidth: 820 }}>
            Strategy, performance, technology and creative working together to
            turn digital presence into measurable growth.
          </div>
        </div>

        <div style={{ display: "flex", height: 6, background: "#F4C542", width: 160 }} />
      </div>
    ),
    size,
  );
}
