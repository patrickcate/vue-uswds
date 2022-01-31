<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'medium',
    validator(variant) {
      const isValidVariant = ['big', 'medium', 'slim'].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid footer variant`)
      }

      return isValidVariant
    },
  },
  jumpLinkText: {
    type: String,
    default: 'Return to top',
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

const classes = computed(() => [
  {
    'usa-footer--big': props.variant === 'big',
  },
  {
    'usa-footer--medium': props.variant === 'medium',
  },
  {
    'usa-footer--slim': props.variant === 'slim',
  },
])
</script>

<template>
  <footer class="usa-footer" :class="classes">
    <div
      class="grid-container usa-footer__return-to-top"
      :class="customClasses?.container"
    >
      <slot name="jump-link"
        ><a href="#">{{ jumpLinkText }}</a></slot
      >
    </div>
    <slot></slot>
  </footer>
</template>
