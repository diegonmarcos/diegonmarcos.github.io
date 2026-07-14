// Contract test for the data-driven night scene (no framework).
// Fails if scene.json drifts from what the components expect, or an asset is missing.
// Run: node test/scene.test.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(resolve(root, 'src/lib/data/scene.json'), 'utf8'));
let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };

// camera spline must be curvy (original 8 control points)
ok(cfg.spline.points.length >= 8, 'spline has >=8 control points (not linear)');
cfg.spline.points.forEach((p, i) => ok(Array.isArray(p) && p.length === 3, `spline.points[${i}] is Vec3`));

// two huge moons
ok(cfg.world.moons.length === 2, 'exactly 2 moons');
cfg.world.moons.forEach((m, i) => ok(m.radius >= 50, `moon[${i}] is huge (r>=50): ${m.radius}`));

// night config present (no daytime HDRI)
ok(!!cfg.night && !!cfg.night.moonlight, 'night config present');
ok(!cfg.assets.sky, 'no daytime HDRI sky asset');

// every cube: 6 faces, each label+url (per-face links)
cfg.cubes.forEach((c, i) => {
  ok(c.faces.length === 6, `cube[${i}] has 6 faces`);
  c.faces.forEach((f, j) => ok(!!f.label && !!f.url, `cube[${i}].faces[${j}] has label+url`));
});

// counts positive
for (const k of ['stars', 'trees', 'rabbits', 'birds']) ok(cfg.world[k].count > 0, `world.${k}.count > 0`);

// referenced assets exist on disk
const assets = [
  cfg.assets.ground.map, cfg.assets.ground.normal, cfg.assets.ground.rough, cfg.assets.waterNormals,
  cfg.assets.models.rabbit, cfg.assets.models.bird
];
assets.forEach((a) => ok(existsSync(resolve(root, 'static', a)), `asset exists: static/${a}`));

if (failed) { console.error(`\n${failed} check(s) failed`); process.exit(1); }
const faces = cfg.cubes.reduce((n, c) => n + c.faces.length, 0);
console.log(`✓ scene OK — night, 2 moons, ${cfg.spline.points.length}-pt spline, ${cfg.cubes.length} cubes/${faces} faces, ${assets.length} assets`);
