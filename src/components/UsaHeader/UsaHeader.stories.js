import UsaHeader from './UsaHeader.vue'

const defaultProps = {
  variant: 'basic',
  megamenu: false,
  customClasses: {
    navContainer: [],
  },
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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    megamenu: defaultProps.megamenu,
    customClasses: defaultProps.customClasses,
    defaultSlot: 'Header content',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaHeader },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaHeader
      :variant="variant"
      :megamenu="megamenu"
      :custom-classes="customClasses"
    >${args.defaultSlot}</UsaHeader>`,
})

export const BasicHeader = DefaultTemplate.bind({})
BasicHeader.args = {
  ...defaultProps,
  defaultSlot: 'Basic header',
}
BasicHeader.storyName = 'Basic'

export const BasicMegamenuHeader = DefaultTemplate.bind({})
BasicMegamenuHeader.args = {
  ...defaultProps,
  megamenu: true,
  defaultSlot: 'Basic header with megamenu',
}
BasicMegamenuHeader.storyName = 'Basic w/ Megamenu'

export const ExtendedHeader = DefaultTemplate.bind({})
ExtendedHeader.args = {
  ...defaultProps,
  variant: 'extended',
  defaultSlot: 'Extended header',
}
ExtendedHeader.storyName = 'Extended'

export const ExtendedMegamenuHeader = DefaultTemplate.bind({})
ExtendedMegamenuHeader.args = {
  ...defaultProps,
  variant: 'extended',
  megamenu: true,
  defaultSlot: 'Extended header with Megamenu',
}
ExtendedMegamenuHeader.storyName = 'Extended w/ Megamenu'

export const CustomClassesHeader = DefaultTemplate.bind({})
CustomClassesHeader.args = {
  ...defaultProps,
  customClasses: {
    navContainer: ['test-nav-container-class'],
  },
}
CustomClassesHeader.storyName = 'Custom Classes'
