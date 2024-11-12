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
  render: args => ({
    components: { UsaPaginationItem },
    props: Object.keys(UsaPaginationItem.props),
    setup() {
      return { args }
    },
    template: `<UsaPaginationItem
    :page-number="args.pageNumber"
    :is-current-page="args.isCurrentPage"
    :aria-label="args.ariaLabel"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
  >${args.default}</UsaPaginationItem>`,
  }),
}

export const DefaultPaginationItem = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationItem href="/test-page"></UsaPaginationItem>`,
      },
    },
  },
}

export const CurrentPagePaginationItem = {
  args: {
    ...defaultProps,
    isCurrentPage: true,
  },
  name: 'Current Page',
  parameters: {
    docs: {
      source: {
        code: `<UsaPaginationItem href="/test-page" :is-current-page="true"></UsaPaginationItem>`,
      },
    },
  },
}
