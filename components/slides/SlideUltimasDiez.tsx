import { Reveal } from "@/components/Reveal";
import { slideUltimasDiez } from "@/lib/data";

export function SlideUltimasDiez() {
  return (
    <section
      id="slide-ultimas-diez"
      className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden bg-stone-950 text-white"
    >
      {/* foto de fondo full bleed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slideUltimasDiez.photo}
        alt="últimas 10"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover anim-fade-in"
        style={{ animationDelay: "0ms", objectPosition: "center top" }}
      />

      {/* overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 via-40% to-transparent" />

      {/* contenido pegado al borde inferior */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-10 pb-12 text-center">
        <Reveal
          as="p"
          delay={300}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-amber-400"
        >
          {slideUltimasDiez.kicker}
        </Reveal>

        <Reveal
          as="h2"
          delay={500}
          className="mt-3 font-display font-black text-[22vw] sm:text-[10rem] leading-[0.85] tracking-tight"
        >
          {slideUltimasDiez.title}
        </Reveal>

        <Reveal
          as="p"
          delay={750}
          className="mt-2 font-display font-extrabold text-2xl sm:text-3xl uppercase"
        >
          {slideUltimasDiez.subtitle}
        </Reveal>

        <Reveal
          as="p"
          delay={900}
          className="mt-1 font-serif italic text-base sm:text-2xl text-white/85 max-w-md mx-auto text-balance"
        >
          {slideUltimasDiez.fact}
        </Reveal>
      </div>
    </section>
  );
}
