import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Las clases de gradient se interpolan dinámicamente en data.ts (slide 15)
  // por lo que el purge de Tailwind no las detecta. Las listamos a mano.
  safelist: [
    // gradients de slide 15 (badges)
    "from-fuchsia-500",
    "to-pink-400",
    "from-lime-400",
    "to-emerald-500",
    "from-amber-400",
    "to-orange-500",
    // backgrounds + gradientes dinámicos de los 5 slides de grupos
    "bg-fuchsia-500",
    "bg-violet-500",
    "bg-amber-400",
    "bg-pink-400",
    "bg-emerald-500",
    "text-black",
    "text-stone-900",
    "bg-gradient-to-br",
    "from-fuchsia-600",
    "via-fuchsia-500",
    "from-violet-700",
    "via-violet-600",
    "to-indigo-700",
    "from-emerald-600",
    "via-emerald-500",
    "to-teal-500",
    "from-pink-400",
    "via-rose-400",
    "to-amber-300",
    "via-amber-500",
    "to-orange-400",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
