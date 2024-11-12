import BaseLink from './BaseLink.vue'

const defaultProps = {
  href: BaseLink.props.href.default,
  to: BaseLink.props.to.default,
  routerComponentName: BaseLink.props.routerComponentName.default,
}

export default {
  component: BaseLink,
  title: 'Components/BaseLink',
  argTypes: {
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
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    default: '',
  },
  render: args => ({
    components: { BaseLink },
    props: Object.keys(BaseLink.props),
    setup() {
      return { args }
    },
    template: `<BaseLink
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
      >{{ args.default }}</BaseLink>`,
  }),
}

export const DefaultBaseLink = {
  args: {
    ...defaultProps,
    to: '/user',
    default: 'A link',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<BaseLink to="/user">A link</BaseLink>`,
      },
    },
  },
}

export const HrefBaseLink = {
  args: {
    ...defaultProps,
    href: '/user',
    default: 'A href link',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<BaseLink href="/user">A href link</BaseLink>`,
      },
    },
  },
}
