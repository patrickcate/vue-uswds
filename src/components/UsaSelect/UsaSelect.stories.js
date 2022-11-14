import { ref } from 'vue'
import UsaSelect from './UsaSelect.vue'

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
  options: UsaSelect.props.options.default(),
  emptyLabel: UsaSelect.props.emptyLabel.default,
  modelValue: UsaSelect.props.modelValue.default,
  label: UsaSelect.props.label.default,
  required: UsaSelect.props.required.default,
  error: UsaSelect.props.error.default,
  id: UsaSelect.props.id.default,
  customClasses: UsaSelect.props.customClasses.default(),
}

export default {
  component: UsaSelect,
  title: 'Components/UsaSelect',
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
      table: {
        category: 'props',
      },
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
    default: {
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
    options: defaultProps.options,
    emptyLabel: defaultProps.emptyLabel,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    default: '',
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
  components: { UsaSelect },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaSelect
    v-bind="$attrs"
    :options="options"
    :empty-label="emptyLabel"
    :label="label"
    :required="required"
    :error="error"
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
  >
    <template v-if="${!!args['slot:label']}" #label>${
    args['slot:label']
  }</template>
    <template v-if="${!!args.default}" #default="{ options }">${
    args.default
  }</template>
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
    args['error-message']
  }</template>
  </UsaSelect>`,
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
  hint: 'Choose wisely',
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
  'error-message': 'Error message here',
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
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotDropdown.storyName = 'Label Slot'

export const ScopedSlotDropdown = DefaultTemplate.bind({})
ScopedSlotDropdown.args = {
  ...defaultProps,
  label: 'Dropdown label',
  options: testOptions,
  default: `<option :value="options[0].value">{{ options[0].value }}</option>`,
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
