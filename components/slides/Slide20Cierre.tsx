import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";
import { ShareButton } from "@/components/ShareButton";
import { RestartButton } from "@/components/RestartButton";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { slide20 } from "@/lib/data";

export function Slide20Cierre() {
  return (
    <Slide
      id="slide-20"
      bg="bg-gradient-to-br from-indigo-900 via-fuchsia-700 to-orange-500 text-white"
    >
      <ConfettiBurst />

      <div className="text-center">
        {[slide20.line1, slide20.line2, slide20.line3, slide20.line4].map(
          (line, i) => (
            <Reveal
              key={i}
              as="p"
              delay={100 + i * 120}
              className={`font-serif italic leading-[0.95] text-balance ${
                i === 3
                  ? "text-5xl sm:text-7xl mt-2"
                  : "text-4xl sm:text-6xl"
              }`}
            >
              {line}
            </Reveal>
          )
        )}

        <Reveal
          as="h2"
          delay={700}
          className="mt-10 font-display font-black text-4xl sm:text-6xl leading-[0.95] text-balance"
        >
          {slide20.closing}
        </Reveal>

        <Reveal
          as="div"
          delay={900}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <RestartButton className="rounded-full bg-white/15 backdrop-blur border border-white/40 text-white px-6 py-3 font-bold hover:bg-white/25 transition">
            Volver a ver
          </RestartButton>
          <ShareButton text={slide20.shareText} />
        </Reveal>
      </div>
    </Slide>
  );
}
