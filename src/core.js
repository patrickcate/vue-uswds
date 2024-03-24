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
    const customOptions = options ?? {}

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

    app.provide('vueUswds.prefixSeparator', vueUswdsOptions.prefixSeparator)
    app.provide('vueUswds.gridNamespace', vueUswdsOptions.gridNamespace)
    app.provide('vueUswds.utilityNamespace', vueUswdsOptions.utilityNamespace)
    app.provide('vueUswds.imagePath', vueUswdsOptions.imagePath)
    app.provide('vueUswds.svgSpritePath', vueUswdsOptions.svgSpritePath)
    app.provide(
      'vueUswds.routerComponentName',
      vueUswdsOptions.routerComponentName,
    )
    app.provide(
      'vueUswds.mobileMenuBreakpoint',
      vueUswdsOptions.mobileMenuBreakpoint,
    )
    app.provide(
      'vueUswds.footerNavBigBreakpoint',
      vueUswdsOptions.footerNavBigBreakpoint,
    )
    app.provide('vueUswds.version', vueUswdsOptions.version)
    app.provide('nextId', nextId)
  },
}
