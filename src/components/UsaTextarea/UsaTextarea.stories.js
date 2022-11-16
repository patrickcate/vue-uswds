import { ref } from 'vue'
import UsaTextarea from './UsaTextarea.vue'

const defaultProps = {
  width: UsaTextarea.props.width.default,
  modelValue: UsaTextarea.props.modelValue.default,
  label: UsaTextarea.props.label.default,
  required: UsaTextarea.props.required.default,
  error: UsaTextarea.props.error.default,
  id: UsaTextarea.props.id.default,
  customClasses: UsaTextarea.props.customClasses.default(),
}

export default {
  component: UsaTextarea,
  title: 'Components/UsaTextarea',
  argTypes: {
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
    width: defaultProps.width,
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
  components: { UsaTextarea },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaTextarea
    v-bind="$attrs"
    :width="width"
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
  </UsaTextarea>`,
})

export const DefaultTextarea = DefaultTemplate.bind({})
DefaultTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
}
DefaultTextarea.storyName = 'Default'

export const DefaultTextTextarea = DefaultTemplate.bind({})
DefaultTextTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  modelValue: `I'm some default text.`,
}
DefaultTextTextarea.storyName = 'Default Text'

export const WidthTextarea = DefaultTemplate.bind({})
WidthTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  width: '2xl',
}
WidthTextarea.storyName = 'Width'

export const HintTextarea = DefaultTemplate.bind({})
HintTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  hint: 'Choose wisely',
}
HintTextarea.storyName = 'Hint'

export const ErrorTextarea = DefaultTemplate.bind({})
ErrorTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  error: true,
}
ErrorTextarea.storyName = 'Error'

export const ErrorMessageTextarea = DefaultTemplate.bind({})
ErrorMessageTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageTextarea.storyName = 'Error Message'

export const RequiredTextarea = DefaultTemplate.bind({})
RequiredTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  required: true,
}
RequiredTextarea.storyName = 'Required'

export const LabelSlotTextarea = DefaultTemplate.bind({})
LabelSlotTextarea.args = {
  ...defaultProps,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotTextarea.storyName = 'Label Slot'

export const CustomIdTextarea = DefaultTemplate.bind({})
CustomIdTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  id: 'custom-id',
}
CustomIdTextarea.storyName = 'Custom ID'

export const CustomClassesTextarea = DefaultTemplate.bind({})
CustomClassesTextarea.args = {
  ...defaultProps,
  label: 'Textarea label',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
  },
}
CustomClassesTextarea.storyName = 'Custom CSS Classes'
