const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/assets/home-assets/properties');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

async function processImages() {
  console.log('Optimizing images in:', dir);
  for (const f of files) {
    const inputPath = path.join(dir, f);
    const inputBuffer = fs.readFileSync(inputPath);
    const meta = await sharp(inputBuffer).metadata();
    const oldSize = inputBuffer.length;
    console.log(`Original: ${f} (${meta.width}x${meta.height}, ${(oldSize / 1024).toFixed(1)} KB)`);
    const buffer = await sharp(inputBuffer)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toBuffer();

    fs.writeFileSync(inputPath, buffer);
    const newMeta = await sharp(buffer).metadata();
    console.log(`Optimized: ${f} (${newMeta.width}x${newMeta.height}, ${(buffer.length / 1024).toFixed(1)} KB)`);
  }
  console.log('Done optimizing properties images.');
}

processImages().catch(err => {
  console.error('Error during optimization:', err);
  process.exit(1);
});
