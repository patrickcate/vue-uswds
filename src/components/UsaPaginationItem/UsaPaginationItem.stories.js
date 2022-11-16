import UsaPaginationItem from './UsaPaginationItem.vue'

const defaultProps = {
  // Has no default value.
  pageNumber: 1,
  isCurrentPage: UsaPaginationItem.props.isCurrentPage.default,
  // Has no default value.
  ariaLabel: 'Page 1',
}

export default {
  component: UsaPaginationItem,
  title: 'Components/UsaPaginationItem',
  argTypes: {
    pageNumber: {
      control: { type: 'number' },
    },
    isCurrentPage: {
      control: { type: 'boolean' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
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
    pageNumber: defaultProps.pageNumber,
    isCurrentPage: defaultProps.isCurrentPage,
    ariaLabel: defaultProps.ariaLabel,
    href: '/test-page',
    to: '',
    routerComponentName: '',
    default: '',
  },
  decorators: [
    () => ({
      template:
        '<nav class="usa-pagination"><ul class="usa-pagination__list"><story /></ul></nav>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaPaginationItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaPaginationItem
    :page-number="pageNumber"
    :is-current-page="isCurrentPage"
    :aria-label="ariaLabel"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
  >${args.default}</UsaPaginationItem>`,
})

export const DefaultPaginationItem = DefaultTemplate.bind({})
DefaultPaginationItem.args = {
  ...defaultProps,
}
DefaultPaginationItem.storyName = 'Default'

export const CurrentPagePaginationItem = DefaultTemplate.bind({})
CurrentPagePaginationItem.args = {
  ...defaultProps,
  isCurrentPage: true,
}
CurrentPagePaginationItem.storyName = 'Current Page'
