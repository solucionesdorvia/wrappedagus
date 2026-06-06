"use client";

import { ReactNode } from "react";
import { useDeck } from "./Deck";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Botón "Volver a ver" del cierre. Vuelve al slide 1 vía deck context.
 */
export function RestartButton({ children, className = "" }: Props) {
  const { go } = useDeck();

  return (
    <button type="button" onClick={() => go(0)} className={className}>
      {children}
    </button>
  );
}
