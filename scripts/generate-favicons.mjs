/**
 * Script para generar favicons multi-formato desde portfolio.svg
 * Ejecutar: node scripts/generate-favicons.mjs
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');
const svgPath = resolve(publicDir, 'portfolio.svg');

async function generateFavicons() {
  const svgBuffer = readFileSync(svgPath);

  // apple-touch-icon.png (180x180)
  await sharp(svgBuffer, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(resolve(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180)');

  // favicon-192.png (192x192) — Android/PWA
  await sharp(svgBuffer, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile(resolve(publicDir, 'favicon-192.png'));
  console.log('✅ favicon-192.png (192x192)');

  // favicon-512.png (512x512) — Android/PWA
  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512)
    .png()
    .toFile(resolve(publicDir, 'favicon-512.png'));
  console.log('✅ favicon-512.png (512x512)');

  // favicon.ico — creado como PNG 32x32 empaquetado en ICO
  // ICO es simplemente un contenedor; generamos el PNG de 32x32
  const png32 = await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toBuffer();

  // Construir archivo ICO manualmente (formato BMP dentro de ICO)
  const ico = createIco(png32, 32, 32);
  writeFileSync(resolve(publicDir, 'favicon.ico'), ico);
  console.log('✅ favicon.ico (32x32)');

  console.log('\n🎉 Todos los favicons generados en /public/');
}

/**
 * Crea un archivo ICO con un único PNG embebido
 */
function createIco(pngBuffer, width, height) {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // Reserved
  header.writeUInt16LE(1, 2);     // Type: 1 = ICO
  header.writeUInt16LE(1, 4);     // Number of images

  // ICO directory entry: 16 bytes
  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);    // Width
  entry.writeUInt8(height >= 256 ? 0 : height, 1);  // Height
  entry.writeUInt8(0, 2);                            // Color palette
  entry.writeUInt8(0, 3);                            // Reserved
  entry.writeUInt16LE(1, 4);                         // Color planes
  entry.writeUInt16LE(32, 6);                        // Bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);          // Size of PNG data
  entry.writeUInt32LE(6 + 16, 12);                   // Offset to PNG data

  return Buffer.concat([header, entry, pngBuffer]);
}

generateFavicons().catch(console.error);
