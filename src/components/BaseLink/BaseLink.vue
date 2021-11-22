<script>
export default {
  name: 'BaseLink',
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
      globalRouterComponentName: this?.vueUswds?.routerComponentName,
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
        return (
          this.routerComponentName || this?.$vueUswds?.globalRouterComponentName
        )
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
  <a v-if="isExternalLink" :href="href" v-bind="$attrs"><slot></slot></a>
  <component :is="linkComponent" v-else :to="to" v-bind="$attrs"
    ><slot></slot
  ></component>
</template>
