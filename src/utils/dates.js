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
