<script lang="ts">
  // Free-ride camera shortcuts: jump to a preset (dist, pitch) — FreeRig eases there —
  // plus +/- buttons for precise zoom/altitude nudging.
  import { freeInput } from '$engine/freeInput';
  import cfg from '$lib/data/scene.json';
  const P = (cfg as any).free.cam.presets;
  const items: [string, string, { dist: number; pitch: number }][] = [
    ['1st', 'First-person (eyes) — flip up for the full sky', P.first],
    ['Top', 'GoPro-stick — just above the head', P.top],
    ['Sky', 'Drone view', P.sky],
    ['Orb', 'Planet centred with its satellites + moons', P.planet],
    ['Way', 'Galactic — all planets & stars', P.galaxy]
  ];
  const clamp = (n: number) => Math.min(1, Math.max(0, n));
  const set = (p: { dist: number; pitch: number }) => { freeInput.dist = p.dist; freeInput.pitch = p.pitch; };
  const nudge = (d: number) => { freeInput.dist = clamp(freeInput.dist + d); };
</script>

<div class="presets">
  {#each items as [label, title, p]}
    <button onclick={() => set(p)} {title}>{label}</button>
  {/each}
  <div class="zoombtns">
    <button onclick={() => nudge(0.05)} title="Zoom out / higher altitude">＋</button>
    <button onclick={() => nudge(-0.05)} title="Zoom in / lower altitude">－</button>
  </div>
</div>

<style>
  .presets {
    position: fixed; right: 22px; top: 88px; z-index: 35;
    display: flex; flex-direction: column; gap: 8px;
  }
  .presets button {
    width: 46px; height: 34px; border-radius: 10px;
    border: 1px solid rgba(157, 180, 255, 0.4);
    background: rgba(10, 14, 26, 0.7); backdrop-filter: blur(8px);
    color: #cfe0ff; cursor: pointer;
    font: 600 12px/1 system-ui, sans-serif; letter-spacing: 0.03em;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
  }
  .presets button:hover { border-color: #9db4ff; background: rgba(20, 26, 44, 0.9); transform: translateX(-2px); }
  .presets button:active { transform: scale(0.95); }
  .zoombtns { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }
  .zoombtns button {
    height: 30px; font-size: 18px; font-weight: 700; color: #7dffb0;
    border-color: rgba(125, 255, 176, 0.4);
  }
  .zoombtns button:hover { border-color: #7dffb0; }
</style>
