<script lang="ts">
  // Free-ride camera shortcuts: jump to preset (dist, pitch) — FreeRig eases there.
  import { freeInput } from '$lib/webgl/free/freeInput';
  import cfg from '$lib/data/scene.json';
  const P = cfg.free.cam.presets;
  const items: [string, { dist: number; pitch: number }][] = [
    ['1st', P.first], ['Top', P.top], ['Sky', P.sky], ['Way', P.galaxy]
  ];
  const set = (p: { dist: number; pitch: number }) => { freeInput.dist = p.dist; freeInput.pitch = p.pitch; };
</script>

<div class="presets">
  {#each items as [label, p]}
    <button onclick={() => set(p)} title={`Isometric · ${label}`}>{label}</button>
  {/each}
</div>

<style>
  .presets {
    position: fixed; right: 22px; bottom: 30px; z-index: 35;
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
</style>
