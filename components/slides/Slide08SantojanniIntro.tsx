import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide08 } from "@/lib/data";

export function Slide08SantojanniIntro() {
  return (
    <Slide
      id="slide-08"
      bg="bg-gradient-to-b from-sky-500 via-blue-700 to-indigo-900 text-white"
    >
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/80"
      >
        {slide08.kicker}
      </Reveal>

      <Reveal
        as="h2"
        delay={250}
        className="mt-6 font-serif italic text-5xl sm:text-7xl leading-[0.95]"
      >
        {slide08.title}
      </Reveal>

      <Reveal
        as="h1"
        delay={450}
        className="mt-1 font-display font-black text-[15vw] sm:text-[10rem] leading-[0.85] text-balance"
        style={{ transform: "rotate(-2deg)" }}
      >
        {slide08.titleHighlight}
      </Reveal>
    </Slide>
  );
}
