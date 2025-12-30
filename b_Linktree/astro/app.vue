<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  title: 'AstroLife - Personal Astrology Dashboard',
  meta: [
    { name: 'description', content: 'Interactive astrology dashboard with 3D globe visualization' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
});
</script>
