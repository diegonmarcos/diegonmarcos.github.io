// Minimal contract test for the data-driven scene (no framework).
// Fails if scene.json drifts from what the modules expect, or an asset is missing.
// Run: node test/scene.test.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(resolve(root, 'src/lib/data/scene.json'), 'utf8'));
let failed = 0;
const ok = (cond, msg) => { if (!cond) { console.error('✗', msg); failed++; } };

// spline: one point + one look-at per section
ok(cfg.spline.points.length === cfg.spline.sections, 'spline.points length == sections');
ok(cfg.spline.look.length === cfg.spline.sections, 'spline.look length == sections');
cfg.spline.points.forEach((p, i) => ok(Array.isArray(p) && p.length === 3, `spline.points[${i}] is Vec3`));

// cubes: every destination is reachable
cfg.cubes.forEach((c, i) => {
  ok(!!c.label && !!c.url, `cubes[${i}] has label+url`);
  ok(Array.isArray(c.position) && c.position.length === 3, `cubes[${i}].position is Vec3`);
});

// counts are positive integers
for (const k of ['stars', 'trees', 'rabbits', 'birds']) {
  ok(Number.isInteger(cfg.world[k].count) && cfg.world[k].count > 0, `world.${k}.count > 0`);
}

// every referenced asset exists under static/
const assets = [cfg.assets.sky, cfg.assets.ground.map, cfg.assets.ground.normal, cfg.assets.ground.rough, cfg.assets.waterNormals];
assets.forEach((a) => ok(existsSync(resolve(root, 'static', a)), `asset exists: static/${a}`));

if (failed) { console.error(`\n${failed} check(s) failed`); process.exit(1); }
console.log(`✓ scene.json OK — ${assets.length} assets, ${cfg.cubes.length} cubes, ${cfg.spline.sections} sections`);
