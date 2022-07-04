import UsaDatePickerCalendarDay from './UsaDatePickerCalendarDay.vue'
import {
  MONTH_LABELS,
  MIN_DATE,
  MAX_DATE,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_ABBREVIATION_LABELS,
} from '@/utils/constants.js'
import { formatIsoDate } from '@/utils/dates.js'
import { ref } from 'vue'

const defaultProps = {
  selectedDate: UsaDatePickerCalendarDay.props.selectedDate.default,
  activeDate: formatIsoDate(new Date()),
  minDate: MIN_DATE,
  maxDate: MAX_DATE,
  monthLabels: MONTH_LABELS,
  dayOfWeekLabels: DAY_OF_WEEK_LABELS,
  dayOfWeekAbbreviationLabels: DAY_OF_WEEK_ABBREVIATION_LABELS,
  previousYearButtonLabel: 'Navigate back one year',
  nextYearButtonLabel: 'Navigate forward one year',
  previousMonthButtonLabel: 'Navigate back one month',
  nextMonthButtonLabel: 'Navigate forward one month',
  monthSelectionButtonLabel: '%s. Click to select year',
  yearSelectionButtonLabel: '%s. Click to select month',
  previousYearsButtonLabel: 'Navigate back 12 years',
  nextYearsButtonLabel: 'Navigate forward 12 years',
}

export default {
  component: UsaDatePickerCalendarDay,
  title: 'Components/UsaDatePickerCalendarDay',
  argTypes: {
    selectedDate: {
      control: { type: 'text' },
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
    monthLabels: {
      control: { type: 'object' },
    },
    dayOfWeekLabels: {
      control: { type: 'object' },
    },
    dayOfWeekAbbreviationLabels: {
      control: { type: 'object' },
    },
    previousYearButtonLabel: {
      control: { type: 'text' },
    },
    nextYearButtonLabel: {
      control: { type: 'text' },
    },
    previousMonthButtonLabel: {
      control: { type: 'text' },
    },
    nextMonthButtonLabel: {
      control: { type: 'text' },
    },
    monthSelectionButtonLabel: {
      control: { type: 'text' },
    },
    yearSelectionButtonLabel: {
      control: { type: 'text' },
    },
    previousYearsButtonLabel: {
      control: { type: 'text' },
    },
    nextYearsButtonLabel: {
      control: { type: 'text' },
    },
    'update:open': {
      control: { type: 'boolean' },
    },
    'update:selectedDate': {
      control: { type: 'text' },
    },
    'update:activeDate': {
      control: { type: 'text' },
    },
    'update:highlightedDate': {
      control: { type: 'text' },
    },
    'update:selectorMode': {
      control: { type: 'text' },
    },
    'update:isPristine': {
      control: { type: 'boolean' },
    },
  },
  args: {
    selectedDate: defaultProps.selectedDate,
    activeDate: defaultProps.activeDate,
    minDate: defaultProps.minDate,
    maxDate: defaultProps.maxDate,
    monthLabels: defaultProps.monthLabels,
    dayOfWeekLabels: defaultProps.dayOfWeekLabels,
    dayOfWeekAbbreviationLabels: defaultProps.dayOfWeekAbbreviationLabels,
    previousYearButtonLabel: defaultProps.previousYearButtonLabel,
    nextYearButtonLabel: defaultProps.nextYearButtonLabel,
    previousMonthButtonLabel: defaultProps.previousMonthButtonLabel,
    nextMonthButtonLabel: defaultProps.nextMonthButtonLabel,
    monthSelectionButtonLabel: defaultProps.monthSelectionButtonLabel,
    yearSelectionButtonLabel: defaultProps.yearSelectionButtonLabel,
    previousYearsButtonLabel: defaultProps.previousYearsButtonLabel,
    nextYearsButtonLabel: defaultProps.nextYearsButtonLabel,
  },
  decorators: [
    () => ({
      template: '<div><story /></div>',
      provide: {
        inputHighlightedDate: ref(''),
      },
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDatePickerCalendarDay },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaDatePickerCalendarDay
    :selected-date="selectedDate"
    :active-date="activeDate"
    :min-date="minDate"
    :max-date="maxDate"
    :month-labels="monthLabels"
    :day-of-week-labels="dayOfWeekLabels"
    :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
    :previous-year-button-label="previousYearButtonLabel"
    :next-year-button-label="nextYearButtonLabel"
    :previous-month-button-label="previousMonthButtonLabel"
    :next-month-button-label="nextMonthButtonLabel"
    :year-selection-button-label="yearSelectionButtonLabel"
    :month-selection-button-label="monthSelectionButtonLabel"
    :previous-years-button-label="previousYearsButtonLabel"
    :next-years-button-label="nextYearsButtonLabel"
  ></UsaDatePickerCalendarDay>`,
})

export const DefaultDatePickerCalendarDay = DefaultTemplate.bind({})
DefaultDatePickerCalendarDay.args = {
  ...defaultProps,
}
DefaultDatePickerCalendarDay.storyName = 'Default'

export const SelectedDateDatePickerCalendarDay = DefaultTemplate.bind({})
SelectedDateDatePickerCalendarDay.args = {
  ...defaultProps,
  selectedDate: '2001-04-09',
  activeDate: '2001-04-09',
}
SelectedDateDatePickerCalendarDay.storyName = 'Selected Date'

export const MinDateDatePickerCalendarDay = DefaultTemplate.bind({})
MinDateDatePickerCalendarDay.args = {
  ...defaultProps,
  minDate: '2020-01-15',
  activeDate: '2020-01-25',
}
MinDateDatePickerCalendarDay.storyName = 'Min Date'

export const MaxDateDatePickerCalendarDay = DefaultTemplate.bind({})
MaxDateDatePickerCalendarDay.args = {
  ...defaultProps,
  maxDate: '2023-12-15',
  activeDate: '2023-12-01',
}
MaxDateDatePickerCalendarDay.storyName = 'Max Date'

export const CustomLabelsDateDatePickerCalendarDay = DefaultTemplate.bind({})
CustomLabelsDateDatePickerCalendarDay.args = {
  ...defaultProps,
  monthLabels: [
    'Month 1',
    'Month 2',
    'Month 3',
    'Month 4',
    'Month 5',
    'Month 6',
    'Month 7',
    'Month 8',
    'Month 9',
    'Month 10',
    'Month 11',
    'Month 12',
  ],
  dayOfWeekLabels: [
    'Day A',
    'Day B',
    'Day C',
    'Day D',
    'Day E',
    'Day F',
    'Day G',
  ],
  dayOfWeekAbbreviationLabels: ['1', '2', '3', '4', '5', '6', '7'],
  previousYearButtonLabel: 'Test previous year button label',
  nextYearButtonLabel: 'Test next year button label',
  previousMonthButtonLabel: 'Test previous month button label',
  nextMonthButtonLabel: 'Test next month button label',
  yearSelectionButtonLabel: 'Test year %s is selected',
  monthSelectionButtonLabel: 'Test month %s is selected',
  previousYearsButtonLabel: 'Test navigate back 12 years',
  nextYearsButtonLabel: 'Test navigate forward 12 years',
}
CustomLabelsDateDatePickerCalendarDay.storyName = 'Custom Labels'
