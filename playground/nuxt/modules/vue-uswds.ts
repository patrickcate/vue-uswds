import { addComponent, defineNuxtModule } from '@nuxt/kit'
import * as components from 'vue-uswds/components'

export default defineNuxtModule({
  setup() {
    const componentNames = Object.keys(components)

    componentNames.forEach(componentName => {
      addComponent({
        name: componentName,
        export: componentName,
        filePath: 'vue-uswds/components',
      })
    })
  },
})
