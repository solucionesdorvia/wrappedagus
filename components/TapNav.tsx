"use client";

import { useEffect } from "react";
import {
  getCurrentSlideIndex,
  getSections,
  smoothScrollToSection,
} from "@/lib/scroll";

/**
 * Navegación estilo Spotify Wrapped:
 *   - Tap en la mitad derecha → siguiente slide
 *   - Tap en la mitad izquierda → slide anterior
 *   - Swipe vertical hacia arriba (>50px en <400ms) → siguiente slide
 *   - Swipe vertical hacia abajo (>50px en <400ms) → slide anterior
 *
 * Ignora taps sobre elementos interactivos. El scroll natural con el dedo
 * sigue funcionando si el gesto no califica como swipe rápido.
 */
export function TapNav() {
  useEffect(() => {
    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      return !!target.closest(
        "a, button, input, textarea, select, [data-no-tap-nav]"
      );
    };

    const goRelative = (delta: number) => {
      const sections = getSections();
      const currentIdx = getCurrentSlideIndex();
      if (currentIdx === -1) return;
      const targetIdx = Math.max(
        0,
        Math.min(sections.length - 1, currentIdx + delta)
      );
      if (targetIdx !== currentIdx) {
        smoothScrollToSection(sections[targetIdx]);
      }
    };

    // CLICKS (mouse desktop + tap mobile)
    const onClick = (e: MouseEvent) => {
      if (isInteractive(e.target)) return;
      const isRight = e.clientX > window.innerWidth / 2;
      goRelative(isRight ? 1 : -1);
    };

    // SWIPES verticales en mobile
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;
    let touchWasOnInteractive = false;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      touchStartY = t.clientY;
      touchStartX = t.clientX;
      touchStartTime = performance.now();
      touchWasOnInteractive = isInteractive(e.target);
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchWasOnInteractive) return;
      const t = e.changedTouches[0];
      const deltaY = t.clientY - touchStartY;
      const deltaX = t.clientX - touchStartX;
      const duration = performance.now() - touchStartTime;

      // Solo cuenta como swipe si fue rápido y predominantemente vertical
      const isQuick = duration < 400;
      const isVertical = Math.abs(deltaY) > Math.abs(deltaX);
      const isLongEnough = Math.abs(deltaY) > 50;

      if (isQuick && isVertical && isLongEnough) {
        e.preventDefault();
        // swipe arriba (deltaY negativo) → siguiente
        goRelative(deltaY < 0 ? 1 : -1);
      }
    };

    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return null;
}
