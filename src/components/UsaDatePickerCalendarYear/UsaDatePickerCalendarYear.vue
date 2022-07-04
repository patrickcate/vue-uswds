<script setup>
import {
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  toRef,
} from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { YEAR_GROUP } from '@/utils/constants.js'
import { getYear, setYear, parseIsoDate } from '@/utils/dates.js'
import useYearPicker from './useYearPicker.js'

const emit = defineEmits([
  'update:selectedYear',
  'update:selectorMode',
  'update:activeYearStart',
  'update:activeYearEnd',
])

const props = defineProps({
  selectedYear: {
    type: Number,
    required: true,
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
  previousYearsButtonLabel: {
    type: String,
    required: true,
  },
  nextYearsButtonLabel: {
    type: String,
    required: true,
  },
})

const yearDatePickerRef = ref(null)
const yearButtonRefs = ref([])

const { activate, deactivate } = useFocusTrap(yearDatePickerRef, {
  immediate: true,
  clickOutsideDeactivates: true,
})

const activeDateObject = shallowRef(parseIsoDate(props.activeDate))

watch(
  toRef(props, 'activeDate'),
  newActiveDate => (activeDateObject.value = parseIsoDate(newActiveDate))
)

const activeYear = computed({
  get() {
    return getYear(activeDateObject.value)
  },
  set(newYear) {
    activeDateObject.value = setYear(activeDateObject.value, newYear)
  },
})

const {
  years,
  visibleYearRange,
  firstAvailableVisibleYear,
  lastAvailableVisibleYear,
  isYearAvailable,
  hasPastYear,
  hasFutureYear,
  findRowIndexByYear,
  findButtonIndexByYear,
} = useYearPicker({
  minDate: toRef(props, 'minDate'),
  maxDate: toRef(props, 'maxDate'),
  activeYear,
})

watch(
  firstAvailableVisibleYear,
  () => emit('update:activeYearStart', firstAvailableVisibleYear.value),
  {
    immediate: true,
  }
)
watch(
  lastAvailableVisibleYear,
  () => emit('update:activeYearEnd', lastAvailableVisibleYear.value),
  {
    immediate: true,
  }
)

const currentSelectedYear = computed({
  get() {
    return props.selectedYear
  },
  set(newSelectedYear) {
    emit('update:selectedYear', newSelectedYear)
  },
})

const highlightedYear = ref(activeYear.value)
const highlightedRowIndex = ref(null)
const highlightedButtonIndex = ref(null)

const tabIndex = (year, rowIndex, buttonIndex) => {
  if (
    year === highlightedYear.value ||
    year === currentSelectedYear.value ||
    (highlightedRowIndex.value === rowIndex &&
      highlightedButtonIndex.value === buttonIndex)
  ) {
    return 0
  }

  return -1
}

const getButtonByYear = year =>
  yearButtonRefs.value.find(
    button => parseInt(button.dataset.value, 10) === year
  )

const setButtonFocusByYear = year => {
  const foundButton = getButtonByYear(year)

  if (foundButton) {
    foundButton.focus()
  }
}

const toPreviousYears = () => {
  activeYear.value = activeYear.value - YEAR_GROUP
}

const toNextYears = () => {
  activeYear.value = activeYear.value + YEAR_GROUP
}

const handleClickOnYear = year => {
  currentSelectedYear.value = year
  emit('update:selectorMode', 'day')
}

const handleHoverOnYear = year => {
  highlightedYear.value = year
  setButtonFocusByYear(highlightedYear.value)
}

const handlePreviousYear = year => {
  if (!year) {
    return
  }

  if (!visibleYearRange.value.includes(year)) {
    toPreviousYears()
  }

  nextTick(() => {
    highlightedYear.value = year
    setButtonFocusByYear(year)
  })
}

const handleNextYear = year => {
  if (!year) {
    return
  }

  if (!visibleYearRange.value.includes(year)) {
    toNextYears()
  }

  nextTick(() => {
    highlightedYear.value = year
    setButtonFocusByYear(year)
  })
}

watch(
  highlightedYear,
  newHighlightedYear => {
    if (
      visibleYearRange.value.includes(newHighlightedYear) &&
      isYearAvailable(newHighlightedYear)
    ) {
      const newRowIndex = findRowIndexByYear(years, newHighlightedYear)

      const newButtonIndex = findButtonIndexByYear(
        years,
        newRowIndex,
        newHighlightedYear
      )

      highlightedRowIndex.value = newRowIndex
      highlightedButtonIndex.value = newButtonIndex
    }
  },
  { immediate: true }
)

watch(years, (newVisibleYears, oldVisibleYear) => {
  if (
    newVisibleYears[highlightedRowIndex.value][highlightedButtonIndex.value]
      .disabled
  ) {
    const wantedYear =
      newVisibleYears[0][0].year < oldVisibleYear[0][0].year
        ? firstAvailableVisibleYear.value
        : lastAvailableVisibleYear.value

    const newRowIndex = findRowIndexByYear(years, wantedYear)

    if (newRowIndex === -1) {
      return
    }

    const newButtonIndex = findButtonIndexByYear(years, newRowIndex, wantedYear)

    highlightedYear.value = newVisibleYears[newRowIndex][newButtonIndex].year
  }
})

onMounted(() => {
  activate()
  setButtonFocusByYear(activeYear.value)
})

onBeforeUnmount(() => {
  emit('update:activeYearStart', '')
  emit('update:activeYearEnd', '')

  deactivate()
})
</script>

<template>
  <div
    ref="yearDatePickerRef"
    tabindex="-1"
    class="usa-date-picker__calendar__year-picker"
  >
    <table role="presentation" class="usa-date-picker__calendar__table">
      <tbody>
        <tr>
          <td>
            <button
              type="button"
              class="usa-date-picker__calendar__previous-year-chunk"
              :aria-label="previousYearsButtonLabel"
              :disabled="!hasPastYear"
              @click="toPreviousYears"
              >&nbsp;</button
            >
          </td>

          <td colspan="3">
            <table class="usa-date-picker__calendar__table" role="presentation">
              <tbody>
                <tr
                  v-for="(row, rowIndex) in years"
                  :key="`${rowIndex}-${row.map(({ year }) => year).join('-')}`"
                >
                  <td v-for="(item, buttonIndex) in row" :key="item.id">
                    <button
                      ref="yearButtonRefs"
                      type="button"
                      :disabled="item.disabled"
                      :tabindex="tabIndex(item.year, rowIndex, buttonIndex)"
                      class="usa-date-picker__calendar__year"
                      :class="{
                        'usa-date-picker__calendar__year--selected':
                          currentSelectedYear === item.year,
                        'usa-date-picker__calendar__year--focused':
                          highlightedRowIndex === rowIndex &&
                          highlightedButtonIndex === buttonIndex,
                      }"
                      :data-value="item.year"
                      :aria-selected="currentSelectedYear === item.year"
                      @click="handleClickOnYear(item.year)"
                      @mouseover="handleHoverOnYear(item.year)"
                      @keydown.prevent.up="handlePreviousYear(item.up)"
                      @keydown.prevent.down="handleNextYear(item.down)"
                      @keydown.prevent.left="handlePreviousYear(item.left)"
                      @keydown.prevent.right="handleNextYear(item.right)"
                      @keydown.prevent.home="handlePreviousYear(item.home)"
                      @keydown.prevent.end="handleNextYear(item.end)"
                      @keydown.prevent.page-up="handlePreviousYear(item.pageUp)"
                      @keydown.prevent.page-down="handleNextYear(item.pageDown)"
                      >{{ item.year }}</button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td>
            <button
              type="button"
              class="usa-date-picker__calendar__next-year-chunk"
              :aria-label="nextYearsButtonLabel"
              :disabled="!hasFutureYear"
              @click="toNextYears"
              >&nbsp;</button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
