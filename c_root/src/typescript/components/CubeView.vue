<template>
  <Teleport to="body">
    <div
      class="c-cube-overlay"
      :class="{ 'c-cube-overlay--active': isActive }"
      @wheel="handleWheel"
    >
      <div class="c-cube-scene">
        <div
          class="c-cube"
          :class="{ 'c-cube--animating': isAnimating }"
          :style="cubeStyle"
          @mousedown="startDrag"
          @touchstart.passive="startDrag"
        >
          <!-- Front: Main App (live render via iframe) -->
          <div class="c-cube__face c-cube__face--front">
            <iframe
              v-if="isActive"
              src="index.html"
              class="c-cube__iframe"
              title="Current View"
            ></iframe>
          </div>

          <!-- Right: Neon Cube -->
          <div class="c-cube__face c-cube__face--right">
            <iframe
              v-if="isActive"
              :src="pages.right"
              class="c-cube__iframe"
              title="Neon Cube"
            ></iframe>
          </div>

          <!-- Back: Perspectives -->
          <div class="c-cube__face c-cube__face--back">
            <iframe
              v-if="isActive"
              :src="pages.back"
              class="c-cube__iframe"
              title="Perspectives"
            ></iframe>
          </div>

          <!-- Left: Placeholder for future -->
          <div class="c-cube__face c-cube__face--left">
            <div class="c-cube__placeholder c-cube__placeholder--gradient-1">
              <h2>Coming Soon</h2>
              <p>Future content</p>
            </div>
          </div>

          <!-- Top -->
          <div class="c-cube__face c-cube__face--top">
            <div class="c-cube__placeholder c-cube__placeholder--gradient-2">
              <h2>Projects</h2>
              <p>View from above</p>
            </div>
          </div>

          <!-- Bottom -->
          <div class="c-cube__face c-cube__face--bottom">
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

      <!-- Controls hint -->
      <div class="c-cube-hint" v-if="isActive">
        <span>Drag to rotate</span>
        <span class="c-cube-hint__separator">|</span>
        <span>Scroll to zoom</span>
        <span class="c-cube-hint__separator">|</span>
        <span><kbd>Space</kbd> toggle view</span>
        <span class="c-cube-hint__separator">|</span>
        <span><kbd>`</kbd> or <kbd>Esc</kbd> close</span>
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

interface Props {
  active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  active: false
});

const emit = defineEmits<{
  close: [];
}>();

// Isometric starting angle (shows front, top, right faces)
const ISOMETRIC_X = -30;
const ISOMETRIC_Y = -45;

const isActive = ref(props.active);
const rotateX = ref(ISOMETRIC_X);
const rotateY = ref(ISOMETRIC_Y);
const perspective = ref(1600); // Zoomed out for better view
const isDragging = ref(false);
const lastMouse = ref({ x: 0, y: 0 });
const currentFace = ref(0);
const isIsometric = ref(true);
const isAnimating = ref(false);

const faceNames = ['Front', 'Right', 'Back', 'Left', 'Top', 'Bottom'];

const pages = {
  right: 'cube_fractal_neon.html',
  back: 'perspectives.html'
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
  isActive.value = newVal;
  if (newVal) {
    document.body.style.overflow = 'hidden';
    // Reset to isometric view when opening
    rotateX.value = ISOMETRIC_X;
    rotateY.value = ISOMETRIC_Y;
    isIsometric.value = true;
    currentFace.value = 0;
  } else {
    document.body.style.overflow = '';
  }
});

const cubeStyle = computed(() => ({
  transform: `
    perspective(${perspective.value}px)
    translateZ(-300px)
    rotateX(${rotateX.value}deg)
    rotateY(${rotateY.value}deg)
  `
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

const startDrag = (e: MouseEvent | TouchEvent) => {
  if (isAnimating.value) return;
  isDragging.value = true;
  const point = 'touches' in e ? e.touches[0] : e;
  lastMouse.value = { x: point.clientX, y: point.clientY };
};

const handleDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !isActive.value || isAnimating.value) return;

  const point = 'touches' in e ? e.touches[0] : e;
  const deltaX = point.clientX - lastMouse.value.x;
  const deltaY = point.clientY - lastMouse.value.y;

  rotateY.value += deltaX * 0.5;
  rotateX.value -= deltaY * 0.5;

  // Clamp X rotation
  rotateX.value = Math.max(-90, Math.min(90, rotateX.value));

  lastMouse.value = { x: point.clientX, y: point.clientY };

  // Update current face and isometric state based on rotation
  updateCurrentFace();
};

const stopDrag = () => {
  isDragging.value = false;
};

const handleWheel = (e: WheelEvent) => {
  if (!isActive.value) return;
  e.preventDefault();

  perspective.value = Math.max(600, Math.min(2000, perspective.value + e.deltaY));
};

const updateCurrentFace = () => {
  // Normalize Y rotation to 0-360
  let normalizedY = ((rotateY.value % 360) + 360) % 360;

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

  // Check if we're in an isometric-like angle
  const xIsAngled = Math.abs(rotateX.value) > 15 && Math.abs(rotateX.value) < 75;
  const yIsAngled = (normalizedY % 90) > 15 && (normalizedY % 90) < 75;
  isIsometric.value = xIsAngled || yIsAngled;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!isActive.value) return;

  // Close on backtick or Escape
  if (e.key === '`' || e.key === 'Escape') {
    e.preventDefault();
    emit('close');
    return;
  }

  // Toggle view mode on Space
  if (e.key === ' ') {
    e.preventDefault();
    toggleViewMode();
    return;
  }

  // Arrow key navigation - navigate to adjacent faces
  // Front(0) -> Right(1) -> Back(2) -> Left(3) -> Front(0)
  if (isAnimating.value) return;

  switch (e.key) {
    case 'ArrowRight':
      // Go to next face clockwise (Front -> Right -> Back -> Left)
      if (currentFace.value < 4) {
        navigateToFace((currentFace.value + 1) % 4);
      }
      break;
    case 'ArrowLeft':
      // Go to previous face counter-clockwise
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
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleDrag);
  window.removeEventListener('mouseup', stopDrag);
  window.removeEventListener('touchmove', handleDrag);
  window.removeEventListener('touchend', stopDrag);
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>
