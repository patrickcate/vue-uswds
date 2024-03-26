import UsaLink from './UsaLink.vue'

const defaultProps = {
  alt: UsaLink.props.alt.default,
  external: UsaLink.props.external.default,
}

export default {
  component: UsaLink,
  title: 'Components/UsaLink',
  argTypes: {
    alt: {
      control: { type: 'boolean' },
    },
    external: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
    to: {
      control: { type: 'text' },
    },
    routerComponentName: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    href: '/test-page',
    to: '',
    routerComponentName: '',
    alt: defaultProps.alt,
    external: defaultProps.external,
    default: 'Test',
  },
  render: args => ({
    components: { UsaLink },
    props: Object.keys(UsaLink.props),
    setup() {
      return { args }
    },
    template: `<UsaLink
    :alt="args.alt"
    :external="args.external"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
   >${args.default}</UsaLink>`,
  }),
}

export const DefaultLink = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaLink href="/test-page">Test</UsaLink>`,
      },
    },
  },
}

export const AltLink = {
  args: {
    ...defaultProps,
    alt: true,
  },
  decorators: [
    () => ({ template: '<div class="usa-dark-background"><story /></div>' }),
  ],
  name: 'Alt',
  parameters: {
    docs: {
      source: {
        code: `<UsaLink :alt="true" href="/test-page">Test</UsaLink>`,
      },
    },
  },
}

export const ExternalLink = {
  args: {
    ...defaultProps,
    external: true,
  },
  name: 'External',
  parameters: {
    docs: {
      source: {
        code: `<UsaLink :external="true" href="/test-page">Test</UsaLink>`,
      },
    },
  },
}
