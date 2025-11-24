import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nexus/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./2.src', import.meta.url))
    }
  },
  server: {
    port: 3001,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild'
  }
})
