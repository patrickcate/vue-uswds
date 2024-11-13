import UsaSkipnav from './UsaSkipnav.vue'

const defaultProps = {
  // Has no default value.
  anchor: '#main-content',
}

export default {
  component: UsaSkipnav,
  title: 'Components/UsaSkipnav',
  argTypes: {
    anchor: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    anchor: defaultProps.anchor,
    default: 'Test skip link',
  },
  render: args => ({
    components: { UsaSkipnav },
    props: Object.keys(UsaSkipnav.props),
    setup() {
      return { args }
    },
    template: `<UsaSkipnav :anchor="args.anchor">${args.default}</UsaSkipnav>`,
  }),
}

export const DefaultSkipnav = {
  args: {},
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSkipnav anchor="#main-content">Test skip link</UsaSkipnav>`,
      },
    },
  },
}
