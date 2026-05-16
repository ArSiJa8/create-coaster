// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,

  css: [
    '~/assets/css/main.css',
    '~/assets/css/color-palette.css'
  ],

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
    '@sentry/nuxt/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo'
  ],

  site: {
    url: 'https://coasters-simulated.com', // Replace with actual URL if known
    name: 'Create Coasters Simulated',
    description: 'Build Theme Parks with realistic physics from Create Aeronautics.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      templateParams: {
        separator: '|',
      },
    },
  },

  sentry: {
    org: 'arsija-studios',
    project: 'coasters-simulated',
    dsn: 'https://3358303a5e858c5fa195bb959676ea0f@o4511388675866624.ingest.de.sentry.io/4511398963118160'
  },

  sourcemap: {
    client: 'hidden'
  },

  colorMode: {
      preference: 'dark',
      fallback: 'dark',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
    }

})