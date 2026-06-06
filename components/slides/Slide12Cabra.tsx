import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide12 } from "@/lib/data";

export function Slide12Cabra() {
  return (
    <Slide id="slide-12" bg="bg-amber-400 text-stone-900">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-stone-900/85"
      >
        {slide12.label}
      </Reveal>

      <Reveal
        as="div"
        type="scale"
        delay={250}
        className="mt-8 inline-block relative"
        style={{ transform: "rotate(-4deg)" }}
      >
        <div className="bg-stone-900 text-amber-400 px-8 py-6 rounded-2xl shadow-2xl">
          <div className="text-7xl text-center mb-2">{slide12.emoji}</div>
          <div className="font-display font-black text-3xl sm:text-5xl leading-[0.95] text-balance text-center max-w-xs">
            {slide12.badge}
          </div>
        </div>

        {/* sticker decorativo "OFICIAL ★" arriba a la derecha */}
        <div
          className="absolute -top-4 -right-6 bg-pink-400 text-stone-900 text-xs font-black px-3 py-1 rounded-full shadow-md"
          style={{ transform: "rotate(12deg)" }}
        >
          OFICIAL ★
        </div>

        {/* mini-polaroid del mate real abajo a la izquierda */}
        {slide12.matePhoto && (
          <div
            className="absolute -bottom-10 -left-10 bg-white p-1.5 pb-4 shadow-2xl"
            style={{ transform: "rotate(-12deg)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide12.matePhoto}
              alt="el mate"
              loading="lazy"
              className="block w-20 h-20 sm:w-24 sm:h-24 object-cover"
            />
          </div>
        )}
      </Reveal>
    </Slide>
  );
}
