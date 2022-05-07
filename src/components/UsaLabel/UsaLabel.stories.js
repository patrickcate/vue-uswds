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
    },
    error: {
      control: { type: 'boolean' },
    },
    requiredSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    for: 'test-id',
    required: defaultProps.required,
    error: defaultProps.error,
    requiredSlot: '',
    defaultSlot: 'Test Label',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaLabel },
  props: Object.keys(argTypes),
  setup() {
    return { ...args, labelFor: args.for }
  },
  template: `<UsaLabel :for="labelFor" :required="required" :error="error"><template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template><template v-if="${!!args.requiredSlot}" #required>${
    args.requiredSlot
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
  requiredSlot: '(required)',
}
RequiredSlotLabel.storyName = 'Required Slot'
