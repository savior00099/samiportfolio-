"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ── types ───────────────────────────────────────────────────── */

export type ArcRevealGreeting = {
  /** Greeting text in the target script */
  text: string;
  /** Optional `lang` attribute applied to the span (helps screen readers / font rendering) */
  lang?: string;
};

export interface ArcRevealHeroProps {
  /** Greetings cycled before the arc reveal. */
  greetings?: ArcRevealGreeting[];
  /** How long each greeting is held on screen (ms). */
  greetingHold?: number;
  /** Duration of the curved curtain reveal (ms). */
  revealDuration?: number;
  /** Outer wrapper class. */
  className?: string;
  /** Class for the intro (pre-reveal) overlay surface. */
  introClassName?: string;
  /** Class for the cycled greeting `<span>`. */
  greetingClassName?: string;
  /** Class for the wrapper around `children` (the revealed content). */
  revealClassName?: string;
  /**
   * Optional `sessionStorage` key — when set, the intro plays only once per
   * session for the same key. Leave unset to replay on every mount.
   */
  storageKey?: string;
  /** Content shown after the curtain reveal (the "landing"). */
  children?: React.ReactNode;
}

/* ── defaults ────────────────────────────────────────────────── */

const DEFAULT_GREETINGS: ArcRevealGreeting[] = [
  { text: "Quiet." },
  { text: "Sharp." },
  { text: "Calm." },
  { text: "Crafted." },
  { text: "Considered." },
  { text: "Composed." },
  { text: "Honest." },
  { text: "Ready." },
];

type Phase = "intro" | "reveal" | "done";

/* ── component ───────────────────────────────────────────────── */

export function ArcRevealHero({
  greetings = DEFAULT_GREETINGS,
  greetingHold = 620,
  revealDuration = 1500,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  storageKey,
  children,
}: ArcRevealHeroProps) {
  /* Check reduced motion preference manually (avoids SSR issues) */
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [index, setIndex] = React.useState(0);

  // Drive the arc shape from a single 0→1 progress.
  const progress = useMotionValue(0);
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140;
    const control = edge + 25;
    return `M 0 ${edge} Q 50 ${control} 100 ${edge} L 100 110 L 0 110 Z`;
  });

  // Check reduced motion on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setPrefersReducedMotion(true);
        setPhase("done");
      }
    }
  }, []);

  // Greeting cycle.
  React.useEffect(() => {
    if (phase !== "intro" || prefersReducedMotion) return;
    const isLast = index >= greetings.length - 1;
    if (isLast) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 220);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length, prefersReducedMotion]);

  // Drive the curtain reveal.
  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => {
        // Temporarily disabled for testing:
        // if (storageKey && typeof window !== "undefined") {
        //   try {
        //     window.sessionStorage.setItem(storageKey, "done");
        //   } catch {
        //     /* ignore */
        //   }
        // }
        setPhase("done");
      },
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];

  return (
    <div className={cn("relative", className)}>
      {/* Page content — always rendered underneath */}
      <div className={cn("relative z-0", revealClassName)}>{children}</div>

      {/* Full-screen overlay — fixed to viewport */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="arc-reveal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "fixed inset-0 z-[9999] overflow-hidden",
              introClassName,
            )}
            style={{ backgroundColor: "hsl(var(--foreground))" }}
          >
            {/* Cycled greeting */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "select-none px-6 text-center text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl",
                      greetingClassName,
                    )}
                    style={{ color: "hsl(var(--background))" }}
                  >
                    {current.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Rising curved curtain — reveals background color */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d={arcPath}
                style={{ fill: "hsl(var(--background))" }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ArcRevealHero;
