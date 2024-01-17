// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'nuxt-og-image',
    'nuxt-mail'
  ],
  site: {
    url: 'https://trust-ls.fr',
    name: 'Cabinet de conseil et de recrutement TRUST Life Scicences',
    description: 'Nous sommes un cabinet de conseil et de recrutement spécialisé dans l\'industrie de la santé: Pharmaceutique, Dispositifs Médicaux, Biotechnologie et Cosmétique.',
    defaultLocale: 'fr',
  },
  mail: {
    message: {
      to: 'leproux.baptiste@gmail.com',
    },
    smtp: {
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'f0f02e8df7444c',
        pass: 'ed096af8384d96wrong'
      }
    },
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi'],
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
