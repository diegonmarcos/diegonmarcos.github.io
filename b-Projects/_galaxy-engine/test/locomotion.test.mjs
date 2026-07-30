// Contract test for the pure locomotion step (no framework, no DOM).
// Run: node test/locomotion.test.mjs
import { stepRide, stepDrive, stepVehicle } from '../src/locomotion.ts';

let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };

// zero input → heading unchanged & no movement
{
  const state = { heading: 0.4 };
  const step = stepRide(state, { steer: 0, throttle: 0 }, { speed: 5, turn: 2 }, 1);
  ok(step.heading === 0.4, 'zero input: heading unchanged');
  ok(step.dForward === 0, 'zero input: dForward===0');
}

// throttle=1, dt=1, speed=5 → dForward===5
{
  const state = { heading: 0 };
  const step = stepRide(state, { steer: 0, throttle: 1 }, { speed: 5, turn: 2 }, 1);
  ok(step.dForward === 5, 'throttle=1,dt=1,speed=5: dForward===5');
}

// steer=1, turn=2, dt=0.5 → heading===1
{
  const state = { heading: 0 };
  const step = stepRide(state, { steer: 1, throttle: 0 }, { speed: 5, turn: 2 }, 0.5);
  ok(step.heading === 1, 'steer=1,turn=2,dt=0.5: heading===1');
  ok(state.heading === 1, 'state.heading mutated in place');
}

// NO accel: instant speed (x1 path unchanged) — throttle=1,dt=0.5,speed=10 → dForward===5
{
  const state = { heading: 0 };
  const step = stepRide(state, { steer: 0, throttle: 1 }, { speed: 10, turn: 1 }, 0.5);
  ok(step.dForward === 5, 'no accel: dForward===speed*dt (instant)');
}

// WITH accel: first step eases in, does not jump to instant target
{
  const state = { heading: 0 };
  const step = stepRide(state, { steer: 0, throttle: 1 }, { speed: 10, turn: 1, accel: 5 }, 0.1);
  ok(step.dForward > 0 && step.dForward < 10 * 0.1, 'with accel: 0 < dForward < speed*dt (eases in)');
}

// lift + climb=1: altitude rises, then clamps at maxAlt
{
  const state = { heading: 0, altitude: 0 };
  const step = stepRide(state, { steer: 0, throttle: 0, climb: 1 }, { speed: 10, turn: 1, lift: 40, maxAlt: 100 }, 1);
  ok(step.altitude === 40, 'lift: altitude===40 after 1s at lift=40');
  let maxSeen = step.altitude;
  for (let i = 0; i < 10; i++) {
    const s = stepRide(state, { steer: 0, throttle: 0, climb: 1 }, { speed: 10, turn: 1, lift: 40, maxAlt: 100 }, 1);
    maxSeen = Math.max(maxSeen, s.altitude);
    ok(s.altitude <= 100, 'lift: altitude never exceeds maxAlt');
  }
  ok(maxSeen === 100, 'lift: altitude clamps at maxAlt');
}

// lift set but climb=0 → altitude stays 0
{
  const state = { heading: 0, altitude: 0 };
  const step = stepRide(state, { steer: 0, throttle: 0 }, { speed: 10, turn: 1, lift: 40, maxAlt: 100 }, 1);
  ok(step.altitude === 0, 'lift with climb=0: altitude stays 0');
}

// --- stepDrive: camera-relative twin-stick movement ---

// moveY=1 (stick forward), camBearing=0 → heading≈0, moves forward
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 1, camBearing: 0 }, { min: 0, max: 10 }, 1);
  ok(Math.abs(step.heading - 0) < 1e-9, 'drive: forward stick, camBearing=0 → heading≈0');
  ok(step.dForward > 0, 'drive: forward stick → dForward>0');
}

// moveX=1,moveY=0,camBearing=0, turn absent → snaps right (heading≈π/2)
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 1, moveY: 0, camBearing: 0 }, { min: 0, max: 10 }, 1);
  ok(Math.abs(step.heading - Math.PI / 2) < 1e-9, 'drive: stick right, no turn limit → snaps to π/2');
}

// camBearing=π/2, moveY=1,moveX=0 → movement is camera-relative, heading≈π/2
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 1, camBearing: Math.PI / 2 }, { min: 0, max: 10 }, 1);
  ok(Math.abs(step.heading - Math.PI / 2) < 1e-9, 'drive: camera-relative forward → heading≈camBearing');
}

// mag=0 with min=60 (airplane) → never stalls
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0 }, { min: 60, max: 200 }, 1);
  ok(step.dForward > 0, 'drive: idle stick with min=60 → still moving (airplane never stalls)');
}

// mag=0 with min=0 (car) → speed eases toward 0
{
  const state = { heading: 0, speed: 20 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0 }, { min: 0, max: 40, accel: 5 }, 0.1);
  ok(step.dForward >= 0 && step.dForward < 20 * 0.1, 'drive: idle stick with min=0 → eases toward 0');
}

// bearing-convention pin: screen-forward (stick up) === camBearing exactly;
// screen-right === camBearing+π/2; screen-down (back) === camBearing+π.
// No turn cap (params.turn omitted) so heading snaps instantly to desired.
for (const camBearing of [0, Math.PI / 2, -Math.PI / 2]) {
  {
    const state = { heading: 0 };
    const step = stepDrive(state, { moveX: 0, moveY: 1, camBearing }, { min: 0, max: 10 }, 1);
    ok(step.heading === camBearing, `drive: stick up, camBearing=${camBearing} → heading===camBearing`);
  }
  {
    const state = { heading: 0 };
    const step = stepDrive(state, { moveX: 0, moveY: -1, camBearing }, { min: 0, max: 10 }, 1);
    let expected = (camBearing + Math.PI) % (2 * Math.PI);
    if (expected > Math.PI) expected -= 2 * Math.PI;
    if (expected < -Math.PI) expected += 2 * Math.PI;
    ok(Math.abs(step.heading - expected) < 1e-9, `drive: stick down, camBearing=${camBearing} → heading===camBearing+π (backward)`);
  }
}

// stick right, camBearing=0, no turn cap → heading===π/2 exactly
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 1, moveY: 0, camBearing: 0 }, { min: 0, max: 10 }, 1);
  ok(step.heading === Math.PI / 2, 'drive: stick right, camBearing=0 → heading===π/2 exactly');
}

// deadzone: tiny stick treated as idle
{
  const state = { heading: 0.3 };
  const step = stepDrive(state, { moveX: 0.03, moveY: 0, camBearing: 0 }, { min: 0, max: 10, deadzone: 0.06 }, 1);
  ok(step.heading === 0.3, 'drive: below deadzone → heading unchanged (treated as idle)');
}

// idle explicit, distinct from min: mag=0 → target===idle, not min
{
  const state = { heading: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0 }, { min: 0, idle: 5, max: 10 }, 1);
  ok(step.dForward === 5, 'drive: explicit idle used at mag=0 (dForward===idle)');
}

// cruise piecewise: mid-stick (m<=0.5) ramps min→cruise, upper half ramps cruise→max
{
  const state = { heading: 0 };
  const stepLow = stepDrive(state, { moveX: 0, moveY: 0.25, camBearing: 0 }, { min: 0, cruise: 5, max: 10 }, 1);
  ok(Math.abs(stepLow.dForward - 2.5) < 1e-9, 'drive: cruise piecewise, m=0.25 → target===2.5 (min→cruise leg)');
}
{
  const state = { heading: 0 };
  const stepHigh = stepDrive(state, { moveX: 0, moveY: 0.75, camBearing: 0 }, { min: 0, cruise: 5, max: 10 }, 1);
  ok(Math.abs(stepHigh.dForward - 7.5) < 1e-9, 'drive: cruise piecewise, m=0.75 → target===7.5 (cruise→max leg)');
}

// minAlt floor: descending climb still clamps at minAlt, not 0
{
  const state = { heading: 0, altitude: 60 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0, climb: -1 }, { min: 0, max: 10, lift: 40, minAlt: 50, maxAlt: 100 }, 1);
  ok(step.altitude === 50, 'drive: minAlt floor clamps descent at minAlt (not 0)');
}

// minAlt applies even with lift omitted (climbRate: 0 drivers still floor at minAlt)
{
  const state = { heading: 0, altitude: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0 }, { min: 0, max: 10, minAlt: 10 }, 1);
  ok(step.altitude === 10, 'drive: minAlt floor applies even without lift');
}

// minAlt > maxAlt (misconfigured driver): clamp must still never exceed maxAlt
{
  const state = { heading: 0, altitude: 0 };
  const step = stepDrive(state, { moveX: 0, moveY: 0, camBearing: 0, climb: 1 }, { min: 0, max: 10, lift: 40, minAlt: 100, maxAlt: 50 }, 1);
  ok(step.altitude === 50, 'drive: minAlt>maxAlt (misconfigured) → result never exceeds maxAlt');
}

// --- turnAtMax / speedRef: speed-scaled turn rate (stepDrive) ---

// turnAtMax omitted → turnScale===1, byte-identical to today (even with speedRef present)
{
  const state = { heading: 0, speed: 10 };
  const step = stepDrive(state, { moveX: 1, moveY: 0, camBearing: 0 }, { min: 0, max: 10, turn: 2, speedRef: 10 }, 0.5);
  ok(Math.abs(step.heading - 1) < 1e-9, 'turnAtMax omitted: heading===turn*dt (unscaled, same as no speedRef)');
}

// turnAtMax set, at full speed (speed===speedRef) → turn step reduced to turnAtMax fraction
{
  const state = { heading: 0, speed: 10 };
  const step = stepDrive(state, { moveX: 1, moveY: 0, camBearing: 0 }, { min: 0, max: 10, turn: 2, turnAtMax: 0.5, speedRef: 10 }, 1);
  ok(Math.abs(step.heading - 1) < 1e-9, 'turnAtMax=0.5 at full speed: heading===turn*turnAtMax*dt (reduced)');
}

// turnAtMax set, but speed===0 → full turn rate (vRatio=0 → turnScale=1)
{
  const state = { heading: 0, speed: 0 };
  const step = stepDrive(state, { moveX: 1, moveY: 0, camBearing: 0 }, { min: 0, max: 10, turn: 2, turnAtMax: 0.5, speedRef: 10 }, 0.5);
  ok(Math.abs(step.heading - 1) < 1e-9, 'turnAtMax set but speed===0: heading===turn*dt (full rate)');
}

// --- stepVehicle: bicycle-model vehicle step ---

const vparams = {
  wheelbase: 2.5, maxSteer: 0.6, steerRate: 10, steerReturn: 10, steerSpeedFalloff: 0.3,
  power: 5, brakeDecel: 8, drag: 0.001, rollResist: 0.3, maxSpeed: 20, reverseMaxSpeed: 5, grip: 8,
};

// stopped vehicle, full steer input → parked car cannot pivot: yawRate===0, heading unchanged
{
  const state = { heading: 0.4, speed: 0 };
  const step = stepVehicle(state, { steerAxis: 1, throttle: 0, brake: 0 }, vparams, 1);
  ok(step.yawRate === 0, 'stopped + full steer: yawRate===0');
  ok(step.heading === 0.4, 'stopped + full steer: heading unchanged');
}

// moving vehicle with steer → yawRate sign matches steer sign, heading changes
{
  const state = { heading: 0, speed: 10 };
  const step = stepVehicle(state, { steerAxis: 1, throttle: 0, brake: 0 }, vparams, 0.1);
  ok(step.yawRate > 0, 'moving + positive steer: yawRate>0');
  ok(step.heading !== 0, 'moving + steer: heading changes');
}

// yawRate magnitude matches v*tan(steer)/wheelbase within tolerance, well under grip limit
{
  const state = { heading: 0, speed: 5, steer: 0.2 };
  const step = stepVehicle(state, { steerAxis: 0, throttle: 0, brake: 0 }, vparams, 0.001);
  const expected = step.speed * Math.tan(step.steer) / vparams.wheelbase;
  ok(Math.abs(step.yawRate - expected) < 1e-6, 'yawRate ~= v*tan(steer)/wheelbase under grip limit');
}

// steering lock reduced at high speed vs at rest (same input)
{
  const stateSlow = { heading: 0, speed: 0 };
  const stepSlow = stepVehicle(stateSlow, { steerAxis: 1, throttle: 0, brake: 0 }, vparams, 1);
  const stateFast = { heading: 0, speed: vparams.maxSpeed };
  const stepFast = stepVehicle(stateFast, { steerAxis: 1, throttle: 0, brake: 0 }, vparams, 1);
  ok(stepFast.steer < stepSlow.steer, 'steer lock reduced at high speed vs at rest');
}

// understeer: tiny grip → slip>0 and |yawRate| below the ungripped value
{
  const tinyGripParams = { ...vparams, grip: 0.01 };
  const state = { heading: 0, speed: 10, steer: 0.3 };
  const step = stepVehicle(state, { steerAxis: 0, throttle: 0, brake: 0 }, tinyGripParams, 0.001);
  const ungripped = step.speed * Math.tan(step.steer) / vparams.wheelbase;
  ok(step.slip > 0, 'tiny grip: slip>0');
  ok(Math.abs(step.yawRate) < Math.abs(ungripped), 'tiny grip: |yawRate| below ungripped value');
}

// coasting with zero throttle/brake reduces speed monotonically, never negative, converges toward 0
{
  const state = { heading: 0, speed: 10 };
  let prev = state.speed;
  let monotone = true, neverNegative = true;
  for (let i = 0; i < 500; i++) {
    stepVehicle(state, { steerAxis: 0, throttle: 0, brake: 0 }, vparams, 0.1);
    if (state.speed > prev) monotone = false;
    if (state.speed < 0) neverNegative = false;
    prev = state.speed;
  }
  ok(monotone, 'coasting: speed decreases monotonically');
  ok(neverNegative, 'coasting: speed never negative');
  ok(state.speed < 1, 'coasting: speed converges toward 0');
}

// braking from standstill, no throttle → reverse builds, clamped at -reverseMaxSpeed
{
  const state = { heading: 0, speed: 0 };
  for (let i = 0; i < 200; i++) {
    stepVehicle(state, { steerAxis: 0, throttle: 0, brake: 1 }, vparams, 0.1);
  }
  ok(state.speed < 0, 'brake from standstill: reverse builds');
  ok(Math.abs(state.speed - (-vparams.reverseMaxSpeed)) < 1e-9, 'brake from standstill: clamped at -reverseMaxSpeed');
}

// forward speed clamps at maxSpeed under sustained full throttle
{
  const state = { heading: 0, speed: 0 };
  for (let i = 0; i < 500; i++) {
    stepVehicle(state, { steerAxis: 0, throttle: 1, brake: 0 }, vparams, 0.1);
  }
  ok(state.speed <= vparams.maxSpeed, 'sustained full throttle: speed<=maxSpeed');
  ok(Math.abs(state.speed - vparams.maxSpeed) < 1e-6, 'sustained full throttle: speed converges to maxSpeed');
}

// friction: 0.5 reduces both accel and grip limit vs friction: 1
{
  const stateFull = { heading: 0, speed: 0 };
  stepVehicle(stateFull, { steerAxis: 0, throttle: 1, brake: 0 }, { ...vparams, friction: 1 }, 0.1);
  const stateHalf = { heading: 0, speed: 0 };
  stepVehicle(stateHalf, { steerAxis: 0, throttle: 1, brake: 0 }, { ...vparams, friction: 0.5 }, 0.1);
  ok(stateHalf.speed < stateFull.speed, 'friction 0.5: less accel than friction 1');

  const slipParams = { ...vparams, grip: 3, wheelbase: 2.5 };
  const stateFullGrip = { heading: 0, speed: 10, steer: 0.3 };
  const stepFullGrip = stepVehicle(stateFullGrip, { steerAxis: 0, throttle: 0, brake: 0 }, { ...slipParams, friction: 1 }, 0.001);
  const stateHalfGrip = { heading: 0, speed: 10, steer: 0.3 };
  const stepHalfGrip = stepVehicle(stateHalfGrip, { steerAxis: 0, throttle: 0, brake: 0 }, { ...slipParams, friction: 0.5 }, 0.001);
  ok(Math.abs(stepHalfGrip.yawRate) < Math.abs(stepFullGrip.yawRate), 'friction 0.5: lower grip limit than friction 1');
}

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('locomotion OK');
