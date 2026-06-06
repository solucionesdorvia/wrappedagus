import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide13 } from "@/lib/data";

export function Slide13Robo() {
  return (
    <Slide id="slide-13" bg="bg-stone-900 text-white">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 18px)",
        }}
      />

      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-amber-400"
      >
        {slide13.label}
      </Reveal>

      <Reveal
        as="div"
        delay={200}
        className="mt-6 inline-block bg-amber-400 text-stone-900 px-4 py-1 rounded-md font-display font-black text-xs tracking-widest"
        style={{ transform: "rotate(-2deg)" }}
      >
        EVIDENCIA #001
      </Reveal>

      <Reveal
        as="h2"
        delay={350}
        className="mt-6 font-serif italic text-5xl sm:text-7xl leading-[0.95] text-balance"
      >
        La cursada de <br />
        <span className="text-amber-400">{slide13.title}</span>
      </Reveal>

      <Reveal
        as="p"
        delay={550}
        className="mt-8 text-white/80 text-lg sm:text-xl max-w-md text-balance"
      >
        {slide13.tag} 😅
      </Reveal>
    </Slide>
  );
}
