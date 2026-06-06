"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  Children,
  MouseEvent,
  TouchEvent,
} from "react";

import { meta } from "@/lib/data";
import { ProgressIndicator } from "./ProgressIndicator";
import { TapHint } from "./TapHint";
import { AudioButton } from "./AudioButton";

type DeckCtx = {
  index: number;
  total: number;
  next: () => void;
  prev: () => void;
  go: (n: number) => void;
};

const DeckContext = createContext<DeckCtx | null>(null);

export function useDeck() {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck must be used inside a <Deck>");
  return ctx;
}

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [data-no-tap-nav]";

/**
 * Sistema de slides estilo Spotify Wrapped:
 *   - Nada de scroll: todas las slides están renderizadas y apiladas, y
 *     el contenedor entero se mueve con `transform: translateY()`.
 *   - Transición de 60fps (es solo un transform, va al GPU).
 *   - Tap mitad derecha → siguiente; mitad izquierda → anterior.
 *   - Swipe vertical rápido → siguiente/anterior.
 *   - Teclado: flechas / espacio / enter.
 *   - El audio button es parte del deck para que aparezca arriba de todo.
 */
export function Deck({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((curr) => Math.min(total - 1, curr + 1));
  }, [total]);

  const prev = useCallback(() => {
    setIndex((curr) => Math.max(0, curr - 1));
  }, []);

  const go = useCallback(
    (n: number) => {
      setIndex(Math.max(0, Math.min(total - 1, n)));
    },
    [total]
  );

  // Al refrescar, siempre empezar en slide 0 (no respetar hash ni posición)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  // ----- TECLADO -----
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.matches("input, textarea, [contenteditable='true']")) return;

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight" ||
        e.key === " " ||
        e.key === "Enter" ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        next();
      } else if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // ----- TAP (mouse + tap táctil que el browser convierte a click) -----
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest(INTERACTIVE_SELECTOR)) return;
    if (e.clientX > window.innerWidth / 2) next();
    else prev();
  };

  // ----- SWIPE VERTICAL -----
  const touchRef = useRef({ y: 0, x: 0, t: 0, onInteractive: false });

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    const target = e.target as HTMLElement | null;
    touchRef.current = {
      y: t.clientY,
      x: t.clientX,
      t: performance.now(),
      onInteractive: !!target?.closest(INTERACTIVE_SELECTOR),
    };
  };

  const onTouchEnd = (e: TouchEvent) => {
    const start = touchRef.current;
    if (start.onInteractive) return;
    const t = e.changedTouches[0];
    const dy = t.clientY - start.y;
    const dx = t.clientX - start.x;
    const dt = performance.now() - start.t;
    // Sólo swipe vertical rápido cuenta como gesto. Tap suelto cae en onClick.
    if (dt < 500 && Math.abs(dy) > 50 && Math.abs(dy) > Math.abs(dx)) {
      if (dy < 0) next();
      else prev();
    }
  };

  return (
    <DeckContext.Provider value={{ index, total, next, prev, go }}>
      <ProgressIndicator />
      <TapHint />
      <AudioButton src={meta.song.src} />

      <main
        className="fixed inset-0 overflow-hidden bg-black"
        onClick={onClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute inset-x-0 top-0 will-change-transform"
          style={{
            height: `${total * 100}svh`,
            transform: `translate3d(0, -${index * 100}svh, 0)`,
            transition: "transform 480ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {children}
        </div>
      </main>
    </DeckContext.Provider>
  );
}
