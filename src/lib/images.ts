import type { ImageMetadata } from 'astro';

// Eagerly import every asset so we can resolve them by basename from data.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpeg,jpg,png,webp,avif,svg}',
  { eager: true }
);

const map = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const base = path.split('/').pop()!.replace(/\.(jpe?g|png|webp|avif|svg)$/i, '');
  map.set(base, mod.default);
}

/** Resolve an image by its basename (e.g. "producto-arandanos"). */
export function findImage(name: string): ImageMetadata | undefined {
  return map.get(name);
}
