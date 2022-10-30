<script setup>
import { computed } from 'vue'
import UsaStepIndicatorSegment from '@/components/UsaStepIndicatorSegment'
import UsaStepIndicatorHeader from '@/components/UsaStepIndicatorHeader'

const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
  currentStepNumber: {
    type: Number,
    default: 1,
    validator(currentStepNumber) {
      return currentStepNumber > 0
    },
  },
  counters: {
    type: Boolean,
    default: false,
  },
  smallCounters: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  noLabels: {
    type: Boolean,
    default: false,
  },
  headingTag: {
    type: String,
    default: 'h2',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        list: [],
        segment: [],
        header: [],
      }
    },
  },
})

const totalSteps = computed(() => props.steps.length)

const currentStepLabel = computed(() => {
  if (props.currentStepNumber > totalSteps.value) {
    return props.steps[totalSteps.value - 1]
  }

  if (props.steps[props.currentStepNumber - 1]) {
    return props.steps[props.currentStepNumber - 1]
  }

  return ''
})

const classes = computed(() => [
  {
    'usa-step-indicator--counters': props.counters,
    'usa-step-indicator--counters-sm': props.smallCounters,
    'usa-step-indicator--center': props.center,
    'usa-step-indicator--no-labels': props.noLabels,
  },
])

function stepStatus(label) {
  const stepNumber = props.steps.indexOf(label) + 1

  if (stepNumber < props.currentStepNumber) {
    return 'completed'
  }

  if (stepNumber === props.currentStepNumber) {
    return 'current'
  }

  return ''
}
</script>

<template>
  <div class="usa-step-indicator" :class="classes" aria-label="progress">
    <ol
      class="usa-step-indicator__segments"
      :class="customClasses?.list"
      :aria-hidden="noLabels || null"
    >
      <slot>
        <UsaStepIndicatorSegment
          v-for="label in steps"
          :key="label"
          :class="customClasses?.segment"
          :status="stepStatus(label)"
          :label="label"
        />
      </slot>
    </ol>
    <slot name="header">
      <UsaStepIndicatorHeader
        :class="customClasses?.header"
        :heading-tag="headingTag"
        :current-step-number="currentStepNumber"
        :current-step-label="currentStepLabel"
        :total-steps="totalSteps"
      ></UsaStepIndicatorHeader>
    </slot>
  </div>
</template>
