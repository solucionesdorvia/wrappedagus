import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide15 } from "@/lib/data";

export function Slide15Badges() {
  return (
    <Slide id="slide-15" bg="bg-black text-white">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/60"
      >
        {slide15.label}
      </Reveal>

      <div className="mt-6 flex flex-col gap-4">
        {slide15.badges.map((b, i) => (
          <Reveal
            key={b.title}
            as="div"
            delay={200 + i * 150}
            className={`relative rounded-2xl p-5 bg-gradient-to-br ${b.color} text-white shadow-xl`}
            style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-black text-2xl sm:text-3xl">
                {b.title}
              </h3>
              <span className="text-2xl">🏅</span>
            </div>
            <p className="mt-2 text-sm sm:text-base text-white/95 leading-snug">
              {b.copy}
            </p>
          </Reveal>
        ))}
      </div>
    </Slide>
  );
}
