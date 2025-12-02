<script setup lang="ts">
defineProps<{
  streamUrl: string
}>()

const emit = defineEmits<{
  close: []
}>()

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <div class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-content">
      <button class="close-btn" @click="emit('close')">✕ Close</button>
      <div class="video-container">
        <iframe
          :src="streamUrl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #000;
  width: 90%;
  max-width: 1000px;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 0 30px rgba(229, 9, 20, 0.3);
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border: none;
  padding: 5px 10px;

  &:hover {
    color: var(--accent-color);
  }
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; // 16:9
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
