<script lang="ts">
  // In-canvas: reads the WebGL renderer's per-frame info + FPS into gpuStats,
  // plus a footprint estimate — CPU main-thread load + VRAM (scene-walk bytes).
  import { useTask, useThrelte } from '@threlte/core';
  import { gpuStats } from './gpuStats';

  const { renderer, scene } = useThrelte();

  gpuStats.cores = (navigator as any).hardwareConcurrency ?? 0;

  // GPU identity (once) — proves the render is LOCAL (client GPU), not remote/streamed.
  try {
    const gl = renderer.getContext();
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    gpuStats.gpu = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : (gl.getParameter(gl.RENDERER) as string) || 'WebGL';
    gpuStats.vendor = dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : (gl.getParameter(gl.VENDOR) as string) || '—';
  } catch { /* debug ext blocked (privacy mode) */ }

  // VRAM estimate: dedupe geometries + textures across the scene, sum their GPU bytes.
  // geometry = attribute + index array bytes; texture = w·h·4 (·1.33 if mipmapped).
  function estimateVramMB(): number {
    const geos = new Set<string>(), texs = new Set<string>();
    let bytes = 0;
    scene.traverse((o: any) => {
      const g = o.geometry;
      if (g && !geos.has(g.uuid)) {
        geos.add(g.uuid);
        for (const name in g.attributes) bytes += g.attributes[name].array.byteLength;
        if (g.index) bytes += g.index.array.byteLength;
      }
      const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
      for (const m of mats)
        for (const k in m) {
          const v = (m as any)[k];
          if (v && v.isTexture && v.image && !texs.has(v.uuid)) {
            texs.add(v.uuid);
            const w = v.image.width || v.image.videoWidth || 0;
            const h = v.image.height || v.image.videoHeight || 0;
            bytes += Math.round(w * h * 4 * (v.generateMipmaps ? 1.333 : 1));
          }
        }
    });
    return +(bytes / 1048576).toFixed(1);
  }

  let frames = 0, acc = 0, sample = 0;
  useTask((delta) => {
    frames++; acc += delta;
    if (acc >= 0.5) {
      gpuStats.fps = Math.round(frames / acc);
      gpuStats.ms = +((acc / frames) * 1000).toFixed(1);
      // est. main-thread load: frame time vs a 60fps (16.67ms) budget, EMA-smoothed.
      const load = Math.min(100, (gpuStats.ms / 16.67) * 100);
      gpuStats.cpuPct = Math.round(gpuStats.cpuPct * 0.6 + load * 0.4);
      frames = 0; acc = 0;
      if (++sample % 4 === 0) gpuStats.vramMB = estimateVramMB(); // ~every 2s
    }
    const info = renderer.info;
    gpuStats.calls = info.render.calls;
    gpuStats.triangles = info.render.triangles;
    gpuStats.geometries = info.memory.geometries;
    gpuStats.textures = info.memory.textures;
    gpuStats.programs = info.programs?.length ?? 0;
  });
</script>
