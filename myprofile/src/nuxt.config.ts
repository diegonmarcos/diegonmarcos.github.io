// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  nitro: {
    preset: 'github-pages',
    output: {
      dir: '../dist',
      publicDir: '../dist'
    },
    inlineDynamicImports: true
  },

  experimental: {
    inlineSSRStyles: true
  },

  app: {
    baseURL: '/myprofile/',
    head: {
      title: 'DIEGO N. MARCOS // PROFILE',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cyberpunk Data Stream Portfolio' },
        { property: 'og:title', content: 'DIEGO N. MARCOS // NETWORK' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Rajdhani:wght@600;700&display=swap'
        }
      ],
      script: [
        { src: '/myprofile/matomo.js', defer: true }
      ]
    }
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          inlineDynamicImports: true
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/abstracts/variables" as *;
            @use "~/assets/scss/abstracts/mixins" as *;
          `
        }
      }
    }
  },

  modules: ['@nuxt/icon'],

  icon: {
    serverBundle: 'remote'
  },

  typescript: {
    strict: true
  }
})
