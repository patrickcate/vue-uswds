<script setup>
import BaseLink from '@/components/BaseLink'

defineProps({
  anchor: {
    type: String,
    required: true,
    validator(anchor) {
      const isValidAnchor = anchor.startsWith('#')

      if (!isValidAnchor) {
        console.warn(
          `The anchor prop is required and must start with a "#" symbol`
        )
      }

      return isValidAnchor
    },
  },
})
</script>

<template>
  <BaseLink :href="anchor" class="usa-skipnav"><slot></slot></BaseLink>
</template>
