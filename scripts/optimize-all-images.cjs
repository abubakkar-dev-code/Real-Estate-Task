const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

function getFilesRecursively(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getFilesRecursively(fullPath));
    } else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeAll() {
  const assetsDir = path.join(__dirname, "../src/assets");
  const allImages = getFilesRecursively(assetsDir);

  console.log(
    `\n🚀 Starting Image Optimization (${allImages.length} images found)...\n`,
  );
  let totalSavedBytes = 0;
  let totalOriginalBytes = 0;
  let totalNewBytes = 0;

  for (const file of allImages) {
    const relativePath = path.relative(path.join(__dirname, ".."), file);
    const inputBuffer = fs.readFileSync(file);
    const originalSize = inputBuffer.length;
    totalOriginalBytes += originalSize;

    const meta = await sharp(inputBuffer).metadata();
    const ext = path.extname(file).toLowerCase();
    let maxWidth = 1200;
    let quality = 82;

    if (
      file.includes("Hero") ||
      file.includes("sun-set") ||
      file.includes("Ownership")
    ) {
      maxWidth = 1600;
    } else if (file.includes("properties") || file.includes("villas")) {
      maxWidth = 1200;
    } else {
      maxWidth = 1100;
    }

    let pipeline = sharp(inputBuffer).resize({
      width: Math.min(meta.width || maxWidth, maxWidth),
      withoutEnlargement: true,
    });

    let outputBuffer;
    if (ext === ".png") {
      outputBuffer = await pipeline
        .png({ compressionLevel: 9, quality: 85 })
        .toBuffer();
    } else if (ext === ".webp") {
      outputBuffer = await pipeline
        .webp({ quality: quality, effort: 5 })
        .toBuffer();
    } else {
      outputBuffer = await pipeline
        .jpeg({ quality: quality, mozjpeg: true })
        .toBuffer();
    }
    if (
      outputBuffer.length < originalSize ||
      (meta.width && meta.width > maxWidth)
    ) {
      fs.writeFileSync(file, outputBuffer);
      const newMeta = await sharp(outputBuffer).metadata();
      const saved = originalSize - outputBuffer.length;
      totalSavedBytes += saved;
      totalNewBytes += outputBuffer.length;

      console.log(
        ` ${relativePath}\n` +
          `   Dimensions: ${meta.width}x${meta.height} -> ${newMeta.width}x${newMeta.height}\n` +
          `   Size: ${(originalSize / 1024).toFixed(1)} KB -> ${(outputBuffer.length / 1024).toFixed(1)} KB ` +
          `(${saved > 0 ? "-" + ((saved / originalSize) * 100).toFixed(1) + "%" : "scaled down"})\n`,
      );
    } else {
      totalNewBytes += originalSize;
      console.log(
        `ℹ ${relativePath} is already well-optimized (${(originalSize / 1024).toFixed(1)} KB).\n`,
      );
    }
  }

  console.log("=".repeat(50));
  console.log(` Optimization Complete!`);
  console.log(
    `Original Total: ${(totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`,
  );
  console.log(
    `Optimized Total: ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`,
  );
  console.log(
    `Total Bandwidth Saved: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB`,
  );
  console.log("=".repeat(50));
}

optimizeAll().catch((err) => {
  console.error("Optimization error:", err);
  process.exit(1);
});
