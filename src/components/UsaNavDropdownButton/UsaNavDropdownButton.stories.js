import UsaNavDropdownButton from './UsaNavDropdownButton.vue'
import { ref, reactive } from 'vue'

const defaultProps = {
  href: UsaNavDropdownButton.props.href.default,
  to: UsaNavDropdownButton.props.to.default,
  routerComponentName: UsaNavDropdownButton.props.routerComponentName.default,
}

const dropdownId = ref('test-dropdown-id')
const dropdownItems = reactive({ 'test-dropdown-id': false })

export default {
  component: UsaNavDropdownButton,
  title: 'Components/UsaNavDropdownButton',
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
    default: 'Test dropdown button',
  },
  decorators: [
    () => ({
      template: '<story />',
      provide: {
        dropdownId: dropdownId,
        toggleDropdown: id => {
          dropdownItems[id] = !dropdownItems[id]
        },
        dropdownItems: dropdownItems,
      },
    }),
  ],
  render: args => ({
    components: { UsaNavDropdownButton },
    props: Object.keys(UsaNavDropdownButton.props),
    setup() {
      return { args }
    },
    template: `<div class="usa-header usa-header--basic">
    <ul class="usa-nav__primary usa-accordion">
      <li class="usa-nav__primary-item">
        <UsaNavDropdownButton
          :href="args.href"
          :to="args.to"
          :router-component-name="args.routerComponentName">${args.default}</UsaNavDropdownButton>
      </li>
    </ul>
  </div>`,
  }),
}

export const DefaultNavDropdownButton = {
  args: {},
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavDropdownButton>Test dropdown button</UsaNavDropdownButton>`,
      },
    },
  },
}
