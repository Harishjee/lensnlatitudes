// Image optimizer: resize + recompress in place at HIGH quality (photography site).
// Run: node scripts/optimize-images.mjs
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const SKIP = new Set(["logo.png"]);

// Full-bleed heroes need more resolution; social/OG cards need less.
const maxWidthFor = (name) => (name.startsWith("og-") ? 1200 : 2400);
const JPEG_QUALITY = 88;

const files = await readdir(DIR);
let before = 0, after = 0, changed = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!/\.(jpe?g|png)$/.test(ext)) continue;
  if (SKIP.has(file)) continue;

  const path = join(DIR, file);
  const orig = (await stat(path)).size;
  before += orig;

  try {
    const meta = await sharp(path, { failOn: "none" }).metadata();
    const maxW = maxWidthFor(file);
    const pipeline = sharp(path, { failOn: "none" }).rotate();

    if (meta.width && meta.width > maxW) {
      pipeline.resize({ width: maxW, withoutEnlargement: true });
    }

    if (ext === ".png") {
      pipeline.png({ quality: 90, compressionLevel: 9, palette: true, effort: 9 });
    } else {
      pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true, chromaSubsampling: "4:4:4" });
    }

    const tmp = join(DIR, `.tmp-${basename(file)}`);
    await pipeline.toFile(tmp);
    const newSize = (await stat(tmp)).size;

    if (newSize < orig) {
      await rename(tmp, path);
      after += newSize;
      changed++;
      console.log(`✓ ${file}  ${(orig / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`);
    } else {
      await unlink(tmp).catch(() => {});
      after += orig;
    }
  } catch (e) {
    console.warn(`! skipped ${file}: ${e.message}`);
    after += orig;
  }
}

console.log(
  `\nDone. ${changed} files optimized. Total ${(before / 1048576).toFixed(1)}MB → ${(after / 1048576).toFixed(1)}MB`
);
