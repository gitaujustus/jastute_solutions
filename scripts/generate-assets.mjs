import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), '/public/Assets/services');
const webpDir = path.join(assetsDir, 'webp');
const outputJsonPath = path.join(process.cwd(), 'lib', 'assets.json');

async function processImage(filePath, fileName) {
  const ext = path.extname(fileName);
  const cleanName = fileName.replace(ext, '');
  const outputPath = path.join(webpDir, `${cleanName}.webp`);

  const img = sharp(filePath);
  const metadata = await img.metadata();
  const { width, height } = metadata;

  // convert to webp
  await img.webp({ quality: 85 }).toFile(outputPath);

  return {
    original: `/assets/${fileName}`,
    webp: `/assets/webp/${cleanName}.webp`,
    width,
    height
  };
}

async function run() {
  if (!fs.existsSync(assetsDir)) {
    console.error("The /assets folder does not exist.");
    process.exit(1);
  }

  // create webp folder if missing
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir);
  }

  const files = fs.readdirSync(assetsDir);
  const supported = ['.png', '.jpg', '.jpeg'];

  const results = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!supported.includes(ext)) continue;

    const fullPath = path.join(assetsDir, file);

    console.log("Converting:", file);
    const info = await processImage(fullPath, file);

    results.push(info);
  }

  // ensure /lib exists
  const libDir = path.join(process.cwd(), 'lib');
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir);
  }

  // write json
  fs.writeFileSync(outputJsonPath, JSON.stringify(results, null, 2));

  console.log("Done. Saved to lib/assets.json");
}

run();
