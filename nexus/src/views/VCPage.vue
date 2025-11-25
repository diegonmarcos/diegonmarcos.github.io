<template>
  <div class="min-h-screen bg-[#0A0E27] text-white font-sans">
    <!-- Hero Section -->
    <div class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]"></div>
      <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.15) 1px, transparent 0); background-size: 40px 40px;"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8">
          <span class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
          <span class="text-xs font-mono text-indigo-300 tracking-wider uppercase">Capital Markets — Buy-Side</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Nexus <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Ventures</span>
        </h1>

        <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          We deploy strategic capital into transformative technology companies. Our thesis-driven approach combines deep sector expertise with hands-on operational support.
        </p>

        <!-- Key Metrics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
            <div class="text-3xl font-bold text-indigo-400 mb-2">$450M</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">AUM</div>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
            <div class="text-3xl font-bold text-cyan-400 mb-2">23</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Portfolio</div>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
            <div class="text-3xl font-bold text-purple-400 mb-2">4.2x</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Avg MOIC</div>
          </div>
          <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
            <div class="text-3xl font-bold text-emerald-400 mb-2">65%</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">IRR</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Investment Focus -->
    <div class="max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Investment Thesis</h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          We focus on disruptive technology companies with scalable business models and exceptional founding teams.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="group relative bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute top-8 right-8 text-6xl font-bold text-white/5">01</div>
          <div class="relative">
            <div class="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
              <PhTarget :size="28" class="text-indigo-400" />
            </div>
            <h3 class="text-xl font-bold mb-3">Deal Sourcing</h3>
            <p class="text-gray-400 leading-relaxed">
              Proprietary deal flow through our network of founders, operators, and institutional partners. We see opportunities before they hit the market.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute top-8 right-8 text-6xl font-bold text-white/5">02</div>
          <div class="relative">
            <div class="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition">
              <PhFingerprint :size="28" class="text-cyan-400" />
            </div>
            <h3 class="text-xl font-bold mb-3">Due Diligence</h3>
            <p class="text-gray-400 leading-relaxed">
              Rigorous analysis of technology architecture, competitive positioning, unit economics, and market dynamics. We invest with conviction.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute top-8 right-8 text-6xl font-bold text-white/5">03</div>
          <div class="relative">
            <div class="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition">
              <PhStrategy :size="28" class="text-purple-400" />
            </div>
            <h3 class="text-xl font-bold mb-3">Value Creation</h3>
            <p class="text-gray-400 leading-relaxed">
              Post-investment support including talent acquisition, go-to-market strategy, follow-on capital, and strategic introductions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stage Focus -->
    <div class="bg-gradient-to-b from-transparent to-[#1a1f3a] py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Stage Focus</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-indigo-400 font-bold">A</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Series A</h4>
                    <p class="text-sm text-gray-400">$5M - $15M check size. Product-market fit validated, early revenue traction.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-cyan-400 font-bold">B</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Series B</h4>
                    <p class="text-sm text-gray-400">$15M - $30M check size. Scaling revenue, expanding market share.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-purple-400 font-bold">G</span>
                  </div>
                  <div>
                    <h4 class="font-semibold mb-1">Growth</h4>
                    <p class="text-sm text-gray-400">$25M+ check size. Clear path to profitability or IPO.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-white/10">
              <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-4">Sector Focus</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-white/10">
                  <span class="text-sm font-medium">Enterprise SaaS</span>
                  <span class="text-xs text-gray-500">40%</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/10">
                  <span class="text-sm font-medium">FinTech</span>
                  <span class="text-xs text-gray-500">25%</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-white/10">
                  <span class="text-sm font-medium">AI/ML Infrastructure</span>
                  <span class="text-xs text-gray-500">20%</span>
                </div>
                <div class="flex items-center justify-between py-2">
                  <span class="text-sm font-medium">Cybersecurity</span>
                  <span class="text-xs text-gray-500">15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhTarget, PhFingerprint, PhStrategy } from '@phosphor-icons/vue'
</script>

<style scoped>
/* VCPage specific styles if needed */
</style>
