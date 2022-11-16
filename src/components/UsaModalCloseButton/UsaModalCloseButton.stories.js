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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaModalCloseButton },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaModalCloseButton :aria-label="ariaLabel"><template v-if="${!!args.default}" #default="svgSpritePath">${
    args.default
  }</template></UsaModalCloseButton>`,
})

export const DefaultModalCloseButton = DefaultTemplate.bind({})
DefaultModalCloseButton.args = {
  ...defaultProps,
}
DefaultModalCloseButton.storyName = 'Default'

export const CustomIconModalCloseButton = DefaultTemplate.bind({})
CustomIconModalCloseButton.args = {
  ...defaultProps,
  default: 'x',
}
CustomIconModalCloseButton.storyName = 'Custom Icon'
