import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'
import UsaStepIndicator from '@/components/UsaStepIndicator'

const defaultProps = {
  status: '',
  label: '',
}

export default {
  component: UsaStepIndicatorSegment,
  title: 'Components/UsaStepIndicatorSegment',
  argTypes: {
    status: {
      control: {
        options: ['', 'current', 'completed'],
        type: 'select',
      },
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    status: defaultProps.status,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaStepIndicator, UsaStepIndicatorSegment },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
    <UsaStepIndicator counters>
      <UsaStepIndicatorSegment :status="status" :label="label"></UsaStepIndicatorSegment>
      <template #header>&nbsp</template>
  </UsaStepIndicator>`,
})

export const DefaultStepIndicatorSegment = DefaultTemplate.bind({})
DefaultStepIndicatorSegment.args = {
  ...defaultProps,
  label: 'Test Step 1',
}
DefaultStepIndicatorSegment.storyName = 'Default'

export const CurrentStepIndicatorSegment = DefaultTemplate.bind({})
CurrentStepIndicatorSegment.args = {
  ...defaultProps,
  status: 'current',
  label: 'Test Current Step 1',
}
CurrentStepIndicatorSegment.storyName = 'Current'

export const CompletedStepIndicatorSegment = DefaultTemplate.bind({})
CompletedStepIndicatorSegment.args = {
  ...defaultProps,
  status: 'completed',
  label: 'Test Completed Step 1',
}
CompletedStepIndicatorSegment.storyName = 'Completed'
