<template>
  <div class="min-h-screen bg-[#0A1628] text-white font-serif">
    <!-- Hero Section with Sailboat -->
    <div class="relative min-h-[80vh] flex items-center overflow-hidden">
      <!-- Background Image: Sailboat -->
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/70"></div>

      <!-- Overlay pattern -->
      <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px); background-size: 60px 60px;"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-12 h-px bg-advisory-gold"></div>
            <span class="text-advisory-gold text-xs font-sans uppercase tracking-[0.3em]">Capital Markets — Sell-Side</span>
          </div>

          <h1 class="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1]">
            Nexus <span class="font-normal italic">Partners</span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-sans font-light">
            We navigate capital markets with the precision of a seasoned captain. Strategic advisory for exits, M&A, and capital raises.
          </p>

          <div class="flex flex-wrap gap-4">
            <button class="bg-advisory-gold hover:bg-[#E5C560] text-[#0A1628] px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider transition">
              Schedule Consultation
            </button>
            <button class="border border-advisory-gold/30 hover:border-advisory-gold text-advisory-gold px-8 py-4 font-sans text-sm font-bold uppercase tracking-wider transition">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Philosophy Section -->
    <div class="bg-gradient-to-b from-[#0F1B2D] to-[#0A1628] py-24">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- Left: Philosophy -->
          <div>
            <div class="inline-block px-4 py-2 bg-advisory-gold/10 border border-advisory-gold/30 rounded mb-6">
              <span class="text-advisory-gold text-xs font-sans uppercase tracking-wider">Our Philosophy</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Certainty in an <span class="italic text-advisory-gold">uncertain</span> world.
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed font-sans mb-8">
              Like the finest Private Equity firms, we operate with discipline, rigor, and an unwavering focus on value maximization. Our advisory practice is built on decades of combined experience navigating complex transactions.
            </p>
            <div class="grid grid-cols-3 gap-6">
              <div>
                <div class="text-3xl font-bold text-advisory-gold mb-2">$2.4B+</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-sans">Transaction Value</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-advisory-gold mb-2">47</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-sans">Closed Deals</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-advisory-gold mb-2">18%</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide font-sans">Avg Premium</div>
              </div>
            </div>
          </div>

          <!-- Right: Wood-texture inspired design -->
          <div class="relative">
            <div class="bg-gradient-to-br from-[#1a2332] to-[#0F1B2D] border-2 border-advisory-gold/20 rounded-2xl p-8 md:p-10">
              <div class="absolute top-0 right-0 w-32 h-32 bg-advisory-gold/5 rounded-bl-full"></div>
              <div class="relative">
                <h3 class="text-2xl font-light mb-6 flex items-center gap-3">
                  <PhShieldCheck :size="28" class="text-advisory-gold" />
                  <span>Trust & Discretion</span>
                </h3>
                <p class="text-gray-400 font-sans leading-relaxed text-sm mb-6">
                  Every engagement is handled with the utmost confidentiality. We understand that your competitive positioning depends on strategic silence until the optimal moment.
                </p>
                <div class="border-t border-advisory-gold/20 pt-6">
                  <p class="text-xs text-gray-500 font-sans italic">
                    "The difference between a good deal and a great deal is often measured in basis points and timing."
                  </p>
                  <p class="text-xs text-advisory-gold mt-2 font-sans">— Managing Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="py-24 bg-[#0A1628]">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">Advisory Services</h2>
          <p class="text-gray-400 font-sans max-w-2xl mx-auto">
            Comprehensive sell-side advisory across the entire capital markets spectrum.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="group bg-gradient-to-br from-[#1a2332]/50 to-transparent border border-advisory-gold/20 rounded-xl p-8 hover:border-advisory-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-advisory-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-advisory-gold/20 transition">
              <PhBank :size="32" class="text-advisory-gold" />
            </div>
            <h3 class="text-2xl font-light mb-4">Capital Raising</h3>
            <p class="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Structuring optimal debt and equity solutions. We determine the right capital structure and connect you with institutional investors who understand your sector.
            </p>
            <div class="border-t border-advisory-gold/10 pt-4">
              <span class="text-xs text-advisory-gold font-sans uppercase tracking-wider">Typical Range: $50M - $500M</span>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group bg-gradient-to-br from-[#1a2332]/50 to-transparent border border-advisory-gold/20 rounded-xl p-8 hover:border-advisory-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-advisory-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-advisory-gold/20 transition">
              <PhHandshake :size="32" class="text-advisory-gold" />
            </div>
            <h3 class="text-2xl font-light mb-4">M&A Advisory</h3>
            <p class="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Running competitive sale processes to maximize valuation. From buyer identification to definitive agreements, we orchestrate every stage with precision.
            </p>
            <div class="border-t border-advisory-gold/10 pt-4">
              <span class="text-xs text-advisory-gold font-sans uppercase tracking-wider">Exit Focus: Strategic & Financial Buyers</span>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="group bg-gradient-to-br from-[#1a2332]/50 to-transparent border border-advisory-gold/20 rounded-xl p-8 hover:border-advisory-gold/50 transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 bg-advisory-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-advisory-gold/20 transition">
              <PhChartLineUp :size="32" class="text-advisory-gold" />
            </div>
            <h3 class="text-2xl font-light mb-4">Public Markets</h3>
            <p class="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              IPO readiness, S-1 preparation, and investor roadshow management. We prepare your company for the scrutiny and opportunity of public markets.
            </p>
            <div class="border-t border-advisory-gold/10 pt-4">
              <span class="text-xs text-advisory-gold font-sans uppercase tracking-wider">12-18 Month Preparation Typical</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 bg-gradient-to-b from-[#0A1628] to-[#0F1B2D]">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="bg-gradient-to-br from-[#1a2332] to-[#0F1B2D] border-2 border-advisory-gold/30 rounded-2xl p-12">
          <h2 class="text-3xl md:text-4xl font-light mb-6">Ready to Navigate Your Exit?</h2>
          <p class="text-gray-400 font-sans text-lg mb-8 max-w-2xl mx-auto">
            Our Managing Directors are available for confidential consultations to discuss your strategic objectives.
          </p>
          <button class="bg-advisory-gold hover:bg-[#E5C560] text-[#0A1628] px-10 py-4 font-sans text-sm font-bold uppercase tracking-wider transition inline-flex items-center gap-2">
            <PhCalendar :size="20" />
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhBank, PhHandshake, PhChartLineUp, PhShieldCheck, PhCalendar } from '@phosphor-icons/vue'
</script>
