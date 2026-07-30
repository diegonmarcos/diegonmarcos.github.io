// Contract test for the pure flight-dynamics step (no framework, no DOM).
// Run: node test/flight.test.mjs
import { stepAirplane, stepHelicopter, stepDrone, airDensityRatio, G } from '../src/flight.ts';

let failed = 0;
const ok = (c, m) => { if (!c) { console.error('✗', m); failed++; } };

const baseInput = () => ({ pitchAxis: 0, rollAxis: 0, yawAxis: 0, throttle: 0, climbAxis: 0, gearDown: false, flaps: 0, brake: 0 });

// --- airDensityRatio ---
ok(airDensityRatio(0) === 1, 'airDensityRatio(0)===1');
{
  const a = airDensityRatio(1000), b = airDensityRatio(5000), c = airDensityRatio(10000);
  ok(a > b && b > c, 'airDensityRatio strictly decreasing with altitude');
}

// --- airplane ---
const aparams = {
  stallSpeed: 30, flapStallReduction: 0.3,
  maxPitch: 0.35, pitchRate: 0.5,
  maxBank: 1.0, rollRate: 1.5, rollReturn: 0.5,
  maxThrust: 8, dragK: 0.002, inducedK: 200,
  brakeDecel: 3, stallSink: 3, rudderYawRate: 0.3,
  maxG: 4, vne: 120,
  gearDragK: 0.5, flapDragK: 0.3,
  gpwsPullup: 150, gpwsCaution: 300, gpwsSinkRate: 5,
};

// level cruise: thrust set to balance drag at speed=60, sea level, pitch/bank held at 0
{
  const cruiseSpeed = 60;
  const drag0 = aparams.dragK * cruiseSpeed * cruiseSpeed + aparams.inducedK / (cruiseSpeed * cruiseSpeed + 1);
  const cruiseThrottle = drag0 / aparams.maxThrust;
  const state = { heading: 0, bank: 0, pitch: 0, speed: cruiseSpeed, vspeed: 0, altASL: 1000 };
  const env = { groundElev: 0, dt: 1 / 60 };
  const input = { ...baseInput(), throttle: cruiseThrottle };
  const alt0 = state.altASL;
  for (let i = 0; i < 100; i++) stepAirplane(state, input, aparams, env);
  ok(Math.abs(state.altASL - alt0) < 5, `airplane level cruise holds altitude (drifted ${(state.altASL - alt0).toFixed(3)}m over 100 steps)`);
}

// bank -> turn rate ~ G*tan(bank)/speed; doubling speed halves turn rate
// (dt kept tiny so the concurrent thrust/drag speed integration doesn't perturb
// the speed value the turn-rate equation itself uses this same step)
{
  const bank = 0.3;
  const rollAxis = bank / aparams.maxBank;
  const dt = 1e-6;
  const state1 = { heading: 0, bank, pitch: 0, speed: 60, vspeed: 0, altASL: 0 };
  const step1 = stepAirplane(state1, { ...baseInput(), rollAxis }, aparams, { groundElev: 0, dt });
  const yawRate1 = step1.heading / dt;
  const expected1 = G * Math.tan(bank) / 60;
  ok(Math.abs(yawRate1 - expected1) < 1e-3, 'airplane: yawRate matches G*tan(bank)/speed');

  const state2 = { heading: 0, bank, pitch: 0, speed: 120, vspeed: 0, altASL: 0 };
  const step2 = stepAirplane(state2, { ...baseInput(), rollAxis }, aparams, { groundElev: 0, dt });
  const yawRate2 = step2.heading / dt;
  ok(Math.abs(yawRate2 - yawRate1 / 2) < 1e-3, 'airplane: double speed at same bank -> half turn rate');
}

// below stall speed: stall true, reduced control authority (bank rate), and sinks
{
  const stateStall = { heading: 0, bank: 0, pitch: 0, speed: 10, vspeed: 0, altASL: 0 };
  const dt = 0.01;
  const stepStall = stepAirplane(stateStall, { ...baseInput(), rollAxis: 1 }, aparams, { groundElev: 0, dt });
  ok(stepStall.stall === true, 'airplane: below stall speed -> stall===true');
  const bankDeltaStalled = Math.abs(stepStall.bank);

  const stateNormal = { heading: 0, bank: 0, pitch: 0, speed: 60, vspeed: 0, altASL: 0 };
  const stepNormal = stepAirplane(stateNormal, { ...baseInput(), rollAxis: 1 }, aparams, { groundElev: 0, dt });
  const bankDeltaNormal = Math.abs(stepNormal.bank);
  ok(bankDeltaStalled < bankDeltaNormal, 'airplane: stalled control authority (bank rate) reduced vs normal flight');

  const sinkState = { heading: 0, bank: 0, pitch: 0, speed: 10, vspeed: 0, altASL: 100 };
  const sinkStep = stepAirplane(sinkState, baseInput(), aparams, { groundElev: 0, dt: 0.1 });
  ok(sinkStep.vspeed < 0, 'airplane: stalled aircraft sinks (vspeed<0)');
}

// sustained climb bleeds airspeed; dive gains it (vs level, all starting at same speed)
{
  const dt = 0.1;
  const levelState = { heading: 0, bank: 0, pitch: 0, speed: 60, vspeed: 0, altASL: 0 };
  const levelStep = stepAirplane(levelState, { ...baseInput(), throttle: 0.9 }, aparams, { groundElev: 0, dt });

  const climbState = { heading: 0, bank: 0, pitch: aparams.maxPitch, speed: 60, vspeed: 0, altASL: 0 };
  const climbStep = stepAirplane(climbState, { ...baseInput(), throttle: 0.9, pitchAxis: 1 }, aparams, { groundElev: 0, dt });
  ok(climbStep.speed < levelStep.speed, 'airplane: sustained climb bleeds airspeed vs level');

  const diveState = { heading: 0, bank: 0, pitch: -aparams.maxPitch, speed: 60, vspeed: 0, altASL: 0 };
  const diveStep = stepAirplane(diveState, { ...baseInput(), throttle: 0.9, pitchAxis: -1 }, aparams, { groundElev: 0, dt });
  ok(diveStep.speed > levelStep.speed, 'airplane: dive gains airspeed vs level');
}

// full-throttle sustained climb asymptotes (thrust falls with altitude)
{
  const state = { heading: 0, bank: 0, pitch: 0.15, speed: 60, vspeed: 0, altASL: 0 };
  const input = { ...baseInput(), throttle: 1, pitchAxis: 0.15 / aparams.maxPitch };
  const env = { groundElev: 0, dt: 0.1 };
  const vspeeds = [];
  for (let i = 0; i < 500; i++) { const s = stepAirplane(state, input, aparams, env); vspeeds.push(s.vspeed); }
  const earlyDelta = Math.abs(vspeeds[99] - vspeeds[0]);
  const lateDelta = Math.abs(vspeeds[499] - vspeeds[450]);
  ok(lateDelta < earlyDelta, 'airplane: climb rate change decelerates (asymptotes) rather than diverging');
}

// ias < speed at altitude, equal at sea level
{
  const seaState = { heading: 0, bank: 0, pitch: 0, speed: 60, vspeed: 0, altASL: 0 };
  const seaStep = stepAirplane(seaState, baseInput(), aparams, { groundElev: 0, dt: 0 });
  ok(Math.abs(seaStep.ias - seaStep.speed) < 1e-9, 'airplane: ias===speed at sea level');

  const altState = { heading: 0, bank: 0, pitch: 0, speed: 60, vspeed: 0, altASL: 5000 };
  const altStep = stepAirplane(altState, baseInput(), aparams, { groundElev: 0, dt: 0 });
  ok(altStep.ias < altStep.speed, 'airplane: ias<speed at altitude');
}

// --- helicopter ---
const hparams = {
  translationalGain: 0.2, translationalSpeed: 15,
  groundEffectGain: 0.3, rotorDiameter: 10,
  hoverCollective: 0.5, collectivePower: 6,
  vDamp: 0.5, maxVspeed: 10,
  maxPitch: 0.3, pitchRate: 1.0, dragK: 0.01,
  maxRearSpeed: 10, maxSpeed: 60,
  maxBank: 0.6, rollRate: 1.5,
  pedalYawRate: 1.2, rotorRpmNominal: 400,
  maxG: 3, vne: 70,
  gpwsPullup: 150, gpwsCaution: 300, gpwsSinkRate: 5,
};

// yaw works at zero airspeed (pedals rotate a hovering aircraft) -- contrast with airplane
{
  const heliState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100 };
  const heliStep = stepHelicopter(heliState, { ...baseInput(), yawAxis: 1, throttle: hparams.hoverCollective }, hparams, { groundElev: 0, dt: 1 });
  ok(heliStep.heading !== 0, 'helicopter: pedal yaw rotates aircraft at zero airspeed');

  const planeState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100 };
  const planeStep = stepAirplane(planeState, { ...baseInput(), yawAxis: 1 }, aparams, { groundElev: 0, dt: 1 });
  ok(Math.abs(heliStep.heading) > Math.abs(planeStep.heading) * 10, 'helicopter: pedal yaw far stronger than airplane rudder at zero airspeed');
}

// collective at exactly hoverCollective holds altitude; above it climbs
{
  const hoverState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 500 };
  const env = { groundElev: 0, dt: 0.1 };
  const input = { ...baseInput(), throttle: hparams.hoverCollective };
  for (let i = 0; i < 50; i++) stepHelicopter(hoverState, input, hparams, env);
  ok(Math.abs(hoverState.altASL - 500) < 1, 'helicopter: collective===hoverCollective holds altitude');

  const climbState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 500 };
  const climbInput = { ...baseInput(), throttle: hparams.hoverCollective + 0.1 };
  for (let i = 0; i < 50; i++) stepHelicopter(climbState, climbInput, hparams, env);
  ok(climbState.altASL > 500, 'helicopter: collective above hoverCollective climbs');
}

// ground effect: more lift near the ground than at altitude for identical collective
// (altASL held equal so rho is identical; only groundElev/altAGL differs)
{
  const input = { ...baseInput(), throttle: hparams.hoverCollective + 0.1 };
  const nearState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 1000 };
  const nearStep = stepHelicopter(nearState, input, hparams, { groundElev: 999, dt: 0.01 });
  const farState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 1000 };
  const farStep = stepHelicopter(farState, input, hparams, { groundElev: 0, dt: 0.01 });
  ok(nearStep.vspeed > farStep.vspeed, 'helicopter: ground effect gives more lift near ground (same collective, same rho)');
}

// --- drone ---
const dparams = {
  maxTilt: 0.5, tiltRate: 2, tiltReturn: 1.5,
  dragK: 0.05, maxSpeed: 15,
  yawRate: 2,
  altHoldDamp: 2, maxClimbRate: 5, climbAccel: 3,
  batteryDrain: 0.02, batteryLimp: 0.2,
  maxG: 3,
  gpwsPullup: 20, gpwsCaution: 50, gpwsSinkRate: 3,
};

// strafes: pure roll, zero pitch, heading=0 -> lateral world velocity, no forward velocity
{
  const state = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100, velX: 0, velZ: 0, battery: 1 };
  const step = stepDrone(state, { ...baseInput(), rollAxis: 1 }, dparams, { groundElev: 0, dt: 0.5 });
  ok(Math.abs(state.velX) > 0.1, 'drone: pure roll produces lateral (velX) world displacement');
  ok(Math.abs(state.velZ) < 1e-6, 'drone: pure roll produces no forward (velZ) displacement');
  ok(step.speed > 0, 'drone: horizontal speed nonzero while strafing');
}

// altitude hold: centred climb axis drives vspeed to ~0 and holds altitude
{
  const state = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 3, altASL: 100, velX: 0, velZ: 0, battery: 1 };
  const env = { groundElev: 0, dt: 0.5 };
  let lastStep;
  for (let i = 0; i < 10; i++) lastStep = stepDrone(state, baseInput(), dparams, env);
  ok(lastStep.altHold === true, 'drone: altHold===true with centred climb axis');
  ok(Math.abs(state.vspeed) < 0.05, 'drone: vspeed eased to ~0 under altitude hold');
}

// battery drains and limp mode reduces performance
{
  const state = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100, velX: 0, velZ: 0, battery: 1 };
  const input = { ...baseInput(), rollAxis: 1 };
  const env = { groundElev: 0, dt: 1 };
  const b0 = state.battery;
  for (let i = 0; i < 5; i++) stepDrone(state, input, dparams, env);
  ok(state.battery < b0, 'drone: battery drains under sustained control input');

  // drive one battery to below the limp threshold, compare achieved top speed vs full battery,
  // at a realistic dt so terminal (drag-limited) velocity is actually reached before either
  // battery drains through the limp threshold itself
  const limpEnv = { groundElev: 0, dt: 1 / 60 };
  const limpState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100, velX: 0, velZ: 0, battery: dparams.batteryLimp - 0.01 };
  const fullState = { heading: 0, bank: 0, pitch: 0, speed: 0, vspeed: 0, altASL: 100, velX: 0, velZ: 0, battery: 1 };
  let limpStep, fullStep;
  for (let i = 0; i < 300; i++) {
    limpStep = stepDrone(limpState, input, dparams, limpEnv);
    fullStep = stepDrone(fullState, input, dparams, limpEnv);
  }
  ok(limpStep.speed < fullStep.speed, 'drone: limp mode (low battery) achieves lower top speed than full battery');
  ok(Math.abs(limpStep.speed - dparams.maxSpeed * 0.4) < 0.01, 'drone: limp mode clamps speed at maxSpeed*0.4');
}

// --- GPWS escalation (all three models share the shared helper; exercised via helicopter,
// which lets state.vspeed pass through near-unchanged at a tiny dt for direct control) ---
{
  const mk = (altAGL, vspeed) => ({ heading: 0, bank: 0, pitch: 0, speed: 0, vspeed, altASL: altAGL, });
  const input = { ...baseInput(), throttle: hparams.hoverCollective };
  const env = { groundElev: 0, dt: 1e-6 };

  const none = stepHelicopter(mk(1000, -1), input, hparams, env);
  ok(none.gpws === 'none', 'gpws: high AGL, mild sink -> none');

  const caution = stepHelicopter(mk(200, -1), input, hparams, env);
  ok(caution.gpws === 'caution', 'gpws: AGL below caution threshold -> caution');

  const pullup = stepHelicopter(mk(100, -10), input, hparams, env);
  ok(pullup.gpws === 'pullup', 'gpws: low AGL + high sink rate -> pullup');
}

// --- no NaN under random inputs, all three models, 500 steps ---
{
  const rand = () => Math.random() * 2 - 1;
  const rand01 = () => Math.random();
  const numericFields = ['speed', 'ias', 'altAGL', 'altASL', 'vspeed', 'heading', 'bank', 'pitch', 'gForce', 'throttle'];

  const checkNoNaN = (name, stepFn, params) => {
    const state = { heading: 0, bank: 0, pitch: 0, speed: 20, vspeed: 0, altASL: 500, velX: 0, velZ: 0, battery: 1 };
    let clean = true;
    for (let i = 0; i < 500; i++) {
      const input = {
        pitchAxis: rand(), rollAxis: rand(), yawAxis: rand(),
        throttle: rand01(), climbAxis: rand(),
        gearDown: Math.random() > 0.5, flaps: rand01(), brake: rand01(),
      };
      const env = { groundElev: rand() * 100, dt: 1 / 60 };
      const step = stepFn(state, input, params, env);
      for (const f of numericFields) if (!Number.isFinite(step[f])) clean = false;
    }
    ok(clean, `${name}: no NaN across 500 random-input steps`);
  };

  checkNoNaN('airplane', stepAirplane, aparams);
  checkNoNaN('helicopter', stepHelicopter, hparams);
  checkNoNaN('drone', stepDrone, dparams);
}

if (failed) { console.error(`${failed} check(s) failed`); process.exit(1); }
console.log('flight OK');
