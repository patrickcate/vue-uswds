import UsaStepIndicatorSegment from './UsaStepIndicatorSegment.vue'

const defaultProps = {}

export default {
  component: UsaStepIndicatorSegment,
  title: 'Components/UsaStepIndicatorSegment',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaStepIndicatorSegment },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaStepIndicatorSegment>${args.defaultSlot}</UsaStepIndicatorSegment>`,
})

export const DefaultStepIndicatorSegment = DefaultTemplate.bind({})
DefaultStepIndicatorSegment.args = {
  ...defaultProps,
}
DefaultStepIndicatorSegment.storyName = 'Default'
