import {
  isBefore,
  isAfter,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfMonth,
  endOfWeek,
  addDays,
  subDays,
  differenceInCalendarDays,
} from 'date-fns'

import { MONTH_LABELS } from '@/utils/constants.js'

import { formatIsoDate, getYear, getMonthIndex } from '@/utils/dates.js'

export const getTestData = today => {
  const todaysIsoDate = formatIsoDate(today)
  const monthStart = startOfWeek(startOfMonth(today))
  const monthEnd = endOfWeek(endOfMonth(today))
  const start = startOfDay(addDays(monthStart, 8))
  const startAlternative = startOfDay(addDays(monthStart, 10))
  const end = startOfDay(subDays(monthEnd, 13))
  const endAlternative = startOfDay(subDays(monthEnd, 11))

  const total = differenceInCalendarDays(monthEnd, monthStart)

  const days = []

  for (let index = 0; index <= total; index++) {
    const currentDay = addDays(monthStart, index)

    days.push({
      date: formatIsoDate(currentDay),
      isInRange: isAfter(currentDay, start) && isBefore(currentDay, end),
      isBeforeRangeStart: isBefore(currentDay, start),
      isAfterRangeEnd: isAfter(currentDay, end),
      isInAlternativeRange:
        isAfter(currentDay, startAlternative) &&
        isBefore(currentDay, endAlternative),
      isBeforeRangeStartAlternative: isBefore(currentDay, startAlternative),
      isAfterRangeEndAlternative: isAfter(currentDay, endAlternative),
    })
  }

  return {
    todaysIsoDate,
    rangeStart: formatIsoDate(start),
    rangeEnd: formatIsoDate(end),
    rangeStartAlternative: formatIsoDate(startAlternative),
    rangeEndAlternative: formatIsoDate(endAlternative),
    days,
    month: MONTH_LABELS[getMonthIndex(start)],
    year: getYear(start),
  }
}
