import UsaCollectionHeading from './UsaCollectionHeading.vue'

const defaultProps = {
  heading: 'Collection Item Heading',
  headingTag: 'h2',
  href: '/test-page',
  to: '',
  routerComponentName: '',
  customClasses: {
    link: [],
  },
}

export default {
  component: UsaCollectionHeading,
  title: 'Components/UsaCollectionHeading',
  argTypes: {
    heading: {
      control: { type: 'text' },
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
    defaultSlot: {
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
    defaultSlot: '',
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
  >${args.defaultSlot}</UsaCollectionHeading>`,
})

export const DefaultCollectionItemHeading = DefaultTemplate.bind({})
DefaultCollectionItemHeading.args = {
  ...defaultProps,
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
  defaultSlot: 'Custom header slot',
}
HeadingSlotCollectionItemHeading.storyName = 'Header Slot'

export const CustomClassesCollectionItemHeading = DefaultTemplate.bind({})
CustomClassesCollectionItemHeading.args = {
  ...defaultProps,
  customClasses: {
    link: ['test-link-class'],
  },
}
CustomClassesCollectionItemHeading.storyName = 'Custom Classes'
