import UsaIdentifierRequiredLinks from './UsaIdentifierRequiredLinks.vue'

const defaultProps = {
  ariaLabel: UsaIdentifierRequiredLinks.props.ariaLabel.default,
  items: [
    {
      to: '/test-1',
      text: 'Test link 1',
    },
    {
      href: '/test-2',
      text: 'Test link 2',
    },
  ],
}

export default {
  component: UsaIdentifierRequiredLinks,
  title: 'Components/UsaIdentifierRequiredLinks',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    items: defaultProps.items,
  },
  decorators: [
    () => ({
      template: '<div class="usa-identifier"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentifierRequiredLinks },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentifierRequiredLinks
    :aria-label="ariaLabel"
    :items="items"
  />`,
})

export const DefaultIdentifierRequiredLinks = DefaultTemplate.bind({})
DefaultIdentifierRequiredLinks.args = {
  ...defaultProps,
}
DefaultIdentifierRequiredLinks.storyName = 'Default'

export const CustomAriaLabelIdentifierRequiredLinks = DefaultTemplate.bind({})
CustomAriaLabelIdentifierRequiredLinks.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
}
CustomAriaLabelIdentifierRequiredLinks.storyName = 'Custom Aria Label'
