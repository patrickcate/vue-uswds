import UsaRange from './UsaRange.vue'

const defaultProps = {
  min: UsaRange.props.min.default,
  max: UsaRange.props.max.default,
  modelValue: UsaRange.props.modelValue.default,
  label: UsaRange.props.label.default,
  required: UsaRange.props.required.default,
  error: UsaRange.props.error.default,
  id: UsaRange.props.id.default,
  customClasses: UsaRange.props.customClasses.default(),
}

export default {
  component: UsaRange,
  title: 'Components/UsaRange',
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
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
    error: {
      control: { type: 'boolean' },
    },
    id: {
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
  },
  args: {
    min: defaultProps.min,
    max: defaultProps.max,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
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
  components: { UsaRange },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaRange
    :min="min"
    :max="max"
    :label="label"
    :required="required"
    :error="error"
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
    v-bind="$attrs"
  >
    <template #label>${args.labelSlot}</template>
    <template #hint>${args.hintSlot}</template>
    <template #error-message>${args.errorMessageSlot}</template>
  </UsaRange>`,
})

export const DefaultRange = DefaultTemplate.bind({})
DefaultRange.args = {
  ...defaultProps,
  label: 'Range label',
}
DefaultRange.storyName = 'Default'

export const DefaultValueRange = DefaultTemplate.bind({})
DefaultValueRange.args = {
  ...defaultProps,
  label: 'Range label',
  modelValue: '75',
}
DefaultValueRange.storyName = 'Default Value'

export const HintRange = DefaultTemplate.bind({})
HintRange.args = {
  ...defaultProps,
  label: 'Range label',
  hintSlot: 'Choose wisely',
}
HintRange.storyName = 'Hint'

export const ErrorRange = DefaultTemplate.bind({})
ErrorRange.args = {
  ...defaultProps,
  label: 'Range label',
  error: true,
}
ErrorRange.storyName = 'Error'

export const ErrorMessageRange = DefaultTemplate.bind({})
ErrorMessageRange.args = {
  ...defaultProps,
  label: 'Range label',
  error: true,
  errorMessageSlot: 'Error message here',
}
ErrorMessageRange.storyName = 'Error Message'

export const RequiredRange = DefaultTemplate.bind({})
RequiredRange.args = {
  ...defaultProps,
  label: 'Range label',
  required: true,
}
RequiredRange.storyName = 'Required'

export const LabelSlotRange = DefaultTemplate.bind({})
LabelSlotRange.args = {
  ...defaultProps,
  labelSlot: `<em>Label slot content</em>`,
}
LabelSlotRange.storyName = 'Label Slot'

export const CustomIdRange = DefaultTemplate.bind({})
CustomIdRange.args = {
  ...defaultProps,
  label: 'Range label',
  id: 'custom-id',
}
CustomIdRange.storyName = 'Custom ID'

export const CustomClassesRange = DefaultTemplate.bind({})
CustomClassesRange.args = {
  ...defaultProps,
  label: 'Range label',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
  },
}
CustomClassesRange.storyName = 'Custom CSS Classes'
