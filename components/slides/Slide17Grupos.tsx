import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { BigNumber } from "@/components/BigNumber";
import { slide17 } from "@/lib/data";

export function Slide17Grupos() {
  return (
    <Slide
      id="slide-17"
      bg="bg-gradient-to-br from-black via-stone-900 to-violet-950 text-white"
    >
      <div className="text-center">
        <Reveal
          as="p"
          delay={50}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/60"
        >
          {slide17.label}
        </Reveal>

        <Reveal
          as="p"
          delay={250}
          className="mt-6 font-serif italic text-2xl sm:text-3xl text-white/90"
        >
          {slide17.intro}
        </Reveal>

        <Reveal
          as="div"
          type="scale"
          delay={400}
          className="mt-2 inline-block"
        >
          <BigNumber
            value={slide17.count}
            duration={1.0}
            className="font-display font-black text-[40vw] sm:text-[16rem] leading-[0.85]"
          />
        </Reveal>

        <Reveal
          as="p"
          delay={650}
          className="mt-2 font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight"
        >
          {slide17.countLabel}
        </Reveal>

        <Reveal
          as="p"
          delay={850}
          className="mt-8 font-serif italic text-xl sm:text-2xl text-white/70"
        >
          {slide17.outro}
        </Reveal>
      </div>
    </Slide>
  );
}
