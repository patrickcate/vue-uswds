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
    'slot:label': '',
    hint: '',
    'error-message': '',
    'no-results': '',
    status: '',
    'assistive-hint': '',
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
    <template v-if="${!!args.status}" #status>${args.status}</template>
    <template v-if="${!!args['assistive-hint']}" #assistive-hint>${
      args['assistive-hint']
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
  hint: 'Choose wisely',
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
  'error-message': 'Error message here',
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
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotTimePicker.storyName = 'Label Slot'

export const NoResultsSlotTimePicker = DefaultTemplate.bind({})
NoResultsSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  'no-results': `<em>Sorry, didn't find that.</em>`,
}
NoResultsSlotTimePicker.storyName = 'No Results Slot'

export const StatusScopedSlotTimePicker = DefaultTemplate.bind({})
StatusScopedSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  status: 'Total options available: {{ filteredOptions.length }}',
}
StatusScopedSlotTimePicker.storyName = 'Status Scoped Slot'

export const AssistiveHintSlotTimePicker = DefaultTemplate.bind({})
AssistiveHintSlotTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  'assistive-hint': `<em>Some custom hint text for screenreaders.</em>`,
}
AssistiveHintSlotTimePicker.storyName = 'Assistive Hint Slot'

export const CustomClassesTimePicker = DefaultTemplate.bind({})
CustomClassesTimePicker.args = {
  ...defaultProps,
  label: 'Time',
  hint: 'Choose wisely',
  customClasses: {
    formGroup: ['test-form-group-class'],
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
    list: ['test-list-class'],
  },
}
CustomClassesTimePicker.storyName = 'Custom CSS Classes'
