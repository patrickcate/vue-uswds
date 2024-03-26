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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    default: 'Test',
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
  render: args => ({
    components: { UsaNavSubmenuItem },
    props: Object.keys(UsaNavSubmenuItem.props),
    setup() {
      return { args }
    },
    template: `<UsaNavSubmenuItem
      v-bind="args.$attrs"
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
    >${args.default}</UsaNavSubmenuItem>`,
  }),
}

export const DefaultNavSubmenuItem = {
  args: {
    ...defaultProps,
    href: '/test-page',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSubmenuItem href="/test-page">Test</UsaNavSubmenuItem>`,
      },
    },
  },
}
