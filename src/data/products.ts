import type { DataRow, Product } from "./types";

/* helper to keep the data terse */
const row = (
  es: string,
  enLabel: string,
  vEs: string,
  vEn: string,
): DataRow => ({
  label: { es, en: enLabel },
  value: { es: vEs, en: vEn },
});

/* ================================================================== */
/*  Products                                                           */
/* ================================================================== */

export const products: Product[] = [
  /* ---------------------------- ARÁNDANOS ------------------------- */
  {
    slug: "arandanos",
    accent: "arandanos",
    name: { es: "Arándanos", en: "Blueberries" },
    icon: "icon-arandanos",
    slides: ["arandanos-slider-1", "arandanos-slider-2"],
    blocks: [
      {
        type: "varieties",
        intro: {
          es: "Tenemos todo para producir los mejores arándanos gracias al clima de la región que nos da una ventaja incomparable para la producción de este fruto. Gracias a esto logramos el color, tamaño y frescura perfecta para un producto de calidad.",
          en: "We have everything to grow the best blueberries thanks to the region\u2019s climate, which gives us an unmatched advantage for this fruit. This lets us achieve the perfect color, size and freshness for a quality product.",
        },
        items: [
          "Duke",
          "Blue Ribbon",
          "Suzi Blue",
          "Legacy",
          "Brigitta",
          "Bringwell",
          "Tifblue",
        ],
      },
      {
        type: "availability",
        scientificName: "Vaccinium Corymbosum",
        monthsActive: [1, 2, 11, 12],
        image: "arandanos-disponibilidad",
      },
      {
        type: "nutrition",
        image: "arandanos-nutricion",
        rows: [
          row("Vitamina A", "Vitamin A", "5,7 UG", "5.7 UG"),
          row("Vitamina C", "Vitamin C", "22 mg", "22 mg"),
          row("Calcio", "Calcium", "10 mg", "10 mg"),
          row("Vitamina D", "Vitamin D", "0 IU", "0 IU"),
          row("Hierro", "Iron", "0,74 mg", "0.74 mg"),
          row("Vitamina B6", "Vitamin B6", "0,06 mg", "0.06 mg"),
          row("Magnesio", "Magnesium", "2,4 mg", "2.4 mg"),
          row("Cianocobalamina", "Cyanocobalamin", "0 µg", "0 µg"),
        ],
      },
      {
        type: "energy",
        image: "arandanos-energia",
        rows: [
          row("Calorías", "Calories", "33 Kcal", "33 Kcal"),
          row(
            "Lípidos",
            "Fats",
            "Saturado 0 g · Poliinsaturado 0 g · Monoinsaturado 0 g",
            "Saturated 0 g · Polyunsaturated 0 g · Monounsaturated 0 g",
          ),
          row("Colesterol", "Cholesterol", "0 mg", "0 mg"),
          row("Sodio", "Sodium", "1 mg", "1 mg"),
          row("Potasio", "Potassium", "78 mg", "78 mg"),
          row(
            "Glúcidos",
            "Carbohydrates",
            "Fibra 1,6 gr · Azúcar 8 g",
            "Fiber 1.6 g · Sugar 8 g",
          ),
          row("Proteína", "Protein", "0,625 gr", "0.625 g"),
        ],
      },
      {
        type: "process",
        image: "arandanos-banda-1",
        items: [
          {
            text: {
              es: "Contamos con una línea de procesos electrónica y llenado automático, lo que nos permite procesar directamente la fruta en el lugar de producción, en el menor tiempo posible. Esto nos otorga flexibilidad en los formatos de empaque y asegura la trazabilidad de todos nuestros productos.",
              en: "We have an electronic processing line with automatic filling, letting us process the fruit directly at the production site in the shortest time possible. This gives us flexibility in packaging formats and ensures full traceability of all our products.",
            },
          },
        ],
      },
      {
        type: "certifications",
        intro: {
          es: "La empresa se encuentra certificada bajo las siguientes normas:",
          en: "The company is certified under the following standards:",
        },
        items: [
          {
            name: { es: "Global Gap", en: "Global Gap" },
            detail: { es: "versión 5.2", en: "version 5.2" },
            logo: "cert-globalgap",
          },
          {
            name: { es: "Protocolo global", en: "Global protocol" },
            detail: {
              es: "de buenas prácticas agrícolas",
              en: "of good agricultural practices",
            },
            logo: "cert-bpa",
          },
          {
            name: { es: "FSMA", en: "FSMA" },
            detail: { es: "versión 1.2", en: "version 1.2" },
            logo: "cert-fsma",
          },
        ],
      },
    ],
  },

  /* ------------------------------ NUECES -------------------------- */
  {
    slug: "nueces",
    accent: "nueces",
    name: { es: "Nueces", en: "Walnuts" },
    icon: "icon-nueces",
    slides: ["nueces-slider-1", "nueces-slider-2"],
    blocks: [
      {
        type: "varieties",
        intro: {
          es: "Estamos presentes desde la plantación, producción, cosecha, despelonado y secado, garantizando así una excelente calidad final. Además seguimos el proceso completo con moderna tecnología que complementa nuestro trabajo.",
          en: "We are present from planting, production, harvest, hulling and drying, guaranteeing an excellent final quality. We also follow the entire process with modern technology that complements our work.",
        },
        items: ["Chandler"],
      },
      {
        type: "availability",
        scientificName: "Juglans Regia",
        monthsActive: [4, 5, 6, 7],
        image: "nueces-disponibilidad",
      },
      {
        type: "imageBand",
        image: "nueces-banda-1",
        alt: { es: "Nogal con frutos", en: "Walnut tree with fruit" },
      },
      {
        type: "nutrition",
        image: "nueces-nutricion",
        rows: [
          row("Vitamina A", "Vitamin A", "130 µg", "130 µg"),
          row("Vitamina C", "Vitamin C", "6,3 mg", "6.3 mg"),
          row("Calcio", "Calcium", "73 mg", "73 mg"),
          row("Vitamina E", "Vitamin E", "2,92 mg", "2.92 mg"),
          row("Hierro", "Iron", "2,4 mg", "2.4 mg"),
          row("Vitamina B6", "Vitamin B6", "0,563 mg", "0.563 mg"),
          row("Magnesio", "Magnesium", "142 mg", "142 mg"),
          row("Fósforo", "Phosphorus", "277 mg", "277 mg"),
          row("Potasio", "Potassium", "603 mg", "603 mg"),
          row("Zinc", "Zinc", "2,45 mg", "2.45 mg"),
        ],
      },
      {
        type: "energy",
        image: "nueces-energia",
        rows: [
          row("Calorías", "Calories", "740 kcal", "740 kcal"),
          row("Ácido graso saturado", "Saturated fat", "65,2 gr", "65.2 g"),
          row("Colesterol", "Cholesterol", "0 mg", "0 mg"),
          row("Sodio", "Sodium", "0 mg", "0 mg"),
          row("Glúcidos", "Carbohydrates", "Azúcar 4,34 g", "Sugar 4.34 g"),
          row("Proteína", "Protein", "14,9 gr", "14.9 g"),
          row("Fibra", "Fiber", "9,6 g", "9.6 g"),
        ],
      },
      {
        type: "process",
        image: "nueces-banda-2",
        items: [
          {
            title: { es: "Línea de limpieza", en: "Cleaning line" },
            text: {
              es: "Tenemos una línea de proceso con la mejor tecnología y una producción de 15.000 kg por hora, lo que asegura capacidad para la totalidad de la fruta cosechada diariamente. Esta línea incluye selección óptica y manual para asegurar un producto de la mejor calidad.",
              en: "We have a processing line with the best technology and an output of 15,000 kg per hour, ensuring capacity for all the fruit harvested daily. The line includes optical and manual sorting to ensure a top-quality product.",
            },
          },
          {
            title: { es: "Secado de fruta", en: "Fruit drying" },
            text: {
              es: "Contamos con capacidad de secado de 40 bins, de 5.000 kgs cada uno, controlados por sistema automático de control de humedad, lo que nos permite tiempos eficientes de secado y asegurar que la calidad de nuestra fruta permanezca en el tiempo.",
              en: "We have drying capacity for 40 bins of 5,000 kg each, controlled by an automatic humidity-control system, giving us efficient drying times and ensuring our fruit\u2019s quality lasts over time.",
            },
          },
        ],
      },
    ],
  },

  /* ----------------------------- AVELLANAS ------------------------ */
  {
    slug: "avellanas",
    accent: "avellanas",
    name: { es: "Avellanas", en: "Hazelnuts" },
    icon: "icon-avellanas",
    slides: ["avellanas-slider-1", "avellanas-slider-2"],
    blocks: [
      {
        type: "varieties",
        intro: {
          es: "Contamos con un lugar privilegiado de tierra y temperatura, lo que nos permite lograr un producto de excelentes condiciones en término de color y tamaño.",
          en: "We have a privileged location of soil and temperature, which lets us achieve a product in excellent condition in terms of color and size.",
        },
        items: ["Tonda Di Giffoni", "Barcelona", "Yamhill"],
      },
      {
        type: "availability",
        scientificName: "Corylus Avellana",
        monthsActive: [3, 4],
        image: "avellanas-disponibilidad",
      },
      {
        type: "imageBand",
        image: "avellanas-banda-1",
        alt: { es: "Avellanas en bol", en: "Hazelnuts in a bowl" },
      },
      {
        type: "nutrition",
        image: "avellanas-nutricion",
        rows: [
          row("Vitamina A", "Vitamin A", "1 µg", "1 µg"),
          row("Vitamina C", "Vitamin C", "6,3 mg", "6.3 mg"),
          row("Calcio", "Calcium", "114 mg", "114 mg"),
          row("Vitamina E", "Vitamin E", "15,03 mg", "15.03 mg"),
          row("Vitamina K", "Vitamin K", "14,2 µg", "14.2 µg"),
          row("Hierro", "Iron", "4,70 mg", "4.70 mg"),
          row("Vitamina B6", "Vitamin B6", "0,563 mg", "0.563 mg"),
          row("Magnesio", "Magnesium", "163 mg", "163 mg"),
          row("Fósforo", "Phosphorus", "290 mg", "290 mg"),
          row("Potasio", "Potassium", "680 mg", "680 mg"),
          row("Zinc", "Zinc", "2,45 mg", "2.45 mg"),
        ],
      },
      {
        type: "energy",
        image: "avellanas-energia",
        rows: [
          row("Calorías", "Calories", "629 kcal", "629 kcal"),
          row("Ácido graso saturado", "Saturated fat", "60,75 gr", "60.75 g"),
          row("Colesterol", "Cholesterol", "0 mg", "0 mg"),
          row("Sodio", "Sodium", "0 mg", "0 mg"),
          row("Glúcidos", "Carbohydrates", "Azúcar 4,34 g", "Sugar 4.34 g"),
          row("Proteína", "Protein", "14,95 gr", "14.95 g"),
        ],
      },
      {
        type: "process",
        image: "avellanas-banda-2",
        items: [
          {
            title: { es: "Limpieza y secado", en: "Cleaning and drying" },
            text: {
              es: "Nuestra línea de proceso cuenta con la mejor tecnología y con capacidad para 15.000 kg por hora, lo que asegura la capacidad para la totalidad de la fruta cosechada diariamente.",
              en: "Our processing line features the best technology with a capacity of 15,000 kg per hour, ensuring capacity for all the fruit harvested daily.",
            },
          },
        ],
      },
    ],
  },

  /* ------------------------------ CEREZAS ------------------------- */
  {
    slug: "cerezas",
    accent: "cerezas",
    name: { es: "Cerezas", en: "Cherries" },
    icon: "icon-cerezas",
    slides: [
      "cerezas-slider-1",
      "cerezas-slider-2",
      "cerezas-slider-3",
      "cerezas-slider-4",
    ],
    blocks: [
      {
        type: "varieties",
        intro: {
          es: "Nuestras tierras cuentan con excelentes condiciones para cosechar un producto con el sabor, color y tamaño perfecto.",
          en: "Our lands offer excellent conditions to harvest a product with the perfect flavor, color and size.",
        },
        items: ["Lapins", "Regina", "Skeena", "Staccato"],
      },
      // Disponibilidad confirmada por screenshot: solo ene + dic.
      {
        type: "availability",
        scientificName: "Prunus Avium",
        monthsActive: [1, 12],
        image: "cerezas-disponibilidad",
      },
      {
        type: "imageBand",
        image: "cerezas-banda-1",
        alt: { es: "Cerezos con fruta", en: "Cherry trees with fruit" },
      },
      {
        type: "nutrition",
        image: "cerezas-nutricion",
        rows: [
          row("Vitamina A", "Vitamin A", "1.283 IU", "1,283 IU"),
          row("Vitamina C", "Vitamin C", "10 mg", "10 mg"),
          row("Calcio", "Calcium", "16 mg", "16 mg"),
          row("Vitamina D", "Vitamin D", "0 IU", "0 IU"),
          row("Hierro", "Iron", "0,3 mg", "0.3 mg"),
          row("Vitamina B6", "Vitamin B6", "0 mg", "0 mg"),
          row("Magnesio", "Magnesium", "9 mg", "9 mg"),
        ],
      },
      {
        type: "energy",
        image: "cerezas-energia",
        rows: [
          row("Calorías", "Calories", "50 kcal", "50 kcal"),
          row(
            "Lípidos",
            "Fats",
            "Saturado 0,1 g · Poliinsaturado 0,1 g · Monoinsaturado 0,1 g",
            "Saturated 0.1 g · Polyunsaturated 0.1 g · Monounsaturated 0.1 g",
          ),
          row("Colesterol", "Cholesterol", "0 mg", "0 mg"),
          row("Sodio", "Sodium", "3 mg", "3 mg"),
          row("Potasio", "Potassium", "173 mg", "173 mg"),
          row(
            "Glúcidos",
            "Carbohydrates",
            "Fibra 1,6 g · Azúcar 8 g",
            "Fiber 1.6 g · Sugar 8 g",
          ),
          row("Proteína", "Protein", "1 g", "1 g"),
        ],
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
