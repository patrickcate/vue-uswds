<script setup>
import BaseHeading from '@/components/BaseHeading'
import BaseLink from '@/components/BaseLink'

defineProps({
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
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
