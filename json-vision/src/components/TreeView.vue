<script setup lang="ts">
import { ref, computed, defineComponent } from 'vue'

defineProps<{ data: unknown; searchTerm: string }>()
const emit = defineEmits<{ copyPath: [path: string]; edit: [path: string, key: string, value: unknown] }>()

const JsonNode = defineComponent({
  name: 'JsonNode',
  props: {
    itemKey: { type: [String, Number], default: undefined },
    value: { type: null, required: true },
    isLast: { type: Boolean, default: false },
    path: { type: String, default: '' },
    searchTerm: { type: String, default: '' }
  },
  emits: ['copyPath', 'edit'],
  setup(props, { emit }) {
    const isExpanded = ref(true)
    const isObject = computed(() => props.value !== null && typeof props.value === 'object' && !Array.isArray(props.value))
    const isArray = computed(() => Array.isArray(props.value))
    const isPrimitive = computed(() => !isObject.value && !isArray.value)
    const currentPath = computed(() => props.path ? (Number.isInteger(props.itemKey) ? `${props.path}[${props.itemKey}]` : `${props.path}.${props.itemKey}`) : String(props.itemKey || ''))
    const keys = computed(() => (isObject.value || isArray.value) ? Object.keys(props.value as object) : [])
    const brackets = computed(() => isArray.value ? ['[', ']'] : ['{', '}'])

    const getValueClass = (v: unknown) => {
      if (typeof v === 'number') return 'val-number'
      if (typeof v === 'boolean') return 'val-boolean'
      if (v === null) return 'val-null'
      return 'val-string'
    }

    return { isExpanded, isObject, isArray, isPrimitive, currentPath, keys, brackets, getValueClass, emit }
  },
  template: `
    <div v-if="isPrimitive" class="tree-row" @click="emit('copyPath', currentPath)">
      <span v-if="itemKey !== undefined" class="tree-key">{{ itemKey }}:</span>
      <span :class="['tree-value', getValueClass(value)]">{{ value === null ? 'null' : value }}</span>
      <span v-if="!isLast" class="comma">,</span>
    </div>
    <div v-else class="tree-node">
      <div class="tree-row" @click="isExpanded = !isExpanded">
        <button class="toggle-btn">{{ isExpanded ? '▼' : '▶' }}</button>
        <span v-if="itemKey !== undefined" class="tree-key">{{ itemKey }}:</span>
        <span class="bracket">{{ brackets[0] }}</span>
        <span v-if="!isExpanded" class="collapsed-hint">{{ isArray ? keys.length + ' items' : keys.length + ' keys' }}</span>
        <template v-if="!isExpanded"><span class="bracket">{{ brackets[1] }}</span><span v-if="!isLast" class="comma">,</span></template>
      </div>
      <div v-if="isExpanded" class="tree-children">
        <JsonNode v-for="(k, idx) in keys" :key="k" :item-key="isArray ? parseInt(k) : k" :value="value[k]" :is-last="idx === keys.length - 1" :path="currentPath" :search-term="searchTerm" @copy-path="emit('copyPath', $event)" @edit="(a,b,c) => emit('edit', a, b, c)"/>
      </div>
      <div v-if="isExpanded" class="tree-row"><span class="bracket">{{ brackets[1] }}</span><span v-if="!isLast" class="comma">,</span></div>
    </div>
  `
})
</script>

<template>
  <div class="tree-view">
    <JsonNode :value="data" :is-last="true" path="" :search-term="searchTerm" @copy-path="emit('copyPath', $event)" @edit="(a: string, b: string, c: unknown) => emit('edit', a, b, c)"/>
  </div>
</template>

<style lang="scss" scoped>
.tree-view { padding: 16px; overflow: auto; height: 100%; font-family: var(--font-mono); font-size: 14px; }
:deep(.tree-row) { display: flex; align-items: center; padding: 4px; border-radius: 4px; cursor: pointer; &:hover { background: var(--color-bg-tertiary); } }
:deep(.tree-children) { padding-left: 16px; margin-left: 10px; border-left: 1px solid rgba(51, 65, 85, 0.5); }
:deep(.toggle-btn) { background: none; border: none; color: var(--color-text-muted); cursor: pointer; font-size: 10px; margin-right: 4px; padding: 2px; }
:deep(.tree-key) { color: var(--color-text-secondary); margin-right: 8px; }
:deep(.tree-value) { word-break: break-all; }
:deep(.val-string) { color: #34d399; }
:deep(.val-number) { color: #60a5fa; }
:deep(.val-boolean) { color: #a78bfa; }
:deep(.val-null) { color: var(--color-text-muted); }
:deep(.bracket) { color: #facc15; font-weight: 700; }
:deep(.comma) { color: var(--color-text-muted); }
:deep(.collapsed-hint) { color: var(--color-text-muted); font-size: 12px; font-style: italic; margin: 0 8px; }
</style>
