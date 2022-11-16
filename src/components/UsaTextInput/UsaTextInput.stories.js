import { ref } from 'vue'
import UsaTextInput from './UsaTextInput.vue'

const defaultProps = {
  type: UsaTextInput.props.type.default,
  width: UsaTextInput.props.width.default,
  modelValue: UsaTextInput.props.modelValue.default,
  label: UsaTextInput.props.label.default,
  group: UsaTextInput.props.group.default,
  required: UsaTextInput.props.required.default,
  error: UsaTextInput.props.error.default,
  id: UsaTextInput.props.id.default,
  customClasses: UsaTextInput.props.customClasses.default(),
}

export default {
  component: UsaTextInput,
  title: 'Components/UsaTextInput',
  argTypes: {
    type: {
      control: { type: 'text' },
    },
    width: {
      options: [
        '',
        '2xs',
        'xs',
        'sm',
        'small',
        'md',
        'medium',
        'lg',
        'xl',
        '2xl',
      ],
      control: {
        type: 'select',
      },
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
    group: {
      control: { type: 'boolean' },
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
    'input-prefix': {
      control: { type: 'text' },
    },
    'input-suffix': {
      control: { type: 'text' },
    },
  },
  args: {
    type: defaultProps.type,
    width: defaultProps.width,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    group: defaultProps.group,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    hint: '',
    'error-message': '',
    'input-prefix': '',
    'input-suffix': '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTextInput },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaTextInput
    v-bind="$attrs"
    :type="type"
    :width="width"
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
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
    args['error-message']
  }</template>
    <template v-if="${!!args['input-prefix']}" #input-prefix>${
    args['input-prefix']
  }</template>
    <template v-if="${!!args['input-suffix']}" #input-suffix>${
    args['input-suffix']
  }</template>
  </UsaTextInput>`,
})

export const DefaultTextInput = DefaultTemplate.bind({})
DefaultTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
}
DefaultTextInput.storyName = 'Default'

export const DefaultValueTextInput = DefaultTemplate.bind({})
DefaultValueTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  modelValue: `I am some default text`,
}
DefaultValueTextInput.storyName = 'Default Text'

export const InputTypeTextInput = DefaultTemplate.bind({})
InputTypeTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  type: 'number',
}
InputTypeTextInput.storyName = 'Input Type'

export const WidthTextInput = DefaultTemplate.bind({})
WidthTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  width: 'sm',
}
WidthTextInput.storyName = 'Width'

export const HintTextInput = DefaultTemplate.bind({})
HintTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  hint: 'Choose wisely',
}
HintTextInput.storyName = 'Hint'

export const ErrorTextInput = DefaultTemplate.bind({})
ErrorTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  error: true,
}
ErrorTextInput.storyName = 'Error'

export const ErrorMessageTextInput = DefaultTemplate.bind({})
ErrorMessageTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageTextInput.storyName = 'Error Message'

export const RequiredTextInput = DefaultTemplate.bind({})
RequiredTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  required: true,
}
RequiredTextInput.storyName = 'Required'

export const GroupedTextInput = DefaultTemplate.bind({})
GroupedTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  group: true,
}
GroupedTextInput.storyName = 'Group Input Elements'

export const LabelSlotTextInput = DefaultTemplate.bind({})
LabelSlotTextInput.args = {
  ...defaultProps,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotTextInput.storyName = 'Label Slot'

export const PrefixSlotTextInput = DefaultTemplate.bind({})
PrefixSlotTextInput.args = {
  ...defaultProps,
  'input-prefix': '@',
}
PrefixSlotTextInput.storyName = 'Input Prefix'

export const SuffixSlotTextInput = DefaultTemplate.bind({})
SuffixSlotTextInput.args = {
  ...defaultProps,
  'input-suffix': '%',
}
SuffixSlotTextInput.storyName = 'Input Suffix'

export const PrefixAndSuffixSlotTextInput = DefaultTemplate.bind({})
PrefixAndSuffixSlotTextInput.args = {
  ...defaultProps,
  'input-prefix': '@',
  'input-suffix': '%',
}
PrefixAndSuffixSlotTextInput.storyName = 'Input Prefix & Suffix'

export const CustomIdTextInput = DefaultTemplate.bind({})
CustomIdTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  id: 'custom-id',
}
CustomIdTextInput.storyName = 'Custom ID'

export const CustomClassesTextInput = DefaultTemplate.bind({})
CustomClassesTextInput.args = {
  ...defaultProps,
  label: 'Text input label',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
    inputGroup: ['test-input-group-class'],
    inputPrefix: ['test-input-prefix-class'],
    inputSuffix: ['test-input-suffix-class'],
  },
  'input-prefix': '@',
  'input-suffix': '%',
}
CustomClassesTextInput.storyName = 'Custom CSS Classes'
