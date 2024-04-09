import { getCurrentInstance } from 'vue'
import { kebabCase } from '@/utils/common.js'
import { ID_PREFIX } from '@/utils/constants.js'

const idRegistry = {}

// Adapted from:
// https://github.com/wearebraid/vue-formulate/blob/master/src/Formulate.js
export function nextId(componentName = '') {
  const vm = getCurrentInstance()
  const route = vm?.appContext?.config?.globalProperties?.$route

  const pathPrefix =
    route?.path && kebabCase(route.path) ? kebabCase(route.path) : 'global'

  if (!idRegistry[pathPrefix]) {
    idRegistry[pathPrefix] = 0
  }

  return `${ID_PREFIX}${pathPrefix}-${kebabCase(componentName)}-${++idRegistry[
    pathPrefix
  ]}`
}
