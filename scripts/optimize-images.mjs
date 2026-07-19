// One-off image optimizer: resize + recompress in place (same filename/format).
// Run: node scripts/optimize-images.mjs
import { readdir, stat, rename } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const SKIP = new Set(["logo.png"]); // keep the logo pixel-crisp

// Max display width. OG/social images only need ~1200px.
const maxWidthFor = (name) => (name.startsWith("og-") ? 1200 : 2000);

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
    const img = sharp(path, { failOn: "none" });
    const meta = await img.metadata();
    const maxW = maxWidthFor(file);
    const pipeline = sharp(path, { failOn: "none" }).rotate();

    if (meta.width && meta.width > maxW) {
      pipeline.resize({ width: maxW, withoutEnlargement: true });
    }

    if (ext === ".png") {
      pipeline.png({ quality: 80, compressionLevel: 9, palette: true, effort: 8 });
    } else {
      pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true });
    }

    const tmp = join(DIR, `.tmp-${basename(file)}`);
    await pipeline.toFile(tmp);
    const newSize = (await stat(tmp)).size;

    // Only replace if smaller
    if (newSize < orig) {
      await rename(tmp, path);
      after += newSize;
      changed++;
      console.log(`✓ ${file}  ${(orig / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB`);
    } else {
      await rename(tmp, path).catch(() => {});
      const { unlink } = await import("node:fs/promises");
      await unlink(path === tmp ? tmp : join(DIR, `.tmp-${basename(file)}`)).catch(() => {});
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
