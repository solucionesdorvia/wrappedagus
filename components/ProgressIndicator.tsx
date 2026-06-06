"use client";

import { useEffect, useState } from "react";

type Props = { count: number };

export function ProgressIndicator({ count }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.indexOf(e.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.55 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed top-3 left-0 right-0 z-50 px-3 flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${
            i <= active ? "bg-white" : "bg-white/25"
          }`}
        />
      ))}
    </div>
  );
}
