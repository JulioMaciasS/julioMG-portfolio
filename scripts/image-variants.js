/* Responsive image variants for the screenshots and photos in public/images.
 *
 * For every JPEG/PNG at least 500px wide, writes WebP copies at 400, 800 and
 * 1600px wide (only the sizes smaller than the original) next to it, as
 * `<name>-<width>.webp`, and records them in src/data/imageVariants.json so
 * components can offer them through srcSet (see src/utils/responsiveImage.js).
 * Tech logos are only ever shown as small icons, so they are shrunk in place
 * to 128px instead. Safe to re-run after adding images.
 *
 * Run with:  node scripts/image-variants.js   (requires ImageMagick's `magick`)
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PUBLIC = path.join(__dirname, '..', 'public');
const IMAGES = path.join(PUBLIC, 'images');
const LOGOS = path.join(IMAGES, 'logos');
const MANIFEST = path.join(__dirname, '..', 'src', 'data', 'imageVariants.json');
const WIDTHS = [400, 800, 1600];
const MIN_WIDTH = 500;
const LOGO_SIZE = 128;
const RASTER = /\.(jpe?g|png)$/i;

const identify = (file) => {
  const [w, h] = execFileSync('magick', ['identify', '-format', '%w %h', `${file}[0]`]).toString().split(' ').map(Number);
  return { w, h };
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return full === LOGOS ? [] : walk(full);
    return RASTER.test(entry.name) ? [full] : [];
  });
}

// Screenshots and photos: WebP copies at the widths below the original.
const manifest = {};
for (const file of walk(IMAGES).sort()) {
  const { w } = identify(file);
  if (w < MIN_WIDTH) continue;
  const widths = WIDTHS.filter((width) => width < w);
  for (const width of widths) {
    const out = file.replace(RASTER, `-${width}.webp`);
    if (!fs.existsSync(out)) {
      execFileSync('magick', [file, '-resize', `${width}x`, '-quality', '72', out]);
    }
  }
  manifest['/' + path.relative(PUBLIC, file).split(path.sep).join('/')] = { width: w, variants: widths };
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');

// Logos: shrink oversized icons in place, keeping their names and formats.
for (const file of fs.readdirSync(LOGOS).filter((name) => RASTER.test(name))) {
  const full = path.join(LOGOS, file);
  const { w, h } = identify(full);
  if (Math.max(w, h) > LOGO_SIZE) {
    execFileSync('magick', [full, '-resize', `${LOGO_SIZE}x${LOGO_SIZE}>`, '-strip', full]);
  }
}

console.log(`Variants for ${Object.keys(manifest).length} images; logos capped at ${LOGO_SIZE}px.`);
