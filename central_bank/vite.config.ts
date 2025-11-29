import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 8011,
    open: false
  }
})
