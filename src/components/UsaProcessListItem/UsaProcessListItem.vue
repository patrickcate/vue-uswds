<script setup>
import { inject, computed } from 'vue'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
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

const computedHeadingTag = computed(
  () => inject('listHeadingTag').value || props.headingTag
)
</script>

<template>
  <li class="usa-process-list__item">
    <BaseHeading
      v-if="heading || $slots.heading"
      class="usa-process-list__heading"
      :class="customClasses?.heading"
      :tag="computedHeadingTag"
      ><slot name="heading">{{ heading }}</slot></BaseHeading
    >
    <slot></slot>
  </li>
</template>
