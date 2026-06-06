"use client";

import { useEffect, useState } from "react";

/**
 * Pista visual sutil en el slide 1 que indica "tap para avanzar".
 * Desaparece apenas el usuario hace su primera interacción (tap, scroll o
 * tecla). Solo aparece después de unos segundos para no competir con la
 * animación de entrada del splash.
 */
export function TapHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // mostrar después de 2.5s para no pelearse con el fade-in del splash
    const show = setTimeout(() => setVisible(true), 2500);

    const hide = () => {
      setVisible(false);
      window.removeEventListener("click", hide);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("keydown", hide);
      window.removeEventListener("touchstart", hide);
    };
    window.addEventListener("click", hide, { once: true });
    window.addEventListener("scroll", hide, { once: true, passive: true });
    window.addEventListener("keydown", hide, { once: true });
    window.addEventListener("touchstart", hide, { once: true, passive: true });

    return () => {
      clearTimeout(show);
      window.removeEventListener("click", hide);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("keydown", hide);
      window.removeEventListener("touchstart", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      data-no-tap-nav
      className="pointer-events-none fixed bottom-8 right-6 z-40 flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase font-bold"
      style={{ animation: "wrap-fade-in 0.6s ease forwards" }}
    >
      <span>tocá</span>
      <span style={{ animation: "wrap-pulse-x 1.4s ease-in-out infinite" }}>→</span>
    </div>
  );
}
