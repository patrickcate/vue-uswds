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
  render: args => ({
    components: { UsaFileInput },
    props: Object.keys(UsaFileInput.props),
    setup() {
      return { args }
    },
    template: `<UsaFileInput
    :id="args.id"
    :accept="args.accept"
    :multiple="args.multiple"
    :label="args.label"
    :required="args.required"
    :disabled="args.disabled"
    :error="args.error"
  >
    <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
    <template v-if="!!args.hint" #hint>${args.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
    <template v-if="!!args['slot:status']" #status="{ multiple, loadedFiles, hasInvalidFiles }">${args['slot:status']}</template>
    <template v-if="!!args.instructions" #instructions="{ multiple }">{{
      args.instructions
    }}</template>
    <template v-if="!!args['preview-heading']" #preview-heading="{ loadedFiles }">${args['preview-heading']}</template>
    <template v-if="!!args['invalid-files-message']" #invalid-files-message>${args['invalid-files-message']}</template>
  </UsaFileInput>`,
  }),
}

export const DefaultFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" />`,
      },
    },
  },
}

export const MultipleFileInput = {
  args: {
    ...defaultProps,
    label: 'Multiple Files Allowed',
    multiple: true,
  },
  name: 'Multiple Files',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="Multiple Files Allowed" :multiple="true" />`,
      },
    },
  },
}

export const AcceptedFileInput = {
  args: {
    ...defaultProps,
    label: `Only images and PDF's allowed`,
    accept: 'image/*,.pdf',
  },
  name: 'Accepted Files',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="Only images and PDF's allowed" accept="image/*,.pdf" />`,
      },
    },
  },
}

export const HintFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" hint="Choose wisely" />`,
      },
    },
  },
}

export const ErrorFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" :error="true" error-message="Error message here" />`,
      },
    },
  },
}

export const RequiredFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" :required="true" />`,
      },
    },
  },
}

export const DisabledFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" :disabled="true" />`,
      },
    },
  },
}

export const CustomIdFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" id="custom-id" />`,
      },
    },
  },
}

export const InstructionsSlotFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    instructions:
      'You can choose multiple files: <strong>{{ multiple }}</strong>',
  },
  name: 'Instructions Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File"><template #instructions="{ multiple }">You can choose multiple files: <strong>{{ multiple }}</strong></template></UsaFileInput>`,
      },
    },
  },
}

export const PreviewHeadingSlotFileInput = {
  args: {
    ...defaultProps,
    label: 'Load file to see preview heading',
    'preview-heading': 'Total files: <strong>{{ loadedFiles.length }}</strong>',
  },
  name: 'Preview Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="Load file to see preview heading"><template #preview-heading="{ loadedFiles }">Total files: <strong>{{ loadedFiles.length }}</strong></template></UsaFileInput>`,
      },
    },
  },
}

export const InvalidFilesMessageSlotFileInput = {
  args: {
    ...defaultProps,
    label: 'Load file to see message',
    'invalid-files-message': 'Not a valid file.',
    accept: '.json',
  },
  name: 'Invalid Message Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="Load file to see message" accept=".json"><template #invalid-files-message>Not a valid file.</template></UsaFileInput>`,
      },
    },
  },
}

export const CustomClassesFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    customClasses: {
      formGroup: ['test-form-group-class'],
      component: ['test-component-class'],
      label: ['test-label-class'],
      input: ['test-input-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="File" :custom-classes="{ formGroup: ['test-form-group-class'], component: ['test-component-class'], label: ['test-label-class'], input: ['test-input-class'] }" />`,
      },
    },
  },
}

export const LabelSlotFileInput = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput><template #label><em>Label slot content</em></template></UsaFileInput>`,
      },
    },
  },
}

export const StatusSlotFileInput = {
  args: {
    ...defaultProps,
    label: 'File',
    'slot:status':
      'Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}',
  },
  name: 'Status Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFileInput label="file"><template #status="{ loadedFiles, multiple, hasInvalidFiles }">Total files: <strong>{{ loadedFiles.length }}</strong>, multiple: {{ multiple }}, hasInvalidFiles: {{ hasInvalidFiles }}</template></UsaFileInput>`,
      },
    },
  },
}
