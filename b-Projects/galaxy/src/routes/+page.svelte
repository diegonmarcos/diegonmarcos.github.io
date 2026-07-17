<script lang="ts">
  import { onMount } from 'svelte';
  import { Spring } from 'svelte/motion';
  import { Canvas } from '@threlte/core';
  import World from '$lib/webgl/World.svelte';
  import NerdStats from '$lib/NerdStats.svelte';
  import ScrollNav from '$lib/ScrollNav.svelte';
  import ModeSwitch from '$lib/ModeSwitch.svelte';
  import Joystick from '$lib/Joystick.svelte';
  import CameraStick from '$lib/CameraStick.svelte';
  import ZoomBar from '$lib/ZoomBar.svelte';
  import ViewPresets from '$lib/ViewPresets.svelte';
  import { freeInput } from '$lib/webgl/free/freeInput';
  import cfg from '$lib/data/scene.json';

  const scroll = new Spring(0, { stiffness: 0.045, damping: 0.9 });
  let tooltipEl = $state<HTMLElement>();
  let mode = $state<'scenic' | 'free'>('scenic');
  const stops = cfg.stops;
  const cam = cfg.free.cam;
  const clamp = (n: number) => Math.min(1, Math.max(0, n));

  function toggle() {
    mode = mode === 'scenic' ? 'free' : 'scenic';
    freeInput.active = mode === 'free';
    freeInput.steer = freeInput.throttle = 0;
    freeInput.galaxy = 0; // hide the galaxy view when leaving free ride
  }

  $effect(() => {
    if (typeof document !== 'undefined') document.body.style.overflow = mode === 'free' ? 'hidden' : '';
  });

  onMount(() => {
    const onScroll = () => {
      if (mode === 'free') return;
      const max = document.body.scrollHeight - window.innerHeight;
      scroll.target = max > 0 ? window.scrollY / max : 0;
    };

    // free-ride movement (desktop keys)
    const keys: Record<string, number> = {};
    const axes = () => {
      freeInput.throttle = (keys['w'] || keys['ArrowUp'] ? 1 : 0) - (keys['s'] || keys['ArrowDown'] ? 1 : 0);
      freeInput.steer = (keys['d'] || keys['ArrowRight'] ? 1 : 0) - (keys['a'] || keys['ArrowLeft'] ? 1 : 0);
    };
    const kd = (e: KeyboardEvent) => {
      if (mode !== 'free') return;
      if (e.key === 'q' || e.key === 'Q') freeInput.yaw -= 0.06;
      if (e.key === 'e' || e.key === 'E') freeInput.yaw += 0.06;
      keys[e.key] = 1; axes();
    };
    const ku = (e: KeyboardEvent) => { keys[e.key] = 0; axes(); };

    // wheel = zoom (distance); shift+wheel = tilt (pitch)
    const wheel = (e: WheelEvent) => {
      if (mode !== 'free') return;
      e.preventDefault();
      if (e.shiftKey) freeInput.pitch = clamp(freeInput.pitch + e.deltaY * cam.wheelSens);
      else freeInput.dist = clamp(freeInput.dist + e.deltaY * cam.wheelSens);
    };

    // two-finger: pinch-distance = zoom, vertical-drag = tilt (Google-Maps style)
    let pd = 0, pcy = 0, pcx = 0;
    const dist2 = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const cenY = (t: TouchList) => (t[0].clientY + t[1].clientY) / 2;
    const cenX = (t: TouchList) => (t[0].clientX + t[1].clientX) / 2;
    const td = (e: TouchEvent) => { if (mode === 'free' && e.touches.length === 2) { pd = dist2(e.touches); pcy = cenY(e.touches); pcx = cenX(e.touches); } };
    const tm = (e: TouchEvent) => {
      if (mode !== 'free' || e.touches.length !== 2) return;
      e.preventDefault();
      const d = dist2(e.touches), cy = cenY(e.touches), cx = cenX(e.touches);
      freeInput.dist = clamp(freeInput.dist - (d - pd) * cam.pinchSens);   // spread → closer
      freeInput.pitch = clamp(freeInput.pitch - (cy - pcy) * cam.tiltSens); // vertical → tilt
      freeInput.yaw += (cx - pcx) * cam.yawSens;                            // horizontal → orbit
      pd = d; pcy = cy; pcx = cx;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('touchstart', td, { passive: true });
    window.addEventListener('touchmove', tm, { passive: false });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku);
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('touchstart', td); window.removeEventListener('touchmove', tm);
    };
  });
</script>

<div class="stage">
  <Canvas>
    <World scroll={scroll.current} tooltip={tooltipEl} {mode} />
  </Canvas>
</div>

<div bind:this={tooltipEl} class="tooltip"></div>

<ModeSwitch {mode} {toggle} />

{#if mode === 'scenic'}
  <div class="ui" aria-hidden="true">
    {#each stops as s}
      <section class="panel"><h2>{s.title}</h2><p>{s.subtitle}</p></section>
    {/each}
  </div>
  <ScrollNav {stops} />
{:else}
  <Joystick />
  <CameraStick />
  <ZoomBar />
  <ViewPresets />
  <div class="hint">left stick = ride · right stick = look/orbit · bar = zoom/altitude</div>
{/if}

<NerdStats />

<nav class="sr-only" aria-label="Destinations">
  {#each stops as s}{#each s.cube.faces as f}<a href={f.url}>{f.label}</a>{/each}{/each}
</nav>

<style>
  :global(html, body) { margin: 0; background: #05060a; }
  :global(body) { scroll-snap-type: y proximity; }
  .stage { position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 0; }
  .tooltip {
    position: fixed; z-index: 20; pointer-events: none; opacity: 0;
    transition: opacity 0.15s; padding: 6px 10px;
    background: rgba(5, 6, 10, 0.8); border: 1px solid rgba(157, 180, 255, 0.5);
    border-radius: 6px; color: #cfe0ff;
    font: 600 0.75rem/1.3 system-ui, sans-serif; letter-spacing: 0.06em; text-align: center; white-space: nowrap;
  }
  .ui { position: relative; z-index: 10; pointer-events: none; }
  .panel {
    height: 100vh; scroll-snap-align: start;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 8vw; color: #eaf4ff; text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
  }
  .panel h2 { margin: 0; font: 700 clamp(2rem, 8vw, 5rem)/1 system-ui, sans-serif; }
  .panel p { margin: 0.5rem 0 0; max-width: 28ch; font: 400 clamp(1rem, 2.5vw, 1.4rem)/1.5 system-ui, sans-serif; opacity: 0.85; }
  .hint {
    position: fixed; bottom: 34px; left: 50%; transform: translateX(-50%); z-index: 35;
    color: #9fb2d8; font: 500 12px/1 system-ui, sans-serif; letter-spacing: 0.05em;
    background: rgba(8, 11, 20, 0.6); padding: 8px 14px; border-radius: 20px; pointer-events: none; white-space: nowrap;
  }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
</style>
