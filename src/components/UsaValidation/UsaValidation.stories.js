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
  render: args => ({
    components: { UsaValidation },
    props: Object.keys(UsaValidation.props),
    setup() {
      return { args }
    },
    template: `<UsaValidation
      :validations="args.validations"
      :validationValue="args.validationValue"
      :heading="args.heading"
      :heading-tag="args.headingTag"
      :validLabel="args.validLabel"
      :invalidLabel="args.invalidLabel"
      :id="args.id"
      :custom-classes="args.customClasses"
    />`,
  }),
}

export const DefaultValidation = {
  args: {
    ...defaultProps,
    heading: 'Code requirements',
    validations: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaValidation heading="Code requirements" :validations="${JSON.stringify(testItems)}"></UsaValidation>`,
      },
    },
  },
}

export const HeadingTagValidation = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
    validations: testItems,
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaValidation heading="Custom Heading Tag" heading-tag="h4" :validations="${JSON.stringify(testItems)}"></UsaValidation>`,
      },
    },
  },
}

export const CustomIdValidation = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    id: 'test-id',
    validations: testItems,
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaValidation heading="Custom Heading Tag" id="test-id" :validations="${JSON.stringify(testItems)}"></UsaValidation>`,
      },
    },
  },
}

export const CustomValidityLabelsValidation = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    validLabel: 'is valid',
    invalidLabel: 'is invalid',
    validations: testItems,
  },
  name: 'Custom Validity Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaValidation heading="Custom Heading Tag" valid-label="is valid" invalid-label="is invalid" :validations="${JSON.stringify(testItems)}"></UsaValidation>`,
      },
    },
  },
}

export const CustomClassesValidation = {
  args: {
    ...defaultProps,
    heading: 'Custom CSS classes',
    validations: testItems,
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class'],
      checklist: ['test-checklist-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaValidation heading="Custom CSS classes" :validations="${JSON.stringify(testItems)}" :custom-classes="{ \n\tbody: ['test-body-class'], \n\theading: ['test-heading-class'], \n\tchecklist: ['test-checklist-class'] }"></UsaValidation>`,
      },
    },
  },
}
