#!/usr/bin/env node
// One-shot image optimizer. Run: `node scripts/optimize-assets.mjs`
// In-place compress JPGs (quality 82, max 1920px wide) and resize PNGs of clients.
// PNGs with transparency we keep as PNG but optimize.

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('public/assets');

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const stats = { skipped: 0, optimized: 0, before: 0, after: 0 };

for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) { stats.skipped++; continue; }

  const buf = await fs.readFile(file);
  const sz = buf.length;
  stats.before += sz;

  const img = sharp(buf, { failOn: 'none' });
  const meta = await img.metadata();

  // Determine output settings per type — sized to actual on-page usage.
  // Service cards: max ~600px wide on mobile, ~1100px on desktop bento → cap 1200.
  // Portfolio: similar usage → 1200.
  // Client logos: max ~180px displayed → cap 320 for retina.
  // Brand logo: max ~60px displayed → cap 200.
  const isClientLogo = file.includes(path.sep + 'clients' + path.sep);
  const isBrandLogo = file.includes(path.sep + 'logo' + path.sep);
  const maxW = isClientLogo ? 320 : isBrandLogo ? 200 : 1200;

  let pipeline = img;
  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize({ width: maxW, withoutEnlargement: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 85, effort: 8 });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 82, effort: 6 });
  }

  const out = await pipeline.toBuffer();
  if (out.length < sz * 0.95) {
    await fs.writeFile(file, out);
    stats.after += out.length;
    stats.optimized++;
    const saved = ((1 - out.length / sz) * 100).toFixed(0);
    const kb = (out.length / 1024).toFixed(0).padStart(5);
    console.log(`✓ ${kb} KB (-${saved}%)  ${path.relative(process.cwd(), file)}`);
  } else {
    stats.after += sz;
    stats.skipped++;
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
console.log(`\nOptimized ${stats.optimized} files, skipped ${stats.skipped}.`);
console.log(`Total: ${mb(stats.before)} MB → ${mb(stats.after)} MB  (-${((1 - stats.after / stats.before) * 100).toFixed(0)}%)`);
