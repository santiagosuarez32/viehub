import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const EXT = [".jpg", ".jpeg", ".png"];

function* walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (EXT.includes(extname(e.name).toLowerCase())) yield full;
  }
}

async function convert(path) {
  const out = path.replace(/\.(jpe?g|png)$/i, ".webp");
  await sharp(path).webp({ quality: 85 }).toFile(out);
  console.log(path, "->", out);
}

const files = [...walk(PUBLIC)];
console.log("Converting", files.length, "images to WebP...");
for (const f of files) {
  try {
    await convert(f);
  } catch (err) {
    console.error("Error:", f, err.message);
  }
}
console.log("Done.");
