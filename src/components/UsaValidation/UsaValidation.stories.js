import UsaValidation from './UsaValidation.vue'

const testItems = [
  {
    id: 'item1',
    text: 'Use at least one uppercase character',
    checked: false,
  },
  {
    id: 'item2',
    text: 'Use at least one number',
    checked: true,
  },
  {
    id: 'item3',
    text: 'Use at least one symbol',
    checked: false,
  },
]

const defaultProps = {
  items: UsaValidation.props.items.default(),
  heading: UsaValidation.props.heading.default,
  headingTag: UsaValidation.props.headingTag.default,
  customClasses: UsaValidation.props.customClasses.default(),
}

export default {
  component: UsaValidation,
  title: 'Components/UsaValidation',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
  args: {
    items: defaultProps.items,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaValidation },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaValidation
    :items="items"
    :heading="heading"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
    >${args.defaultSlot}</UsaValidation>`,
})

export const DefaultValidation = DefaultTemplate.bind({})
DefaultValidation.args = {
  ...defaultProps,
  heading: 'Code requirements',
  items: testItems,
}
DefaultValidation.storyName = 'Default'

export const HeadingTagValidation = DefaultTemplate.bind({})
HeadingTagValidation.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
  items: testItems,
}
HeadingTagValidation.storyName = 'Custom Heading Tag'

export const CustomClassesValidation = DefaultTemplate.bind({})
CustomClassesValidation.args = {
  ...defaultProps,
  heading: 'Custom CSS classes',
  items: testItems,
  customClasses: {
    body: ['test-body-class'],
    heading: ['test-heading-class'],
  },
}
CustomClassesValidation.storyName = 'Custom Classes'
