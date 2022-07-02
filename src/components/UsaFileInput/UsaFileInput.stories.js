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
    labelSlot: {
      control: { type: 'text' },
    },
    hintSlot: {
      control: { type: 'text' },
    },
    errorMessageSlot: {
      control: { type: 'text' },
    },
    instructionsSlot: {
      control: { type: 'text' },
    },
    previewHeadingSlot: {
      control: { type: 'text' },
    },
    invalidFilesMessageSlot: {
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
    labelSlot: '',
    hintSlot: '',
    errorMessageSlot: '',
    instructionsSlot: '',
    previewHeadingSlot: '',
    invalidFilesMessageSlot: '',
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
    <template v-if="${!!args.labelSlot}" #label>${args.labelSlot}</template>
    <template v-if="${!!args.hintSlot}" #hint>${args.hintSlot}</template>
    <template v-if="${!!args.errorMessageSlot}" #error-message>${
    args.errorMessageSlot
  }</template>
    <template v-if="${!!args.instructionsSlot}" #instructions="{ multiple }">${
    args.instructionsSlot
  }</template>
    <template v-if="${!!args.previewHeadingSlot}" #preview-heading="{ loadedFiles }">${
    args.previewHeadingSlot
  }</template>
    <template v-if="${!!args.invalidFilesMessageSlot}" #invalid-files-message>${
    args.invalidFilesMessageSlot
  }</template>
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
  hintSlot: 'Choose wisely',
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
  errorMessageSlot: 'Error message here',
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
  instructionsSlot:
    'You can choose multiple files: <strong>{{ multiple }}</strong>',
}
InstructionsSlotFileInput.storyName = 'Instructions Slot'

export const PreviewHeadingSlotFileInput = DefaultTemplate.bind({})
PreviewHeadingSlotFileInput.args = {
  ...defaultProps,
  label: 'Load file to see preview heading',
  previewHeadingSlot: 'Total files: <strong>{{ loadedFiles.length }}</strong>',
}
PreviewHeadingSlotFileInput.storyName = 'Preview Heading Slot'

export const InvalidFilesMessageSlotFileInput = DefaultTemplate.bind({})
InvalidFilesMessageSlotFileInput.args = {
  ...defaultProps,
  label: 'Load file to see message',
  invalidFilesMessageSlot: 'Not a valid file.',
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
