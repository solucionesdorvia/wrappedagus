"use client";

import { useEffect, useRef } from "react";

export function ConfettiBurst() {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      async (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !fired.current) {
          fired.current = true;
          const confetti = (await import("canvas-confetti")).default;
          const end = Date.now() + 1400;
          const colors = ["#ff3da5", "#ffd400", "#9b5cff", "#22d3a5", "#ff9100"];
          (function frame() {
            confetti({
              particleCount: 4,
              angle: 60,
              spread: 70,
              origin: { x: 0, y: 0.7 },
              colors,
            });
            confetti({
              particleCount: 4,
              angle: 120,
              spread: 70,
              origin: { x: 1, y: 0.7 },
              colors,
            });
            if (Date.now() < end) requestAnimationFrame(frame);
          })();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none" />;
}
