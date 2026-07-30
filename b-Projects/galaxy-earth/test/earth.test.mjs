import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
// ponytail: mirrors _galaxy-engine/test/locomotion.test.mjs — node 22's unflagged
// type-stripping resolves the .ts import directly, no --experimental-strip-types needed.
import { stepDrive } from '../../_galaxy-engine/src/locomotion.ts';

const VEHICLE_FIELDS = [
  'wheelbase', 'maxSteer', 'steerRate', 'steerReturn', 'steerSpeedFalloff',
  'power', 'brakeDecel', 'drag', 'rollResist', 'reverseMaxSpeed', 'grip'
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const map = JSON.parse(
  readFileSync(path.join(__dirname, '../src/lib/data/map.json'), 'utf-8')
);

const r = map.rider;

// --- drivers (vehicles = physics; speed profile idle/min/cruise/max) ---
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
  if (
    !s ||
    typeof s.idle !== 'number' ||
    typeof s.min !== 'number' ||
    typeof s.cruise !== 'number' ||
    typeof s.max !== 'number' ||
    !(s.min <= s.cruise && s.cruise <= s.max)
  ) {
    throw new Error(`map.json rider.drivers["${d.id}"].speed needs numeric idle/min/cruise/max with min<=cruise<=max`);
  }
  if ('avg' in s) {
    throw new Error(`map.json rider.drivers["${d.id}"].speed.avg must be absent (replaced by cruise)`);
  }
  if (typeof d.turnRate !== 'number') {
    throw new Error(`map.json rider.drivers["${d.id}"].turnRate must be a number`);
  }
  if ('turn' in d) {
    throw new Error(`map.json rider.drivers["${d.id}"].turn must be absent (renamed to turnRate)`);
  }
  if (!d.model || (d.model.glb !== null && typeof d.model.glb !== 'string')) {
    throw new Error(`map.json rider.drivers["${d.id}"].model.glb must be a string or null`);
  }
  const a = d.altitude;
  if (
    !a ||
    (a.model !== 'elevation' && a.model !== 'zoom') ||
    typeof a.default !== 'number' ||
    typeof a.min !== 'number' ||
    typeof a.max !== 'number' ||
    typeof a.climbRate !== 'number' ||
    typeof a.eyeHeight !== 'number' ||
    !(a.min <= a.default && a.default <= a.max)
  ) {
    throw new Error(`map.json rider.drivers["${d.id}"].altitude needs model "elevation"|"zoom" + numeric default/min/max/climbRate/eyeHeight with min<=default<=max`);
  }
  if ('altitudeBand' in d || 'lift' in d || 'maxAlt' in d) {
    throw new Error(`map.json rider.drivers["${d.id}"] must not have altitudeBand/lift/maxAlt (replaced by altitude)`);
  }
  if (typeof d.size !== 'number' || !(d.size > 0)) {
    throw new Error(`map.json rider.drivers["${d.id}"].size must be a positive number`);
  }
  if (typeof d.accel !== 'number' || !(d.accel > 0)) {
    throw new Error(`map.json rider.drivers["${d.id}"].accel must be a positive number`);
  }
  if (typeof d.turnAtMax !== 'number' || !(d.turnAtMax > 0 && d.turnAtMax <= 1)) {
    throw new Error(`map.json rider.drivers["${d.id}"].turnAtMax must be a number in (0, 1]`);
  }
  if ('cameraZoom' in d) {
    throw new Error(`map.json rider.drivers["${d.id}"] must not have cameraZoom (per-camera zoom is now size/speed-derived in +page.svelte cameraZoomFor)`);
  }
  if (d.control !== 'vehicle' && d.control !== 'character') {
    throw new Error(`map.json rider.drivers["${d.id}"].control must be "vehicle" or "character"`);
  }
  if (d.control === 'vehicle') {
    const v = d.vehicle;
    if (!v || typeof v !== 'object') {
      throw new Error(`map.json rider.drivers["${d.id}"] has control:"vehicle" but no vehicle object`);
    }
    for (const f of VEHICLE_FIELDS) {
      if (typeof v[f] !== 'number' || !(v[f] > 0)) {
        throw new Error(`map.json rider.drivers["${d.id}"].vehicle.${f} must be a positive number`);
      }
    }
    if ('maxSpeed' in v) {
      throw new Error(`map.json rider.drivers["${d.id}"].vehicle must not have maxSpeed (derived from speed.max in +page.svelte)`);
    }
  }
}

// --- rider.street (surface provider config) ---
{
  const st = r.street;
  if (!st || !Array.isArray(st.providers) || !st.providers.includes('mask')) {
    throw new Error('map.json rider.street.providers must be an array containing "mask"');
  }
  const m = st.mask;
  if (!m || typeof m.sizePx !== 'number' || typeof m.zoom !== 'number' || typeof m.sampleHz !== 'number') {
    throw new Error('map.json rider.street.mask needs numeric sizePx/zoom/sampleHz');
  }
  const f = st.friction;
  if (!f || typeof f.asphalt !== 'number' || typeof f.off !== 'number') {
    throw new Error('map.json rider.street.friction needs numeric asphalt/off');
  }
}

// --- rider.camera (size/speed-derived zoom config, replaces per-driver cameraZoom) ---
{
  const cc = r.camera;
  if (
    !cc ||
    typeof cc.refSize !== 'number' ||
    typeof cc.minZoom !== 'number' ||
    typeof cc.maxZoom !== 'number' ||
    typeof cc.speedZoom !== 'number'
  ) {
    throw new Error('map.json rider.camera must have numeric refSize/minZoom/maxZoom/speedZoom');
  }
  if (
    typeof cc.fovBase !== 'number' ||
    typeof cc.fovMax !== 'number' ||
    typeof cc.rollMax !== 'number' ||
    typeof cc.springTau !== 'number' ||
    !(cc.fovBase < cc.fovMax)
  ) {
    throw new Error('map.json rider.camera must have numeric fovBase<fovMax, rollMax, springTau');
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
  if (typeof c.modelBoost !== 'number') {
    throw new Error(`map.json rider.cameras["${c.id}"].modelBoost must be a number`);
  }
  if (typeof c.targetLift !== 'number' && c.targetLift !== 'eye') {
    throw new Error(`map.json rider.cameras["${c.id}"].targetLift must be a number or "eye"`);
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

// --- rider.modelVis must be absent (replaced by cameras[].modelBoost) ---
if ('modelVis' in r) {
  throw new Error('map.json rider.modelVis must be absent (replaced by cameras[].modelBoost)');
}

// --- an aerial driver must carry climbRate>0; airplane must never stall (speed.min>0) ---
const airplane = r.drivers.find((d) => d.id === 'airplane');
if (!airplane || !(airplane.altitude.climbRate > 0)) {
  throw new Error('map.json rider.drivers airplane entry must have altitude.climbRate > 0');
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
    { min: d.speed.min, cruise: d.speed.cruise, max: d.speed.max, turn: d.turnRate, accel: d.accel, deadzone: r.joystick.deadzone },
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

// model boost: far/top-down cameras must magnify the metric model so it stays
// visible; close modes keep life-size (modelBoost:1); god-view boosts most.
{
  const godBoost = r.cameras.find((c) => c.id === 'god').modelBoost;
  const fpsBoost = r.cameras.find((c) => c.id === 'fps').modelBoost;
  if (!(godBoost > fpsBoost)) throw new Error('god-view modelBoost must exceed fps modelBoost so distant model stays visible');
  if (fpsBoost !== 1) throw new Error('fps close camera must keep model life-size (modelBoost===1)');
}

// speed differential: a faster driver must advance more per frame than a slower
// one at full stick — locks that distinct speed profiles actually produce
// distinct movement.
{
  const walker = r.drivers.find((x) => x.id === 'walk');
  const flyer = r.drivers.find((x) => x.id === 'drone');
  const stepSlow = stepDrive(
    { heading: 0 },
    { moveX: 0, moveY: 1, camBearing: 0, climb: 0 },
    { min: walker.speed.min, cruise: walker.speed.cruise, max: walker.speed.max, turn: walker.turnRate, accel: walker.accel, deadzone: r.joystick.deadzone },
    1
  );
  const stepFast = stepDrive(
    { heading: 0 },
    { moveX: 0, moveY: 1, camBearing: 0, climb: 0 },
    { min: flyer.speed.min, cruise: flyer.speed.cruise, max: flyer.speed.max, turn: flyer.turnRate, accel: flyer.accel, deadzone: r.joystick.deadzone },
    1
  );
  if (!(stepFast.dForward > stepSlow.dForward)) {
    throw new Error('stepDrive: faster driver (drone) must advance more per frame than slower driver (walk) at full stick');
  }
}

// climb / altitude: a flying driver (climbRate>0) must gain altitude on climb=1,
// lose it (clamped at floor min) on climb=-1, and clamp at max under sustained climb.
{
  const flyer = r.drivers.find((x) => x.id === 'drone');

  const upState = { heading: 0, altitude: 0 };
  const upStep = stepDrive(
    upState,
    { moveX: 0, moveY: 0, camBearing: 0, climb: 1 },
    { min: flyer.speed.min, max: flyer.speed.max, lift: flyer.altitude.climbRate, minAlt: flyer.altitude.min, maxAlt: flyer.altitude.max },
    1
  );
  if (upStep.altitude !== flyer.altitude.climbRate || !(upStep.altitude > 0)) {
    throw new Error('stepDrive: climb=1 must raise altitude by climbRate*dt from a fresh state');
  }

  const downState = { heading: 0, altitude: 5 };
  const downStep = stepDrive(
    downState,
    { moveX: 0, moveY: 0, camBearing: 0, climb: -1 },
    { min: flyer.speed.min, max: flyer.speed.max, lift: 100, minAlt: flyer.altitude.min, maxAlt: flyer.altitude.max },
    1
  );
  if (downStep.altitude !== flyer.altitude.min) {
    throw new Error('stepDrive: climb=-1 must decrease altitude and clamp at floor min');
  }

  const clampState = { heading: 0, altitude: 0 };
  const iterations = Math.ceil(flyer.altitude.max / flyer.altitude.climbRate) + 5;
  for (let i = 0; i < iterations; i++) {
    stepDrive(
      clampState,
      { moveX: 0, moveY: 0, camBearing: 0, climb: 1 },
      { min: flyer.speed.min, max: flyer.speed.max, lift: flyer.altitude.climbRate, minAlt: flyer.altitude.min, maxAlt: flyer.altitude.max },
      1
    );
  }
  if (clampState.altitude !== flyer.altitude.max) {
    throw new Error('stepDrive: repeated climb=1 must clamp altitude at maxAlt, never exceed it');
  }
}

console.log('earth OK');
