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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaBreadcrumb, UsaBreadcrumbItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaBreadcrumb>
    <UsaBreadcrumbItem
      :href="href"
      :to="to"
      :router-component-name="routerComponentName"
      :current="current"
      :custom-classes="customClasses"
    >${args.default}</UsaBreadcrumbItem>
  </UsaBreadcrumb>`,
})

export const DefaultBreadcrumbItem = DefaultTemplate.bind({})
DefaultBreadcrumbItem.args = {
  ...defaultProps,
  href: '/test-page',
}
DefaultBreadcrumbItem.storyName = 'Default'

export const CurrentBreadcrumbItem = DefaultTemplate.bind({})
CurrentBreadcrumbItem.args = {
  ...defaultProps,
  href: '/test-page',
  current: true,
}
CurrentBreadcrumbItem.storyName = 'Current'

export const CustomClassesBreadcrumbItem = DefaultTemplate.bind({})
CustomClassesBreadcrumbItem.args = {
  ...defaultProps,
  href: '/test-page',
  customClasses: {
    link: ['test-link-class'],
    span: ['test-span-class'],
  },
}
CustomClassesBreadcrumbItem.storyName = 'Custom Classes'
