# Oasis Creativa — Landing

Sitio de una página para **Oasis Creativa**, productora audiovisual premium con sede en Puebla, México. Construido sobre **Next.js (App Router)** con animaciones, transiciones y sobreposiciones usando **Framer Motion**, **GSAP + ScrollTrigger** y **Lenis** (scroll suave).

La estructura toma como referencia el layout de [nixtio.com](https://nixtio.com), pero reescrito de forma **semántica, optimizada y responsiva**, y adaptado a la identidad gráfica del BrandBook de Oasis.

## Stack

- **Next.js 14** + **TypeScript** + **Tailwind CSS**
- **Framer Motion** — entradas al hacer scroll, acordeones, menú overlay
- **GSAP + ScrollTrigger** — parallax del hero y contadores animados
- **Lenis** — scroll suave sincronizado con GSAP
- Fuentes: **Space Grotesk** (display) + **Inter** (texto)

## Identidad de marca

Tokens en `tailwind.config.ts`, tomados del BrandBook:

| Token | Hex | Nombre |
|-------|-----|--------|
| `ink` | `#131718` | Ultra black |
| `snow` | `#ffffff` | Snow white |
| `poppy` | `#ff1f2b` | Poppy red |
| `pink` | `#ff6ab6` | Deep pink |
| `mustard` | `#ffc315` | Mustard |
| `emerald` | `#00b884` / `#008c79` | Emerald |
| `sky` | `#2cd3f4` | Sky |
| `ocean` | `#0b6fdb` | Blue |
| `orange` | `#ff7500` | Orange |

## Estructura

```
src/
├─ app/                 # layout, página, estilos globales
├─ components/
│  ├─ sections/         # Navbar, Hero, Work, Premium, Services, About,
│  │                    # Pricing, Process, Stats, Faq, Contact
│  └─ ui/               # SmoothScroll, Reveal, Marquee, Media, Counter
└─ lib/site.ts          # TODO el contenido del sitio (copy + datos)
```

Todo el texto y los datos viven en **`src/lib/site.ts`** — editar ahí para actualizar copy, paquetes, FAQs, etc.

## Media / Cloudinary

Las imágenes y videos son **placeholders**. El componente `src/components/ui/Media.tsx` muestra un marcador con la paleta de marca mientras no haya `src`/`video`. Para publicar los assets definitivos:

1. Sube los archivos a Cloudinary.
2. Pega las URLs en `src/lib/site.ts`:
   - `media.heroVideo.src` / `.poster` → video de fondo del hero
   - `projects[].poster` / `.video` → tarjetas de proyectos

No hace falta tocar el layout: al pegar la URL, el placeholder se reemplaza por el video o la imagen real.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

Las animaciones respetan `prefers-reduced-motion`.
