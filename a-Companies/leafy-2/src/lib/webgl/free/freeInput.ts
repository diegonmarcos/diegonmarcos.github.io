// Shared free-ride input bag. DOM controls (joystick, pinch, keys) write it;
// the in-canvas FreeRig reads it each frame. Plain object → no rune quirks.
export const freeInput = {
  steer: 0,      // -1 (left) .. 1 (right)
  throttle: 0,   // -1 (back) .. 1 (forward)
  zoom: 0,       // 0 = first-person .. 1 = helicopter
  active: false  // true while free mode is on
};
