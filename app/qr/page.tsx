import QRCode from "react-qr-code";
import { qrPage } from "@/lib/data";

export const metadata = {
  title: "Medical Wrapped — QR",
  description: "Escaneá para ver el wrapped completo.",
};

export default function QRRoute() {
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br from-fuchsia-600 via-violet-700 to-indigo-900 text-white">
      {/* blobs decorativos estilo splash */}
      <div className="absolute -top-32 -left-20 w-[60vw] h-[60vw] rounded-full bg-pink-400/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[55vw] h-[55vw] rounded-full bg-amber-300/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 py-10 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase text-white/80">
          {qrPage.kicker}
        </p>

        <h1 className="mt-5 font-serif italic text-[20vw] sm:text-[8rem] leading-[0.9] text-white">
          {qrPage.title}
        </h1>
        <h2 className="font-display font-extrabold text-[10vw] sm:text-6xl leading-[0.95] text-white -mt-1">
          {qrPage.titleAlt}
        </h2>

        {/* Card del QR */}
        <div className="mt-8 relative inline-block">
          <div
            className="bg-white p-5 sm:p-6 rounded-3xl shadow-2xl"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            <div className="bg-white">
              <QRCode
                value={qrPage.url}
                size={220}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "220px",
                }}
              />
            </div>
            <p className="mt-4 font-display font-black text-xl text-black uppercase tracking-tight">
              {qrPage.cta}
            </p>
          </div>

          {/* sticker estilo */}
          <div
            className="absolute -top-4 -right-6 bg-amber-300 text-stone-900 text-xs font-black px-3 py-1 rounded-full shadow-md"
            style={{ transform: "rotate(10deg)" }}
          >
            ▶ PLAY
          </div>
        </div>

        <p className="mt-8 font-serif italic text-2xl sm:text-3xl text-white text-balance max-w-xs">
          {qrPage.subtitle}
        </p>
        <p className="mt-3 font-display text-base sm:text-lg text-white/80 max-w-sm text-balance">
          {qrPage.description}
        </p>

        <p className="mt-10 font-serif italic text-white/70 text-base">
          {qrPage.footer}
        </p>
      </div>
    </main>
  );
}
