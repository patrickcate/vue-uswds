import UsaModalCloseButton from './UsaModalCloseButton.vue'

const defaultProps = {
  ariaLabel: 'Close Modal',
}

export default {
  component: UsaModalCloseButton,
  title: 'Components/UsaModalCloseButton',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaModalCloseButton },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaModalCloseButton :aria-label="ariaLabel"><template #default="svgSpritePath">${args.defaultSlot}</template></UsaModalCloseButton>`,
})

export const DefaultModalCloseButton = DefaultTemplate.bind({})
DefaultModalCloseButton.args = {
  ...defaultProps,
}
DefaultModalCloseButton.storyName = 'Default'

export const CustomIconModalCloseButton = DefaultTemplate.bind({})
CustomIconModalCloseButton.args = {
  ...defaultProps,
  defaultSlot: 'x',
}
CustomIconModalCloseButton.storyName = 'Custom Icon'
