import QRCode from "react-qr-code";
import { qrPage } from "@/lib/data";

export const metadata = {
  title: "Medical Wrapped — QR",
  description: "Escaneá para ver el wrapped completo.",
};

export default function QRRoute() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-fuchsia-600 via-violet-700 to-indigo-900 text-white">
      {/* blobs decorativos */}
      <div className="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full bg-pink-400/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[55vw] h-[55vw] rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 py-10 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/85">
          {qrPage.kicker}
        </p>

        <h1 className="mt-5 font-serif italic text-5xl sm:text-7xl leading-[0.95] text-balance max-w-md">
          {qrPage.title}
        </h1>
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] text-balance">
          {qrPage.titleAlt}
        </h2>

        {/* Polaroid con la foto de Agus chico */}
        <div className="mt-7 relative inline-block">
          <div
            className="bg-white p-3 pb-10 shadow-2xl"
            style={{ transform: "rotate(-3deg)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={qrPage.photo}
              alt="Agus de chico disfrazado de médico"
              loading="lazy"
              className="block w-[58vw] max-w-[240px] sm:max-w-[280px] aspect-[3/4] object-cover"
            />
            <p
              className="mt-2 font-serif italic text-stone-700 text-base"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              {qrPage.photoCaption}
            </p>
          </div>
          {/* sticker decorativo */}
          <div
            className="absolute -top-3 -right-4 bg-amber-300 text-stone-900 text-xs font-black px-3 py-1 rounded-full shadow-md"
            style={{ transform: "rotate(10deg)" }}
          >
            DR. AGUS ★
          </div>
        </div>

        {/* QR card */}
        <div
          className="mt-9 bg-white p-4 sm:p-5 rounded-3xl shadow-2xl inline-block"
          style={{ transform: "rotate(1.5deg)" }}
        >
          <QRCode
            value={qrPage.url}
            size={180}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            style={{
              height: "auto",
              maxWidth: "100%",
              width: "180px",
            }}
          />
          <p className="mt-3 font-display font-black text-lg text-black uppercase tracking-tight leading-none">
            {qrPage.cta}
          </p>
          <p className="mt-1 font-serif italic text-stone-600 text-sm">
            {qrPage.scanLabel}
          </p>
        </div>

        <p className="mt-7 font-serif italic text-2xl sm:text-3xl text-white text-balance max-w-xs">
          {qrPage.subtitle}
        </p>
        <p className="mt-2 font-display text-base text-white/80 max-w-sm text-balance">
          {qrPage.description}
        </p>

        <p className="mt-8 font-serif italic text-white/70 text-base">
          {qrPage.footer}
        </p>
      </div>
    </main>
  );
}
