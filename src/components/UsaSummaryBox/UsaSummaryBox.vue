<script setup>
import { computed } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: 'Key information',
    validator(heading) {
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

const computedId = computed(() => props.id || nextId('usa-summary-box'))
</script>

<template>
  <div class="usa-summary-box" role="region" :aria-labelledby="computedId">
    <div class="usa-summary-box__body" :class="[customClasses?.body]">
      <BaseHeading
        :id="computedId"
        class="usa-summary-box__heading"
        :class="customClasses?.heading"
        :tag="headingTag"
        ><slot name="heading">{{ heading }}</slot></BaseHeading
      >
      <div class="usa-summary-box__text" :class="customClasses?.text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
