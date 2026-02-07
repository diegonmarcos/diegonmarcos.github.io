<template>
  <Teleport to="body">
    <div
      class="c-cube-overlay"
      :class="{ 'c-cube-overlay--active': isActive }"
      @wheel.prevent="handleWheel"
      @mousedown="startDrag"
      @touchstart.prevent="startDrag"
    >
      <div class="c-cube-scene">
        <div
          class="c-cube"
          :class="{ 'c-cube--animating': isAnimating }"
          :style="cubeStyle"
        >
          <!-- Front: Observer Effect -->
          <div class="c-cube__face c-cube__face--front" @click="handleFaceClick(0, $event)" @touchend="handleFaceTap(0, $event)">
            <iframe
              v-if="isActive && shouldLoadFace(0)"
              :src="pages.front"
              class="c-cube__iframe"
              title="Observer Effect"
              loading="eager"
              allow="accelerometer; autoplay"
            ></iframe>
          </div>

          <!-- Right: Neon Cube -->
          <div class="c-cube__face c-cube__face--right" @click="handleFaceClick(1, $event)" @touchend="handleFaceTap(1, $event)">
            <iframe
              v-if="isActive && shouldLoadFace(1)"
              :src="pages.right"
              class="c-cube__iframe"
              title="Neon Cube"
              loading="eager"
              allow="accelerometer; autoplay"
            ></iframe>
          </div>

          <!-- Back: Perspectives -->
          <div class="c-cube__face c-cube__face--back" @click="handleFaceClick(2, $event)" @touchend="handleFaceTap(2, $event)">
            <iframe
              v-if="isActive && shouldLoadFace(2)"
              :src="pages.back"
              class="c-cube__iframe"
              title="Perspectives"
              loading="eager"
              allow="accelerometer; autoplay"
            ></iframe>
          </div>

          <!-- Left: Placeholder for future -->
          <div class="c-cube__face c-cube__face--left" @click="handleFaceClick(3, $event)" @touchend="handleFaceTap(3, $event)">
            <div class="c-cube__placeholder c-cube__placeholder--gradient-1">
              <h2>Coming Soon</h2>
              <p>Future content</p>
            </div>
          </div>

          <!-- Top -->
          <div class="c-cube__face c-cube__face--top" @click="handleFaceClick(4, $event)" @touchend="handleFaceTap(4, $event)">
            <div class="c-cube__placeholder c-cube__placeholder--gradient-2">
              <h2>Projects</h2>
              <p>View from above</p>
            </div>
          </div>

          <!-- Bottom -->
          <div class="c-cube__face c-cube__face--bottom" @click="handleFaceClick(5, $event)" @touchend="handleFaceTap(5, $event)">
            <div class="c-cube__placeholder c-cube__placeholder--gradient-3">
              <h2>Contact</h2>
              <p>Get in touch</p>
            </div>
          </div>
        </div>
      </div>

      <!-- View mode indicator -->
      <div class="c-cube-view-mode" v-if="isActive">
        {{ isIsometric ? 'Isometric View' : `${faceNames[currentFace]} Face` }}
      </div>

      <!-- Face indicator -->
      <div class="c-cube-indicator" v-if="isActive">
        <div
          v-for="(face, index) in faceNames"
          :key="face"
          class="c-cube-indicator__dot"
          :class="{ 'c-cube-indicator__dot--active': currentFace === index }"
          @click="navigateToFace(index)"
        >
          {{ face }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onUnmounted, watch } from 'vue';

interface Props {
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  active: false
});

const emit = defineEmits<{
  close: [];
  navigate: [url: string];
}>();

// Isometric starting angle (shows front, top, right faces)
const ISOMETRIC_X = -30;
const ISOMETRIC_Y = -45;

const isActive = ref(props.active);
const rotateX = ref(ISOMETRIC_X);
const rotateY = ref(ISOMETRIC_Y);
const scale = ref(1);
const isDragging = ref(false);
const lastMouse = ref({ x: 0, y: 0 });
const currentFace = ref(0);
const isIsometric = ref(true);
const isAnimating = ref(false);
const isPinching = ref(false);
const lastPinchDistance = ref(0);

// Reactive window size for dynamic cube Z-translate
const winW = ref(window.innerWidth);
const winH = ref(window.innerHeight);
const onResize = () => { winW.value = window.innerWidth; winH.value = window.innerHeight; };
const cubeHalf = computed(() => Math.min(winW.value * 0.7, winH.value * 0.7) / 2);

// Momentum/velocity tracking
const velocityX = ref(0);
const velocityY = ref(0);
let momentumFrame: number | null = null;

const faceNames = ['Front', 'Right', 'Back', 'Left', 'Top', 'Bottom'];

// URL mapping for each face (null = no page / close cube instead)
const faceUrls: (string | null)[] = [
  null,                     // Front - same as main app, just close cube
  'cube_fractal_neon.html', // Right - neon cube
  'perspectives.html',      // Back - perspectives
  null,                     // Left - coming soon
  null,                     // Top - projects (coming soon)
  null                      // Bottom - contact (coming soon)
];

const pages = {
  front: 'observer_effect.html',
  right: 'cube_fractal_neon.html',
  back: 'perspectives.html'
};

// Track if click was a drag (to prevent navigation on drag)
let clickStartTime = 0;
let clickStartPos = { x: 0, y: 0 };
// Flag to prevent double navigation (touchend on face + stopDrag)
let faceTapHandled = false;

// Navigate to a face's page, or close cube if no URL
const navigateToFacePage = (faceIndex: number) => {
  try {
    const url = faceUrls[faceIndex];
    console.log('[CubeView] Navigate face:', faceNames[faceIndex], '| URL:', url || 'close');
    if (url) {
      window.location.href = url;
    } else {
      emit('close');
    }
  } catch (err) {
    console.error('[CubeView] Error navigating:', err);
  }
};

// Handle exit button - close cube view
const handleExitClick = () => {
  try {
    console.log('[CubeView] Exit clicked — closing cube view');
    emit('close');
  } catch (err) {
    console.error('[CubeView] Error in handleExitClick:', err);
  }
};

// Check if an event was a tap (not a drag)
const isTap = (clientX: number, clientY: number): boolean => {
  const clickDuration = Date.now() - clickStartTime;
  const clickDistance = Math.sqrt(
    Math.pow(clientX - clickStartPos.x, 2) +
    Math.pow(clientY - clickStartPos.y, 2)
  );
  return clickDistance <= 20 && clickDuration <= 500;
};

// Handle mouse click on a cube face (desktop)
const handleFaceClick = (faceIndex: number, event: MouseEvent) => {
  try {
    if (isAnimating.value) return;
    if (!isTap(event.clientX, event.clientY)) return;
    console.log('[CubeView] Face clicked (mouse):', faceNames[faceIndex]);
    navigateToFacePage(faceIndex);
  } catch (err) {
    console.error('[CubeView] Error in handleFaceClick:', err);
  }
};

// Handle touch tap on a cube face (mobile) — fires directly on the face element
// This bypasses the unreliable elementFromPoint approach in stopDrag
const handleFaceTap = (faceIndex: number, event: TouchEvent) => {
  try {
    if (isAnimating.value || isPinching.value) return;
    const touch = event.changedTouches[0];
    if (!isTap(touch.clientX, touch.clientY)) return;
    console.log('[CubeView] Face tapped (touch):', faceNames[faceIndex]);
    faceTapHandled = true;
    navigateToFacePage(faceIndex);
  } catch (err) {
    console.error('[CubeView] Error in handleFaceTap:', err);
  }
};

// Track which faces have been visited (lazy load iframes)
// Using shallowRef since we manually trigger updates
// Load front, right, back faces initially (they have content)
const visitedFaces = shallowRef<Set<number>>(new Set([0, 1, 2]));

// Check if a face should load its iframe
const shouldLoadFace = (faceIndex: number) => {
  return visitedFaces.value.has(faceIndex);
};

// Mark adjacent faces as visited when rotating
const markAdjacentFacesVisited = () => {
  const adjacent: Record<number, number[]> = {
    0: [1, 3, 4, 5], // Front -> Right, Left, Top, Bottom
    1: [0, 2, 4, 5], // Right -> Front, Back, Top, Bottom
    2: [1, 3, 4, 5], // Back -> Right, Left, Top, Bottom
    3: [0, 2, 4, 5], // Left -> Front, Back, Top, Bottom
    4: [0, 1, 2, 3], // Top -> all sides
    5: [0, 1, 2, 3], // Bottom -> all sides
  };
  const newSet = new Set(visitedFaces.value);
  newSet.add(currentFace.value);
  adjacent[currentFace.value]?.forEach(f => newSet.add(f));
  if (newSet.size !== visitedFaces.value.size) {
    visitedFaces.value = newSet; // Trigger reactivity only when changed
  }
};

// Face rotation presets (flat 2D view)
const faceRotations = [
  { x: 0, y: 0 },      // Front
  { x: 0, y: -90 },    // Right
  { x: 0, y: 180 },    // Back
  { x: 0, y: 90 },     // Left
  { x: 90, y: 0 },     // Top
  { x: -90, y: 0 }     // Bottom
];

// Isometric views for each face (shows the face + adjacent faces)
const isometricRotations = [
  { x: -30, y: -45 },   // Front isometric (front, top, right visible)
  { x: -30, y: -135 },  // Right isometric (right, top, back visible)
  { x: -30, y: 135 },   // Back isometric (back, top, left visible)
  { x: -30, y: 45 },    // Left isometric (left, top, front visible)
  { x: -60, y: -45 },   // Top isometric (top, front, right visible)
  { x: 60, y: -45 }     // Bottom isometric (bottom, front, right visible)
];

watch(() => props.active, (newVal) => {
  console.log('[CubeView] Active prop changed to:', newVal);
  isActive.value = newVal;
  if (newVal) {
    document.body.style.overflow = 'hidden';
    // Reset to isometric view when opening
    rotateX.value = ISOMETRIC_X;
    rotateY.value = ISOMETRIC_Y;
    scale.value = 1;
    isIsometric.value = true;
    currentFace.value = 0;
  } else {
    document.body.style.overflow = '';
  }
});

// GPU-optimized transform using translate3d and scale3d
// Z-translate matches cube half-size so it stays centered at any viewport
const cubeStyle = computed(() => ({
  transform: `translate3d(0, 0, ${-cubeHalf.value}px) scale3d(${scale.value}, ${scale.value}, ${scale.value}) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
}));

// Animate to target rotation
const animateTo = (targetX: number, targetY: number, duration: number = 400): Promise<void> => {
  return new Promise((resolve) => {
    isAnimating.value = true;
    const startX = rotateX.value;
    const startY = rotateY.value;
    const startTime = performance.now();

    // Normalize Y rotation to shortest path
    let deltaY = targetY - startY;
    if (deltaY > 180) deltaY -= 360;
    if (deltaY < -180) deltaY += 360;
    const adjustedTargetY = startY + deltaY;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      rotateX.value = startX + (targetX - startX) * eased;
      rotateY.value = startY + (adjustedTargetY - startY) * eased;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        rotateX.value = targetX;
        rotateY.value = targetY;
        isAnimating.value = false;
        resolve();
      }
    };

    requestAnimationFrame(animate);
  });
};

// Two-step navigation: isometric first, then flat
const navigateToFace = async (index: number) => {
  if (isAnimating.value) return;

  currentFace.value = index;

  if (isIsometric.value) {
    // Currently isometric - go to flat view of this face
    await animateTo(faceRotations[index].x, faceRotations[index].y);
    isIsometric.value = false;
  } else {
    // Currently flat - go to isometric view of this face first
    await animateTo(isometricRotations[index].x, isometricRotations[index].y);
    isIsometric.value = true;
  }
};

// Toggle between isometric and flat view of current face
const toggleViewMode = async () => {
  if (isAnimating.value) return;

  if (isIsometric.value) {
    await animateTo(faceRotations[currentFace.value].x, faceRotations[currentFace.value].y);
    isIsometric.value = false;
  } else {
    await animateTo(isometricRotations[currentFace.value].x, isometricRotations[currentFace.value].y);
    isIsometric.value = true;
  }
};

// Calculate distance between two touch points
const getTouchDistance = (touches: TouchList): number => {
  if (touches.length < 2) return 0;
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

const startDrag = (e: MouseEvent | TouchEvent) => {
  if (isAnimating.value) return;

  // Track click start for face click detection
  clickStartTime = Date.now();
  const startPoint = 'touches' in e ? e.touches[0] : e;
  clickStartPos = { x: startPoint.clientX, y: startPoint.clientY };
  faceTapHandled = false;

  // Stop any ongoing momentum
  if (momentumFrame) {
    cancelAnimationFrame(momentumFrame);
    momentumFrame = null;
  }
  velocityX.value = 0;
  velocityY.value = 0;

  if ('touches' in e && e.touches.length === 2) {
    // Start pinch zoom
    isPinching.value = true;
    lastPinchDistance.value = getTouchDistance(e.touches);
    return;
  }

  isDragging.value = true;
  lastMouse.value = { x: startPoint.clientX, y: startPoint.clientY };
};

const handleDrag = (e: MouseEvent | TouchEvent) => {
  if (!isActive.value || isAnimating.value) return;

  // Handle pinch zoom (scale)
  if ('touches' in e && e.touches.length === 2) {
    e.preventDefault();
    const currentDistance = getTouchDistance(e.touches);
    if (lastPinchDistance.value > 0) {
      const scaleDelta = currentDistance / lastPinchDistance.value;
      scale.value = Math.max(0.3, Math.min(2, scale.value * scaleDelta));
    }
    lastPinchDistance.value = currentDistance;
    return;
  }

  if (!isDragging.value) return;

  const point = 'touches' in e ? e.touches[0] : e;
  const deltaX = point.clientX - lastMouse.value.x;
  const deltaY = point.clientY - lastMouse.value.y;

  // Track velocity for momentum
  velocityY.value = deltaX * 0.4;
  velocityX.value = -deltaY * 0.4;

  rotateY.value += velocityY.value;
  rotateX.value += velocityX.value;

  lastMouse.value = { x: point.clientX, y: point.clientY };

  // Update current face and isometric state based on rotation
  updateCurrentFace();
};

const applyMomentum = () => {
  if (Math.abs(velocityX.value) < 0.1 && Math.abs(velocityY.value) < 0.1) {
    momentumFrame = null;
    return;
  }

  // Apply friction
  velocityX.value *= 0.95;
  velocityY.value *= 0.95;

  rotateY.value += velocityY.value;
  rotateX.value += velocityX.value;

  updateCurrentFace();
  momentumFrame = requestAnimationFrame(applyMomentum);
};

const stopDrag = (e: MouseEvent | TouchEvent) => {
  try {
    // Fallback tap detection: if face-level handlers didn't fire (3D hit testing
    // failure on some mobile browsers), detect tap here and navigate to currentFace.
    if (!faceTapHandled && !isAnimating.value && !isPinching.value) {
      const endPoint = 'changedTouches' in e ? e.changedTouches[0] : e;
      if (isTap(endPoint.clientX, endPoint.clientY)) {
        // Check if tap was inside the cube scene area (not just the background)
        const cubeScene = document.querySelector('.c-cube-scene');
        if (cubeScene) {
          const rect = cubeScene.getBoundingClientRect();
          if (endPoint.clientX >= rect.left && endPoint.clientX <= rect.right &&
              endPoint.clientY >= rect.top && endPoint.clientY <= rect.bottom) {
            console.log('[CubeView] stopDrag fallback tap — navigating to currentFace:', faceNames[currentFace.value]);
            navigateToFacePage(currentFace.value);
          }
        }
      }
    }

    if (isDragging.value && (Math.abs(velocityX.value) > 0.5 || Math.abs(velocityY.value) > 0.5)) {
      // Start momentum animation
      momentumFrame = requestAnimationFrame(applyMomentum);
    }
  } catch (err) {
    console.error('[CubeView] Error in stopDrag:', err);
  }

  isDragging.value = false;
  isPinching.value = false;
  lastPinchDistance.value = 0;
  faceTapHandled = false;
};

const handleWheel = (e: WheelEvent) => {
  if (!isActive.value) return;
  e.preventDefault();

  // Scale with mouse wheel
  const delta = e.deltaY > 0 ? 0.95 : 1.05;
  scale.value = Math.max(0.3, Math.min(2, scale.value * delta));
};

const updateCurrentFace = () => {
  // Normalize Y rotation to 0-360
  let normalizedY = ((rotateY.value % 360) + 360) % 360;

  const prevFace = currentFace.value;

  // Determine face based on rotation
  if (Math.abs(rotateX.value) > 60) {
    currentFace.value = rotateX.value > 0 ? 4 : 5; // Top or Bottom
  } else if (normalizedY >= 315 || normalizedY < 45) {
    currentFace.value = 0; // Front
  } else if (normalizedY >= 45 && normalizedY < 135) {
    currentFace.value = 3; // Left
  } else if (normalizedY >= 135 && normalizedY < 225) {
    currentFace.value = 2; // Back
  } else {
    currentFace.value = 1; // Right
  }

  // Emit current face URL to parent so the toggle button can navigate
  if (currentFace.value !== prevFace) {
    const url = faceUrls[currentFace.value];
    if (url) {
      emit('navigate', url);
    } else {
      emit('navigate', '');
    }
  }

  // Check if we're in an isometric-like angle
  const xIsAngled = Math.abs(rotateX.value) > 15 && Math.abs(rotateX.value) < 75;
  const yIsAngled = (normalizedY % 90) > 15 && (normalizedY % 90) < 75;
  isIsometric.value = xIsAngled || yIsAngled;

  // Lazy load adjacent faces
  markAdjacentFacesVisited();
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isActive.value) return;

  // Stop propagation so App.vue Q handler doesn't also fire
  e.stopImmediatePropagation();

  // Escape - close cube view
  if (e.key === 'Escape') {
    e.preventDefault();
    console.log('[CubeView] Escape pressed — closing');
    handleExitClick();
    return;
  }

  // Q - open current face page (navigate) or close if no URL
  if (e.key.toLowerCase() === 'q') {
    e.preventDefault();
    console.log('[CubeView] Q pressed — face:', faceNames[currentFace.value]);
    navigateToFacePage(currentFace.value);
    return;
  }

  // Toggle view mode on Space
  if (e.key === ' ') {
    e.preventDefault();
    toggleViewMode();
    return;
  }

  // Arrow key navigation - navigate to adjacent faces
  if (isAnimating.value) return;

  switch (e.key) {
    case 'ArrowRight':
      if (currentFace.value < 4) {
        navigateToFace((currentFace.value + 1) % 4);
      }
      break;
    case 'ArrowLeft':
      if (currentFace.value < 4) {
        navigateToFace((currentFace.value + 3) % 4);
      }
      break;
    case 'ArrowUp':
      navigateToFace(4); // Top
      break;
    case 'ArrowDown':
      navigateToFace(5); // Bottom
      break;
  }
};

onMounted(() => {
  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchmove', handleDrag);
  window.addEventListener('touchend', stopDrag);
  // Use capture phase so CubeView keydown fires BEFORE App.vue's handler
  window.addEventListener('keydown', handleKeydown, true);
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', handleDrag);
  window.removeEventListener('touchend', stopDrag);
  window.removeEventListener('keydown', handleKeydown, true);
  window.removeEventListener('resize', onResize);
  document.body.style.overflow = '';
  if (momentumFrame) {
    cancelAnimationFrame(momentumFrame);
  }
});
</script>
