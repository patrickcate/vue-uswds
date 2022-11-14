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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionHeading },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionHeading
    :heading="heading"
    :heading-tag="headingTag"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :custom-classes="customClasses"
  >${args.default}</UsaCollectionHeading>`,
})

export const DefaultCollectionItemHeading = DefaultTemplate.bind({})
DefaultCollectionItemHeading.args = {
  ...defaultProps,
  heading: 'Collection Item Heading',
}
DefaultCollectionItemHeading.storyName = 'Default'

export const CustomHeadingCollectionItemHeading = DefaultTemplate.bind({})
CustomHeadingCollectionItemHeading.args = {
  ...defaultProps,

  headingTag: 'h4',
  heading: 'Custom heading tag',
}
CustomHeadingCollectionItemHeading.storyName = 'Custom Heading Tag'

export const HeadingSlotCollectionItemHeading = DefaultTemplate.bind({})
HeadingSlotCollectionItemHeading.args = {
  ...defaultProps,
  heading: 'Collection Item Heading',
  default: 'Custom header slot',
}
HeadingSlotCollectionItemHeading.storyName = 'Header Slot'

export const CustomClassesCollectionItemHeading = DefaultTemplate.bind({})
CustomClassesCollectionItemHeading.args = {
  ...defaultProps,
  heading: 'Collection Item Heading',
  customClasses: {
    link: ['test-link-class'],
  },
}
CustomClassesCollectionItemHeading.storyName = 'Custom Classes'
