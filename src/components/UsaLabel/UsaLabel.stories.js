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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaLabel },
  props: Object.keys(argTypes),
  setup() {
    return { ...args, labelFor: args.for }
  },
  template: `<UsaLabel :for="labelFor" :required="required" :error="error"><template v-if="${!!args.default}" #default>${
    args.default
  }</template><template v-if="${!!args['slot:required']}" #required>${
    args['slot:required']
  }</template></UsaLabel>`,
})

export const DefaultLabel = DefaultTemplate.bind({})
DefaultLabel.args = {
  ...defaultProps,
}
DefaultLabel.storyName = 'Default'

export const RequiredLabel = DefaultTemplate.bind({})
RequiredLabel.args = {
  ...defaultProps,
  required: true,
}
RequiredLabel.storyName = 'Required'

export const ErrorLabel = DefaultTemplate.bind({})
ErrorLabel.args = {
  ...defaultProps,
  error: true,
}
ErrorLabel.storyName = 'Error'

export const RequiredSlotLabel = DefaultTemplate.bind({})
RequiredSlotLabel.args = {
  ...defaultProps,
  required: true,
  'slot:required': '(required)',
}
RequiredSlotLabel.storyName = 'Required Slot'
