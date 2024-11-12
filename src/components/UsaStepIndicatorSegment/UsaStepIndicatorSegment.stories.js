import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'
import UsaStepIndicator from '@/components/UsaStepIndicator'

const defaultProps = {
  status: UsaStepIndicatorSegment.props.status.default,
  label: UsaStepIndicatorSegment.props.label.default,
}

export default {
  component: UsaStepIndicatorSegment,
  title: 'Components/UsaStepIndicatorSegment',
  argTypes: {
    status: {
      options: ['', 'current', 'completed'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    status: defaultProps.status,
  },
  render: args => ({
    components: { UsaStepIndicator, UsaStepIndicatorSegment },
    props: Object.keys(UsaStepIndicatorSegment.props),
    setup() {
      return { args }
    },
    template: `
    <UsaStepIndicator counters>
        <UsaStepIndicatorSegment :status="args.status" :label="args.label"></UsaStepIndicatorSegment>
        <template #header>&nbsp</template>
    </UsaStepIndicator>`,
  }),
}

export const DefaultStepIndicatorSegment = {
  args: {
    ...defaultProps,
    label: 'Test Step 1',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorSegment label="Test Step 1"></UsaStepIndicatorSegment>`,
      },
    },
  },
}

export const CurrentStepIndicatorSegment = {
  args: {
    ...defaultProps,
    status: 'current',
    label: 'Test Current Step 1',
  },
  name: 'Current',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorSegment status="current" label="Test Current Step 1"></UsaStepIndicatorSegment>`,
      },
    },
  },
}

export const CompletedStepIndicatorSegment = {
  args: {
    ...defaultProps,
    status: 'completed',
    label: 'Test Completed Step 1',
  },
  name: 'Completed',
  parameters: {
    docs: {
      source: {
        code: `<UsaStepIndicatorSegment status="completed" label="Test Completed Step 1"></UsaStepIndicatorSegment>`,
      },
    },
  },
}
