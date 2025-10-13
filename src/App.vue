<script setup>
import { ref } from 'vue';
import Hero from './components/Hero.vue';
import ValueProposition from './components/ValueProposition.vue';
import CallToAction from './components/CallToAction.vue';

const valuePropSections = ref([
  {
    title: "Capital Markets & Venture Acumen 📈",
    description: "I don't just analyze businesses; I've built, funded, and scaled them. My experience is rooted in tangible results and strategic growth.",
    points: [
      "Successfully structured and managed deals in Investment Banking, including R$ 500Mi in MBS and R$ 100Mi in mezzanine debt.",
      "Directed portfolios with an Asset under Management (AuM) of R$ 500Mi, handling everything from exclusive funds to private credit.",
      "Led the full cycle of Venture Capital deals, from acquisition to disinvestment, with a focus on ESG-centric startups."
    ]
  },
  {
    title: "Engineering & Problem-Solving Mindset 🛠️",
    description: "My foundation in Civil Engineering trained me to deconstruct complex problems and build robust, lasting solutions from the ground up.",
    points: [
      "Honed in critical thinking and problem-solving through a B.Sc. in Structural Civil Engineering.",
      "Managed on-site construction of residential towers and developed infrastructure projects for NGOs, turning blueprints into reality.",
      "Applied financial modeling and project management not just to finance, but to the tangible world of infrastructure and development."
    ]
  },
  {
    title: "The Pivot: Product & Software Engineering 🚀",
    description: "Driven by a passion for creative endeavors and innovation, I am channeling my experience into building the products of tomorrow.",
    points: [
      "Currently honing skills in C/C++ programming, data structures, and UNIX at L’École 42, and Product Management from Stanford.",
      "Learning to manage the entire product lifecycle—from user discovery and roadmap creation to running operational sprints.",
      "Combining a decade of understanding *what* to build with the emerging knowledge of *how* to build it."
    ]
  },
  {
    title: "Global Perspective & Adaptability 🌍",
    description: "My personal and professional life has been a nomadic project, providing me with unparalleled adaptability and cross-cultural communication skills.",
    points: [
      "Lived in Berlin, Barcelona, London, Paris, and Valencia, while traveling to over 170 cities in 40+ countries.",
      "Fluent in Portuguese, English, and Spanish, with a growing proficiency in German.",
      "Thrives in multicultural environments, bringing a unique worldview to every team."
    ]
  }
]);
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <main class="container mx-auto px-4 py-12 md:py-20">
      <Hero />
      <ValueProposition :sections="valuePropSections" />
      <CallToAction />
    </main>
  </div>
</template>
