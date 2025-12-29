// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  css: [
    '~/assets/scss/main.scss'
  ],

  // Enable static file:// protocol support
  ssr: false,

  app: {
    baseURL: './',
    buildAssetsDir: '_nuxt/',
  },

  experimental: {
    appManifest: false,
  },

  router: {
    options: {
      hashMode: true
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    },
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
          manualChunks: undefined
        }
      }
    }
  },

  compatibilityDate: '2024-01-29'
})
