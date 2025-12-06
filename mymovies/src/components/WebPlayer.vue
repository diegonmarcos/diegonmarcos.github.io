<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  imdbId: string
  movieType: 'movie' | 'series' | 'episode'
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()

// Editable fields
const currentImdbId = ref(props.imdbId)
const currentStreamer = ref('vids')

// Separate minimize states for player and controls
const isPlayerMinimized = ref(false)
const isControlsMinimized = ref(false)

// Separate close states
const isPlayerClosed = ref(false)
const isControlsClosed = ref(false)

// Compute the stream URL based on current values
const streamUrl = computed(() => {
  // Map OMDb 'Type' to streaming service 'type'
  // OMDb: 'movie', 'series', 'episode'
  // Vidsrc: 'movie', 'tv'
  let type = 'movie'
  if (props.movieType === 'series' || props.movieType === 'episode') {
    type = 'tv'
  }

  return `https://${currentStreamer.value}.cc/v2/embed/${type}/${currentImdbId.value}`
})

const updatePlayer = () => {
  // Force iframe reload by updating the key
}

const togglePlayerMinimize = () => {
  isPlayerMinimized.value = !isPlayerMinimized.value
}

const toggleControlsMinimize = () => {
  isControlsMinimized.value = !isControlsMinimized.value
}

const closePlayer = () => {
  // Close both windows together when player is closed
  isPlayerClosed.value = true
  isControlsClosed.value = true
  emit('close')
}

const closeControls = () => {
  // Close only controls, keep player open
  isControlsClosed.value = true
  checkIfAllClosed()
}

const checkIfAllClosed = () => {
  // Only emit close to parent when BOTH windows are closed
  if (isPlayerClosed.value && isControlsClosed.value) {
    emit('close')
  }
}
</script>

<template>
  <div class="webplayer-wrapper">
    <!-- WINDOW A: VIDEO PLAYER (Centered) -->
    <div v-if="!isPlayerClosed" class="player-window" :class="{ minimized: isPlayerMinimized }">
      <div class="window-header" @click="isPlayerMinimized && togglePlayerMinimize()">
        <h2>{{ title }}</h2>
        <div class="header-buttons">
          <button class="minimize-btn" @click.stop="togglePlayerMinimize" :title="isPlayerMinimized ? 'Restore' : 'Minimize'">
            {{ isPlayerMinimized ? '□' : '_' }}
          </button>
          <button class="close-btn" @click.stop="closePlayer" title="Close Player">✕</button>
        </div>
      </div>

      <div v-show="!isPlayerMinimized" class="window-content">
        <iframe
          :src="streamUrl"
          :key="streamUrl"
          allowfullscreen
          allow="autoplay; fullscreen; picture-in-picture"
          class="player-iframe"
        ></iframe>
      </div>
    </div>

    <!-- WINDOW B: INPUT CONTROLS (Bottom) -->
    <div
      v-if="!isControlsClosed"
      class="controls-window"
      :class="{ minimized: isControlsMinimized }"
    >
      <div class="window-header" @click="isControlsMinimized && toggleControlsMinimize()">
        <h2>Player Controls</h2>
        <div class="header-buttons">
          <button class="minimize-btn" @click.stop="toggleControlsMinimize" :title="isControlsMinimized ? 'Restore' : 'Minimize'">
            {{ isControlsMinimized ? '□' : '_' }}
          </button>
          <button class="close-btn" @click.stop="closeControls" title="Close Controls">✕</button>
        </div>
      </div>

      <div v-show="!isControlsMinimized" class="window-content">
        <div class="control-inputs">
          <div class="control-group">
            <label for="imdb-id">IMDb ID:</label>
            <input
              id="imdb-id"
              v-model="currentImdbId"
              type="text"
              placeholder="tt1234567"
              @change="updatePlayer"
            />
          </div>
          <div class="control-group">
            <label for="streamer">Streamer:</label>
            <input
              id="streamer"
              v-model="currentStreamer"
              type="text"
              placeholder="vids"
              @change="updatePlayer"
            />
          </div>
          <button class="update-btn" @click="updatePlayer">Update Player</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webplayer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  pointer-events: none;
}

/* WINDOW A: VIDEO PLAYER (Centered) */
.player-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
  pointer-events: auto;
  transition: all 0.3s ease;
  z-index: 1500; /* Below controls to prevent overlap */

  &.minimized {
    width: 400px;
    height: auto;
    top: auto;
    bottom: 120px;
    right: 20px;
    left: auto;
    transform: none;

    .window-header {
      cursor: pointer;
      &:hover {
        background-color: #252525;
      }
    }
  }
}

/* WINDOW B: CONTROLS (Bottom) */
.controls-window {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1a1a1a;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  pointer-events: auto;
  transition: all 0.3s ease;
  z-index: 2000;

  &.minimized {
    width: 400px;
    height: auto;

    .window-header {
      cursor: pointer;
      &:hover {
        background-color: #252525;
      }
    }
  }
}

/* Common window styles */
.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #333;
  background-color: #1a1a1a;
  border-radius: 12px 12px 0 0;
  transition: background-color 0.2s;

  h2 {
    margin: 0;
    font-size: 1.2em;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.header-buttons {
  display: flex;
  gap: 10px;
}

.minimize-btn,
.close-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.minimize-btn {
  font-size: 1.8em;
  font-weight: bold;
}

.window-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Player specific */
.player-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  background-color: #000;
}

/* Controls specific */
.control-inputs {
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: #222;
  flex-wrap: wrap;
  align-items: flex-end;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 150px;

  label {
    font-size: 0.9em;
    color: #aaa;
    font-weight: 500;
  }

  input {
    padding: 10px;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 6px;
    color: white;
    font-size: 1em;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: var(--accent-color, #e50914);
    }

    &::placeholder {
      color: #666;
    }
  }
}

.update-btn {
  padding: 10px 20px;
  background-color: var(--accent-color, #e50914);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: var(--accent-hover, #c40812);
  }
}

@media (max-width: 768px) {
  .player-window {
    width: 95%;
    height: 70vh;

    &.minimized {
      width: 300px;
    }
  }

  .controls-window {
    width: 95%;

    &.minimized {
      width: 300px;
    }
  }

  .control-inputs {
    flex-direction: column;
  }

  .control-group {
    width: 100%;
  }

  .update-btn {
    width: 100%;
  }
}
</style>
