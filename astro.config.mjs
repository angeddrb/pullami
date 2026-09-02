// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pullami.com',

  // Bilingual ES/EN. Spanish is the default locale and stays at the root
  // (/, /productos/...). English is served under /en (/en, /en/productos/...).
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    // cast avoids a cosmetic duplicate-vite-types clash; runtime is fine
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
