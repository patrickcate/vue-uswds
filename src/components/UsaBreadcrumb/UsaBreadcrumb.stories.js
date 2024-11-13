import UsaBreadcrumb from './UsaBreadcrumb.vue'
import UsaBreadcrumbItem from '@/components/UsaBreadcrumbItem'

const defaultProps = {
  items: UsaBreadcrumb.props.items.default(),
  wrap: UsaBreadcrumb.props.wrap.default,
  ariaLabel: UsaBreadcrumb.props.ariaLabel.default,
  customClasses: UsaBreadcrumb.props.customClasses.default(),
}

const testBreadcrumbs = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/breadcrumb-1',
    text: 'Breadcrumb 1',
  },
  {
    href: '/breadcrumb-2',
    text: 'Breadcrumb 2',
    id: 'b-2',
  },
  {
    to: '/breadcrumb-3',
    text: 'Current page that is really, really, really, long to test wrapping of breadcrumb items',
    current: true,
  },
]

export default {
  component: UsaBreadcrumb,
  subcomponents: { UsaBreadcrumbItem },
  title: 'Components/UsaBreadcrumb',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    wrap: {
      control: { type: 'boolean' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    items: testBreadcrumbs,
    wrap: defaultProps.wrap,
    ariaLabel: defaultProps.ariaLabel,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaBreadcrumb, UsaBreadcrumbItem },
    props: Object.keys(UsaBreadcrumb.props),
    setup() {
      return { args }
    },
    template: `
    <UsaBreadcrumb
      :items="args.items"
      :wrap="args.wrap"
      :aria-label="args.ariaLabel"
      :custom-classes="args.customClasses"
    >${args.default}</UsaBreadcrumb>`,
  }),
}

const defaultBreadcrumbCodeSnippet = `
<UsaBreadcrumb
  :items="[
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/breadcrumb-1',
    text: 'Breadcrumb 1',
    id: 'b-1'
  },
  {
    href: '/breadcrumb-2',
    text: 'Breadcrumb 2',
  },
  {
    to: '/breadcrumb-3',
    text: 'Current page that is really, really, really, long to test wrapping of breadcrumb items',
  }
]"></UsaBreadcrumb>`

export const DefaultBreadcrumb = {
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: defaultBreadcrumbCodeSnippet,
      },
    },
  },
}

export const WrappedBreadcrumb = {
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    wrap: true,
  },
  name: 'Wrapped',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumb :items="items" :wrap="true"></UsaBreadcrumb>`,
      },
    },
  },
}

export const CustomAriaLabelBreadcrumb = {
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    ariaLabel: 'Custom aria label',
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumb :items="items" aria-label="Custom aria label"></UsaBreadcrumb>`,
      },
    },
  },
}

export const CustomClassesBreadcrumb = {
  args: {
    ...defaultProps,
    items: testBreadcrumbs,
    customClasses: {
      list: ['test-list-class'],
      item: ['test-item-class'],
      link: ['test-link-class'],
      span: ['test-span-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumb :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], span: ['test-span-class'] }"></UsaBreadcrumb>`,
      },
    },
  },
}
