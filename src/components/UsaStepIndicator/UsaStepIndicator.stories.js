import UsaStepIndicator from './UsaStepIndicator.vue'
import UsaStepIndicatorHeader from '@/components/UsaStepIndicatorHeader'
import UsaStepIndicatorSegment from '@/components/UsaStepIndicatorSegment'

const defaultProps = {
  steps: UsaStepIndicator.props.steps.default(),
  currentStepNumber: UsaStepIndicator.props.currentStepNumber.default,
  counters: UsaStepIndicator.props.counters.default,
  smallCounters: UsaStepIndicator.props.smallCounters.default,
  center: UsaStepIndicator.props.center.default,
  noLabels: UsaStepIndicator.props.noLabels.default,
  headingTag: UsaStepIndicator.props.headingTag.default,
  customClasses: UsaStepIndicator.props.customClasses.default(),
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
  subcomponents: { UsaStepIndicatorHeader, UsaStepIndicatorSegment },
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
    default: {
      control: { type: 'text' },
    },
    header: {
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
    default: '',
    header: '',
  },
  render: args => ({
    components: {
      UsaStepIndicator,
      UsaStepIndicatorSegment,
      UsaStepIndicatorHeader,
    },
    props: Object.keys(UsaStepIndicator.props),
    setup() {
      return { args }
    },
    template: `
    <UsaStepIndicator
      :steps="args.steps"
      :current-step-number="args.currentStepNumber"
      :counters="args.counters"
      :small-counters="args.smallCounters"
      :center="args.center"
      :no-labels="args.noLabels"
      :custom-classes="args.customClasses"
      :heading-tag="args.headingTag"
    >
      <template v-if="!!args.default" #default>${args.default}</template>
      <template v-if="!!args.header" #header>${args.header}</template>
      </UsaStepIndicator>`,
  }),
}

export const DefaultStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps"></UsaStepIndicator>`,
      },
    },
  },
}

export const CountersStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
  },
  name: 'Counters',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :counters="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const SmallCountersStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    smallCounters: true,
  },
  name: 'Small Counters',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :small-counters="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const CenteredStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    center: true,
  },
  name: 'Centered',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :center="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const CountersCenteredStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    center: true,
  },
  name: 'Centered Counters',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :counters="true" :center="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const SmallCountersCenteredStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    smallCounters: true,
    center: true,
  },
  name: 'Small Centered Counters',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :small-counters="true" :center="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const NoLabelsStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    noLabels: true,
  },
  name: 'No Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :no-labels="true"></UsaStepIndicator>`,
      },
    },
  },
}

export const InProgressStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    currentStepNumber: 3,
  },
  name: 'In Progress',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3"></UsaStepIndicator>`,
      },
    },
  },
}

export const CustomHeadingTagStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    currentStepNumber: 3,
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :counters="true" :current-step-number="3" heading-tag="h4"></UsaStepIndicator>`,
      },
    },
  },
}

export const CustomClassesStepIndicator = {
  args: {
    ...defaultProps,
    steps: testSteps,
    counters: true,
    customClasses: {
      list: ['test-list-class'],
      segment: ['test-segment-class'],
      header: ['test-header-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator :steps="testSteps" :counters="true" :custom-classes="{ list: ['test-list-class'], segment: ['test-segment-class'], header: ['test-header-class'] }"></UsaStepIndicator>`,
      },
    },
  },
}

export const CustomSlotSegmentsStepIndicator = {
  args: {
    ...defaultProps,
    steps: [],
    counters: true,
    default: `
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
    header: `
      <UsaStepIndicatorHeader
        :current-step-number="2"
        current-step-label="Step 2"
        :total-steps="3"
      ></UsaStepIndicatorHeader>
    `,
  },
  name: 'Custom Slots',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicator>
        <template #default>
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
        </template>
        <template #header>
          <UsaStepIndicatorHeader
            :current-step-number="2"
            current-step-label="Step 2"
            :total-steps="3"
          ></UsaStepIndicatorHeader>`,
      },
    },
  },
}
