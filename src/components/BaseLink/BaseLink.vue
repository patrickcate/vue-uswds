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
      return this.$nuxt ? 'nuxt-link' : 'router-link'
    },
  },
}
</script>

<template>
  <a v-if="isExternalLink" v-bind="$attrs" :href="href"><slot></slot></a>
  <component :is="linkComponent" v-else :to="to" v-bind="$attrs"
    ><slot></slot
  ></component>
</template>
