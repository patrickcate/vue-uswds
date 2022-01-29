<script setup>
import { computed } from 'vue'

const props = defineProps({
  segmented: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  {
    'usa-button-group--segmented': props.segmented,
  },
])
</script>

<template>
  <ul class="usa-button-group" :class="classes">
    <slot></slot>
  </ul>
</template>
