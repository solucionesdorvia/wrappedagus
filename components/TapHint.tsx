"use client";

import { useEffect, useState } from "react";
import { useDeck } from "./Deck";

/**
 * Pista visual sutil en el slide 0 que indica "tap para avanzar".
 * Solo aparece en el splash y desaparece apenas se avanza por primera vez.
 */
export function TapHint() {
  const { index } = useDeck();
  const [delayedShow, setDelayedShow] = useState(false);

  useEffect(() => {
    if (index !== 0) {
      setDelayedShow(false);
      return;
    }
    // Esperamos 2.5s en el splash antes de mostrarlo para no pelear con
    // la animación de entrada
    const t = setTimeout(() => setDelayedShow(true), 2500);
    return () => clearTimeout(t);
  }, [index]);

  if (index !== 0 || !delayedShow) return null;

  return (
    <div
      data-no-tap-nav
      className="pointer-events-none fixed bottom-8 right-6 z-40 flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase font-bold"
      style={{ animation: "wrap-fade-in 0.6s ease forwards" }}
    >
      <span>tocá</span>
      <span style={{ animation: "wrap-pulse-x 1.4s ease-in-out infinite" }}>
        →
      </span>
    </div>
  );
}
