import UsaDateInput from './UsaDateInput.vue'

const defaultProps = {
  label: UsaDateInput.props.label.default,
  day: UsaDateInput.props.day.default,
  month: UsaDateInput.props.month.default,
  year: UsaDateInput.props.year.default,
  dateOrder: UsaDateInput.props.dateOrder.default(),
  dateLabels: UsaDateInput.props.dateLabels.default(),
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
