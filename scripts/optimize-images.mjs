import fs from "node:fs";
import path from "node:path";

async function run() {
  let sharp;
  try {
    const sharpModule = await import("sharp");
    sharp = sharpModule.default || sharpModule;
  } catch (err) {
    const optDir = path.join(process.cwd(), "public", "images", "opt");
    if (fs.existsSync(optDir) && fs.readdirSync(optDir).length > 0) {
      console.warn("sharp is not available, but optimized images already exist in public/images/opt. Skipping image optimization.");
      process.exit(0);
    }
    console.error("sharp is required for image optimization:", err.message);
    process.exit(1);
  }

  const rootDir = process.cwd();
  const publicDir = path.join(rootDir, "public");
  const imagesDir = path.join(publicDir, "images");
  const optDir = path.join(imagesDir, "opt");

  if (!fs.existsSync(optDir)) {
    fs.mkdirSync(optDir, { recursive: true });
  }

  // 1. Optimize logos if needed (> 15 KB)
  const logoPath = path.join(publicDir, "logo.png");
  if (fs.existsSync(logoPath)) {
    const stat = fs.statSync(logoPath);
    if (stat.size > 15 * 1024) {
      console.log(`Optimizing logo.png (${(stat.size / 1024).toFixed(1)} KB)...`);
      const srcBuf = fs.readFileSync(logoPath);
      const buf = await sharp(srcBuf)
        .resize({ width: 320, withoutEnlargement: true })
        .png({ palette: true, quality: 90, compressionLevel: 9 })
        .toBuffer();
      fs.writeFileSync(logoPath, buf);
      console.log(`-> logo.png optimized to ${(buf.length / 1024).toFixed(1)} KB`);
    }
  }

  const logoWhitePath = path.join(publicDir, "logo-white.png");
  if (fs.existsSync(logoWhitePath)) {
    const stat = fs.statSync(logoWhitePath);
    if (stat.size > 15 * 1024) {
      console.log(`Optimizing logo-white.png (${(stat.size / 1024).toFixed(1)} KB)...`);
      const srcBuf = fs.readFileSync(logoWhitePath);
      const buf = await sharp(srcBuf)
        .resize({ width: 320, withoutEnlargement: true })
        .png({ palette: true, quality: 90, compressionLevel: 9 })
        .toBuffer();
      fs.writeFileSync(logoWhitePath, buf);
      console.log(`-> logo-white.png optimized to ${(buf.length / 1024).toFixed(1)} KB`);
    }
  }

  // 2. Optimize og-image.jpg if needed (> 150 KB or not 1200x630)
  const ogPath = path.join(publicDir, "og-image.jpg");
  if (fs.existsSync(ogPath)) {
    const stat = fs.statSync(ogPath);
    const srcBuf = fs.readFileSync(ogPath);
    const meta = await sharp(srcBuf).metadata();
    if (stat.size > 150 * 1024 || meta.width !== 1200 || meta.height !== 630) {
      console.log(`Optimizing og-image.jpg (${(stat.size / 1024).toFixed(1)} KB, ${meta.width}x${meta.height})...`);
      const buf = await sharp(srcBuf)
        .resize(1200, 630, { fit: "cover" })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
      fs.writeFileSync(ogPath, buf);
      console.log(`-> og-image.jpg optimized to ${(buf.length / 1024).toFixed(1)} KB (1200x630)`);
    }
  }

  // 3. Process each JPG in public/images/*.jpg
  const files = fs.readdirSync(imagesDir).filter((f) => f.toLowerCase().endsWith(".jpg"));
  const widths = [640, 1080, 1920];

  let generatedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const srcPath = path.join(imagesDir, file);
    const baseName = path.parse(file).name;
    const srcStat = fs.statSync(srcPath);

    for (const w of widths) {
      const destFile = `${baseName}-${w}.webp`;
      const destPath = path.join(optDir, destFile);

      if (fs.existsSync(destPath)) {
        const destStat = fs.statSync(destPath);
        if (destStat.mtimeMs > srcStat.mtimeMs) {
          skippedCount++;
          continue;
        }
      }

      let quality = 72;
      let buf = await sharp(srcPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toBuffer();

      // Check size budget
      // 1920 hero: <= 180 KB, 640 card: <= 45 KB
      if (w === 1920 && buf.length > 180 * 1024) {
        quality = 65;
        buf = await sharp(srcPath)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality, effort: 5 })
          .toBuffer();
      } else if (w === 640 && buf.length > 45 * 1024) {
        quality = 65;
        buf = await sharp(srcPath)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality, effort: 5 })
          .toBuffer();
      }

      fs.writeFileSync(destPath, buf);
      generatedCount++;
    }
  }

  console.log(`Image optimization complete: ${generatedCount} generated, ${skippedCount} skipped (up-to-date).`);
}

run().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
