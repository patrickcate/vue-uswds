import { ref } from 'vue'
import UsaDatePickerCalendar from './UsaDatePickerCalendar.vue'
import UsaDatePickerCalendarDay from '../UsaDatePickerCalendarDay/UsaDatePickerCalendarDay.vue'
import {
  MONTH_LABELS,
  MIN_DATE,
  MAX_DATE,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_ABBREVIATION_LABELS,
} from '@/utils/constants.js'
import { formatIsoDate } from '@/utils/dates.js'

const defaultProps = {
  open: true,
  selectedDate: UsaDatePickerCalendar.props.selectedDate.default,
  activeDate: formatIsoDate(new Date()),
  highlightedDate: UsaDatePickerCalendar.props.highlightedDate.default,
  minDate: MIN_DATE,
  maxDate: MAX_DATE,
  selectorMode: 'day',
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
  component: UsaDatePickerCalendar,
  subcomponents: { UsaDatePickerCalendarDay },
  title: 'Components/UsaDatePickerCalendar',
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    selectedDate: {
      control: { type: 'text' },
    },
    activeDate: {
      control: { type: 'text' },
    },
    highlightedDate: {
      control: { type: 'text' },
    },
    minDate: {
      control: { type: 'text' },
    },
    maxDate: {
      control: { type: 'text' },
    },
    selectorMode: {
      options: ['day', 'month', 'year'],
      control: {
        type: 'select',
      },
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
    'update:activeYearStart': {
      control: { type: 'text' },
    },
    'update:activeYearEnd': {
      control: { type: 'text' },
    },
  },
  args: {
    open: defaultProps.open,
    selectedDate: defaultProps.selectedDate,
    activeDate: defaultProps.activeDate,
    highlightedDate: defaultProps.highlightedDate,
    minDate: defaultProps.minDate,
    maxDate: defaultProps.maxDate,
    selectorMode: defaultProps.selectorMode,
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
  render: args => ({
    components: { UsaDatePickerCalendar },
    props: Object.keys(UsaDatePickerCalendar.props),
    setup() {
      const open = ref(args.open)
      const selectedDate = ref(args.selectedDate)
      const activeDate = ref(args.activeDate)
      const highlightedDate = ref(args.highlightedDate)
      const selectorMode = ref(args.selectorMode)
      return {
        args,
        open,
        selectedDate,
        activeDate,
        highlightedDate,
        selectorMode,
      }
    },
    template: `<UsaDatePickerCalendar
    v-model:open="args.open"
    v-model:selected-date="args.selectedDate"
    v-model:active-date="args.activeDate"
    v-model:highlighted-date="args.highlightedDate"
    v-model:selector-mode="args.selectorMode"
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
  ></UsaDatePickerCalendar>`,
  }),
  decorators: [
    () => ({
      template: '<div><story /></div>',
      provide: {
        inputHighlightedDate: ref(''),
      },
    }),
  ],
}

export const DefaultDatePickerCalendar = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar />`,
      },
    },
  },
}

export const SelectedDateDatePickerCalendar = {
  args: {
    ...defaultProps,
    selectedDate: '2001-04-09',
    activeDate: '2001-04-09',
  },
  name: 'Selected Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar v-model:selected-date="ref('2001-04-09')" v-model:active-date="ref('2001-04-09')" />`,
      },
    },
  },
}

export const MinDateDatePickerCalendar = {
  args: {
    ...defaultProps,
    minDate: '2020-01-15',
    activeDate: '2020-01-25',
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar v-model:min-date="ref('2020-01-15')" v-model:active-date="ref('2020-01-25')" />`,
      },
    },
  },
}

export const MaxDateDatePickerCalendar = {
  args: {
    ...defaultProps,
    maxDate: '2023-12-15',
    activeDate: '2023-12-01',
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar v-model:max-date="ref('2023-12-15')" v-model:active-date="ref('2023-12-01')" />`,
      },
    },
  },
}

export const MonthSelectorDateDatePickerCalendar = {
  args: {
    ...defaultProps,
    selectorMode: 'month',
  },
  name: 'Month Selector',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar v-model:selector-mode="ref('month')" />`,
      },
    },
  },
}

export const YearSelectorDateDatePickerCalendar = {
  args: {
    ...defaultProps,
    selectorMode: 'year',
  },
  name: 'Year Selector',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendar v-model:selector-mode="ref('year')" />`,
      },
    },
  },
}

export const CustomLabelsDateDatePickerCalendar = {
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
        code: `<UsaDatePickerCalendar :month-labels="[
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
      ]" :day-of-week-labels="[
        'Day A',
        'Day B',
        'Day C',
        'Day D',
        'Day E',
        'Day F',
        'Day G',
      ]" :day-of-week-abbreviation-labels="[1, 2, 3, 4, 5, 6, 7]" previous-year-button-label="Test previous year button label"
        next-year-button-label="Test next year button label" previous-month-button-label="Test previous month button label"
        next-month-button-label="Test next month button label" year-selection-button-label="Test year %s is selected"
        month-selection-button-label="Test month %s is selected" previous-years-button-label="Test navigate back 12 years"
        next-years-button-label="Test navigate forward 12 years" />`,
      },
    },
  },
}
