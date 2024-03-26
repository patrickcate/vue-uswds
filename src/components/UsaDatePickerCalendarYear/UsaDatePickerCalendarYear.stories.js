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
  render: args => ({
    components: { UsaDatePickerCalendarYear },
    props: Object.keys(UsaDatePickerCalendarYear.props),
    setup() {
      return { args }
    },
    template: `<UsaDatePickerCalendarYear
    :selected-year="args.selectedYear"
    :active-date="args.activeDate"
    :min-date="args.minDate"
    :max-date="args.maxDate"
    :previous-years-button-label="args.previousYearsButtonLabel"
    :next-years-button-label="args.nextYearsButtonLabel"
    ></UsaDatePickerCalendarYear>`,
  }),
}

export const DefaultDatePickerCalendarYear = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear />`,
      },
    },
  },
}

export const SelectedYearDatePickerCalendarYear = {
  args: {
    ...defaultProps,
    selectedYear: 2020,
  },
  name: 'Selected Year',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear :selected-year="2020" />`,
      },
    },
  },
}

export const MinYearDatePickerCalendarYear = {
  args: {
    ...defaultProps,
    minDate: '2020-01-01',
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear min-date="2020-01-01" />`,
      },
    },
  },
}

export const MaxYearDatePickerCalendarYear = {
  args: {
    ...defaultProps,
    maxDate: '2023-12-31',
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear max-date="2023-12-31" />`,
      },
    },
  },
}

export const PreviousButtonLabelDatePickerCalendarYear = {
  args: {
    ...defaultProps,
    previousButtonLabel: 'Test previous button',
  },
  name: 'Previous Years Button Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear previous-button-label="Test previous button" />`,
      },
    },
  },
}

export const NextButtonLabelDatePickerCalendarYear = {
  args: {
    ...defaultProps,
    nextButtonLabel: 'Test next button',
  },
  name: 'Next Years Button Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePickerCalendarYear next-button-label="Test next button" />`,
      },
    },
  },
}
