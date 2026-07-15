// Contract test for the data-driven night scene (no framework).
// Fails if scene.json drifts from what the components expect, or an asset is missing.
// Run: node test/scene.test.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(resolve(root, 'src/lib/data/scene.json'), 'utf8'));
const catalog = JSON.parse(readFileSync(resolve(root, 'src/lib/data/assets.json'), 'utf8'));
let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };

// asset catalog integrity (marketplace source of truth): unique ids, files exist, licensed
const ids = new Set();
for (const m of catalog.models) {
  ok(!ids.has(m.id), `catalog model id unique: ${m.id}`); ids.add(m.id);
  ok(existsSync(resolve(root, 'static', m.mesh)), `catalog mesh exists: ${m.mesh}`);
  ok(!!m.license && !!m.author && !!m.source, `catalog ${m.id} has license/author/source`);
}
for (const t of catalog.textureSets)
  for (const [k, p] of Object.entries(t.textures))
    ok(existsSync(resolve(root, 'static', p)), `catalog texture exists: ${t.id}.${k} (${p})`);

// camera spline must be curvy (original 8 control points)
ok(cfg.spline.points.length >= 8, 'spline has >=8 control points (not linear)');
cfg.spline.points.forEach((p, i) => ok(Array.isArray(p) && p.length === 3, `spline.points[${i}] is Vec3`));

// two huge moons, each its own light source (emissive + directional intensity)
ok(cfg.world.moons.length === 2, 'exactly 2 moons');
cfg.world.moons.forEach((m, i) => {
  ok(m.radius >= 50, `moon[${i}] is huge (r>=50): ${m.radius}`);
  ok(m.light > 0, `moon[${i}] casts light (light>0)`);
  ok(m.emissive > 0, `moon[${i}] glows (emissive>0)`);
});

// night config present, moons are the lights (no fake moonlight, no daytime HDRI)
ok(!!cfg.night && !cfg.night.moonlight, 'night config, no fake moonlight directional');
ok(!cfg.assets.sky, 'no daytime HDRI sky asset');

// every stop carries a cube: 6 faces, each label+url (per-face links)
cfg.stops.forEach((s, i) => {
  ok(s.cube.faces.length === 6, `stop[${i}] cube has 6 faces`);
  s.cube.faces.forEach((f, j) => ok(!!f.label && !!f.url, `stop[${i}].faces[${j}] has label+url`));
});

// counts positive
for (const k of ['stars', 'trees']) ok(cfg.world[k].count > 0, `world.${k}.count > 0`);

// fauna: a species list with ground + air, each model present on disk
ok(cfg.world.fauna.length >= 6, `many fauna species (>=6): ${cfg.world.fauna.length}`);
ok(cfg.world.fauna.some((f) => f.type === 'ground'), 'has ground fauna');
ok(cfg.world.fauna.some((f) => f.type === 'air'), 'has air fauna');
cfg.world.fauna.forEach((f, i) => {
  ok(f.count > 0 && f.scale > 0, `fauna[${i}] count/scale > 0`);
  ok(f.type !== 'air' || f.height !== undefined, `fauna[${i}] air has height`);
});

// referenced assets exist on disk (textures + every fauna model)
const assets = [
  cfg.assets.ground.map, cfg.assets.ground.normal, cfg.assets.ground.rough, cfg.assets.waterNormals,
  ...cfg.world.fauna.map((f) => f.model)
];
assets.forEach((a) => ok(existsSync(resolve(root, 'static', a)), `asset exists: static/${a}`));

if (failed) { console.error(`\n${failed} check(s) failed`); process.exit(1); }
const faces = cfg.stops.reduce((n, s) => n + s.cube.faces.length, 0);
const critters = cfg.world.fauna.reduce((n, f) => n + f.count, 0);
console.log(`✓ scene OK — night, 2 moons, ${cfg.spline.points.length}-pt spline, ${cfg.stops.length} cubes/${faces} faces, ${cfg.world.fauna.length} species/${critters} critters, ${assets.length} assets`);
