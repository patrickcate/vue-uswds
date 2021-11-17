import UsaStepIndicatorHeader from './UsaStepIndicatorHeader.vue'

const defaultProps = {
  headingTag: 'h2',
  customClasses: {
    heading: [],
    counter: [],
    label: [],
  },
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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaStepIndicatorHeader },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaStepIndicatorHeader
    :current-step-number="currentStepNumber"
    :current-step-label="currentStepLabel"
    :total-steps="totalSteps"
    :headingTag="headingTag"
    :custom-classes="customClasses"
  ></UsaStepIndicatorHeader>`,
})

export const DefaultStepIndicatorHeader = DefaultTemplate.bind({})
DefaultStepIndicatorHeader.args = {
  ...defaultProps,
}
DefaultStepIndicatorHeader.storyName = 'Default'

export const CustomClassesStepIndicatorHeader = DefaultTemplate.bind({})
CustomClassesStepIndicatorHeader.args = {
  ...defaultProps,
  customClasses: {
    heading: ['test-heading-class'],
    counter: ['test-counter-class'],
    label: ['test-label-class'],
  },
}
CustomClassesStepIndicatorHeader.storyName = 'Custom Classes'

export const CustomHeadingTagStepIndicatorHeader = DefaultTemplate.bind({})
CustomHeadingTagStepIndicatorHeader.args = {
  ...defaultProps,
  headingTag: 'h4',
}
CustomHeadingTagStepIndicatorHeader.storyName = 'Custom Heading Tag'
