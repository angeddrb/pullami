# Pullami

> Proyecto de [Nodo](https://nodo) — by ange díaz del río

## Sobre el proyecto

Sitio web de Pullami. Una empresa agricola ubicada en la comuna de Coihueco XVI Región de Ñuble, con 30 años de experiencia en el rubro Agroindustrial. Cliente chileno. El sitio se comunica en español (Chile) e Ingles (Bilingüe). Es un refactor del sitio antiguo.

## Stack

- **Framework:** Astro
- **Estilos:** Tailwind CSS (utilidades en el markup, no CSS suelto salvo casos justificados)
- **Hosting:** Cloudflare Pages
- **JS:** vanilla / [GSAP si aplica]

## Convenciones de código

- Componentes Astro en `src/components/`, un componente por archivo, nombre en PascalCase (`Hero.astro`, `Logo.astro`).
- Layouts en `src/layouts/`, páginas en `src/pages/`.
- Estilos siempre con clases de Tailwind. Evitá `<style>` salvo que sea estrictamente necesario (animaciones complejas, casos que Tailwind no cubre).
- Nada de librerías nuevas sin avisar primero. Preferí soluciones nativas de Astro/Tailwind.
- Imágenes optimizadas (WebP cuando se pueda), usando el componente de imagen de Astro.
- Accesibilidad básica: `alt` en imágenes, jerarquía de headings correcta, foco visible.

## Cómo quiero que trabajes

- **Sección por sección.** No reescribas medio proyecto de una. Avanzá por bloques (hero, nav, una sección, etc.) y mostrame el resultado antes de seguir.
- **Mostrame los diffs antes de aplicar.** Quiero revisar y aprobar los cambios.
- **Archivos completos.** Cuando entregues un componente o archivo, dámelo completo y listo para pegar, no fragmentos sueltos.
- **Pregunta si hay ambigüedad** en vez de asumir, sobre todo en decisiones de diseño o estructura.
- **Respeta el diseño y la marca.** Si te paso una referencia visual, seguila de cerca. La prolijidad visual importa.

## Comandos del proyecto

<!-- Ajustá según tu package.json -->

- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Cosas a evitar

- No instales dependencias sin confirmación.
- No toques archivos de configuración (astro.config, tailwind.config, etc.) sin explicarme por qué.
- No metas comentarios de relleno ni código muerto.
