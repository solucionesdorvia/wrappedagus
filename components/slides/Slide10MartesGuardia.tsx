import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { BigNumber } from "@/components/BigNumber";
import { slide10 } from "@/lib/data";

export function Slide10MartesGuardia() {
  const max = Math.max(...slide10.bars.map((b) => b.value));

  return (
    <Slide id="slide-10" bg="bg-[#ff7a18] text-black">
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-black/80"
      >
        {slide10.label}
      </Reveal>

      <Reveal
        as="h2"
        delay={200}
        className="mt-4 font-display font-black text-5xl sm:text-7xl leading-[0.95]"
      >
        {slide10.day}
      </Reveal>

      <Reveal as="div" delay={350} className="mt-3 flex items-baseline gap-2">
        <BigNumber
          value={slide10.number}
          className="font-display font-black text-7xl sm:text-8xl leading-none"
        />
        <span className="font-bold text-xl">{slide10.unit}</span>
      </Reveal>

      <div className="mt-10 flex items-end gap-2 sm:gap-3 h-40">
        {slide10.bars.map((b, i) => {
          const isPeak = b.value === max;
          return (
            <div key={b.day} className="flex-1 flex flex-col items-center gap-2 h-full">
              <div className="flex-1 w-full flex items-end">
                <div
                  className={`anim-bar-grow w-full rounded-t-md ${
                    isPeak ? "bg-black" : "bg-black/30"
                  }`}
                  style={{
                    height: `${(b.value / max) * 100}%`,
                    animationDelay: `${500 + i * 80}ms`,
                  }}
                />
              </div>
              <span
                className={`text-xs font-bold ${
                  isPeak ? "text-black" : "text-black/80"
                }`}
              >
                {b.day}
              </span>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}
