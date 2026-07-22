// Pure, framework-agnostic ride step — no three/threlte/DOM. FreeRig (x1) and the
// earth GTA rider both call this each frame; everything else (camera boom, overview
// zoom, bounds clamping) stays per-scene.
export interface RideState { heading: number }
export interface RideInput { steer: number; throttle: number }
export interface RideParams { speed: number; turn: number; steerSign?: number }
export interface RideStep { heading: number; forwardX: number; forwardZ: number; dForward: number }

export function stepRide(state: RideState, input: RideInput, params: RideParams, dt: number): RideStep {
  state.heading += input.steer * params.turn * (params.steerSign ?? 1) * dt;
  const forwardX = Math.sin(state.heading), forwardZ = Math.cos(state.heading);
  const dForward = input.throttle * params.speed * dt;
  return { heading: state.heading, forwardX, forwardZ, dForward };
}
