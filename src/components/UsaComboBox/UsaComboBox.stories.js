import UsaComboBox from './UsaComboBox.vue'
import { ref } from 'vue'
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
    labelSlot: {
      control: { type: 'text' },
    },
    hintSlot: {
      control: { type: 'text' },
    },
    errorMessageSlot: {
      control: { type: 'text' },
    },
    noResultsSlot: {
      control: { type: 'text' },
    },
    assistiveHintSlot: {
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
    labelSlot: '',
    hintSlot: '',
    errorMessageSlot: '',
    noResultsSlot: '',
    assistiveHintSlot: '',
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
    <template v-if="${!!args.labelSlot}" #label>${args.labelSlot}</template>
    <template v-if="${!!args.hintSlot}" #hint>${args.hintSlot}</template>
    <template v-if="${!!args.errorMessageSlot}" #error-message>${
    args.errorMessageSlot
  }</template>
    <template v-if="${!!args.noResultsSlot}" #no-results>${
    args.noResultsSlot
  }</template>
    <template v-if="${!!args.assistiveHintSlot}" #assistive-hint>${
    args.assistiveHintSlot
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
  hintSlot: 'Choose wisely',
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
  errorMessageSlot: 'Error message here',
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
  labelSlot: `<em>Label slot content</em>`,
}
LabelSlotComboBox.storyName = 'Label Slot'

export const NoResultsSlotComboBox = DefaultTemplate.bind({})
NoResultsSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  noResultsSlot: `<em>Sorry, didn't find that.</em>`,
}
NoResultsSlotComboBox.storyName = 'No Results Slot'

export const AssistiveHintSlotComboBox = DefaultTemplate.bind({})
AssistiveHintSlotComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  assistiveHintSlot: `<em>Some custom hint text for screenreaders.</em>`,
}
AssistiveHintSlotComboBox.storyName = 'Assistive Hint Slot'

export const CustomClassesComboBox = DefaultTemplate.bind({})
CustomClassesComboBox.args = {
  ...defaultProps,
  label: 'Fruit',
  options: testData,
  hintSlot: 'Choose wisely',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
    list: ['test-list-class'],
  },
}
CustomClassesComboBox.storyName = 'Custom CSS Classes'
