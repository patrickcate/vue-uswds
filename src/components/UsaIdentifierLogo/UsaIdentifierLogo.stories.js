import UsaIdentifierLogo from './UsaIdentifierLogo.vue'

const defaultProps = {
  href: UsaIdentifierLogo.props.href.default,
  to: UsaIdentifierLogo.props.to.default,
  routerComponentName: UsaIdentifierLogo.props.routerComponentName.default,
  src: UsaIdentifierLogo.props.src.default,
  alt: UsaIdentifierLogo.props.alt.default,
  customClasses: UsaIdentifierLogo.props.customClasses.default(),
}

export default {
  component: UsaIdentifierLogo,
  title: 'Components/UsaIdentifierLogo',
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
    src: {
      control: { type: 'text' },
    },
    alt: {
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
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    src: defaultProps.src,
    alt: defaultProps.alt,
    default: '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-identifier"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentifierLogo },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentifierLogo
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :src="src"
    :alt="alt"
    :custom-classes="customClasses"
  >${args.default}</UsaIdentifierLogo>`,
})

export const DefaultIdentifierLogo = DefaultTemplate.bind({})
DefaultIdentifierLogo.args = {
  ...defaultProps,
  src: '/assets/img/circle-gray-20.svg',
  alt: 'Parent agency logo',
  href: '#',
}
DefaultIdentifierLogo.storyName = 'Default'

export const DefaultSlotIdentifierLogo = DefaultTemplate.bind({})
DefaultSlotIdentifierLogo.args = {
  ...defaultProps,
  default: `Your logo here`,
}
DefaultSlotIdentifierLogo.storyName = 'Default Slot'

export const CustomClassesIdentifierLogo = DefaultTemplate.bind({})
CustomClassesIdentifierLogo.args = {
  ...defaultProps,
  src: '/assets/img/circle-gray-20.svg',
  alt: 'Parent agency logo',
  to: '#',
  customClasses: {
    image: ['custom-image-class'],
  },
}
CustomClassesIdentifierLogo.storyName = 'Custom Classes'
