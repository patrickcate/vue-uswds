<script setup>
import { inject, computed } from 'vue'

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

const gridNamespace = inject('vueUswds.gridNamespace', 'grid-')

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

<style>
.usa-hero {
  /* Remove default background image set in USWDS CSS. */
  background-image: none;
}
</style>
