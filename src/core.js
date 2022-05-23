import { version } from '../package.json'
import { nextId } from '@/utils/unique-id.js'
import {
  PREFIX_SEPARATOR,
  GRID_NAMESPACE,
  UTILITY_NAMESPACE,
  IMAGE_PATH,
  SVG_SPRITE_PATH,
  ROUTER_COMPONENT_NAME,
  MOBILE_MENU_BREAKPOINT,
  FOOTER_NAV_COLLAPSIBLE_BREAKPOINT,
} from '@/utils/constants.js'

export default {
  install: (app, options) => {
    const customOptions = options || {}

    const vueUswdsOptions = {
      prefixSeparator: PREFIX_SEPARATOR,
      gridNamespace: GRID_NAMESPACE,
      utilityNamespace: UTILITY_NAMESPACE,
      imagePath: IMAGE_PATH,
      svgSpritePath: SVG_SPRITE_PATH,
      routerComponentName: ROUTER_COMPONENT_NAME,
      mobileMenuBreakpoint: MOBILE_MENU_BREAKPOINT,
      footerNavBigBreakpoint: FOOTER_NAV_COLLAPSIBLE_BREAKPOINT,
      ...customOptions,
      version: version,
    }

    if (!app.config.globalProperties.$vueUswds) {
      app.config.globalProperties.$vueUswds = vueUswdsOptions
    }

    app.provide('vueUswds', vueUswdsOptions)
    app.provide('nextId', nextId)
  },
}
