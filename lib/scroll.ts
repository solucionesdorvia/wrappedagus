/**
 * Animación de scroll custom usando requestAnimationFrame.
 *
 * Más rápida y suave que `scrollIntoView({behavior:"smooth"})` (que en algunos
 * browsers dura 500ms+). Acá controlamos timing y easing nosotros.
 *
 * Una sola animación puede estar en curso por vez — si se llama de nuevo,
 * cancela la anterior.
 */

let activeRaf: number | null = null;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function smoothScrollToY(targetY: number, duration = 320): Promise<void> {
  if (activeRaf !== null) {
    cancelAnimationFrame(activeRaf);
    activeRaf = null;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;

  // Para distancias muy chicas no vale la pena animar
  if (Math.abs(distance) < 1) {
    return Promise.resolve();
  }

  const startTime = performance.now();

  return new Promise<void>((resolve) => {
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeOutCubic(progress));
      if (progress < 1) {
        activeRaf = requestAnimationFrame(tick);
      } else {
        activeRaf = null;
        resolve();
      }
    };
    activeRaf = requestAnimationFrame(tick);
  });
}

export function smoothScrollToSection(
  target: HTMLElement,
  duration = 320
): Promise<void> {
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  return smoothScrollToY(targetY, duration);
}

/**
 * Devuelve el índice del slide cuyo medio coincide con el centro del viewport.
 * Útil para saber "dónde estamos" antes de avanzar/retroceder.
 */
export function getCurrentSlideIndex(): number {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main > section")
  );
  if (sections.length === 0) return -1;
  const mid = window.innerHeight / 2;
  return sections.findIndex((s) => {
    const r = s.getBoundingClientRect();
    return r.top <= mid && r.bottom > mid;
  });
}

export function getSections(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>("main > section"));
}
