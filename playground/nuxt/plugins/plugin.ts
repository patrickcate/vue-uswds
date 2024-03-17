import { defineNuxtPlugin } from '#app'
import VueUswds from 'vue-uswds/core'
import { NuxtLink } from '#components'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueUswds, {
    routerComponentName: NuxtLink,
  })
})
