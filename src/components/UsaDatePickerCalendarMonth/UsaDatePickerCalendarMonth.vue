<script setup>
import { ref, computed, watch, toRef, shallowRef } from 'vue'
import { UseFocusTrap } from '@vueuse/integrations/useFocusTrap/component'
import { getMonth, getYear, parseIsoDate } from '@/utils/dates.js'
import { useMonthPicker } from './useMonthPicker.js'

const emit = defineEmits(['update:activeMonth', 'update:selectorMode'])

const props = defineProps({
  activeDate: {
    type: String,
    required: true,
  },
  monthLabels: {
    type: Array,
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
})

const focusTrapOptions = {
  immediate: true,
  clickOutsideDeactivates: true,
  initialFocus: '.usa-date-picker__calendar__month--focused',
  fallbackFocus: '.usa-date-picker__calendar__date-picker',
}

const monthButtonRefs = ref([])

const activeDateObject = shallowRef(parseIsoDate(props.activeDate))

watch(
  toRef(props, 'activeDate'),
  newActiveDate => (activeDateObject.value = parseIsoDate(newActiveDate)),
)

const activeMonth = computed(() => getMonth(activeDateObject.value))
const activeYear = computed(() => getYear(activeDateObject.value))

const { months, findRowIndexByMonth, findButtonIndexByMonth } = useMonthPicker({
  activeYear,
  monthLabels: toRef(props, 'monthLabels'),
  minDate: toRef(props, 'minDate'),
  maxDate: toRef(props, 'maxDate'),
})

const highlightedMonth = ref(activeMonth.value)
const highlightedRowIndex = ref(null)
const highlightedButtonIndex = ref(null)

const tabIndex = (month, rowIndex, buttonIndex) => {
  if (
    month === highlightedMonth.value ||
    month === activeMonth.value ||
    (highlightedRowIndex.value === rowIndex &&
      highlightedButtonIndex.value === buttonIndex)
  ) {
    return 0
  }

  return -1
}

const getButtonByMonth = month =>
  monthButtonRefs.value.find(
    button => parseInt(button.dataset.value, 10) === month,
  )

const setButtonFocusByMonth = month => {
  const foundButton = getButtonByMonth(month)

  if (foundButton) {
    foundButton.focus()
  }
}

const handleClickOnMonth = month => {
  emit('update:activeMonth', month)
  emit('update:selectorMode', 'day')
}

const handleHoverOnMonth = month => {
  highlightedMonth.value = month
  setButtonFocusByMonth(highlightedMonth.value)
}

const handlePreviousMonth = month => {
  if (!month) {
    return
  }

  highlightedMonth.value = month
  setButtonFocusByMonth(month)
}

const handleNextMonth = month => {
  if (!month) {
    return
  }

  highlightedMonth.value = month
  setButtonFocusByMonth(month)
}

watch(
  highlightedMonth,
  newHighlightedMonth => {
    const newRowIndex = findRowIndexByMonth(months, newHighlightedMonth)

    const newButtonIndex = findButtonIndexByMonth(
      months,
      newRowIndex,
      newHighlightedMonth,
    )

    highlightedRowIndex.value = newRowIndex
    highlightedButtonIndex.value = newButtonIndex
  },
  { immediate: true },
)
</script>

<template>
  <UseFocusTrap :options="focusTrapOptions">
    <div tabindex="-1" class="usa-date-picker__calendar__month-picker">
      <table class="usa-date-picker__calendar__table" role="presentation">
        <tbody>
          <tr
            v-for="(row, rowIndex) in months"
            :key="`${rowIndex}-${row.map(({ month }) => month).join('-')}`"
          >
            <td v-for="(item, buttonIndex) in row" :key="item.id">
              <button
                ref="monthButtonRefs"
                type="button"
                :disabled="item.disabled"
                :tabindex="tabIndex(item.month, rowIndex, buttonIndex)"
                class="usa-date-picker__calendar__month"
                :class="{
                  'usa-date-picker__calendar__month--selected':
                    activeMonth === item.month,
                  'usa-date-picker__calendar__month--focused':
                    highlightedRowIndex === rowIndex &&
                    highlightedButtonIndex === buttonIndex,
                }"
                :data-value="item.month"
                :data-label="item.label"
                :aria-selected="activeMonth === item.month"
                @click="handleClickOnMonth(item.month)"
                @mouseover="handleHoverOnMonth(item.month)"
                @keydown.prevent.up="handlePreviousMonth(item.up)"
                @keydown.prevent.down="handleNextMonth(item.down)"
                @keydown.prevent.left="handlePreviousMonth(item.left)"
                @keydown.prevent.right="handleNextMonth(item.right)"
                @keydown.prevent.home="handlePreviousMonth(item.home)"
                @keydown.prevent.end="handleNextMonth(item.end)"
                @keydown.prevent.page-up="handlePreviousMonth(item.pageUp)"
                @keydown.prevent.page-down="handleNextMonth(item.pageDown)"
                >{{ item.label }}</button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </UseFocusTrap>
</template>
