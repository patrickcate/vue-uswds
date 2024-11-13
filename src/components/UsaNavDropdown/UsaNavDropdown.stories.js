import UsaNavDropdown from './UsaNavDropdown.vue'

const defaultProps = {
  id: UsaNavDropdown.props.id.default,
  open: UsaNavDropdown.props.open.default,
}

export default {
  component: UsaNavDropdown,
  title: 'Components/UsaNavDropdown',
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    open: {
      control: { type: 'boolean' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    open: defaultProps.open,
    default: '',
  },
  decorators: [
    () => ({
      template: '<ul><story /></ul>',
      provide: {
        registerDropdown: () => {},
        unregisterDropdown: () => {},
      },
    }),
  ],
  render: args => ({
    components: { UsaNavDropdown },
    props: Object.keys(UsaNavDropdown.props),
    setup() {
      return { args }
    },
    template: `<UsaNavDropdown
    :id="args.id"
    :open="args.open"
  >${args.default}</UsaNavDropdown>`,
  }),
}

export const DefaultNavDropdown = {
  args: {
    ...defaultProps,
    default: 'Dropdown items here',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavDropdown>Dropdown items here</UsaNavDropdown>`,
      },
    },
  },
}

export const OpenByDefaultNavDropdown = {
  args: {
    ...defaultProps,
    open: true,
    default: 'Dropdown items here',
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavDropdown :open="true">Dropdown items here</UsaNavDropdown>`,
      },
    },
  },
}

export const CustomIdNavDropdown = {
  args: {
    ...defaultProps,
    id: 'custom-id',
    default: 'Dropdown items here',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavDropdown id="custom-id">Dropdown items here</UsaNavDropdown>`,
      },
    },
  },
}
