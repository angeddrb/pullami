# Manifiesto de assets — Pullami

El proyecto es **100% drop-in**: pones el archivo con el nombre exacto en la
carpeta indicada, corres `npm run build`, y aparece optimizado reemplazando al
placeholder. No hay que tocar código.

## Reglas de oro

| Tipo | Carpeta | Qué pasa |
|---|---|---|
| Imágenes (jpg/png) | **`src/assets/`** (cualquier subcarpeta) | se convierten solas a WebP responsive |
| Íconos/logos (svg) | **`src/assets/`** | se resuelven solos por nombre |
| Videos (mp4) | **`public/uploads/video/`** | se sirven tal cual (comprímelos antes, ver abajo) |

- El nombre del placeholder en pantalla = el nombre exacto del archivo.
- Minúsculas, sin espacios, sin acentos. La subcarpeta dentro de `src/assets/`
  da lo mismo (busca por nombre, no por ruta).

---

## Home  ✅ (ya cargado)

`producto-{fruta}` · `galeria-1..12` · `seguridad` · video `pullami-hero.mp4` +
`pullami-poster.webp` · `hojas.png`.

## Fichas de producto — drop-in

Reemplaza `{fruta}` por `arandanos`, `nueces`, `avellanas`, `cerezas`.
Todo esto aparece solo al dejarlo en `src/assets/`:

| Archivo | Qué es |
|---|---|
| `{fruta}-slider-1`, `{fruta}-slider-2`… | slides del hero (arándanos 2, cerezas 4, etc.) |
| `icon-{fruta}.svg` | ícono blanco de línea del hero |
| `{fruta}-disponibilidad` | recorte de fruta junto al calendario |
| `{fruta}-nutricion` | foto junto a Valores Nutricionales |
| `{fruta}-energia` | foto junto a Valores Energéticos |

**Solo Arándanos:** `world-map` (silueta del mapa) · `cert-globalgap`, `cert-bpa`, `cert-fsma` (logos, png)
**Solo Nueces:** `nueces-banda-1`, `nueces-banda-2`
**Solo Avellanas:** `avellanas-banda-1`, `avellanas-banda-2`
**Solo Cerezas:** `cerezas-banda-1`

## Globales (svg en `src/assets/`)

| Archivo | Qué es |
|---|---|
| `logo_chile.svg` | sello "Chile" del header (hoy es texto de respaldo) |

`logo_pullami.svg` ya está en `public/`. El favicon lo pones tú.

---

## Videos — comprime antes de ponerlos

```bash
# fondo sin audio, 1024px, 24fps
ffmpeg -y -i ORIGINAL.mp4 -an -vf "scale=1024:-2,fps=24" \
  -c:v libx264 -crf 32 -preset faster -movflags +faststart -pix_fmt yuv420p \
  public/uploads/video/SALIDA.mp4

# poster (frame del seg. 3) en webp
ffmpeg -y -ss 3 -i ORIGINAL.mp4 -frames:v 1 -c:v libwebp -quality 70 \
  public/uploads/video/SALIDA-poster.webp
```

---

## Cómo sumar/quitar secciones de una ficha

En `src/data/products.ts`, cada producto tiene un arreglo `blocks` con secciones
reutilizables: `varieties · availability · markets · nutrition · energy ·
process · certifications · imageBand`. Copias el bloque de otra fruta, cambias
los datos y lo agregas en el orden que quieras. Si falta info, lo dejas afuera.
