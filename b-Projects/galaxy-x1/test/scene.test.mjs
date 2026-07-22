// Contract test for the data-driven night scene (no framework).
// Fails if scene.json drifts from what the components expect, or an asset is missing.
// Run: node test/scene.test.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Assets now live in the front-assets-cdn submodule (served via jsDelivr), not local static/.
const cdnRoot = resolve(root, '../../front-assets-cdn/b-Projects/galaxy/static');
const haveCdn = existsSync(cdnRoot);
const cfg = JSON.parse(readFileSync(resolve(root, 'src/lib/data/scene.json'), 'utf8'));
const catalog = JSON.parse(readFileSync(resolve(root, 'src/lib/data/assets.json'), 'utf8'));
let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };
// File-existence check: only asserted when the CDN submodule is checked out.
const okFile = (p, m) => { if (haveCdn) ok(existsSync(resolve(cdnRoot, p)), m); };

// catalog exposes the jsDelivr CDN base
ok(typeof catalog.cdnBase === 'string' && catalog.cdnBase.startsWith('https://'), 'catalog has cdnBase');

// asset catalog integrity (marketplace source of truth): unique ids, files exist, licensed
const ids = new Set();
for (const m of catalog.models) {
  ok(!ids.has(m.id), `catalog model id unique: ${m.id}`); ids.add(m.id);
  okFile(m.mesh, `catalog mesh exists: ${m.mesh}`);
  ok(!!m.license && !!m.author && !!m.source, `catalog ${m.id} has license/author/source`);
}
for (const t of catalog.textureSets)
  for (const [k, p] of Object.entries(t.textures))
    okFile(p, `catalog texture exists: ${t.id}.${k} (${p})`);

// every fauna species must reference a real catalog model id (no dangling refs)
for (const f of cfg.world.fauna) ok(ids.has(f.asset), `fauna asset in catalog: ${f.asset}`);

// flora: GLB-based trees/bushes/grass/rocks replacing the old procedural forest.
// non-empty; every asset resolves to a catalog id + on-disk mesh; counts/scale > 0.
ok(Array.isArray(cfg.world.flora) && cfg.world.flora.length > 0, 'world.flora is a non-empty array');
ok(!cfg.world.trees && !cfg.world.grass && !cfg.world.plants, 'procedural trees/grass/plants retired');
cfg.world.flora.forEach((f, i) => {
  ok(ids.has(f.asset), `flora[${i}] asset in catalog: ${f.asset}`);
  const m = catalog.models.find((x) => x.id === f.asset);
  if (m) okFile(m.mesh, `flora[${i}] mesh exists: ${m.mesh}`);
  ok(f.count > 0, `flora[${i}] count > 0`);
  ok(f.minScale > 0 && f.maxScale >= f.minScale, `flora[${i}] scale range valid`);
  ok(f.area > 0 && f.clear >= 0, `flora[${i}] area/clear valid`);
});

// solar system: every referenced planet/moon/ring/sky texture exists; Galaxy present
const space = JSON.parse(readFileSync(resolve(root, 'src/lib/data/space.json'), 'utf8'));
const spaceTex = [space.background, space.sun.texture];
for (const p of space.planets) {
  if (p.texture) spaceTex.push(p.texture);
  if (p.ring?.texture) spaceTex.push(p.ring.texture);
  for (const m of p.moons ?? []) if (m.texture) spaceTex.push(m.texture);
}
for (const p of spaceTex) okFile(p, `space texture exists: ${p}`);
ok(space.planets.some((p) => p.id === 'galaxy'), 'space has Galaxy planet between Mars and Jupiter');

// city district: GLB placements beyond the ghetto; every model on the CDN
ok(!!cfg.world.city && Array.isArray(cfg.world.city.place) && cfg.world.city.place.length > 0, 'city placements present');
cfg.world.city.place.forEach((it, i) => {
  ok(typeof it.m === 'string' && Array.isArray(it.p) && it.p.length === 3 && it.s > 0, `city[${i}] valid placement`);
  okFile(cfg.world.city.dir + it.m, `city[${i}] GLB exists: ${it.m}`);
});

// per-zone floors: forest / ghetto / city each get a round floor patch (extra zones e.g. House allowed)
const zoneNames = new Set((cfg.world.zones || []).map(z => z.name));
ok(Array.isArray(cfg.world.zones) && ['Wild Forest', 'Ghetto', 'City Center'].every(n => zoneNames.has(n)), 'three canonical zone floors present');
cfg.world.zones.forEach((z, i) => ok(z.name && Array.isArray(z.center) && z.center.length === 3 && z.r > 0 && /^#/.test(z.color), `zone[${i}] valid: ${z.name}`));

// free-ride mode config present (scenic <-> free switcher)
ok(!!cfg.free && !!cfg.free.cam && cfg.free.cam.presets && cfg.free.speed > 0, 'free-ride config present');
ok(cfg.free.cam.stickYaw > 0 && cfg.free.cam.stickPitch > 0, 'camera-stick orbit/tilt sensitivities present');

// milky way constellation view: black hole + solar (incl. Galaxy) + two neighbour stars
const galaxy = JSON.parse(readFileSync(resolve(root, 'src/lib/data/galaxy.json'), 'utf8'));
ok(!!galaxy.blackHole && !!galaxy.solar && Array.isArray(galaxy.stars) && galaxy.stars.length === 2, 'galaxy: black hole + solar + two stars');

// camera spline must be curvy (original 8 control points)
ok(cfg.spline.points.length >= 8, 'spline has >=8 control points (not linear)');
cfg.spline.points.forEach((p, i) => ok(Array.isArray(p) && p.length === 3, `spline.points[${i}] is Vec3`));

// two huge moons, each its own light source (emissive + directional intensity)
ok(cfg.world.moons.length === 2, 'exactly 2 moons');
cfg.world.moons.forEach((m, i) => {
  ok(m.radius >= 50, `moon[${i}] is huge (r>=50): ${m.radius}`);
  ok(m.light > 0, `moon[${i}] casts light (light>0)`);
  ok(m.emissive > 0, `moon[${i}] glows (emissive>0)`);
  if (m.mesh) okFile(m.mesh, `moon[${i}] GLB exists: ${m.mesh}`);
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
ok(cfg.world.stars.count > 0, 'world.stars.count > 0');

// fauna: a species list with ground + air, each model present on disk
ok(cfg.world.fauna.length >= 6, `many fauna species (>=6): ${cfg.world.fauna.length}`);
ok(cfg.world.fauna.some((f) => f.type === 'ground'), 'has ground fauna');
ok(cfg.world.fauna.some((f) => f.type === 'air'), 'has air fauna');
cfg.world.fauna.forEach((f, i) => {
  ok(f.count > 0 && f.scale > 0, `fauna[${i}] count/scale > 0`);
  ok(f.type !== 'air' || f.height !== undefined, `fauna[${i}] air has height`);
});

// referenced textures exist on disk (fauna meshes are covered by the catalog checks above)
const assets = [
  cfg.assets.ground.map, cfg.assets.ground.normal, cfg.assets.ground.rough, cfg.assets.waterNormals
];
assets.forEach((a) => okFile(a, `asset exists (CDN): ${a}`));

if (failed) { console.error(`\n${failed} check(s) failed`); process.exit(1); }
const faces = cfg.stops.reduce((n, s) => n + s.cube.faces.length, 0);
const critters = cfg.world.fauna.reduce((n, f) => n + f.count, 0);
console.log(`✓ scene OK — night, 2 moons, ${cfg.spline.points.length}-pt spline, ${cfg.stops.length} cubes/${faces} faces, ${cfg.world.fauna.length} species/${critters} critters, ${assets.length} assets`);
