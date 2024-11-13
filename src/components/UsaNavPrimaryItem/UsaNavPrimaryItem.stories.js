import UsaNavPrimaryItem from './UsaNavPrimaryItem.vue'

const defaultProps = {
  href: UsaNavPrimaryItem.props.href.default,
  to: UsaNavPrimaryItem.props.to.default,
  routerComponentName: UsaNavPrimaryItem.props.routerComponentName.default,
}

export default {
  component: UsaNavPrimaryItem,
  title: 'Components/UsaNavPrimaryItem',
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
    default: 'Test nav link',
  },
  decorators: [
    () => ({
      template: '<story />',
      provide: {
        closeAllDropdowns: e => {
          e.preventDefault()
        },
        closeMobileMenu: e => {
          e.preventDefault()
        },
      },
    }),
  ],
  render: args => ({
    components: { UsaNavPrimaryItem },
    props: Object.keys(UsaNavPrimaryItem.props),
    setup() {
      return { args }
    },
    template: `<UsaNavPrimaryItem
    v-bind="args.$attrs"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
  >${args.default}</UsaNavPrimaryItem>`,
  }),
}

export const DefaultNavPrimaryItem = {
  args: {
    ...defaultProps,
    href: '/test-page',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavPrimaryItem href="/test-page">Test nav link</UsaNavPrimaryItem>`,
      },
    },
  },
}
