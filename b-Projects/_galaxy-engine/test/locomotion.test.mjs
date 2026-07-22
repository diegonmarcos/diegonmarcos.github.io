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

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('locomotion OK');
