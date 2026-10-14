<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { pages, pageOrder, type PageName } from '$lib/stores/navigation';

  let isOpen = $state(false);
  let isTransitioning = $state(false);
  let transitionPhase = $state<'idle' | 'zoom-out' | 'isometric' | 'rotate' | 'zoom-in'>('idle');
  let selectedIndex = $state(0);
  let cubeRotX = $state(-25);
  let cubeRotY = $state(35);
  let cameraZ = $state(0); // For zoom effect

  // Progressive iframe loading - load selected first, then others with delay
  let loadedIframes = $state<Set<number>>(new Set());
  let iframesReady = $state(false);

  // Touch/drag state
  let isDragging = $state(false);
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartRotX = 0;
  let dragStartRotY = 0;
  let cubeElement: HTMLDivElement;
  let cubeSceneElement: HTMLDivElement;

  // Touch tap detection (vs drag)
  let touchStartTime = 0;
  let touchMoved = false;
  const TAP_THRESHOLD_MS = 250; // Max time for a tap
  const TAP_MOVE_THRESHOLD = 15; // Max movement in pixels for a tap

  // Wheel scroll cooldown
  let lastWheelTime = 0;
  const wheelCooldown = 400; // ms between wheel-triggered navigations

  // Global swipe detection for mobile page navigation (when cube is closed)
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeStartTime = 0;
  const SWIPE_THRESHOLD = 50; // Minimum distance for a swipe
  const SWIPE_TIME_LIMIT = 300; // Max time for a swipe gesture

  // Face rotations for each page (circular layout)
  // All horizontal faces + syslog rotate on Y axis (0, 90, 180, 270, 360...)
  // visual = top (-90 on X), memory = bottom (90 on X)
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

  // Get route for navigation using SvelteKit's base path
  function getRoute(targetPage: PageName): string {
    if (targetPage === 'profile') return `${base}/`;
    return `${base}/${targetPage}/`;
  }

  function open() {
    isOpen = true;
    // Find current page index
    const currentPath = $page.url.pathname;
    const currentPage = getPageFromPath(currentPath);
    selectedIndex = pageOrder.indexOf(currentPage);
    updateCubeRotation();

    // Blur any focused element so keyboard events work
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Progressive iframe loading for better performance
    // Load selected face first, then stagger others
    loadedIframes = new Set([selectedIndex]);
    iframesReady = false;

    // Load adjacent faces after a short delay
    setTimeout(() => {
      const adjacent = [
        (selectedIndex - 1 + pageOrder.length) % pageOrder.length,
        (selectedIndex + 1) % pageOrder.length
      ];
      loadedIframes = new Set([...loadedIframes, ...adjacent]);
    }, 150);

    // Load remaining faces after cube is interactive
    setTimeout(() => {
      loadedIframes = new Set(pageOrder.map((_, i) => i));
      iframesReady = true;
    }, 400);
  }

  function close() {
    isOpen = false;
    // Clear iframes to free memory
    loadedIframes = new Set();
    iframesReady = false;
  }

  function navigate() {
    const targetPage = pageOrder[selectedIndex];
    const targetRoute = getRoute(targetPage);
    close();
    window.location.href = targetRoute;
  }

  // Animate a value smoothly
  function animateValue(
    setter: (v: number) => void,
    from: number,
    to: number,
    duration: number
  ): Promise<void> {
    return new Promise((resolve) => {
      const start = performance.now();
      function update() {
        const elapsed = performance.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: ease-in-out cubic
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setter(from + (to - from) * eased);
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(update);
    });
  }

  // Navigate directly with cube transition effect (for arrow keys/wheel outside cube)
  async function navigateWithTransition(direction: 'left' | 'right' | 'up' | 'down') {
    if (isTransitioning) return;

    const currentPath = $page.url.pathname;
    const currentPage = getPageFromPath(currentPath);
    selectedIndex = pageOrder.indexOf(currentPage);

    // Calculate target based on direction - CIRCULAR navigation
    let targetPage: PageName;

    // Define circular page sequences
    const horizontalPages: PageName[] = ['profile', 'audio', 'bio', 'geo'];
    const verticalPages: PageName[] = ['visual', 'profile', 'memory']; // top -> middle -> bottom, then wraps

    const currentHIndex = horizontalPages.indexOf(currentPage);
    const currentVIndex = verticalPages.indexOf(currentPage);

    switch (direction) {
      case 'right':
        if (currentHIndex !== -1) {
          // Circular: geo -> profile -> audio -> bio -> geo...
          targetPage = horizontalPages[(currentHIndex + 1) % horizontalPages.length];
        } else {
          // From top/bottom, go to profile then continue right
          targetPage = 'audio';
        }
        break;
      case 'left':
        if (currentHIndex !== -1) {
          // Circular: profile -> geo -> bio -> audio -> profile...
          targetPage = horizontalPages[(currentHIndex - 1 + horizontalPages.length) % horizontalPages.length];
        } else {
          // From top/bottom, go to profile then continue left
          targetPage = 'geo';
        }
        break;
      case 'up':
        // Circular vertical: memory -> profile -> visual -> memory...
        if (currentPage === 'memory') {
          targetPage = 'profile';
        } else if (currentPage === 'visual') {
          targetPage = 'memory'; // Wrap around: top goes to bottom
        } else {
          targetPage = 'visual'; // From horizontal pages, go to top
        }
        break;
      case 'down':
        // Circular vertical: visual -> profile -> memory -> visual...
        if (currentPage === 'visual') {
          targetPage = 'profile';
        } else if (currentPage === 'memory') {
          targetPage = 'visual'; // Wrap around: bottom goes to top
        } else {
          targetPage = 'memory'; // From horizontal pages, go to bottom
        }
        break;
    }

    // Don't navigate if we're already on the target
    if (targetPage === currentPage) return;

    // Start 3-stage transition
    isTransitioning = true;
    isOpen = true;

    // During transition, only load current and target faces for performance
    const currentIndex = pageOrder.indexOf(currentPage);
    const targetIndex = pageOrder.indexOf(targetPage);
    loadedIframes = new Set([currentIndex, targetIndex]);
    iframesReady = false;

    const fromRot = pageRotations[currentPage];
    const toRot = pageRotations[targetPage];

    // Isometric viewing angle offsets
    const isoOffsetX = -25;
    const isoOffsetY = 35;

    // Stage 1: Start zoomed in on current face
    cameraZ = 0;
    cubeRotX = fromRot.rotX;
    cubeRotY = fromRot.rotY;
    transitionPhase = 'zoom-out';

    // Stage 2: Zoom out
    await animateValue((v) => cameraZ = v, 0, 600, 400);

    // Stage 3: Move to isometric view
    transitionPhase = 'isometric';
    await Promise.all([
      animateValue((v) => cubeRotX = v, fromRot.rotX, fromRot.rotX + isoOffsetX, 350),
      animateValue((v) => cubeRotY = v, fromRot.rotY, fromRot.rotY + isoOffsetY, 350)
    ]);

    // Stage 4: Rotate to target face
    transitionPhase = 'rotate';
    await Promise.all([
      animateValue((v) => cubeRotX = v, fromRot.rotX + isoOffsetX, toRot.rotX + isoOffsetX, 500),
      animateValue((v) => cubeRotY = v, fromRot.rotY + isoOffsetY, toRot.rotY + isoOffsetY, 500)
    ]);

    // Update selected index
    selectedIndex = pageOrder.indexOf(targetPage);

    // Stage 5: Zoom in to target
    transitionPhase = 'zoom-in';
    await Promise.all([
      animateValue((v) => cubeRotX = v, toRot.rotX + isoOffsetX, toRot.rotX, 350),
      animateValue((v) => cubeRotY = v, toRot.rotY + isoOffsetY, toRot.rotY, 350),
      animateValue((v) => cameraZ = v, 600, 0, 400)
    ]);

    // Navigate to the target page
    transitionPhase = 'idle';
    const targetRoute = getRoute(targetPage);
    window.location.href = targetRoute;
  }

  // Handle mouse wheel to change pages
  function handleWheel(e: WheelEvent) {
    // Prevent if in input or transitioning
    const activeEl = document.activeElement;
    const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA';
    if (isInput || isTransitioning || isOpen) return;

    // Cooldown to prevent rapid firing
    const now = Date.now();
    if (now - lastWheelTime < wheelCooldown) return;
    lastWheelTime = now;

    // Determine direction based on scroll delta
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      // Vertical scroll - up/down navigation
      if (e.deltaY > 0) {
        navigateWithTransition('down');
      } else {
        navigateWithTransition('up');
      }
    } else if (Math.abs(e.deltaX) > 10) {
      // Horizontal scroll - left/right navigation
      if (e.deltaX > 0) {
        navigateWithTransition('right');
      } else {
        navigateWithTransition('left');
      }
    }
  }

  function updateCubeRotation() {
    const targetPage = pageOrder[selectedIndex];
    const rot = pageRotations[targetPage];
    // Add isometric offset for visibility
    const targetRotX = rot.rotX - 25;
    const targetRotY = rot.rotY + 35;

    // Calculate shortest angular path for Y rotation (allows smooth circular rotation)
    let deltaY = targetRotY - cubeRotY;
    // Normalize to -180 to 180 range for shortest path
    while (deltaY > 180) deltaY -= 360;
    while (deltaY < -180) deltaY += 360;

    cubeRotX = targetRotX;
    cubeRotY = cubeRotY + deltaY;
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

  // Navigate vertically (top/bottom faces) - CIRCULAR
  function selectUp() {
    const currentPage = pageOrder[selectedIndex];
    // Circular vertical: memory -> profile -> visual -> memory...
    if (currentPage === 'memory') {
      selectedIndex = pageOrder.indexOf('profile');
    } else if (currentPage === 'visual') {
      selectedIndex = pageOrder.indexOf('memory'); // Wrap: top goes to bottom
    } else {
      selectedIndex = pageOrder.indexOf('visual');
    }
    updateCubeRotation();
  }

  function selectDown() {
    const currentPage = pageOrder[selectedIndex];
    // Circular vertical: visual -> profile -> memory -> visual...
    if (currentPage === 'visual') {
      selectedIndex = pageOrder.indexOf('profile');
    } else if (currentPage === 'memory') {
      selectedIndex = pageOrder.indexOf('visual'); // Wrap: bottom goes to top
    } else {
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
    const sensitivity = 0.4; // Slightly lower for smoother feel

    cubeRotY = dragStartRotY + deltaX * sensitivity;
    cubeRotX = dragStartRotX - deltaY * sensitivity;

    // Allow full rotation but with soft limits for X (vertical)
    // This prevents the cube from going upside down too easily
    cubeRotX = Math.max(-120, Math.min(120, cubeRotX));
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

    // Normalize cubeRotY to -180 to 180 range for better distance calculation
    let normalizedY = cubeRotY % 360;
    if (normalizedY > 180) normalizedY -= 360;
    if (normalizedY < -180) normalizedY += 360;

    // Only check horizontal and vertical faces (skip syslog which overlaps with profile)
    const mainPages: PageName[] = ['profile', 'audio', 'bio', 'geo', 'visual', 'memory'];

    for (const pageName of mainPages) {
      const rot = pageRotations[pageName];
      // Normalize page rotation the same way
      let pageRotY = rot.rotY % 360;
      if (pageRotY > 180) pageRotY -= 360;
      if (pageRotY < -180) pageRotY += 360;

      let pageRotX = rot.rotX - 25; // -25 is our isometric offset

      // Calculate angular distance for Y (considering wrap-around)
      let distY = Math.abs(normalizedY - pageRotY);
      if (distY > 180) distY = 360 - distY;

      let distX = Math.abs(cubeRotX - pageRotX);

      // Weight based on which axis the face is on
      let distance;
      if (pageName === 'visual' || pageName === 'memory') {
        // Top/bottom faces - prioritize X rotation match
        distance = distX * 3 + distY;
      } else {
        // Horizontal faces - prioritize Y rotation match
        distance = distY * 2 + distX;
      }

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPage = pageName;
      }
    }

    // Update selected index and animate to that position
    selectedIndex = pageOrder.indexOf(closestPage);
    updateCubeRotation();
  }

  // Touch events with tap detection - registered as non-passive via $effect
  function onCubeTouchStart(e: TouchEvent) {
    if (e.touches.length === 1) {
      e.preventDefault(); // Prevent scrolling
      e.stopPropagation();
      touchStartTime = Date.now();
      touchMoved = false;
      handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onCubeTouchMove(e: TouchEvent) {
    if (e.touches.length === 1 && isDragging) {
      e.preventDefault(); // Prevent scrolling while dragging
      e.stopPropagation();
      const deltaX = Math.abs(e.touches[0].clientX - dragStartX);
      const deltaY = Math.abs(e.touches[0].clientY - dragStartY);
      // Mark as moved if exceeds threshold
      if (deltaX > TAP_MOVE_THRESHOLD || deltaY > TAP_MOVE_THRESHOLD) {
        touchMoved = true;
      }
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function onCubeTouchEnd(e: TouchEvent) {
    e.stopPropagation();
    const touchDuration = Date.now() - touchStartTime;
    const wasTap = !touchMoved && touchDuration < TAP_THRESHOLD_MS;

    handleDragEnd();

    // If it was a tap (not a drag), navigate to selected page
    if (wasTap && !isTransitioning) {
      navigate();
    }
  }

  // Register cube touch handlers as non-passive (so preventDefault works)
  $effect(() => {
    if (isOpen && cubeSceneElement) {
      cubeSceneElement.addEventListener('touchstart', onCubeTouchStart, { passive: false });
      cubeSceneElement.addEventListener('touchmove', onCubeTouchMove, { passive: false });
      cubeSceneElement.addEventListener('touchend', onCubeTouchEnd, { passive: false });

      return () => {
        cubeSceneElement.removeEventListener('touchstart', onCubeTouchStart);
        cubeSceneElement.removeEventListener('touchmove', onCubeTouchMove);
        cubeSceneElement.removeEventListener('touchend', onCubeTouchEnd);
      };
    }
  });

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

    // Resize - use lower resolution for better GPU performance
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5); // Cap at 1.5x for performance
    const resize = () => {
      if (!bgCanvas || !gl) return;
      // Render at slightly lower resolution for performance
      bgCanvas.width = Math.floor(window.innerWidth * pixelRatio * 0.75);
      bgCanvas.height = Math.floor(window.innerHeight * pixelRatio * 0.75);
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

  // Global swipe handlers for mobile page navigation (when cube is closed)
  function handleGlobalTouchStart(e: TouchEvent) {
    if (isOpen || isTransitioning) return;
    if (e.touches.length !== 1) return;

    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
    swipeStartTime = Date.now();
  }

  function handleGlobalTouchEnd(e: TouchEvent) {
    if (isOpen || isTransitioning) return;
    if (e.changedTouches.length !== 1) return;

    const deltaTime = Date.now() - swipeStartTime;
    if (deltaTime > SWIPE_TIME_LIMIT) return;

    const deltaX = e.changedTouches[0].clientX - swipeStartX;
    const deltaY = e.changedTouches[0].clientY - swipeStartY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Determine swipe direction (must exceed threshold)
    if (absX > SWIPE_THRESHOLD || absY > SWIPE_THRESHOLD) {
      if (absX > absY) {
        // Horizontal swipe
        if (deltaX > 0) {
          navigateWithTransition('left'); // Swipe right = go left
        } else {
          navigateWithTransition('right'); // Swipe left = go right
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          navigateWithTransition('up'); // Swipe down = go up
        } else {
          navigateWithTransition('down'); // Swipe up = go down
        }
      }
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('wheel', handleWheel, { passive: true });
    // Global swipe for mobile
    document.addEventListener('touchstart', handleGlobalTouchStart, { passive: true });
    document.addEventListener('touchend', handleGlobalTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleGlobalTouchStart);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
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

    <!-- Loading screen while iframes load -->
    {#if !iframesReady && !isTransitioning}
      <div class="cube-loading-screen">
        <div class="cube-loader">
          <div class="cube-loader-box"></div>
        </div>
        <div class="cube-loading-text mono">LOADING CUBE...</div>
      </div>
    {/if}

    <div class="cube-nav-container" class:loading={!iframesReady && !isTransitioning} onclick={(e) => e.stopPropagation()}>
      <div
        bind:this={cubeSceneElement}
        class="cube-scene"
        style="perspective: {1000 + cameraZ}px;"
        onmousedown={onMouseDown}
        role="slider"
        aria-label="Rotate cube to select page"
      >
        <div
          bind:this={cubeElement}
          class="cube"
          class:dragging={isDragging}
          style="transform: translateZ({-cameraZ * 0.5}px) rotateX({cubeRotX}deg) rotateY({cubeRotY}deg)"
        >
          {#each pageOrder as pageName, i}
            {@const pageData = pages[pageName]}
            {@const shouldLoad = loadedIframes.has(i)}
            {@const iframeSrc = getRoute(pageName)}
            <button
              class="cube-face"
              class:selected={i === selectedIndex}
              class:loading={!shouldLoad}
              style="--face-color: {pageData.color}; transform: {getFaceTransform(pageName)};"
              onclick={() => { selectedIndex = i; updateCubeRotation(); }}
              ondblclick={navigate}
            >
              <!-- Progressive iframe loading for GPU performance -->
              <div class="face-preview">
                {#if shouldLoad}
                  <iframe
                    src={iframeSrc}
                    title={pageData.label}
                    loading="eager"
                    scrolling="no"
                  ></iframe>
                {:else}
                  <div class="face-placeholder">
                    <div class="loading-spinner"></div>
                  </div>
                {/if}
              </div>
              <div class="face-label">{pageData.label}</div>
            </button>
          {/each}
        </div>
      </div>

      {#if !isTransitioning}
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
      {/if}
    </div>

    <!-- Phase indicator during transition -->
    {#if isTransitioning}
      <div class="phase-indicator mono">
        {#if transitionPhase === 'zoom-out'}
          EXITING...
        {:else if transitionPhase === 'isometric'}
          NAVIGATING...
        {:else if transitionPhase === 'rotate'}
          ROTATING...
        {:else if transitionPhase === 'zoom-in'}
          ENTERING...
        {/if}
      </div>
    {/if}
  </div>
{/if}

<!-- Cube view button for mobile -->
<button class="cube-open-btn" onclick={open} aria-label="Open cube navigation">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <!-- 3D Cube icon -->
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
    <path d="M12 22V12"/>
    <path d="M21 7l-9 5"/>
    <path d="M3 7l9 5"/>
  </svg>
</button>

<!-- Desktop hint -->
<div class="cube-hint cube-hint-desktop mono">
  <span class="key">←→↑↓</span> or <span class="key">Scroll</span> Navigate
  <span class="separator">·</span>
  <span class="key">C</span> Cube view
</div>

<!-- Mobile hint -->
<div class="cube-hint cube-hint-mobile mono">
  <span class="key">⬅ ➡ ⬆ ⬇</span> Swipe to navigate
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
    // GPU acceleration for smoother overlay
    will-change: opacity;
    transform: translateZ(0);
    contain: layout paint;
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
    transition: opacity 0.3s ease;

    &.loading {
      opacity: 0.3;
      pointer-events: none;
    }
  }

  // Cube loading screen
  .cube-loading-screen {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 10;
  }

  .cube-loader {
    perspective: 120px;
  }

  .cube-loader-box {
    width: 50px;
    height: 50px;
    border: 3px solid #00ff41;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
    animation: cubeRotate 1.5s infinite ease-in-out;
  }

  @keyframes cubeRotate {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    50% { transform: rotateX(180deg) rotateY(0deg); }
    100% { transform: rotateX(180deg) rotateY(180deg); }
  }

  .cube-loading-text {
    color: #00ff41;
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-shadow: 0 0 10px #00ff41;
    animation: phasePulse 0.5s ease-in-out infinite alternate;
  }

  .cube-scene {
    width: 350px;
    height: 350px;
    perspective-origin: center center;
    cursor: grab;
    touch-action: none; // Disable browser touch handling - we handle it
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none; // Prevent iOS callout
    // GPU acceleration
    will-change: perspective;
    contain: layout style;
    transform: translateZ(0); // Force GPU layer

    &:active {
      cursor: grabbing;
    }
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    // GPU acceleration - force composite layer
    will-change: transform;
    transform: translateZ(0); // Force GPU layer

    &.dragging {
      transition: none;
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
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    // GPU acceleration - each face gets its own layer
    will-change: transform, box-shadow;
    transform-style: preserve-3d;
    backface-visibility: visible;
    // Containment for better rendering
    contain: layout paint;

    &:hover, &.selected {
      box-shadow:
        0 0 40px color-mix(in srgb, var(--face-color) 40%, transparent),
        inset 0 0 30px color-mix(in srgb, var(--face-color) 10%, transparent);
    }

    &.selected {
      border-width: 3px;
    }

    &.loading {
      .face-preview {
        opacity: 0.7;
      }
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

  // Cube open button - 3D cube icon
  .cube-open-btn {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: rgba(0, 20, 10, 0.9);
    border: 2px solid rgba(0, 255, 65, 0.5);
    color: #00ff41;
    cursor: pointer;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.25);

    &:hover, &:active {
      background: rgba(0, 255, 65, 0.15);
      border-color: #00ff41;
      box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
      transform: scale(1.1);
    }

    svg {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 768px) {
      width: 56px;
      height: 56px;
      bottom: 1rem;
      left: 1rem;

      svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  .cube-hint {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: rgba(255, 255, 255, 0.35);
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

  // Desktop hint - hide on mobile
  .cube-hint-desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }

  // Mobile hint - show only on mobile
  .cube-hint-mobile {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      bottom: 1rem;
      right: 1rem;
    }
  }

  // Transitioning mode - adjust cursor
  .cube-nav-overlay.transitioning {
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

  // Page preview with iframe - GPU optimized
  .face-preview {
    width: 260px;
    height: 180px;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    background: #000;
    border: 1px solid color-mix(in srgb, var(--face-color) 30%, transparent);
    // GPU acceleration
    will-change: opacity;
    contain: strict;
    transform: translateZ(0); // Force GPU layer

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
      // GPU optimizations for iframe
      will-change: transform;
      backface-visibility: hidden;
    }
  }

  // Loading placeholder while iframes load progressively
  .face-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(0, 20, 10, 0.8), rgba(0, 10, 5, 0.9));
  }

  .loading-spinner {
    width: 32px;
    height: 32px;
    border: 3px solid color-mix(in srgb, var(--face-color) 20%, transparent);
    border-top-color: var(--face-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    will-change: transform;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  // Phase indicator during transition
  .phase-indicator {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    color: #00ff41;
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-shadow: 0 0 15px #00ff41;
    animation: phasePulse 0.5s ease-in-out infinite alternate;
  }

  @keyframes phasePulse {
    from { opacity: 0.6; }
    to { opacity: 1; }
  }
</style>
