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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { BaseLink },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<BaseLink :href="href" :to="to" :router-component-name="routerComponentName">${args.default}</BaseLink>`,
})

export const DefaultBaseLink = DefaultTemplate.bind({})
DefaultBaseLink.args = {
  ...defaultProps,
  to: '/user',
  default: 'A link',
}
DefaultBaseLink.storyName = 'Default'
