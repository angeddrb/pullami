// UI strings keyed by locale. Product content lives in src/data/products.ts.
// Edit copy here directly — this is the file you touch to tweak labels.

// Mantener en sync con astro.config.mjs → i18n.locales / defaultLocale.
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.home.sub': 'Vuelve a nuestra portada',
    'nav.products': 'Nuestros Productos',
    'nav.contact': 'Contacto',
    'nav.contact.sub': 'Comunícate con nosotros',
    'hero.scroll': 'Bajar',
    'home.srTitle': 'Pullami — empresa agrícola y exportadora de arándanos, cerezas, nueces y avellanas',
    'home.products.title': 'Productos',
    'home.about.title': 'Nosotros',
    'home.quality.title': 'Control de calidad',
    'home.quality.locationTitle': 'Ubicación privilegiada',
    'home.quality.safetyTitle': 'Seguridad alimentaria',
    'gallery.view': 'Ver foto',
    'product.varieties': 'Variedades',
    'product.varietiesIntro': 'Nuestras variedades disponibles son:',
    'product.availability': 'Disponibilidad',
    'product.markets': 'Nuestros Mercados',
    'product.nutrition': 'Valores Nutricionales',
    'product.energy': 'Valores Energéticos',
    'product.process': 'Proceso',
    'product.certifications': 'Certificaciones',
    'product.per100': '100 gr',
    'product.slide': 'Imagen',
    'contact.title': 'Si quieres comunicarte con nosotros completa el siguiente formulario:',
    'contact.close': 'Cerrar formulario',
    'contact.location': 'Ubicación',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.phone': 'Teléfono',
    'form.message': 'Mensaje',
    'form.send': 'Enviar',
    'lang.es': 'Español',
    'lang.en': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.home.sub': 'Back to the homepage',
    'nav.products': 'Our Products',
    'nav.contact': 'Contact',
    'nav.contact.sub': 'Get in touch',
    'hero.scroll': 'Scroll down',
    'home.srTitle': 'Pullami — agricultural grower and exporter of blueberries, cherries, walnuts and hazelnuts',
    'home.products.title': 'Products',
    'home.about.title': 'About us',
    'home.quality.title': 'Quality control',
    'home.quality.locationTitle': 'A privileged location',
    'home.quality.safetyTitle': 'Food safety',
    'gallery.view': 'View photo',
    'product.varieties': 'Varieties',
    'product.varietiesIntro': 'Our available varieties are:',
    'product.availability': 'Availability',
    'product.markets': 'Our Markets',
    'product.nutrition': 'Nutritional Values',
    'product.energy': 'Energy Values',
    'product.process': 'Process',
    'product.certifications': 'Certifications',
    'product.per100': '100 g',
    'product.slide': 'Image',
    'contact.title': 'To get in touch with us, fill out the form below:',
    'contact.close': 'Close form',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.send': 'Send',
    'lang.es': 'Español',
    'lang.en': 'English',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}

/** Months localized for the availability calendar. */
export const months = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
} as const;
