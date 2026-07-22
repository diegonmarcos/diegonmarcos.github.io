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
if (!Array.isArray(map.rider.modes) || map.rider.modes.length === 0) {
  throw new Error('map.json rider.modes must be a non-empty array');
}
if (typeof map.rider.defaultMode !== 'string') {
  throw new Error('map.json rider.defaultMode must be a string');
}
if (!map.rider.modes.some((m) => m.id === map.rider.defaultMode)) {
  throw new Error(`map.json rider.defaultMode "${map.rider.defaultMode}" must match a rider.modes[].id`);
}

for (const m of map.rider.modes) {
  if (typeof m.id !== 'string') {
    throw new Error(`map.json rider.modes entry missing string id: ${JSON.stringify(m)}`);
  }
  if (typeof m.label !== 'string') {
    throw new Error(`map.json rider.modes["${m.id}"].label must be a string`);
  }
  if (typeof m.speed !== 'number') {
    throw new Error(`map.json rider.modes["${m.id}"].speed must be a number`);
  }
  if (typeof m.turn !== 'number') {
    throw new Error(`map.json rider.modes["${m.id}"].turn must be a number`);
  }
  if (!m.follow || typeof m.follow.pitch !== 'number' || typeof m.follow.zoom !== 'number') {
    throw new Error(`map.json rider.modes["${m.id}"].follow.pitch/zoom must be numbers`);
  }
}

const flyMode = map.rider.modes.find((m) => m.id === 'fly');
if (!flyMode || !(flyMode.lift > 0)) {
  throw new Error('map.json rider.modes fly entry must have lift > 0');
}

// re-use the shared engine's pure locomotion step to prove one throttle step moves the rider
{
  const state = { heading: 0 };
  const walkMode = map.rider.modes.find((m) => m.id === map.rider.defaultMode);
  const step = stepRide(state, { steer: 0, throttle: 1 }, { ...walkMode, steerSign: map.rider.steerSign }, 1);
  if (!(step.dForward > 0)) {
    throw new Error(`stepRide with throttle=1 should yield dForward>0, got: ${step.dForward}`);
  }
}

// a mode with accel should ease in — one frame's dForward stays below the instant target
{
  const state = { heading: 0 };
  const dt = 0.1;
  const step = stepRide(state, { steer: 0, throttle: 1 }, flyMode, dt);
  if (!(step.dForward > 0 && step.dForward < flyMode.speed * dt)) {
    throw new Error(
      `stepRide with accel should ease in (0 < dForward < speed*dt), got dForward=${step.dForward}, speed*dt=${flyMode.speed * dt}`
    );
  }
}

console.log('OK');
