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
  fetchUrl: [url: string]
  'update:width': [value: number]
  collapse: []
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const apiUrl = ref('')
const isFetching = ref(false)

const handleFetchUrl = async () => {
  const url = apiUrl.value.trim()
  if (!url) return
  isFetching.value = true
  emit('fetchUrl', url)
  setTimeout(() => { isFetching.value = false }, 2000)
}

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
      <div class="sidebar-title-row">
        <span class="sidebar-title">JSON Files</span>
        <button class="collapse-btn" title="Collapse sidebar" @click="emit('collapse')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div class="open-buttons">
        <button class="open-btn" title="Select JSON Files" @click="triggerFileInput()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
          </svg>
          <span>File</span>
        </button>
        <button :class="['open-btn', { disabled: useFallback }]" :title="useFallback ? 'Folder API blocked by browser' : 'Open Local Folder'" @click="handleOpenClick()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          <span>Folder</span>
        </button>
      </div>
      <div class="fetch-row">
        <input
          v-model="apiUrl"
          class="fetch-input"
          type="url"
          placeholder="https://api.example.com/data.json"
          @keydown.enter="handleFetchUrl"
        />
        <button class="fetch-btn" :disabled="!apiUrl.trim() || isFetching" title="Fetch JSON from endpoint" @click="handleFetchUrl">
          <svg v-if="!isFetching" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
          </svg>
          <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
            <polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="file-list">
      <div v-if="files.length === 0" class="empty-state">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <div class="empty-text">
          Open a file or folder to start
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
  padding: 8px 12px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sidebar-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.collapse-btn {
  background: none; border: none; color: var(--color-text-muted);
  cursor: pointer; padding: 2px; border-radius: 4px;
  display: flex; align-items: center; justify-content: center;
  &:hover { color: white; background: var(--color-bg-tertiary); }
}

.sidebar-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.open-buttons {
  display: flex;
  gap: 4px;
}

.open-btn {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px 6px;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--color-accent);
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background: var(--color-bg-tertiary);
  }

  &.disabled {
    opacity: 0.35;
    cursor: not-allowed;
    text-decoration: line-through;
  }
}

.fetch-row {
  display: flex; gap: 4px;
}
.fetch-input {
  flex: 1; min-width: 0;
  background: var(--color-bg-primary); border: 1px solid var(--color-border); border-radius: 4px;
  padding: 4px 6px; font-size: 10px; color: var(--color-text-secondary); outline: none;
  &:focus { border-color: var(--color-accent); }
  &::placeholder { color: var(--color-text-muted); opacity: 0.6; }
}
.fetch-btn {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border: 1px solid var(--color-border); border-radius: 4px;
  background: var(--color-bg-tertiary); color: var(--color-accent); cursor: pointer;
  &:hover:not(:disabled) { background: var(--color-accent); color: white; }
  &:disabled { opacity: 0.35; cursor: not-allowed; }
  .spin { animation: spin 1s linear infinite; }
}
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

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
