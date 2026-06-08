/* Brand asset generator for the "Julio Macias" / "JM" identity.
 *
 * Produces every favicon / PWA / Open Graph image from a single source of truth
 * (the JM initials + wordmark set in Space Grotesk) so they all stay consistent.
 * Run with:  node scripts/gen-brand-assets.js
 *
 * Requires devDependencies: sharp, png-to-ico. The Space Grotesk TTF is vendored
 * in scripts/fonts and registered with fontconfig at runtime, so output is
 * reproducible without any system font setup.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');
const pngToIcoMod = require('png-to-ico');
const pngToIco = typeof pngToIcoMod === 'function' ? pngToIcoMod : pngToIcoMod.default;

const OUT = path.join(__dirname, '..', 'public');
const CHARCOAL = '#1a1717';
const CHARCOAL_2 = '#242424';
const WHITE = '#ffffff';
const FONT = 'Space Grotesk';

// --- Make the vendored font available to librsvg/pango via fontconfig ---------
function registerFont() {
  const fontsDir = path.join(os.homedir(), '.fonts');
  fs.mkdirSync(fontsDir, { recursive: true });
  fs.copyFileSync(
    path.join(__dirname, 'fonts', 'SpaceGrotesk.ttf'),
    path.join(fontsDir, 'SpaceGrotesk.ttf')
  );
  try { execSync('fc-cache -f', { stdio: 'ignore' }); } catch (_) {}
}

// --- SVG building blocks ------------------------------------------------------
// "JM" initials, white on a charcoal rounded square. Single source for all icons.
function tileSVG(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="${CHARCOAL}"/>
    <text x="32" y="44" text-anchor="middle" font-family="${FONT}" font-size="30"
          font-weight="700" letter-spacing="0.5" fill="${WHITE}">JM</text>
  </svg>`;
}

// 1200x630 Open Graph / social share banner.
function ogSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${CHARCOAL}"/>
        <stop offset="1" stop-color="${CHARCOAL_2}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <!-- JM tile -->
    <g transform="translate(80 70)"><svg width="104" height="104" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#000000"/>
      <text x="32" y="44" text-anchor="middle" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="0.5" fill="${WHITE}">JM</text>
    </svg></g>
    <!-- Wordmark + taglines -->
    <text x="82" y="360" font-family="${FONT}" font-size="92" font-weight="700" fill="${WHITE}">Julio Macias</text>
    <text x="84" y="424" font-family="${FONT}" font-size="38" font-weight="500" fill="#d6d6d6">Software Engineer &amp; Consultant</text>
    <rect x="84" y="456" width="64" height="4" rx="2" fill="#5c5c5c"/>
    <text x="84" y="510" font-family="${FONT}" font-size="27" font-weight="400" fill="#8a8a8a">React · TypeScript · AWS · Cloud Architecture</text>
  </svg>`;
}

async function renderPng(svg, size, file) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(path.join(OUT, file));
  console.log('  ✓', file);
}

(async () => {
  registerFont();
  console.log('Generating brand assets →', OUT);

  // Favicons (render at exact target size for crisp text)
  await renderPng(tileSVG(16), 16, 'favicon-16x16.png');
  await renderPng(tileSVG(32), 32, 'favicon-32x32.png');
  await renderPng(tileSVG(180), 180, 'apple-touch-icon.png');
  await renderPng(tileSVG(192), 192, 'logo192.png');
  await renderPng(tileSVG(512), 512, 'logo512.png');

  // Multi-resolution .ico (16/32/48)
  const icoBuffers = await Promise.all(
    [16, 32, 48].map((s) => sharp(Buffer.from(tileSVG(s))).resize(s, s).png().toBuffer())
  );
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), await pngToIco(icoBuffers));
  console.log('  ✓ favicon.ico (16/32/48)');

  // Open Graph banner
  await sharp(Buffer.from(ogSVG())).png().toFile(path.join(OUT, 'og-image.png'));
  console.log('  ✓ og-image.png (1200x630)');

  console.log('Done.');
})();
