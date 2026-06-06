"use client";

import { useEffect } from "react";

export function KeyboardNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section")
      );
      if (sections.length === 0) return;
      const y = window.scrollY + window.innerHeight / 2;
      const currentIdx = sections.findIndex((s) => {
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        return y >= top && y < bottom;
      });
      const idx = currentIdx === -1 ? 0 : currentIdx;
      const next =
        e.key === "ArrowDown"
          ? Math.min(sections.length - 1, idx + 1)
          : Math.max(0, idx - 1);
      if (next !== idx) {
        e.preventDefault();
        sections[next].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
