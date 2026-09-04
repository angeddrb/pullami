import type { Locale } from '../i18n/ui';

/* ================================================================== */
/*  Product data model                                                 */
/*                                                                     */
/*  A product page = hero + an ORDERED array of `blocks`. Each block   */
/*  type maps to a component (see ProductBlocks.astro). Add, remove or */
/*  reorder blocks per product, or leave a product with fewer blocks   */
/*  and fill the rest in later — that's the whole point.               */
/*                                                                     */
/*  Block types: varieties · availability · markets · nutrition ·      */
/*  energy · process · certifications · imageBand                      */
/* ================================================================== */

export type Localized = Record<Locale, string>;

export interface DataRow {
  label: Localized;
  value: Localized;
}

export interface MarketPin {
  label: Localized;
  /** Position on the world map, as % from left / top. */
  x: number;
  y: number;
}

export type ProductBlock =
  | { type: 'varieties'; intro: Localized; items: string[] }
  | { type: 'availability'; scientificName: string; monthsActive: number[]; image?: string }
  | { type: 'markets'; pins: MarketPin[] }
  | { type: 'nutrition'; rows: DataRow[]; image?: string }
  | { type: 'energy'; rows: DataRow[]; image?: string }
  | {
      type: 'process';
      items: { title?: Localized; text: Localized }[];
      /** full-bleed background photo; falls back to the grey band */
      image?: string;
    }
  | { type: 'certifications'; intro: Localized; items: { name: Localized; detail?: Localized; logo?: string }[] }
  | { type: 'imageBand'; image: string; alt?: Localized };

export interface Product {
  slug: string;
  /** fruit accent token (see global.css): arandanos | nueces | avellanas | cerezas */
  accent: string;
  name: Localized;
  /** white line icon overlaid on the hero (asset path under /public) */
  icon: string;
  /** hero slider images (asset basenames) */
  slides: string[];
  blocks: ProductBlock[];
}
