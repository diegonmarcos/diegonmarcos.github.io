<script lang="ts">
  // "Nerd data" FAB → always-on live panel: render analysis, 3D stack, GLB models,
  // network telemetry, and a copy-all report button.
  import { onMount } from 'svelte';
  import { gpuStats } from '$lib/webgl/gpuStats';
  import { layers, perf, LAYER_LABELS } from '$lib/webgl/layers.svelte';
  import pkg from '../../package.json';

  const KEY = 'galaxy:nerd';
  const FKEY = 'galaxy:fps';
  let open = $state(false);
  let copied = $state(false);
  let fpsPin = $state(false); // always-show FPS badge, independent of the panel

  // 3D stack, data-driven from package.json (declared versions).
  const dep = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) } as Record<string, string>;
  const stack = [
    ['three', dep['three']],
    ['@threlte/core', dep['@threlte/core']],
    ['@threlte/extras', dep['@threlte/extras']],
    ['svelte', dep['svelte']],
    ['@sveltejs/kit', dep['@sveltejs/kit']],
    ['vite', dep['vite']]
  ].filter(([, v]) => v) as [string, string][];

  // mirrored render stats (polled from the in-canvas sampler each frame)
  let g = $state({ ...gpuStats });

  // network telemetry
  let totalMB = $state(0);
  let downKBs = $state(0); // 30s sliding avg
  let resCount = $state(0);
  let localCount = $state(0);
  let remoteCount = $state(0);
  let linkMbps = $state<number | null>(null);
  let rttMs = $state<number | null>(null);
  let top = $state<{ name: string; kb: number; remote: boolean }[]>([]);
  let glbs = $state<{ name: string; kb: number }[]>([]);

  // footprint — JS heap (mem) polled DOM-side; CPU/VRAM come from gpuStats.
  let heapMB = $state<number | null>(null);
  let heapLimitMB = $state<number | null>(null);

  const fmt = (n: number) => (n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n));
  const base = (u: string) => { try { return new URL(u).pathname.split('/').pop() || u; } catch { return u; } };

  onMount(() => {
    open = localStorage.getItem(KEY) === '1';
    fpsPin = localStorage.getItem(FKEY) === '1';

    let raf = 0;
    const tick = () => { g = { ...gpuStats }; raf = requestAnimationFrame(tick); };
    tick();

    const window30: { t: number; bytes: number }[] = [];
    const poll = () => {
      const res = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      let total = 0, local = 0, remote = 0;
      const sized: { name: string; kb: number; remote: boolean }[] = [];
      for (const r of res) {
        const bytes = r.transferSize || r.encodedBodySize || 0;
        total += bytes;
        const isRemote = (() => { try { return new URL(r.name).origin !== location.origin; } catch { return false; } })();
        isRemote ? remote++ : local++;
        if (bytes > 0) sized.push({ name: base(r.name), kb: Math.round(bytes / 1024), remote: isRemote });
      }
      const now = performance.now();
      window30.push({ t: now, bytes: total });
      while (window30.length > 1 && now - window30[0].t > 30000) window30.shift();
      const oldest = window30[0];
      const secs = (now - oldest.t) / 1000;
      downKBs = secs > 0.5 ? Math.max(0, (total - oldest.bytes) / 1024 / secs) : 0;

      totalMB = +(total / 1024 / 1024).toFixed(2);
      resCount = res.length; localCount = local; remoteCount = remote;
      top = [...sized].sort((a, b) => b.kb - a.kb).slice(0, 6);
      glbs = sized.filter((s) => s.name.toLowerCase().endsWith('.glb')).sort((a, b) => b.kb - a.kb);

      const c = (navigator as any).connection;
      linkMbps = c?.downlink ?? null;
      rttMs = c?.rtt ?? null;

      const mem = (performance as any).memory; // Chrome/Chromium only
      heapMB = mem ? Math.round(mem.usedJSHeapSize / 1048576) : null;
      heapLimitMB = mem ? Math.round(mem.jsHeapSizeLimit / 1048576) : null;
    };
    poll();
    const iv = setInterval(poll, 1000);
    return () => { cancelAnimationFrame(raf); clearInterval(iv); };
  });

  function toggle() { open = !open; localStorage.setItem(KEY, open ? '1' : '0'); }
  function toggleFps() { fpsPin = !fpsPin; localStorage.setItem(FKEY, fpsPin ? '1' : '0'); }

  function report(): string {
    const L: string[] = ['# galaxy — nerd data', ''];
    L.push('## Render');
    L.push(`FPS: ${g.fps}   frame: ${g.ms} ms`);
    L.push(`draw calls: ${g.calls}   triangles: ${g.triangles}`);
    L.push(`geometries: ${g.geometries}   textures: ${g.textures}   programs: ${g.programs}`);
    L.push(`pipeline: local (client GPU)`);
    L.push(`GPU: ${g.gpu}   vendor: ${g.vendor}`);
    L.push('', '## Footprint');
    L.push(`CPU: ${g.cpuPct}% est. main-thread   cores: ${g.cores || '—'}`);
    L.push(`memory (JS heap): ${heapMB ?? '—'} MB${heapLimitMB ? ` / ${heapLimitMB} MB` : ''}`);
    L.push(`VRAM (est.): ${g.vramMB} MB (textures + geometry)`);
    L.push('', '## 3D stack');
    for (const [n, v] of stack) L.push(`${n}: ${v}`);
    L.push('', '## Network');
    L.push(`downloaded: ${totalMB} MB   down(30s avg): ${downKBs.toFixed(1)} KB/s   up: ~0 (static)`);
    L.push(`link: ${linkMbps ?? '—'} Mbps   rtt: ${rttMs ?? '—'} ms`);
    L.push(`requests: ${resCount} (${localCount} local / ${remoteCount} remote)`);
    L.push('', `## GLB models (${glbs.length})`);
    for (const m of glbs) L.push(`${m.name}: ${m.kb} KB`);
    L.push('', '## Heaviest assets');
    for (const f of top) L.push(`${f.name}: ${f.kb} KB${f.remote ? ' (remote)' : ''}`);
    return L.join('\n');
  }
  async function copyAll() {
    try { await navigator.clipboard.writeText(report()); copied = true; setTimeout(() => (copied = false), 1500); }
    catch { /* clipboard blocked */ }
  }
</script>

<button class="fab" class:on={open} onclick={toggle} aria-label="Toggle nerd data" title="Nerd data">
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M2 12h3l2.5-6 3.5 12 2.5-8 2 4h6.5" />
  </svg>
</button>

{#if open}
  <aside class="panel" aria-live="polite">
    <header>
      <span class="live"></span> NERD DATA
      <span class="fps" class:warn={g.fps > 0 && g.fps < 30}>{g.fps} FPS</span>
      <button class="pin" class:on={fpsPin} onclick={toggleFps} title="Always show FPS badge">📌 FPS</button>
      <button class="copy" class:done={copied} onclick={copyAll} title="Copy all data">{copied ? '✓ Copied' : 'Copy all'}</button>
    </header>

    <section>
      <h4>Render <em>· {g.ms} ms/frame</em></h4>
      <div class="grid">
        <span>Draw calls</span><b>{fmt(g.calls)}</b>
        <span>Triangles</span><b>{fmt(g.triangles)}</b>
        <span>Geometries</span><b>{g.geometries}</b>
        <span>Textures</span><b>{g.textures}</b>
        <span>Programs</span><b>{g.programs}</b>
        <span>Pipeline</span><b class="ok">Local · client GPU</b>
      </div>
      <p class="gpu">{g.gpu}</p>
    </section>

    <section>
      <h4>Footprint <em>· estimated</em></h4>
      <div class="grid">
        <span>CPU (main-thread)</span><b class:warn={g.cpuPct >= 90}>{g.cpuPct}% <em class="u">est.</em></b>
        <span>Cores</span><b>{g.cores || '—'}</b>
        <span>Memory (JS heap)</span><b>{heapMB ?? '—'}{heapLimitMB ? ` / ${heapLimitMB}` : ''} MB</b>
        <span>VRAM</span><b>{g.vramMB} MB <em class="u">est.</em></b>
      </div>
    </section>

    <section>
      <h4>Layers / Perf <em>· A/B test</em></h4>
      <label class="perf"><span>Pixel-ratio cap</span>
        <select bind:value={perf.dprCap}>
          <option value={1}>1× fastest</option>
          <option value={1.5}>1.5×</option>
          <option value={2}>2×</option>
          <option value={3}>3× sharp</option>
        </select>
      </label>
      <div class="toggles">
        {#each LAYER_LABELS as [key, label]}
          <label><input type="checkbox" bind:checked={layers[key]} /> {label}</label>
        {/each}
      </div>
    </section>

    <section>
      <h4>3D stack</h4>
      <div class="grid">
        {#each stack as [name, ver]}
          <span>{name}</span><b>{ver}</b>
        {/each}
        <span>renderer</span><b class="ok">Threlte · WebGL</b>
      </div>
    </section>

    <section>
      <h4>GLB models <em>· {glbs.length}</em></h4>
      <ul class="files">
        {#each glbs as m}
          <li><span class="dot"></span>{m.name}<b>{m.kb} KB</b></li>
        {:else}
          <li class="empty">none loaded yet…</li>
        {/each}
      </ul>
    </section>

    <section>
      <h4>Network</h4>
      <div class="grid">
        <span>Downloaded</span><b>{totalMB} MB</b>
        <span>Down (30s avg)</span><b>{downKBs.toFixed(1)} KB/s</b>
        <span>Up</span><b>≈ 0 (static)</b>
        <span>Link</span><b>{linkMbps ?? '—'} Mbps</b>
        <span>RTT</span><b>{rttMs ?? '—'} ms</b>
        <span>Requests</span><b>{resCount} · {localCount}L / {remoteCount}R</b>
      </div>
    </section>

    <section>
      <h4>Heaviest assets</h4>
      <ul class="files">
        {#each top as f}
          <li><span class="dot" class:remote={f.remote}></span>{f.name}<b>{f.kb} KB</b></li>
        {/each}
      </ul>
    </section>
  </aside>
{/if}

{#if fpsPin}
  <div class="fpsbadge" class:warn={g.fps > 0 && g.fps < 30} title="Live FPS (pinned)">{g.fps} <small>FPS</small></div>
{/if}

<style>
  .fab {
    position: fixed; bottom: 18px; right: 18px; z-index: 40;
    width: 52px; height: 52px; border-radius: 50%;
    border: 1px solid rgba(157, 180, 255, 0.4);
    background: rgba(10, 14, 26, 0.85); backdrop-filter: blur(8px);
    color: #cfe0ff; font-size: 1.4rem; cursor: pointer;
    display: grid; place-items: center;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s, box-shadow 0.25s;
  }
  .fab:hover { transform: scale(1.08); }
  .fab.on { transform: rotate(-8deg) scale(1.04); border-color: #9db4ff; box-shadow: 0 0 18px rgba(157, 180, 255, 0.5); }
  .glyph { line-height: 1; }

  .panel {
    position: fixed; bottom: 82px; right: 18px; z-index: 40;
    width: min(340px, calc(100vw - 36px));
    max-height: min(76vh, 640px); overflow-y: auto;
    padding: 14px 16px;
    background: rgba(8, 11, 20, 0.9); backdrop-filter: blur(12px);
    border: 1px solid rgba(157, 180, 255, 0.28); border-radius: 14px;
    color: #dbe6ff; font: 400 12px/1.4 ui-monospace, "SF Mono", Menlo, monospace;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
    animation: rise 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes rise { from { opacity: 0; transform: translateY(12px) scale(0.96); } to { opacity: 1; transform: none; } }

  header {
    display: flex; align-items: center; gap: 8px;
    font-weight: 700; letter-spacing: 0.12em; font-size: 11px;
    padding-bottom: 10px; margin-bottom: 6px;
    border-bottom: 1px solid rgba(157, 180, 255, 0.15);
  }
  .fps { margin-left: auto; color: #7dffb0; font-weight: 700; }
  .fps.warn { color: #ff8a5c; }
  .copy {
    border: 1px solid rgba(157, 180, 255, 0.4); border-radius: 6px;
    background: rgba(157, 180, 255, 0.1); color: #cfe0ff;
    font: 600 10px/1 ui-monospace, monospace; letter-spacing: 0.08em;
    padding: 5px 8px; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .copy:hover { background: rgba(157, 180, 255, 0.25); }
  .copy.done { color: #7dffb0; border-color: #7dffb0; }
  .live { width: 8px; height: 8px; border-radius: 50%; background: #7dffb0; box-shadow: 0 0 8px #7dffb0; animation: pulse 1.4s ease-in-out infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

  section { margin: 10px 0; }
  h4 { margin: 0 0 6px; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #8fa6d8; }
  h4 em { color: #5f7099; font-style: normal; }
  .grid { display: grid; grid-template-columns: auto 1fr; gap: 3px 12px; }
  .grid span { color: #8fa6d8; }
  .grid b { text-align: right; font-weight: 600; word-break: break-word; }
  .grid b.ok { color: #7dffb0; }
  .gpu { margin: 8px 0 0; color: #6f82ac; font-size: 10.5px; word-break: break-word; }

  .files { list-style: none; margin: 0; padding: 0; max-height: 140px; overflow-y: auto; }
  .files li { display: flex; align-items: center; gap: 6px; padding: 2px 0; }
  .files li.empty { color: #5f7099; }
  .files li b { margin-left: auto; font-weight: 600; color: #cfe0ff; }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #7dffb0; flex: none; }
  .dot.remote { background: #ffb35c; }

  .toggles { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 10px; margin-top: 4px; }
  .toggles label { display: flex; align-items: center; gap: 5px; color: #cfe0ff; font-size: 10.5px; cursor: pointer; }
  .toggles input { accent-color: #7dffb0; }
  .perf { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 2px 0 6px; color: #cfe0ff; font-size: 11px; }
  .perf select { background: rgba(10, 14, 26, 0.8); color: #cfe0ff; border: 1px solid rgba(157, 180, 255, 0.4); border-radius: 6px; padding: 3px 6px; font-size: 11px; }

  .grid b.warn { color: #ff8a5c; }
  .u { color: #5f7099; font-style: normal; font-size: 9px; }
  .pin {
    border: 1px solid rgba(157, 180, 255, 0.4); border-radius: 6px;
    background: rgba(157, 180, 255, 0.1); color: #8fa6d8;
    font: 600 10px/1 ui-monospace, monospace; letter-spacing: 0.06em;
    padding: 5px 7px; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s;
  }
  .pin:hover { background: rgba(157, 180, 255, 0.25); }
  .pin.on { color: #7dffb0; border-color: #7dffb0; background: rgba(125, 255, 176, 0.12); }

  .fpsbadge {
    position: fixed; top: 12px; left: 50%; transform: translateX(-50%); z-index: 40;
    padding: 5px 10px; border-radius: 8px;
    background: rgba(8, 11, 20, 0.72); backdrop-filter: blur(6px);
    border: 1px solid rgba(125, 255, 176, 0.4);
    color: #7dffb0; font: 700 15px/1 ui-monospace, "SF Mono", Menlo, monospace;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4); pointer-events: none;
  }
  .fpsbadge small { font-size: 9px; opacity: 0.7; }
  .fpsbadge.warn { color: #ff8a5c; border-color: rgba(255, 138, 92, 0.5); }
</style>
