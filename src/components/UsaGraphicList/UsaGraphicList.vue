<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'dark',
    validator(variant) {
      const isValidVariant = ['light', 'dark'].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid graphic list variant`)
      }

      return isValidVariant
    },
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        container: [],
      }
    },
  },
})

const classes = computed(() => {
  return [
    { 'usa-section--dark': props.variant === 'dark' },
    { 'usa-section--light': props.variant === 'light' },
  ]
})
</script>

<template>
  <section class="usa-graphic-list usa-section" :class="classes">
    <div class="grid-container" :class="customClasses?.container">
      <slot :variant="variant"></slot>
    </div>
  </section>
</template>
