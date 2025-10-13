<script setup>
defineProps({
  sections: Array
});
</script>

<template>
  <section class="mb-20 md:mb-28">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">My Value Proposition</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div 
        v-for="(section, index) in sections" 
        :key="section.title" 
        class="bg-card-bg border border-card-border rounded-xl p-6 transition-all duration-300 hover:shadow-glow hover:border-brand-light-purple/50"
        :style="{ animationDelay: `${index * 150}ms` }"
        style="opacity: 0; animation-name: fade-in-up; animation-fill-mode: forwards; animation-duration: 0.8s;"
      >
        <h3 class="text-xl font-bold mb-3 text-brand-light-purple">{{ section.title }}</h3>
        <p class="text-gray-400 mb-4 text-sm">{{ section.description }}</p>
        <ul class="list-disc list-inside space-y-2 text-gray-300 text-sm">
          <li v-for="point in section.points" :key="point">{{ point }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
