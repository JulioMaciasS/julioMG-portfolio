import VARIANTS from '../data/imageVariants.json';

/**
 * `src`, `srcSet` and `sizes` for an <img>, so the browser downloads a WebP
 * copy close to the size it is shown at instead of the full screenshot.
 * The copies come from scripts/image-variants.js; images without them (SVGs,
 * small files) just get their `src`.
 */
export function responsiveImage(src, sizes) {
  const entry = VARIANTS[src];
  if (!entry) return { src };
  const srcSet = entry.variants
    .map((width) => `${src.replace(/\.(jpe?g|png)$/i, `-${width}.webp`)} ${width}w`)
    .concat(`${src} ${entry.width}w`)
    .join(', ');
  return { src, srcSet, sizes };
}
