<script setup>
import { computed, inject } from 'vue'
import { GRID_NAMESPACE } from '@/utils/constants.js'
const gridNamespace = inject('vueUswds.gridNamespace', GRID_NAMESPACE)

const props = defineProps({
  customClasses: {
    type: Object,
    default: () => ({
      container: [],
    }),
  },
})

const containerClasses = computed(() =>
  props.customClasses?.container?.length
    ? props.customClasses.container
    : [`${gridNamespace}container`]
)
</script>

<template>
  <div class="usa-footer__secondary-section">
    <div :class="containerClasses">
      <slot></slot>
    </div>
  </div>
</template>
