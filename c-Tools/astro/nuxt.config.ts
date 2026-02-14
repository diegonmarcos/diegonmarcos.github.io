// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: './',
    buildAssetsDir: '_nuxt/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔮</text></svg>' }
      ],
      script: [
        {
          children: `var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
(function() {
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js'; s.parentNode.insertBefore(g,s);
})();`
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  css: [
    '~/assets/scss/main.scss'
  ],

  // Enable static file:// protocol support
  ssr: false,

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
