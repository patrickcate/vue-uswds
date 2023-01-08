import UsaDateInput from './UsaDateInput.vue'

const defaultProps = {
  label: UsaDateInput.props.label.default,
  day: UsaDateInput.props.day.default,
  month: UsaDateInput.props.month.default,
  year: UsaDateInput.props.year.default,
  dateOrder: UsaDateInput.props.dateOrder.default(),
  dateLabels: UsaDateInput.props.dateLabels.default(),
  monthAsSelect: UsaDateInput.props.monthAsSelect.default,
  monthEmptyLabel: UsaDateInput.props.monthEmptyLabel.default,
  monthOptions: UsaDateInput.props.monthOptions.default(),
  name: UsaDateInput.props.name.default,
  required: UsaDateInput.props.required.default,
  error: UsaDateInput.props.error.default,
  id: UsaDateInput.props.id.default,
}

export default {
  component: UsaDateInput,
  title: 'Components/UsaDateInput',
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    day: {
      control: { type: 'text' },
    },
    month: {
      control: { type: 'text' },
    },
    year: {
      control: { type: 'text' },
    },
    dateOrder: {
      control: { type: 'object' },
    },
    dateLabels: {
      control: { type: 'object' },
    },
    monthAsSelect: {
      control: { type: 'boolean' },
    },
    monthEmptyLabel: {
      control: { type: 'text' },
    },
    monthOptions: {
      control: { type: 'object' },
    },
    name: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    'slot:label': {
      control: { type: 'text' },
      name: 'label',
      table: {
        category: 'slots',
      },
    },
    hint: {
      control: { type: 'text' },
    },
    'error-message': {
      control: { type: 'text' },
    },
  },
  args: {
    label: defaultProps.label,
    day: defaultProps.day,
    month: defaultProps.month,
    year: defaultProps.year,
    dateOrder: defaultProps.dateOrder,
    dateLabels: defaultProps.dateLabels,
    monthAsSelect: defaultProps.monthAsSelect,
    monthEmptyLabel: defaultProps.monthEmptyLabel,
    monthOptions: defaultProps.monthOptions,
    name: defaultProps.name,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    'slot:label': '',
    hint: '',
    'error-message': '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDateInput },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaDateInput
    :label="label"
    :day="day"
    :month="month"
    :year="year"
    :dateOrder="dateOrder"
    :dateLabels="dateLabels"
    :monthAsSelect="monthAsSelect"
    :monthEmptyLabel="monthEmptyLabel"
    :monthOptions="monthOptions"
    :name="name"
    :required="required"
    :error="error"
    :id="id"
  >
    <template v-if="${!!args['slot:label']}" #label>${
    args['slot:label']
  }</template>
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
    args['error-message']
  }</template>
  </UsaDateInput>`,
})

export const DefaultDateInput = DefaultTemplate.bind({})
DefaultDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
}
DefaultDateInput.storyName = 'Default'

export const DefaultValueDateInput = DefaultTemplate.bind({})
DefaultValueDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  day: '01',
  month: '12',
  year: '2021',
}
DefaultValueDateInput.storyName = 'Default Date Values'

export const HintDateInput = DefaultTemplate.bind({})
HintDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  hint: 'DD-MM-YYYY',
}
HintDateInput.storyName = 'Hint'

export const ErrorMessageDateInput = DefaultTemplate.bind({})
ErrorMessageDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageDateInput.storyName = 'Error w/ Message'

export const RequiredDateInput = DefaultTemplate.bind({})
RequiredDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  required: true,
}
RequiredDateInput.storyName = 'Required'

export const NameAttrDateInput = DefaultTemplate.bind({})
NameAttrDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  name: 'expiration',
}
NameAttrDateInput.storyName = 'Custom Name Attribute'

export const CustomOrderDateInput = DefaultTemplate.bind({})
CustomOrderDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  dateOrder: ['year', 'month', 'day'],
}
CustomOrderDateInput.storyName = 'Custom Input Order'

export const ExcludeInputsDateInput = DefaultTemplate.bind({})
ExcludeInputsDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  dateOrder: ['year', 'month'],
}
ExcludeInputsDateInput.storyName = 'Exclude Inputs'

export const CustomInputLabelsDateInput = DefaultTemplate.bind({})
CustomInputLabelsDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  dateLabels: { month: 'MM', day: 'DD', year: 'YYYY' },
}
CustomInputLabelsDateInput.storyName = 'Custom Input Labels'

export const MonthAsSelectDateInput = DefaultTemplate.bind({})
MonthAsSelectDateInput.args = {
  ...defaultProps,
  label: 'Month as select form element',
  monthAsSelect: true,
}
MonthAsSelectDateInput.storyName = 'Month as Select form element'

export const CustomMonthSelectEmptyLabelDateInput = DefaultTemplate.bind({})
CustomMonthSelectEmptyLabelDateInput.args = {
  ...defaultProps,
  label: 'Custom month empty label',
  monthAsSelect: true,
  monthEmptyLabel: 'Choose a month',
}
CustomMonthSelectEmptyLabelDateInput.storyName = 'Custom Month Empty Label'

export const CustomMonthOptionsDateInput = DefaultTemplate.bind({})
CustomMonthOptionsDateInput.args = {
  ...defaultProps,
  label: 'Custom month options',
  monthAsSelect: true,
  monthOptions: [
    {
      value: 'January',
      text: 'Jan - 1',
    },
    {
      value: 'February',
      text: 'Feb - 2',
    },
    {
      value: 'March',
      text: 'Mar - 3',
    },
    {
      value: 'April',
      text: 'Apr - 4',
    },
    {
      value: 'May',
      text: 'May - 5',
    },
    {
      value: 'June',
      text: 'Jun - 6',
    },
    {
      value: 'July',
      text: 'Jul - 7',
    },
    {
      value: 'August',
      text: 'Aug - 8',
    },
    {
      value: 'September',
      text: 'Sep - 9',
    },
    {
      value: 'October',
      text: 'Oct - 10',
    },
    {
      value: 'November',
      text: 'Nov - 11',
    },
    {
      value: 'December',
      text: 'Dec - 12',
    },
  ],
}
CustomMonthOptionsDateInput.storyName = 'Custom Month Options'

export const LabelSlotDateInput = DefaultTemplate.bind({})
LabelSlotDateInput.args = {
  ...defaultProps,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotDateInput.storyName = 'Label Slot'

export const CustomIdDateInput = DefaultTemplate.bind({})
CustomIdDateInput.args = {
  ...defaultProps,
  label: 'Date input label',
  id: 'custom-id',
}
CustomIdDateInput.storyName = 'Custom ID'
