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
    inlineSSRStyles: true,
    payloadExtraction: false,
    renderJsonPayloads: false,
    appManifest: false
  },

  app: {
    baseURL: './',
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
        {
          innerHTML: `var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
(function() {
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js'; s.parentNode.insertBefore(g,s);
})();`
        }
      ]
    }
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    build: {
      cssCodeSplit: false,
      target: 'es2015',
      rollupOptions: {
        output: {
          format: 'iife',
          name: 'MyProfileApp',
          inlineDynamicImports: true,
          entryFileNames: 'app.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
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
