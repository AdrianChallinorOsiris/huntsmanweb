// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-gtag'],

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || 'G-XXXXXXXXXX',
    enabled: !!process.env.NUXT_PUBLIC_GTAG_ID,
  },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'The Huntsman Sports Ground & Moorehead Way Development | Community Information',
      meta: [
        {
          name: 'description',
          content:
            'Community information and resources about The Huntsman Sports Ground and Moorehead Way development. Objections, documents, and updates.',
        },
        {
          name: 'keywords',
          content:
            'Huntsman Sports Ground, Moorehead Way, planning objection, housing development, community cator, bcer, bcerl, brooklands park, manor way, blackheath',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    smtpUser: '',
    smtpPassword: '',
    joinWhatsappRecipientEmail: 'postmaster@osiris.co.uk',
  },

  site: {
    url: 'https://thehuntsman.org.uk',
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/about-the-proposals/**': { prerender: true },
    '/contact': { prerender: true },
    '/documents': { prerender: true },
    '/history-of-the-site': { prerender: true },
    '/letters': { prerender: true },
    '/news': { prerender: true },
    '/news/**': { prerender: true },
    '/why-object': { prerender: true },
  },
})
