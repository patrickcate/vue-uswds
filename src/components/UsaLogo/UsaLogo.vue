<script setup>
import BaseLink from '@/components/BaseLink'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '/',
  },
  routerComponentName: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        text: [],
        link: [],
      }
    },
  },
})
</script>

<template>
  <div class="usa-logo"
    ><em class="usa-logo__text" :class="customClasses?.text"
      ><BaseLink
        :href="href"
        :to="to"
        :router-component-name="routerComponentName"
        :title="title"
        :class="customClasses?.link"
        ><slot>{{ title }}</slot></BaseLink
      ></em
    ></div
  >
</template>
