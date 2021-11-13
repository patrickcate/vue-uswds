<script setup>
import { computed } from 'vue'
import BaseLink from '@/components/Baselink'

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

const computedProps = computed(() => {
  const propNames = Object.keys(props)
  const excludedProps = ['alt', 'external']

  return propNames.filter(propName => {
    return !excludedProps.includes(propName)
  })
})
</script>

<template>
  <BaseLink class="usa-link" :class="classes" v-bind="computedProps"
    ><slot></slot
  ></BaseLink>
</template>
