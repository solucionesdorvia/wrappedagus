import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { slide16 } from "@/lib/data";

export function Slide16Song() {
  return (
    <Slide
      id="slide-16"
      bg="bg-gradient-to-br from-emerald-500 via-emerald-700 to-emerald-900 text-white"
    >
      <Reveal
        as="p"
        delay={50}
        className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/80"
      >
        {slide16.label}
      </Reveal>

      <Reveal
        as="p"
        delay={200}
        className="mt-3 font-serif italic text-2xl sm:text-3xl text-white/90"
      >
        {slide16.subtitle}
      </Reveal>

      <Reveal
        as="div"
        delay={400}
        className="mt-8 rounded-2xl bg-black/40 backdrop-blur p-5 sm:p-6 max-w-md"
      >
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg bg-gradient-to-br from-amber-300 to-rose-500 grid place-items-center shadow-lg shrink-0">
            <span className="text-3xl">🎶</span>
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-white/60 font-bold">
              Now playing
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl leading-tight truncate">
              {slide16.song}
            </div>
            <div className="text-white/80 text-sm sm:text-base truncate">
              {slide16.artist}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-1 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white origin-left"
              style={{
                width: "62%",
                animation:
                  "wrap-bar-grow-x 2.4s cubic-bezier(0.22, 1, 0.36, 1) 800ms forwards",
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-white/60 font-mono">
            <span>2:43</span>
            <span>4:21</span>
          </div>
        </div>
      </Reveal>

      <Reveal
        as="p"
        delay={650}
        className="mt-6 font-serif italic text-xl sm:text-2xl text-white/85"
      >
        {slide16.tag} 🍀
      </Reveal>
    </Slide>
  );
}
