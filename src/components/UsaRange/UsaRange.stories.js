import { ref } from 'vue'
import UsaRange from './UsaRange.vue'

const defaultProps = {
  min: UsaRange.props.min.default,
  max: UsaRange.props.max.default,
  unit: UsaRange.props.unit.default,
  preposition: UsaRange.props.preposition.default,
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
    unit: {
      control: { type: 'text' },
    },
    preposition: {
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
    min: defaultProps.min,
    max: defaultProps.max,
    unit: defaultProps.unit,
    preposition: defaultProps.preposition,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
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
  components: { UsaRange },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaRange
    v-bind="$attrs"
    :min="min"
    :max="max"
    :unit="unit"
    :preposition="preposition"
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
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
      args['error-message']
    }</template>
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

export const CustomUnitAndPrepositionRange = DefaultTemplate.bind({})
CustomUnitAndPrepositionRange.args = {
  ...defaultProps,
  label: 'Range label',
  modelValue: '75',
  unit: 'degrees',
  preposition: 'out of a total',
}
CustomUnitAndPrepositionRange.storyName = 'Custom Unit and Preposition'

export const HintRange = DefaultTemplate.bind({})
HintRange.args = {
  ...defaultProps,
  label: 'Range label',
  hint: 'Choose wisely',
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
  'error-message': 'Error message here',
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
  'slot:label': `<em>Label slot content</em>`,
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
