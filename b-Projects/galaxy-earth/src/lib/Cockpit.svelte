<script lang="ts">
  // Flight-instrument overlay: attitude indicator, airspeed/altitude/VSI/heading tapes,
  // throttle, G-meter, model-specific gauges (rotor/torque, battery/alt-hold), and
  // stall/overspeed/GPWS warning banners. Pure readout — never touches input.

  let { telemetry, model, visible = true }: {
    telemetry: {
      speed: number; ias: number; altAGL: number; altASL: number; vspeed: number;
      heading: number; // rad
      bank: number;    // rad, + = right wing down
      pitch: number;   // rad, + = nose up
      gForce: number; throttle: number;
      stall: boolean; overspeed: boolean;
      gpws: 'none' | 'caution' | 'pullup';
      gearDown: boolean; flaps: number;
      rotorRpm: number | null; torque: number | null;
      battery: number | null; altHold: boolean | null;
    };
    model: 'airplane' | 'helicopter' | 'drone';
    visible?: boolean;
  } = $props();

  // Per-model airspeed scale (kn/kph-equivalent units, whatever `ias` is expressed in).
  // Retune here — nothing else derives from magic numbers.
  const IAS_SCALE: Record<typeof model, { max: number; vne: number; stallBand: number }> = {
    airplane: { max: 300, vne: 260, stallBand: 55 },
    helicopter: { max: 180, vne: 150, stallBand: 25 },
    drone: { max: 90, vne: 75, stallBand: 8 }
  };

  const VSI_RANGE = 20; // +/- units, symmetric

  const rad2deg = (r: number) => (r * 180) / Math.PI;
  const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
  const norm360 = (deg: number) => ((deg % 360) + 360) % 360;

  const scale = $derived(IAS_SCALE[model]);
  const iasPct = $derived(clamp(telemetry.ias / scale.max, 0, 1));
  const iasDeg = $derived(iasPct * 270 - 225); // needle sweep, -225..45deg

  const vsiClamped = $derived(clamp(telemetry.vspeed, -VSI_RANGE, VSI_RANGE));
  const vsiPct = $derived(vsiClamped / VSI_RANGE); // -1..1

  const headingDeg = $derived(norm360(rad2deg(telemetry.heading)));
  const bankDeg = $derived(rad2deg(telemetry.bank));
  const pitchDeg = $derived(rad2deg(telemetry.pitch));
  // pitch ladder: px per degree of pitch translation on the horizon disc
  const PITCH_PX_PER_DEG = 3.2;
  const horizonShift = $derived(clamp(pitchDeg, -30, 30) * PITCH_PX_PER_DEG);

  const gVisible = $derived(Math.abs(telemetry.gForce - 1) > 0.15);

  const batteryLow = $derived(telemetry.battery !== null && telemetry.battery < 0.2);

  const bankTicks = [
    { a: -60, len: 10 }, { a: -30, len: 14 }, { a: -20, len: 8 }, { a: -10, len: 8 },
    { a: 0, len: 16 },
    { a: 10, len: 8 }, { a: 20, len: 8 }, { a: 30, len: 14 }, { a: 60, len: 10 }
  ];
  const ladderRungs = [-30, -20, -10, 10, 20, 30];
</script>

{#if visible}
  <div class="cockpit" aria-label="Flight instruments">
    <!-- Warning banners: reserved band, never shifts layout -->
    <div class="warnbar" role="presentation">
      {#if telemetry.gpws === 'pullup'}
        <div class="banner pullup" role="alert">PULL UP</div>
      {:else if telemetry.gpws === 'caution'}
        <div class="banner terrain" role="alert">TERRAIN</div>
      {/if}
      {#if telemetry.stall}
        <div class="banner stall" role="alert">STALL</div>
      {/if}
      {#if telemetry.overspeed}
        <div class="banner overspeed" role="alert">OVERSPEED</div>
      {/if}
    </div>

    <div class="panel bottom">
      <!-- Attitude indicator -->
      <div
        class="instrument adi"
        aria-label={`Attitude: bank ${bankDeg.toFixed(0)} degrees, pitch ${pitchDeg.toFixed(0)} degrees`}
      >
        <div class="adi-face">
          <div
            class="adi-ball"
            style={`--bank: ${-bankDeg}deg; --shift: ${horizonShift}px`}
          >
            <div class="sky"></div>
            <div class="ground"></div>
            <div class="horizon-line"></div>
            <div class="ladder">
              {#each ladderRungs as deg}
                <div
                  class="rung"
                  class:major={deg % 20 === 0}
                  style={`--rung-y: ${-deg * PITCH_PX_PER_DEG}px`}
                >
                  <span>{Math.abs(deg)}</span>
                </div>
              {/each}
            </div>
          </div>
          <div class="bank-scale">
            {#each bankTicks as t}
              <div class="tick" style={`--tick-a: ${t.a}deg; --tick-len: ${t.len}px`}></div>
            {/each}
            <div class="bank-pointer" style={`--bank: ${bankDeg}deg`}></div>
          </div>
          <div class="aircraft-symbol">
            <span class="wing left"></span>
            <span class="dot"></span>
            <span class="wing right"></span>
          </div>
        </div>
      </div>

      <!-- Airspeed -->
      <div class="instrument dial ias" aria-label={`Indicated airspeed ${telemetry.ias.toFixed(0)}`}>
        <svg viewBox="0 0 100 100">
          <path class="arc red" d="M 20 80 A 40 40 0 0 1 24.5 42.5" />
          <path class="arc green" d="M 24.5 42.5 A 40 40 0 0 1 75.5 42.5" />
          <path class="arc red" d="M 75.5 42.5 A 40 40 0 0 1 80 80" />
          <line class="needle" x1="50" y1="50" x2="50" y2="16" style={`--deg: ${iasDeg}deg`} />
          <circle class="hub" cx="50" cy="50" r="4" />
        </svg>
        <div class="readout">
          <span class="value">{telemetry.ias.toFixed(0)}</span>
          <span class="unit">IAS</span>
        </div>
      </div>

      <!-- Altimeter -->
      <div class="instrument tape alt" aria-label={`Altitude ${telemetry.altAGL.toFixed(0)} above ground, ${telemetry.altASL.toFixed(0)} above sea level`}>
        <span class="label">ALT</span>
        <span class="value">{telemetry.altAGL.toFixed(0)}</span>
        <span class="unit">AGL</span>
        <span class="value-sm">{telemetry.altASL.toFixed(0)} ASL</span>
      </div>

      <!-- VSI -->
      <div class="instrument bar vsi" aria-label={`Vertical speed ${telemetry.vspeed.toFixed(1)}`}>
        <span class="label">VSI</span>
        <div class="track">
          <div class="zero"></div>
          <div class="fill" class:up={vsiClamped >= 0} style={`--pct: ${vsiPct}`}></div>
        </div>
        <span class="value-sm">{telemetry.vspeed.toFixed(1)}</span>
      </div>

      <!-- Heading tape -->
      <div class="instrument tape hdg" aria-label={`Heading ${headingDeg.toFixed(0)} degrees`}>
        <span class="label">HDG</span>
        <span class="value">{headingDeg.toFixed(0)}°</span>
        <div class="rose" style={`--hdg: ${-headingDeg}deg`}>
          <svg viewBox="0 0 100 100">
            <circle class="ring" cx="50" cy="50" r="42" />
            <text x="50" y="14" class="cp">N</text>
            <text x="86" y="53" class="cp">E</text>
            <text x="50" y="92" class="cp">S</text>
            <text x="14" y="53" class="cp">W</text>
          </svg>
          <div class="pointer"></div>
        </div>
      </div>

      <!-- Throttle / collective -->
      <div class="instrument bar throttle" aria-label={`Throttle ${(telemetry.throttle * 100).toFixed(0)} percent`}>
        <span class="label">{model === 'helicopter' ? 'COLL' : 'THR'}</span>
        <div class="track vertical">
          <div class="fill" style={`--pct: ${clamp(telemetry.throttle, 0, 1)}`}></div>
        </div>
        <span class="value-sm">{(telemetry.throttle * 100).toFixed(0)}%</span>
      </div>

      {#if gVisible}
        <div class="instrument small gmeter" aria-label={`G force ${telemetry.gForce.toFixed(2)}`}>
          <span class="label">G</span>
          <span class="value-sm">{telemetry.gForce.toFixed(2)}</span>
        </div>
      {/if}

      {#if telemetry.rotorRpm !== null}
        <div class="instrument small rotor" aria-label={`Rotor RPM ${telemetry.rotorRpm.toFixed(0)}`}>
          <span class="label">RPM</span>
          <span class="value-sm">{telemetry.rotorRpm.toFixed(0)}</span>
        </div>
      {/if}

      {#if telemetry.torque !== null}
        <div class="instrument small torque" aria-label={`Torque ${telemetry.torque.toFixed(0)} percent`}>
          <span class="label">TRQ</span>
          <span class="value-sm">{telemetry.torque.toFixed(0)}%</span>
        </div>
      {/if}

      {#if telemetry.battery !== null}
        <div class="instrument small battery" class:low={batteryLow} aria-label={`Battery ${(telemetry.battery * 100).toFixed(0)} percent`}>
          <span class="label">BATT</span>
          <span class="value-sm">{(telemetry.battery * 100).toFixed(0)}%</span>
        </div>
      {/if}

      {#if telemetry.altHold !== null}
        <div class="lamp" class:on={telemetry.altHold} aria-label={`Altitude hold ${telemetry.altHold ? 'engaged' : 'off'}`}>
          ALT HOLD
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .cockpit {
    position: fixed; inset: 0; z-index: 30;
    pointer-events: none;
    display: flex; flex-direction: column;
    font: 600 11px/1 ui-monospace, "SF Mono", Menlo, monospace;
    color: #cfe0ff;
  }

  /* ---------- warnings ---------- */
  .warnbar {
    display: flex; justify-content: center; gap: 10px;
    padding-top: 10px; min-height: 40px;
  }
  .banner {
    padding: 6px 22px; border-radius: 6px;
    font: 800 18px/1 ui-monospace, monospace; letter-spacing: 0.12em;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }
  .banner.stall, .banner.overspeed {
    background: rgba(120, 0, 0, 0.85); color: #ffdede;
    animation: flash 0.6s steps(1, end) infinite;
  }
  .banner.terrain {
    background: rgba(120, 74, 0, 0.85); color: #ffe7bf;
  }
  .banner.pullup {
    background: rgba(140, 0, 0, 0.9); color: #fff;
    animation: flash 0.4s steps(1, end) infinite;
  }
  @keyframes flash { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0.25; } }
  @media (prefers-reduced-motion: reduce) {
    .banner.stall, .banner.overspeed, .banner.pullup { animation: none; opacity: 1; }
  }

  /* ---------- layout ---------- */
  .panel.bottom {
    margin-top: auto;
    display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: center;
    gap: 8px; padding: 8px 10px 14px;
  }
  .instrument {
    background: rgba(8, 11, 20, 0.72); backdrop-filter: blur(6px);
    border: 1px solid rgba(157, 180, 255, 0.28); border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    padding: 6px 8px;
    display: flex; flex-direction: column; align-items: center;
  }
  .label { color: #8fa6d8; letter-spacing: 0.1em; font-size: 9px; }
  .value { font-size: 18px; font-weight: 800; color: #eaf1ff; }
  .value-sm { font-size: 10.5px; color: #9db4d8; }
  .unit { font-size: 8.5px; color: #6f82ac; letter-spacing: 0.1em; }

  /* ---------- attitude indicator ---------- */
  .adi { width: 148px; height: 148px; padding: 0; overflow: hidden; border-radius: 50%; position: relative; }
  .adi-face { position: absolute; inset: 0; border-radius: 50%; overflow: hidden; }
  .adi-ball {
    position: absolute; left: -30%; right: -30%; top: -60%; bottom: -60%;
    transform: rotate(var(--bank)) translateY(var(--shift));
    transition: transform 0.08s linear;
  }
  .sky { position: absolute; inset: 0 0 50% 0; background: linear-gradient(#1b5fd6, #4f8ef0); }
  .ground { position: absolute; inset: 50% 0 0 0; background: linear-gradient(#5a3a1a, #8a5a2a); }
  .horizon-line { position: absolute; left: 0; right: 0; top: 50%; height: 2px; background: #eaf1ff; }
  .ladder { position: absolute; inset: 0; }
  .rung {
    position: absolute; left: 30%; right: 30%; top: 50%;
    transform: translateY(var(--rung-y));
    border-top: 1px solid rgba(234, 241, 255, 0.7);
    text-align: right;
  }
  .rung.major { border-top-width: 2px; }
  .rung span { position: absolute; right: -14px; top: -6px; font-size: 8px; color: #eaf1ff; }
  .bank-scale { position: absolute; inset: 0; pointer-events: none; }
  .tick {
    position: absolute; left: 50%; top: 4px; width: 2px; height: var(--tick-len);
    background: #eaf1ff; transform-origin: 50% 70px;
    transform: rotate(var(--tick-a));
  }
  .bank-pointer {
    position: absolute; left: 50%; top: 6px; width: 0; height: 0;
    transform: translateX(-50%) rotate(var(--bank)); transform-origin: 50% 70px;
    border-left: 5px solid transparent; border-right: 5px solid transparent;
    border-top: 8px solid #ffd75c;
    transition: transform 0.08s linear;
  }
  .aircraft-symbol {
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    display: flex; align-items: center; gap: 4px; pointer-events: none;
  }
  .aircraft-symbol .wing { width: 26px; height: 3px; background: #ffd75c; box-shadow: 0 0 4px rgba(0,0,0,0.6); }
  .aircraft-symbol .dot { width: 6px; height: 6px; border-radius: 50%; background: #ffd75c; }

  /* ---------- airspeed dial ---------- */
  .dial { width: 100px; height: 100px; justify-content: center; }
  .dial svg { width: 84px; height: 84px; }
  .arc { fill: none; stroke-width: 6; }
  .arc.green { stroke: #4fdc8a; }
  .arc.red { stroke: #ff5c5c; }
  .needle {
    stroke: #eaf1ff; stroke-width: 2.5; stroke-linecap: round;
    transform: rotate(var(--deg)); transform-origin: 50px 50px;
    transition: transform 0.12s linear;
  }
  .hub { fill: #eaf1ff; }
  .dial .readout { display: flex; flex-direction: column; align-items: center; margin-top: -6px; }

  /* ---------- tapes ---------- */
  .tape { width: 96px; }
  .tape.alt .value { color: #ffd75c; }

  /* ---------- vsi / throttle bars ---------- */
  .bar { width: 56px; }
  .track {
    width: 14px; height: 70px; border-radius: 7px;
    background: rgba(255, 255, 255, 0.08); position: relative; overflow: hidden;
    margin: 4px 0;
  }
  .vsi .track .zero {
    position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: #eaf1ff; z-index: 1;
  }
  .vsi .track .fill {
    position: absolute; left: 0; right: 0;
    top: calc(50% - max(0, var(--pct)) * 50%);
    height: calc(abs(var(--pct)) * 50%);
    background: #4fdc8a;
    transition: top 0.1s linear, height 0.1s linear;
  }
  .vsi .track .fill.up { background: #4fdc8a; }
  .vsi .track .fill:not(.up) { background: #ff8a5c; }
  .throttle .track.vertical { display: flex; align-items: flex-end; }
  .throttle .track .fill {
    width: 100%; height: calc(var(--pct) * 100%);
    background: #7dc4ff;
    transition: height 0.12s linear;
  }

  /* ---------- heading rose ---------- */
  .hdg { width: 96px; }
  .hdg .rose { position: relative; width: 64px; height: 64px; margin-top: 2px; }
  .hdg .rose svg { width: 64px; height: 64px; transform: rotate(var(--hdg)); transition: transform 0.1s linear; }
  .ring { fill: none; stroke: rgba(207, 224, 255, 0.5); stroke-width: 2; }
  .cp { fill: #cfe0ff; font-size: 12px; text-anchor: middle; font-weight: 700; }
  .hdg .pointer {
    position: absolute; left: 50%; top: -2px; transform: translateX(-50%);
    width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent;
    border-top: 8px solid #ffd75c;
  }

  /* ---------- small gauges / lamp ---------- */
  .instrument.small { width: 54px; padding: 4px 6px; }
  .battery.low .value-sm { color: #ff5c5c; animation: flash 0.8s steps(1, end) infinite; }
  @media (prefers-reduced-motion: reduce) {
    .battery.low .value-sm { animation: none; }
  }
  .lamp {
    padding: 6px 10px; border-radius: 6px; align-self: center;
    background: rgba(255, 255, 255, 0.06); color: #5f7099;
    border: 1px solid rgba(157, 180, 255, 0.2);
    font-weight: 800; letter-spacing: 0.08em;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .lamp.on {
    background: rgba(79, 220, 138, 0.18); color: #7dffb0; border-color: #7dffb0;
    box-shadow: 0 0 10px rgba(125, 255, 176, 0.4);
  }

  /* ---------- small-viewport breakpoint: drop least-critical gauges ---------- */
  @media (max-width: 480px) {
    .gmeter, .torque, .tape.alt .value-sm { display: none; }
    .adi { width: 116px; height: 116px; }
    .dial { width: 84px; height: 84px; }
    .dial svg { width: 70px; height: 70px; }
    .instrument { padding: 5px 6px; }
    .panel.bottom { gap: 6px; padding: 6px 6px 10px; }
  }
</style>
