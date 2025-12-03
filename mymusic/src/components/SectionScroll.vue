<script setup lang="ts">
import { IMusicItem } from '../types';
import MediaCard from './MediaCard.vue';

defineProps<{
  title: string;
  items: IMusicItem[];
  mode: 'list' | 'card'; // Pass mode down
}>();
</script>

<template>
  <section class="section-block" :class="mode">
    <h2 class="section-header">{{ title }}</h2>
    <div class="media-container">
      <MediaCard 
        v-for="item in items" 
        :key="item.id || item.name" 
        :item="item" 
        :mode="mode" 
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-block {
  margin-bottom: 15px;
}

.section-header {
  font-size: 12px;
  color: var(--wa-gold);
  border-bottom: 1px dashed var(--wa-green);
  margin-bottom: 5px;
  padding-bottom: 2px;
}

/* Mode specific layouts */
.section-block.list .media-container {
  display: flex;
  flex-direction: column; /* Vertical list */
}

.section-block.card .media-container {
  display: flex;
  flex-wrap: wrap; /* Grid for cards */
  gap: 10px;
}
</style>
