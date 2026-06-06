import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide05 } from "@/lib/data";

export function Slide05MenosEstudiada() {
  return (
    <Slide id="slide-05" bg="bg-orange-500 text-white">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/85"
      >
        {slide05.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-6 font-display font-black text-[19vw] sm:text-[10rem] leading-[0.88] text-stroke"
      >
        {slide05.subject}
      </Reveal>

      <Reveal
        as="div"
        delay={400}
        className="mt-6 inline-flex items-center gap-3 bg-white text-orange-600 px-5 py-2 rounded-full font-extrabold"
      >
        ⏱ {slide05.stat}
      </Reveal>

      <Reveal
        as="p"
        delay={600}
        className="mt-8 text-white/90 max-w-md text-lg italic"
      >
        “{slide05.tag}”
      </Reveal>
    </Slide>
  );
}
