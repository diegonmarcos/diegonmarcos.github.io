// Contract test for the pure locomotion step (no framework, no DOM).
// Run: node test/locomotion.test.mjs
import { stepRide } from '../src/locomotion.ts';

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

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('locomotion OK');
