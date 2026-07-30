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
export interface DriveParams { min: number; cruise?: number; idle?: number; max: number; turn?: number; accel?: number; lift?: number; maxAlt?: number; minAlt?: number; deadzone?: number }

export function stepDrive(state: RideState, input: DriveInput, params: DriveParams, dt: number): RideStep {
  let mag = Math.hypot(input.moveX, input.moveY);
  if (mag < (params.deadzone ?? 0)) mag = 0;
  if (mag > 0) {
    const desired = input.camBearing + Math.atan2(input.moveX, input.moveY);
    let delta = (desired - state.heading) % (2 * Math.PI);
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;
    if (params.turn != null) {
      const maxStep = params.turn * dt;
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

