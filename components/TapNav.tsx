"use client";

import { useEffect } from "react";

/**
 * Navegación estilo Spotify Wrapped:
 *   - Tap en la mitad derecha de la pantalla → siguiente slide
 *   - Tap en la mitad izquierda de la pantalla → slide anterior
 *
 * Ignora taps sobre elementos interactivos (botones, links, audio button,
 * inputs) para no romper la UX. El scroll natural con el dedo sigue
 * funcionando en paralelo.
 */
export function TapNav() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // No interferir con elementos interactivos (botón "Empezá", Volver a ver,
      // Compartir, el botón flotante de audio, etc.)
      if (target.closest("a, button, input, textarea, select, [data-no-tap-nav]")) {
        return;
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main > section")
      );
      if (sections.length === 0) return;

      // Slide actualmente visible (el que cruza el medio del viewport)
      const viewportMid = window.innerHeight / 2;
      const currentIdx = sections.findIndex((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= viewportMid && r.bottom > viewportMid;
      });
      if (currentIdx === -1) return;

      // Mitad derecha → siguiente, mitad izquierda → anterior
      const isRight = e.clientX > window.innerWidth / 2;
      const targetIdx = isRight
        ? Math.min(sections.length - 1, currentIdx + 1)
        : Math.max(0, currentIdx - 1);

      if (targetIdx !== currentIdx) {
        sections[targetIdx].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return null;
}
