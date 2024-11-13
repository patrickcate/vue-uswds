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
  render: args => ({
    components: { UsaIdentifierRequiredLinks },
    props: Object.keys(UsaIdentifierRequiredLinks.props),
    setup() {
      return { args }
    },
    template: `<UsaIdentifierRequiredLinks
      :aria-label="args.ariaLabel"
      :items="args.items"
    />`,
  }),
}

export const DefaultIdentifierRequiredLinks = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierRequiredLinks items="${(JSON.stringify(defaultProps.items), null, '\t')}"></UsaIdentifierRequiredLinks>`,
      },
    },
  },
}

export const CustomAriaLabelIdentifierRequiredLinks = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierRequiredLinks aria-label="Custom aria label" items="${(JSON.stringify(defaultProps.items), null, '\t')}"></UsaIdentifierRequiredLinks>`,
      },
    },
  },
}
