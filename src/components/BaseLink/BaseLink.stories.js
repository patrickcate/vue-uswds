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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { BaseLink },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<BaseLink :href="href" :to="to" :router-component-name="routerComponentName">${args.defaultSlot}</BaseLink>`,
})

export const DefaultBaseLink = DefaultTemplate.bind({})
DefaultBaseLink.args = {
  ...defaultProps,
  to: '/user',
  defaultSlot: 'A link',
}
DefaultBaseLink.storyName = 'Default'
