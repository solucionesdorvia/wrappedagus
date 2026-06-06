import { ProgressIndicator } from "@/components/ProgressIndicator";
import { KeyboardNav } from "@/components/KeyboardNav";
import { TapNav } from "@/components/TapNav";
import { AudioButton } from "@/components/AudioButton";
import { ScrollResetOnLoad } from "@/components/ScrollResetOnLoad";
import { meta, slide17 } from "@/lib/data";

import { Slide01Intro } from "@/components/slides/Slide01Intro";
import { Slide02Welcome } from "@/components/slides/Slide02Welcome";
import { SlidePrimerDia } from "@/components/slides/SlidePrimerDia";
import { Slide03Patologia } from "@/components/slides/Slide03Patologia";
import { Slide04MasEstudiada } from "@/components/slides/Slide04MasEstudiada";
import { Slide05MenosEstudiada } from "@/components/slides/Slide05MenosEstudiada";
import { Slide06ExamenSufrido } from "@/components/slides/Slide06ExamenSufrido";
import { Slide07Lapicera } from "@/components/slides/Slide07Lapicera";
import { Slide08SantojanniIntro } from "@/components/slides/Slide08SantojanniIntro";
import { Slide09Minutos } from "@/components/slides/Slide09Minutos";
import { Slide10MartesGuardia } from "@/components/slides/Slide10MartesGuardia";
import { Slide11Viernes } from "@/components/slides/Slide11Viernes";
import { Slide12Cabra } from "@/components/slides/Slide12Cabra";
import { Slide13Robo } from "@/components/slides/Slide13Robo";
import { Slide14BadgesIntro } from "@/components/slides/Slide14BadgesIntro";
import { Slide15Badges } from "@/components/slides/Slide15Badges";
import { Slide16Song } from "@/components/slides/Slide16Song";
import { Slide17Grupos } from "@/components/slides/Slide17Grupos";
import { SlideGrupo } from "@/components/slides/SlideGrupo";
import { Slide18Amor } from "@/components/slides/Slide18Amor";
import { SlideUltimasDiez } from "@/components/slides/SlideUltimasDiez";
import { Slide20Cierre } from "@/components/slides/Slide20Cierre";

// total = 20 originales − 1 (galería slide 19 reemplazada) + 1 (primer día)
// + 5 (un slide por grupo) + 1 (últimas 10) = 26
const TOTAL_SLIDES = 26;

export default function Home() {
  return (
    <>
      <ScrollResetOnLoad />
      <ProgressIndicator count={TOTAL_SLIDES} />
      <KeyboardNav />
      <TapNav />
      <AudioButton src={meta.song.src} />

      <main>
        <Slide01Intro />
        <Slide02Welcome />
        <SlidePrimerDia />
        <Slide03Patologia />
        <Slide04MasEstudiada />
        <Slide05MenosEstudiada />
        <Slide06ExamenSufrido />
        <Slide07Lapicera />
        <Slide08SantojanniIntro />
        <Slide09Minutos />
        <Slide10MartesGuardia />
        <Slide11Viernes />
        <Slide12Cabra />
        <Slide13Robo />
        <Slide14BadgesIntro />
        <Slide15Badges />
        <Slide16Song />
        <Slide17Grupos />
        {slide17.groups.map((g, i) => (
          <SlideGrupo key={g.slug} group={g} rank={i + 1} />
        ))}
        <Slide18Amor />
        <SlideUltimasDiez />
        <Slide20Cierre />
      </main>
    </>
  );
}
