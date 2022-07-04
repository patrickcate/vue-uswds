import { computed } from 'vue'
import { splitArray } from '@/utils/common.js'
import { YEAR_GROUP } from '@/utils/constants.js'
import { getYear, parseIsoDate } from '@/utils/dates.js'

export default ({ minDate, maxDate, activeYear }) => {
  const minYear = computed(() => getYear(parseIsoDate(minDate.value)))
  const maxYear = computed(() => getYear(parseIsoDate(maxDate.value)))

  const isYearInRange = year => year >= minYear.value && year <= maxYear.value

  const findClosestPastYear = (start, stop) => {
    for (let index = start; index <= stop; index++) {
      if (isYearInRange(index)) {
        return index
      }
    }

    return null
  }

  const findClosestFutureYear = (start, stop) => {
    for (let index = start; index >= stop; index--) {
      if (isYearInRange(index)) {
        return index
      }
    }

    return null
  }

  const yearToGroup = computed(() =>
    Math.max(0, activeYear.value - (activeYear.value % YEAR_GROUP))
  )

  const visibleYearRange = computed(() => {
    const years = []

    let yearIndex = yearToGroup.value

    while (years.length < YEAR_GROUP) {
      years.push(yearIndex)
      yearIndex += 1
    }

    return years
  })

  const groupedVisibleYearRange = computed(() =>
    splitArray(visibleYearRange.value, 3)
  )

  const years = computed(() =>
    groupedVisibleYearRange.value.map(row =>
      row.map((year, index) => {
        return {
          year: year,
          id: `${year}-${index}`,
          disabled: !isYearInRange(year),
          left: isYearInRange(year - 1) ? year - 1 : null,
          right: isYearInRange(year + 1) ? year + 1 : null,
          up: isYearInRange(year - 3) ? year - 3 : null,
          down: isYearInRange(year + 3) ? year + 3 : null,
          home: row.find(year => isYearInRange(year)) || null,
          end: [...row].reverse().find(year => isYearInRange(year)) || null,
          pageUp: findClosestPastYear(year - YEAR_GROUP, year),
          pageDown: findClosestFutureYear(year + YEAR_GROUP, year),
        }
      })
    )
  )

  const firstVisibleYear = computed(() => visibleYearRange.value[0])
  const lastVisibleYear = computed(
    () => visibleYearRange.value[visibleYearRange.value.length - 1]
  )

  const hasPastYear = computed(() => isYearInRange(firstVisibleYear.value - 1))
  const hasFutureYear = computed(() => isYearInRange(lastVisibleYear.value + 1))

  const firstAvailableVisibleYear = computed(() =>
    findClosestPastYear(firstVisibleYear.value, lastVisibleYear.value)
  )

  const lastAvailableVisibleYear = computed(() =>
    findClosestFutureYear(lastVisibleYear.value, firstVisibleYear.value)
  )

  const isYearAvailable = year => {
    return (
      year >= firstAvailableVisibleYear.value &&
      year <= lastAvailableVisibleYear.value
    )
  }

  const findRowIndexByYear = (years, yearToFind) => {
    const rowIndex = years.value.findIndex(row =>
      row.find(({ year }) => year === yearToFind)
    )

    return rowIndex
  }

  const findButtonIndexByYear = (years, rowIndex, yearToFind) => {
    const buttonIndex = years.value[rowIndex].findIndex(
      ({ year }) => year === yearToFind
    )

    return buttonIndex
  }

  return {
    years,
    visibleYearRange,
    firstAvailableVisibleYear,
    lastAvailableVisibleYear,
    isYearAvailable,
    hasPastYear,
    hasFutureYear,
    findRowIndexByYear,
    findButtonIndexByYear,
  }
}
