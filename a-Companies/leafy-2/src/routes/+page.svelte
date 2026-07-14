<script lang="ts">
  import { onMount } from 'svelte';
  import { Spring } from 'svelte/motion';
  import { Canvas } from '@threlte/core';
  import World from '$lib/webgl/World.svelte';
  import cfg from '$lib/data/scene.json';

  const scroll = new Spring(0, { stiffness: 0.045, damping: 0.9 });
  let tooltipEl = $state<HTMLElement>();

  const sections = [
    { title: 'Nightfall', copy: 'A surreal overworld under two moons.' },
    { title: 'Wilderness', copy: 'Living trees, grazing rabbits, drifting birds.' },
    { title: 'Still Water', copy: 'A mirror lake catching the moonlight.' },
    { title: 'Beyond', copy: 'Spin a cube — each face opens a door.' }
  ];

  onMount(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      scroll.target = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<div class="stage">
  <Canvas>
    <World scroll={scroll.current} tooltip={tooltipEl} />
  </Canvas>
</div>

<!-- Floating cursor tooltip driven by the cube interaction (DRAG TO SPIN / CLICK TO OPEN). -->
<div bind:this={tooltipEl} class="tooltip"></div>

<div class="ui" aria-hidden="true">
  {#each sections as s}
    <section class="panel">
      <h2>{s.title}</h2>
      <p>{s.copy}</p>
    </section>
  {/each}
</div>

<nav class="sr-only" aria-label="Destinations">
  {#each cfg.cubes as cube}
    {#each cube.faces as f}
      <a href={f.url}>{f.label}</a>
    {/each}
  {/each}
</nav>

<style>
  :global(html, body) { margin: 0; background: #05060a; }
  :global(body) { scroll-snap-type: y proximity; }
  .stage { position: fixed; inset: 0; width: 100vw; height: 100vh; z-index: 0; }
  .tooltip {
    position: fixed;
    z-index: 20;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    padding: 6px 10px;
    background: rgba(5, 6, 10, 0.8);
    border: 1px solid rgba(157, 180, 255, 0.5);
    border-radius: 6px;
    color: #cfe0ff;
    font: 600 0.75rem/1.3 system-ui, sans-serif;
    letter-spacing: 0.06em;
    text-align: center;
    white-space: nowrap;
  }
  .ui { position: relative; z-index: 10; pointer-events: none; }
  .panel {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8vw;
    color: #eaf4ff;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.7);
  }
  .panel h2 { margin: 0; font: 700 clamp(2rem, 8vw, 5rem)/1 system-ui, sans-serif; }
  .panel p { margin: 0.5rem 0 0; max-width: 28ch; font: 400 clamp(1rem, 2.5vw, 1.4rem)/1.5 system-ui, sans-serif; opacity: 0.85; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
</style>
