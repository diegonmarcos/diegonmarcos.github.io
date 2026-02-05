<script lang="ts">
  import type { Rotation } from '$lib/types';
  import Icon from './Icon.svelte';

  let {
    rotation,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }: {
    rotation: Rotation;
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: () => void;
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: () => void;
  } = $props();

  // Realistic Solar System Data
  const planets = [
    { id: 'mercury', name: 'MERCURY', color: '#b5b5b5', size: 8, orbit: 60, speed: 8, tilt: 7 },
    { id: 'venus', name: 'VENUS', color: '#e6c87a', size: 12, orbit: 90, speed: 12, tilt: 3.4 },
    { id: 'earth', name: 'EARTH', color: '#6b93d6', size: 13, orbit: 120, speed: 16, tilt: 23.4 },
    { id: 'mars', name: 'MARS', color: '#c1440e', size: 10, orbit: 150, speed: 20, tilt: 25.2 },
    { id: 'jupiter', name: 'JUPITER', color: '#d8ca9d', size: 28, orbit: 195, speed: 28, tilt: 3.1 },
    { id: 'saturn', name: 'SATURN', color: '#f4d59e', size: 24, orbit: 245, speed: 36, tilt: 26.7, hasRings: true },
    { id: 'uranus', name: 'URANUS', color: '#d1e7e7', size: 16, orbit: 285, speed: 48, tilt: 97.8 },
    { id: 'neptune', name: 'NEPTUNE', color: '#5b5ddf', size: 15, orbit: 320, speed: 60, tilt: 28.3 }
  ];

  // Generate asteroids
  const asteroids = Array.from({ length: 40 }, (_, n) => ({
    angle: (n * 9) + 'deg',
    distance: (165 + Math.random() * 20) + 'px',
    size: (1 + Math.random() * 2) + 'px',
    delay: (Math.random() * 30) + 's'
  }));

  // Generate stars
  const stars = Array.from({ length: 80 }, () => ({
    x: (Math.random() * 800 - 400) + 'px',
    y: (Math.random() * 800 - 400) + 'px',
    z: (Math.random() * 300 - 150) + 'px',
    twinkleDelay: (Math.random() * 4) + 's',
    size: (Math.random() * 2 + 0.5) + 'px'
  }));

  function handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    onTouchMove(e);
  }
</script>

<div
  class="solar-viewport fade-in"
  onmousedown={onMouseDown}
  onmousemove={onMouseMove}
  onmouseup={onMouseUp}
  onmouseleave={onMouseUp}
  ontouchstart={onTouchStart}
  ontouchmove={handleTouchMove}
  ontouchend={onTouchEnd}
  role="application"
  tabindex="0"
>
  <div class="solar-instruction">
    <Icon name="rotate-3d" size={16} class="anim-icon" />
    DRAG TO EXPLORE THE SOLAR SYSTEM
  </div>

  <div
    class="solar-system-scene"
    style="transform: rotateX({rotation.x + 60}deg) rotateZ({rotation.y}deg)"
  >
    <!-- Sun -->
    <div class="sun-star">
      <div class="sun-surface"></div>
      <div class="sun-corona-1"></div>
      <div class="sun-corona-2"></div>
      <div class="sun-glow"></div>
    </div>

    <!-- Orbital Paths -->
    {#each planets as planet}
      <div
        class="orbital-path"
        style="width: {planet.orbit * 2}px; height: {planet.orbit * 2}px"
      ></div>
    {/each}

    <!-- Planets -->
    {#each planets as planet}
      <div
        class="planet-container"
        style="--orbit-radius: {planet.orbit}px; --orbit-speed: {planet.speed}s; --planet-size: {planet.size}px; --planet-color: {planet.color}; --planet-tilt: {planet.tilt}deg"
      >
        <div class="planet-orbit-wrapper">
          <div class="planet-body" class:has-rings={planet.hasRings}>
            <div class="planet-sphere"></div>
            {#if planet.hasRings}
              <div class="saturn-rings"></div>
            {/if}
            <span class="planet-name">{planet.name}</span>
          </div>
        </div>
      </div>
    {/each}

    <!-- Asteroid Belt (between Mars and Jupiter) -->
    <div class="asteroid-belt">
      {#each asteroids as asteroid}
        <div
          class="asteroid"
          style="--angle: {asteroid.angle}; --distance: {asteroid.distance}; --size: {asteroid.size}; --delay: {asteroid.delay}"
        ></div>
      {/each}
    </div>

    <!-- Stars Background -->
    <div class="star-field">
      {#each stars as star}
        <div
          class="distant-star"
          style="--x: {star.x}; --y: {star.y}; --z: {star.z}; --twinkle-delay: {star.twinkleDelay}; --star-size: {star.size}"
        ></div>
      {/each}
    </div>
  </div>
</div>
