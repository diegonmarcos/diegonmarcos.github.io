<script setup lang="ts">
import { ref } from 'vue';

// Props to make this component reusable as the "Main Window", "Playlist", or "Equalizer"
defineProps<{
  title?: string;
  skin?: string; // 'classic' or 'modern'
}>();

const isMenuOpen = ref(false);
const currentSkin = ref('classic'); 
const emit = defineEmits(['skin-change']);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setSkin = (skin: string) => {
  currentSkin.value = skin;
  emit('skin-change', skin);
  isMenuOpen.value = false;
};

// Time display simulation
const time = ref('02:43');
const kbps = ref('192');
const khz = ref('44');

// Visualizer bars simulation
const vizBars = ref(new Array(15).fill(0).map(() => Math.random() * 100));
setInterval(() => {
  vizBars.value = vizBars.value.map(() => Math.random() * 100);
}, 100);

</script>

<template>
  <div class="wa-window main-window">
    <!-- Top Title Bar -->
    <div class="wa-title-bar">
      <div class="wa-icon">
        <span class="wa-bolt">⚡</span>
      </div>
      <div class="wa-title-text">WINAMP 2.91</div>
      <div class="wa-controls-top">
        <button class="wa-btn-small" aria-label="Minimize">_</button>
        <button class="wa-btn-small" aria-label="Close">x</button>
      </div>
    </div>

    <!-- Main Deck Content -->
    <div class="wa-deck">
      
      <!-- Left Side: Time & Vis -->
      <div class="deck-left">
        <div class="wa-display-area time-display">
             <div class="lcd-text large">{{ time }}</div>
        </div>
        <div class="wa-display-area viz-display">
             <!-- Fake Spectrum Analyzer -->
             <div class="spectrum">
               <div v-for="(bar, i) in vizBars" :key="i" class="spec-bar" :style="{ height: bar + '%' }"></div>
             </div>
        </div>
      </div>

      <!-- Right Side: Info & Controls -->
      <div class="deck-right">
        <!-- Song Ticker -->
        <div class="wa-display-area song-ticker">
          <div class="scrolling-text">MyMusic Library - Winamp Demo - MP3</div>
        </div>
        
        <!-- Kbps/Khz info -->
        <div class="info-row">
           <div class="kbps-box wa-display-area">
             <span>{{ kbps }}</span> kbps
           </div>
           <div class="khz-box wa-display-area">
             <span>{{ khz }}</span> kHz
           </div>
           
           <!-- Skin Switcher (hidden in UI logic but accessible here) -->
           <div class="skin-btn-container">
              <button @click="toggleMenu" class="wa-btn-rect">SKINS</button>
              <div v-if="isMenuOpen" class="skin-menu">
                 <div @click="setSkin('classic')">Classic</div>
                 <div @click="setSkin('modern')">Modern</div>
              </div>
           </div>
        </div>

        <!-- Playback Controls -->
        <div class="playback-controls">
           <button class="wa-btn-control prev" title="Previous">|&lt;</button>
           <button class="wa-btn-control play" title="Play">&gt;</button>
           <button class="wa-btn-control pause" title="Pause">||</button>
           <button class="wa-btn-control stop" title="Stop">[]</button>
           <button class="wa-btn-control next" title="Next">&gt;|</button>
           <button class="wa-btn-control open" title="Open File">^</button>
        </div>
      </div>
      
    </div>
    
    <!-- Volume / Balance Sliders (Visual only) -->
    <div class="slider-row">
       <div class="wa-text-label">VOLUME</div>
       <input type="range" min="0" max="100" value="80" class="wa-slider volume" />
       <div class="wa-text-label">BALANCE</div>
       <input type="range" min="-100" max="100" value="0" class="wa-slider balance" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.main-window {
  width: 275px; /* Strict Winamp dimension */
  height: 116px; /* Strict Winamp dimension */
  margin: 0 auto; /* Center it on mobile/desktop */
  padding: 0 4px 4px 4px; /* Specific padding for the inner frame */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

/* The inner layout of the "Main Window" */
.wa-deck {
  display: flex;
  height: 60px;
  margin-top: 3px;
  gap: 5px;
}

.deck-left {
  width: 90px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.deck-right {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.wa-display-area {
  background: #000;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

/* Time Display */
.time-display {
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}
.lcd-text {
  color: var(--wa-green);
  font-family: var(--wa-font-nums);
  font-size: 20px;
  letter-spacing: 2px;
}

/* Visualizer */
.viz-display {
  height: 30px;
  padding: 2px;
}
.spectrum {
  display: flex;
  align-items: flex-end;
  height: 100%;
  gap: 1px;
}
.spec-bar {
  width: 4px;
  background: linear-gradient(to top, var(--wa-green), var(--wa-gold) 80%, #ff0000);
}

/* Song Ticker */
.song-ticker {
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 10px;
  color: var(--wa-green);
  display: flex;
  align-items: center;
  padding-left: 3px;
}
.scrolling-text {
  animation: marquee 5s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Info Row (kbps/kHz) */
.info-row {
  display: flex;
  gap: 3px;
  height: 15px;
}
.kbps-box, .khz-box {
  flex: 1;
  font-size: 9px;
  color: var(--wa-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.kbps-box span, .khz-box span {
  color: #fff;
}

/* Controls */
.playback-controls {
  display: flex;
  gap: 2px;
  margin-top: 2px;
}
.wa-btn-control {
  width: 23px;
  height: 18px;
  background: linear-gradient(to bottom, #c0c0c0, #808080);
  border: 1px solid #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  font-size: 9px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wa-btn-control:active {
  border: 1px solid #000;
  border-right-color: #fff;
  border-bottom-color: #fff;
  transform: translateY(1px);
}
.wa-btn-control.play { width: 28px; }

/* Sliders */
.slider-row {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.wa-text-label {
  font-size: 8px;
  color: #c0c0c0;
}
.wa-slider {
  -webkit-appearance: none;
  height: 5px;
  background: #000;
  border: 1px solid #808080;
  border-bottom-color: #fff;
  border-right-color: #fff;
  flex-grow: 1;
}
.wa-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 8px;
  background: #c0c0c0;
  border: 1px solid #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  cursor: pointer;
}

/* Skin Menu */
.skin-btn-container {
    position: relative;
}
.wa-btn-rect {
    height: 15px;
    font-size: 8px;
    padding: 0 4px;
    background: #c0c0c0;
    border: 1px outset #fff;
    cursor: pointer;
}
.wa-btn-rect:active { border-style: inset; }

.skin-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: #d0d0d0;
    border: 2px solid #000;
    border-top-color: #fff;
    border-left-color: #fff;
    z-index: 9999;
    width: 80px;
}
.skin-menu div {
    padding: 4px;
    font-size: 10px;
    color: #000;
    cursor: pointer;
}
.skin-menu div:hover {
    background: #000080;
    color: #fff;
}
</style>
