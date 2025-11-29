// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'ALEX_NOVA // VUE_OS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cyberpunk Data Stream Portfolio' },
        { property: 'og:title', content: 'ALEX_NOVA // NETWORK' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Rajdhani:wght@600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
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

  modules: [],

  typescript: {
    strict: true
  }
})
