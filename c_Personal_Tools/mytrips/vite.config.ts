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
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        roadtrip: resolve(__dirname, 'src/myroadtrip.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue': resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/settings/_variables.scss"; @import "@/scss/tools/_mixins.scss";`
      }
    }
  },
  server: {
    port: 8018
  }
});
