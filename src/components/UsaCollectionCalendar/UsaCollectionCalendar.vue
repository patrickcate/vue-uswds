<script setup>
import { computed } from 'vue'

const props = defineProps({
  datetime: {
    type: String,
    default: '',
  },
  month: {
    type: String,
    required: true,
  },
  day: {
    type: [String, Number],
    required: true,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        datetime: [],
        month: [],
        day: [],
      }
    },
  },
})

const timeElement = computed(() => {
  return props.datetime ? 'time' : 'div'
})
</script>

<template>
  <div class="usa-collection__calendar-date">
    <component
      :is="timeElement"
      :datetime="datetime || null"
      :class="customClasses?.datetime"
    >
      <span
        class="usa-collection__calendar-date-month"
        :class="customClasses?.month"
        >{{ month }}</span
      >
      <span
        class="usa-collection__calendar-date-day"
        :class="customClasses?.day"
        >{{ day }}</span
      >
    </component>
  </div>
</template>
