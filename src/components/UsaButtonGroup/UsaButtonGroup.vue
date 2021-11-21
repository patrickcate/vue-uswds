<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  segmented: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  return {
    'usa-button-group--segmented': props.segmented,
  }
})
</script>

<template>
  <ul class="usa-button-group" :class="classes">
    <slot></slot>
  </ul>
</template>
