import UsaBreadcrumbItem from './UsaBreadcrumbItem.vue'
import UsaBreadcrumb from '@/components/UsaBreadcrumb'

const defaultProps = {
  href: UsaBreadcrumbItem.props.href.default,
  to: UsaBreadcrumbItem.props.to.default,
  routerComponentName: UsaBreadcrumbItem.props.routerComponentName.default,
  current: UsaBreadcrumbItem.props.current.default,
  customClasses: UsaBreadcrumbItem.props.customClasses.default(),
}

export default {
  component: UsaBreadcrumbItem,
  title: 'Components/UsaBreadcrumbItem',
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
    current: {
      control: { type: 'boolean' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    current: defaultProps.current,
    customClasses: defaultProps.customClasses,
    default: 'Test breadcrumb',
  },
  render: args => ({
    components: { UsaBreadcrumb, UsaBreadcrumbItem },
    props: Object.keys(UsaBreadcrumbItem.props),
    setup() {
      return { args }
    },
    template: `<UsaBreadcrumb>
    <UsaBreadcrumbItem
      :href="args.href"
      :to="args.to"
      :router-component-name="args.routerComponentName"
      :current="args.current"
      :custom-classes="args.customClasses"
    >{{ args.default }}</UsaBreadcrumbItem>
  </UsaBreadcrumb>`,
  }),
}

export const DefaultBreadcrumbItem = {
  args: {
    ...defaultProps,
    href: '/test-page',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumbItem href="/test-page">Test breadcrumb</UsaBreadcrumbItem>`,
      },
    },
  },
}

export const CurrentBreadcrumbItem = {
  args: {
    ...defaultProps,
    href: '/test-page',
    current: true,
  },
  name: 'Current',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumbItem href="/test-page" :current="true">Test breadcrumb</UsaBreadcrumbItem>`,
      },
    },
  },
}

export const CustomClassesBreadcrumbItem = {
  args: {
    ...defaultProps,
    href: '/test-page',
    customClasses: {
      link: ['test-link-class'],
      span: ['test-span-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaBreadcrumbItem href="/test-page" :custom-classes="{ link: ['test-link-class'], span: ['test-span-class'] }">Test breadcrumb</UsaBreadcrumbItem>`,
      },
    },
  },
}
