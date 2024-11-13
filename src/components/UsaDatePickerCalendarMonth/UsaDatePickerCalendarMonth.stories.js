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
  render: args => ({
    components: { UsaDatePickerCalendarMonth },
    props: Object.keys(UsaDatePickerCalendarMonth.props),
    setup() {
      return { args }
    },
    template: `<UsaDatePickerCalendarMonth
    :active-date="args.activeDate"
    :month-labels="args.monthLabels"
    :min-date="args.minDate"
    :max-date="args.maxDate"
  ></UsaDatePickerCalendarMonth>`,
  }),
}

export const DefaultDatePickerCalendarMonth = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
}

export const MinMonthDatePickerCalendarMonth = {
  args: {
    ...defaultProps,
    minDate: '2020-01-01',
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
}

export const MaxMonthDatePickerCalendarMonth = {
  args: {
    ...defaultProps,
    maxDate: '2024-12-31',
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
}

export const MonthLabelsDatePickerCalendarMonth = {
  args: {
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
  },
  name: 'Custom Month Labels',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
}
