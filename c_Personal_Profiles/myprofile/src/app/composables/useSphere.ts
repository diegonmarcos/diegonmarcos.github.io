// ==============================================
// SPHERE INTERACTION COMPOSABLE
// ==============================================

import type { DataItem, SpherePoint, Rotation, MousePosition } from '~/types'

export const useSphere = () => {
  const rotation = reactive<Rotation>({ x: 0, y: 0 })
  const isDragging = ref(false)
  const lastPosition = reactive<MousePosition>({ x: 0, y: 0 })

  const calculateSpherePoints = (data: DataItem[]): SpherePoint[] => {
    const phi = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    return data.map((item, i, arr) => {
      const y = 1 - (i / (arr.length - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = phi * i
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      return {
        ...item,
        pos: [x, y, z] as [number, number, number]
      }
    })
  }

  // Mouse events
  const onMouseDown = (e: MouseEvent) => {
    isDragging.value = true
    lastPosition.x = e.clientX
    lastPosition.y = e.clientY
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return

    const deltaX = e.clientX - lastPosition.x
    const deltaY = e.clientY - lastPosition.y

    rotation.x -= deltaY * 0.5
    rotation.y += deltaX * 0.5

    lastPosition.x = e.clientX
    lastPosition.y = e.clientY
  }

  const onMouseUp = () => {
    isDragging.value = false
  }

  // Touch events for mobile
  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      isDragging.value = true
      lastPosition.x = e.touches[0].clientX
      lastPosition.y = e.touches[0].clientY
    }
  }

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging.value || e.touches.length !== 1) return

    e.preventDefault() // Prevent scroll while dragging

    const deltaX = e.touches[0].clientX - lastPosition.x
    const deltaY = e.touches[0].clientY - lastPosition.y

    rotation.x -= deltaY * 0.5
    rotation.y += deltaX * 0.5

    lastPosition.x = e.touches[0].clientX
    lastPosition.y = e.touches[0].clientY
  }

  const onTouchEnd = () => {
    isDragging.value = false
  }

  return {
    rotation,
    isDragging,
    calculateSpherePoints,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}
