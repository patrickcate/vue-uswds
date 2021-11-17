<script setup>
import { computed, provide } from 'vue'
import UsaStepIndicatorSegment from '@/components/UsaStepIndicatorSegment'
import UsaStepIndicatorHeader from '@/components/UsaStepIndicatorHeader'

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  currentStepNumber: {
    type: Number,
    required: true,
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

provide(
  'currentStepNumber',
  computed(() => props.currentStepNumber)
)

const totalSteps = computed(() => props.steps.length)
provide('totalSteps', totalSteps)

const currentStepLabel = computed(
  () => props.steps[props.currentStepNumber - 1]
)
provide('currentStepLabel', currentStepLabel)

const classes = computed(() => [
  {
    'usa-step-indicator--counters': props.counters,
    'usa-step-indicator--counters-sm': props.smallCounters,
    'usa-step-indicator--center': props.center,
    'usa-step-indicator--no-labels': props.noLabels,
  },
])
</script>

<template>
  <div class="usa-step-indicator" :class="classes" aria-label="progress">
    <ol
      class="usa-step-indicator__segments"
      :class="customClasses?.list"
      :aria-hidden="noLabels || null"
    >
      <slot v-bind="$props">
        <UsaStepIndicatorSegment
          v-for="label in steps"
          :key="label"
          :class="customClasses?.segment"
          status="completed"
          :label="label"
        ></UsaStepIndicatorSegment>
      </slot>
    </ol>
    <slot name="header" v-bind="$props">
      <UsaStepIndicatorHeader
        :class="customClasses?.header"
        :heading-tag="headingTag"
      ></UsaStepIndicatorHeader>
    </slot>
  </div>
</template>
