import { ref } from 'vue'
import UsaComboBox from './UsaComboBox.vue'
import { testData } from '@/components/UsaComboBox/UsaComboBox.fixtures.js'

const defaultProps = {
  options: UsaComboBox.props.options.default(),
  modelValue: UsaComboBox.props.modelValue.default,
  label: UsaComboBox.props.label.default,
  required: UsaComboBox.props.required.default,
  disabled: UsaComboBox.props.disabled.default,
  readonly: UsaComboBox.props.readonly.default,
  error: UsaComboBox.props.error.default,
  id: UsaComboBox.props.id.default,
  clearButtonAriaLabel: UsaComboBox.props.clearButtonAriaLabel.default,
  toggleButtonAriaLabel: UsaComboBox.props.toggleButtonAriaLabel.default,
  customClasses: UsaComboBox.props.customClasses.default(),
}

export default {
  component: UsaComboBox,
  title: 'Components/UsaComboBox',
  argTypes: {
    options: {
      control: { type: 'object' },
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
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    clearButtonAriaLabel: {
      control: { type: 'text' },
    },
    toggleButtonAriaLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
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
    'no-results': {
      control: { type: 'text' },
    },
    status: {
      control: { type: 'text' },
    },
    'assistive-hint': {
      control: { type: 'text' },
    },
  },
  args: {
    options: defaultProps.options,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    disabled: defaultProps.disabled,
    readonly: defaultProps.readonly,
    error: defaultProps.error,
    id: defaultProps.id,
    clearButtonAriaLabel: defaultProps.clearButtonAriaLabel,
    toggleButtonAriaLabel: defaultProps.toggleButtonAriaLabel,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    hint: '',
    'error-message': '',
    'no-results': '',
    status: '',
    'assistive-hint': '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaComboBox },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaComboBox
    :options="options"
    :label="label"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :id="id"
    :clear-button-aria-label="clearButtonAriaLabel"
    :toggle-button-aria-label="toggleButtonAriaLabel"
    :custom-classes="customClasses"
    v-model="modelValue"
  >
    <template v-if="${!!args['slot:label']}" #label>${
      args['slot:label']
    }</template>
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
      args['error-message']
    }</template>
    <template v-if="${!!args['no-results']}" #no-results>${
      args['no-results']
    }</template>
    <template v-if="${!!args.status}" #status="{ filteredOptions }">${
      args.status
    }</template>
    <template v-if="${!!args['assistive-hint']}" #assistive-hint>${
      args['assistive-hint']
    }</template>
  </UsaComboBox>`,
})

export const DefaultComboBox = DefaultTemplate.bind({})
DefaultComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
}
DefaultComboBox.storyName = 'Default'

export const DefaultValueComboBox = DefaultTemplate.bind({})
DefaultValueComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  modelValue: 'raspberry',
}
DefaultValueComboBox.storyName = 'Default Value'

export const HintComboBox = DefaultTemplate.bind({})
HintComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  hint: 'Choose wisely',
}
HintComboBox.storyName = 'Hint'

export const ErrorComboBox = DefaultTemplate.bind({})
ErrorComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  error: true,
}
ErrorComboBox.storyName = 'Error'

export const ErrorMessageComboBox = DefaultTemplate.bind({})
ErrorMessageComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageComboBox.storyName = 'Error Message'

export const RequiredComboBox = DefaultTemplate.bind({})
RequiredComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  required: true,
}
RequiredComboBox.storyName = 'Required'

export const DisabledComboBox = DefaultTemplate.bind({})
DisabledComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  disabled: true,
  modelValue: 'raspberry',
}
DisabledComboBox.storyName = 'Disabled'

export const ReadonlyComboBox = DefaultTemplate.bind({})
ReadonlyComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  readonly: true,
  modelValue: 'raspberry',
}
ReadonlyComboBox.storyName = 'Readonly'

export const CustomIdComboBox = DefaultTemplate.bind({})
CustomIdComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  id: 'custom-id',
}
CustomIdComboBox.storyName = 'Custom ID'

export const ClearButtonAriaLabelComboBox = DefaultTemplate.bind({})
ClearButtonAriaLabelComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  modelValue: 'pomegranate',
  clearButtonAriaLabel: 'Custom clear aria label',
}
ClearButtonAriaLabelComboBox.storyName = 'Custom Clear Button Aria Label'

export const ToggleButtonAriaLabelComboBox = DefaultTemplate.bind({})
ToggleButtonAriaLabelComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  toggleButtonAriaLabel: 'Custom toggle aria label',
}
ToggleButtonAriaLabelComboBox.storyName = 'Custom Toggle Button Aria Label'

export const LabelSlotComboBox = DefaultTemplate.bind({})
LabelSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotComboBox.storyName = 'Label Slot'

export const NoResultsSlotComboBox = DefaultTemplate.bind({})
NoResultsSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  'no-results': `<em>Sorry, didn't find that.</em>`,
}
NoResultsSlotComboBox.storyName = 'No Results Slot'

export const StatusScopedSlotComboBox = DefaultTemplate.bind({})
StatusScopedSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  status: 'Total options available: {{ filteredOptions.length }}',
}
StatusScopedSlotComboBox.storyName = 'Status Scoped Slot'

export const AssistiveHintSlotComboBox = DefaultTemplate.bind({})
AssistiveHintSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  'assistive-hint': `<em>Some custom hint text for screenreaders.</em>`,
}
AssistiveHintSlotComboBox.storyName = 'Assistive Hint Slot'

export const CustomClassesComboBox = DefaultTemplate.bind({})
CustomClassesComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  hint: 'Choose wisely',
  customClasses: {
    formGroup: ['test-form-group-class'],
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
    list: ['test-list-class'],
  },
}
CustomClassesComboBox.storyName = 'Custom CSS Classes'
