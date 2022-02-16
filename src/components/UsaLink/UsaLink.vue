<script setup>
import { computed } from 'vue'
import BaseLink from '@/components/BaseLink'

const props = defineProps({
  alt: {
    type: Boolean,
    default: false,
  },
  external: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  { 'usa-link--alt': props.alt },
  { 'usa-link--external': props.external },
])
</script>

<template>
  <BaseLink v-bind="$attrs" class="usa-link" :class="classes"
    ><slot></slot
  ></BaseLink>
</template>
