<script setup>
import { inject, computed } from 'vue'
import { GRID_NAMESPACE } from '@/utils/constants.js'

const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

const props = defineProps({
  backgroundImage: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        gridContainer: [],
      }
    },
  },
})

const gridContainerClasses = computed(() => {
  return [
    `${gridNamespace}container`,
    ...(props.customClasses?.gridContainer || []),
  ]
})

const backgroundImageStyle = computed(() => {
  return {
    backgroundImage: props.backgroundImage
      ? `url(${props.backgroundImage})`
      : null,
  }
})
</script>

<template>
  <section
    class="usa-hero"
    :aria-label="ariaLabel"
    :style="backgroundImageStyle"
  >
    <div :class="gridContainerClasses"><slot></slot></div>
  </section>
</template>
