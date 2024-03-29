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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaLink },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaLink
    :alt="alt"
    :external="external"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
   >${args.default}</UsaLink>`,
})

export const DefaultLink = DefaultTemplate.bind({})
DefaultLink.args = {
  ...defaultProps,
}
DefaultLink.storyName = 'Default'

export const AltLink = DefaultTemplate.bind({})
AltLink.args = {
  ...defaultProps,
  alt: true,
}
AltLink.decorators = [
  () => ({ template: '<div class="usa-dark-background"><story /></div>' }),
]
AltLink.storyName = 'Alt'

export const ExternalLink = DefaultTemplate.bind({})
ExternalLink.args = {
  ...defaultProps,
  external: true,
}
ExternalLink.storyName = 'External'
