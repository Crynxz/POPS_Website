
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'client/public/assets');
const files = fs.readdirSync(assetsDir);

async function convertImages() {
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(assetsDir, file);
      const filename = path.parse(file).name;
      
      console.log(`Processing ${file}...`);

      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, `${filename}.webp`));
      console.log(`Generated ${filename}.webp`);

      // Convert to AVIF
      await sharp(inputPath)
        .avif({ quality: 70 })
        .toFile(path.join(assetsDir, `${filename}.avif`));
      console.log(`Generated ${filename}.avif`);
    }
  }
}

convertImages().catch(console.error);
