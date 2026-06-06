"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src?: string };

export function AudioButton({ src }: Props) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = 0.35;
  }, []);

  const toggle = async () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        // autoplay bloqueado o sin src
      }
    }
  };

  if (!src) return null;

  return (
    <>
      <audio ref={ref} src={src} loop preload="none" />
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
    </>
  );
}
