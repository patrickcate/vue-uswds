// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@uswds/uswds@3.6.0/dist/css/uswds.min.css',
        },
      ],
    },
  },
  modules: ['./modules/vue-uswds'],
})
