// Builds logo variants from the ORIGINAL logo. Artwork is never redrawn or stretched:
// we only trim empty transparent margin and (for dark backgrounds) recolour black to ivory.
import sharp from 'sharp';
const src = 'scripts/logo-original.png';
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
  if (data[(y * info.width + x) * 4 + 3] > 8) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
}
const pad = 6;
const box = { left: minX - pad, top: minY - pad, width: maxX - minX + 1 + pad * 2, height: maxY - minY + 1 + pad * 2 };
const trimmed = await sharp(src).extract(box).png().toBuffer();
await sharp(trimmed).toFile('public/brand/dm-interior-logo-dark.png');
// Light variant: same shape (alpha untouched), colour changed to Warm Ivory for dark backgrounds
const t = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < t.data.length; i += 4) { t.data[i] = 247; t.data[i + 1] = 244; t.data[i + 2] = 239; }
await sharp(t.data, { raw: t.info }).png().toFile('public/brand/dm-interior-logo-light.png');
// Favicons: original logo on Warm Ivory tile, scaled proportionally
for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png'], [512, 'icon-512.png']]) {
  const inner = Math.round(size * 0.78);
  const logo = await sharp(trimmed).resize(inner, inner, { fit: 'inside' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#F7F4EF' } })
    .composite([{ input: logo, gravity: 'center' }]).png().toFile(`public/${name}`);
}
console.log('trimmed size', box.width, 'x', box.height);
