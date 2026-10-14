// Contract test for the pure game-loop step (no framework, no DOM).
// Run: node test/game.test.mjs
import { stepGame, touchdownVerdict } from '../src/game.ts';

let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };

const params = {
  maxLandSink: 3,
  maxLandBank: 0.2,
  maxLandPitch: 0.2,
  maxLandSpeed: 5,
  maxLandSpeedFwd: 30,
  needsGear: true,
  crashRespawnDelay: 3,
  minAirborneAGL: 2,
};

const freshState = () => ({ phase: 'spawn', airborneTime: 0, landings: 0, crashes: 0, crashTimer: 0 });

const tel = (over = {}) => ({
  speed: 0, ias: 0, altAGL: 0, altASL: 0, vspeed: 0, heading: 0, bank: 0, pitch: 0,
  gForce: 1, throttle: 0, stall: false, overspeed: false, gpws: 'none',
  gearDown: true, flaps: 0, rotorRpm: null, torque: null, battery: null, altHold: null,
  ...over,
});

// spawn → flying transition at the AGL threshold
{
  const s = freshState();
  let phase = stepGame(s, tel({ altAGL: params.minAirborneAGL }), params, 1);
  ok(phase === 'spawn', 'spawn: at threshold (not >) stays spawn');
  phase = stepGame(s, tel({ altAGL: params.minAirborneAGL + 0.1 }), params, 1);
  ok(phase === 'flying', 'spawn → flying: above minAirborneAGL');
  ok(s.airborneTime === 0, 'airborneTime reset to 0 on entering flying');
}

// gentle level touchdown with gear = landed
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1); // spawn → flying
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1); // build airborneTime > 2
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0.05, pitch: 0.05, speed: 2, gearDown: true }), params, 0.1);
  ok(phase === 'landed', 'gentle level touchdown with gear → landed');
  ok(s.landings === 1, 'landings incremented');
}

// steep sink = crashed
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -10, bank: 0, pitch: 0, speed: 2, gearDown: true }), params, 0.1);
  ok(phase === 'crashed', 'excessive sink rate → crashed');
  ok(s.crashes === 1, 'crashes incremented');
}

// excessive bank = crashed
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0.9, pitch: 0, speed: 2, gearDown: true }), params, 0.1);
  ok(phase === 'crashed', 'excessive bank → crashed');
}

// excessive pitch = crashed
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0, pitch: 0.9, speed: 2, gearDown: true }), params, 0.1);
  ok(phase === 'crashed', 'excessive pitch → crashed');
}

// excessive speed = crashed
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0, pitch: 0, speed: 999, gearDown: true }), params, 0.1);
  ok(phase === 'crashed', 'excessive speed (over maxLandSpeedFwd since needsGear) → crashed');
}

// needsGear true + gear up = crash even if otherwise gentle
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0.05, pitch: 0.05, speed: 2, gearDown: false }), params, 0.1);
  ok(phase === 'crashed', 'needsGear=true, gear up, otherwise gentle → crashed');
}

// crash → timer → respawn to spawn phase
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  let phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -10 }), params, 0.1);
  ok(phase === 'crashed', 'crashed after bad touchdown');
  ok(Math.abs(s.crashTimer - params.crashRespawnDelay) < 1e-9, 'crashTimer set to crashRespawnDelay');
  phase = stepGame(s, tel({ altAGL: 0 }), params, params.crashRespawnDelay - 0.01);
  ok(phase === 'crashed', 'still crashed just before timer expires');
  phase = stepGame(s, tel({ altAGL: 0 }), params, 1);
  ok(phase === 'spawn', 'crash timer expired → respawn to spawn');
}

// landed → takeoff → flying again
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  for (let i = 0; i < 3; i++) stepGame(s, tel({ altAGL: 10 }), params, 1);
  let phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -1, bank: 0.05, pitch: 0.05, speed: 2, gearDown: true }), params, 0.1);
  ok(phase === 'landed', 'landed after gentle touchdown');
  phase = stepGame(s, tel({ altAGL: 0.1, vspeed: 0, bank: 0, pitch: 0, speed: 3, gearDown: true }), params, 0.1);
  ok(phase === 'landed', 'landed rolling on ground stays landed (not airborne yet)');
  phase = stepGame(s, tel({ altAGL: params.minAirborneAGL + 0.5 }), params, 0.1);
  ok(phase === 'flying', 'landed → takeoff (altAGL above threshold) → flying again');
}

// no touchdown evaluation in the first 2 s of airborne time
{
  const s = freshState();
  let phase = stepGame(s, tel({ altAGL: 10 }), params, 1); // spawn → flying, airborneTime=0
  ok(phase === 'flying', 'entered flying');
  // immediately drop to ground level with a crash-worthy sink before 2s have accumulated
  phase = stepGame(s, tel({ altAGL: 0.2, vspeed: -50, bank: 0, pitch: 0, speed: 2, gearDown: true }), params, 0.5);
  ok(phase === 'flying', 'no touchdown evaluated before airborneTime > 2, even with crash-worthy telemetry');
  ok(s.airborneTime > 0 && s.airborneTime <= 2, 'airborneTime still accumulating within grace window');
}

// NaN telemetry does not corrupt state
{
  const s = freshState();
  stepGame(s, tel({ altAGL: 10 }), params, 1);
  const phase = stepGame(s, tel({ altAGL: NaN, vspeed: NaN, bank: NaN, pitch: NaN, speed: NaN, gearDown: true }), params, NaN);
  ok(phase === 'flying' || phase === 'landed' || phase === 'crashed', 'NaN telemetry/dt: phase remains a valid enum value');
  ok(!Number.isNaN(s.airborneTime), 'NaN dt does not corrupt airborneTime');
  ok(!Number.isNaN(s.crashTimer), 'NaN telemetry does not corrupt crashTimer');
}

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('game OK');
