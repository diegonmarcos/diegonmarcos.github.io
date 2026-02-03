<script lang="ts">
  import { onMount } from 'svelte';
  import * as d3Geo from 'd3-geo';
  import { timer } from 'd3-timer';
  import * as topojson from 'topojson-client';
  import {
    currentProjectionConfig,
    rotation,
    scale,
    autoRotate,
    isGlobe
  } from '$lib/stores/projectionStore';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let width = $state(0);
  let height = $state(0);
  let worldData: any = $state(null);
  let isDragging = $state(false);
  let dragStart: [number, number] = [0, 0];
  let rotationStart: [number, number, number] = [0, 0, 0];

  // Colors
  const colors = {
    water: '#1a3a5c',
    land: '#2d5a3d',
    landHover: '#3d7a4d',
    graticule: 'rgba(255, 255, 255, 0.12)',
    border: 'rgba(255, 255, 255, 0.25)',
    atmosphere: 'rgba(100, 150, 255, 0.15)'
  };

  // Load world data
  onMount(async () => {
    // Fetch world topology data
    const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const topology = await response.json();
    worldData = {
      land: topojson.feature(topology, topology.objects.land),
      countries: topojson.feature(topology, topology.objects.countries),
      borders: topojson.mesh(topology, topology.objects.countries, (a, b) => a !== b)
    };

    // Set up canvas
    ctx = canvas.getContext('2d')!;
    handleResize();

    // Start auto-rotation timer
    const rotationTimer = timer((elapsed) => {
      if ($autoRotate && $isGlobe && !isDragging) {
        rotation.update(r => [(r[0] + 0.1) % 360, r[1], r[2]]);
      }
    });

    // Resize observer
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas.parentElement!);

    return () => {
      rotationTimer.stop();
      resizeObserver.disconnect();
    };
  });

  function handleResize() {
    const rect = canvas.parentElement!.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  // Create projection
  function createProjection(): d3Geo.GeoProjection {
    const config = $currentProjectionConfig;
    const projection = config.factory();

    const baseScale = Math.min(width, height) / 2.2;

    projection
      .translate([width / 2, height / 2])
      .scale(baseScale * $scale);

    if ($isGlobe) {
      projection.rotate($rotation);
      projection.clipAngle(90);
    }

    return projection;
  }

  // Draw the map
  $effect(() => {
    if (!ctx || !worldData) return;

    const projection = createProjection();
    const path = d3Geo.geoPath(projection, ctx);
    const graticule = d3Geo.geoGraticule10();

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw atmosphere (for globe)
    if ($isGlobe) {
      const center = projection([0, 0]);
      if (center) {
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, projection.scale() * 0.9,
          width / 2, height / 2, projection.scale() * 1.1
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, colors.atmosphere);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, projection.scale() * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Draw water/sphere background
    ctx.beginPath();
    if ($isGlobe) {
      ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
    } else {
      path({ type: 'Sphere' });
    }
    ctx.fillStyle = colors.water;
    ctx.fill();

    // Draw graticule
    ctx.beginPath();
    path(graticule);
    ctx.strokeStyle = colors.graticule;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw land
    ctx.beginPath();
    path(worldData.land);
    ctx.fillStyle = colors.land;
    ctx.fill();

    // Draw country borders
    ctx.beginPath();
    path(worldData.borders);
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 0.5;
    ctx.stroke();

    // Draw sphere outline (for globe)
    if ($isGlobe) {
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, projection.scale(), 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });

  // Mouse handlers for globe rotation
  function handleMouseDown(e: MouseEvent) {
    if (!$isGlobe) return;
    isDragging = true;
    dragStart = [e.clientX, e.clientY];
    rotationStart = [...$rotation];
    autoRotate.set(false);
  }

  function handleMouseMove(e: MouseEvent) {
    if (!isDragging || !$isGlobe) return;

    const dx = e.clientX - dragStart[0];
    const dy = e.clientY - dragStart[1];

    const sensitivity = 0.3;
    rotation.set([
      rotationStart[0] + dx * sensitivity,
      Math.max(-90, Math.min(90, rotationStart[1] - dy * sensitivity)),
      rotationStart[2]
    ]);
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    scale.update(s => Math.max(0.5, Math.min(5, s * delta)));
  }
</script>

<div class="canvas-container">
  <canvas
    bind:this={canvas}
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
    onmouseleave={handleMouseUp}
    onwheel={handleWheel}
    style="cursor: {$isGlobe ? (isDragging ? 'grabbing' : 'grab') : 'default'}"
  ></canvas>
</div>
