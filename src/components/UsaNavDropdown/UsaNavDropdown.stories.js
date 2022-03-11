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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    open: defaultProps.open,
    defaultSlot: '',
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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavDropdown },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNavDropdown
    :id="id"
    :open="open"
  >${args.defaultSlot}</UsaNavDropdown>`,
})

export const DefaultNavDropdown = DefaultTemplate.bind({})
DefaultNavDropdown.args = {
  ...defaultProps,
  defaultSlot: 'Dropdown items here',
}
DefaultNavDropdown.storyName = 'Default'

export const OpenByDefaultNavDropdown = DefaultTemplate.bind({})
OpenByDefaultNavDropdown.args = {
  ...defaultProps,
  open: true,
  defaultSlot: 'Dropdown items here',
}
OpenByDefaultNavDropdown.storyName = 'Open by Default'

export const CustomIdNavDropdown = DefaultTemplate.bind({})
CustomIdNavDropdown.args = {
  ...defaultProps,
  id: 'custom-id',
  defaultSlot: 'Dropdown items here',
}
CustomIdNavDropdown.storyName = 'Custom ID'
