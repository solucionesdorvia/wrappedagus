import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide02 } from "@/lib/data";

export function Slide02Welcome() {
  return (
    <Slide id="slide-02" bg="bg-yellow-300 text-black">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-black/80"
      >
        Bienvenida
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-6 font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] text-balance"
      >
        Hoy toca celebrar tus
      </Reveal>

      <Reveal
        as="div"
        delay={350}
        className="mt-3 font-serif italic text-[22vw] sm:text-[14rem] leading-[0.85]"
      >
        8 años
      </Reveal>

      <Reveal
        as="h3"
        delay={500}
        className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95]"
      >
        {slide02.line2}
      </Reveal>

      <Reveal as="p" delay={650} className="mt-8 text-black/70 max-w-md">
        {slide02.sub}
      </Reveal>
    </Slide>
  );
}
