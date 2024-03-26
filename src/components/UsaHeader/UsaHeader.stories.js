import UsaHeader from './UsaHeader.vue'

const defaultProps = {
  variant: UsaHeader.props.variant.default,
  megamenu: UsaHeader.props.megamenu.default,
  customClasses: UsaHeader.props.customClasses.default(),
}

export default {
  component: UsaHeader,
  title: 'Components/UsaHeader',
  argTypes: {
    variant: {
      options: ['basic', 'extended'],
      control: {
        type: 'select',
      },
    },
    megamenu: {
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
    variant: defaultProps.variant,
    megamenu: defaultProps.megamenu,
    customClasses: defaultProps.customClasses,
    default: 'Header content',
  },
  render: args => ({
    components: { UsaHeader },
    props: Object.keys(UsaHeader.props),
    setup() {
      return { args }
    },
    template: `<UsaHeader
      :variant="args.variant"
      :megamenu="args.megamenu"
      :custom-classes="args.customClasses"
    >${args.default}</UsaHeader>`,
  }),
}

export const BasicHeader = {
  args: {
    ...defaultProps,
    default: 'Basic header',
  },
  name: 'Basic',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeader>Basic header</UsaHeader>`,
      },
    },
  },
}

export const BasicMegamenuHeader = {
  args: {
    ...defaultProps,
    megamenu: true,
    default: 'Basic header with megamenu',
  },
  name: 'Basic w/ Megamenu',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeader :megamenu="true">Basic header with megamenu</UsaHeader>`,
      },
    },
  },
}

export const ExtendedHeader = {
  args: {
    ...defaultProps,
    variant: 'extended',
    default: 'Extended header',
  },
  name: 'Extended',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeader variant="extended">Extended header</UsaHeader>`,
      },
    },
  },
}

export const ExtendedMegamenuHeader = {
  args: {
    ...defaultProps,
    variant: 'extended',
    megamenu: true,
    default: 'Extended header with Megamenu',
  },
  name: 'Extended w/ Megamenu',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeader variant="extended" :megamenu="true">Extended header with Megamenu</UsaHeader>`,
      },
    },
  },
}

export const CustomClassesHeader = {
  args: {
    ...defaultProps,
    customClasses: {
      navContainer: ['test-nav-container-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeader :custom-classes="{ navContainer: ['test-nav-container-class'] }">Custom classes</UsaHeader>`,
      },
    },
  },
}
