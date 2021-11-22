import BaseLink from './BaseLink.vue'

const defaultProps = {
  href: '',
  to: '',
  routerComponentName: '',
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
    defaultSlot: 'Test',
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
}
DefaultBaseLink.storyName = 'Default'
