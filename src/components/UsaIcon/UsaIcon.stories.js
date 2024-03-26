import UsaIcon from './UsaIcon.vue'

const defaultProps = {
  // Name is required.
  name: 'flag',
  size: UsaIcon.props.size.default,
  ariaHidden: UsaIcon.props.ariaHidden.default,
  role: UsaIcon.props.role.default,
  focusable: UsaIcon.props.focusable.default,
}

export default {
  component: UsaIcon,
  title: 'Components/UsaIcon',
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      options: ['', '3', '4', '5', '6', '7', '8', '9'],
      control: {
        type: 'select',
      },
    },
    ariaHidden: {
      control: { type: 'boolean' },
    },
    role: {
      control: { type: 'text' },
    },
    focusable: {
      control: { type: 'boolean' },
    },
    title: {
      control: { type: 'text' },
    },
  },
  args: {
    name: defaultProps.name,
    size: defaultProps.size,
    ariaHidden: defaultProps.ariaHidden,
    role: defaultProps.role,
    focusable: defaultProps.focusable,
    title: '',
  },
  render: args => ({
    components: { UsaIcon },
    props: Object.keys(UsaIcon.props),
    setup() {
      return { args }
    },
    template: `<UsaIcon
    :name="args.name"
    :size="args.size"
    :aria-hidden="args.ariaHidden"
    :role="args.role"
    :focusable="args.focusable"
  >
    <template v-if="!!args.title" #title>${args.title}</template>
  </UsaIcon>`,
  }),
}

export const DefaultIcon = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIcon name="flag"></UsaIcon>`,
      },
    },
  },
}

export const CustomSizeIcon = {
  args: {
    ...defaultProps,
    size: '9',
  },
  name: 'Custom Size',
  parameters: {
    docs: {
      source: {
        code: `<UsaIcon name="flag" size="9"></UsaIcon>`,
      },
    },
  },
}

export const TitleSlotIcon = {
  args: {
    ...defaultProps,
    title: '<em>Flag icon</em>',
  },
  name: 'Title Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIcon name="flag"><template #title><em>Flag icon</em></template></UsaIcon>`,
      },
    },
  },
}
