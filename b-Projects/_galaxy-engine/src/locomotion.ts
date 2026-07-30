// Pure, framework-agnostic ride step — no three/threlte/DOM. FreeRig (x1) and the
// earth GTA rider both call this each frame; everything else (camera boom, overview
// zoom, bounds clamping) stays per-scene.
// Optional inertia + altitude mechanics (all opt-in, backward-compatible): pass
// `accel` for eased/coasting speed (cycle/drive/sail) instead of instant throttle
// (walk/x1, unchanged when omitted); pass `lift`+`maxAlt` and drive `climb` for
// vertical movement (fly). x1 passes none of these, so its output is byte-identical.
export interface RideState { heading: number; speed?: number; altitude?: number }
export interface RideInput { steer: number; throttle: number; climb?: number }
export interface RideParams { speed: number; turn: number; steerSign?: number; accel?: number; lift?: number; maxAlt?: number }
export interface RideStep { heading: number; forwardX: number; forwardZ: number; dForward: number; altitude: number }

export function stepRide(state: RideState, input: RideInput, params: RideParams, dt: number): RideStep {
  state.heading += input.steer * params.turn * (params.steerSign ?? 1) * dt;
  const forwardX = Math.sin(state.heading), forwardZ = Math.cos(state.heading);
  const target = input.throttle * params.speed;
  if (params.accel != null) {
    const k = 1 - Math.exp(-params.accel * dt);
    const current = state.speed ?? 0; // fresh state starts at rest, not at target — so frame 1 actually eases
    state.speed = current + (target - current) * k;
  } else {
    state.speed = target; // instant = walk (x1 path, unchanged)
  }
  const dForward = (state.speed ?? target) * dt;
  if (params.lift != null) {
    const maxAlt = params.maxAlt ?? Infinity;
    state.altitude = Math.max(0, Math.min((state.altitude ?? 0) + (input.climb ?? 0) * params.lift * dt, maxAlt));
  } else {
    state.altitude = state.altitude ?? 0;
  }
  return { heading: state.heading, forwardX, forwardZ, dForward, altitude: state.altitude ?? 0 };
}

// Camera-relative twin-stick drive step — same pure/no-DOM contract as stepRide,
// but heading is driven toward a desired bearing (stick + camera) rather than
// integrated from a steer rate. Used by vehicles with free-look cameras.
export interface DriveInput { moveX: number; moveY: number; camBearing: number; climb?: number }
export interface DriveParams { min: number; cruise?: number; idle?: number; max: number; turn?: number; accel?: number; lift?: number; maxAlt?: number; minAlt?: number; deadzone?: number; turnAtMax?: number; speedRef?: number }

export function stepDrive(state: RideState, input: DriveInput, params: DriveParams, dt: number): RideStep {
  let mag = Math.hypot(input.moveX, input.moveY);
  if (mag < (params.deadzone ?? 0)) mag = 0;
  if (mag > 0) {
    const desired = input.camBearing + Math.atan2(input.moveX, input.moveY);
    let delta = (desired - state.heading) % (2 * Math.PI);
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;
    if (params.turn != null) {
      const vRatio = params.speedRef && params.speedRef > 0
        ? Math.min(1, Math.abs(state.speed ?? 0) / params.speedRef)
        : 0;
      const turnScale = params.turnAtMax == null ? 1 : params.turnAtMax + (1 - params.turnAtMax) * (1 - vRatio);
      const maxStep = params.turn * turnScale * dt;
      delta = Math.max(-maxStep, Math.min(maxStep, delta));
    }
    state.heading += delta;
  }
  const forwardX = Math.sin(state.heading), forwardZ = -Math.cos(state.heading);
  let target;
  if (mag <= 0) {
    target = params.idle ?? params.min; // airplane stall-cruise vs car full stop
  } else {
    const m = Math.min(mag, 1);
    target = params.cruise == null
      ? params.min + m * (params.max - params.min)                        // unchanged linear path
      : m <= 0.5 ? params.min + (m / 0.5) * (params.cruise - params.min)
                 : params.cruise + ((m - 0.5) / 0.5) * (params.max - params.cruise);
  }
  if (params.accel != null) {
    const k = 1 - Math.exp(-params.accel * dt);
    const current = state.speed ?? 0;
    state.speed = current + (target - current) * k;
  } else {
    state.speed = target;
  }
  const dForward = (state.speed ?? target) * dt;
  const minAlt = params.minAlt ?? 0;
  const maxAlt = params.maxAlt ?? Infinity;
  state.altitude = Math.min(maxAlt, Math.max(minAlt, (state.altitude ?? 0) + (params.lift != null ? (input.climb ?? 0) * params.lift : 0) * dt));
  return { heading: state.heading, forwardX, forwardZ, dForward, altitude: state.altitude ?? 0 };
}

// Bicycle-model vehicle step — same pure/no-DOM contract as stepRide/stepDrive, but
// yaw comes from steer angle * speed (front-wheel steering geometry) instead of a
// direct steer rate or a desired-bearing snap. A stopped car cannot pivot: yawRate is
// naturally zero when speed is zero. Forward-vector sign convention matches stepDrive
// (-cos), not stepRide (+cos), since earth-flyer consumers expect stepDrive's frame.
export interface VehicleState { heading: number; speed?: number; steer?: number }
export interface VehicleInput { steerAxis: number; throttle: number; brake: number }
export interface VehicleParams {
  wheelbase: number;
  maxSteer: number;
  steerRate: number;
  steerReturn: number;
  steerSpeedFalloff: number;
  power: number;
  brakeDecel: number;
  drag: number;
  rollResist: number;
  maxSpeed: number;
  reverseMaxSpeed: number;
  grip: number;
  friction?: number;
}
export interface VehicleStep { heading: number; forwardX: number; forwardZ: number; dForward: number; speed: number; steer: number; yawRate: number; slip: number }

export function stepVehicle(state: VehicleState, input: VehicleInput, params: VehicleParams, dt: number): VehicleStep {
  const mu = params.friction ?? 1;

  // speed-sensitive steering lock: full lock only when slow
  const vRatio = Math.min(1, Math.abs(state.speed ?? 0) / params.maxSpeed);
  const lock = params.maxSteer * (params.steerSpeedFalloff + (1 - params.steerSpeedFalloff) * (1 - vRatio));

  // steering actuator: rate-limited toward target, self-centring when no input
  const steerAxis = Math.max(-1, Math.min(1, input.steerAxis));
  const curSteer = state.steer ?? 0;
  let nextSteer;
  if (steerAxis !== 0) {
    const target = steerAxis * lock;
    const maxStep = params.steerRate * dt;
    nextSteer = target > curSteer ? Math.min(curSteer + maxStep, target) : Math.max(curSteer - maxStep, target);
  } else {
    const maxStep = params.steerReturn * dt;
    nextSteer = curSteer > 0 ? Math.max(0, curSteer - maxStep) : Math.min(0, curSteer + maxStep);
  }
  state.steer = Math.max(-lock, Math.min(lock, nextSteer));

  // longitudinal accel
  const v = state.speed ?? 0;
  const throttle = Math.max(0, Math.min(1, input.throttle));
  const brake = Math.max(0, Math.min(1, input.brake));
  const reverseBuild = throttle === 0 && brake > 0 && v <= 0;
  let accel = throttle * params.power * mu;
  if (reverseBuild) {
    // stopped or already reversing, no throttle → brake doubles as reverse power
    accel -= brake * params.brakeDecel;
  } else {
    const s = Math.sign(v);
    accel -= brake * params.brakeDecel * s;
    accel -= params.drag * v * Math.abs(v);
    accel -= params.rollResist * s;
  }
  let nextV = v + accel * dt;
  // rolling resistance/braking must not push through zero into the opposite direction
  if (!reverseBuild) {
    if (v > 0 && nextV < 0) nextV = 0;
    if (v < 0 && nextV > 0) nextV = 0;
  }
  nextV = Math.max(-params.reverseMaxSpeed, Math.min(params.maxSpeed, nextV));
  state.speed = nextV;

  // bicycle model yaw
  let yawRate = state.speed * Math.tan(state.steer) / params.wheelbase;
  const gripLimit = params.grip * mu;
  const lateralAccel = Math.abs(yawRate * state.speed);
  let slip = 0;
  if (lateralAccel > gripLimit && lateralAccel > 0) {
    const scale = gripLimit / lateralAccel;
    slip = 1 - scale;
    yawRate *= scale;
  }

  state.heading += yawRate * dt;
  const forwardX = Math.sin(state.heading), forwardZ = -Math.cos(state.heading);
  const dForward = state.speed * dt;

  return { heading: state.heading, forwardX, forwardZ, dForward, speed: state.speed, steer: state.steer, yawRate, slip };
}

