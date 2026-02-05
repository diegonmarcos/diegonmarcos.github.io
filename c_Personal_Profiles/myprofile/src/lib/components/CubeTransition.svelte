<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let {
    isActive = false,
    fromPage = 'profile',
    toPage = 'stats',
    onComplete
  }: {
    isActive?: boolean;
    fromPage?: string;
    toPage?: string;
    onComplete?: () => void;
  } = $props();

  // Pages mapped to cube faces (7 pages - using cube + top/bottom for variety)
  const pageToFace: Record<string, { rotX: number; rotY: number }> = {
    profile: { rotX: 0, rotY: 0 },
    audio: { rotX: 0, rotY: -90 },
    bio: { rotX: 0, rotY: -180 },
    geo: { rotX: 0, rotY: -270 },
    visual: { rotX: -90, rotY: 0 },
    memory: { rotX: 90, rotY: 0 },
    syslog: { rotX: 0, rotY: -360 }
  };

  // Animation states
  let phase = $state<'idle' | 'zoom-out' | 'isometric' | 'rotate' | 'zoom-in' | 'done'>('idle');
  let cubeRotX = $state(0);
  let cubeRotY = $state(0);
  let cameraZ = $state(0);
  let isometricRotX = $state(-35);
  let isometricRotY = $state(45);

  $effect(() => {
    if (isActive && phase === 'idle') {
      startTransition();
    }
  });

  async function startTransition() {
    const from = pageToFace[fromPage] || pageToFace.profile;
    const to = pageToFace[toPage] || pageToFace.stats;

    // Set initial rotation to current page
    cubeRotX = from.rotX;
    cubeRotY = from.rotY;
    cameraZ = 0;

    // Phase 1: Zoom out
    phase = 'zoom-out';
    await animateValue((v) => cameraZ = v, 0, 800, 600);

    // Phase 2: Move to isometric view
    phase = 'isometric';
    await Promise.all([
      animateValue((v) => cubeRotX = v, from.rotX, isometricRotX, 500),
      animateValue((v) => cubeRotY = v, from.rotY, from.rotY + isometricRotY, 500)
    ]);

    // Phase 3: Rotate to target face
    phase = 'rotate';
    await Promise.all([
      animateValue((v) => cubeRotX = v, isometricRotX, to.rotX + isometricRotX, 700),
      animateValue((v) => cubeRotY = v, from.rotY + isometricRotY, to.rotY + isometricRotY, 700)
    ]);

    // Phase 4: Zoom in to target
    phase = 'zoom-in';
    await Promise.all([
      animateValue((v) => cubeRotX = v, to.rotX + isometricRotX, to.rotX, 500),
      animateValue((v) => cubeRotY = v, to.rotY + isometricRotY, to.rotY, 500),
      animateValue((v) => cameraZ = v, 800, 0, 600)
    ]);

    phase = 'done';
    onComplete?.();
  }

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
</script>

{#if isActive}
  <div class="cube-transition-overlay">
    <div class="cube-scene" style="perspective: {2000 + cameraZ}px;">
      <div
        class="cube"
        style="transform: translateZ({-cameraZ}px) rotateX({cubeRotX}deg) rotateY({cubeRotY}deg)"
      >
        <!-- Front: Profile -->
        <div class="cube-face front" style="--face-color: #00ff41">
          <div class="face-label">PROFILE</div>
          <div class="face-preview profile-preview">
            <div class="avatar-placeholder"></div>
            <div class="text-placeholder"></div>
          </div>
        </div>

        <!-- Right: Audio -->
        <div class="cube-face right" style="--face-color: #00f3ff">
          <div class="face-label">AUDIO</div>
          <div class="face-preview audio-preview">
            <div class="wave-line"></div>
            <div class="wave-line"></div>
            <div class="wave-line"></div>
          </div>
        </div>

        <!-- Back: Bio -->
        <div class="cube-face back" style="--face-color: #ff9100">
          <div class="face-label">BIO</div>
          <div class="face-preview bio-preview">
            <div class="heartbeat-line"></div>
            <div class="pulse-dot"></div>
          </div>
        </div>

        <!-- Left: Geo -->
        <div class="cube-face left" style="--face-color: #00ff9d">
          <div class="face-label">GEO</div>
          <div class="face-preview geo-preview">
            <div class="globe-ring"></div>
            <div class="globe-ring inner"></div>
            <div class="location-dot"></div>
          </div>
        </div>

        <!-- Top: Visual -->
        <div class="cube-face top" style="--face-color: #ff0055">
          <div class="face-label">VISUAL</div>
          <div class="face-preview visual-preview">
            <div class="play-triangle"></div>
          </div>
        </div>

        <!-- Bottom: Memory -->
        <div class="cube-face bottom" style="--face-color: #bc13fe">
          <div class="face-label">MEMORY</div>
          <div class="face-preview memory-preview">
            <div class="polaroid-frame"></div>
            <div class="polaroid-frame offset"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase indicator -->
    <div class="phase-indicator mono">
      {#if phase === 'zoom-out'}
        EXITING...
      {:else if phase === 'isometric'}
        NAVIGATING...
      {:else if phase === 'rotate'}
        ROTATING...
      {:else if phase === 'zoom-in'}
        ENTERING...
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .cube-transition-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube-scene {
    width: 400px;
    height: 400px;
    perspective-origin: center center;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }

  .cube-face {
    --face-color: #{$terminal-green};
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, rgba(0, 10, 5, 0.95), rgba(0, 20, 10, 0.9));
    border: 2px solid var(--face-color);
    box-shadow:
      0 0 30px color-mix(in srgb, var(--face-color) 30%, transparent),
      inset 0 0 60px color-mix(in srgb, var(--face-color) 10%, transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
  }

  .front  { transform: translateZ(200px); }
  .back   { transform: rotateY(180deg) translateZ(200px); }
  .right  { transform: rotateY(90deg) translateZ(200px); }
  .left   { transform: rotateY(-90deg) translateZ(200px); }
  .top    { transform: rotateX(90deg) translateZ(200px); }
  .bottom { transform: rotateX(-90deg) translateZ(200px); }

  .face-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    color: var(--face-color);
    letter-spacing: 0.3em;
    text-shadow: 0 0 20px var(--face-color);
    margin-bottom: 2rem;
  }

  .face-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    opacity: 0.6;
  }

  .profile-preview {
    .avatar-placeholder {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid var(--face-color);
      background: color-mix(in srgb, var(--face-color) 10%, transparent);
    }
    .text-placeholder {
      width: 120px;
      height: 12px;
      background: color-mix(in srgb, var(--face-color) 30%, transparent);
      border-radius: 2px;
    }
  }

  .audio-preview {
    width: 150px;
    .wave-line {
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, transparent, var(--face-color), transparent);
      border-radius: 2px;
      animation: wave-pulse 1.5s ease-in-out infinite;
      &:nth-child(2) { animation-delay: 0.2s; height: 8px; }
      &:nth-child(3) { animation-delay: 0.4s; }
    }
  }

  .bio-preview {
    position: relative;
    width: 150px;
    height: 60px;
    .heartbeat-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--face-color);
      clip-path: polygon(0% 50%, 20% 50%, 25% 20%, 30% 80%, 35% 50%, 45% 50%, 50% 30%, 55% 70%, 60% 50%, 100% 50%);
    }
    .pulse-dot {
      position: absolute;
      top: 50%;
      left: 0;
      width: 8px;
      height: 8px;
      margin-top: -4px;
      border-radius: 50%;
      background: var(--face-color);
      box-shadow: 0 0 10px var(--face-color);
      animation: pulse-move 2s linear infinite;
    }
  }

  .geo-preview {
    position: relative;
    width: 100px;
    height: 100px;
    .globe-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      border: 2px solid var(--face-color);
      border-radius: 50%;
      &.inner {
        width: 60px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .location-dot {
      position: absolute;
      top: 30%;
      left: 60%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--face-color);
      box-shadow: 0 0 10px var(--face-color);
      animation: blink 1s infinite;
    }
  }

  .visual-preview {
    .play-triangle {
      width: 0;
      height: 0;
      border-left: 40px solid var(--face-color);
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      filter: drop-shadow(0 0 10px var(--face-color));
    }
  }

  .memory-preview {
    position: relative;
    width: 100px;
    height: 100px;
    .polaroid-frame {
      position: absolute;
      width: 50px;
      height: 60px;
      border: 3px solid rgba(255, 255, 255, 0.8);
      background: color-mix(in srgb, var(--face-color) 20%, transparent);
      top: 20%;
      left: 20%;
      &.offset {
        top: 30%;
        left: 35%;
        transform: rotate(10deg);
      }
    }
  }

  @keyframes wave-pulse {
    0%, 100% { transform: scaleY(1); opacity: 0.6; }
    50% { transform: scaleY(2); opacity: 1; }
  }

  @keyframes pulse-move {
    0% { left: 0; }
    100% { left: 100%; }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .phase-indicator {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: $terminal-green;
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-shadow: 0 0 10px $terminal-green;
  }
</style>
