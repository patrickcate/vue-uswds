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
  },
  {
    to: '/breadcrumb-3',
    text: 'Current page that is really, really, really, long to test wrapping of breadcrumb items',
  },
]

export default {
  component: UsaBreadcrumb,
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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaBreadcrumb, UsaBreadcrumbItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaBreadcrumb
    :items="items"
    :wrap="wrap"
    :aria-label="ariaLabel"
    :custom-classes="customClasses"
  >${args.default}</UsaBreadcrumb>`,
})

export const DefaultBreadcrumb = DefaultTemplate.bind({})
DefaultBreadcrumb.args = {
  ...defaultProps,
  items: testBreadcrumbs,
}
DefaultBreadcrumb.storyName = 'Default'

export const WrappedBreadcrumb = DefaultTemplate.bind({})
WrappedBreadcrumb.args = {
  ...defaultProps,
  items: testBreadcrumbs,
  wrap: true,
}
WrappedBreadcrumb.storyName = 'Wrapped'

export const CustomAriaLabelBreadcrumb = DefaultTemplate.bind({})
CustomAriaLabelBreadcrumb.args = {
  ...defaultProps,
  items: testBreadcrumbs,
  arialLabel: 'Custom aria label',
}
CustomAriaLabelBreadcrumb.storyName = 'Custom Aria Label'

export const CustomClassesBreadcrumb = DefaultTemplate.bind({})
CustomClassesBreadcrumb.args = {
  ...defaultProps,
  items: testBreadcrumbs,
  customClasses: {
    list: ['test-list-class'],
    item: ['test-item-class'],
    link: ['test-link-class'],
    span: ['test-span-class'],
  },
}
CustomClassesBreadcrumb.storyName = 'Custom Classes'
