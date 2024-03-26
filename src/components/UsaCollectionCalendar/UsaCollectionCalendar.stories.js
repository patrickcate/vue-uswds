import UsaCollectionCalendar from './UsaCollectionCalendar.vue'

const defaultProps = {
  datetime: UsaCollectionCalendar.props.datetime.default,
  month: UsaCollectionCalendar.props.month.default,
  day: UsaCollectionCalendar.props.day.default,
  customClasses: UsaCollectionCalendar.props.customClasses.default(),
}

export default {
  component: UsaCollectionCalendar,
  title: 'Components/UsaCollectionCalendar',
  argTypes: {
    datetime: {
      control: { type: 'text' },
    },
    month: {
      control: { type: 'text' },
    },
    day: {
      control: { type: 'number', min: 1, max: 31 },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  args: {
    datetime: defaultProps.datetime,
    month: defaultProps.month,
    day: defaultProps.day,
    customClasses: defaultProps.customClasses,
  },
  render: args => ({
    components: { UsaCollectionCalendar },
    props: Object.keys(UsaCollectionCalendar.props),
    setup() {
      return { args }
    },
    template: `<UsaCollectionCalendar
    :datetime="args.datetime"
    :month="args.month"
    :day="args.day"
    :custom-classes="args.customClasses"
  />`,
  }),
}

export const DefaultCollectionCalendar = {
  args: {
    ...defaultProps,
    datetime: '2021-01-01',
    month: 'Jan',
    day: 1,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1"></UsaCollectionCalendar>`,
      },
    },
  },
}

export const CustomClassesCollectionCalendar = {
  args: {
    ...defaultProps,
    datetime: '2021-01-01',
    month: 'Jan',
    day: 1,
    customClasses: {
      datetime: ['test-datetime-class'],
      month: ['test-month-class'],
      day: ['test-day-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionCalendar datetime="2021-01-01" month="Jan" :day="1" :custom-classes="{
      datetime: ['test-datetime-class'],
      month: ['test-month-class'],
      day: ['test-day-class'],
    }"></UsaCollectionCalendar>`,
      },
    },
  },
}
