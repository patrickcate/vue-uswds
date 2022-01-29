import UsaIdentifierRequiredLinks from './UsaIdentifierRequiredLinks.vue'

const defaultProps = {
  ariaLabel: UsaIdentifierRequiredLinks.props.ariaLabel.default,
  items: [
    {
      to: '/about-us',
      text: 'About Us',
    },
    {
      href: 'https://www.gsa.gov/website-information/accessibility-aids',
      text: 'Accessibility support',
    },
    {
      href: 'https://www.gsa.gov/reference/freedom-of-information-act-foia',
      text: 'FOIA requests',
    },
    {
      href: 'https://www.gsa.gov/reference/civil-rights-programs/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002',
      text: 'No FEAR Act data',
    },
    {
      href: 'https://www.gsaig.gov/',
      text: 'Office of the Inspector General',
    },
    {
      href: 'https://www.gsa.gov/reference/reports/budget-performance',
      text: 'Performance reports',
    },
    {
      href: 'https://www.gsa.gov/website-information/website-policies',
      text: 'Privacy policy',
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
