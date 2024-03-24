<script setup>
import { computed, inject } from 'vue'
import { GRID_NAMESPACE } from '@/utils/constants.js'

const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

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

const classes = computed(() => [
  {
    'usa-section--dark': props.variant === 'dark',
    'usa-section--light': props.variant === 'light',
  },
])

const containerClasses = computed(() =>
  props.customClasses?.container?.length
    ? props.customClasses.container
    : [`${gridNamespace}container`],
)
</script>

<template>
  <section class="usa-graphic-list usa-section" :class="classes">
    <div :class="containerClasses">
      <slot :variant="variant"></slot>
    </div>
  </section>
</template>
