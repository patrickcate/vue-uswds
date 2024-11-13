import UsaLabel from './UsaLabel.vue'

const defaultProps = {
  required: UsaLabel.props.required.default,
  error: UsaLabel.props.error.default,
}

export default {
  component: UsaLabel,
  title: 'Components/UsaLabel',
  argTypes: {
    for: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
      table: {
        category: 'props',
      },
    },
    error: {
      control: { type: 'boolean' },
    },
    'slot:required': {
      control: { type: 'text' },
      name: 'required',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    for: 'test-id',
    required: defaultProps.required,
    error: defaultProps.error,
    'slot:required': '',
    default: 'Test Label',
  },
  render: args => ({
    components: { UsaLabel },
    props: Object.keys(UsaLabel.props),
    setup() {
      return { args, for: args.for }
    },
    template: `<UsaLabel :for="args.for" :required="args.required" :error="args.error"><template v-if="!!args.default" #default>${args.default}</template><template v-if="!!args['slot:required']" #required>${args['slot:required']}</template></UsaLabel>`,
  }),
}

export const DefaultLabel = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaLabel>Test Label</UsaLabel>`,
      },
    },
  },
}

export const RequiredLabel = {
  args: {
    ...defaultProps,
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaLabel :required="true">Test Label</UsaLabel>`,
      },
    },
  },
}

export const ErrorLabel = {
  args: {
    ...defaultProps,
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaLabel :error="true">Test Label</UsaLabel>`,
      },
    },
  },
}

export const RequiredSlotLabel = {
  args: {
    ...defaultProps,
    required: true,
    'slot:required': '(required)',
  },
  name: 'Required Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaLabel :required="true"><template #required>(required)</template></UsaLabel>`,
      },
    },
  },
}
