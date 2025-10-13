<template>
  <section class="text-center animate-fade-in-up" style="animation-delay: 800ms; opacity: 0;">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Explore the Full Blueprint 🗺️</h2>
    <p class="max-w-2xl mx-auto text-gray-400 mb-8">
      This is just the foundation. For a detailed look at my professional journey, project portfolio, and technical skills, please explore my full curriculum.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <a href="#" class="bg-brand-purple text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-brand-light-purple hover:scale-105">
        📜 View Full Curriculum
      </a>
      <a href="#" class="bg-brand-purple text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-brand-light-purple hover:scale-105">
        📄 Download CV (PDF)
      </a>
      <a href="#" class="bg-brand-purple text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-brand-light-purple hover:scale-105">
        💼 Connect on LinkedIn
      </a>
      <a href="#" class="bg-brand-purple text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:bg-brand-light-purple hover:scale-105">
        💻 See My Code on GitHub
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Ensure animation applies correctly */
.animate-fade-in-up {
  opacity: 0;
  animation-name: fade-in-up;
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
}
</style>
