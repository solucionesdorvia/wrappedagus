// =============================================================
// Medical Wrapped 2026 — TODO EL CONTENIDO VIVE ACÁ
// Editá los valores de abajo y el sitio se actualiza solo.
// =============================================================

export const meta = {
  year: 2026,
  honoree: "doctor",
  song: {
    title: "30 Denarios",
    artist: "Charly García & Pedro Aznar",
    // archivo de audio en public/audio/
    src: "/audio/30-denarios.mp3",
    // portada del disco
    cover: "/images/album-cover.jpg",
  },
};

export const slide01 = {
  kicker: "MEDICAL WRAPPED",
  year: "2026",
  title: "8 años.",
  titleAlt: "Una sola meta.",
  cta: "Empezá tu Wrapped",
};

export const slide02 = {
  line1: "Hoy toca celebrar tus",
  highlight: "8 años",
  line2: "de Medical Wrapped",
  sub: "Acá están tus momentos más destacados",
};

export const slide03 = {
  label: "Tu patología N°1",
  number: 10500,
  unit: "veces que escuchaste",
  word: "“diabetes”",
  tag: "Te sabés la patología de memoria",
  emoji: "🩸",
};

export const slide04 = {
  label: "La materia que MÁS estudiaste",
  subject: "Histo & Embrio",
  stat: "Reproducida 3 veces",
  tag: "Te sabés la gastrulación de memoria",
};

export const slide05 = {
  label: "La materia que MENOS estudiaste",
  subject: "Fármaco 2",
  stat: "30 minutos totales",
  tag: "Que nadie le pregunte a alguien del Santojanni qué es una cefalosporina",
};

export const slide06 = {
  label: "El examen más sufrido",
  title: "Primer parcial de Pato 2",
  tag: "Esperemos que nunca más vuelva el dengue",
};

export const slide07 = {
  label: "Tu instrumento más escuchado",
  instrument: "La lapicera negra",
  tag: "Sobrevivió a toda la carrera",
  extra: "2 callos de tanto escribir",
  mentions: ["Estetoscopio", "Tensiómetro"],
  photo: "/images/lapicera.jpg",
};

export const slide08 = {
  kicker: "ÁLBUM 02",
  title: "Tu paso por el",
  titleHighlight: "Santojanni",
};

export const slide09 = {
  label: "Minutos totales en el Santojanni",
  number: 140400,
  unit: "minutos",
  tag: "Más que los que pasaste jugando al FIFA",
};

export const slide10 = {
  label: "Día con más actividad",
  day: "Martes de guardia",
  number: 660,
  unit: "min promedio",
  // datos para el gráfico (lun a dom)
  bars: [
    { day: "Lun", value: 420 },
    { day: "Mar", value: 660 },
    { day: "Mié", value: 380 },
    { day: "Jue", value: 510 },
    { day: "Vie", value: 120 },
    { day: "Sáb", value: 240 },
    { day: "Dom", value: 200 },
  ],
};

export const slide11 = {
  label: "Día con menos actividad",
  day: "Viernes",
  tag: "Sobre todo si era finde largo",
};

export const slide12 = {
  label: "Tu rol en el curso",
  badge: "La cabra cebadora de mates",
  emoji: "🧉",
  // foto protagonista: él calentando el agua del mate en una guardia
  matePhoto: "/images/cebando-mate.jpg",
};

export const slide13 = {
  label: "El robo del siglo",
  title: "Diagnóstico por Imágenes",
  tag: "Casi se quedan sin curso, pero las risas no faltaron",
};

export const slide14 = {
  kicker: "ÁLBUM 03",
  title: "Tus Badges",
  emoji: "🏆",
};

export const slide15 = {
  label: "Logros desbloqueados",
  badges: [
    {
      title: "Histo & Embrio",
      copy: "La materia que nunca te vas a olvidar. Costó, pero en algún momento ibas a aprobar.",
      color: "from-fuchsia-500 to-pink-400",
    },
    {
      title: "Inmunología",
      copy: "Recuperatorio y final con 4. “4 es nota, lo demás es lujo” nunca quedó mejor.",
      color: "from-lime-400 to-emerald-500",
    },
    {
      title: "Micro 2",
      copy: "Final pateado por 2 años. Aprendizaje: nunca patear un final tantos años.",
      color: "from-amber-400 to-orange-500",
    },
  ],
};

export const slide16 = {
  label: "El featuring del año",
  subtitle: "Tu canción más escuchada en 8 años",
  song: "30 Denarios",
  artist: "Charly García & Pedro Aznar",
  tag: "Vaya que te sirvió de suerte",
};

export const slide17 = {
  label: "Tus grupos de amigos",
  intro: "En 8 años tuviste",
  count: 5,
  countLabel: "grupos inolvidables",
  outro: "Pasemos lista, uno por uno.",
  // Cada grupo tiene su propia slide dedicada. Editá el orden, los facts o
  // los colores acá y se actualiza todo solo.
  groups: [
    {
      slug: "triple-t",
      name: "La triple T",
      photo: "/images/grupo-triplet.jpg",
      // tailwind: fondo + texto del nombre
      bg: "bg-gradient-to-br from-fuchsia-600 via-fuchsia-500 to-pink-400",
      accent: "text-white",
      fact: "Tu primer grupo del CBC. La banda original.",
    },
    {
      slug: "anato",
      name: "Los de Anato 💀",
      photo: "/images/grupo-anato.jpg",
      bg: "bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700",
      accent: "text-white",
      fact: "Los amigos de siempre. Los que entraron primero y nunca se fueron.",
    },
    {
      slug: "paris",
      name: "Paris Saintojanni",
      photo: "/images/grupo-paris.jpg",
      bg: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500",
      accent: "text-white",
      fact: "Los pibes. Vestuario, cancha y guardia.",
    },
    {
      slug: "lam",
      name: "LAM",
      photo: "/images/grupo-lam.jpg",
      bg: "bg-gradient-to-br from-pink-400 via-rose-400 to-amber-300",
      accent: "text-stone-900",
      fact: "El chisme hecho grupo. Pediatría regular y chusmerío 24/7.",
    },
    {
      slug: "fisio",
      name: "Los de fisio",
      // TODO: falta foto del grupo real de Fisio (Rodri). Por ahora placeholder.
      photo: "/images/grupo-fisio.jpg",
      bg: "bg-gradient-to-br from-amber-400 via-amber-500 to-orange-400",
      accent: "text-stone-900",
      fact: "De acá salió Rodri. Y eso, en 8 años, ya vale oro.",
    },
  ],
};

// NUEVA — "Tu primer día"
export const slidePrimerDia = {
  kicker: "RETROCEDAMOS UN POCO",
  title: "Tu primer día",
  subtitle: "Hace 8 años, te anotabas en la facu.",
  tag: "Sin saber lo que te esperaba.",
  photo: "/images/inscripcion.jpg",
};

// NUEVA — "Las últimas 10"
export const slideUltimasDiez = {
  kicker: "Y AHORA",
  title: "Últimas 10",
  subtitle: "Vamossss 💪",
  fact: "guardias para cerrar la carrera.",
  photo: "/images/santojanni-final.jpg",
};

export const slide18 = {
  label: "Y también",
  highlight: "encontraste el amor",
  emoji: "💗",
  // reemplazá el placeholder con la foto en public/images/amor.jpg
  photo: "/images/amor.jpg",
};

export const slide19 = {
  label: "Tu paso por la facultad",
  subtitle: "en fotos",
  // 6 fotos en orden timeline (primer día → última guardia).
  // Si querés cambiar el orden, solo movelas en este array.
  photos: [
    "/images/inscripcion.jpg",       // 1. anotándose en CBC
    "/images/grupo-anato.jpg",       // 2. primeros años, guardapolvos
    "/images/grupo-triplet.jpg",     // 3. la triple T, selfie plaza
    "/images/grupo-lam.jpg",         // 4. LAM, Centro de Salud (scrubs azul)
    "/images/grupo-paris.jpg",       // 5. Paris Saintojanni, escaleras hospital
    "/images/santojanni-final.jpg",  // 6. "Vamossss" últimas 10
  ] as string[],
  placeholderCount: 6,
};

export const slide20 = {
  line1: "8 años.",
  line2: "Miles de hojas.",
  line3: "Un montón de mates.",
  line4: "Una sola meta.",
  closing: "Felicitaciones, doctor.",
  shareText:
    "Felicitaciones doctor 🩺 — 8 años, una sola meta. #MedicalWrapped2026",
};
