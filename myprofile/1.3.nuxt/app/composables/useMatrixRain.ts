// ==============================================
// MATRIX RAIN COMPOSABLE
// ==============================================

export const useMatrixRain = () => {
  const initMatrixRain = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const characters = '01'
    const alphabet = characters.split('')
    const fontSize = 12
    const columns = canvas.width / fontSize
    const rainDrops = Array(Math.ceil(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0f0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)]
        ctx.globalAlpha = Math.random() > 0.5 ? 1 : 0.5
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
      ctx.globalAlpha = 1
      requestAnimationFrame(draw)
    }

    draw()
  }

  const handleResize = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  return {
    initMatrixRain,
    handleResize
  }
}
