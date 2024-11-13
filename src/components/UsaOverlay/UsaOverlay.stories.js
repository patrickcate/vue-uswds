import UsaOverlay from './UsaOverlay.vue'

const defaultProps = {
  visible: UsaOverlay.props.visible.default,
}

export default {
  component: UsaOverlay,
  title: 'Components/UsaOverlay',
  argTypes: {
    visible: {
      control: { type: 'boolean' },
    },
  },
  args: {
    visible: defaultProps.visible,
  },
  render: args => ({
    components: { UsaOverlay },
    props: Object.keys(UsaOverlay.props),
    setup() {
      return { args }
    },
    template: `<UsaOverlay :visible="args.visible"></UsaOverlay>`,
  }),
}

export const DefaultOverlay = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaOverlay />`,
      },
    },
  },
}

export const VisibleOverlay = {
  args: {
    ...defaultProps,
    visible: true,
  },
  name: 'Visible',
  parameters: {
    docs: {
      source: {
        code: `<UsaOverlay :visible="true" />`,
      },
    },
  },
}
