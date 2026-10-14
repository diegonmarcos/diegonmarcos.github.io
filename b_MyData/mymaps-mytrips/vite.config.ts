// Vite configuration for MyTrips
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  base: './',
  cacheDir: resolve(__dirname, 'node_modules/.vite'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/_shared" as *;`
      }
    }
  },
  server: {
    port: 8018
  }
});
