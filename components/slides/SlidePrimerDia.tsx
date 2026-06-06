import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slidePrimerDia } from "@/lib/data";

export function SlidePrimerDia() {
  return (
    <Slide
      id="slide-primer-dia"
      bg="bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 text-stone-900"
    >
      <div className="flex flex-col items-center text-center w-full">
        <Reveal
          as="p"
          delay={50}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-stone-900/85"
        >
          {slidePrimerDia.kicker}
        </Reveal>

        {/* Polaroid grande con la foto del primer día */}
        <Reveal
          as="div"
          type="scale"
          delay={200}
          className="mt-4 sm:mt-6 bg-white p-3 pb-10 shadow-2xl inline-block"
          style={{ transform: "rotate(-3deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slidePrimerDia.photo}
            alt="primer día"
            loading="lazy"
            className="block w-[62vw] max-w-[260px] sm:max-w-[300px] aspect-[3/4] object-cover"
          />
          <p
            className="mt-2 font-serif italic text-stone-700 text-base sm:text-lg"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            día 1
          </p>
        </Reveal>

        <Reveal
          as="h2"
          delay={450}
          className="mt-5 font-display font-black text-3xl sm:text-5xl leading-[0.95] text-balance"
        >
          {slidePrimerDia.title}
        </Reveal>

        <Reveal
          as="p"
          delay={600}
          className="mt-3 font-serif italic text-lg sm:text-2xl text-stone-700 text-balance max-w-xs"
        >
          {slidePrimerDia.subtitle}
        </Reveal>

        <Reveal
          as="p"
          delay={750}
          className="font-serif italic text-lg sm:text-2xl text-stone-700 text-balance max-w-xs"
        >
          {slidePrimerDia.tag}
        </Reveal>
      </div>
    </Slide>
  );
}
