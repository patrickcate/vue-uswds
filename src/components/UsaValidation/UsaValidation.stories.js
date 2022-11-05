import UsaValidation from './UsaValidation.vue'

const testItems = [
  {
    id: 'item1',
    text: 'Use at least one uppercase character',
    validator: /[A-Z]/,
  },
  {
    id: 'item2',
    text: 'Use at least one number',
    validator: '\\d',
  },
  {
    text: 'Use at least one symbol',
    validator: value => value.length > 6,
  },
]

const defaultProps = {
  validations: UsaValidation.props.validations.default(),
  validationValue: UsaValidation.props.validationValue.default,
  heading: UsaValidation.props.heading.default,
  headingTag: UsaValidation.props.headingTag.default,
  validLabel: UsaValidation.props.validLabel.default,
  invalidLabel: UsaValidation.props.invalidLabel.default,
  id: UsaValidation.props.id.default,
  customClasses: UsaValidation.props.customClasses.default(),
}

export default {
  component: UsaValidation,
  title: 'Components/UsaValidation',
  argTypes: {
    validations: {
      control: { type: 'object' },
    },
    validationValue: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    validLabel: {
      control: { type: 'text' },
    },
    invalidLabel: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  args: {
    validations: defaultProps.validations,
    validationValue: defaultProps.validationValue,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    validLabel: defaultProps.validLabel,
    invalidLabel: defaultProps.invalidLabel,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaValidation },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaValidation
    :validations="validations"
    :validationValue="validationValue"
    :heading="heading"
    :heading-tag="headingTag"
    :validLabel="validLabel"
    :invalidLabel="invalidLabel"
    :id="id"
    :custom-classes="customClasses"
    ></UsaValidation>`,
})

export const DefaultValidation = DefaultTemplate.bind({})
DefaultValidation.args = {
  ...defaultProps,
  heading: 'Code requirements',
  validations: testItems,
}
DefaultValidation.storyName = 'Default'

export const HeadingTagValidation = DefaultTemplate.bind({})
HeadingTagValidation.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
  validations: testItems,
}
HeadingTagValidation.storyName = 'Custom Heading Tag'

export const CustomIdValidation = DefaultTemplate.bind({})
CustomIdValidation.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  id: 'test-id',
  validations: testItems,
}
CustomIdValidation.storyName = 'Custom ID'

export const CustomValidityLabelsValidation = DefaultTemplate.bind({})
CustomValidityLabelsValidation.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  validLabel: 'is valid',
  invalidLabel: 'is invalid',
  validations: testItems,
}
CustomValidityLabelsValidation.storyName = 'Custom Validity Labels'

export const CustomClassesValidation = DefaultTemplate.bind({})
CustomClassesValidation.args = {
  ...defaultProps,
  heading: 'Custom CSS classes',
  validations: testItems,
  customClasses: {
    body: ['test-body-class'],
    heading: ['test-heading-class'],
    checklist: ['test-checklist-class'],
  },
}
CustomClassesValidation.storyName = 'Custom Classes'
