import UsaDropdown from './UsaDropdown.vue'

const testOptions = [
  {
    value: 1,
    text: 'Item 1',
    disabled: true,
  },
  {
    value: 2,
    text: 'Item 2',
  },
  {
    group: 'Item 3',
    options: [
      {
        value: 3.1,
        text: 'Item 3.1',
      },
      {
        value: 3.2,
        text: 'Item 3.2',
        disabled: true,
      },
      {
        value: 3.3,
        text: 'Item 3.3',
      },
    ],
  },
  {
    value: 4,
    text: 'Item 4',
  },
  {
    group: 'Item 5',
    disabled: true,
    options: [
      {
        value: 5.1,
        text: 'Item 5.1',
      },
      {
        value: 5.2,
        text: 'Item 5.2',
      },
    ],
  },
]

const defaultProps = {
  options: UsaDropdown.props.options.default(),
  emptyLabel: UsaDropdown.props.emptyLabel.default,
  modelValue: UsaDropdown.props.modelValue.default,
  label: UsaDropdown.props.label.default,
  required: UsaDropdown.props.required.default,
  error: UsaDropdown.props.error.default,
  id: UsaDropdown.props.id.default,
  customClasses: UsaDropdown.props.customClasses.default(),
}

export default {
  component: UsaDropdown,
  title: 'Components/UsaDropdown',
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    emptyLabel: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'text' },
    },
    label: {
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
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    labelSlot: {
      control: { type: 'text' },
    },
    hintSlot: {
      control: { type: 'text' },
    },
    errorMessageSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    options: defaultProps.options,
    emptyLabel: defaultProps.emptyLabel,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    labelSlot: '',
    hintSlot: '',
    errorMessageSlot: '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDropdown },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaDropdown
    :options="options"
    :empty-label="emptyLabel"
    :label="label"
    :required="required"
    :error="error"
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
    v-bind="$attrs"
  >
    <template #label>${args.labelSlot}</template>
    <template #default="{ options }">${args.defaultSlot}</template>
    <template #hint>${args.hintSlot}</template>
    <template #error-message>${args.errorMessageSlot}</template>
  </UsaDropdown>`,
})

export const DefaultDropdown = DefaultTemplate.bind({})
DefaultDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
}
DefaultDropdown.storyName = 'Default'

export const DefaultByDefaultDropdown = DefaultTemplate.bind({})
DefaultByDefaultDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  modelValue: '2',
}
DefaultByDefaultDropdown.storyName = 'Selected by Default'

export const HintDropdown = DefaultTemplate.bind({})
HintDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  hintSlot: 'Choose wisely',
}
HintDropdown.storyName = 'Hint'

export const ErrorDropdown = DefaultTemplate.bind({})
ErrorDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  error: true,
}
ErrorDropdown.storyName = 'Error'

export const ErrorMessageDropdown = DefaultTemplate.bind({})
ErrorMessageDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  error: true,
  errorMessageSlot: 'Error message here',
}
ErrorMessageDropdown.storyName = 'Error Message'

export const RequiredDropdown = DefaultTemplate.bind({})
RequiredDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  required: true,
}
RequiredDropdown.storyName = 'Required'

export const CustomEmptyLabelDropdown = DefaultTemplate.bind({})
CustomEmptyLabelDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  emptyLabel: 'Custom empty label',
}
CustomEmptyLabelDropdown.storyName = 'Custom Empty Label'

export const LabelSlotDropdown = DefaultTemplate.bind({})
LabelSlotDropdown.args = {
  ...defaultProps,
  options: testOptions,
  labelSlot: `<em>Label slot content</em>`,
}
LabelSlotDropdown.storyName = 'Label Slot'

export const ScopedSlotDropdown = DefaultTemplate.bind({})
ScopedSlotDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  defaultSlot: `<option :value="options[0].value">{{ options[0].value }}</option>`,
}
ScopedSlotDropdown.storyName = 'Scoped Slot'

export const CustomIdDropdown = DefaultTemplate.bind({})
CustomIdDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  id: 'custom-id',
}
CustomIdDropdown.storyName = 'Custom ID'

export const CustomClassesDropdown = DefaultTemplate.bind({})
CustomClassesDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
  },
}
CustomClassesDropdown.storyName = 'Custom CSS Classes'
