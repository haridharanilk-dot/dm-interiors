import sharp from 'sharp';
const logo = await sharp('public/brand/dm-interior-logo-light.png').resize({ height: 300 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#3E362E' } }).composite([{ input: logo, gravity: 'center' }]).png().toFile('public/og-image.png');
