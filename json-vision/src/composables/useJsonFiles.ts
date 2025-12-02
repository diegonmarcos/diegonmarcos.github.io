import { ref, computed, watch } from 'vue'
import type { OpenDoc, Notification } from '@/types/json'
import { useDebounce } from './useDebounce'

export function useJsonFiles() {
  const files = ref<string[]>([])
  const openDocs = ref<OpenDoc[]>([])
  const activeDocIndex = ref(-1)
  const input = ref('')
  const parsedData = ref<unknown>(null)
  const error = ref<string | null>(null)
  const notification = ref<Notification | null>(null)
  const isSaving = ref(false)

  const dirHandle = ref<FileSystemDirectoryHandle | null>(null)
  const fileHandles: Record<string, FileSystemFileHandle> = {}

  const debouncedInput = useDebounce(input, 1000)

  const activeDoc = computed(() =>
    activeDocIndex.value >= 0 ? openDocs.value[activeDocIndex.value] : null
  )

  const showNotification = (msg: string, isError = false) => {
    notification.value = { msg, isError }
    setTimeout(() => notification.value = null, 3000)
  }

  const handleOpenFolder = async () => {
    try {
      const handle = await window.showDirectoryPicker({ mode: 'readwrite' })
      dirHandle.value = handle
      await refreshFileList(handle)
      showNotification('Folder opened')
    } catch (err) {
      console.error(err)
    }
  }

  const refreshFileList = async (handle: FileSystemDirectoryHandle) => {
    const newFiles: string[] = []
    Object.keys(fileHandles).forEach(k => delete fileHandles[k])

    const scanDirectory = async (dirHandle: FileSystemDirectoryHandle, pathPrefix: string, depth: number) => {
      if (depth > 4) return

      for await (const entry of dirHandle.values()) {
        if (entry.kind === 'file' && entry.name.endsWith('.json')) {
          const filePath = pathPrefix + entry.name
          newFiles.push(filePath)
          fileHandles[filePath] = entry as FileSystemFileHandle
        } else if (entry.kind === 'directory') {
          await scanDirectory(entry as FileSystemDirectoryHandle, pathPrefix + entry.name + '/', depth + 1)
        }
      }
    }

    await scanDirectory(handle, '', 1)
    files.value = newFiles.sort()
  }

  const handleOpenFile = async (filename: string) => {
    const existingIndex = openDocs.value.findIndex(d => d.filename === filename)
    if (existingIndex >= 0) {
      activeDocIndex.value = existingIndex
      return
    }

    try {
      const handle = fileHandles[filename]
      if (!handle) throw new Error('File handle not found')

      const file = await handle.getFile()
      const text = await file.text()

      const newDoc: OpenDoc = { filename, content: text, originalContent: text }
      openDocs.value.push(newDoc)
      activeDocIndex.value = openDocs.value.length - 1
    } catch (e) {
      showNotification('Failed to read file', true)
    }
  }

  const handleCloseTab = (index: number) => {
    openDocs.value.splice(index, 1)
    if (activeDocIndex.value >= index) {
      activeDocIndex.value = Math.max(0, activeDocIndex.value - 1)
    }
    if (openDocs.value.length === 0) {
      activeDocIndex.value = -1
      input.value = ''
      parsedData.value = null
    }
  }

  const handleSaveFile = async (contentToSave: string, silent = false) => {
    if (activeDocIndex.value === -1) return
    const doc = openDocs.value[activeDocIndex.value]
    const handle = fileHandles[doc.filename]

    if (!handle) {
      if (!silent) showNotification('Cannot save: File handle lost', true)
      return
    }

    isSaving.value = true
    try {
      const writable = await handle.createWritable()
      await writable.write(contentToSave)
      await writable.close()

      openDocs.value[activeDocIndex.value].originalContent = contentToSave
      if (!silent) showNotification(`Saved ${doc.filename}`)
    } catch (e) {
      console.error(e)
      if (!silent) showNotification('Save error', true)
    } finally {
      isSaving.value = false
    }
  }

  // Sync active doc to input
  watch(activeDocIndex, (newIndex) => {
    if (newIndex >= 0 && openDocs.value[newIndex]) {
      input.value = openDocs.value[newIndex].content
    } else if (newIndex === -1) {
      input.value = ''
      parsedData.value = null
    }
  })

  // Parse input
  watch(input, (newInput) => {
    try {
      if (!newInput.trim()) {
        parsedData.value = null
        error.value = null
        return
      }
      parsedData.value = JSON.parse(newInput)
      error.value = null
    } catch (err) {
      error.value = (err as Error).message
    }
  })

  // Auto-save
  watch(debouncedInput, (newValue) => {
    if (activeDocIndex.value !== -1 && openDocs.value[activeDocIndex.value]) {
      const doc = openDocs.value[activeDocIndex.value]
      if (newValue !== doc.originalContent && !error.value) {
        handleSaveFile(newValue, true)
      }
    }
  })

  const updateInput = (value: string) => {
    input.value = value
    if (activeDocIndex.value >= 0) {
      openDocs.value[activeDocIndex.value].content = value
    }
  }

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input.value)
      updateInput(JSON.stringify(parsed, null, 2))
      showNotification('Formatted JSON')
    } catch (e) {
      showNotification('Cannot format: Invalid JSON', true)
    }
  }

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input.value)
      updateInput(JSON.stringify(parsed))
      showNotification('Minified JSON')
    } catch (e) {
      showNotification('Cannot minify: Invalid JSON', true)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(input.value)
    showNotification('Raw JSON copied')
  }

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path)
    showNotification(`Path copied: ${path}`)
  }

  return {
    files,
    openDocs,
    activeDocIndex,
    activeDoc,
    input,
    parsedData,
    error,
    notification,
    isSaving,
    handleOpenFolder,
    handleOpenFile,
    handleCloseTab,
    handleSaveFile,
    updateInput,
    handleFormat,
    handleMinify,
    handleCopy,
    handleCopyPath,
    showNotification
  }
}
