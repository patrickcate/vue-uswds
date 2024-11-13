import UsaStepIndicatorHeader from './UsaStepIndicatorHeader.vue'

const defaultProps = {
  headingTag: UsaStepIndicatorHeader.props.headingTag.default,
  customClasses: UsaStepIndicatorHeader.props.customClasses.default(),
}

const testSteps = ['Test step 1', 'Test step 2', 'Test step 3']

export default {
  component: UsaStepIndicatorHeader,
  title: 'Components/UsaStepIndicatorHeader',
  argTypes: {
    currentStepNumber: {
      control: { type: 'number', min: 1, max: testSteps.length + 1 },
    },
    currentStepLabel: {
      control: { type: 'text' },
    },
    totalSteps: {
      control: { type: 'number', min: 1, max: testSteps.length + 1 },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  args: {
    currentStepNumber: 1,
    currentStepLabel: testSteps[0],
    totalSteps: testSteps.length,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
  },
  render: args => ({
    components: { UsaStepIndicatorHeader },
    props: Object.keys(UsaStepIndicatorHeader.props),
    setup() {
      return { args }
    },
    template: `<UsaStepIndicatorHeader
      :current-step-number="args.currentStepNumber"
      :current-step-label="args.currentStepLabel"
      :total-steps="args.totalSteps"
      :headingTag="args.headingTag"
      :custom-classes="args.customClasses"
    ></UsaStepIndicatorHeader>`,
  }),
}

export const DefaultStepIndicatorHeader = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3"></UsaStepIndicatorHeader>`,
      },
    },
  },
}

export const CustomClassesStepIndicatorHeader = {
  args: {
    ...defaultProps,
    customClasses: {
      heading: ['test-heading-class'],
      counter: ['test-counter-class'],
      label: ['test-label-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" :custom-classes="{ heading: ['test-heading-class'], counter: ['test-counter-class'], label: ['test-label-class'] }"></UsaStepIndicatorHeader>`,
      },
    },
  },
}

export const CustomHeadingTagStepIndicatorHeader = {
  args: {
    ...defaultProps,
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorHeader :current-step-number="1" current-step-label="Test step 1" :total-steps="3" heading-tag="h4"></UsaStepIndicatorHeader>`,
      },
    },
  },
}
