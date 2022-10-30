import { computed, shallowRef, watch } from 'vue'
import {
  isBefore,
  isAfter,
  isSameMonth,
  isSameDay,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfMonth,
  endOfWeek,
  addDays,
  subDays,
  addMonths,
  subMonths,
  addYears,
  subYears,
  setDate,
  differenceInCalendarDays,
} from 'date-fns'
import { splitArray } from '@/utils/common.js'
import {
  today,
  formatIsoDate,
  parseIsoDate,
  isValidDate,
} from '@/utils/dates.js'

export const useDayPicker = ({
  activeDate,
  minDate,
  maxDate,
  dayOfWeekLabels,
  monthLabels,
  isDateRange,
  dateRangeStart,
  dateRangeEnd,
}) => {
  const minDateObject = shallowRef(parseIsoDate(minDate.value))
  watch(minDate, newMinDate => (minDateObject.value = parseIsoDate(newMinDate)))

  const maxDateObject = shallowRef(parseIsoDate(maxDate.value))
  watch(maxDate, newMaxDate => (maxDateObject.value = parseIsoDate(newMaxDate)))

  const activeDateObject = shallowRef(parseIsoDate(activeDate.value))

  watch(
    activeDate,
    newActiveDate => (activeDateObject.value = parseIsoDate(newActiveDate))
  )

  const activeDateStart = computed(() =>
    startOfWeek(startOfMonth(activeDateObject.value))
  )
  const activeDateEnd = computed(() =>
    endOfWeek(endOfMonth(activeDateObject.value))
  )

  const activeMonthIndex = computed(() => activeDateObject.value.getMonth())

  const isPreviousMonth = (currentMonth, monthToCompare) => {
    if (currentMonth === 0) {
      return monthToCompare === 11
    }

    return currentMonth + 1 === monthToCompare
  }

  const isCurrentMonth = (currentMonth, monthToCompare) =>
    currentMonth === monthToCompare

  const isNextMonth = (currentMonth, monthToCompare) => {
    if (currentMonth === 11) {
      return monthToCompare === 0
    }

    return currentMonth - 1 === monthToCompare
  }

  const isDateInRange = date => {
    return (
      !isBefore(date, parseIsoDate(minDate.value)) &&
      !isAfter(date, parseIsoDate(maxDate.value))
    )
  }

  const isDateInCurrentRange = date => {
    return (
      isDateRange.value &&
      dateRangeStart.value &&
      dateRangeEnd.value &&
      isDateInRange(date) &&
      !isBefore(subDays(date, 1), parseIsoDate(dateRangeStart.value)) &&
      !isAfter(addDays(date, 1), parseIsoDate(dateRangeEnd.value))
    )
  }

  const formatAriaLabelDate = date => {
    const year = `${date.getFullYear()}`.padStart(4, '0')
    const day = date.getDate()
    const dayOfWeekIndex = date.getDay()
    const dayOfWeekLabel = dayOfWeekLabels.value[dayOfWeekIndex]
    const monthIndex = date.getMonth()
    const monthLabel = monthLabels.value[monthIndex]

    return `${day} ${monthLabel} ${year} ${dayOfWeekLabel}`
  }

  const findClosestPastDate = (start, stop) => {
    let index = start

    while (!isAfter(index, stop)) {
      if (isDateInRange(index)) {
        return formatIsoDate(index)
      }

      index = addDays(index, 1)
    }

    return formatIsoDate(start)
  }

  const findClosestFutureDate = (start, stop) => {
    let index = start

    while (!isBefore(startOfDay(index), stop)) {
      if (isDateInRange(index)) {
        return formatIsoDate(index)
      }

      index = subDays(index, 1)
    }

    return formatIsoDate(start)
  }

  const findPreviousMonth = currentDateObject => {
    return isDateInRange(subMonths(currentDateObject, 1), currentDateObject)
      ? formatIsoDate(subMonths(currentDateObject, 1))
      : findClosestPastDate(subMonths(currentDateObject, 1), currentDateObject)
  }

  const findNextMonth = currentDateObject => {
    return isDateInRange(addMonths(currentDateObject, 1), currentDateObject)
      ? formatIsoDate(addMonths(currentDateObject, 1))
      : findClosestFutureDate(
          addMonths(currentDateObject, 1),
          currentDateObject
        )
  }

  const findPreviousYear = currentDateObject => {
    const currentDay = currentDateObject.getDate()
    const previousYearDateObject = subYears(currentDateObject, 1)

    if (isDateInRange(previousYearDateObject)) {
      return formatIsoDate(previousYearDateObject)
    }
    const nextAvailableDate = parseIsoDate(
      findClosestPastDate(previousYearDateObject, currentDateObject)
    )

    const nextDateOnSameDay = setDate(nextAvailableDate, currentDay)

    if (
      !isValidDate(nextDateOnSameDay) ||
      !isDateInRange(nextDateOnSameDay) ||
      isSameDay(currentDateObject, nextDateOnSameDay)
    ) {
      return formatIsoDate(nextAvailableDate)
    }

    return formatIsoDate(nextDateOnSameDay)
  }

  const findNextYear = currentDateObject => {
    const currentDay = currentDateObject.getDate()
    const nextYearDateObject = addYears(currentDateObject, 1)

    if (isDateInRange(nextYearDateObject)) {
      return formatIsoDate(nextYearDateObject)
    }

    const nextAvailableDate = parseIsoDate(
      findClosestFutureDate(nextYearDateObject, currentDateObject)
    )

    const nextDateOnSameDay = setDate(nextAvailableDate, currentDay)

    if (
      !isValidDate(nextDateOnSameDay) ||
      !isDateInRange(nextDateOnSameDay) ||
      isSameDay(currentDateObject, nextDateOnSameDay)
    ) {
      return formatIsoDate(nextAvailableDate)
    }

    return formatIsoDate(nextDateOnSameDay)
  }

  const hasPastYear = computed(
    () => !isSameMonth(activeDateObject.value, minDateObject.value)
  )
  const hasFutureYear = computed(
    () => !isSameMonth(activeDateObject.value, maxDateObject.value)
  )
  const hasPastMonth = computed(
    () => !isSameMonth(activeDateObject.value, minDateObject.value)
  )
  const hasFutureMonth = computed(
    () => !isSameMonth(activeDateObject.value, maxDateObject.value)
  )

  const todaysDate = formatIsoDate(today())

  const visibleDateRange = computed(() => {
    const dates = []
    const totalDays = differenceInCalendarDays(
      activeDateEnd.value,
      activeDateStart.value
    )

    let index = 0

    while (index <= totalDays) {
      const currentDate = addDays(activeDateStart.value, index)

      const monthIndex = currentDate.getMonth()
      const month = monthIndex + 1

      dates.push({
        date: formatIsoDate(currentDate),
        label: formatAriaLabelDate(currentDate),
        day: currentDate.getDate(),
        month: month,
        year: currentDate.getFullYear(),
        isPreviousMonth: isPreviousMonth(monthIndex, activeMonthIndex.value),
        isCurrentMonth: isCurrentMonth(monthIndex, activeMonthIndex.value),
        isNextMonth: isNextMonth(monthIndex, activeMonthIndex.value),
        isInCurrentRange: isDateInCurrentRange(currentDate),
        previousMonth: findPreviousMonth(currentDate),
        nextMonth: findNextMonth(currentDate),
        previousYear: findPreviousYear(currentDate),
        nextYear: findNextYear(currentDate),
        disabled: !isDateInRange(currentDate),
        left: isDateInRange(subDays(currentDate, 1))
          ? formatIsoDate(subDays(currentDate, 1))
          : null,
        right: isDateInRange(addDays(currentDate, 1))
          ? formatIsoDate(addDays(currentDate, 1))
          : null,
        up: isDateInRange(subDays(currentDate, 7))
          ? formatIsoDate(subDays(currentDate, 7))
          : findClosestPastDate(parseIsoDate(minDate.value), currentDate),
        down: isDateInRange(addDays(currentDate, 7))
          ? formatIsoDate(addDays(currentDate, 7))
          : findClosestFutureDate(parseIsoDate(maxDate.value), currentDate),
        home: findClosestPastDate(startOfWeek(currentDate), currentDate),
        end: findClosestFutureDate(endOfWeek(currentDate), currentDate),
        pageUp: findPreviousMonth(currentDate),
        pageDown: findNextMonth(currentDate),
        shiftPageUp: findPreviousYear(currentDate),
        shiftPageDown: findNextYear(currentDate),
      })

      index += 1
    }

    return dates
  })

  const groupedVisibleDateRange = computed(() =>
    splitArray(visibleDateRange.value, 7)
  )

  const dates = computed(() => {
    return groupedVisibleDateRange.value.map(row => {
      return row.map((item, index) => {
        return {
          ...item,
          id: `${item.date}-${index}`,
        }
      })
    })
  })

  return {
    dates,
    todaysDate,
    hasPastYear,
    hasFutureYear,
    hasPastMonth,
    hasFutureMonth,
  }
}
