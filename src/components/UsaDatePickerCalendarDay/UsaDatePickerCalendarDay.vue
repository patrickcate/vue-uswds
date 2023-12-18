<script setup>
import {
  computed,
  ref,
  toRef,
  watch,
  nextTick,
  toRaw,
  onBeforeUnmount,
  shallowRef,
  onMounted,
  inject,
} from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { isSameMonth, addMonths, subMonths, addYears, subYears } from 'date-fns'
import {
  getMonthIndex,
  getYear,
  formatIsoDate,
  isDateInRange,
  parseIsoDate,
} from '@/utils/dates.js'
import { useDayPicker } from './useDayPicker.js'

const inputHighlightedDate = inject('inputHighlightedDate')
const isDateRange = inject('isDateRange', false)
const dateRangeStart = inject('dateRangeStart', '')
const dateRangeEnd = inject('dateRangeEnd', '')
const rangeType = inject('rangeType', '')

const emit = defineEmits([
  'update:open',
  'update:selectedDate',
  'update:activeDate',
  'update:selectorMode',
  'update:highlightedDate',
  'update:isPristine',
])

const props = defineProps({
  selectedDate: {
    type: String,
    default: '',
  },
  activeDate: {
    type: String,
    required: true,
  },
  minDate: {
    type: String,
    required: true,
  },
  maxDate: {
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

const dayDatePickerRef = ref(null)
const dateButtonRefs = ref([])

const { activate, deactivate } = useFocusTrap(dayDatePickerRef, {
  immediate: true,
  clickOutsideDeactivates: true,
  initialFocus: '.usa-date-picker__calendar__date--focused',
  fallbackFocus: '.usa-date-picker__calendar__date-picker',
})

const selectedDate = computed({
  get() {
    return props.selectedDate
  },
  set(newSelectedDate) {
    emit('update:selectedDate', newSelectedDate)
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

const activeMonthIndex = computed(() => getMonthIndex(activeDateObject.value))
const activeMonthLabel = computed(
  () => props.monthLabels[activeMonthIndex.value]
)
const activeYear = computed(() => getYear(activeDateObject.value))

const {
  dates,
  hasPastMonth,
  hasFutureMonth,
  hasPastYear,
  hasFutureYear,
  todaysDate,
} = useDayPicker({
  activeDate: activeDate,
  minDate: toRef(props, 'minDate'),
  maxDate: toRef(props, 'maxDate'),
  dayOfWeekLabels: toRef(props, 'dayOfWeekLabels'),
  monthLabels: toRef(props, 'monthLabels'),
  isDateRange: isDateRange,
  dateRangeStart: dateRangeStart,
  dateRangeEnd: dateRangeEnd,
})

const highlightedDate = ref(activeDate.value)
const highlightedRowIndex = ref(null)
const highlightedButtonIndex = ref(null)

watch(selectedDate, newSelectedDate => {
  if (newSelectedDate) {
    highlightedDate.value = newSelectedDate
    activeDate.value = newSelectedDate
  }
})

const monthSelectionButtonLabel = computed(() => {
  return props.monthSelectionButtonLabel.replace('%s', activeMonthLabel.value)
})

const yearSelectionButtonLabel = computed(() => {
  return props.yearSelectionButtonLabel.replace('%s', activeYear.value)
})

const visibleDateRange = computed(() => toRaw(dates.value).flat())

const tabIndex = (date, rowIndex, buttonIndex) => {
  if (
    date === highlightedDate.value ||
    date === selectedDate.value ||
    (highlightedRowIndex.value === rowIndex &&
      highlightedButtonIndex.value === buttonIndex)
  ) {
    return 0
  }

  return -1
}

const getButtonByDate = date =>
  dateButtonRefs.value.find(button => button.dataset.value === date)

const setButtonFocusByDate = date => {
  const foundButton = getButtonByDate(date)

  if (foundButton) {
    foundButton.focus()
  }
}

const toPreviousMonth = () => {
  const previousMonth = isDateInRange(
    subMonths(activeDateObject.value, 1),
    parseIsoDate(props.minDate),
    parseIsoDate(props.maxDate)
  )
    ? subMonths(activeDateObject.value, 1)
    : parseIsoDate(props.minDate)

  activeDate.value = formatIsoDate(previousMonth)
}

const toNextMonth = () => {
  const nextMonth = isDateInRange(
    addMonths(activeDateObject.value, 1),
    parseIsoDate(props.minDate),
    parseIsoDate(props.maxDate)
  )
    ? addMonths(activeDateObject.value, 1)
    : parseIsoDate(props.maxDate)

  activeDate.value = formatIsoDate(nextMonth)
}

const toPreviousYear = () => {
  const previousYear = isDateInRange(
    subYears(activeDateObject.value, 1),
    parseIsoDate(props.minDate),
    parseIsoDate(props.maxDate)
  )
    ? subYears(activeDateObject.value, 1)
    : parseIsoDate(props.minDate)

  activeDate.value = formatIsoDate(previousYear)
}

const toNextYear = () => {
  const nextYear = isDateInRange(
    addYears(activeDateObject.value, 1),
    parseIsoDate(props.minDate),
    parseIsoDate(props.maxDate)
  )
    ? addYears(activeDateObject.value, 1)
    : parseIsoDate(props.maxDate)

  activeDate.value = formatIsoDate(nextYear)
}

const handlePreviousMonth = () => {
  const newDate =
    dates.value[highlightedRowIndex.value][highlightedButtonIndex.value]
      .previousMonth

  toPreviousMonth()

  highlightedDate.value = newDate
}

const handleNextMonth = () => {
  const newDate =
    dates.value[highlightedRowIndex.value][highlightedButtonIndex.value]
      .nextMonth

  toNextMonth()

  highlightedDate.value = newDate
}

const handlePreviousYear = () => {
  const previousYear =
    dates.value[highlightedRowIndex.value][highlightedButtonIndex.value]
      .previousYear
  toPreviousYear()

  highlightedDate.value = previousYear

  nextTick(() => {
    if (
      isSameMonth(
        parseIsoDate(highlightedDate.value),
        parseIsoDate(props.minDate)
      )
    ) {
      setButtonFocusByDate(highlightedDate.value)
    }
  })
}

const handleNextYear = () => {
  const nextYear =
    dates.value[highlightedRowIndex.value][highlightedButtonIndex.value]
      .nextYear

  toNextYear()

  highlightedDate.value = nextYear

  nextTick(() => {
    if (
      isSameMonth(
        parseIsoDate(highlightedDate.value),
        parseIsoDate(props.maxDate)
      )
    ) {
      setButtonFocusByDate(highlightedDate.value)
    }
  })
}

const handleClickOnDate = date => {
  selectedDate.value = date
  highlightedDate.value = date
  emit('update:open', false)
}

const handleHoverOnDate = date => {
  highlightedDate.value = date

  const foundDate = visibleDateRange.value.find(item => item.date === date)

  nextTick(() => {
    if (foundDate.isCurrentMonth) {
      setButtonFocusByDate(highlightedDate.value)
    }
  })
}

const handlePreviousDate = (date, to = null) => {
  if (!date) {
    return
  }

  const foundDate = visibleDateRange.value.find(item => item.date === date)

  if (!foundDate || !foundDate.isCurrentMonth) {
    if (!to || to === 'month') {
      toPreviousMonth()
    } else if (to === 'year') {
      toPreviousYear()
    }
  }

  highlightedDate.value = date

  nextTick(() => {
    setButtonFocusByDate(date)
  })
}

const handleNextDate = (date, to = null) => {
  if (!date) {
    return
  }

  const foundDate = visibleDateRange.value.find(item => item.date === date)
  if (!foundDate || !foundDate.isCurrentMonth) {
    if (!to || to === 'month') {
      toNextMonth()
    } else if (to === 'year') {
      toNextYear()
    }
  }

  highlightedDate.value = date

  nextTick(() => {
    setButtonFocusByDate(date)
  })
}

watch(
  highlightedDate,
  newHighlightedDate => {
    emit('update:highlightedDate', newHighlightedDate)

    nextTick(() => {
      if (
        visibleDateRange.value.some(
          item => item.date === newHighlightedDate && item.isCurrentMonth
        ) &&
        isDateInRange(
          parseIsoDate(newHighlightedDate),
          parseIsoDate(props.minDate),
          parseIsoDate(props.maxDate)
        )
      ) {
        const newRowIndex = dates.value.findIndex(row =>
          row.find(({ date }) => date === newHighlightedDate)
        )

        const newButtonIndex = dates.value[newRowIndex].findIndex(
          ({ date }) => date === newHighlightedDate
        )

        highlightedRowIndex.value = newRowIndex
        highlightedButtonIndex.value = newButtonIndex
      }
    })
  },
  { immediate: true }
)

watch(inputHighlightedDate, newHighlightedDate => {
  highlightedDate.value = newHighlightedDate
})

const stopWatchingHighlightedDate = watch(highlightedDate, () => {
  emit('update:isPristine', false)
  stopWatchingHighlightedDate()
})

onMounted(() => {
  activate()
})

onBeforeUnmount(() => {
  emit('update:isPristine', true)
  deactivate()
})
</script>

<template>
  <div
    ref="dayDatePickerRef"
    tabindex="-1"
    class="usa-date-picker__calendar__date-picker"
  >
    <div class="usa-date-picker__calendar__row">
      <div
        class="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items"
      >
        <button
          type="button"
          class="usa-date-picker__calendar__previous-year"
          :aria-label="previousYearButtonLabel"
          :disabled="!hasPastYear"
          @click="handlePreviousYear"
        ></button>
      </div>
      <div
        class="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items"
      >
        <button
          type="button"
          class="usa-date-picker__calendar__previous-month"
          :aria-label="previousMonthButtonLabel"
          :disabled="!hasPastMonth"
          @click="handlePreviousMonth"
        ></button>
      </div>
      <div
        class="usa-date-picker__calendar__cell usa-date-picker__calendar__month-label"
      >
        <button
          type="button"
          class="usa-date-picker__calendar__month-selection"
          :aria-label="monthSelectionButtonLabel"
          @click="emit('update:selectorMode', 'month')"
          >{{ activeMonthLabel }}</button
        >
        <button
          type="button"
          class="usa-date-picker__calendar__year-selection"
          :aria-label="yearSelectionButtonLabel"
          @click="emit('update:selectorMode', 'year')"
          >{{ activeYear }}</button
        >
      </div>
      <div
        class="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items"
      >
        <button
          type="button"
          class="usa-date-picker__calendar__next-month"
          :aria-label="nextMonthButtonLabel"
          :disabled="!hasFutureMonth"
          @click="handleNextMonth"
        ></button>
      </div>
      <div
        class="usa-date-picker__calendar__cell usa-date-picker__calendar__cell--center-items"
      >
        <button
          type="button"
          class="usa-date-picker__calendar__next-year"
          :aria-label="nextYearButtonLabel"
          :disabled="!hasFutureYear"
          @click="handleNextYear"
        ></button>
      </div>
    </div>

    <table class="usa-date-picker__calendar__table">
      <thead>
        <tr>
          <th
            v-for="(dayLabel, index) in dayOfWeekLabels"
            :key="dayLabel"
            class="usa-date-picker__calendar__day-of-week"
            scope="col"
            :aria-label="dayLabel"
            >{{ dayOfWeekAbbreviationLabels[index] }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(row, rowIndex) in dates"
          :key="`${rowIndex}-${row.map(({ date }) => date).join('-')}`"
        >
          <td v-for="(item, buttonIndex) in row" :key="item.id">
            <button
              ref="dateButtonRefs"
              type="button"
              :disabled="item.disabled"
              :tabindex="tabIndex(item.date, rowIndex, buttonIndex)"
              class="usa-date-picker__calendar__date"
              :class="{
                'usa-date-picker__calendar__date--previous-month':
                  item.isPreviousMonth,
                'usa-date-picker__calendar__date--current-month':
                  item.isCurrentMonth,
                'usa-date-picker__calendar__date--next-month': item.isNextMonth,
                'usa-date-picker__calendar__date--today':
                  item.date === todaysDate,
                'usa-date-picker__calendar__date--selected':
                  selectedDate === item.date,
                'usa-date-picker__calendar__date--focused':
                  highlightedRowIndex === rowIndex &&
                  highlightedButtonIndex === buttonIndex &&
                  item.isCurrentMonth,
                'usa-date-picker__calendar__date--range-date':
                  (isDateRange &&
                    dateRangeEnd &&
                    rangeType === 'start' &&
                    item.date === dateRangeEnd) ||
                  (isDateRange &&
                    dateRangeStart &&
                    rangeType === 'end' &&
                    item.date === dateRangeStart),
                'usa-date-picker__calendar__date--within-range':
                  (isDateRange &&
                    dateRangeStart &&
                    dateRangeEnd &&
                    item.isInCurrentRange) ||
                  (isDateRange &&
                    dateRangeStart &&
                    !dateRangeEnd &&
                    item.date > dateRangeStart &&
                    item.date < highlightedDate) ||
                  (isDateRange &&
                    dateRangeEnd &&
                    !dateRangeStart &&
                    item.date < dateRangeEnd &&
                    item.date > highlightedDate),
                'usa-date-picker__calendar__date--range-date-start':
                  (isDateRange &&
                    dateRangeStart &&
                    item.date === dateRangeStart) ||
                  (isDateRange &&
                    dateRangeEnd &&
                    item.date !== dateRangeEnd &&
                    rangeType === 'start' &&
                    !dateRangeStart &&
                    highlightedRowIndex === rowIndex &&
                    highlightedButtonIndex === buttonIndex &&
                    item.isCurrentMonth),
                'usa-date-picker__calendar__date--range-date-end':
                  (isDateRange && dateRangeEnd && item.date === dateRangeEnd) ||
                  (isDateRange &&
                    dateRangeStart &&
                    item.date !== dateRangeStart &&
                    rangeType === 'end' &&
                    !dateRangeEnd &&
                    highlightedRowIndex === rowIndex &&
                    highlightedButtonIndex === buttonIndex &&
                    item.isCurrentMonth),
              }"
              :data-day="item.day"
              :data-month="item.month"
              :data-year="item.year"
              :data-value="item.date"
              :aria-label="item.label"
              :aria-selected="selectedDate === item.date"
              @click="handleClickOnDate(item.date)"
              @mouseover="handleHoverOnDate(item.date)"
              @keydown.prevent.up="handlePreviousDate(item.up)"
              @keydown.prevent.down="handleNextDate(item.down)"
              @keydown.prevent.left="handlePreviousDate(item.left)"
              @keydown.prevent.right="handleNextDate(item.right)"
              @keydown.prevent.home="handlePreviousDate(item.home)"
              @keydown.prevent.end="handleNextDate(item.end)"
              @keydown.prevent.page-up.exact="
                handlePreviousDate(item.pageUp, 'month')
              "
              @keydown.prevent.page-down.exact="
                handleNextDate(item.pageDown, 'month')
              "
              @keydown.prevent.shift.page-up="
                handlePreviousDate(item.shiftPageUp, 'year')
              "
              @keydown.prevent.shift.page-down="
                handleNextDate(item.shiftPageDown, 'year')
              "
              >{{ item.day }}</button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
