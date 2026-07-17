// Shared free-ride input bag. DOM controls (joystick, pinch, keys, presets) write
// it; the in-canvas FreeRig reads it each frame. Plain object → no rune quirks.
// dist/pitch are TARGETS (0..1); FreeRig eases toward them so presets animate.
export const freeInput = {
  steer: 0,      // -1 (left) .. 1 (right)
  throttle: 0,   // -1 (back) .. 1 (forward)
  dist: 0.14,    // 0 = close (first-person) .. 1 = far  (pinch / wheel)
  pitch: 0.5,    // 0 = parallel to floor .. 1 = top-down (two-finger vertical drag)
  yaw: 0,        // orbit around (radians) — two-finger horizontal drag → full 3D control
  yawRate: 0,    // -1..1 held-orbit velocity (right camera joystick, X) — integrated by FreeRig
  pitchRate: 0,  // -1..1 held-tilt velocity  (right camera joystick, Y) — integrated by FreeRig
  galaxy: 0,     // 0 = ground .. 1 = zoomed all the way out to the Milky Way view (set by FreeRig)
  active: false
};
