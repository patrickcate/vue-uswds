import UsaCollectionHeading from './UsaCollectionHeading.vue'

const defaultProps = {
  heading: UsaCollectionHeading.props.heading.default,
  headingTag: UsaCollectionHeading.props.headingTag.default,
  href: UsaCollectionHeading.props.href.default,
  to: UsaCollectionHeading.props.to.default,
  routerComponentName: UsaCollectionHeading.props.routerComponentName.default,
  customClasses: UsaCollectionHeading.props.customClasses.default(),
}

export default {
  component: UsaCollectionHeading,
  title: 'Components/UsaCollectionHeading',
  argTypes: {
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
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
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaCollectionHeading },
    props: Object.keys(UsaCollectionHeading.props),
    setup() {
      return { args }
    },
    template: `<UsaCollectionHeading
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >${args.default}</UsaCollectionHeading>`,
  }),
}

export const DefaultCollectionItemHeading = {
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionHeading heading="Collection Item Heading" />`,
      },
    },
  },
}

export const CustomHeadingCollectionItemHeading = {
  args: {
    ...defaultProps,

    headingTag: 'h4',
    heading: 'Custom heading tag',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionHeading heading-tag="h4" heading="Collection Item Heading" />`,
      },
    },
  },
}

export const HeadingSlotCollectionItemHeading = {
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading',
    default: 'Custom header slot',
  },
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionHeading heading-tag="h4">Custom header slot</UsaCollectionHeading>`,
      },
    },
  },
}

export const CustomClassesCollectionItemHeading = {
  args: {
    ...defaultProps,
    heading: 'Collection Item Heading',
    customClasses: {
      link: ['test-link-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionHeading heading="Collection Item Heading" :custom-classes="{ link: ['test-link-class'] }" />`,
      },
    },
  },
}
