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
  if (!d.model || (d.model.glb !== null && typeof d.model.glb !== 'string')) {
    throw new Error(`map.json rider.drivers["${d.id}"].model.glb must be a string or null`);
  }
  const ab = d.altitudeBand;
  if (!ab || typeof ab.eye !== 'number' || typeof ab.cruise !== 'number' || typeof ab.ceiling !== 'number') {
    throw new Error(`map.json rider.drivers["${d.id}"].altitudeBand needs numeric eye/cruise/ceiling`);
  }
}

// --- assets CDN base + constellation (globe) driver + keybindings + look range ---
if (typeof r.assetsBase !== 'string' || !r.assetsBase.startsWith('http')) {
  throw new Error('map.json rider.assetsBase must be an http(s) CDN url');
}
const constellation = r.drivers.find((d) => d.id === 'constellation');
if (!constellation || constellation.globe !== true) {
  throw new Error('map.json rider.drivers must include a constellation driver with globe:true');
}
for (const k of ['forward','back','left','right','up','down','cameraNext','cameraPrev','driverNext','driverPrev']) {
  if (!Array.isArray(r.keys?.[k]) || r.keys[k].length === 0) {
    throw new Error(`map.json rider.keys.${k} must be a non-empty array`);
  }
}
if (!(r.joystick.look.mapMaxPitch < r.joystick.look.skyMaxPitch)) {
  throw new Error('map.json rider.joystick.look.mapMaxPitch must be < skyMaxPitch (sky-dome takes over above the map ceiling)');
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
  // Mercator +y points SOUTH: moving compass-north (heading 0) must DECREASE y,
  // so forwardZ must be negative. This locks the sign that makes "forward = forward".
  if (!(step.forwardZ < 0)) {
    throw new Error('stepDrive: heading 0 (north) must give forwardZ < 0 (mercator y is south-positive)');
  }
  if (Math.abs(step.forwardX) > 1e-6) {
    throw new Error('stepDrive: heading 0 must give forwardX ~0 (no east/west drift)');
  }
}
{
  // Stick right (moveX=1) with camBearing=0 → heading +90° (east): forwardX>0, forwardZ~0.
  const step = stepDrive(
    { heading: 0 },
    { moveX: 1, moveY: 0, camBearing: 0, climb: 0 },
    { min: 1, avg: 2, max: 3, turn: Math.PI, accel: 10, deadzone: 0.05 },
    1
  );
  if (!(step.forwardX > 0) || Math.abs(step.forwardZ) > 1e-6) {
    throw new Error('stepDrive: stick-right at camBearing 0 must steer east (forwardX>0, forwardZ~0)');
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
