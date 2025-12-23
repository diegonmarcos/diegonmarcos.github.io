<script setup lang="ts">
import { ref } from 'vue'
import type { OpenDoc } from '@/types/json'

defineProps<{
  files: string[]
  openDocs: OpenDoc[]
  width: number
  useFallback: boolean
}>()

const emit = defineEmits<{
  openFolder: []
  openFile: [filename: string]
  fallbackFiles: [files: FileList | null]
  'update:width': [value: number]
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)

const handleOpenClick = () => {
  emit('openFolder')
}

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('fallbackFiles', target.files)
  target.value = '' // Reset to allow re-selecting same files
}

let isResizing = false
let startX = 0
let startWidth = 0

const startResize = (e: MouseEvent) => {
  isResizing = true
  startX = e.clientX
  startWidth = 256
  document.addEventListener('mousemove', doResize)
  document.addEventListener('mouseup', stopResize)
  document.body.style.cursor = 'col-resize'
}

const doResize = (e: MouseEvent) => {
  if (!isResizing) return
  const newWidth = Math.max(150, Math.min(startWidth + (e.clientX - startX), 600))
  emit('update:width', newWidth)
}

const stopResize = () => {
  isResizing = false
  document.removeEventListener('mousemove', doResize)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.cursor = 'default'
}
</script>

<template>
  <aside class="sidebar" :style="{ width: `${width}px` }">
    <!-- Hidden file input for fallback mode -->
    <input
      ref="fileInputRef"
      type="file"
      accept=".json"
      multiple
      style="display: none"
      @change="handleFileChange"
    />

    <div class="sidebar-header">
      <span class="sidebar-title">JSON Files</span>
      <button
        class="open-folder-btn"
        :title="useFallback ? 'Select JSON Files' : 'Open Local Folder'"
        @click="useFallback ? triggerFileInput() : handleOpenClick()"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <span>Open</span>
      </button>
    </div>

    <div class="file-list">
      <div v-if="files.length === 0" class="empty-state">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <div class="empty-text">
          <template v-if="useFallback">
            Click "Open" to select JSON files
          </template>
          <template v-else>
            Click "Open" to select your <code>jsons/</code> folder
          </template>
        </div>
      </div>

      <div
        v-for="file in files"
        :key="file"
        :class="['file-item', { open: openDocs.some(d => d.filename === file) }]"
        @click="emit('openFile', file)"
      >
        <svg class="file-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
        </svg>
        <span class="file-name">{{ file }}</span>
      </div>
    </div>

    <div class="resize-handle" @mousedown="startResize"></div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  background: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
}

.sidebar-header {
  padding: 12px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.open-folder-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--color-accent);
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary);
  }
}

.file-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  color: var(--color-text-muted);
  gap: 8px;
  text-align: center;

  svg {
    opacity: 0.5;
  }

  code {
    color: var(--color-text-secondary);
    font-family: var(--font-mono);
  }
}

.empty-text {
  font-size: 12px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: var(--color-text-muted);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-text-primary);

    .file-icon {
      color: var(--color-accent);
    }
  }

  &.open {
    color: var(--color-accent-light);
  }
}

.file-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  z-index: 50;

  &:hover {
    background: rgba(59, 130, 246, 0.5);
  }
}
</style>
