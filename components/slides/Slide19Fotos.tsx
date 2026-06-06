import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide19 } from "@/lib/data";

export function Slide19Fotos() {
  const items = slide19.photos.length
    ? slide19.photos
    : Array.from({ length: slide19.placeholderCount });

  return (
    <Slide id="slide-19" bg="bg-stone-950 text-white">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/60"
      >
        {slide19.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-3 font-serif italic text-4xl sm:text-6xl leading-[0.95]"
      >
        {slide19.subtitle}
      </Reveal>

      {/* grid polaroid — reemplazá los placeholders agregando paths en lib/data.ts (slide19.photos) */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {items.map((item, i) => {
          const isString = typeof item === "string";
          const rot = (i % 2 === 0 ? -1 : 1) * (2 + (i % 3));
          return (
            <Reveal
              key={i}
              type="scale"
              delay={400 + i * 90}
              className="bg-white p-2 pb-6 shadow-xl"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              {isString ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={item as string}
                  alt={`foto ${i + 1}`}
                  loading="lazy"
                  className="block w-full aspect-square object-cover"
                />
              ) : (
                <div className="w-full aspect-square bg-stone-200 grid place-items-center text-stone-400 text-2xl">
                  📷
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-white/50 text-xs text-center">
        agregá tus fotos en <code>public/images/</code> y referencialas en{" "}
        <code>lib/data.ts</code> → <code>slide19.photos</code>
      </p>
    </Slide>
  );
}
