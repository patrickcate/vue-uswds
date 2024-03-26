import UsaModalCloseButton from './UsaModalCloseButton.vue'

const defaultProps = {
  // Has no default value.
  ariaLabel: 'Close Modal',
}

export default {
  component: UsaModalCloseButton,
  title: 'Components/UsaModalCloseButton',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    default: '',
  },
  render: args => ({
    components: { UsaModalCloseButton },
    props: Object.keys(UsaModalCloseButton.props),
    setup() {
      return { args }
    },
    template: `<UsaModalCloseButton :aria-label="args.ariaLabel"><template v-if="!!args.default" #default="svgSpritePath">${args.default}</template></UsaModalCloseButton>`,
  }),
}

export const DefaultModalCloseButton = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaModalCloseButton :aria-label="Close Modal"></UsaModalCloseButton>`,
      },
    },
  },
}

export const CustomIconModalCloseButton = {
  args: {
    ...defaultProps,
    default: 'x',
  },
  name: 'Custom Icon',
  parameters: {
    docs: {
      source: {
        code: `<UsaModalCloseButton :aria-label="Close Modal">x</UsaModalCloseButton>`,
      },
    },
  },
}
