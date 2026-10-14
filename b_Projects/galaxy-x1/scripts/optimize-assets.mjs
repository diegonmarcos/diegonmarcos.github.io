#!/usr/bin/env node
// Mesh/texture-split pipeline (authoring-time, NOT part of the site build).
// For every model in the catalog it emits an optimized, SEPARATED asset:
//   assets/models-opt/<id>.gltf  + <id>.bin (Draco geometry)  + external textures
// so the blank mesh and its material set download/cache independently and can be
// re-skinned — the reuse story for the marketplace.
//
// Requires network (npx fetches the CLI once). Run: node scripts/optimize-assets.mjs
// Optional: add `--texture-compress webp` / `--compress draco` flags are already on.
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(readFileSync(resolve(root, 'src/lib/data/assets.json'), 'utf8'));
const outDir = resolve(root, 'static/assets/models-opt');
mkdirSync(outDir, { recursive: true });

let done = 0, skipped = 0, failed = 0;
for (const m of catalog.models) {
  const inFile = resolve(root, 'static', m.mesh);
  if (!existsSync(inFile)) { console.warn(`skip ${m.id}: ${m.mesh} missing`); skipped++; continue; }
  const outFile = resolve(outDir, `${m.id}.gltf`); // .gltf → external .bin + textures (separated)
  console.log(`▶ ${m.id} → models-opt/${m.id}.gltf`);
  const r = spawnSync(
    'npx',
    ['--yes', '@gltf-transform/cli', 'optimize', inFile, outFile, '--compress', 'draco', '--texture-compress', 'webp'],
    { stdio: 'inherit' }
  );
  if (r.status === 0) done++; else { console.error(`✗ ${m.id} failed`); failed++; }
}
console.log(`\n${done} optimized, ${skipped} skipped, ${failed} failed → static/assets/models-opt/`);
console.log('Then point assets.json `mesh` paths at models-opt/<id>.gltf to ship the separated assets.');
process.exit(failed ? 1 : 0);
