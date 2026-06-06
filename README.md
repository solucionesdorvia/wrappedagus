# Medical Wrapped 2026 🩺

Web interactiva tipo Spotify Wrapped — sorpresa para festejar los 8 años de carrera de un médico recién recibido.

20 slides con scroll-snap vertical, animaciones con Framer Motion, paletas dramáticas estilo Wrapped real.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Mejor experiencia en mobile (vertical), pero está responsive a desktop.

## Cómo editar el contenido

**Todo el texto y los stats viven en un solo archivo:** [`lib/data.ts`](./lib/data.ts).

Está organizado por slide (`slide01`, `slide02`, …, `slide20`). Editá los valores, guardá, y la página se actualiza sola.

### Agregar fotos

1. Poné las imágenes en `public/images/` (creá la carpeta si no existe).
2. En `lib/data.ts`:
   - **Slide 18 (el amor):** seteá `slide18.photo = "/images/amor.jpg"`.
   - **Slide 19 (galería):** llená el array `slide19.photos = ["/images/foto1.jpg", "/images/foto2.jpg", ...]`.

Mientras estén vacíos, se muestran placeholders.

### Agregar la canción "30 Denarios"

1. Poné el archivo `.mp3` en `public/audio/30-denarios.mp3`.
2. En `lib/data.ts`, seteá `meta.song.src = "/audio/30-denarios.mp3"`.

Aparece un botón flotante de play/pausa abajo a la derecha. El autoplay está bloqueado por los browsers, así que el botón es necesario.

## Navegación

- **Scroll vertical** (snap entre slides).
- **Flechas ↑ / ↓** del teclado para ir slide por slide.
- Barra de progreso arriba (estilo stories).
- En el último slide hay botón **Volver a ver** y **Compartir** (usa Web Share API en mobile, copia al portapapeles en desktop).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- canvas-confetti
- Fuentes: Bricolage Grotesque (display) + Instrument Serif (slides emotivos) via `next/font/google`

## Deploy a Vercel

```bash
npx vercel
```

O conectá el repo desde [vercel.com](https://vercel.com). No requiere variables de entorno.

## Estructura

```
app/
  layout.tsx       — fonts, metadata
  page.tsx         — orquesta los 20 slides
  globals.css      — scroll-snap, utilidades
components/
  Slide.tsx        — wrapper común (paleta, layout, stagger)
  BigNumber.tsx    — contador animado de 0 al valor final
  ProgressIndicator.tsx
  AudioButton.tsx
  ShareButton.tsx
  ConfettiBurst.tsx
  KeyboardNav.tsx
  slides/          — un archivo por slide (Slide01Intro.tsx … Slide20Cierre.tsx)
lib/
  data.ts          — TODO el contenido
  motion.ts        — variantes de animación reutilizables
```

Felicitaciones, doctor. 💗
