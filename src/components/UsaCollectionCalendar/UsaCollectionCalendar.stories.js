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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionCalendar },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionCalendar
    :datetime="datetime"
    :month="month"
    :day="${args.day + ''}"
    :custom-classes="customClasses"
  />`,
})

export const DefaultCollectionCalendar = DefaultTemplate.bind({})
DefaultCollectionCalendar.args = {
  ...defaultProps,
  datetime: '2021-01-01',
  month: 'Jan',
  day: 1,
}
DefaultCollectionCalendar.storyName = 'Default'

export const CustomClassesCollectionCalendar = DefaultTemplate.bind({})
CustomClassesCollectionCalendar.args = {
  ...defaultProps,
  datetime: '2021-01-01',
  month: 'Jan',
  day: 1,
  customClasses: {
    datetime: ['test-datetime-class'],
    month: ['test-month-class'],
    day: ['test-day-class'],
  },
}
CustomClassesCollectionCalendar.storyName = 'Custom Classes'
