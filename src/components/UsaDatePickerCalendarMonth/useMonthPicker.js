import { computed, shallowRef, watch } from 'vue'
import { splitArray } from '@/utils/common.js'
import {
  minDate as min,
  maxDate as max,
  parseIsoDate,
  startOfYear,
  endOfYear,
} from '@/utils/dates.js'

export const useMonthPicker = ({
  activeYear,
  monthLabels,
  minDate,
  maxDate,
}) => {
  const minDateObject = shallowRef(parseIsoDate(minDate.value))
  const maxDateObject = shallowRef(parseIsoDate(maxDate.value))

  watch(minDate, newMinDate => (minDateObject.value = parseIsoDate(newMinDate)))
  watch(maxDate, newMaxDate => (maxDateObject.value = parseIsoDate(newMaxDate)))

  const minMonthOfActiveYear = computed(() => {
    const activeDateObject = parseIsoDate(`${activeYear.value}-01-01`)

    const startOfActiveYear = startOfYear(activeDateObject)

    const minDateOfActiveYear = max([startOfActiveYear, minDateObject.value])

    return minDateOfActiveYear.getMonth()
  })

  const maxMonthOfActiveYear = computed(() => {
    const activeDateObject = parseIsoDate(`${activeYear.value}-01-01`)

    const startOfActiveYear = startOfYear(activeDateObject)

    const endOfActiveYear = endOfYear(startOfActiveYear)

    const maxDateOfActiveYear = min([endOfActiveYear, maxDateObject.value])

    return maxDateOfActiveYear.getMonth()
  })

  const validMonthRangeOfActiveYear = computed(() => {
    const validMonthRange = []

    for (
      let i = minMonthOfActiveYear.value;
      i <= maxMonthOfActiveYear.value;
      i++
    ) {
      validMonthRange.push(i + 1)
    }

    return validMonthRange
  })

  const isMonthInRange = month =>
    validMonthRangeOfActiveYear.value.includes(month)

  const findClosestPastMonth = (start, stop) => {
    for (let index = start; index <= stop; index++) {
      if (isMonthInRange(index)) {
        return index
      }
    }
    return null
  }

  const findClosestFutureMonth = (start, stop) => {
    for (let index = start; index >= stop; index--) {
      if (isMonthInRange(index)) {
        return index
      }
    }
    return null
  }

  const monthsOfYear = computed(() =>
    Object.keys(monthLabels.value).map(index => parseInt(index, 10) + 1),
  )

  const groupedMonthRange = computed(() => splitArray(monthsOfYear.value, 3))

  const months = computed(() =>
    groupedMonthRange.value.map(row =>
      row.map((monthValue, index) => {
        return {
          month: monthValue,
          label: monthLabels.value[monthValue - 1],
          id: `${monthValue}-${index}`,
          disabled: !isMonthInRange(monthValue),
          left: isMonthInRange(monthValue - 1) ? monthValue - 1 : null,
          right: isMonthInRange(monthValue + 1) ? monthValue + 1 : null,
          up: isMonthInRange(monthValue - 3)
            ? monthValue - 3
            : isMonthInRange(monthValue - 1)
              ? monthValue - 1
              : null,
          down: isMonthInRange(monthValue + 3)
            ? monthValue + 3
            : isMonthInRange(monthValue + 1)
              ? monthValue + 1
              : null,
          home: row.find(monthValue => isMonthInRange(monthValue)) || null,
          end:
            [...row].reverse().find(monthValue => isMonthInRange(monthValue)) ||
            null,
          pageUp: findClosestPastMonth(1, monthValue),
          pageDown: findClosestFutureMonth(12, monthValue),
        }
      }),
    ),
  )

  const findRowIndexByMonth = (months, monthToFind) => {
    const rowIndex = months.value.findIndex(row =>
      row.find(({ month }) => month === monthToFind),
    )

    return rowIndex
  }

  const findButtonIndexByMonth = (months, rowIndex, monthToFind) => {
    const buttonIndex = months.value[rowIndex].findIndex(
      ({ month }) => month === monthToFind,
    )

    return buttonIndex
  }

  return {
    months,
    findRowIndexByMonth,
    findButtonIndexByMonth,
  }
}
