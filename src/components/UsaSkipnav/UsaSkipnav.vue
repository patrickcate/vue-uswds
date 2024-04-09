<script setup>
import BaseLink from '@/components/BaseLink'

// Un-used `props` variable needed for code coverage to be instrumented.
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  anchor: {
    type: String,
    required: true,
    validator(anchor) {
      const isValidAnchor = anchor.startsWith('#')

      if (!isValidAnchor) {
        console.warn(
          `The anchor prop is required and must start with a "#" symbol`,
        )
      }

      return isValidAnchor
    },
  },
})
</script>

<template>
  <BaseLink :href="anchor" class="usa-skipnav"
    ><slot>Skip to main content</slot></BaseLink
  >
</template>
