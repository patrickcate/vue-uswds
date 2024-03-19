<script setup>
import { computed } from 'vue'
import { nextId } from '@/utils/unique-id.js'
import { validateTimeString } from '@/utils/dates.js'
import UsaComboBox from '@/components/UsaComboBox'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  minTime: {
    type: String,
    default: '00:00',
    validator(minTime) {
      let isValidTime = validateTimeString(minTime)

      if (!isValidTime) {
        console.warn(
          `'${minTime}' is not a valid minimum time. It must be a string in the HH:MM 24 hour format.`,
        )
      }

      return isValidTime
    },
  },
  maxTime: {
    type: String,
    default: '23:59',
    validator(maxTime) {
      let isValidTime = validateTimeString(maxTime)

      if (!isValidTime) {
        console.warn(
          `'${maxTime}' is not a valid maximum time. It must be a string in the HH:MM 24 hour format.`,
        )
      }

      return isValidTime
    },
  },
  step: {
    type: [String, Number],
    default: 30,
    validator(step) {
      const isValidStep = parseInt(step, 10) > 0

      if (!isValidStep) {
        console.warn(`'${step}' is not a valid time step increment.`)
      }

      return isValidStep
    },
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: '',
  },
  clearButtonAriaLabel: {
    type: String,
    default: 'Clear the select contents',
  },
  toggleButtonAriaLabel: {
    type: String,
    default: 'Toggle the dropdown list',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
        list: [],
      }
    },
  },
})

const computedId = computed(() => props.id || nextId('usa-time-picker'))

const selectedOption = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const timeStringToMinutes = timeString => {
  const [hours, minutes] = timeString
    .split(':')
    .map(segment => parseInt(segment, 10))

  return hours * 60 + minutes
}

const timeRangeOptions = computed(() => {
  const timeRange = []
  const minTime = timeStringToMinutes(props.minTime)
  const maxTime = timeStringToMinutes(props.maxTime)
  const step = parseInt(props.step, 10)

  if (minTime === maxTime) {
    return timeRange
  }

  for (let time = minTime; time <= maxTime; time += step) {
    const minute = time % 60
    const hour24 = Math.floor(time / 60)
    const hour12 = hour24 % 12 || 12
    const ampm = hour24 < 12 ? 'am' : 'pm'

    const formattedMinute = `${minute}`.padStart(2, '0')
    const formattedHour24 = `${hour24}`.padStart(2, '0')

    timeRange.push({
      value: `${formattedHour24}:${formattedMinute}`,
      label: `${hour12}:${formattedMinute}${ampm}`,
    })
  }

  return timeRange
})

const classes = computed(() => {
  const customClasses = props.customClasses

  if (!customClasses?.component?.length) {
    customClasses.component = ['usa-time-picker']
  } else if (!customClasses.component.includes('usa-time-picker')) {
    customClasses.component.push('usa-time-picker')
  }

  return customClasses
})
</script>

<template>
  <UsaComboBox
    :id="computedId"
    v-model="selectedOption"
    :options="timeRangeOptions"
    :label="label"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :clear-button-aria-label="clearButtonAriaLabel"
    :toggle-button-aria-label="toggleButtonAriaLabel"
    :custom-classes="classes"
  >
    <template v-if="$slots.label" #label><slot name="label"></slot></template>
    <template v-if="$slots.hint" #hint><slot name="hint"></slot></template>
    <template v-if="$slots['error-message']" #error-message
      ><slot name="error-message"></slot
    ></template>
    <template v-if="$slots['no-results']" #no-results
      ><slot name="no-results"></slot
    ></template>
    <template v-if="$slots.status" #status="{ filteredOptions }"
      ><slot name="status" :filtered-options="filteredOptions"></slot
    ></template>
    <template v-if="$slots['assistive-hint']" #assistive-hint
      ><slot name="assistive-hint"></slot
    ></template>
  </UsaComboBox>
</template>
