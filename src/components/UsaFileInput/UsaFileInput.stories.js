import UsaFileInput from './UsaFileInput.vue'

const defaultProps = {
  accept: UsaFileInput.props.accept.default,
  multiple: UsaFileInput.props.multiple.default,
  label: UsaFileInput.props.label.default,
  required: UsaFileInput.props.required.default,
  disabled: UsaFileInput.props.disabled.default,
  error: UsaFileInput.props.error.default,
  id: UsaFileInput.props.id.default,
  customClasses: UsaFileInput.props.customClasses.default(),
}

export default {
  component: UsaFileInput,
  title: 'Components/UsaFileInput',
  argTypes: {
    accept: {
      control: { type: 'text' },
    },
    multiple: {
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
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    'slot:label': {
      control: { type: 'text' },
      name: 'label',
      table: {
        category: 'slots',
      },
    },
    'slot:status': {
      control: { type: 'text' },
      name: 'status',
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
    instructions: {
      control: { type: 'text' },
    },
    'preview-heading': {
      control: { type: 'text' },
    },
    'invalid-files-message': {
      control: { type: 'text' },
    },
  },
  args: {
    accept: defaultProps.accept,
    multiple: defaultProps.multiple,
    label: defaultProps.label,
    required: defaultProps.required,
    disabled: defaultProps.disabled,
    error: defaultProps.error,
    id: defaultProps.id,
    'slot:label': '',
    'slot:status': '',
    hint: '',
    'error-message': '',
    instructions: '',
    'preview-heading': '',
    'invalid-files-message': '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFileInput },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFileInput
    :id="id"
    :accept="accept"
    :multiple="multiple"
    :label="label"
    :required="required"
    :disabled="disabled"
    :error="error"
  >
    <template v-if="${!!args['slot:label']}" #label>${
    args['slot:label']
  }</template>
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
    args['error-message']
  }</template>
    <template v-if="${!!args[
      'slot:status'
    ]}" #status="{ multiple, loadedFiles, hasInvalidFiles }">${
    args['slot:status']
  }</template>
    <template v-if="${!!args.instructions}" #instructions="{ multiple }">${
    args.instructions
  }</template>
    <template v-if="${!!args[
      'preview-heading'
    ]}" #preview-heading="{ loadedFiles }">${args['preview-heading']}</template>
    <template v-if="${!!args[
      'invalid-files-message'
    ]}" #invalid-files-message>${args['invalid-files-message']}</template>
  </UsaFileInput>`,
})

export const DefaultFileInput = DefaultTemplate.bind({})
DefaultFileInput.args = {
  ...defaultProps,
  label: 'File',
}
DefaultFileInput.storyName = 'Default'

export const MultipleFileInput = DefaultTemplate.bind({})
MultipleFileInput.args = {
  ...defaultProps,
  label: 'Multiple Files Allowed',
  multiple: true,
}
MultipleFileInput.storyName = 'Multiple Files'

export const AcceptedFileInput = DefaultTemplate.bind({})
AcceptedFileInput.args = {
  ...defaultProps,
  label: `Only images and PDF's allowed`,
  accept: 'image/*,.pdf',
}
AcceptedFileInput.storyName = 'Accepted Files'

export const HintFileInput = DefaultTemplate.bind({})
HintFileInput.args = {
  ...defaultProps,
  label: 'File',
  hint: 'Choose wisely',
}
HintFileInput.storyName = 'Hint'

export const ErrorFileInput = DefaultTemplate.bind({})
ErrorFileInput.args = {
  ...defaultProps,
  label: 'File',
  error: true,
}
ErrorFileInput.storyName = 'Error'

export const ErrorMessageFileInput = DefaultTemplate.bind({})
ErrorMessageFileInput.args = {
  ...defaultProps,
  label: 'File',
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageFileInput.storyName = 'Error Message'

export const RequiredFileInput = DefaultTemplate.bind({})
RequiredFileInput.args = {
  ...defaultProps,
  label: 'File',
  required: true,
}
RequiredFileInput.storyName = 'Required'

export const DisabledFileInput = DefaultTemplate.bind({})
DisabledFileInput.args = {
  ...defaultProps,
  label: 'File',
  disabled: true,
}
DisabledFileInput.storyName = 'Disabled'

export const CustomIdFileInput = DefaultTemplate.bind({})
CustomIdFileInput.args = {
  ...defaultProps,
  label: 'File',
  id: 'custom-id',
}
CustomIdFileInput.storyName = 'Custom ID'

export const InstructionsSlotFileInput = DefaultTemplate.bind({})
InstructionsSlotFileInput.args = {
  ...defaultProps,
  label: 'File',
  instructions:
    'You can choose multiple files: <strong>{{ multiple }}</strong>',
}
InstructionsSlotFileInput.storyName = 'Instructions Slot'

export const PreviewHeadingSlotFileInput = DefaultTemplate.bind({})
PreviewHeadingSlotFileInput.args = {
  ...defaultProps,
  label: 'Load file to see preview heading',
  'preview-heading': 'Total files: <strong>{{ loadedFiles.length }}</strong>',
}
PreviewHeadingSlotFileInput.storyName = 'Preview Heading Slot'

export const InvalidFilesMessageSlotFileInput = DefaultTemplate.bind({})
InvalidFilesMessageSlotFileInput.args = {
  ...defaultProps,
  label: 'Load file to see message',
  'invalid-files-message': 'Not a valid file.',
  accept: '.json',
}
InvalidFilesMessageSlotFileInput.storyName = 'Invalid Message Slot'

export const CustomClassesFileInput = DefaultTemplate.bind({})
CustomClassesFileInput.args = {
  ...defaultProps,
  label: 'File',
  customClasses: {
    formGroup: ['test-form-group-class'],
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
  },
}
CustomClassesFileInput.storyName = 'Custom CSS Classes'

export const LabelSlotFileInput = DefaultTemplate.bind({})
LabelSlotFileInput.args = {
  ...defaultProps,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotFileInput.storyName = 'Label Slot'

export const StatusSlotFileInput = DefaultTemplate.bind({})
StatusSlotFileInput.args = {
  ...defaultProps,
  label: 'File',
  'slot:status':
    'Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}',
}
StatusSlotFileInput.storyName = 'Status Slot'
