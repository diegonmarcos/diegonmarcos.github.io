// ponytail: mirrors street.test.mjs — node 22's unflagged type-stripping resolves
// the .ts import directly, no --experimental-strip-types needed.
import { droneParams, helicopterParams, airplaneParams, activeWarning } from '../src/lib/flightAudio.ts';

// --- droneParams ---
{
  const t = { speed: 0, vspeed: 0 };
  const { freq, gain } = droneParams(t);
  if (Math.abs(freq - 90) > 1e-9) {
    throw new Error(`droneParams zero workload expected freq ~90, got ${freq}`);
  }
  if (gain < 0.1 || gain > 0.2) {
    throw new Error(`droneParams zero workload gain out of expected range: ${gain}`);
  }
}

{
  const low = droneParams({ speed: 1, vspeed: 0 });
  const mid = droneParams({ speed: 12, vspeed: 3 });
  const high = droneParams({ speed: 25, vspeed: 6 });
  if (!(low.freq < mid.freq && mid.freq < high.freq)) {
    throw new Error(`droneParams freq should increase with workload: ${low.freq} ${mid.freq} ${high.freq}`);
  }
  if (!(low.gain < mid.gain && mid.gain < high.gain)) {
    throw new Error(`droneParams gain should increase with workload: ${low.gain} ${mid.gain} ${high.gain}`);
  }
}

{
  const t = { speed: NaN, vspeed: NaN };
  const { freq, gain } = droneParams(t);
  if (!Number.isFinite(freq) || !Number.isFinite(gain)) {
    throw new Error(`droneParams with NaN telemetry must return finite values, got freq=${freq} gain=${gain}`);
  }
}

// --- helicopterParams ---
{
  const { lfoRate } = helicopterParams({ rotorRpm: 120 });
  const expected = (120 / 60) * 2;
  if (Math.abs(lfoRate - expected) > 1e-9) {
    throw new Error(`helicopterParams rotorRpm=120 expected lfoRate ${expected}, got ${lfoRate}`);
  }
}

{
  const { lfoRate } = helicopterParams({ rotorRpm: null });
  if (Math.abs(lfoRate - 13) > 1e-9) {
    throw new Error(`helicopterParams rotorRpm=null expected fallback 13, got ${lfoRate}`);
  }
}

{
  const { lfoRate } = helicopterParams({});
  if (Math.abs(lfoRate - 13) > 1e-9) {
    throw new Error(`helicopterParams rotorRpm=undefined expected fallback 13, got ${lfoRate}`);
  }
}

{
  const low = helicopterParams({ torque: 0 });
  const mid = helicopterParams({ torque: 0.5 });
  const high = helicopterParams({ torque: 1 });
  if (!(low.thumpDepth < mid.thumpDepth && mid.thumpDepth < high.thumpDepth)) {
    throw new Error(`helicopterParams thumpDepth should increase with torque: ${low.thumpDepth} ${mid.thumpDepth} ${high.thumpDepth}`);
  }
}

{
  const t = { rotorRpm: NaN, torque: NaN, throttle: NaN };
  const { lfoRate, thumpDepth, engineFreq } = helicopterParams(t);
  if (!Number.isFinite(lfoRate) || !Number.isFinite(thumpDepth) || !Number.isFinite(engineFreq)) {
    throw new Error(`helicopterParams with NaN telemetry must return finite values, got ${JSON.stringify({ lfoRate, thumpDepth, engineFreq })}`);
  }
}

// --- airplaneParams ---
{
  const { filterFreq, toneFreq } = airplaneParams({ ias: 0 });
  if (filterFreq !== 300 || toneFreq !== 70) {
    throw new Error(`airplaneParams ias=0 expected filterFreq=300 toneFreq=70, got ${filterFreq} ${toneFreq}`);
  }
}

{
  const { filterFreq, toneFreq } = airplaneParams({ ias: 100 });
  if (filterFreq !== 1500 || toneFreq !== 120) {
    throw new Error(`airplaneParams ias=100 expected filterFreq=1500 toneFreq=120, got ${filterFreq} ${toneFreq}`);
  }
}

{
  const low = airplaneParams({ ias: 50, throttle: 0 });
  const high = airplaneParams({ ias: 50, throttle: 1 });
  if (!(low.gain < high.gain)) {
    throw new Error(`airplaneParams gain should increase with throttle: ${low.gain} ${high.gain}`);
  }
}

{
  const t = { ias: NaN, throttle: NaN };
  const { filterFreq, toneFreq, gain } = airplaneParams(t);
  if (!Number.isFinite(filterFreq) || !Number.isFinite(toneFreq) || !Number.isFinite(gain)) {
    throw new Error(`airplaneParams with NaN telemetry must return finite values, got ${JSON.stringify({ filterFreq, toneFreq, gain })}`);
  }
}

// --- activeWarning ---
{
  const got = activeWarning({ stall: true });
  if (got !== 'stall') throw new Error(`activeWarning stall-only expected 'stall', got ${got}`);
}

{
  const got = activeWarning({ gpws: 'pullup' });
  if (got !== 'pullup') throw new Error(`activeWarning pullup-only expected 'pullup', got ${got}`);
}

{
  const got = activeWarning({ overspeed: true });
  if (got !== 'overspeed') throw new Error(`activeWarning overspeed-only expected 'overspeed', got ${got}`);
}

{
  const got = activeWarning({});
  if (got !== null) throw new Error(`activeWarning none expected null, got ${got}`);
}

{
  // pullup must outrank stall when both are active simultaneously
  const got = activeWarning({ stall: true, gpws: 'pullup' });
  if (got !== 'pullup') throw new Error(`activeWarning stall+pullup expected 'pullup' to win, got ${got}`);
}

console.log('audio OK');
