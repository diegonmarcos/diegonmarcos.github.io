<template>
  <div class="min-h-screen bg-[#1C1C1C] text-white font-sans">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-[#1C1C1C] via-[#252525] to-[#1C1C1C] pt-32 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded mb-8">
            <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider">Corporate Services</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Operational <span class="font-normal text-emerald-400">Excellence</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            We design and implement transformational strategies that deliver measurable results. From business planning to digital transformation, we build infrastructure that endures.
          </p>
        </div>
      </div>
    </div>

    <!-- Services Grid - Masonry Layout -->
    <div class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Masonry Grid -->
        <div class="grid md:grid-cols-3 gap-6 auto-rows-[180px]">

          <!-- Card 1: Strategy & Finance (Tall) -->
          <div
            @click="openModal('strategy')"
            class="md:row-span-2 group relative bg-[#252525] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/90 to-[#252525]/30 group-hover:via-[#252525]/95 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-500"></div>

            <div class="relative h-full p-8 flex flex-col justify-between">
              <div class="w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                <PhLightbulb :size="28" class="text-emerald-400" />
              </div>

              <div>
                <h3 class="text-3xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">Strategy & Finance</h3>
                <p class="text-gray-400 mb-4 text-sm">Transform vision into executable roadmaps with data-driven financial models.</p>
                <div class="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <span>Explore Service</span>
                  <PhArrowRight :size="18" class="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Growth & Sales (Wide) -->
          <div
            @click="openModal('growth')"
            class="md:col-span-2 group relative bg-[#252525] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#252525] via-[#252525]/90 to-[#252525]/60 group-hover:via-[#252525]/95 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-500"></div>

            <div class="relative h-full p-8 flex items-center justify-between">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                  <PhTrendUp :size="32" class="text-emerald-400" />
                </div>
                <div>
                  <h3 class="text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Growth & Sales</h3>
                  <p class="text-gray-400 text-sm">Accelerate revenue with battle-tested GTM strategies.</p>
                </div>
              </div>
              <PhArrowRight :size="24" class="text-emerald-400 group-hover:translate-x-2 transition-transform duration-300 hidden md:block" />
            </div>
          </div>

          <!-- Card 3: Operations (Square) -->
          <div
            @click="openModal('operations')"
            class="md:col-span-1 group relative bg-[#252525] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/90 to-[#252525]/40 group-hover:via-[#252525]/95 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-500"></div>

            <div class="relative h-full p-8 flex flex-col justify-between">
              <div class="w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                <PhGear :size="28" class="text-emerald-400" />
              </div>

              <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Operational Excellence</h3>
                <div class="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <span>Learn More</span>
                  <PhArrowRight :size="16" class="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Data & Tech (Wide Tall) -->
          <div
            @click="openModal('technology')"
            class="md:col-span-2 md:row-span-2 group relative bg-[#252525] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2634&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div class="absolute inset-0 bg-gradient-to-tr from-[#252525] via-[#252525]/85 to-[#252525]/50 group-hover:via-[#252525]/95 transition-all duration-500"></div>
            <div class="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-500"></div>

            <div class="relative h-full p-10 flex flex-col justify-between">
              <div class="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                <PhDatabase :size="32" class="text-emerald-400" />
              </div>

              <div>
                <h3 class="text-4xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">Data & Technology</h3>
                <p class="text-gray-300 mb-6 text-lg max-w-lg">Build scalable tech ecosystems that enable data-driven decision making across your organization.</p>
                <div class="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <span>Discover Solutions</span>
                  <PhArrowRight :size="18" class="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Approach Section -->
    <div class="py-20 px-6 bg-[#252525]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-4">Our Approach</h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine strategic insight with hands-on execution to deliver sustainable transformation.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-emerald-400">1</span>
            </div>
            <h4 class="font-bold mb-2">Diagnostic</h4>
            <p class="text-sm text-gray-400">Deep-dive analysis of current state</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-emerald-400">2</span>
            </div>
            <h4 class="font-bold mb-2">Design</h4>
            <p class="text-sm text-gray-400">Blueprint for future state</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-emerald-400">3</span>
            </div>
            <h4 class="font-bold mb-2">Implement</h4>
            <p class="text-sm text-gray-400">Hands-on execution support</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-emerald-400">4</span>
            </div>
            <h4 class="font-bold mb-2">Sustain</h4>
            <p class="text-sm text-gray-400">Knowledge transfer & optimization</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-2xl p-12 text-center">
          <h2 class="text-3xl md:text-4xl font-light mb-4">Ready to Transform?</h2>
          <p class="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to audit your current operations and design a roadmap for sustainable growth.
          </p>
          <button class="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition inline-flex items-center gap-2">
            <PhCalendar :size="20" />
            Request Assessment
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="activeModal" @click="closeModal" class="fixed inset-0 z-50 flex items-center justify-center p-6">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

        <!-- Modal Content -->
        <div @click.stop class="relative bg-[#252525] border border-emerald-500/30 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition z-10"
          >
            <PhX :size="24" class="text-white" />
          </button>

          <!-- Modal Header with Image -->
          <div class="relative h-64 overflow-hidden">
            <div class="absolute inset-0" :style="{ backgroundImage: `url('${modalContent[activeModal].image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#252525] via-[#252525]/60 to-transparent"></div>
            <div class="relative h-full flex items-end p-10">
              <div>
                <div class="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <component :is="modalContent[activeModal].icon" :size="32" class="text-emerald-400" />
                </div>
                <h2 class="text-4xl font-bold text-white">{{ modalContent[activeModal].title }}</h2>
              </div>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-10">
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              {{ modalContent[activeModal].description }}
            </p>

            <h3 class="text-2xl font-bold mb-6 text-emerald-400">Key Services</h3>
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div v-for="service in modalContent[activeModal].services" :key="service" class="flex items-start gap-3">
                <PhCheckCircle :size="24" class="text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <p class="text-gray-200">{{ service }}</p>
                </div>
              </div>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-emerald-400">Typical Deliverables</h3>
            <div class="bg-[#1C1C1C] border border-emerald-500/20 rounded-xl p-6 mb-8">
              <ul class="space-y-3">
                <li v-for="deliverable in modalContent[activeModal].deliverables" :key="deliverable" class="flex items-center gap-3 text-gray-300">
                  <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{{ deliverable }}</span>
                </li>
              </ul>
            </div>

            <div class="flex gap-4">
              <button class="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-bold transition">
                Schedule Consultation
              </button>
              <button @click="closeModal" class="px-8 py-4 border border-emerald-500/30 hover:border-emerald-500 rounded-lg font-bold transition">
                Close (Esc)
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { PhLightbulb, PhTrendUp, PhGear, PhDatabase, PhArrowRight, PhCalendar, PhX, PhCheckCircle } from '@phosphor-icons/vue'

type ModalType = 'strategy' | 'growth' | 'operations' | 'technology' | null

const activeModal = ref<ModalType>(null)

const modalContent = {
  strategy: {
    title: 'Strategy & Finance',
    icon: PhLightbulb,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'We develop comprehensive business plans and financial models that withstand investor scrutiny. Our approach combines strategic thinking with rigorous quantitative analysis to create roadmaps that align stakeholders and guide execution.',
    services: [
      'Business Plan Development & Validation',
      'Financial Modeling & 3-Statement Projections',
      'Unit Economics & CAC/LTV Analysis',
      'Scenario Planning & Sensitivity Models',
      'Competitive Positioning & Market Sizing',
      'Strategic Roadmap Development'
    ],
    deliverables: [
      'Executive business plan with go-to-market strategy',
      'Integrated 5-year financial model',
      'Unit economics framework',
      'Investor-ready pitch deck',
      'Strategic milestone roadmap'
    ]
  },
  growth: {
    title: 'Growth & Sales',
    icon: PhTrendUp,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop',
    description: 'We architect go-to-market strategies that accelerate revenue growth. Our frameworks are battle-tested across industries and growth stages, from early-stage startups to scale-ups preparing for exit.',
    services: [
      'Go-to-Market Strategy & Channel Selection',
      'Sales Process Design & Playbook Creation',
      'Pipeline Architecture & Forecasting',
      'Pricing Strategy & Revenue Optimization',
      'Sales Team Structure & Compensation Design',
      'Customer Success Framework'
    ],
    deliverables: [
      'GTM strategy with channel prioritization',
      'Sales playbook and process documentation',
      'Pipeline and forecasting model',
      'Pricing framework and strategy',
      'Sales compensation structure'
    ]
  },
  operations: {
    title: 'Operational Excellence',
    icon: PhGear,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop',
    description: 'We optimize back-office operations to create scalable, efficient organizations. Process improvement that drives bottom-line results while building organizational capacity for growth.',
    services: [
      'Organizational Design & Structure',
      'HR Strategy & Talent Architecture',
      'Process Mapping & Optimization',
      'Lean Operations & Six Sigma',
      'Risk Management Framework',
      'Compliance & Governance'
    ],
    deliverables: [
      'Operating model and org chart',
      'Process documentation and SOPs',
      'HR policies and procedures',
      'Risk register and mitigation plan',
      'Performance management system'
    ]
  },
  technology: {
    title: 'Data & Technology',
    icon: PhDatabase,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2634&auto=format&fit=crop',
    description: 'We architect technology ecosystems that enable data-driven decision making. From ERP selection to AI implementation, we build scalable infrastructure that grows with your business.',
    services: [
      'Technology Strategy & Roadmap',
      'ERP/CRM Selection & Implementation',
      'Data Architecture & Governance',
      'Business Intelligence & Analytics',
      'Process Automation & RPA',
      'AI/ML Integration Strategy'
    ],
    deliverables: [
      'Technology strategy and stack recommendation',
      'Vendor evaluation and selection framework',
      'Data architecture blueprint',
      'Analytics dashboard specifications',
      'Automation roadmap and ROI analysis'
    ]
  }
}

const openModal = (type: ModalType) => {
  activeModal.value = type
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activeModal.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
  opacity: 0;
}
</style>
