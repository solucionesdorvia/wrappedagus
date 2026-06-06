import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { BigNumber } from "@/components/BigNumber";
import { slide03 } from "@/lib/data";

export function Slide03Patologia() {
  return (
    <Slide id="slide-03" bg="bg-[#ff2d6f] text-white">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/80"
      >
        {slide03.label}
      </Reveal>

      <Reveal as="div" delay={200} className="mt-8">
        <BigNumber
          value={slide03.number}
          className="font-display font-black text-[22vw] sm:text-[12rem] leading-[0.85]"
        />
      </Reveal>

      <Reveal
        as="p"
        delay={500}
        className="mt-3 font-display text-xl sm:text-2xl font-semibold"
      >
        {slide03.unit}
      </Reveal>

      <Reveal
        as="p"
        delay={650}
        className="mt-1 font-serif italic text-4xl sm:text-6xl text-white"
      >
        {slide03.word}
      </Reveal>

      <Reveal as="p" delay={850} className="mt-8 text-white/85 max-w-md text-lg">
        {slide03.tag} {slide03.emoji}
      </Reveal>
    </Slide>
  );
}
