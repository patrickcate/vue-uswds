import UsaFooterLogo from './UsaFooterLogo.vue'

const defaultProps = {
  src: UsaFooterLogo.props.src.default,
  alt: UsaFooterLogo.props.alt.default,
  heading: UsaFooterLogo.props.heading.default,
  customClasses: UsaFooterLogo.props.customClasses.default(),
}

const testLogoImageUrl =
  'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/img/circle-gray-20.svg'

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
  render: args => ({
    components: { UsaFooterLogo },
    props: Object.keys(UsaFooterLogo.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterLogo
    :src="args.src"
    :alt="args.alt"
    :heading="args.heading"
    :custom-classes="args.customClasses"
    class="grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2"
  >
    <template v-if="!!args.logo" #logo>${args.logo}</template>
    <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
  </UsaFooterLogo>`,
  }),
}

export const DefaultFooterLogo = {
  args: {
    ...defaultProps,
    src: testLogoImageUrl,
    alt: 'Test footer logo',
    heading: 'Test footer heading',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterLogo :src="${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading"></UsaFooterLogo>`,
      },
    },
  },
}

export const SlotsFooterLogo = {
  args: {
    ...defaultProps,
    logo: 'Logo slot content here...',
    'slot:heading': 'Heading slot content here...',
  },
  name: 'Slots',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterLogo :src="${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading">\n\t<template #logo>Logo slot content here...</template>\n\t<template #heading>Heading slot content here...</template>\n</UsaFooterLogo>`,
      },
    },
  },
}

export const CustomClassesFooterLogo = {
  args: {
    ...defaultProps,
    src: testLogoImageUrl,
    alt: 'Test footer logo',
    heading: 'Test footer heading',
    customClasses: {
      logoGridCol: ['test-logo-grid-col-class'],
      headingGridCol: ['test-heading-grid-col-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterLogo :src="${testLogoImageUrl}" alt="Test footer logo" heading="Test footer heading" :custom-classes="{ \n\tlogoGridCol: ['test-logo-grid-col-class'], \n\theadingGridCol: ['test-heading-grid-col-class'] \n}"></UsaFooterLogo>`,
      },
    },
  },
}
