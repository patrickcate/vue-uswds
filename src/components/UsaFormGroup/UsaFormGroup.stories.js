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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    group: defaultProps.group,
    error: defaultProps.error,
    default:
      '<label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" />',
  },
  render: args => ({
    components: { UsaFormGroup },
    props: Object.keys(UsaFormGroup.props),
    setup() {
      return { args }
    },
    template: `<UsaFormGroup
    :group="args.group"
    :error="args.error"
  >${args.default}</UsaFormGroup>`,
  }),
}

export const DefaultFormGroup = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFormGroup><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>`,
      },
    },
  },
}

export const GroupedFormGroup = {
  args: {
    ...defaultProps,
    group: true,
  },
  name: 'Grouped',
  parameters: {
    docs: {
      source: {
        code: `<UsaFormGroup :group="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>`,
      },
    },
  },
}

export const ErrorFormGroup = {
  args: {
    ...defaultProps,
    group: true,
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaFormGroup :group="true" :error="true"><label for="test-id">Test Input</label><input id="test-id" type="text" class="usa-input" /></UsaFormGroup>`,
      },
    },
  },
}
