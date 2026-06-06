import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { BigNumber } from "@/components/BigNumber";
import { slide09 } from "@/lib/data";

export function Slide09Minutos() {
  return (
    <Slide id="slide-09" bg="bg-teal-400 text-black">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-black/80"
      >
        {slide09.label}
      </Reveal>

      <Reveal
        as="div"
        type="tilt"
        delay={250}
        className="mt-6"
      >
        <BigNumber
          value={slide09.number}
          duration={2.4}
          className="font-display font-black text-[19vw] sm:text-[13rem] leading-[0.82] block"
        />
      </Reveal>

      <Reveal
        as="p"
        delay={500}
        className="mt-2 font-display font-extrabold text-2xl sm:text-3xl uppercase"
      >
        {slide09.unit}
      </Reveal>

      <Reveal
        as="p"
        delay={650}
        className="mt-6 font-serif italic text-2xl sm:text-3xl text-black/75 max-w-md"
      >
        {slide09.tag}
      </Reveal>
    </Slide>
  );
}
