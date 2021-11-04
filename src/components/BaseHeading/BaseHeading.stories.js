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
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    tag: defaultProps.tag,
    content: 'Test',
  },
}

const Template = (args, { argTypes }) => ({
  components: { BaseHeading },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: '<BaseHeading :tag="tag">{{ content }}</BaseHeading>',
})

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
}
