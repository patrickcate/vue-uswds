<script setup>
import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  routerComponentName: {
    type: [String, Object],
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  heading: {
    type: String,
    default: '',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        link: [],
      }
    },
  },
})
</script>

<template>
  <BaseHeading :tag="headingTag" class="usa-collection__heading"
    ><BaseLink
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      class="usa-link"
      :class="customClasses?.link"
      ><slot>{{ heading }}</slot></BaseLink
    ></BaseHeading
  >
</template>
