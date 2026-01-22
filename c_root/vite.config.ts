import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue()
  ],
  base: './',  // Relative paths for static file serving
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,  // Don't inline assets as base64
    rollupOptions: {
      output: {
        format: 'iife',  // IIFE format instead of ES modules (for plain <script> tag)
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        inlineDynamicImports: true  // Bundle everything into single JS file
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:math";'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@shaders': resolve(__dirname, 'src/shaders')
    }
  },
  // Use global node_modules
  cacheDir: '../node_modules/.vite'
});
