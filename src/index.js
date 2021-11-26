import pkg from '../package.json'
import { nextId } from '@/utils/unique-id.js'

export default {
  install: (app, options) => {
    const customOptions = options || {}

    const vueUswdsOptions = {
      prefixSeparator: ':',
      gridNamespace: 'grid-',
      utilityNamespace: 'u-',
      imagePath: '/assets/img',
      svgSpritePath: '/assets/img/sprite.svg',
      routerComponentName: null,
      ...customOptions,
      version: pkg.version,
    }

    if (!app.config.globalProperties.$vueUswds) {
      app.config.globalProperties.$vueUswds = vueUswdsOptions
    }

    app.provide('vueUswds', vueUswdsOptions)
    app.provide('nextId', nextId)
  },
}
