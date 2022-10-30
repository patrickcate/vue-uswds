<script setup>
import { ref, provide } from 'vue'

const rangeStart = ref('')
const rangeEnd = ref('')

const updateDateRangeStart = newRangeStart => {
  rangeStart.value = newRangeStart
}
const updateDateRangeEnd = newRangeEnd => {
  rangeEnd.value = newRangeEnd
}

provide('isDateRange', ref(true))
provide('dateRangeStart', rangeStart)
provide('dateRangeEnd', rangeEnd)
provide('updateDateRangeStart', updateDateRangeStart)
provide('updateDateRangeEnd', updateDateRangeEnd)
</script>

<template>
  <div class="usa-date-range-picker">
    <slot></slot>
  </div>
</template>
