import UsaNavSubmenuItem from './UsaNavSubmenuItem.vue'
import { ref } from 'vue'

const defaultProps = {
  href: UsaNavSubmenuItem.props.href.default,
  to: UsaNavSubmenuItem.props.to.default,
  routerComponentName: UsaNavSubmenuItem.props.routerComponentName.default,
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
      provide: {
        dropdownId: ref('sb-dropdown-id'),
        closeDropdown: () => {},
        closeMobileMenu: () => {},
      },
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
