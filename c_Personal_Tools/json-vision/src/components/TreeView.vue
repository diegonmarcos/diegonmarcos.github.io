<script setup lang="ts">
import JsonNode from './JsonNode.vue'

defineProps<{ data: unknown; searchTerm: string }>()
const emit = defineEmits<{ copyPath: [path: string]; edit: [path: string, key: string, value: unknown] }>()
</script>

<template>
  <div class="tree-view">
    <JsonNode
      :value="data"
      :is-last="true"
      path=""
      :search-term="searchTerm"
      @copy-path="emit('copyPath', $event)"
      @edit="(a: string, b: string, c: unknown) => emit('edit', a, b, c)"
    />
  </div>
</template>

<style lang="scss" scoped>
.tree-view { padding: 16px; overflow: auto; height: 100%; width: 100%; font-family: var(--font-mono); font-size: 14px; -webkit-overflow-scrolling: touch; }
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
