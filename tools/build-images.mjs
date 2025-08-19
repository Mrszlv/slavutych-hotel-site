// tools/build-images.mjs
import fg from "fast-glob";
import path from "node:path";
import { promises as fs } from "node:fs";
import sharp from "sharp";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminAvif from "imagemin-avif";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

const SRC_DIR = "public/images-src";
const OUT_DIR = "public/images";

// які розміри робимо (підключатимеш як 768 / 1280 / 1920)
const SIZES = [768, 1280, 1920];

// які розширення брати з каталогу з оригіналами
const PATTERN = `${SRC_DIR}/**/*.{jpg,jpeg,png}`;

await fs.mkdir(OUT_DIR, { recursive: true });

/** Компресія "оригіналу" (jpeg/png) після ресайзу */
async function compressOriginal(inputPath, width) {
  const ext = path.extname(inputPath).toLowerCase();
  const base = path.basename(inputPath, ext);
  const outName = `${base}-${width}${ext === ".png" ? ".png" : ".jpg"}`;
  const outPath = path.join(OUT_DIR, outName);

  let img = sharp(inputPath).resize({ width, withoutEnlargement: true });

  if (ext === ".png") {
    await img.png({ compressionLevel: 9 }).toFile(outPath);
    await imagemin([outPath], {
      destination: OUT_DIR,
      plugins: [imageminPngquant({ quality: [0.6, 0.8] })],
    });
  } else {
    await img.jpeg({ quality: 78, mozjpeg: true }).toFile(outPath);
    await imagemin([outPath], {
      destination: OUT_DIR,
      plugins: [imageminMozjpeg({ quality: 75 })],
    });
  }

  return outPath;
}

/** Створення WebP */
async function toWebp(inputPath, width) {
  const base = path.basename(inputPath, path.extname(inputPath));
  const outPath = path.join(OUT_DIR, `${base}-${width}.webp`);
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outPath);
  await imagemin([outPath], {
    destination: OUT_DIR,
    plugins: [imageminWebp({ quality: 75 })],
  });
  return outPath;
}

/** Створення AVIF */
async function toAvif(inputPath, width) {
  const base = path.basename(inputPath, path.extname(inputPath));
  const outPath = path.join(OUT_DIR, `${base}-${width}.avif`);
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 50, speed: 6 })
    .toFile(outPath);
  await imagemin([outPath], {
    destination: OUT_DIR,
    plugins: [imageminAvif({ quality: 50 })],
  });
  return outPath;
}

const files = await fg(PATTERN);
if (files.length === 0) {
  console.log("⏭️  Нема зображень у public/images-src");
  process.exit(0);
}

for (const file of files) {
  for (const w of SIZES) {
    const [orig, webp, avif] = await Promise.all([
      compressOriginal(file, w),
      toWebp(file, w),
      toAvif(file, w),
    ]);
    console.log(
      "✅",
      path.basename(orig),
      path.basename(webp),
      path.basename(avif)
    );
  }
}

console.log("\n🎉 Зображення згенеровано у", OUT_DIR);
