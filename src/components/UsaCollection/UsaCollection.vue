<script setup>
import { computed } from 'vue'

const props = defineProps({
  condensed: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => {
  return [{ 'usa-collection--condensed': props.condensed }]
})
</script>

<template>
  <ul class="usa-collection" :class="classes"
    ><slot></slot
  ></ul>
</template>
