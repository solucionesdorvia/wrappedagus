import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide12 } from "@/lib/data";

export function Slide12Cabra() {
  return (
    <Slide id="slide-12" bg="bg-amber-400 text-stone-900">
      <div className="flex flex-col items-center text-center w-full">
        <Reveal
          as="p"
          delay={50}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-stone-900/85"
        >
          {slide12.label}
        </Reveal>

        {/* Polaroid grande con la foto real cebando el mate */}
        <Reveal
          as="div"
          type="scale"
          delay={200}
          className="relative mt-4 sm:mt-6 bg-white p-3 pb-10 shadow-2xl inline-block"
          style={{ transform: "rotate(-3deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide12.matePhoto}
            alt="calentando el agua del mate"
            loading="lazy"
            className="block w-[60vw] max-w-[250px] sm:max-w-[300px] aspect-[3/4] object-cover"
          />
          <p
            className="mt-2 font-serif italic text-stone-700 text-base sm:text-lg"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            evidencia
          </p>

          {/* Sticker OFICIAL ★ pegado a la polaroid */}
          <div
            className="absolute -top-4 -right-6 bg-pink-400 text-stone-900 text-xs font-black px-3 py-1 rounded-full shadow-md"
            style={{ transform: "rotate(12deg)" }}
          >
            OFICIAL ★
          </div>
        </Reveal>

        <Reveal
          as="h2"
          delay={450}
          className="mt-5 font-display font-black text-3xl sm:text-5xl leading-[0.95] text-balance max-w-xs"
        >
          {slide12.badge} {slide12.emoji}
        </Reveal>
      </div>
    </Slide>
  );
}
