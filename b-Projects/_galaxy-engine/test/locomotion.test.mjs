// Contract test for the pure locomotion step (no framework, no DOM).
// Run: node test/locomotion.test.mjs
import { stepRide, stepDrive } from '../src/locomotion.ts';

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

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('locomotion OK');
