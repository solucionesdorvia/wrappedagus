"use client";

import { useState } from "react";

type Props = { text: string; className?: string };

export function ShareButton({ text, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    // share API si está disponible (mobile), si no copiar al clipboard
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({ text, title: "Medical Wrapped 2026" });
        return;
      } catch {
        // cancelado, seguimos al copy fallback
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // sin clipboard, mostramos el texto en un prompt
      window.prompt("Copiá el mensaje:", text);
    }
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-white text-black px-6 py-3 font-bold tracking-tight hover:scale-105 active:scale-95 transition ${className}`}
    >
      {copied ? "¡Copiado!" : "Compartir"}
    </button>
  );
}
