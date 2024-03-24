<script setup>
import { ref, computed, watch, shallowRef, onMounted } from 'vue'
import {
  getYear,
  formatIsoDate,
  isDateAfter,
  isDateInRange,
  parseIsoDate,
  setYear,
  setMonth,
} from '@/utils/dates.js'
import UsaDatePickerCalendarDay from '@/components/UsaDatePickerCalendarDay'
import UsaDatePickerCalendarMonth from '@/components/UsaDatePickerCalendarMonth'
import UsaDatePickerCalendarYear from '@/components/UsaDatePickerCalendarYear'

const emit = defineEmits([
  'update:open',
  'update:selectedDate',
  'update:activeDate',
  'update:selectorMode',
  'update:highlightedDate',
  'update:activeYearStart',
  'update:activeYearEnd',
  'update:isPristine',
])

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  selectedDate: {
    type: String,
    default: '',
  },
  activeDate: {
    type: String,
    required: true,
  },
  highlightedDate: {
    type: String,
    default: '',
  },
  minDate: {
    type: String,
    required: true,
  },
  maxDate: {
    type: String,
    required: true,
  },
  selectorMode: {
    type: String,
    required: true,
  },
  monthLabels: {
    type: Array,
    required: true,
  },
  dayOfWeekLabels: {
    type: Array,
    required: true,
  },
  dayOfWeekAbbreviationLabels: {
    type: Array,
    required: true,
  },
  previousYearButtonLabel: {
    type: String,
    required: true,
  },
  nextYearButtonLabel: {
    type: String,
    required: true,
  },
  previousMonthButtonLabel: {
    type: String,
    required: true,
  },
  nextMonthButtonLabel: {
    type: String,
    required: true,
  },
  monthSelectionButtonLabel: {
    type: String,
    required: true,
  },
  yearSelectionButtonLabel: {
    type: String,
    required: true,
  },
  previousYearsButtonLabel: {
    type: String,
    required: true,
  },
  nextYearsButtonLabel: {
    type: String,
    required: true,
  },
})

const calendarPickerRef = ref(null)

const open = computed({
  get() {
    return props.open
  },
  set(isOpen) {
    emit('update:open', isOpen)
  },
})

const selectorMode = computed({
  get() {
    return props.selectorMode
  },
  set(newMode) {
    emit('update:selectorMode', newMode)
  },
})

const activeDate = computed({
  get() {
    return props.activeDate
  },
  set(newActiveDate) {
    emit('update:activeDate', newActiveDate)
  },
})

const activeDateObject = shallowRef(parseIsoDate(activeDate.value))

watch(activeDate, newActiveDate => {
  activeDateObject.value = parseIsoDate(newActiveDate)
})

const activeYear = computed({
  get() {
    return getYear(activeDateObject.value)
  },
  set(newYear) {
    const newDate = setYear(activeDateObject.value, newYear)

    const minimumDate = parseIsoDate(props.minDate)
    const maximumDate = parseIsoDate(props.maxDate)

    if (isDateInRange(newDate, minimumDate, maximumDate)) {
      activeDate.value = formatIsoDate(newDate)
    } else {
      const isAfter = isDateAfter(activeDateObject.value, newDate)

      activeDate.value = isAfter
        ? formatIsoDate(minimumDate)
        : formatIsoDate(maximumDate)
    }
  },
})

const highlightedDate = computed({
  get() {
    return props.highlightedDate
  },
  set(newHighlightedDate) {
    emit('update:highlightedDate', newHighlightedDate)
  },
})

const selectMonth = newMonth => {
  activeDate.value = formatIsoDate(
    setMonth(parseIsoDate(highlightedDate.value), newMonth),
  )
}

const selectedDate = computed({
  get() {
    return props.selectedDate
  },
  set(newDate) {
    emit('update:selectedDate', newDate)
  },
})

watch(selectedDate, newSelectedDate => {
  if (!newSelectedDate) {
    return
  }
  const newDate = parseIsoDate(newSelectedDate)
  const minimumDate = parseIsoDate(props.minDate)
  const maximumDate = parseIsoDate(props.maxDate)

  if (isDateInRange(newDate, minimumDate, maximumDate)) {
    const newFormattedDate = formatIsoDate(newDate)

    activeDate.value = newFormattedDate
    highlightedDate.value = newFormattedDate
  }
})

onMounted(() => {
  emit('update:activeDate', activeDate.value)
})
</script>

<template>
  <div
    ref="calendarPickerRef"
    class="usa-date-picker__calendar"
    role="application"
    :data-value="highlightedDate"
    :hidden="!open"
  >
    <template v-if="open">
      <UsaDatePickerCalendarDay
        v-if="selectorMode === 'day'"
        v-model:selected-date="selectedDate"
        v-model:active-date="activeDate"
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
        @update:open="isOpen => (open = isOpen)"
        @update:selector-mode="newMode => (selectorMode = newMode)"
        @update:highlighted-date="newDate => (highlightedDate = newDate)"
        @update:is-pristine="
          currentlyPristine => $emit('update:isPristine', currentlyPristine)
        "
      ></UsaDatePickerCalendarDay>
      <UsaDatePickerCalendarMonth
        v-if="selectorMode === 'month'"
        :active-date="activeDate"
        :month-labels="monthLabels"
        :min-date="minDate"
        :max-date="maxDate"
        @update:selector-mode="newMode => (selectorMode = newMode)"
        @update:active-month="selectMonth"
      ></UsaDatePickerCalendarMonth>
      <UsaDatePickerCalendarYear
        v-if="selectorMode === 'year'"
        v-model:selected-year="activeYear"
        :active-date="activeDate"
        :min-date="minDate"
        :max-date="maxDate"
        :previous-years-button-label="previousYearsButtonLabel"
        :next-years-button-label="nextYearsButtonLabel"
        @update:selector-mode="newMode => (selectorMode = newMode)"
        @update:active-year-start="
          newStartYear => $emit('update:activeYearStart', newStartYear)
        "
        @update:active-year-end="
          newEndYear => $emit('update:activeYearEnd', newEndYear)
        "
      ></UsaDatePickerCalendarYear>
    </template>
  </div>
</template>
