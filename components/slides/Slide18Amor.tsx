import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide18 } from "@/lib/data";

export function Slide18Amor() {
  return (
    <Slide
      id="slide-18"
      bg="bg-gradient-to-br from-rose-200 via-pink-300 to-amber-200 text-rose-900"
    >
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-rose-900/80"
      >
        {slide18.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-4 font-serif italic text-5xl sm:text-7xl leading-[0.95] text-balance"
      >
        {slide18.highlight}
        <span className="ml-2">{slide18.emoji}</span>
      </Reveal>

      <Reveal as="div" type="scale" delay={400} className="mt-8 flex justify-center">
        {/* Reemplazá el placeholder con tu foto: poné el .jpg en /public/images/amor.jpg
            y seteá `slide18.photo` en lib/data.ts */}
        {slide18.photo ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={slide18.photo}
            alt="amor"
            loading="lazy"
            className="rounded-2xl aspect-square w-64 sm:w-80 object-cover shadow-2xl"
          />
        ) : (
          <div
            className="rounded-2xl aspect-square w-64 sm:w-80 bg-white shadow-2xl grid place-items-center"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div className="text-rose-300 text-7xl">💗</div>
          </div>
        )}
      </Reveal>
    </Slide>
  );
}
