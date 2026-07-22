import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
// ponytail: mirrors _galaxy-engine/test/locomotion.test.mjs — node 22's unflagged
// type-stripping resolves the .ts import directly, no --experimental-strip-types needed.
import { stepRide } from '../../_galaxy-engine/src/locomotion.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const map = JSON.parse(
  readFileSync(path.join(__dirname, '../src/lib/data/map.json'), 'utf-8')
);

if (!Array.isArray(map.center) || map.center.length !== 2) {
  throw new Error('map.json center must be a 2-number array');
}
if (typeof map.center[0] !== 'number' || typeof map.center[1] !== 'number') {
  throw new Error('map.json center entries must be numbers');
}
if (typeof map.zoom !== 'number') {
  throw new Error('map.json zoom must be a number');
}
if (!map.terrain || !Array.isArray(map.terrain.tiles) || map.terrain.tiles.length === 0) {
  throw new Error('map.json terrain.tiles must be a non-empty array');
}
if (map.terrain.encoding !== 'terrarium') {
  throw new Error(`map.json terrain.encoding must be "terrarium", got: ${map.terrain.encoding}`);
}

if (!Array.isArray(map.rider?.start) || map.rider.start.length !== 2) {
  throw new Error('map.json rider.start must be a 2-number array');
}
if (typeof map.rider.start[0] !== 'number' || typeof map.rider.start[1] !== 'number') {
  throw new Error('map.json rider.start entries must be numbers');
}
if (typeof map.rider.speed !== 'number') {
  throw new Error('map.json rider.speed must be a number');
}
if (typeof map.rider.turn !== 'number') {
  throw new Error('map.json rider.turn must be a number');
}

// re-use the shared engine's pure locomotion step to prove one throttle step moves the rider
{
  const state = { heading: 0 };
  const step = stepRide(state, { steer: 0, throttle: 1 }, map.rider, 1);
  if (!(step.dForward > 0)) {
    throw new Error(`stepRide with throttle=1 should yield dForward>0, got: ${step.dForward}`);
  }
}

console.log('OK');
