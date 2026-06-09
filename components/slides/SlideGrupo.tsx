import { Slide } from "@/components/Slide";
import { Reveal } from "@/components/Reveal";

type Group = {
  slug: string;
  name: string;
  photo: string;
  /** Pie de foto opcional, estilo polaroid (chico, italic). */
  caption?: string;
  bg: string;
  accent: string;
  fact: string;
};

type Props = {
  group: Group;
  rank: number;
};

export function SlideGrupo({ group, rank }: Props) {
  return (
    <Slide id={`slide-grupo-${group.slug}`} bg={`${group.bg} ${group.accent}`}>
      <div className="flex flex-col items-center text-center w-full">
        <Reveal
          as="p"
          delay={50}
          className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase opacity-75"
        >
          GRUPO #{rank}
        </Reveal>

        {/* Foto BIG centrada, con shadow grande */}
        <Reveal
          as="div"
          type="scale"
          delay={200}
          className="mt-4 sm:mt-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30"
          style={{
            transform: `rotate(${rank % 2 === 0 ? "1.5deg" : "-1.5deg"})`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={group.photo}
            alt={group.name}
            loading="lazy"
            className="block w-[72vw] max-w-[320px] sm:max-w-[400px] aspect-square object-cover"
          />
        </Reveal>

        {group.caption && (
          <Reveal
            as="p"
            delay={350}
            className="mt-3 font-serif italic text-sm sm:text-base opacity-75 max-w-xs text-balance"
          >
            {group.caption}
          </Reveal>
        )}

        <Reveal
          as="h2"
          delay={450}
          className="mt-4 font-display font-black text-4xl sm:text-6xl leading-[0.95] text-balance"
        >
          {group.name}
        </Reveal>

        <Reveal
          as="p"
          delay={600}
          className="mt-3 font-serif italic text-lg sm:text-2xl opacity-85 max-w-md text-balance"
        >
          {group.fact}
        </Reveal>
      </div>
    </Slide>
  );
}
