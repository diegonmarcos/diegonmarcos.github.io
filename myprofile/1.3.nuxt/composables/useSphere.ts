// ==============================================
// SPHERE INTERACTION COMPOSABLE
// ==============================================

import type { DataItem, SpherePoint, Rotation, MousePosition } from '~/types'

export const useSphere = () => {
  const rotation = reactive<Rotation>({ x: 0, y: 0 })
  const isDragging = ref(false)
  const lastMouse = reactive<MousePosition>({ x: 0, y: 0 })

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

  const onMouseDown = (e: MouseEvent) => {
    isDragging.value = true
    lastMouse.x = e.clientX
    lastMouse.y = e.clientY
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return

    const deltaX = e.clientX - lastMouse.x
    const deltaY = e.clientY - lastMouse.y

    rotation.x -= deltaY * 0.5
    rotation.y += deltaX * 0.5

    lastMouse.x = e.clientX
    lastMouse.y = e.clientY
  }

  const onMouseUp = () => {
    isDragging.value = false
  }

  return {
    rotation,
    isDragging,
    calculateSpherePoints,
    onMouseDown,
    onMouseMove,
    onMouseUp
  }
}
