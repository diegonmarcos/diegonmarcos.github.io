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
