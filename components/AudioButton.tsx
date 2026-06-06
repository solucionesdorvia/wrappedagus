"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src?: string };

export function AudioButton({ src }: Props) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = 0.4;
  }, []);

  // Sincronizar estado con el elemento de audio (para que respete play/pause
  // disparados desde otros lados, por ej el botón "Empezá tu Wrapped").
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onPlay = () => {
      setPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = async () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      try {
        await el.play();
      } catch {
        // autoplay bloqueado — el usuario debe tocar primero
      }
    }
  };

  if (!src) return null;

  return (
    <>
      <audio id="wrapped-audio" ref={ref} src={src} loop preload="auto" />
      {/* El botón solo aparece después de que arrancó la música, para no romper
          el splash con un botón flotante. Una vez sonando, queda visible para
          poder pausar / reanudar. */}
      {hasStarted && (
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar música" : "Reproducir música"}
          className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-white text-black grid place-items-center shadow-lg hover:scale-110 active:scale-95 transition"
        >
          {playing ? (
            <span className="flex gap-[3px]">
              <span className="block w-[3px] h-4 bg-black" />
              <span className="block w-[3px] h-4 bg-black" />
            </span>
          ) : (
            <span className="block w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-black ml-[3px]" />
          )}
        </button>
      )}
    </>
  );
}
