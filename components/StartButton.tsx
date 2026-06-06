"use client";

import { ReactNode } from "react";
import { smoothScrollToSection } from "@/lib/scroll";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Botón "Empezá tu Wrapped" del slide 1. Hace 2 cosas en el mismo tap:
 *  1. Dispara play() en el audio global (id="wrapped-audio"). Este es el
 *     "user gesture" que los browsers exigen para permitir el sonido.
 *  2. Anima el scroll al slide siguiente con el easing custom (más snappy
 *     que la navegación nativa por hash).
 */
export function StartButton({ href, children, className = "", style }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const audio = document.getElementById("wrapped-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.play().catch(() => {
        // si falla (autoplay policy estricta), el usuario tendrá el botón
        // flotante para reintentar
      });
    }

    // Animación custom en vez de dejar al browser hacer el hash-nav
    const targetId = href.startsWith("#") ? href.slice(1) : null;
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        smoothScrollToSection(target, 450);
      }
    }
  };

  return (
    <a href={href} onClick={onClick} className={className} style={style}>
      {children}
    </a>
  );
}
