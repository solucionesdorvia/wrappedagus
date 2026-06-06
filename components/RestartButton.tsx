"use client";

import { ReactNode } from "react";
import { smoothScrollToY } from "@/lib/scroll";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Botón "Volver a ver" del cierre. Anima el scroll de vuelta al inicio
 * usando nuestra animación custom (más snappy que el hash-nav nativo).
 */
export function RestartButton({ children, className = "" }: Props) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollToY(0, 500);
  };

  return (
    <a href="#slide-01" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
