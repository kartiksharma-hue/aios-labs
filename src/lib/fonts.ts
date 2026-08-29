import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";

/**
 * Three families, deliberately:
 * - Inter Tight  — structure. Headlines and body, tight tracking at display sizes.
 * - Instrument Serif (italic) — the editorial voice. Accent words only.
 * - JetBrains Mono — the "engineered" register. Eyebrows, indices, metrics.
 */

export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = [
  interTight.variable,
  instrumentSerif.variable,
  jetbrainsMono.variable,
].join(" ");
