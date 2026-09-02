# Pullami — rebuild (Astro + Tailwind)

Reconstrucción del sitio de Pullami en **Astro 5 + Tailwind v4**, bilingüe ES/EN.
Estado: **Paso 1 — look real replicado + contenido real de las 4 fichas**, con
placeholders donde van los assets. Tema: negro / blanco / gris con acento por
fruta, tipografía **Raleway**.

## Correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Rutas (10) · ES en raíz, EN bajo /en

`/` · `/productos/{arandanos|nueces|avellanas|cerezas}/`
`/en/` · `/en/productos/{...}/`

## Dónde se edita qué

- **Contenido de productos** → `src/data/products.ts`
  Cada ficha es un arreglo `blocks` de **secciones reutilizables**. Tipos:
  `varieties · availability · markets · nutrition · energy · process ·
  certifications · imageBand`. Agregas/quitas/reordenas bloques por producto.
- **Textos de interfaz** → `src/i18n/ui.ts`
- **Datos de empresa / copys del home** → `src/data/site.ts`
- **Tipos del modelo de producto** → `src/data/types.ts`
- **Colores / tipografía** → `src/styles/global.css`
- **Assets que faltan** → ver `ASSETS.md` (nombres exactos esperados)

## Paleta

- Estructura: negro `#000000`, blanco, banda gris `#6e6e6e`
- Verde marca (brote del logo): `#007b3b` / `#72bf44`
- Frutas: arándano `#69297D` · nuez `#DB7727` · avellana `#B55739` · cereza `#B32135`

## Stack viejo botado

jQuery + Bootstrap + AOS + SweetAlert2 + core-js + LazySizes → fuera.
JS total al cliente: **~15 KB** (solo View Transitions). Scroll-reveal, menú,
lightbox y sonido con scripts vanilla mínimos. Raleway self-hosted (Fontsource).

## Pendientes para el Paso 2

1. **Assets reales** → ver `ASSETS.md`. Swap de placeholders por `<Image>`
   (`astro:assets`, AVIF/WebP) y videos re-encodeados (WebM + poster LCP).
2. **Formulario**: backend según a dónde llega hoy el correo
   (Web3Forms / Formspree / Cloudflare Function).
3. **Cerezas**: confirmar meses de disponibilidad (no llegó screenshot de esa ficha).
4. **`world-map`** real para Mercados; **logos de certificación** reales.
5. **Íconos de producto** (`icon-{fruta}.svg`) y **logo_chile.svg**.
6. **URLs reales** de Instagram/LinkedIn (`companyInfo.social`).
7. **`og:image`** 1200×630 para compartir en redes (hoy no hay; el `<meta>`
   queda como TODO en `BaseLayout.astro`).

## Bugs del sitio original ya corregidos

Email roto → `mailto:` real. RRSS que iban a google.com → centralizados en
`companyInfo.social`.
