"use client";

import { useEffect } from "react";
import {
  getCurrentSlideIndex,
  getSections,
  smoothScrollToSection,
} from "@/lib/scroll";

export function KeyboardNav() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isNext =
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "Enter";
      const isPrev = e.key === "ArrowUp" || e.key === "ArrowLeft";
      if (!isNext && !isPrev) return;

      const sections = getSections();
      const currentIdx = getCurrentSlideIndex();
      if (currentIdx === -1) return;

      const targetIdx = isNext
        ? Math.min(sections.length - 1, currentIdx + 1)
        : Math.max(0, currentIdx - 1);

      if (targetIdx !== currentIdx) {
        e.preventDefault();
        smoothScrollToSection(sections[targetIdx]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
