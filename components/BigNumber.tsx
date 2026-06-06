"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
  startDelay?: number;
};

const defaultFormat = (n: number) =>
  new Intl.NumberFormat("es-AR").format(Math.floor(n));

export function BigNumber({
  value,
  duration = 1.8,
  className = "",
  format = defaultFormat,
  startDelay = 300,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setStarted(true);
    };

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            trigger();
            io?.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      io.observe(el);
    } catch {
      // sin IntersectionObserver — el fallback abajo arranca igual
    }

    const t = setTimeout(trigger, startDelay);
    return () => {
      io?.disconnect();
      clearTimeout(t);
    };
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const to = value;
    const ms = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <span ref={ref} className={`tabular-nums leading-none anim-scale-in ${className}`}>
      {format(display)}
    </span>
  );
}
