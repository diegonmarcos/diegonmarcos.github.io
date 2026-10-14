// Procedural flight-audio engine. SSR-safe: no window/AudioContext access at
// module top level — everything lazy, constructed only inside start(). All
// per-frame work in update() is limited to AudioParam scheduling
// (setTargetAtTime) on nodes built once per model; nothing is ever allocated
// per frame. Mirrors the FlightTelemetry shape from _galaxy-engine/src/flight.ts.

export interface FlightTelemetryLike {
  speed?: number;
  ias?: number;
  altAGL?: number;
  altASL?: number;
  vspeed?: number;
  heading?: number;
  bank?: number;
  pitch?: number;
  gForce?: number;
  throttle?: number;
  stall?: boolean;
  overspeed?: boolean;
  gpws?: 'none' | 'caution' | 'pullup';
  gearDown?: boolean;
  flaps?: number;
  rotorRpm?: number | null;
  torque?: number | null;
  battery?: number | null;
  altHold?: boolean | null;
}

export type FlightModel = 'airplane' | 'helicopter' | 'drone';
export type WarningKind = 'pullup' | 'stall' | 'overspeed' | null;

// --- generic guards -------------------------------------------------------

const finite = (x: unknown, fallback = 0): number =>
  typeof x === 'number' && Number.isFinite(x) ? x : fallback;

const clamp = (x: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, x));

// --- pure math: exported so it can be unit-tested without an AudioContext -

/** Drone rotor pitch/gain. Workload blends |vspeed|/6 and speed/25 (max) via average. */
export function droneParams(t: FlightTelemetryLike): { freq: number; gain: number } {
  const vspeed = finite(t.vspeed);
  const speed = finite(t.speed);
  const vWorkload = Math.abs(vspeed) / 6;
  const sWorkload = speed / 25;
  const workload = clamp((vWorkload + sWorkload) / 2, 0, 3);
  const freq = 90 * (1 + 0.35 * workload);
  const gain = clamp(0.15 + 0.25 * workload, 0, 1);
  return { freq, gain };
}

/**
 * Helicopter rotor thump + engine tone.
 * lfoRate = (rotorRpm/60)*2 Hz (2 blades/rev); falls back to 13 Hz when rotorRpm is null/undefined/NaN.
 * thumpDepth rises with torque; if torque is missing, throttle is used as the closest proxy
 * (flight.ts computes torque from throttle + vertical-accel demand, so throttle alone is a
 * reasonable stand-in when torque telemetry isn't available).
 */
export function helicopterParams(t: FlightTelemetryLike): { lfoRate: number; thumpDepth: number; engineFreq: number } {
  const rotorRpm = t.rotorRpm;
  const lfoRate = rotorRpm != null && Number.isFinite(rotorRpm) ? (rotorRpm / 60) * 2 : 13;
  const torqueOrThrottle = t.torque != null && Number.isFinite(t.torque) ? t.torque : finite(t.throttle);
  const thumpDepth = clamp(0.2 + 0.7 * clamp(torqueOrThrottle, 0, 1), 0, 1);
  const engineFreq = 55;
  return { lfoRate: clamp(lfoRate, 0.1, 50), thumpDepth, engineFreq };
}

/** Airplane filtered-noise + tone. filterFreq = 300+ias*12, toneFreq = 70+ias*0.5, gain ~ throttle. */
export function airplaneParams(t: FlightTelemetryLike): { filterFreq: number; toneFreq: number; gain: number } {
  const ias = Math.max(0, finite(t.ias));
  const throttle = clamp(finite(t.throttle), 0, 1);
  const filterFreq = 300 + ias * 12;
  const toneFreq = 70 + ias * 0.5;
  const gain = clamp(0.1 + 0.35 * throttle, 0, 1);
  return { filterFreq, toneFreq, gain };
}

/** Precedence: pullup > stall > overspeed > null. */
export function activeWarning(t: FlightTelemetryLike): WarningKind {
  if (t.gpws === 'pullup') return 'pullup';
  if (t.stall) return 'stall';
  if (t.overspeed) return 'overspeed';
  return null;
}

// --- audio engine -----------------------------------------------------------

const RAMP_TIME = 0.1;

interface DroneNodes {
  oscs: OscillatorNode[];
  detune: number[];
  filter: BiquadFilterNode;
  gain: GainNode;
  whine: OscillatorNode;
  whineGain: GainNode;
}
interface HeliNodes {
  noise: AudioBufferSourceNode;
  noiseFilter: BiquadFilterNode;
  thumpGate: GainNode;
  lfo: OscillatorNode;
  lfoShaper: WaveShaperNode;
  engine: OscillatorNode;
  engineGain: GainNode;
  master: GainNode;
}
interface PlaneNodes {
  noise: AudioBufferSourceNode;
  noiseFilter: BiquadFilterNode;
  noiseGain: GainNode;
  tone: OscillatorNode;
  toneGain: GainNode;
  master: GainNode;
}
interface WarningNodes {
  stallOsc: OscillatorNode;
  stallGain: GainNode;
  pullupOsc: OscillatorNode;
  pullupGain: GainNode;
  overspeedOsc: OscillatorNode;
  overspeedGain: GainNode;
}

export function createFlightAudio() {
  let ctx: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let muted = false;
  let started = false;
  let destroyed = false;

  let currentModel: FlightModel | null = null;
  let droneNodes: DroneNodes | null = null;
  let heliNodes: HeliNodes | null = null;
  let planeNodes: PlaneNodes | null = null;
  let warningNodes: WarningNodes | null = null;

  let stallPhase = 0;
  let pullupPhase = 0;
  let lastFrameTime = 0;

  function makeNoiseBuffer(context: AudioContext): AudioBuffer {
    const len = context.sampleRate * 2;
    const buffer = context.createBuffer(1, len, context.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      // brown-ish: leaky integrate white noise
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    return buffer;
  }

  function buildWarnings(context: AudioContext, dest: AudioNode): WarningNodes {
    const stallOsc = context.createOscillator();
    stallOsc.type = 'square';
    stallOsc.frequency.setValueAtTime(400, context.currentTime);
    const stallGain = context.createGain();
    stallGain.gain.setValueAtTime(0, context.currentTime);
    stallOsc.connect(stallGain).connect(dest);
    stallOsc.start();

    const pullupOsc = context.createOscillator();
    pullupOsc.type = 'square';
    pullupOsc.frequency.setValueAtTime(700, context.currentTime);
    const pullupGain = context.createGain();
    pullupGain.gain.setValueAtTime(0, context.currentTime);
    pullupOsc.connect(pullupGain).connect(dest);
    pullupOsc.start();

    const overspeedOsc = context.createOscillator();
    overspeedOsc.type = 'sine';
    overspeedOsc.frequency.setValueAtTime(1200, context.currentTime);
    const overspeedGain = context.createGain();
    overspeedGain.gain.setValueAtTime(0, context.currentTime);
    overspeedOsc.connect(overspeedGain).connect(dest);
    overspeedOsc.start();

    return { stallOsc, stallGain, pullupOsc, pullupGain, overspeedOsc, overspeedGain };
  }

  function buildDrone(context: AudioContext, dest: AudioNode): DroneNodes {
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, context.currentTime);
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.15, context.currentTime);
    filter.connect(gain).connect(dest);

    const detune = [-8, -2.5, 2.5, 8];
    const oscs = detune.map((cents) => {
      const osc = context.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, context.currentTime);
      osc.detune.setValueAtTime(cents, context.currentTime);
      osc.connect(filter);
      osc.start();
      return osc;
    });

    const whine = context.createOscillator();
    whine.type = 'sine';
    whine.frequency.setValueAtTime(2200, context.currentTime);
    const whineGain = context.createGain();
    whineGain.gain.setValueAtTime(0.02, context.currentTime);
    whine.connect(whineGain).connect(dest);
    whine.start();

    return { oscs, detune, filter, gain, whine, whineGain };
  }

  function buildHeli(context: AudioContext, dest: AudioNode): HeliNodes {
    const master = context.createGain();
    master.gain.setValueAtTime(0.3, context.currentTime);
    master.connect(dest);

    const noise = context.createBufferSource();
    noise.buffer = makeNoiseBuffer(context);
    noise.loop = true;
    const noiseFilter = context.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(400, context.currentTime);

    const lfo = context.createOscillator();
    lfo.type = 'square';
    lfo.frequency.setValueAtTime(13, context.currentTime);
    const lfoShaper = context.createWaveShaper();
    // square LFO in [-1,1] -> gate depth in [1-depth, 1], depth applied via thumpGate.gain scaling elsewhere
    const curve = new Float32Array(2);
    curve[0] = 0;
    curve[1] = 1;
    lfoShaper.curve = curve;

    const thumpGate = context.createGain();
    thumpGate.gain.setValueAtTime(0.5, context.currentTime);

    lfo.connect(lfoShaper);
    noise.connect(noiseFilter).connect(thumpGate).connect(master);
    lfoShaper.connect(thumpGate.gain);

    noise.start();
    lfo.start();

    const engine = context.createOscillator();
    engine.type = 'triangle';
    engine.frequency.setValueAtTime(55, context.currentTime);
    const engineGain = context.createGain();
    engineGain.gain.setValueAtTime(0.1, context.currentTime);
    engine.connect(engineGain).connect(master);
    engine.start();

    return { noise, noiseFilter, thumpGate, lfo, lfoShaper, engine, engineGain, master };
  }

  function buildPlane(context: AudioContext, dest: AudioNode): PlaneNodes {
    const master = context.createGain();
    master.gain.setValueAtTime(0.2, context.currentTime);
    master.connect(dest);

    const noise = context.createBufferSource();
    noise.buffer = makeNoiseBuffer(context);
    noise.loop = true;
    const noiseFilter = context.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(300, context.currentTime);
    const noiseGain = context.createGain();
    noiseGain.gain.setValueAtTime(0.3, context.currentTime);
    noise.connect(noiseFilter).connect(noiseGain).connect(master);
    noise.start();

    const tone = context.createOscillator();
    tone.type = 'sine';
    tone.frequency.setValueAtTime(70, context.currentTime);
    const toneGain = context.createGain();
    toneGain.gain.setValueAtTime(0.15, context.currentTime);
    tone.connect(toneGain).connect(master);
    tone.start();

    return { noise, noiseFilter, noiseGain, tone, toneGain, master };
  }

  function teardownModel(): void {
    const stopAll = (nodes: (OscillatorNode | AudioBufferSourceNode)[]) => {
      for (const n of nodes) {
        try { n.stop(); } catch { /* already stopped */ }
        try { n.disconnect(); } catch { /* noop */ }
      }
    };
    try {
      if (droneNodes) stopAll([...droneNodes.oscs, droneNodes.whine]);
      if (heliNodes) stopAll([heliNodes.noise, heliNodes.lfo, heliNodes.engine]);
      if (planeNodes) stopAll([planeNodes.noise, planeNodes.tone]);
    } catch { /* audio teardown must never throw */ }
    droneNodes = null;
    heliNodes = null;
    planeNodes = null;
  }

  function ensureModel(model: FlightModel): void {
    if (!ctx || !masterGain) return;
    if (currentModel === model) return;
    try {
      teardownModel();
      if (model === 'drone') droneNodes = buildDrone(ctx, masterGain);
      else if (model === 'helicopter') heliNodes = buildHeli(ctx, masterGain);
      else planeNodes = buildPlane(ctx, masterGain);
      currentModel = model;
    } catch {
      currentModel = null;
    }
  }

  function scheduleWarnings(t: FlightTelemetryLike, now: number, dt: number): void {
    if (!ctx || !warningNodes) return;
    const kind = activeWarning(t);
    stallPhase += dt;
    pullupPhase += dt;

    const targetAt = (param: AudioParam, value: number) => {
      try { param.setTargetAtTime(value, now, RAMP_TIME); } catch { /* noop */ }
    };

    // stall: 400Hz pulsing at 3Hz
    const stallOn = kind === 'stall' && Math.sin(2 * Math.PI * 3 * stallPhase) > 0;
    targetAt(warningNodes.stallGain.gain, stallOn ? 0.2 : 0);

    // pullup: whoop siren alternating 700/900Hz
    if (kind === 'pullup') {
      const whoop = Math.sin(2 * Math.PI * 4 * pullupPhase) > 0 ? 900 : 700;
      try { warningNodes.pullupOsc.frequency.setTargetAtTime(whoop, now, 0.02); } catch { /* noop */ }
      targetAt(warningNodes.pullupGain.gain, 0.25);
    } else {
      targetAt(warningNodes.pullupGain.gain, 0);
    }

    // overspeed: steady quiet 1.2kHz
    targetAt(warningNodes.overspeedGain.gain, kind === 'overspeed' ? 0.08 : 0);
  }

  return {
    start(): void {
      if (started || destroyed) return;
      try {
        if (typeof window === 'undefined') return;
        const Ctor: typeof AudioContext | undefined =
          (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctor) return;
        ctx = new Ctor();
        masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(muted ? 0 : 0.25, ctx.currentTime);
        masterGain.connect(ctx.destination);
        warningNodes = buildWarnings(ctx, masterGain);
        lastFrameTime = ctx.currentTime;
        started = true;
      } catch {
        ctx = null;
        masterGain = null;
        started = false;
      }
    },

    update(t: FlightTelemetryLike, model: FlightModel): void {
      if (!started || destroyed || !ctx || !masterGain) return;
      try {
        const now = ctx.currentTime;
        const dt = Math.max(0, Math.min(0.5, now - lastFrameTime || 0));
        lastFrameTime = now;

        ensureModel(model);

        const targetAt = (param: AudioParam, value: number, timeConst = RAMP_TIME) => {
          try { param.setTargetAtTime(value, now, timeConst); } catch { /* noop */ }
        };

        if (model === 'drone' && droneNodes) {
          const { freq, gain } = droneParams(t);
          for (let i = 0; i < droneNodes.oscs.length; i++) {
            targetAt(droneNodes.oscs[i].frequency, freq);
          }
          targetAt(droneNodes.gain.gain, gain);
        } else if (model === 'helicopter' && heliNodes) {
          const { lfoRate, thumpDepth, engineFreq } = helicopterParams(t);
          targetAt(heliNodes.lfo.frequency, lfoRate);
          targetAt(heliNodes.thumpGate.gain, clamp(thumpDepth, 0, 1), 0.03);
          targetAt(heliNodes.engine.frequency, engineFreq);
          targetAt(heliNodes.engineGain.gain, 0.08 + 0.1 * clamp(finite(t.throttle), 0, 1));
        } else if (model === 'airplane' && planeNodes) {
          const { filterFreq, toneFreq, gain } = airplaneParams(t);
          targetAt(planeNodes.noiseFilter.frequency, filterFreq);
          targetAt(planeNodes.tone.frequency, toneFreq);
          targetAt(planeNodes.master.gain, gain);
        }

        scheduleWarnings(t, now, dt);
      } catch {
        // audio update must never throw out to the game loop
      }
    },

    setMuted(m: boolean): void {
      muted = m;
      if (!started || destroyed || !ctx || !masterGain) return;
      try {
        masterGain.gain.setTargetAtTime(m ? 0 : 0.25, ctx.currentTime, RAMP_TIME);
      } catch { /* noop */ }
    },

    destroy(): void {
      if (destroyed) return;
      destroyed = true;
      try {
        teardownModel();
        if (warningNodes) {
          try { warningNodes.stallOsc.stop(); } catch { /* noop */ }
          try { warningNodes.pullupOsc.stop(); } catch { /* noop */ }
          try { warningNodes.overspeedOsc.stop(); } catch { /* noop */ }
        }
        if (ctx) {
          void ctx.close().catch(() => {});
        }
      } catch { /* destroy must never throw */ }
      ctx = null;
      masterGain = null;
      warningNodes = null;
      started = false;
    },
  };
}
