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
  render: args => ({
    components: { UsaDatePickerCalendarDay },
    props: Object.keys(UsaDatePickerCalendarDay.props),
    setup() {
      return { args }
    },
    template: `<UsaDatePickerCalendarDay
    :selected-date="args.selectedDate"
    :active-date="args.activeDate"
    :min-date="args.minDate"
    :max-date="args.maxDate"
    :month-labels="args.monthLabels"
    :day-of-week-labels="args.dayOfWeekLabels"
    :day-of-week-abbreviation-labels="args.dayOfWeekAbbreviationLabels"
    :previous-year-button-label="args.previousYearButtonLabel"
    :next-year-button-label="args.nextYearButtonLabel"
    :previous-month-button-label="args.previousMonthButtonLabel"
    :next-month-button-label="args.nextMonthButtonLabel"
    :year-selection-button-label="args.yearSelectionButtonLabel"
    :month-selection-button-label="args.monthSelectionButtonLabel"
    :previous-years-button-label="args.previousYearsButtonLabel"
    :next-years-button-label="args.nextYearsButtonLabel"
  ></UsaDatePickerCalendarDay>`,
  }),
}

export const DefaultDatePickerCalendarDay = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarDay />`,
      },
    },
  },
}

export const SelectedDateDatePickerCalendarDay = {
  args: {
    ...defaultProps,
    selectedDate: '2001-04-09',
    activeDate: '2001-04-09',
  },
  name: 'Selected Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarDay selected-date="2001-04-09" active-date="2001-04-09" />`,
      },
    },
  },
}

export const MinDateDatePickerCalendarDay = {
  args: {
    ...defaultProps,
    minDate: '2020-01-15',
    activeDate: '2020-01-25',
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarDay min-date="2020-01-15" active-date="2020-01-25" />`,
      },
    },
  },
}

export const MaxDateDatePickerCalendarDay = {
  args: {
    ...defaultProps,
    maxDate: '2023-12-15',
    activeDate: '2023-12-01',
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarDay max-date="2023-12-15" active-date="2023-12-01" />`,
      },
    },
  },
}

export const CustomLabelsDateDatePickerCalendarDay = {
  args: {
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
  },
  name: 'Custom Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarDay :month-labels="['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12']" :day-of-week-labels="['Day A', 'Day B', 'Day C', 'Day D', 'Day E', 'Day F', 'Day G']" :day-of-week-abbreviation-labels="[1, 2, 3, 4, 5, 6, 7]" previous-year-button-label="Test previous year button label"
        next-year-button-label="Test next year button label" previous-month-button-label="Test previous month button label"
        next-month-button-label="Test next month button label" year-selection-button-label="Test year %s is selected"
        month-selection-button-label="Test month %s is selected" previous-years-button-label="Test navigate back 12 years" next-years-button-label="Test navigate forward 12 years" />`,
      },
    },
  },
}
