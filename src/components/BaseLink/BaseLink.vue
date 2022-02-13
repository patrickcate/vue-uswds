<script>
import { ROUTER_COMPONENT_NAME } from '@/utils/constants.js'

export default {
  name: 'BaseLink',
  inject: {
    globalRouterComponentName: {
      from: 'vueUswds.routerComponentName',
      default: ROUTER_COMPONENT_NAME,
    },
  },
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: '',
    },
    to: {
      type: [String, Object],
      default: '',
    },
    routerComponentName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // Router link checks here instead of computed to avoid Vue warning
      // about $nuxt and $router not being defined on the instance when they
      // are not installed.
      isNuxt: this?.$nuxt,
      isVueRouter: this?.$router,
    }
  },
  computed: {
    isExternalLink() {
      return (
        !!this.href ||
        (typeof this.to === 'string' && this.to.startsWith('http'))
      )
    },
    linkComponent() {
      if (this.routerComponentName) {
        return this.routerComponentName
      }

      if (this.globalRouterComponentName) {
        return this.globalRouterComponentName
      }

      if (this.isNuxt) {
        return 'nuxt-link'
      }

      if (this.isVueRouter) {
        return 'router-link'
      }

      return 'a'
    },
  },
}
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="href"><slot></slot></a>
  <component :is="linkComponent" v-else v-bind="$attrs" :to="to"
    ><slot></slot
  ></component>
</template>
