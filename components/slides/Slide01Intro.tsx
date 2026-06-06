import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { StartButton } from "@/components/StartButton";
import { slide01 } from "@/lib/data";

export function Slide01Intro() {
  return (
    <Slide
      id="slide-01"
      bg="bg-gradient-to-br from-fuchsia-600 via-violet-700 to-indigo-900"
    >
      <div className="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full bg-pink-400/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[55vw] h-[55vw] rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />

      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/80"
      >
        {slide01.kicker}
      </Reveal>

      <Reveal
        as="h1"
        delay={150}
        className="mt-6 font-serif italic text-[18vw] sm:text-[10rem] leading-[0.9] text-white"
      >
        {slide01.title}
      </Reveal>

      <Reveal
        as="h2"
        delay={300}
        className="font-display font-extrabold text-[10vw] sm:text-7xl leading-[0.95] text-white -mt-2"
      >
        {slide01.titleAlt}
      </Reveal>

      <Reveal
        as="p"
        delay={500}
        className="mt-6 text-white/80 text-base sm:text-lg"
      >
        Medical Wrapped {slide01.year}
      </Reveal>

      <Reveal as="div" delay={650} className="mt-10 inline-block">
        <StartButton
          href="#slide-02"
          className="inline-block rounded-full bg-white text-black px-7 py-3 font-bold hover:scale-105 active:scale-95 transition"
        >
          {slide01.cta} →
        </StartButton>
      </Reveal>
    </Slide>
  );
}
