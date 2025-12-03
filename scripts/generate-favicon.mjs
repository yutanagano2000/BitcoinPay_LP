import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateFavicon() {
  const svgPath = join(publicDir, 'favicon.svg');
  const svgBuffer = readFileSync(svgPath);

  // Generate multiple sizes for ICO
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(size =>
      sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Create ICO file
  const icoBuffer = await pngToIco(pngBuffers);
  writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);

  // Also generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  // Generate favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));

  // Generate favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicon().catch(console.error);
