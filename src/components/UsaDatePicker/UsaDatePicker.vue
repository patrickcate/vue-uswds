<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import {
  ref,
  computed,
  useSlots,
  shallowRef,
  watch,
  provide,
  inject,
  toRef,
  onMounted,
} from 'vue'
import { onKeyStroke, onClickOutside } from '@vueuse/core'
import { nextId } from '@/utils/unique-id.js'

import {
  MIN_DATE,
  MAX_DATE,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_ABBREVIATION_LABELS,
  MONTH_LABELS,
} from '@/utils/constants.js'

import {
  parseIsoDate,
  parseUsaDate,
  formatIsoDate,
  formatUsaDate,
  getMonthIndex,
  getYear,
  isValidDate,
  isDateInRange,
  isDateAfter,
  today,
  isValidIsoDate,
  isValidUsaDate,
} from '@/utils/dates.js'

import UsaFormGroup from '@/components/UsaFormGroup'
import UsaLabel from '@/components/UsaLabel'
import UsaDatePickerCalendar from '@/components/UsaDatePickerCalendar'

const slots = useSlots()

const isDateRange = inject('isDateRange', false)
const dateRangeStart = inject('dateRangeStart', '')
const dateRangeEnd = inject('dateRangeEnd', '')
const updateDateRangeStart = inject('updateDateRangeStart', null)
const updateDateRangeEnd = inject('updateDateRangeEnd', null)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  minDate: {
    type: String,
    default: MIN_DATE,
  },
  maxDate: {
    type: String,
    default: MAX_DATE,
  },
  modelValue: {
    type: String,
    default: '',
  },
  rangeType: {
    type: String,
    default: '',
    validator(rangeType) {
      const isValidRangeType =
        rangeType === '' || rangeType === 'start' || rangeType === 'end'

      if (!isValidRangeType) {
        console.warn(
          `'${rangeType}' is an invalid range type. Range must be empty, 'start', or 'end'.`
        )
      }

      return isValidRangeType
    },
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
  dayOfWeekLabels: {
    type: Array,
    default: () => DAY_OF_WEEK_LABELS,
    validator(dayLabels) {
      const totalLabels = dayLabels.length
      const isValidDayLabelsLength = dayLabels.length === 7

      if (!isValidDayLabelsLength) {
        console.warn(
          `Missing labels, there must be a label for each day of the week. 7 total are needed but only ${totalLabels} were given.`
        )
      }

      return isValidDayLabelsLength
    },
  },
  dayOfWeekAbbreviationLabels: {
    type: Array,
    default: () => DAY_OF_WEEK_ABBREVIATION_LABELS,
    validator(dayLabels) {
      const totalLabels = dayLabels.length
      const isValidDayLabelsLength = dayLabels.length === 7

      if (!isValidDayLabelsLength) {
        console.warn(
          `Missing labels, there must be a label for each day of the week. 7 total are needed but only ${totalLabels} were given.`
        )
      }

      return isValidDayLabelsLength
    },
  },
  monthLabels: {
    type: Array,
    default: () => MONTH_LABELS,
    validator(monthLabels) {
      const totalLabels = monthLabels.length
      const isValidMonthLength = monthLabels.length === 12

      if (!isValidMonthLength) {
        console.warn(
          `Missing labels, there must be a label for each month of the year. 12 total are needed but only ${totalLabels} were given.`
        )
      }

      return isValidMonthLength
    },
  },
  toggleButtonAriaLabel: {
    type: String,
    default: 'Toggle calendar',
  },
  previousYearButtonLabel: {
    type: String,
    default: 'Navigate back one year',
  },
  nextYearButtonLabel: {
    type: String,
    default: 'Navigate forward one year',
  },
  previousMonthButtonLabel: {
    type: String,
    default: 'Navigate back one month',
  },
  nextMonthButtonLabel: {
    type: String,
    default: 'Navigate forward one month',
  },
  yearSelectionButtonLabel: {
    type: String,
    default: '%s. Click to select year',
  },
  monthSelectionButtonLabel: {
    type: String,
    default: '%s. Click to select month',
  },
  previousYearsButtonLabel: {
    type: String,
    default: 'Navigate back 12 years',
  },
  nextYearsButtonLabel: {
    type: String,
    default: 'Navigate forward 12 years',
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        formGroup: [],
        component: [],
        label: [],
        input: [],
      }
    },
  },
})

const minDate = computed(() => {
  if (isDateRange.value && props.rangeType === 'end' && dateRangeStart.value) {
    return dateRangeStart.value
  }

  return props.minDate
})

const maxDate = computed(() => {
  if (isDateRange.value && props.rangeType === 'start' && dateRangeEnd.value) {
    return dateRangeEnd.value
  }

  return props.maxDate
})

const selectedDate = computed({
  get() {
    return props.modelValue
  },
  set(newDate) {
    emit('update:modelValue', newDate)

    if (!isDateRange.value) {
      return
    }

    if (props.rangeType === 'start' && updateDateRangeStart) {
      updateDateRangeStart(newDate)
    } else if (props.rangeType === 'end' && updateDateRangeEnd) {
      updateDateRangeEnd(newDate)
    }
  },
})

const initialDate = () => {
  if (
    selectedDate.value &&
    isDateInRange(
      parseIsoDate(selectedDate.value),
      parseIsoDate(minDate.value),
      parseIsoDate(maxDate.value)
    )
  ) {
    return selectedDate.value
  }

  if (
    isDateRange.value &&
    props.rangeType === 'end' &&
    dateRangeStart.value &&
    !dateRangeEnd.value
  ) {
    return dateRangeStart.value
  }

  if (
    isDateRange.value &&
    props.rangeType === 'start' &&
    dateRangeEnd.value &&
    !dateRangeStart.value
  ) {
    return dateRangeEnd.value
  }

  if (
    isDateInRange(
      today(),
      parseIsoDate(minDate.value),
      parseIsoDate(maxDate.value)
    )
  ) {
    return formatIsoDate(today())
  }

  return minDate.value
}

const datePickerWrapperRef = ref(null)

const textInputValue = ref(
  selectedDate.value ? formatUsaDate(parseIsoDate(selectedDate.value)) : ''
)

const open = ref(false)
const isPristine = ref(true)
const selectorMode = ref('day')
const yearRangeStart = ref('')
const yearRangeStop = ref('')
const highlightedDate = ref('')
const activeDate = ref(initialDate())
const activeDateObject = shallowRef(parseIsoDate(activeDate.value))

watch(activeDate, newActiveDate => {
  activeDateObject.value = parseIsoDate(newActiveDate)
})

const activeMonthLabel = computed(() =>
  activeDate.value
    ? props.monthLabels[getMonthIndex(activeDateObject.value)]
    : ''
)

const activeYear = computed(() =>
  activeDate.value ? getYear(activeDateObject.value) : ''
)

const closeCalendar = () => {
  open.value = false
  selectorMode.value = 'day'
}

const openCalendar = () => {
  activeDate.value = initialDate()
  open.value = true
}

const toggleCalendar = () => {
  if (open.value) {
    closeCalendar()
  } else {
    openCalendar()
  }
}

const computedId = computed(() => props.id || nextId('usa-date-picker'))
const computedLabelId = computed(() => `${computedId.value}-label`)
const computedErrorMessageId = computed(
  () => `${computedId.value}-error-message`
)
const computedHintId = computed(() => `${computedId.value}-hint`)

const ariaDescribedby = computed(() => {
  const ids = []

  if (slots.hint) {
    ids.push(computedHintId.value)
  }

  if (props.error && slots['error-message']) {
    ids.push(computedErrorMessageId.value)
  }

  return ids.length ? ids.join(' ') : null
})

const classes = computed(() => [
  { 'usa-date-picker--active': open.value },
  {
    'usa-date-range-picker__range-start':
      isDateRange.value && props.rangeType === 'start',
  },
  {
    'usa-date-range-picker__range-end':
      isDateRange.value && props.rangeType === 'end',
  },
  ...(props.customClasses?.component || []),
])

onKeyStroke('Escape', () => {
  if (open.value) {
    closeCalendar()
  }
})

onClickOutside(datePickerWrapperRef, () => {
  if (open.value) {
    closeCalendar()
  }
})

watch(textInputValue, newInputValue => {
  if (newInputValue === '') {
    selectedDate.value = ''
    return
  }

  const dateObject = parseUsaDate(newInputValue)
  const minimumDate = parseIsoDate(minDate.value)
  const maximumDate = parseIsoDate(maxDate.value)
  const inputValueIsoDate = formatIsoDate(dateObject)

  if (
    isValidIsoDate(inputValueIsoDate) &&
    isValidUsaDate(newInputValue) &&
    isValidDate(dateObject)
  ) {
    if (isDateInRange(dateObject, minimumDate, maximumDate)) {
      selectedDate.value = inputValueIsoDate
      activeDate.value = selectedDate.value
      highlightedDate.value = activeDate.value
      return
    }

    const isAfter = isDateAfter(activeDateObject.value, dateObject)

    if (isAfter) {
      activeDate.value = formatIsoDate(minimumDate)
      highlightedDate.value = activeDate.value
    } else {
      activeDate.value = formatIsoDate(maximumDate)
      highlightedDate.value = activeDate.value
    }
  }
})

watch(selectedDate, newSelectedDate => {
  if (textInputValue.value === formatUsaDate(parseIsoDate(newSelectedDate))) {
    return
  }

  textInputValue.value = newSelectedDate
    ? formatUsaDate(parseIsoDate(newSelectedDate))
    : ''
})

provide(
  'inputHighlightedDate',
  computed(() => highlightedDate.value)
)

provide('rangeType', toRef(props, 'rangeType'))

onMounted(() => {
  if (
    isDateRange.value &&
    props.rangeType === 'start' &&
    updateDateRangeStart
  ) {
    updateDateRangeStart(selectedDate.value)
  } else if (
    isDateRange.value &&
    props.rangeType === 'end' &&
    updateDateRangeEnd
  ) {
    updateDateRangeEnd(selectedDate.value)
  }
})
</script>

<template>
  <UsaFormGroup
    :group="!!$slots.hint || (error && !!$slots['error-message'])"
    :error="error"
    :class="props.customClasses?.formGroup"
  >
    <UsaLabel
      v-if="label || $slots.label"
      :id="computedLabelId"
      :for="computedId"
      :required="required"
      :error="error"
      :class="customClasses?.label"
      ><slot name="label">{{ label }}</slot></UsaLabel
    >

    <span v-if="$slots.hint" :id="computedHintId" class="usa-hint"
      ><slot name="hint"></slot
    ></span>

    <span
      v-if="error && $slots['error-message']"
      :id="computedErrorMessageId"
      class="usa-error-message"
      ><slot name="error-message"></slot
    ></span>
    <div class="usa-date-picker usa-date-picker--initialized" :class="classes">
      <div ref="datePickerWrapperRef" class="usa-date-picker__wrapper">
        <input
          v-bind="$attrs"
          :id="computedId"
          v-model="textInputValue"
          :required="required"
          :disabled="disabled"
          :readonly="readonly"
          :aria-labelledby="label || $slots.label ? computedLabelId : null"
          :aria-describedby="ariaDescribedby"
          :class="props.customClasses?.input"
          class="usa-input usa-date-picker__external-input"
          type="text"
        />
        <button
          type="button"
          class="usa-date-picker__button"
          aria-haspopup="true"
          :aria-label="toggleButtonAriaLabel"
          :disabled="disabled"
          @click="toggleCalendar"
        ></button>

        <UsaDatePickerCalendar
          v-model:selected-date="selectedDate"
          v-model:selector-mode="selectorMode"
          v-model:open="open"
          v-model:active-date="activeDate"
          v-model:highlighted-date="highlightedDate"
          :style="`top: ${datePickerWrapperRef?.offsetHeight}px`"
          :min-date="minDate"
          :max-date="maxDate"
          :month-labels="monthLabels"
          :day-of-week-labels="dayOfWeekLabels"
          :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
          :previous-year-button-label="previousYearButtonLabel"
          :next-year-button-label="nextYearButtonLabel"
          :previous-month-button-label="previousMonthButtonLabel"
          :next-month-button-label="nextMonthButtonLabel"
          :month-selection-button-label="monthSelectionButtonLabel"
          :year-selection-button-label="yearSelectionButtonLabel"
          :previous-years-button-label="previousYearsButtonLabel"
          :next-years-button-label="nextYearsButtonLabel"
          @update:is-pristine="
            currentlyPristine => (isPristine = currentlyPristine)
          "
          @update:active-year-start="
            newStartYear => (yearRangeStart = newStartYear)
          "
          @update:active-year-end="newEndYear => (yearRangeStop = newEndYear)"
        ></UsaDatePickerCalendar>

        <div
          class="usa-date-picker__status usa-sr-only"
          role="status"
          aria-live="polite"
        >
          <slot
            name="status"
            :open="open"
            :is-pristine="isPristine"
            :selector-mode="selectorMode"
            :selected-date="selectedDate"
            :highlighted-date="highlightedDate"
            :active-month-label="activeMonthLabel"
            :active-year="activeYear"
            :year-range-start="yearRangeStart"
            :year-range-stop="yearRangeStop"
          >
            <template v-if="open">
              <template v-if="selectorMode === 'day'">
                <template
                  v-if="selectedDate && selectedDate === highlightedDate"
                  >Selected date.</template
                >
                <template v-if="isPristine">
                  You can navigate by day using left and right arrows. Weeks by
                  using up and down arrows. Months by using page up and page
                  down keys. Years by using shift plus page up and shift plus
                  page down. Home and end keys navigate to the beginning and end
                  of a week.
                </template>
                <template v-else>
                  {{ activeMonthLabel }} {{ activeYear }}
                </template>
              </template>
              <template v-else-if="selectorMode === 'month'"
                >Select a month.</template
              >
              <template v-else-if="selectorMode === 'year'"
                >Showing years {{ yearRangeStart }} to {{ yearRangeStop }}.
                Select a year.</template
              >
            </template>
          </slot>
        </div>
      </div>
    </div>
  </UsaFormGroup>
</template>
