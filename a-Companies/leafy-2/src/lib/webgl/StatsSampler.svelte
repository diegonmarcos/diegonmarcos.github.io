<script lang="ts">
  // In-canvas: reads the WebGL renderer's per-frame info + FPS into gpuStats.
  import { useTask, useThrelte } from '@threlte/core';
  import { gpuStats } from './gpuStats';

  const { renderer } = useThrelte();

  // GPU identity (once) — proves the render is LOCAL (client GPU), not remote/streamed.
  try {
    const gl = renderer.getContext();
    const dbg = gl.getExtension('WEBGL_debug_renderer_info');
    gpuStats.gpu = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : (gl.getParameter(gl.RENDERER) as string) || 'WebGL';
    gpuStats.vendor = dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : (gl.getParameter(gl.VENDOR) as string) || '—';
  } catch { /* debug ext blocked (privacy mode) */ }

  let frames = 0;
  let acc = 0;
  useTask((delta) => {
    frames++; acc += delta;
    if (acc >= 0.5) {
      gpuStats.fps = Math.round(frames / acc);
      gpuStats.ms = +((acc / frames) * 1000).toFixed(1);
      frames = 0; acc = 0;
    }
    const info = renderer.info;
    gpuStats.calls = info.render.calls;
    gpuStats.triangles = info.render.triangles;
    gpuStats.geometries = info.memory.geometries;
    gpuStats.textures = info.memory.textures;
    gpuStats.programs = info.programs?.length ?? 0;
  });
</script>
