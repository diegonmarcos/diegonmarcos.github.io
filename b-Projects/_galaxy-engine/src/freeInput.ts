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
  moveX: 0,      // -1..1 camera-relative left-stick vector, right = +X (drive channel)
  moveY: 0,      // -1..1 camera-relative left-stick vector, up = +Y (drive channel)
  galaxy: 0,     // 0 = ground .. 1 = zoomed all the way out to the Milky Way view (set by FreeRig)
  climb: 0,      // -1..1 fly vertical (up/down); kept for x1 source-compat — see climbTotal()
  climbKeys: 0,    // -1..1 keyboard-held climb (e.g. Space/C)
  climbPointer: 0, // -1..1 on-screen climb button(s)
  climbStick: 0,   // -1..1 stick-driven climb (if a joystick ever maps to it)
  active: false
};

// Keyboard and the on-screen climb buttons used to share one `climb` field, so
// releasing either zeroed both, and a pointerleave mid-hold zeroed it while the
// finger was still down. Each input source now owns its own field; combine here.
export function climbTotal(): number {
  const total = freeInput.climbKeys + freeInput.climbPointer + freeInput.climbStick;
  return Math.max(-1, Math.min(1, total));
}

// Per-instance channel ownership. Two Joystick instances can be mounted for the
// same logical channel across an HMR reload / route transition; without this,
// the stale instance keeps writing over the live one's output. Each Joystick
// mints a Symbol, claims its channel on mount, releases on destroy, and
// `writeChannel` no-ops unless it currently owns the channel.
export const channelOwners: Record<string, symbol | null> = {
  move: null,
  look: null,
  drive: null
};

export function claimChannel(channel: string): symbol {
  const owner = Symbol(channel);
  if (channelOwners[channel]) {
    // Double-claim: previous owner didn't release (HMR / leaked instance).
    // Non-fatal — the new claim simply wins; warn so it's visible in dev.
    console.warn(`freeInput: channel "${channel}" claimed while already owned`);
  }
  channelOwners[channel] = owner;
  return owner;
}

export function releaseChannel(channel: string, owner: symbol): void {
  if (channelOwners[channel] === owner) channelOwners[channel] = null;
}

export function ownsChannel(channel: string, owner: symbol): boolean {
  return channelOwners[channel] === owner;
}
