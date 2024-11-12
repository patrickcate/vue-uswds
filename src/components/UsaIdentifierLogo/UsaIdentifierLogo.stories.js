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
  render: args => ({
    components: { UsaIdentifierLogo },
    props: Object.keys(UsaIdentifierLogo.props),
    setup() {
      return { args }
    },
    template: `<UsaIdentifierLogo
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :src="args.src"
    :alt="args.alt"
    :custom-classes="args.customClasses"
  >${args.default}</UsaIdentifierLogo>`,
  }),
}

export const DefaultIdentifierLogo = {
  args: {
    ...defaultProps,
    src: '/assets/img/circle-gray-20.svg',
    alt: 'Parent agency logo',
    href: '#',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierLogo src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" href="#"></UsaIdentifierLogo>`,
      },
    },
  },
}

export const DefaultSlotIdentifierLogo = {
  args: {
    ...defaultProps,
    default: `Your logo here`,
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierLogo>Your logo here</UsaIdentifierLogo>`,
      },
    },
  },
}

export const CustomClassesIdentifierLogo = {
  args: {
    ...defaultProps,
    src: '/assets/img/circle-gray-20.svg',
    alt: 'Parent agency logo',
    to: '#',
    customClasses: {
      image: ['custom-image-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierLogo :custom-classes="{ image: ['custom-image-class'] }" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" to="#"></UsaIdentifierLogo>`,
      },
    },
  },
}
