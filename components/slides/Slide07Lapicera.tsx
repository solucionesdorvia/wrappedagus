import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide07 } from "@/lib/data";

export function Slide07Lapicera() {
  return (
    <Slide id="slide-07" bg="bg-violet-600 text-white">
      {/* foto de la lapicera de fondo, gigante e inclinada */}
      <Reveal
        as="div"
        type="scale"
        delay={100}
        className="absolute inset-y-0 -right-16 sm:-right-10 w-[55%] sm:w-[40%] z-0 pointer-events-none"
        style={{ transform: "rotate(8deg)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide07.photo}
          alt="la lapicera negra"
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </Reveal>

      <div className="relative z-10">
        <Reveal
          as="p"
          delay={200}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/90"
        >
          {slide07.label}
        </Reveal>

        <Reveal
          as="h2"
          delay={400}
          className="mt-6 font-display font-black text-5xl sm:text-7xl leading-[0.95] text-balance max-w-[60%]"
        >
          {slide07.instrument}
        </Reveal>

        <Reveal
          as="p"
          delay={550}
          className="mt-4 font-serif italic text-2xl sm:text-3xl text-white/95 max-w-[60%]"
        >
          {slide07.tag}
        </Reveal>

        <Reveal
          as="div"
          delay={700}
          className="mt-6 inline-block bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-bold"
        >
          +{slide07.extra}
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2 items-center max-w-[80%]">
          <Reveal
            as="span"
            delay={800}
            className="text-white/80 text-xs uppercase tracking-widest font-bold mr-2"
          >
            Menciones honoríficas:
          </Reveal>
          {slide07.mentions.map((m, i) => (
            <Reveal
              key={m}
              as="span"
              delay={900 + i * 100}
              className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-medium"
            >
              {m}
            </Reveal>
          ))}
        </div>
      </div>
    </Slide>
  );
}
