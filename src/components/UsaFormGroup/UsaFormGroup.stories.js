import UsaFormGroup from './UsaFormGroup.vue'

const defaultProps = {
  group: UsaFormGroup.props.group.default,
  error: UsaFormGroup.props.error.default,
}

export default {
  component: UsaFormGroup,
  title: 'Components/UsaFormGroup',
  argTypes: {
    group: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    group: defaultProps.group,
    error: defaultProps.error,
    defaultSlot:
      '<label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" />',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFormGroup },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFormGroup
    :group="group"
    :error="error"
  >${args.defaultSlot}</UsaFormGroup>`,
})

export const DefaultFormGroup = DefaultTemplate.bind({})
DefaultFormGroup.args = {
  ...defaultProps,
}
DefaultFormGroup.storyName = 'Default'

export const GroupedFormGroup = DefaultTemplate.bind({})
GroupedFormGroup.args = {
  ...defaultProps,
  group: true,
}
GroupedFormGroup.storyName = 'Grouped'

export const ErrorFormGroup = DefaultTemplate.bind({})
ErrorFormGroup.args = {
  ...defaultProps,
  group: true,
  error: true,
}
ErrorFormGroup.storyName = 'Error'
