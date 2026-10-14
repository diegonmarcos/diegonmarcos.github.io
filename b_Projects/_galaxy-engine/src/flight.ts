// Pure, framework-agnostic flight-dynamics step — no three/threlte/DOM. Mirrors the
// locomotion.ts contract: state mutated in place, params passed in, a single step
// function per vehicle class returning a flat telemetry record. Three vehicle
// classes share one telemetry shape (FlightTelemetry) so a cockpit UI can bind to
// it uniformly; fields that don't apply to a given model are `null`, never 0 or
// omitted.

export const G = 9.80665;

const clamp = (x: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, x));
const nz = (x: number | undefined): number => (x != null && Number.isFinite(x) ? x : 0);
// move `cur` toward `target` by at most `maxDelta` (magnitude), never overshooting
const moveToward = (cur: number, target: number, maxDelta: number): number => {
  const d = target - cur;
  const step = Math.abs(maxDelta);
  if (Math.abs(d) <= step) return target;
  return cur + Math.sign(d) * step;
};
const gpws = (altAGL: number, vspeed: number, pullup: number, caution: number, sinkRate: number): 'none' | 'caution' | 'pullup' => {
  if (altAGL < pullup && vspeed < -sinkRate) return 'pullup';
  if (altAGL < caution) return 'caution';
  return 'none';
};

// air density ratio vs sea level, ISA-ish exponential falloff
export function airDensityRatio(altASL: number): number {
  return Math.exp(-nz(altASL) / 8500);
}

export interface FlightTelemetry {
  speed: number;      // TAS, m/s
  ias: number;        // indicated airspeed, m/s
  altAGL: number;     // m above ground
  altASL: number;     // m above sea level
  vspeed: number;     // m/s, + = climbing
  heading: number;    // rad
  bank: number;       // rad, + = right wing down
  pitch: number;      // rad, + = nose up
  gForce: number;
  throttle: number;   // 0..1
  stall: boolean;
  overspeed: boolean;
  gpws: 'none' | 'caution' | 'pullup';
  gearDown: boolean;
  flaps: number;      // 0..1
  rotorRpm: number | null;   // helicopter only
  torque: number | null;     // helicopter only
  battery: number | null;    // drone only
  altHold: boolean | null;   // drone only
}

export interface FlightState {
  heading: number; bank: number; pitch: number;
  speed: number; vspeed: number; altASL: number;
  velX?: number; velZ?: number;   // drone only — it strafes, so it needs a velocity vector
  battery?: number;
}
export interface FlightInput {
  pitchAxis: number;  // -1..1  elevator / cyclic fwd-aft / drone tilt
  rollAxis: number;   // -1..1  aileron / cyclic lateral / drone tilt
  yawAxis: number;    // -1..1  rudder / pedals / drone yaw
  throttle: number;   // 0..1   throttle / collective / drone climb axis is climbAxis below
  climbAxis: number;  // -1..1  drone vertical stick; ignored by airplane
  gearDown: boolean; flaps: number; brake: number;
}
export interface FlightEnv { groundElev: number; dt: number }  // groundElev metres ASL under the aircraft

export interface AirplaneParams {
  stallSpeed: number; flapStallReduction: number;
  maxPitch: number; pitchRate: number;
  maxBank: number; rollRate: number; rollReturn: number;
  maxThrust: number; dragK: number; inducedK: number;
  brakeDecel: number; stallSink: number; rudderYawRate: number;
  maxG: number; vne: number;
  gearDragK: number; flapDragK: number;
  gpwsPullup: number; gpwsCaution: number; gpwsSinkRate: number;
}

export function stepAirplane(state: FlightState, input: FlightInput, params: AirplaneParams, env: FlightEnv): FlightTelemetry {
  const dt = nz(env.dt);
  const groundElev = nz(env.groundElev);
  const pitchAxis = clamp(nz(input.pitchAxis), -1, 1);
  const rollAxis = clamp(nz(input.rollAxis), -1, 1);
  const yawAxis = clamp(nz(input.yawAxis), -1, 1);
  const throttle = clamp(nz(input.throttle), 0, 1);
  const flaps = clamp(nz(input.flaps), 0, 1);
  const brake = clamp(nz(input.brake), 0, 1);
  const gearDown = !!input.gearDown;

  const altASLIn = nz(state.altASL);
  const rho = airDensityRatio(altASLIn);
  const speedIn = Math.max(0, nz(state.speed));
  const ias = speedIn * Math.sqrt(rho);

  const stallSpeedEff = params.stallSpeed * (1 - flaps * params.flapStallReduction);
  const stall = ias < stallSpeedEff;
  const authority = clamp((ias - 0.6 * stallSpeedEff) / Math.max(1e-6, 0.4 * stallSpeedEff), 0.15, 1);

  // pitch: move toward commanded target, clamped to travel limits
  const pitchTarget = clamp(pitchAxis * params.maxPitch, -params.maxPitch, params.maxPitch);
  let pitch = clamp(moveToward(nz(state.pitch), pitchTarget, params.pitchRate * authority * dt), -params.maxPitch, params.maxPitch);

  // bank: move toward commanded target, or ease to 0 (positive stability) near centre stick
  let bank: number;
  if (Math.abs(rollAxis) < 0.05) {
    bank = moveToward(nz(state.bank), 0, params.rollReturn * dt);
  } else {
    const bankTarget = clamp(rollAxis * params.maxBank, -params.maxBank, params.maxBank);
    bank = moveToward(nz(state.bank), bankTarget, params.rollRate * authority * dt);
  }
  bank = clamp(bank, -params.maxBank, params.maxBank);

  // thrust/drag
  const thrust = throttle * params.maxThrust * rho;
  const drag = params.dragK * speedIn * speedIn + params.inducedK / (speedIn * speedIn + 1)
    + (gearDown ? params.gearDragK : 0) + flaps * params.flapDragK;
  let speed = speedIn + (thrust - drag - G * Math.sin(pitch) - brake * params.brakeDecel) * dt;
  speed = Math.max(0, speed);

  if (stall) pitch -= params.stallSink * dt;

  // coordinated turn (uncoordinated rudder adds a bit on top)
  const yawRate = (speed > 1 ? G * Math.tan(bank) / speed : 0) + yawAxis * params.rudderYawRate * authority;
  const heading = nz(state.heading) + yawRate * dt;

  const vspeed = speed * Math.sin(pitch) - (stall ? params.stallSink : 0);
  const altASL = altASLIn + vspeed * dt;

  const gForce = clamp(1 / Math.max(Math.cos(bank), 0.05), 0, params.maxG);
  const overspeed = ias > params.vne;

  state.heading = heading; state.bank = bank; state.pitch = pitch;
  state.speed = speed; state.vspeed = vspeed; state.altASL = altASL;

  const altAGL = Math.max(0, altASL - groundElev);

  return {
    speed, ias, altAGL, altASL, vspeed, heading, bank, pitch,
    gForce, throttle, stall, overspeed,
    gpws: gpws(altAGL, vspeed, params.gpwsPullup, params.gpwsCaution, params.gpwsSinkRate),
    gearDown, flaps,
    rotorRpm: null, torque: null, battery: null, altHold: null,
  };
}

export interface HelicopterParams {
  translationalGain: number; translationalSpeed: number;
  groundEffectGain: number; rotorDiameter: number;
  hoverCollective: number; collectivePower: number;
  vDamp: number; maxVspeed: number;
  maxPitch: number; pitchRate: number; dragK: number;
  maxRearSpeed: number; maxSpeed: number;
  maxBank: number; rollRate: number;
  pedalYawRate: number; rotorRpmNominal: number;
  maxG: number; vne: number;
  gpwsPullup: number; gpwsCaution: number; gpwsSinkRate: number;
}

export function stepHelicopter(state: FlightState, input: FlightInput, params: HelicopterParams, env: FlightEnv): FlightTelemetry {
  const dt = nz(env.dt);
  const groundElev = nz(env.groundElev);
  const pitchAxis = clamp(nz(input.pitchAxis), -1, 1);
  const rollAxis = clamp(nz(input.rollAxis), -1, 1);
  const yawAxis = clamp(nz(input.yawAxis), -1, 1);
  const throttle = clamp(nz(input.throttle), 0, 1);
  const flaps = clamp(nz(input.flaps), 0, 1);
  const gearDown = !!input.gearDown;

  const altASLIn = nz(state.altASL);
  const rho = airDensityRatio(altASLIn);
  const altAGLIn = Math.max(0, altASLIn - groundElev);
  const speedIn = nz(state.speed); // signed: + forward, - rearward

  const transLift = 1 + params.translationalGain * Math.min(1, Math.abs(speedIn) / Math.max(1e-6, params.translationalSpeed));
  const groundEffect = 1 + params.groundEffectGain * Math.max(0, 1 - altAGLIn / Math.max(1e-6, params.rotorDiameter));
  const vaccel = (throttle - params.hoverCollective) * params.collectivePower * rho * transLift * groundEffect;

  let vspeed = nz(state.vspeed) + vaccel * dt;
  vspeed *= Math.max(0, 1 - params.vDamp * dt);
  vspeed = clamp(vspeed, -params.maxVspeed, params.maxVspeed);
  const altASL = altASLIn + vspeed * dt;

  // cyclic pitch drives forward/rearward accel
  const pitchTarget = clamp(pitchAxis * params.maxPitch, -params.maxPitch, params.maxPitch);
  const pitch = clamp(moveToward(nz(state.pitch), pitchTarget, params.pitchRate * dt), -params.maxPitch, params.maxPitch);
  let speed = speedIn + (-G * Math.tan(pitch) - params.dragK * speedIn * Math.abs(speedIn)) * dt;
  speed = clamp(speed, -params.maxRearSpeed, params.maxSpeed);

  const bankTarget = clamp(rollAxis * params.maxBank, -params.maxBank, params.maxBank);
  const bank = clamp(moveToward(nz(state.bank), bankTarget, params.rollRate * dt), -params.maxBank, params.maxBank);

  // yaw is direct — pedals work even at zero airspeed
  const yawRate = yawAxis * params.pedalYawRate + (speed > 1 ? G * Math.tan(bank) / speed : 0);
  const heading = nz(state.heading) + yawRate * dt;

  const rotorRpm = params.rotorRpmNominal * (0.85 + 0.15 * throttle);
  const torque = clamp(throttle * 0.7 + Math.min(1, Math.abs(vaccel) / Math.max(1e-6, params.collectivePower)) * 0.3, 0, 1);
  const gForce = clamp(1 / Math.max(Math.cos(bank), 0.05), 0, params.maxG);
  const speedMag = Math.abs(speed);
  const overspeed = speedMag > params.vne;

  state.pitch = pitch; state.bank = bank; state.heading = heading;
  state.speed = speed; state.vspeed = vspeed; state.altASL = altASL;

  const altAGL = Math.max(0, altASL - groundElev);

  return {
    speed: speedMag, ias: speedMag, altAGL, altASL, vspeed, heading, bank, pitch,
    gForce, throttle, stall: false, overspeed,
    gpws: gpws(altAGL, vspeed, params.gpwsPullup, params.gpwsCaution, params.gpwsSinkRate),
    gearDown, flaps,
    rotorRpm, torque, battery: null, altHold: null,
  };
}

export interface DroneParams {
  maxTilt: number; tiltRate: number; tiltReturn: number;
  dragK: number; maxSpeed: number;
  yawRate: number;
  altHoldDamp: number; maxClimbRate: number; climbAccel: number;
  batteryDrain: number; batteryLimp: number;
  maxG: number;
  gpwsPullup: number; gpwsCaution: number; gpwsSinkRate: number;
}

export function stepDrone(state: FlightState, input: FlightInput, params: DroneParams, env: FlightEnv): FlightTelemetry {
  const dt = nz(env.dt);
  const groundElev = nz(env.groundElev);
  const pitchAxis = clamp(nz(input.pitchAxis), -1, 1);
  const rollAxis = clamp(nz(input.rollAxis), -1, 1);
  const yawAxis = clamp(nz(input.yawAxis), -1, 1);
  const climbAxis = clamp(nz(input.climbAxis), -1, 1);
  const flaps = clamp(nz(input.flaps), 0, 1);
  const gearDown = !!input.gearDown;

  const battery = clamp(nz(state.battery ?? 1), 0, 1);
  const limp = battery < params.batteryLimp;
  const maxSpeedEff = params.maxSpeed * (limp ? 0.4 : 1);
  const maxClimbRateEff = params.maxClimbRate * (limp ? 0.4 : 1);

  // tilt (angle mode): move toward stick target, self-level near centre
  const pitchTarget = clamp(pitchAxis * params.maxTilt, -params.maxTilt, params.maxTilt);
  const pitch = Math.abs(pitchAxis) < 0.05
    ? moveToward(nz(state.pitch), 0, params.tiltReturn * dt)
    : clamp(moveToward(nz(state.pitch), pitchTarget, params.tiltRate * dt), -params.maxTilt, params.maxTilt);
  const bankTarget = clamp(rollAxis * params.maxTilt, -params.maxTilt, params.maxTilt);
  const bank = Math.abs(rollAxis) < 0.05
    ? moveToward(nz(state.bank), 0, params.tiltReturn * dt)
    : clamp(moveToward(nz(state.bank), bankTarget, params.tiltRate * dt), -params.maxTilt, params.maxTilt);

  const heading = nz(state.heading) + yawAxis * params.yawRate * dt;

  // body-frame horizontal accel: forward from pitch, lateral from bank; rotate into world axes
  const fwdAccel = -G * Math.tan(pitch);
  const latAccel = G * Math.tan(bank);
  const fwdX = Math.sin(heading), fwdZ = Math.cos(heading);
  const rightX = Math.cos(heading), rightZ = -Math.sin(heading);

  let velX = nz(state.velX) + (fwdAccel * fwdX + latAccel * rightX) * dt;
  let velZ = nz(state.velZ) + (fwdAccel * fwdZ + latAccel * rightZ) * dt;
  velX -= params.dragK * Math.abs(velX) * velX * dt;
  velZ -= params.dragK * Math.abs(velZ) * velZ * dt;

  const hMag = Math.hypot(velX, velZ);
  if (hMag > maxSpeedEff && hMag > 0) {
    const scale = maxSpeedEff / hMag;
    velX *= scale; velZ *= scale;
  }
  const speed = Math.hypot(velX, velZ);

  // altitude hold — the drone's signature behaviour
  let vspeed = nz(state.vspeed);
  let altHold: boolean;
  if (Math.abs(climbAxis) < 0.05) {
    vspeed = moveToward(vspeed, 0, params.altHoldDamp * dt);
    altHold = true;
  } else {
    vspeed = moveToward(vspeed, climbAxis * maxClimbRateEff, params.climbAccel * dt);
    altHold = false;
  }
  const altASL = nz(state.altASL) + vspeed * dt;

  const throttleDemand = clamp(Math.max(Math.abs(pitchAxis), Math.abs(rollAxis), Math.abs(climbAxis)), 0, 1);
  const nextBattery = clamp(battery - params.batteryDrain * (0.3 + 0.7 * throttleDemand) * dt, 0, 1);

  const tiltMag = Math.max(Math.abs(pitch), Math.abs(bank));
  const gForce = clamp(1 / Math.max(Math.cos(tiltMag), 0.05), 0, params.maxG);

  state.pitch = pitch; state.bank = bank; state.heading = heading;
  state.velX = velX; state.velZ = velZ; state.speed = speed;
  state.vspeed = vspeed; state.altASL = altASL; state.battery = nextBattery;

  const altAGL = Math.max(0, altASL - groundElev);

  return {
    speed, ias: speed, altAGL, altASL, vspeed, heading, bank, pitch,
    gForce, throttle: throttleDemand, stall: false, overspeed: false,
    gpws: gpws(altAGL, vspeed, params.gpwsPullup, params.gpwsCaution, params.gpwsSinkRate),
    gearDown, flaps,
    rotorRpm: null, torque: null, battery: nextBattery, altHold,
  };
}
