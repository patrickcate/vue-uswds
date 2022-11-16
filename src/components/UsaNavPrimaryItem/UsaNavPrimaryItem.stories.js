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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavPrimaryItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNavPrimaryItem
    v-bind="$attrs"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
  >${args.default}</UsaNavPrimaryItem>`,
})

export const DefaultNavPrimaryItem = DefaultTemplate.bind({})
DefaultNavPrimaryItem.args = {
  ...defaultProps,
  href: '/test-page',
}
DefaultNavPrimaryItem.storyName = 'Default'
