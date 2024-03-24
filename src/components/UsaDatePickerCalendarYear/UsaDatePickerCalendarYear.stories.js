import UsaDatePickerCalendarYear from './UsaDatePickerCalendarYear.vue'
import { MIN_DATE, MAX_DATE } from '@/utils/constants.js'
import { formatIsoDate } from '@/utils/dates.js'

const defaultProps = {
  selectedYear: new Date().getFullYear(),
  activeDate: formatIsoDate(new Date()),
  minDate: MIN_DATE,
  maxDate: MAX_DATE,
  previousYearsButtonLabel: 'Navigate back 12 years',
  nextYearsButtonLabel: 'Navigate forward 12 years',
}

export default {
  component: UsaDatePickerCalendarYear,
  title: 'Components/UsaDatePickerCalendarYear',
  argTypes: {
    selectedYear: {
      control: { type: 'number' },
    },
    activeDate: {
      control: { type: 'text' },
    },
    minDate: {
      control: { type: 'text' },
    },
    maxDate: {
      control: { type: 'text' },
    },
    previousYearsButtonLabel: {
      control: { type: 'text' },
    },
    nextYearsButtonLabel: {
      control: { type: 'text' },
    },
  },
  args: {
    selectedYear: defaultProps.selectedYear,
    activeDate: defaultProps.activeDate,
    minDate: defaultProps.minDate,
    maxDate: defaultProps.maxDate,
    previousYearsButtonLabel: defaultProps.previousYearsButtonLabel,
    nextYearsButtonLabel: defaultProps.nextYearsButtonLabel,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDatePickerCalendarYear },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaDatePickerCalendarYear
    :selected-year="selectedYear"
    :active-date="activeDate"
    :min-date="minDate"
    :max-date="maxDate"
    :previous-years-button-label="previousYearsButtonLabel"
    :next-years-button-label="nextYearsButtonLabel"
    ></UsaDatePickerCalendarYear>`,
})

export const DefaultDatePickerCalendarYear = DefaultTemplate.bind({})
DefaultDatePickerCalendarYear.args = {
  ...defaultProps,
}
DefaultDatePickerCalendarYear.storyName = 'Default'

export const SelectedYearDatePickerCalendarYear = DefaultTemplate.bind({})
SelectedYearDatePickerCalendarYear.args = {
  ...defaultProps,
  selectedYear: 2020,
}
SelectedYearDatePickerCalendarYear.storyName = 'Selected Year'

export const MinYearDatePickerCalendarYear = DefaultTemplate.bind({})
MinYearDatePickerCalendarYear.args = {
  ...defaultProps,
  minDate: '2020-01-01',
}
MinYearDatePickerCalendarYear.storyName = 'Min Date'

export const MaxYearDatePickerCalendarYear = DefaultTemplate.bind({})
MaxYearDatePickerCalendarYear.args = {
  ...defaultProps,
  maxDate: '2023-12-31',
}
MaxYearDatePickerCalendarYear.storyName = 'Max Date'

export const PreviousButtonLabelDatePickerCalendarYear = DefaultTemplate.bind(
  {},
)
PreviousButtonLabelDatePickerCalendarYear.args = {
  ...defaultProps,
  previousButtonLabel: 'Test previous button',
}
PreviousButtonLabelDatePickerCalendarYear.storyName =
  'Previous Years Button Label'

export const NextButtonLabelDatePickerCalendarYear = DefaultTemplate.bind({})
NextButtonLabelDatePickerCalendarYear.args = {
  ...defaultProps,
  nextButtonLabel: 'Test next button',
}
NextButtonLabelDatePickerCalendarYear.storyName = 'Next Years Button Label'
