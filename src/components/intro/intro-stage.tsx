"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Hero } from "@/components/home/hero";
import { TaxiIntro } from "@/components/intro/taxi-intro";
import { HERO_HANDOFF_DELAY, markIntroPlayed, shouldPlayIntro } from "@/lib/intro";

/**
 * Whether this session is still owed the intro.
 *
 * The server snapshot is `true`, so the overlay ships inside the server HTML
 * and the very first paint is already the dark screen — CSS keeps it hidden
 * unless the pre-paint script flagged the session, so a repeat visitor never
 * sees it. Rendering it only after hydration would flash the home page first.
 *
 * The value is fixed for the life of the page, so the store never notifies.
 */
const NO_OP_SUBSCRIBE = () => () => {};

function useIntroPending(): boolean {
  return useSyncExternalStore(NO_OP_SUBSCRIBE, shouldPlayIntro, () => true);
}

type IntroStageProps = {
  /** The rest of the home page. The hero is rendered here, not in page.tsx,
   *  because the intro hands the screen over to its entrance. */
  children: ReactNode;
};

export function IntroStage({ children }: IntroStageProps) {
  const introPending = useIntroPending();
  const pageRef = useRef<HTMLDivElement>(null);

  /** `null` until the intro reports in; then it owns the status. */
  const [exit, setExit] = useState<"clearing" | "done" | null>(null);

  // Remounting the hero replays its entrance. That is the whole handoff — the
  // hero animates once, as the overlay clears, instead of invisibly behind it.
  const [heroRun, setHeroRun] = useState(0);

  const status = exit ?? (introPending ? "playing" : "done");
  const covering = status === "playing" || status === "clearing";

  const handleHandoff = useCallback(() => {
    markIntroPlayed();
    setHeroRun((run) => run + 1);
    setExit("clearing");
  }, []);

  const handleFinish = useCallback(() => setExit("done"), []);

  // Hold the page still and take everything behind the overlay out of the tab
  // order. Applied imperatively rather than as JSX: `inert` in the server HTML
  // would leave the page uninteractive for anyone whose JavaScript never runs.
  useEffect(() => {
    if (!covering || !shouldPlayIntro()) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // The header, footer and skip link live outside this subtree.
    const blocked = Array.from(document.body.children).filter(
      (el): el is HTMLElement =>
        el instanceof HTMLElement && el.tagName !== "MAIN",
    );
    if (pageRef.current) blocked.push(pageRef.current);
    blocked.forEach((el) => el.setAttribute("inert", ""));

    return () => {
      document.body.style.overflow = previousOverflow;
      blocked.forEach((el) => el.removeAttribute("inert"));
    };
  }, [covering]);

  return (
    <>
      {status !== "done" ? (
        <TaxiIntro onHandoff={handleHandoff} onFinish={handleFinish} />
      ) : null}

      <div ref={pageRef}>
        <div key={heroRun}>
          <Hero startDelay={heroRun === 0 ? 0 : HERO_HANDOFF_DELAY} />
        </div>
        {children}
      </div>
    </>
  );
}
