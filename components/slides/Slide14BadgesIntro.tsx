import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide14 } from "@/lib/data";

export function Slide14BadgesIntro() {
  return (
    <Slide
      id="slide-14"
      bg="bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 text-stone-900"
    >
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-stone-900/85"
      >
        {slide14.kicker}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-6 font-display font-black text-[20vw] sm:text-[10rem] leading-[0.85]"
      >
        {slide14.title}
      </Reveal>

      <div className="mt-8 flex gap-3 text-6xl">
        {["🥇", "🏅", "🎖", "🏆"].map((e, i) => (
          <Reveal
            key={e}
            as="span"
            type="scale"
            delay={400 + i * 100}
          >
            {e}
          </Reveal>
        ))}
      </div>
    </Slide>
  );
}
