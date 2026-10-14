import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@': new URL('./src/typescript', import.meta.url).pathname,
      '@data': new URL('./src/typescript/data', import.meta.url).pathname,
    },
  },
});
