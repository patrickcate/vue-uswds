<script setup>
import { inject, computed } from 'vue'
import { nextId as nextUniqueId } from '@/utils/unique-id.js'
import BaseHeading from '@/components/BaseHeading'

const nextId = inject('nextId', nextUniqueId)

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  heading: {
    type: String,
    default: 'Key information',
    validator: heading => {
      return heading !== ''
    },
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        body: [],
        heading: [],
        text: [],
      }
    },
  },
})

const computedId = computed(() => {
  return !props.id ? nextId() : props.id
})
</script>
<template>
  <div class="usa-summary-box" role="region" :aria-labelledby="computedId">
    <div class="usa-summary-box__body" :class="[customClasses?.body]">
      <BaseHeading
        :id="computedId"
        class="usa-summary-box__heading"
        :class="[customClasses?.heading]"
        :tag="headingTag"
        >{{ heading }}</BaseHeading
      >
      <div class="usa-summary-box__text" :class="[customClasses?.text]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
