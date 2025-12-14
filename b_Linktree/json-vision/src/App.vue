<script setup lang="ts">
import { ref } from 'vue'
import type { ViewMode, LayoutMode } from '@/types/json'
import { useJsonFiles } from '@/composables/useJsonFiles'
import { setValueByPath } from '@/composables/useGraph'
import AppHeader from '@/components/AppHeader.vue'
import FileSidebar from '@/components/FileSidebar.vue'
import JsonEditor from '@/components/JsonEditor.vue'
import GraphView from '@/components/GraphView.vue'
import TreeView from '@/components/TreeView.vue'

const {
  files, openDocs, activeDocIndex, input, parsedData, error, notification, isSaving,
  handleOpenFolder, handleOpenFile, handleCloseTab, handleSaveFile,
  updateInput, handleFormat, handleMinify, handleCopy, handleCopyPath, showNotification
} = useJsonFiles()

const viewMode = ref<ViewMode>('graph')
const layoutMode = ref<LayoutMode>('vertical')
const searchTerm = ref('')
const sidebarWidth = ref(256)

const handleEdit = (path: string, key: string, value: unknown) => {
  if (!parsedData.value) return
  try {
    const updatedData = setValueByPath(parsedData.value, path, key, value)
    updateInput(JSON.stringify(updatedData, null, 2))
    showNotification(`Updated ${key}`)
  } catch (e) {
    showNotification('Failed to update value', true)
  }
}
</script>

<template>
  <div class="app">
    <AppHeader
      :open-docs="openDocs"
      :active-doc-index="activeDocIndex"
      :is-saving="isSaving"
      @update:active-doc-index="activeDocIndex = $event"
      @close-tab="handleCloseTab"
      @save="handleSaveFile(input)"
    />

    <div class="main-content">
      <FileSidebar
        :files="files"
        :open-docs="openDocs"
        :width="sidebarWidth"
        @open-folder="handleOpenFolder"
        @open-file="handleOpenFile"
        @update:width="sidebarWidth = $event"
      />

      <main class="workspace">
        <div v-if="activeDocIndex === -1" class="empty-workspace">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          <p class="empty-title">No file open</p>
          <p class="empty-subtitle">Select a file from the sidebar to start editing</p>
        </div>

        <template v-else>
          <JsonEditor
            v-show="viewMode === 'editor' || viewMode === 'split'"
            :class="['editor-pane', { 'full-width': viewMode === 'editor', 'half-width': viewMode === 'split' }]"
            :model-value="input"
            :error="error"
            @update:model-value="updateInput"
            @format="handleFormat"
            @minify="handleMinify"
            @copy="handleCopy"
          />

          <div :class="['visualizer-pane', { 'full-width': viewMode === 'visual' || viewMode === 'graph', 'half-width': viewMode === 'split' }]">
            <div class="visualizer-toolbar">
              <div class="view-switcher">
                <button :class="{ active: viewMode === 'split' }" @click="viewMode = 'split'">Split</button>
                <button :class="{ active: viewMode === 'graph' }" @click="viewMode = 'graph'">Graph</button>
                <button :class="{ active: viewMode === 'visual' }" @click="viewMode = 'visual'">Tree</button>
              </div>
              <input v-if="viewMode !== 'graph'" v-model="searchTerm" type="text" placeholder="Filter..." class="filter-input"/>
            </div>

            <div class="visualizer-content">
              <div v-if="!parsedData" class="invalid-json">Invalid JSON</div>
              <GraphView
                v-else-if="viewMode === 'graph'"
                :data="parsedData"
                :layout-mode="layoutMode"
                @copy-path="handleCopyPath"
                @edit="handleEdit"
                @update:layout-mode="layoutMode = $event"
              />
              <TreeView
                v-else
                :data="parsedData"
                :search-term="searchTerm"
                @copy-path="handleCopyPath"
                @edit="handleEdit"
              />
            </div>
          </div>
        </template>
      </main>
    </div>

    <div v-if="notification" :class="['notification', { error: notification.isError }]">
      <svg v-if="notification.isError" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20,6 9,17 4,12" />
      </svg>
      <span>{{ notification.msg }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app { display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
.main-content { flex: 1; display: flex; overflow: hidden; }
.workspace { flex: 1; display: flex; overflow: hidden; position: relative; }

.empty-workspace {
  width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;
  color: var(--color-text-muted); background: var(--color-bg-primary);
  svg { margin-bottom: 16px; opacity: 0.2; }
  .empty-title { font-size: 18px; font-weight: 500; }
  .empty-subtitle { font-size: 14px; }
}

.editor-pane { display: flex; flex-direction: column; transition: width 0.3s; &.full-width { width: 100%; } &.half-width { width: 50%; } }
.visualizer-pane { display: flex; flex-direction: column; background: rgba(15, 23, 42, 0.3); transition: width 0.3s; &.full-width { width: 100%; } &.half-width { width: 50%; } }

.visualizer-toolbar {
  background: rgba(15, 23, 42, 0.5); padding: 8px; border-bottom: 1px solid var(--color-border);
  display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;
}

.view-switcher {
  display: flex; background: var(--color-bg-tertiary); border-radius: 4px; padding: 2px;
  button {
    padding: 4px 8px; font-size: 10px; border: none; border-radius: 4px; cursor: pointer;
    background: transparent; color: var(--color-text-muted);
    &.active { background: var(--color-accent); color: white; }
  }
}

.filter-input {
  background: var(--color-bg-primary); border: 1px solid var(--color-border); border-radius: 4px;
  padding: 4px 8px; font-size: 12px; width: 96px; color: var(--color-text-secondary); outline: none;
  transition: width 0.2s;
  &:focus { width: 128px; }
}

.visualizer-content { flex: 1; overflow: hidden; background: var(--color-bg-primary); position: relative; }
.invalid-json { height: 100%; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); font-size: 14px; }

.notification {
  position: fixed; bottom: 24px; right: 24px; padding: 8px 16px; border-radius: 8px;
  backdrop-filter: blur(8px); border: 1px solid; display: flex; align-items: center; gap: 8px;
  font-size: 14px; font-weight: 500; z-index: 100; animation: slide-up 0.2s ease-out;
  background: rgba(23, 37, 84, 0.8); border-color: rgba(30, 64, 175, 0.5); color: #bfdbfe;
  &.error { background: rgba(127, 29, 29, 0.8); border-color: rgba(185, 28, 28, 0.5); color: #fecaca; }
}
</style>
