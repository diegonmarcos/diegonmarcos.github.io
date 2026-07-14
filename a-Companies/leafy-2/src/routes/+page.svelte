<script lang="ts">
  import { onMount } from 'svelte';
  import { Spring } from 'svelte/motion';
  import { Canvas } from '@threlte/core';
  import World from '$lib/webgl/World.svelte';
  import cfg from '$lib/data/scene.json';

  // Scroll % → damped spring (replaces manual lerp). World reads scroll.current.
  const scroll = new Spring(0, { stiffness: 0.045, damping: 0.9 });

  const sections = [
    { title: 'Daylight', copy: 'A surreal overworld, rendered in real time.' },
    { title: 'Wilderness', copy: 'Living trees, hopping rabbits, drifting birds.' },
    { title: 'Still Water', copy: 'A mirror lake under two impossible moons.' },
    { title: 'Beyond', copy: 'Spin a cube to travel onward.' }
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
    <World scroll={scroll.current} />
  </Canvas>
</div>

<!-- z10 overlay: pointer-events off so it never blocks the 3D raycaster (§3). -->
<div class="ui" aria-hidden="true">
  {#each sections as s}
    <section class="panel">
      <h2>{s.title}</h2>
      <p>{s.copy}</p>
    </section>
  {/each}
</div>

<!-- Accessible mirror of the 3D project cubes for screen readers / crawlers (§7). -->
<nav class="sr-only" aria-label="Destinations">
  {#each cfg.cubes as c}
    <a href={c.url}>{c.label}</a>
  {/each}
</nav>

<style>
  :global(html, body) { margin: 0; background: #05060a; }
  :global(body) { scroll-snap-type: y proximity; }
  .stage {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
  .ui {
    position: relative;
    z-index: 10;
    pointer-events: none;
  }
  .panel {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8vw;
    color: #eaf4ff;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.6);
  }
  .panel h2 { margin: 0; font: 700 clamp(2rem, 8vw, 5rem)/1 system-ui, sans-serif; }
  .panel p {
    margin: 0.5rem 0 0;
    max-width: 28ch;
    font: 400 clamp(1rem, 2.5vw, 1.4rem)/1.5 system-ui, sans-serif;
    opacity: 0.85;
  }
  .sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
