import UsaDatePickerCalendarMonth from './UsaDatePickerCalendarMonth.vue'
import { MONTH_LABELS, MIN_DATE, MAX_DATE } from '@/utils/constants.js'
import { formatIsoDate } from '@/utils/dates.js'

const defaultProps = {
  activeDate: formatIsoDate(new Date()),
  monthLabels: MONTH_LABELS,
  minDate: MIN_DATE,
  maxDate: MAX_DATE,
}

export default {
  component: UsaDatePickerCalendarMonth,
  title: 'Components/UsaDatePickerCalendarMonth',
  argTypes: {
    activeDate: {
      control: { type: 'text' },
    },
    monthLabels: {
      control: { type: 'object' },
    },
    minDate: {
      control: { type: 'text' },
    },
    maxDate: {
      control: { type: 'text' },
    },
  },
  args: {
    activeDate: defaultProps.selectedMonth,
    monthLabels: defaultProps.monthLabels,
    minDate: defaultProps.minMonth,
    maxDate: defaultProps.maxMonth,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDatePickerCalendarMonth },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaDatePickerCalendarMonth
    :active-date="activeDate"
    :month-labels="monthLabels"
    :min-date="minDate"
    :max-date="maxDate"
  ></UsaDatePickerCalendarMonth>`,
})

export const DefaultDatePickerCalendarMonth = DefaultTemplate.bind({})
DefaultDatePickerCalendarMonth.args = {
  ...defaultProps,
}
DefaultDatePickerCalendarMonth.storyName = 'Default'

export const MinMonthDatePickerCalendarMonth = DefaultTemplate.bind({})
MinMonthDatePickerCalendarMonth.args = {
  ...defaultProps,
  minDate: '2020-01-01',
}
MinMonthDatePickerCalendarMonth.storyName = 'Min Date'

export const MaxMonthDatePickerCalendarMonth = DefaultTemplate.bind({})
MaxMonthDatePickerCalendarMonth.args = {
  ...defaultProps,
  maxDate: '2024-12-31',
}
MaxMonthDatePickerCalendarMonth.storyName = 'Max Date'

export const MonthLabelsDatePickerCalendarMonth = DefaultTemplate.bind({})
MonthLabelsDatePickerCalendarMonth.args = {
  ...defaultProps,
  monthLabels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
}
MonthLabelsDatePickerCalendarMonth.storyName = 'Custom Month Labels'
