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
    group: {
      control: { type: 'boolean' },
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
    group: defaultProps.group,
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
    :group="group"
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

export const DefaultSelect = DefaultTemplate.bind({})
DefaultSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
}
DefaultSelect.storyName = 'Default'

export const DefaultByDefaultSelect = DefaultTemplate.bind({})
DefaultByDefaultSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  modelValue: '2',
}
DefaultByDefaultSelect.storyName = 'Selected by Default'

export const HintSelect = DefaultTemplate.bind({})
HintSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  hint: 'Choose wisely',
}
HintSelect.storyName = 'Hint'

export const ErrorSelect = DefaultTemplate.bind({})
ErrorSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  error: true,
}
ErrorSelect.storyName = 'Error'

export const ErrorMessageSelect = DefaultTemplate.bind({})
ErrorMessageSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageSelect.storyName = 'Error Message'

export const GroupedSelect = DefaultTemplate.bind({})
GroupedSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  group: true,
}
GroupedSelect.storyName = 'Group Elements'

export const RequiredSelect = DefaultTemplate.bind({})
RequiredSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  required: true,
}
RequiredSelect.storyName = 'Required'

export const CustomEmptyLabelSelect = DefaultTemplate.bind({})
CustomEmptyLabelSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  emptyLabel: 'Custom empty label',
}
CustomEmptyLabelSelect.storyName = 'Custom Empty Label'

export const LabelSlotSelect = DefaultTemplate.bind({})
LabelSlotSelect.args = {
  ...defaultProps,
  options: testOptions,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotSelect.storyName = 'Label Slot'

export const ScopedSlotSelect = DefaultTemplate.bind({})
ScopedSlotSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  default: `<option :value="options[0].value">{{ options[0].value }}</option>`,
}
ScopedSlotSelect.storyName = 'Scoped Slot'

export const CustomIdSelect = DefaultTemplate.bind({})
CustomIdSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  id: 'custom-id',
}
CustomIdSelect.storyName = 'Custom ID'

export const CustomClassesSelect = DefaultTemplate.bind({})
CustomClassesSelect.args = {
  ...defaultProps,
  label: 'Select label',
  options: testOptions,
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
  },
}
CustomClassesSelect.storyName = 'Custom CSS Classes'
