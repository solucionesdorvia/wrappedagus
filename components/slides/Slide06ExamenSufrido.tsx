import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide06 } from "@/lib/data";

export function Slide06ExamenSufrido() {
  return (
    <Slide id="slide-06" bg="bg-[#3a0a14] text-white">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #ff2d6f 0%, transparent 45%), radial-gradient(circle at 80% 70%, #b91c1c 0%, transparent 50%)",
        }}
      />

      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/70"
      >
        {slide06.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={250}
        className="mt-8 font-serif italic text-5xl sm:text-7xl leading-[0.95] text-balance"
      >
        {slide06.title}
      </Reveal>

      <Reveal
        as="div"
        delay={500}
        className="mt-10 h-px bg-white/30 w-2/3"
      />

      <Reveal as="p" delay={650} className="mt-6 text-white/85 text-lg sm:text-xl max-w-md">
        {slide06.tag} 🦟
      </Reveal>
    </Slide>
  );
}
