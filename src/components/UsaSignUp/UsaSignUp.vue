<script setup>
import BaseHeading from '@/components/BaseHeading'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  heading: {
    type: String,
    default: 'Sign up',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        heading: [],
      }
    },
  },
})
</script>

<template>
  <div class="usa-sign-up">
    <BaseHeading
      :tag="headingTag"
      class="usa-sign-up__heading"
      :class="customClasses?.heading"
      ><slot name="heading">{{ heading }}</slot></BaseHeading
    >
    <slot></slot>
  </div>
</template>
