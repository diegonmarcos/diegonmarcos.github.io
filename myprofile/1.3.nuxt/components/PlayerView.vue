<script setup lang="ts">
import type { DataItem } from '~/types'

defineProps<{
  data: DataItem[]
}>()
</script>

<template>
  <div class="player-view-container fade-in">
    <!-- Attributes Column -->
    <div class="player-col left">
      <h3 class="section-header">ATTRIBUTES</h3>
      <div class="attributes-list">
        <div v-for="item in data" :key="item.id" class="attribute-row">
          <div class="attr-label">
            <Icon
              :name="'lucide:' + item.icon"
              :size="14"
              :style="{ color: item.accentColor }"
            />
            <span>{{ item.statType }}</span>
          </div>
          <div class="attr-bar-container">
            <div
              class="attr-bar-fill"
              :style="{
                width: item.statValue + '%',
                backgroundColor: item.accentColor,
                boxShadow: '0 0 10px ' + item.accentColor
              }"
            />
          </div>
          <div class="attr-val">{{ item.statValue }}</div>
        </div>
      </div>
      <div class="radar-mockup">
        <div class="radar-scan" />
        <svg viewBox="0 0 100 100" class="radar-svg">
          <polygon
            points="50,10 90,50 50,90 10,50"
            fill="none"
            stroke="#0f0"
            stroke-width="0.5"
            opacity="0.5"
          />
          <polygon
            points="50,15 85,50 50,80 20,50"
            fill="rgba(0, 255, 65, 0.2)"
            stroke="#0f0"
            stroke-width="1"
          />
        </svg>
      </div>
    </div>

    <!-- Avatar Column -->
    <div class="player-col center">
      <div class="avatar-hologram">
        <div class="scan-ring" />
        <Icon name="lucide:user" :size="120" class="silhouette" />
      </div>
      <div class="player-identity">
        <h2>ALEX_NOVA</h2>
        <div class="lvl-badge">LVL. 24</div>
      </div>
      <div class="xp-container">
        <span>XP</span>
        <div class="xp-bar">
          <div class="xp-fill" />
        </div>
      </div>
    </div>

    <!-- Gear Column -->
    <div class="player-col right">
      <h3 class="section-header">EQUIPMENT</h3>
      <div class="gear-grid">
        <div v-for="item in data" :key="item.id" class="gear-slot">
          <div class="corner-bracket tl" />
          <div class="corner-bracket br" />
          <Icon
            :name="'lucide:' + item.icon"
            :size="24"
            :style="{ color: item.accentColor }"
          />
          <span class="gear-label">{{ item.platform }}</span>
        </div>
        <div class="gear-slot empty">
          <div class="cross" />
        </div>
      </div>
    </div>
  </div>
</template>
