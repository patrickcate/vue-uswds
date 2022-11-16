import UsaLogo from './UsaLogo.vue'

const defaultProps = {
  title: UsaLogo.props.title.default,
  href: UsaLogo.props.href.default,
  to: UsaLogo.props.to.default,
  routerComponentName: UsaLogo.props.routerComponentName.default,
  customClasses: UsaLogo.props.customClasses.default(),
}

export default {
  component: UsaLogo,
  title: 'Components/UsaLogo',
  argTypes: {
    title: {
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
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    title: defaultProps.title,
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    customClasses: defaultProps.customClasses,
    default: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaLogo },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaLogo
    :title="title"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :custom-classes="customClasses"
  >${args.default}</UsaLogo>`,
})

export const DefaultLogo = DefaultTemplate.bind({})
DefaultLogo.args = {
  ...defaultProps,
  title: 'Project Title',
  href: '/test-page',
}
DefaultLogo.storyName = 'Default'

export const CustomClassesLogo = DefaultTemplate.bind({})
CustomClassesLogo.args = {
  ...defaultProps,
  title: 'Project Title',
  href: '/test-page',
  customClasses: {
    text: ['test-text-class'],
    link: ['test-link-class'],
  },
}
CustomClassesLogo.storyName = 'Custom Classes'

export const DefaultSlotLogo = DefaultTemplate.bind({})
DefaultSlotLogo.args = {
  ...defaultProps,
  href: '/test-page',
  default: 'Test Title',
}
DefaultSlotLogo.storyName = 'Default Slot'
