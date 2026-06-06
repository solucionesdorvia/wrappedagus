import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide11 } from "@/lib/data";

export function Slide11Viernes() {
  return (
    <Slide id="slide-11" bg="bg-pink-200 text-rose-900">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-rose-900/80"
      >
        {slide11.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-6 font-serif italic text-[22vw] sm:text-[12rem] leading-[0.85]"
      >
        {slide11.day}
      </Reveal>

      <Reveal
        as="p"
        delay={400}
        className="mt-6 font-display font-semibold text-2xl sm:text-3xl text-balance max-w-md"
      >
        {slide11.tag} 🏝
      </Reveal>
    </Slide>
  );
}
