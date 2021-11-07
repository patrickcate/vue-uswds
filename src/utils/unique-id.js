const idPrefix = 'vuswds-id-'
const idRegistry = {}

// Adapted from:
// https://github.com/wearebraid/vue-formulate/blob/master/src/Formulate.js
export function nextId(vm) {
  const path = vm?.$route?.path ?? false
  const pathPrefix = path ? path.replace(/[/\\.\s]/g, '-') : 'global'

  if (!idRegistry[pathPrefix]) {
    idRegistry[pathPrefix] = 0
  }

  return `${idPrefix}${pathPrefix}-${++idRegistry[pathPrefix]}`
}
