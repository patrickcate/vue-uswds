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
  render: args => ({
    components: { UsaLogo },
    props: Object.keys(UsaLogo.props),
    setup() {
      return { args }
    },
    template: `<UsaLogo
    :title="args.title"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >${args.default}</UsaLogo>`,
  }),
}

export const DefaultLogo = {
  args: {
    ...defaultProps,
    title: 'Project Title',
    href: '/test-page',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaLogo title="Project Title" href="/test-page"></UsaLogo>`,
      },
    },
  },
}

export const CustomClassesLogo = {
  args: {
    ...defaultProps,
    title: 'Project Title',
    href: '/test-page',
    customClasses: {
      text: ['test-text-class'],
      link: ['test-link-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaLogo title="Project Title" href="/test-page" :custom-classes="{ text: ['test-text-class'], link: ['test-link-class'] }"></UsaLogo>`,
      },
    },
  },
}

export const DefaultSlotLogo = {
  args: {
    ...defaultProps,
    href: '/test-page',
    default: 'Test Title',
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaLogo href="/test-page">Test Title</UsaLogo>`,
      },
    },
  },
}
