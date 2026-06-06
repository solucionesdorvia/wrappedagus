"use client";

import { useDeck } from "./Deck";

export function ProgressIndicator() {
  const { index, total } = useDeck();

  return (
    <div className="pointer-events-none fixed top-3 left-0 right-0 z-50 px-3 flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-[3px] flex-1 rounded-full transition-colors duration-300 ${
            i <= index ? "bg-white" : "bg-white/25"
          }`}
        />
      ))}
    </div>
  );
}
