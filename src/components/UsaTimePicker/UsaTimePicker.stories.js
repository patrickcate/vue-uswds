import { ref } from 'vue'
import UsaTimePicker from './UsaTimePicker.vue'

const defaultProps = {
  minTime: UsaTimePicker.props.minTime.default,
  maxTime: UsaTimePicker.props.maxTime.default,
  step: UsaTimePicker.props.step.default,
  modelValue: UsaTimePicker.props.modelValue.default,
  label: UsaTimePicker.props.label.default,
  required: UsaTimePicker.props.required.default,
  disabled: UsaTimePicker.props.disabled.default,
  readonly: UsaTimePicker.props.readonly.default,
  error: UsaTimePicker.props.error.default,
  id: UsaTimePicker.props.id.default,
  clearButtonAriaLabel: UsaTimePicker.props.clearButtonAriaLabel.default,
  toggleButtonAriaLabel: UsaTimePicker.props.toggleButtonAriaLabel.default,
  customClasses: UsaTimePicker.props.customClasses.default(),
}

export default {
  component: UsaTimePicker,
  title: 'Components/UsaTimePicker',
  argTypes: {
    minTime: {
      control: { type: 'text' },
    },
    maxTime: {
      control: { type: 'text' },
    },
    step: {
      control: { type: 'number' },
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
    statusSlot: {
      control: { type: 'text' },
    },
    assistiveHintSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    minTime: defaultProps.minTime,
    maxTime: defaultProps.maxTime,
    step: defaultProps.step,
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
    statusSlot: '',
    assistiveHintSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTimePicker },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaTimePicker
    :min-time="minTime"
    :max-time="maxTime"
    :step="step"
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
    <template v-if="${!!args.statusSlot}" #status>${args.statusSlot}</template>
    <template v-if="${!!args.assistiveHintSlot}" #assistive-hint>${
    args.assistiveHintSlot
  }</template>
  </UsaTimePicker>`,
})

export const DefaultTimePicker = DefaultTemplate.bind({})
DefaultTimePicker.args = {
  ...defaultProps,
  label: 'Time',
}
DefaultTimePicker.storyName = 'Default'

export const DefaultValueTimePicker = DefaultTemplate.bind({})
DefaultValueTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  modelValue: '09:00',
}
DefaultValueTimePicker.storyName = 'Default Value'

export const MinMaxTimePicker = DefaultTemplate.bind({})
MinMaxTimePicker.args = {
  ...defaultProps,
  label: 'Custom time range',
  minTime: '09:00',
  maxTime: '13:00',
}
MinMaxTimePicker.storyName = 'Min/Max Time'

export const StepTimePicker = DefaultTemplate.bind({})
StepTimePicker.args = {
  ...defaultProps,
  label: 'Custom step',
  step: 15,
}
StepTimePicker.storyName = 'Step'

export const HintTimePicker = DefaultTemplate.bind({})
HintTimePicker.args = {
  ...defaultProps,
  label: 'Hint',
  hintSlot: 'Choose wisely',
}
HintTimePicker.storyName = 'Hint'

export const ErrorTimePicker = DefaultTemplate.bind({})
ErrorTimePicker.args = {
  ...defaultProps,
  label: 'Error',
  error: true,
}
ErrorTimePicker.storyName = 'Error'

export const ErrorMessageTimePicker = DefaultTemplate.bind({})
ErrorMessageTimePicker.args = {
  ...defaultProps,
  label: 'Error',
  error: true,
  errorMessageSlot: 'Error message here',
}
ErrorMessageTimePicker.storyName = 'Error Message'

export const RequiredTimePicker = DefaultTemplate.bind({})
RequiredTimePicker.args = {
  ...defaultProps,
  label: 'Required',
  required: true,
}
RequiredTimePicker.storyName = 'Required'

export const DisabledTimePicker = DefaultTemplate.bind({})
DisabledTimePicker.args = {
  ...defaultProps,
  label: 'Disabled',
  disabled: true,
  modelValue: '15:00',
}
DisabledTimePicker.storyName = 'Disabled'

export const ReadonlyTimePicker = DefaultTemplate.bind({})
ReadonlyTimePicker.args = {
  ...defaultProps,
  label: 'Readonly time',
  readonly: true,
  modelValue: '15:00',
}
ReadonlyTimePicker.storyName = 'Readonly'

export const CustomIdTimePicker = DefaultTemplate.bind({})
CustomIdTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  id: 'custom-id',
}
CustomIdTimePicker.storyName = 'Custom ID'

export const ClearButtonAriaLabelTimePicker = DefaultTemplate.bind({})
ClearButtonAriaLabelTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  modelValue: '15:00',
  clearButtonAriaLabel: 'Custom clear aria label',
}
ClearButtonAriaLabelTimePicker.storyName = 'Custom Clear Button Aria Label'

export const ToggleButtonAriaLabelTimePicker = DefaultTemplate.bind({})
ToggleButtonAriaLabelTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  toggleButtonAriaLabel: 'Custom toggle aria label',
}
ToggleButtonAriaLabelTimePicker.storyName = 'Custom Toggle Button Aria Label'

export const LabelSlotTimePicker = DefaultTemplate.bind({})
LabelSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  labelSlot: `<em>Label slot content</em>`,
}
LabelSlotTimePicker.storyName = 'Label Slot'

export const NoResultsSlotTimePicker = DefaultTemplate.bind({})
NoResultsSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  noResultsSlot: `<em>Sorry, didn't find that.</em>`,
}
NoResultsSlotTimePicker.storyName = 'No Results Slot'

export const StatusScopedSlotTimePicker = DefaultTemplate.bind({})
StatusScopedSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  statusSlot: 'Total options available: {{ filteredOptions.length }}',
}
StatusScopedSlotTimePicker.storyName = 'Status Scoped Slot'

export const AssistiveHintSlotTimePicker = DefaultTemplate.bind({})
AssistiveHintSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  assistiveHintSlot: `<em>Some custom hint text for screenreaders.</em>`,
}
AssistiveHintSlotTimePicker.storyName = 'Assistive Hint Slot'

export const CustomClassesTimePicker = DefaultTemplate.bind({})
CustomClassesTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  hintSlot: 'Choose wisely',
  customClasses: {
    formGroup: ['test-form-group-class'],
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
    list: ['test-list-class'],
  },
}
CustomClassesTimePicker.storyName = 'Custom CSS Classes'
