<script setup>
import { computed } from 'vue'
import BaseHeading from '@/components/BaseHeading'

const props = defineProps({
  currentStepNumber: {
    type: Number,
    required: true,
    validator(currentStepNumber) {
      return currentStepNumber > 0
    },
  },
  currentStepLabel: {
    type: String,
    required: true,
  },
  totalSteps: {
    type: Number,
    required: true,
    validator(currentStepNumber) {
      return currentStepNumber > 0
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
        heading: [],
        counter: [],
        label: [],
      }
    },
  },
})

const calculatedStepNumber = computed(() =>
  props.currentStepNumber > 0
    ? Math.min(props.currentStepNumber, props.totalSteps)
    : 1
)
</script>

<template>
  <div class="usa-step-indicator__header">
    <BaseHeading
      class="usa-step-indicator__heading"
      :class="customClasses?.heading"
      :tag="headingTag"
    >
      <span
        class="usa-step-indicator__heading-counter"
        :class="customClasses?.counter"
      >
        <span class="usa-sr-only">Step</span>
        <span class="usa-step-indicator__current-step">{{
          calculatedStepNumber
        }}</span>
        <span class="usa-step-indicator__total-steps">
          of {{ totalSteps }}
        </span>
      </span>
      <span
        class="usa-step-indicator__heading-text"
        :class="customClasses?.label"
        ><slot>{{ currentStepLabel }}</slot></span
      >
    </BaseHeading>
  </div>
</template>
