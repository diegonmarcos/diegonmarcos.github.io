import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
// ponytail: mirrors _galaxy-engine/test/locomotion.test.mjs — node 22's unflagged
// type-stripping resolves the .ts import directly, no --experimental-strip-types needed.
import { stepDrive } from '../../_galaxy-engine/src/locomotion.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const map = JSON.parse(
  readFileSync(path.join(__dirname, '../src/lib/data/map.json'), 'utf-8')
);

const r = map.rider;

// --- drivers (vehicles = physics; speed profile min/avg/max) ---
if (!Array.isArray(r.drivers) || r.drivers.length === 0) {
  throw new Error('map.json rider.drivers must be a non-empty array');
}
const driverIds = new Set(r.drivers.map((d) => d.id));
if (typeof r.defaultDriver !== 'string' || !driverIds.has(r.defaultDriver)) {
  throw new Error(`map.json rider.defaultDriver "${r.defaultDriver}" must match a rider.drivers[].id`);
}
for (const d of r.drivers) {
  if (typeof d.id !== 'string' || typeof d.label !== 'string') {
    throw new Error(`map.json rider.drivers entry needs string id+label: ${JSON.stringify(d)}`);
  }
  const s = d.speed;
  if (!s || typeof s.min !== 'number' || typeof s.max !== 'number' || s.max < s.min) {
    throw new Error(`map.json rider.drivers["${d.id}"].speed needs numeric min<=max`);
  }
  if (typeof d.turn !== 'number') {
    throw new Error(`map.json rider.drivers["${d.id}"].turn must be a number`);
  }
}

// --- camera views (7 global framings, decoupled from driver) ---
if (!Array.isArray(r.cameras) || r.cameras.length === 0) {
  throw new Error('map.json rider.cameras must be a non-empty array');
}
for (const c of r.cameras) {
  if (typeof c.id !== 'string' || typeof c.label !== 'string') {
    throw new Error(`map.json rider.cameras entry needs string id+label: ${JSON.stringify(c)}`);
  }
  if (typeof c.pitch !== 'number' || typeof c.zoom !== 'number') {
    throw new Error(`map.json rider.cameras["${c.id}"].pitch/zoom must be numbers`);
  }
  if (c.bearingOffset != null && typeof c.bearingOffset !== 'number') {
    throw new Error(`map.json rider.cameras["${c.id}"].bearingOffset must be a number`);
  }
}
const camIds = new Set(r.cameras.map((c) => c.id));
if (typeof r.defaultCamera !== 'string' || !camIds.has(r.defaultCamera)) {
  throw new Error(`map.json rider.defaultCamera "${r.defaultCamera}" must match a rider.cameras[].id`);
}

// --- joystick config ---
if (!r.joystick || typeof r.joystick.scale !== 'number' || typeof r.joystick.deadzone !== 'number') {
  throw new Error('map.json rider.joystick needs numeric scale + deadzone');
}
if (!r.joystick.look || typeof r.joystick.look.yawRate !== 'number' || typeof r.joystick.look.pitchRate !== 'number') {
  throw new Error('map.json rider.joystick.look needs numeric yawRate + pitchRate');
}

// --- an aerial driver must carry lift>0; airplane must never stall (speed.min>0) ---
const airplane = r.drivers.find((d) => d.id === 'airplane');
if (!airplane || !(airplane.lift > 0)) {
  throw new Error('map.json rider.drivers airplane entry must have lift > 0');
}
if (!(airplane.speed.min > 0)) {
  throw new Error('map.json rider.drivers airplane speed.min must be > 0 (never stalls)');
}

// --- twin-stick locomotion smoke tests (stepDrive is camera-relative) ---
{
  const d = r.drivers.find((x) => x.id === r.defaultDriver);
  const state = { heading: 0 };
  // push stick up (moveY=1) with camera facing north (camBearing=0) → move forward
  const step = stepDrive(
    state,
    { moveX: 0, moveY: 1, camBearing: 0, climb: 0 },
    { min: d.speed.min, avg: d.speed.avg, max: d.speed.max, turn: d.turn, accel: d.accel, deadzone: r.joystick.deadzone },
    1
  );
  if (!(step.dForward > 0)) {
    throw new Error('stepDrive: default driver must move forward when stick is pushed up');
  }
  if (Math.abs(step.heading) > 1e-6) {
    throw new Error('stepDrive: moveY=1 with camBearing=0 should aim heading ~0');
  }
}
{
  // airplane never stalls: no stick input but min>0 still advances
  const state = { heading: 0 };
  const step = stepDrive(
    state,
    { moveX: 0, moveY: 0, camBearing: 0 },
    { min: airplane.speed.min, max: airplane.speed.max },
    1
  );
  if (!(step.dForward > 0)) {
    throw new Error('stepDrive: airplane with speed.min>0 must keep moving at idle stick');
  }
}

console.log('earth OK');
