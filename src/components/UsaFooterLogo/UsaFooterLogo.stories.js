import UsaFooterLogo from './UsaFooterLogo.vue'

const defaultProps = {
  src: UsaFooterLogo.props.src.default,
  alt: UsaFooterLogo.props.alt.default,
  heading: UsaFooterLogo.props.heading.default,
  customClasses: UsaFooterLogo.props.customClasses.default(),
}

const testLogoImageUrl =
  'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/img/circle-gray-20.svg'

export default {
  component: UsaFooterLogo,
  title: 'Components/UsaFooterLogo',
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    logo: {
      control: { type: 'text' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
  },
  args: {
    src: defaultProps.src,
    alt: defaultProps.alt,
    heading: defaultProps.heading,
    customClasses: defaultProps.customClasses,
    logo: '',
    'slot:heading': '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterLogo },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterLogo
    :src="src"
    :alt="alt"
    :heading="heading"
    :custom-classes="customClasses"
    class="grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
  >
    <template v-if="${!!args.logo}" #logo>${args.logo}</template>
    <template v-if="${!!args['slot:heading']}" #heading>${
    args['slot:heading']
  }</template>
  </UsaFooterLogo>`,
})

export const DefaultFooterLogo = DefaultTemplate.bind({})
DefaultFooterLogo.args = {
  ...defaultProps,
  src: testLogoImageUrl,
  alt: 'Test footer logo',
  heading: 'Test footer heading',
}
DefaultFooterLogo.storyName = 'Default'

export const SlotsFooterLogo = DefaultTemplate.bind({})
SlotsFooterLogo.args = {
  ...defaultProps,
  logo: 'Logo slot content here...',
  'slot:heading': 'Heading slot content here...',
}
SlotsFooterLogo.storyName = 'Slots'

export const CustomClassesFooterLogo = DefaultTemplate.bind({})
CustomClassesFooterLogo.args = {
  ...defaultProps,
  src: testLogoImageUrl,
  alt: 'Test footer logo',
  heading: 'Test footer heading',
  customClasses: {
    logoGridCol: ['test-logo-grid-col-class'],
    headingGridCol: ['test-heading-grid-col-class'],
  },
}
CustomClassesFooterLogo.storyName = 'Custom Classes'
