<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    default: '',
    validator(status) {
      return ['current', 'completed', ''].includes(status)
    },
  },
  label: {
    type: String,
    required: true,
  },
})

const statusLabel = computed(() => {
  if (props.status === 'current') {
    return null
  }

  return props.status === 'completed' ? props.status : 'not completed'
})

const classes = computed(() => [
  {
    'usa-step-indicator__segment--complete': props.status === 'completed',
  },
  {
    'usa-step-indicator__segment--current': props.status === 'current',
  },
])
</script>

<template>
  <li
    class="usa-step-indicator__segment"
    :class="classes"
    :aria-current="status === 'current' || null"
  >
    <span class="usa-step-indicator__segment-label"
      >{{ label }}
      <span v-if="statusLabel" class="usa-sr-only">{{
        statusLabel
      }}</span></span
    >
  </li>
</template>
