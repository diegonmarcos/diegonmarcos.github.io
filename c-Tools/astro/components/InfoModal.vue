<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" @click.self="$emit('close')">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="$emit('close')"></div>
        <div class="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[80vh] overflow-hidden shadow-2xl">
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/50">
            <div class="flex items-center gap-3">
              <span v-if="icon" class="text-2xl">{{ icon }}</span>
              <h3 class="font-bold text-lg" :style="{ color: color || '#a855f7' }">{{ title }}</h3>
            </div>
            <button @click="$emit('close')" class="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Icon name="lucide:x" :size="20" class="text-slate-400" />
            </button>
          </div>

          <!-- Content -->
          <div class="p-5 overflow-y-auto max-h-[60vh] custom-scrollbar space-y-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  title: string;
  icon?: string;
  color?: string;
}

defineProps<Props>();
defineEmits(['close']);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: translateY(100px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 3px;
}
</style>
