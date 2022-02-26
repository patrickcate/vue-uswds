<script setup>
import { computed } from 'vue'

const props = defineProps({
  condensed: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  { 'usa-collection--condensed': props.condensed },
])
</script>

<template>
  <ul class="usa-collection" :class="classes"
    ><slot></slot
  ></ul>
</template>
