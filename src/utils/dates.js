import {
  USA_DATE_REGEX_PATTERN,
  ISO_DATE_REGEX_PATTERN,
} from '@/utils/constants.js'

export const validateTimeString = time => {
  let isValidTimeString = false

  const [hours, minutes] = time.split(':').map(segment => parseInt(segment, 10))

  if (
    !Number.isNaN(hours) &&
    !Number.isNaN(minutes) &&
    hours >= 0 &&
    hours < 24 &&
    minutes >= 0 &&
    minutes < 60
  ) {
    isValidTimeString = true
  }

  return isValidTimeString
}

export const formatYearString = year => `${year}`.padStart(4, '0')
export const formatMonthString = month => `${month}`.padStart(2, '0')
export const formatDayString = day => `${day}`.padStart(2, '0')

export const getMonthIndex = dateObject => dateObject.getMonth()
export const getMonth = dateObject => getMonthIndex(dateObject) + 1
export const getYear = dateObject => dateObject.getFullYear()
export const getDay = dateObject => dateObject.getDate()

/**
 * Parses a ISO-8601 formatted string into a native Date object.
 *
 * @param {string} dateIsoString
 * A ISO-8601 formatted string representing a date.
 * @returns {object}
 */
export const parseIsoDate = dateString => {
  const [year, month, day] = dateString.split('-')

  const newDate = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    0,
    0,
    0,
    0
  ).setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))

  return new Date(newDate)
}

export const today = () => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
}

export const parseUsaDate = date => {
  const [month, day, year] = date.split('/')

  const newDate = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    0,
    0,
    0,
    0
  ).setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))

  return new Date(newDate)
}

export const formatIsoDate = dateObject => {
  const year = formatYearString(getYear(dateObject))
  const month = formatMonthString(getMonth(dateObject))
  const day = formatDayString(getDay(dateObject))

  return `${year}-${month}-${day}`
}

export const formatUsaDate = dateObject => {
  const year = formatYearString(getYear(dateObject))
  const month = formatMonthString(getMonth(dateObject))
  const day = formatDayString(getDay(dateObject))

  return `${month}/${day}/${year}`
}

export const UsaToIsoString = usaDateString => {
  const [month, day, year] = usaDateString.split('/')
  return `${year}-${month}-${day}`
}

export const isDateBefore = (date, dateToCompare) =>
  date.getTime() < dateToCompare.getTime()

export const isDateAfter = (date, dateToCompare) =>
  date.getTime() > dateToCompare.getTime()

export const isDateInRange = (date, minDate, maxDate) =>
  !isDateBefore(date, minDate) && !isDateAfter(date, maxDate)

export const setYear = (dateObject, newYear) => {
  const year = formatYearString(newYear)
  const month = formatMonthString(getMonth(dateObject))
  const day = formatDayString(getDay(dateObject))
  const newDateString = `${year}-${month}-${day}`

  return parseIsoDate(newDateString)
}
export const setMonth = (dateObject, newMonth) => {
  const year = formatYearString(getYear(dateObject))
  const month = formatMonthString(newMonth)
  const day = formatDayString(getDay(dateObject))
  const newDateString = `${year}-${month}-${day}`

  return parseIsoDate(newDateString)
}

export const isValidDate = dateObject => {
  return !Number.isNaN(dateObject?.getTime())
}

export const isValidIsoDate = isoDateString =>
  ISO_DATE_REGEX_PATTERN.test(isoDateString)

export const isValidUsaDate = usaDateString =>
  USA_DATE_REGEX_PATTERN.test(usaDateString)

export const minDate = dates => {
  const timestamps = dates.map(date => date.getTime())
  const min = Math.min(...timestamps)

  return new Date(min)
}

export const maxDate = dates => {
  const timestamps = dates.map(date => date.getTime())
  const max = Math.max(...timestamps)

  return new Date(max)
}

export const startOfYear = dateObject => {
  const year = getYear(dateObject)

  const date = new Date(formatIsoDate(dateObject))
  date.setFullYear(year, 0, 1)
  date.setHours(0, 0, 0, 0)

  return date
}

export const endOfYear = dateObject => {
  const year = getYear(dateObject)

  const date = new Date(formatIsoDate(dateObject))
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)

  return date
}
