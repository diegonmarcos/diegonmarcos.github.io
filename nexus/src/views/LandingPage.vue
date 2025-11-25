<template>
  <div class="min-h-screen bg-stone-900 text-white flex flex-col">
    <div class="flex-grow flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/30"></div>

      <div class="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h1 class="text-5xl md:text-7xl font-serif font-light mb-6 tracking-tight">
          Capital Meets <br />
          <span class="italic text-stone-400">Architecture</span>
        </h1>
        <p class="text-lg text-stone-400 max-w-2xl mx-auto font-light">
          A diversified holding company bridging the gap between aggressive capital deployment and
          operational precision.
        </p>
      </div>

      <!-- The Three Paths -->
      <div class="relative z-10 grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <!-- Path 1: VC -->
        <div
          @click="emit('changePage', 'vc')"
          class="group cursor-pointer relative h-80 border border-stone-700 bg-stone-800/50 backdrop-blur-sm overflow-hidden hover:border-vc-primary transition-colors duration-500"
        >
          <div
            class="absolute inset-0 bg-vc-dark opacity-0 group-hover:opacity-90 transition duration-500"
          ></div>
          <div class="relative p-8 h-full flex flex-col justify-between z-10">
            <div>
              <div class="text-xs font-mono text-vc-primary mb-2">01 — BUY SIDE</div>
              <h3 class="text-2xl font-bold font-sans group-hover:text-vc-primary transition">
                Nexus Ventures
              </h3>
            </div>
            <div>
              <p
                class="text-stone-400 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-100"
              >
                Seed to Series B investments focusing on disruptive tech stacks.
              </p>
              <span
                class="inline-flex items-center text-xs font-bold tracking-widest uppercase group-hover:text-vc-primary"
              >
                Enter Portal
                <PhArrowRight :size="16" class="ml-2" />
              </span>
            </div>
          </div>
        </div>

        <!-- Path 2: Advisory -->
        <div
          @click="emit('changePage', 'advisory')"
          class="group cursor-pointer relative h-80 border border-stone-700 bg-stone-800/50 backdrop-blur-sm overflow-hidden hover:border-white transition-colors duration-500"
        >
          <div
            class="absolute inset-0 bg-[#0F172A] opacity-0 group-hover:opacity-90 transition duration-500"
          ></div>
          <div class="relative p-8 h-full flex flex-col justify-between z-10">
            <div>
              <div class="text-xs font-serif italic text-stone-300 mb-2">02 — SELL SIDE</div>
              <h3 class="text-2xl font-serif text-white">Nexus Partners</h3>
            </div>
            <div>
              <p
                class="text-stone-400 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-100"
              >
                M&A, Capital Raising, and Strategic Exits for market leaders.
              </p>
              <span
                class="inline-flex items-center text-xs font-serif tracking-widest uppercase text-stone-300"
              >
                View Mandates
                <PhCaretRight :size="16" class="ml-2" />
              </span>
            </div>
          </div>
        </div>

        <!-- Path 3: Corporate -->
        <div
          @click="emit('changePage', 'consulting')"
          class="group cursor-pointer relative h-80 border border-stone-700 bg-stone-800/50 backdrop-blur-sm overflow-hidden hover:border-corp-blue transition-colors duration-500"
        >
          <div
            class="absolute inset-0 bg-white opacity-0 group-hover:opacity-95 transition duration-500"
          ></div>
          <div class="relative p-8 h-full flex flex-col justify-between z-10 group-hover:text-slate-900">
            <div>
              <div
                class="text-xs font-bold uppercase tracking-wider mb-2 group-hover:text-corp-blue text-stone-500"
              >
                03 — OPERATIONS
              </div>
              <h3 class="text-2xl font-bold font-sans">Nexus Solutions</h3>
            </div>
            <div>
              <p
                class="text-stone-400 group-hover:text-slate-600 text-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 delay-100"
              >
                Strategy, Tech Transformation, and Operational Roadmaps.
              </p>
              <span
                class="inline-flex items-center text-xs font-bold tracking-widest uppercase group-hover:text-corp-blue"
              >
                Build Roadmap
                <PhArrowRight :size="16" class="ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowRight, PhCaretRight } from '@phosphor-icons/vue'
import type { PageType } from '../types'

const emit = defineEmits<{
  changePage: [page: PageType]
}>()
</script>
