import UsaStepIndicator from './UsaStepIndicator.vue'
import UsaStepIndicatorHeader from '@/components/UsaStepIndicatorHeader'
import UsaStepIndicatorSegment from '@/components/UsaStepIndicatorSegment'

const defaultProps = {
  steps: [],
  currentStepNumber: 1,
  counters: false,
  smallCounters: false,
  center: false,
  noLabels: false,
  headingTag: 'h2',
  customClasses: {
    list: [],
    segment: [],
    header: [],
  },
}

const testSteps = [
  'Personal information',
  'Household status',
  'Supporting documents',
  'Signature',
  'Review and submit',
]

export default {
  component: UsaStepIndicator,
  title: 'Components/UsaStepIndicator',
  argTypes: {
    steps: {
      control: { type: 'object' },
    },
    currentStepNumber: {
      control: { type: 'number', min: 1, max: testSteps.length + 1 },
    },
    counters: {
      control: { type: 'boolean' },
    },
    smallCounters: {
      control: { type: 'boolean' },
    },
    center: {
      control: { type: 'boolean' },
    },
    noLabels: {
      control: { type: 'boolean' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    headerSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    steps: testSteps,
    currentStepNumber: defaultProps.currentStepNumber,
    counters: defaultProps.counters,
    smallCounters: defaultProps.smallCounters,
    center: defaultProps.center,
    noLabels: defaultProps.noLabels,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    headerSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: {
    UsaStepIndicator,
    UsaStepIndicatorSegment,
    UsaStepIndicatorHeader,
  },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
  <UsaStepIndicator
    :steps="steps"
    :current-step-number="currentStepNumber"
    :counters="counters"
    :small-counters="smallCounters"
    :center="center"
    :no-labels="noLabels"
    :custom-classes="customClasses"
    :heading-tag="headingTag"
  >
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.headerSlot}" #header>${args.headerSlot}</template>
  </UsaStepIndicator>`,
})

export const DefaultStepIndicator = DefaultTemplate.bind({})
DefaultStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
}
DefaultStepIndicator.storyName = 'Default'

export const CountersStepIndicator = DefaultTemplate.bind({})
CountersStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  counters: true,
}
CountersStepIndicator.storyName = 'Counters'

export const SmallCountersStepIndicator = DefaultTemplate.bind({})
SmallCountersStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  smallCounters: true,
}
SmallCountersStepIndicator.storyName = 'Small Counters'

export const CenteredStepIndicator = DefaultTemplate.bind({})
CenteredStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  center: true,
}
CenteredStepIndicator.storyName = 'Centered'

export const CountersCenteredStepIndicator = DefaultTemplate.bind({})
CountersCenteredStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  counters: true,
  center: true,
}
CountersCenteredStepIndicator.storyName = 'Centered Counters'

export const SmallCountersCenteredStepIndicator = DefaultTemplate.bind({})
SmallCountersCenteredStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  smallCounters: true,
  center: true,
}
SmallCountersCenteredStepIndicator.storyName = 'Small Centered Counters'

export const NoLabelsStepIndicator = DefaultTemplate.bind({})
NoLabelsStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  noLabels: true,
}
NoLabelsStepIndicator.storyName = 'No Labels'

export const InProgressStepIndicator = DefaultTemplate.bind({})
InProgressStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  counters: true,
  currentStepNumber: 3,
}
InProgressStepIndicator.storyName = 'In Progress'

export const CustomHeadingTagStepIndicator = DefaultTemplate.bind({})
CustomHeadingTagStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  counters: true,
  currentStepNumber: 3,
  headingTag: 'h4',
}
CustomHeadingTagStepIndicator.storyName = 'Custom Heading Tag'

export const CustomClassesStepIndicator = DefaultTemplate.bind({})
CustomClassesStepIndicator.args = {
  ...defaultProps,
  steps: testSteps,
  counters: true,
  customClasses: {
    list: ['test-list-class'],
    segment: ['test-segment-class'],
    header: ['test-header-class'],
  },
}
CustomClassesStepIndicator.storyName = 'Custom Classes'

export const CustomSlotSegmentsStepIndicator = DefaultTemplate.bind({})
CustomSlotSegmentsStepIndicator.args = {
  ...defaultProps,
  steps: [],
  counters: true,
  defaultSlot: `
    <UsaStepIndicatorSegment
      status="completed"
      label="Step 1"
    ></UsaStepIndicatorSegment>
    <UsaStepIndicatorSegment
      status="current"
      label="Step 2"
    ></UsaStepIndicatorSegment>
    <UsaStepIndicatorSegment
      label="Step 3"
    ></UsaStepIndicatorSegment>
  `,
  headerSlot: `
    <UsaStepIndicatorHeader
      current-step-number="2"
      current-step-label="Step 2"
      total-steps="3"
    ></UsaStepIndicatorHeader>
  `,
}
CustomSlotSegmentsStepIndicator.storyName = 'Custom Slots'
