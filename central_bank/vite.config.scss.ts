import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  root: '.',
  publicDir: false,
  plugins: [viteSingleFile()],
  build: {
    outDir: 'dist_scss',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index_scss.html'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})
