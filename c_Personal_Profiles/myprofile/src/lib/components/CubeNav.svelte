<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { pages, pageOrder, type PageName } from '$lib/stores/navigation';

  let isOpen = $state(false);
  let isTransitioning = $state(false);
  let selectedIndex = $state(0);
  let cubeRotX = $state(-25);
  let cubeRotY = $state(35);

  // Touch/drag state
  let isDragging = $state(false);
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartRotX = 0;
  let dragStartRotY = 0;
  let cubeElement: HTMLDivElement;

  // Face rotations for each page
  const pageRotations: Record<PageName, { rotX: number; rotY: number }> = {
    profile: { rotX: 0, rotY: 0 },
    audio: { rotX: 0, rotY: -90 },
    bio: { rotX: 0, rotY: -180 },
    geo: { rotX: 0, rotY: -270 },
    visual: { rotX: -90, rotY: 0 },
    memory: { rotX: 90, rotY: 0 },
    syslog: { rotX: 0, rotY: -360 }
  };

  // Get current page from path
  function getPageFromPath(path: string): PageName {
    if (path.includes('/audio')) return 'audio';
    if (path.includes('/bio')) return 'bio';
    if (path.includes('/geo')) return 'geo';
    if (path.includes('/visual')) return 'visual';
    if (path.includes('/memory')) return 'memory';
    if (path.includes('/syslog')) return 'syslog';
    return 'profile';
  }

  // Get relative route for navigation (works with static adapter)
  function getRelativeRoute(targetPage: PageName): string {
    const currentPath = window.location.pathname;
    const isInSubdir = currentPath !== '/' && !currentPath.endsWith('/index.html') &&
                       (currentPath.includes('/audio') || currentPath.includes('/bio') ||
                        currentPath.includes('/geo') || currentPath.includes('/visual') ||
                        currentPath.includes('/memory') || currentPath.includes('/syslog'));

    if (targetPage === 'profile') {
      return isInSubdir ? '../' : './';
    } else {
      return isInSubdir ? `../${targetPage}/` : `./${targetPage}/`;
    }
  }

  function open() {
    isOpen = true;
    // Find current page index
    const currentPath = $page.url.pathname;
    const currentPage = getPageFromPath(currentPath);
    selectedIndex = pageOrder.indexOf(currentPage);
    updateCubeRotation();
  }

  function close() {
    isOpen = false;
  }

  function navigate() {
    const targetPage = pageOrder[selectedIndex];
    const targetRoute = getRelativeRoute(targetPage);
    close();
    window.location.href = targetRoute;
  }

  // Navigate directly with cube transition effect (for arrow keys outside cube)
  function navigateWithTransition(direction: 'left' | 'right' | 'up' | 'down') {
    if (isTransitioning) return;

    const currentPath = $page.url.pathname;
    const currentPage = getPageFromPath(currentPath);
    selectedIndex = pageOrder.indexOf(currentPage);

    // Calculate target based on direction
    let targetPage: PageName;
    const horizontalPages: PageName[] = ['profile', 'audio', 'bio', 'geo'];
    const currentHIndex = horizontalPages.indexOf(currentPage);

    switch (direction) {
      case 'right':
        if (currentHIndex !== -1) {
          targetPage = horizontalPages[(currentHIndex + 1) % horizontalPages.length];
        } else {
          targetPage = 'profile';
        }
        break;
      case 'left':
        if (currentHIndex !== -1) {
          targetPage = horizontalPages[(currentHIndex - 1 + horizontalPages.length) % horizontalPages.length];
        } else {
          targetPage = 'profile';
        }
        break;
      case 'up':
        targetPage = currentPage === 'memory' ? 'profile' : currentPage === 'visual' ? currentPage : 'visual';
        break;
      case 'down':
        targetPage = currentPage === 'visual' ? 'profile' : currentPage === 'memory' ? currentPage : 'memory';
        break;
    }

    // Don't navigate if we're already on the target
    if (targetPage === currentPage) return;

    // Show transition
    isTransitioning = true;
    isOpen = true;

    // Set initial rotation to current page
    const fromRot = pageRotations[currentPage];
    cubeRotX = fromRot.rotX - 25;
    cubeRotY = fromRot.rotY + 35;

    // Animate to target after a brief moment
    setTimeout(() => {
      selectedIndex = pageOrder.indexOf(targetPage);
      updateCubeRotation();

      // Navigate after animation
      setTimeout(() => {
        const targetRoute = getRelativeRoute(targetPage);
        window.location.href = targetRoute;
      }, 600);
    }, 100);
  }

  function updateCubeRotation() {
    const targetPage = pageOrder[selectedIndex];
    const rot = pageRotations[targetPage];
    // Add isometric offset for visibility
    cubeRotX = rot.rotX - 25;
    cubeRotY = rot.rotY + 35;
  }

  function selectNext() {
    selectedIndex = (selectedIndex + 1) % pageOrder.length;
    updateCubeRotation();
  }

  function selectPrev() {
    selectedIndex = (selectedIndex - 1 + pageOrder.length) % pageOrder.length;
    updateCubeRotation();
  }

  // Navigate horizontally (left/right faces)
  function selectRight() {
    const currentPage = pageOrder[selectedIndex];
    // Horizontal pages cycle: profile -> audio -> bio -> geo -> profile
    const horizontalPages: PageName[] = ['profile', 'audio', 'bio', 'geo'];
    const currentHIndex = horizontalPages.indexOf(currentPage);

    if (currentHIndex !== -1) {
      const nextPage = horizontalPages[(currentHIndex + 1) % horizontalPages.length];
      selectedIndex = pageOrder.indexOf(nextPage);
    } else {
      // From top/bottom, go to profile
      selectedIndex = pageOrder.indexOf('profile');
    }
    updateCubeRotation();
  }

  function selectLeft() {
    const currentPage = pageOrder[selectedIndex];
    const horizontalPages: PageName[] = ['profile', 'audio', 'bio', 'geo'];
    const currentHIndex = horizontalPages.indexOf(currentPage);

    if (currentHIndex !== -1) {
      const prevPage = horizontalPages[(currentHIndex - 1 + horizontalPages.length) % horizontalPages.length];
      selectedIndex = pageOrder.indexOf(prevPage);
    } else {
      selectedIndex = pageOrder.indexOf('profile');
    }
    updateCubeRotation();
  }

  // Navigate vertically (top/bottom faces)
  function selectUp() {
    const currentPage = pageOrder[selectedIndex];
    // visual is top face
    if (currentPage === 'memory') {
      // From bottom, go to a horizontal face
      selectedIndex = pageOrder.indexOf('profile');
    } else if (currentPage !== 'visual') {
      // From horizontal or syslog, go to top (visual)
      selectedIndex = pageOrder.indexOf('visual');
    }
    updateCubeRotation();
  }

  function selectDown() {
    const currentPage = pageOrder[selectedIndex];
    // memory is bottom face
    if (currentPage === 'visual') {
      // From top, go to a horizontal face
      selectedIndex = pageOrder.indexOf('profile');
    } else if (currentPage !== 'memory') {
      // From horizontal or syslog, go to bottom (memory)
      selectedIndex = pageOrder.indexOf('memory');
    }
    updateCubeRotation();
  }

  function handleKeydown(e: KeyboardEvent) {
    // Check if user is typing in an input
    const activeEl = document.activeElement;
    const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA';
    if (isInput) return;

    if (!isOpen) {
      // Open with 'c' key (for cube)
      if (e.key === 'c' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        open();
        return;
      }

      // Arrow keys trigger cube transition navigation
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateWithTransition('right');
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateWithTransition('left');
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateWithTransition('up');
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateWithTransition('down');
        return;
      }
    } else {
      // Navigation when open
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'ArrowRight':
          e.preventDefault();
          selectRight();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          selectLeft();
          break;
        case 'ArrowUp':
          e.preventDefault();
          selectUp();
          break;
        case 'ArrowDown':
          e.preventDefault();
          selectDown();
          break;
        case 'Tab':
          e.preventDefault();
          if (e.shiftKey) selectPrev();
          else selectNext();
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          navigate();
          break;
      }
    }
  }

  // Face transforms for CSS
  const faceTransforms: Record<PageName, string> = {
    profile: 'translateZ(150px)',
    audio: 'rotateY(90deg) translateZ(150px)',
    bio: 'rotateY(180deg) translateZ(150px)',
    geo: 'rotateY(-90deg) translateZ(150px)',
    visual: 'rotateX(90deg) translateZ(150px)',
    memory: 'rotateX(-90deg) translateZ(150px)',
    syslog: 'rotateY(360deg) translateZ(150px)'
  };

  function getFaceTransform(pageName: PageName): string {
    return faceTransforms[pageName] || 'translateZ(150px)';
  }

  // Touch/drag handlers
  function handleDragStart(clientX: number, clientY: number) {
    isDragging = true;
    dragStartX = clientX;
    dragStartY = clientY;
    dragStartRotX = cubeRotX;
    dragStartRotY = cubeRotY;
    if (cubeElement) {
      cubeElement.style.transition = 'none';
    }
  }

  function handleDragMove(clientX: number, clientY: number) {
    if (!isDragging) return;

    const deltaX = clientX - dragStartX;
    const deltaY = clientY - dragStartY;
    const sensitivity = 0.5;

    cubeRotY = dragStartRotY + deltaX * sensitivity;
    cubeRotX = dragStartRotX - deltaY * sensitivity;

    // Clamp vertical rotation
    cubeRotX = Math.max(-90, Math.min(90, cubeRotX));
  }

  function handleDragEnd() {
    if (!isDragging) return;
    isDragging = false;

    if (cubeElement) {
      cubeElement.style.transition = '';
    }

    // Snap to nearest face
    snapToNearestFace();
  }

  function snapToNearestFace() {
    // Find the closest page based on current rotation
    let closestPage: PageName = 'profile';
    let closestDistance = Infinity;

    // Normalize cubeRotY to 0-360 range
    let normalizedY = ((cubeRotY % 360) + 360) % 360;

    for (const [pageName, rot] of Object.entries(pageRotations)) {
      // Normalize the page rotation
      let pageRotY = ((-rot.rotY % 360) + 360) % 360;
      let pageRotX = rot.rotX;

      // Calculate distance (considering wrap-around for Y)
      let distY = Math.min(
        Math.abs(normalizedY - pageRotY),
        360 - Math.abs(normalizedY - pageRotY)
      );
      let distX = Math.abs(cubeRotX - (pageRotX - 25)); // -25 is our isometric offset

      let distance = distY + distX * 2; // Weight X more since it's more constrained

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPage = pageName as PageName;
      }
    }

    // Update selected index and animate to that position
    selectedIndex = pageOrder.indexOf(closestPage);
    updateCubeRotation();
  }

  // Touch events
  function onTouchStart(e: TouchEvent) {
    if (e.touches.length === 1) {
      e.preventDefault();
      handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onTouchMove(e: TouchEvent) {
    if (e.touches.length === 1 && isDragging) {
      e.preventDefault();
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onTouchEnd() {
    handleDragEnd();
  }

  // Mouse events (for desktop drag support)
  function onMouseDown(e: MouseEvent) {
    if (e.button === 0) { // Left click only
      e.preventDefault();
      handleDragStart(e.clientX, e.clientY);
    }
  }

  function onMouseMove(e: MouseEvent) {
    if (isDragging) {
      handleDragMove(e.clientX, e.clientY);
    }
  }

  function onMouseUp() {
    handleDragEnd();
  }

  // WebGL Background
  let bgCanvas: HTMLCanvasElement;
  let gl: WebGLRenderingContext | null = null;
  let animationId: number;

  const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Proper galaxy starfield background
  const fragmentShaderSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;

    // High quality hash
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    // Multiple star layers for depth
    float stars(vec2 uv, float scale, float brightness, float t) {
      vec2 p = uv * scale;
      vec2 id = floor(p);
      vec2 f = fract(p) - 0.5;

      float h = hash(id);
      float size = h * 0.4 + 0.1;

      // Only some cells have stars
      if (h < 0.85) return 0.0;

      // Subtle twinkle
      float twinkle = 0.7 + 0.3 * sin(t * (1.0 + h * 2.0) + h * 100.0);

      // Star shape - simple point
      float d = length(f);
      float star = smoothstep(size * 0.15, 0.0, d);

      // Add subtle glow
      star += smoothstep(size * 0.5, 0.0, d) * 0.3;

      return star * twinkle * brightness;
    }

    // Subtle shooting star (rare, small, fast)
    float shootingStar(vec2 uv, float t, float seed) {
      float period = 8.0 + seed * 4.0;
      float tt = mod(t + seed * 10.0, period);

      // Only visible for brief moment
      if (tt > 0.8) return 0.0;

      float progress = tt / 0.8;
      vec2 start = vec2(hash(vec2(seed, 1.0)), hash(vec2(seed, 2.0))) * 0.6 + 0.2;
      vec2 dir = normalize(vec2(hash(vec2(seed, 3.0)) - 0.5, -0.3 - hash(vec2(seed, 4.0)) * 0.4));

      vec2 pos = start + dir * progress * 0.3;
      vec2 toPoint = uv - pos;

      float along = dot(toPoint, -dir);
      float perp = abs(length(toPoint - (-dir) * clamp(along, 0.0, 0.1)));

      float trail = smoothstep(0.003, 0.0, perp) * smoothstep(0.0, 0.02, along) * smoothstep(0.1, 0.0, along);
      trail *= (1.0 - progress); // Fade out

      return trail * 0.6;
    }

    // Subtle nebula clouds
    float nebula(vec2 uv, float t) {
      vec2 p = uv * 2.0;
      float n = 0.0;
      float amp = 0.5;
      for (int i = 0; i < 3; i++) {
        vec2 offset = vec2(t * 0.01 * float(i + 1), t * 0.008);
        n += (hash(floor(p + offset)) * 2.0 - 1.0) * amp;
        p *= 2.0;
        amp *= 0.5;
      }
      return smoothstep(0.2, 0.8, n * 0.5 + 0.5) * 0.15;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float t = u_time * 0.5;

      // Deep space black
      vec3 col = vec3(0.005, 0.007, 0.015);

      // Very subtle blue/purple nebula
      float neb = nebula(uv, t);
      col += vec3(0.02, 0.01, 0.04) * neb;
      col += vec3(0.01, 0.02, 0.03) * nebula(uv * 1.5 + 0.5, t * 0.7);

      // Multiple star layers (back to front, dim to bright)
      col += vec3(0.4, 0.45, 0.5) * stars(uv, 200.0, 0.3, t);  // Distant dim stars
      col += vec3(0.6, 0.65, 0.7) * stars(uv, 100.0, 0.5, t);  // Medium stars
      col += vec3(0.8, 0.85, 0.9) * stars(uv, 50.0, 0.7, t);   // Closer stars
      col += vec3(1.0, 1.0, 0.95) * stars(uv, 25.0, 1.0, t);   // Bright nearby stars

      // Rare colored stars
      col += vec3(1.0, 0.7, 0.5) * stars(uv + 0.1, 80.0, 0.4, t) * 0.5;  // Orange
      col += vec3(0.7, 0.8, 1.0) * stars(uv + 0.2, 90.0, 0.4, t) * 0.5;  // Blue

      // Occasional subtle shooting stars
      col += vec3(0.9, 0.95, 1.0) * shootingStar(uv, t, 0.0);
      col += vec3(0.9, 0.95, 1.0) * shootingStar(uv, t, 3.7);

      // Gentle vignette
      col *= 1.0 - dot(uv - 0.5, uv - 0.5) * 0.3;

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function initWebGL() {
    if (!bgCanvas) return;

    gl = bgCanvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    // Create shaders
    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    gl.shaderSource(vs, vertexShaderSource);
    gl.compileShader(vs);
    gl.shaderSource(fs, fragmentShaderSource);
    gl.compileShader(fs);

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Setup geometry
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');

    // Resize
    const resize = () => {
      if (!bgCanvas || !gl) return;
      bgCanvas.width = window.innerWidth;
      bgCanvas.height = window.innerHeight;
      gl.viewport(0, 0, bgCanvas.width, bgCanvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // Render loop
    const startTime = performance.now();
    const render = () => {
      if (!gl || !isOpen) return;
      gl.uniform1f(timeLoc, (performance.now() - startTime) / 1000);
      gl.uniform2f(resLoc, bgCanvas.width, bgCanvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };
    render();
  }

  function cleanupWebGL() {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  }

  $effect(() => {
    if (isOpen && bgCanvas) {
      initWebGL();
    } else {
      cleanupWebGL();
    }
  });

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cleanupWebGL();
    };
  });
</script>

{#if isOpen}
  <div
    class="cube-nav-overlay"
    class:transitioning={isTransitioning}
    onclick={() => !isTransitioning && close()}
    role="dialog"
    aria-modal="true"
  >
    <!-- Dynamic space background -->
    <canvas bind:this={bgCanvas} class="bg-canvas"></canvas>

    <div class="cube-nav-container" onclick={(e) => e.stopPropagation()}>
      <div
        class="cube-scene"
        ontouchstart={onTouchStart}
        ontouchmove={onTouchMove}
        ontouchend={onTouchEnd}
        onmousedown={onMouseDown}
        role="slider"
        aria-label="Rotate cube to select page"
      >
        <div
          bind:this={cubeElement}
          class="cube"
          class:dragging={isDragging}
          style="transform: rotateX({cubeRotX}deg) rotateY({cubeRotY}deg)"
        >
          {#each pageOrder as pageName, i}
            {@const pageData = pages[pageName]}
            <button
              class="cube-face"
              class:selected={i === selectedIndex}
              style="--face-color: {pageData.color}; transform: {getFaceTransform(pageName)};"
              onclick={() => { selectedIndex = i; updateCubeRotation(); }}
              ondblclick={navigate}
            >
              <!-- Live page preview via iframe -->
              <div class="face-preview">
                <iframe
                  src={pageName === 'profile' ? './' : `./${pageName}/`}
                  title={pageData.label}
                  loading="lazy"
                  scrolling="no"
                ></iframe>
              </div>
              <div class="face-label">{pageData.label}</div>
            </button>
          {/each}
        </div>
      </div>

      <div class="page-dots">
        {#each pageOrder as pageName, i}
          <button
            class="dot"
            class:active={i === selectedIndex}
            style="--dot-color: {pages[pageName].color}"
            onclick={() => { selectedIndex = i; updateCubeRotation(); }}
            aria-label={pages[pageName].label}
          ></button>
        {/each}
      </div>
    </div>
  </div>
{/if}

<div class="cube-hint mono">
  <span class="key">←→↑↓</span> Navigate pages
  <span class="separator">·</span>
  <span class="key">C</span> Cube view
</div>

<style lang="scss">
  .cube-nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .cube-nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .cube-scene {
    width: 350px;
    height: 350px;
    perspective: 1000px;
    perspective-origin: center center;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &.dragging {
      transition: none;
    }
  }

  .cube-scene {
    cursor: grab;
    touch-action: none;
    user-select: none;

    &:active {
      cursor: grabbing;
    }
  }

  .cube-face {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 25px;
    top: 25px;
    background: linear-gradient(135deg, rgba(0, 10, 5, 0.95), rgba(0, 20, 10, 0.9));
    border: 2px solid var(--face-color);
    box-shadow: 0 0 20px color-mix(in srgb, var(--face-color) 20%, transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover, &.selected {
      box-shadow:
        0 0 40px color-mix(in srgb, var(--face-color) 40%, transparent),
        inset 0 0 30px color-mix(in srgb, var(--face-color) 10%, transparent);
    }

    &.selected {
      border-width: 3px;
    }
  }

  .face-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    color: var(--face-color);
    letter-spacing: 0.2em;
    text-shadow: 0 0 15px var(--face-color);
  }

  .face-icon {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: color-mix(in srgb, var(--face-color) 60%, transparent);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .page-dots {
    display: flex;
    gap: 0.75rem;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--dot-color);
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0;

    &:hover {
      transform: scale(1.2);
    }

    &.active {
      background: var(--dot-color);
      box-shadow: 0 0 10px var(--dot-color);
    }
  }

  .cube-hint {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.75rem;
    z-index: 100;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    .key {
      display: inline-block;
      padding: 0.15rem 0.4rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    .separator {
      opacity: 0.5;
      margin: 0 0.25rem;
    }
  }

  // Transitioning mode - hide controls, just show cube
  .cube-nav-overlay.transitioning {
    .page-dots {
      opacity: 0;
      pointer-events: none;
    }

    .cube-scene {
      cursor: default;
    }
  }

  // Background canvas
  .bg-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  // Page preview with iframe
  .face-preview {
    width: 260px;
    height: 180px;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    background: #000;
    border: 1px solid color-mix(in srgb, var(--face-color) 30%, transparent);

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 1200px;
      height: 900px;
      transform: scale(0.217);
      transform-origin: top left;
      border: none;
      pointer-events: none;
    }
  }
</style>
