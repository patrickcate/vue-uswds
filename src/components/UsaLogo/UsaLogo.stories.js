import UsaLogo from './UsaLogo.vue'

const defaultProps = {
  title: 'Project Title',
  href: '/test-page',
  to: '',
  routerComponentName: '',
  customClasses: {
    text: [],
    link: [],
  },
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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    title: defaultProps.title,
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
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
  >${args.defaultSlot}</UsaLogo>`,
})

export const DefaultLogo = DefaultTemplate.bind({})
DefaultLogo.args = {
  ...defaultProps,
}
DefaultLogo.storyName = 'Default'

export const CustomClassesLogo = DefaultTemplate.bind({})
CustomClassesLogo.args = {
  ...defaultProps,
  customClasses: {
    text: ['test-text-class'],
    link: ['test-link-class'],
  },
}
CustomClassesLogo.storyName = 'Custom Classes'

export const DefaultSlotLogo = DefaultTemplate.bind({})
DefaultSlotLogo.args = {
  ...defaultProps,
  defaultSlot: 'Test Title',
}
DefaultSlotLogo.storyName = 'Default Slot'
