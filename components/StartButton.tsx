"use client";

import { ReactNode } from "react";
import { useDeck } from "./Deck";

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Botón "Empezá tu Wrapped" del slide 1. Hace 2 cosas en el mismo tap:
 *  1. Dispara play() en el audio global (id="wrapped-audio"). Este tap es el
 *     "user gesture" que los browsers exigen para permitir el sonido.
 *  2. Avanza al siguiente slide vía deck context (transición transform).
 */
export function StartButton({ children, className = "", style }: Props) {
  const { next } = useDeck();

  const onClick = () => {
    const audio = document.getElementById(
      "wrapped-audio"
    ) as HTMLAudioElement | null;
    if (audio) {
      audio.play().catch(() => {
        // si falla, el botón flotante queda disponible para reintentar
      });
    }
    next();
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
