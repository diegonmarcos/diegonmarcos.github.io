<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue' 
import SectionScroll from './components/SectionScroll.vue'
import {
  rollingStoneTopSongs,
  rollingStoneTopAlbums,
  rollingStoneTopShows,
  jazzSection,
  rockSection,
  punkSection,
  alternativeRockSection,
  classicSection,
  mantrasSection,
  brasilidadesSection,
} from './data/staticLists'
import { IMusicItem } from './types'
import { searchArtistByName } from './services/theAudioDb'

// --- State ---
const currentView = ref<'list' | 'card'>('list');
const activeSkin = ref('classic');

// --- Skin Logic ---
const handleSkinChange = (skin: string) => {
  activeSkin.value = skin;
  if (skin === 'modern') {
    document.documentElement.classList.add('skin-modern');
  } else {
    document.documentElement.classList.remove('skin-modern');
  }
};

// --- View Logic ---
const toggleView = (view: 'list' | 'card') => {
  currentView.value = view;
};

// --- Data ---
const sections = ref([
  { title: 'Rolling Stone: Top 100 Songs', items: rollingStoneTopSongs as IMusicItem[] },
  { title: 'Rolling Stone: Top Albums', items: rollingStoneTopAlbums as IMusicItem[] },
  { title: 'Rolling Stone: Top Shows', items: rollingStoneTopShows as IMusicItem[] },
  { title: 'Jazz Classics', items: jazzSection as IMusicItem[] },
  { title: 'Rock Anthems', items: rockSection as IMusicItem[] },
  { title: 'Punk Revolution', items: punkSection as IMusicItem[] },
  { title: 'Alternative Rock Hits', items: alternativeRockSection as IMusicItem[] },
  { title: 'Classical Masterpieces', items: classicSection as IMusicItem[] },
  { title: 'Buddhist Mantras', items: mantrasSection as IMusicItem[] },
  { title: 'Brasilidades (Bossa Nova)', items: brasilidadesSection as IMusicItem[] },
])

onMounted(async () => {
  // Data fetching logic
  for (const section of sections.value) {
    if (['Jazz Classics', 'Rock Anthems', 'Punk Revolution'].includes(section.title)) {
      const updatedItems: IMusicItem[] = []
      for (const item of section.items) {
        if (!item.image || item.image.includes('placeholder')) {
           try {
              const artists = await searchArtistByName(item.name)
              if (artists.length > 0) {
                updatedItems.push({ ...item, image: artists[0].image || item.image, id: artists[0].id || item.id })
              } else { updatedItems.push(item) }
           } catch (e) { updatedItems.push(item) }
        } else { updatedItems.push(item) }
      }
      section.items = updatedItems
    }
  }
})
</script>

<template>
  <div class="winamp-container">
    
    <!-- 1. Main Window -->
    <Navbar @skin-change="handleSkinChange" />

    <!-- 2. Equalizer (Dummy) -->
    <div class="wa-window equalizer-window">
       <div class="wa-title-bar">
          <div class="wa-title-text">WINAMP EQUALIZER</div>
          <button class="wa-btn-small">x</button>
       </div>
       <div class="eq-deck">
          <div class="eq-sliders">
             <div v-for="n in 10" :key="n" class="eq-band">
                <div class="eq-bg"></div>
                <div class="eq-thumb" :style="{ top: (Math.random() * 80) + '%' }"></div>
             </div>
          </div>
       </div>
    </div>

    <!-- 3. Playlist/Library Window -->
    <div class="wa-window playlist-window">
       <div class="wa-title-bar">
          <div class="wa-title-text">
             {{ currentView === 'list' ? 'WINAMP PLAYLIST' : 'WINAMP LIBRARY VISUALIZER' }}
          </div>
          <button class="wa-btn-small">x</button>
       </div>
       
       <div class="playlist-content">
          <div class="sections-container">
            <SectionScroll
              v-for="section in sections"
              :key="section.title"
              :title="section.title"
              :items="section.items"
              :mode="currentView"
            />
          </div>
       </div>
       
       <div class="playlist-footer">
          <!-- View Switcher Buttons -->
          <button 
             class="wa-btn-rect" 
             :class="{ active: currentView === 'list' }"
             @click="toggleView('list')"
          >
            PL LIST
          </button>
          <button 
             class="wa-btn-rect" 
             :class="{ active: currentView === 'card' }"
             @click="toggleView('card')"
          >
            VISUAL
          </button>
          
          <div class="pl-spacer"></div>
          
          <div class="pl-info">
             {{ currentView === 'list' ? 'LIST VIEW' : 'CARD VIEW' }}
          </div>
          
          <button class="wa-btn-rect">LOAD</button>
          <button class="wa-btn-rect">SAVE</button>
       </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.winamp-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100vh; /* Lock to viewport height */
  padding-top: 20px;
  overflow: hidden; /* Prevent window scroll, use internal scroll */
}

/* Equalizer Window */
.equalizer-window {
  width: 275px;
  height: 116px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* Don't shrink */
}
.eq-deck {
  flex: 1;
  background: #000;
  margin: 0 4px 4px 4px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 10px;
}
.eq-sliders {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.eq-band {
  width: 10px;
  height: 100%;
  position: relative;
}
.eq-bg {
  width: 2px;
  height: 100%;
  background: #333;
  margin: 0 auto;
}
.eq-thumb {
  width: 8px;
  height: 4px;
  background: #c0c0c0;
  border: 1px solid #fff;
  border-bottom-color: #000;
  border-right-color: #000;
  position: absolute;
  left: 1px;
}

/* Playlist Window */
.playlist-window {
  width: 95%; /* Flexible width for library */
  max-width: 800px;
  flex: 1; /* Take remaining vertical space */
  min-height: 0; /* Allow flex shrinking for scroll */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.playlist-content {
  flex: 1;
  background: #000;
  margin: 0 4px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  overflow-y: auto; /* Internal Scroll */
  padding: 10px;
  color: var(--wa-text-normal);
  font-family: var(--wa-font-nums);
}

/* Custom scrollbar for playlist content */
.playlist-content::-webkit-scrollbar {
  width: 12px;
}
.playlist-content::-webkit-scrollbar-track {
  background: #202020;
}
.playlist-content::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border: 1px solid #fff;
  border-right-color: #000;
  border-bottom-color: #000;
}

.playlist-footer {
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  gap: 4px;
  background: var(--wa-bg-dark);
  border-top: 1px solid #fff;
  flex-shrink: 0;
}

.pl-info {
  text-align: center;
  font-size: 9px;
  color: var(--wa-green);
  padding: 0 10px;
}
.pl-spacer { flex: 1; }

.wa-btn-rect {
  height: 16px;
  font-size: 9px;
  padding: 0 6px;
  background: #c0c0c0;
  border: 1px solid #fff;
  border-right-color: #000;
  border-bottom-color: #000;
  cursor: pointer;
}
.wa-btn-rect:active, .wa-btn-rect.active {
  border: 1px solid #000;
  border-right-color: #fff;
  border-bottom-color: #fff;
  background: #a0a0a0; /* Visibly pressed state */
  transform: translateY(1px);
}
</style>