"use client";

import { ReactNode } from "react";

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
 *  2. Navega al slide-02 vía hash.
 */
export function StartButton({ href, children, className = "", style }: Props) {
  const onClick = () => {
    const audio = document.getElementById("wrapped-audio") as HTMLAudioElement | null;
    if (audio) {
      audio.play().catch(() => {
        // si falla (autoplay policy estricta), el usuario tendrá el botón
        // flotante para reintentar
      });
    }
    // dejamos que el browser navegue normalmente al hash; no preventDefault
  };

  return (
    <a href={href} onClick={onClick} className={className} style={style}>
      {children}
    </a>
  );
}
