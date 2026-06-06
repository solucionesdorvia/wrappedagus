import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide04 } from "@/lib/data";

export function Slide04MasEstudiada() {
  return (
    <Slide id="slide-04" bg="bg-lime-300 text-black">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-black/80"
      >
        {slide04.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-6 font-display font-black text-[18vw] sm:text-[9rem] leading-[0.88]"
      >
        {slide04.subject}
      </Reveal>

      <Reveal
        as="div"
        delay={400}
        className="mt-8 inline-flex items-center gap-3 bg-black text-lime-300 px-5 py-2 rounded-full font-bold"
      >
        <span className="text-2xl">↻</span> {slide04.stat}
      </Reveal>

      <Reveal as="p" delay={600} className="mt-8 text-black/75 max-w-md text-lg">
        {slide04.tag}
      </Reveal>
    </Slide>
  );
}
