<script setup>
import BaseHeading from '@/components/BaseHeading'

defineProps({
  heading: {
    type: String,
    default: '',
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        heading: [],
      }
    },
  },
})
</script>

<template>
  <li class="usa-process-list__item">
    <BaseHeading
      class="usa-process-list__heading"
      :class="customClasses.heading"
      :tag="headingTag"
      ><slot name="heading">{{ heading }}</slot></BaseHeading
    >
    <slot></slot>
  </li>
</template>
