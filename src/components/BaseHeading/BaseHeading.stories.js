import BaseHeading from './BaseHeading.vue'

const defaultProps = {
  tag: 'h2',
}

export default {
  component: BaseHeading,
  title: 'Components/BaseHeading',
  argTypes: {
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    tag: defaultProps.tag,
    defaultSlot: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { BaseHeading },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: '<BaseHeading :tag="tag">{{ defaultSlot }}</BaseHeading>',
})

export const DefaultBaseHeading = DefaultTemplate.bind({})
DefaultBaseHeading.args = {
  ...defaultProps,
}
DefaultBaseHeading.storyName = 'Default'
