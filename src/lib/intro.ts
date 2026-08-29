/**
 * Intro session state.
 *
 * The single source of truth is the `data-intro` attribute set on <html> by a
 * pre-paint script in the root layout. Reading the attribute rather than
 * sessionStorage directly keeps the server HTML, the CSS that reveals the
 * overlay, and this module from ever disagreeing.
 */

export const INTRO_SESSION_KEY = "aios:intro-played";

/** Runs before first paint — keep it in sync with the script in layout.tsx. */
export function shouldPlayIntro(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.intro === "play";
}

export function markIntroPlayed(): void {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
  } catch {
    // Private modes and storage-blocked contexts: the intro simply replays.
  }
  // The `data-intro` attribute is deliberately left in place. It is read as an
  // external store snapshot during this page's life, and a snapshot that
  // changed underneath React would tear.
}

/** Seconds the hero waits after the overlay starts clearing, so the two cross-fade. */
export const HERO_HANDOFF_DELAY = 0.12;
