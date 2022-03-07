import UsaNavSubmenuItem from './UsaNavSubmenuItem.vue'

const defaultProps = {
  href: '',
  to: '',
  routerComponentName: '',
}

export default {
  component: UsaNavSubmenuItem,
  title: 'Components/UsaNavSubmenuItem',
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
  decorators: [
    () => ({
      template: '<ul class="usa-dark-background"><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavSubmenuItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNavSubmenuItem
    v-bind="$attrs"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
  >${args.defaultSlot}</UsaNavSubmenuItem>`,
})

export const DefaultNavSubmenuItem = DefaultTemplate.bind({})
DefaultNavSubmenuItem.args = {
  ...defaultProps,
  href: '/test-page',
}
DefaultNavSubmenuItem.storyName = 'Default'
