import UsaTag from './UsaTag.vue'

const defaultProps = {
  size: '',
  tag: 'span',
}

export default {
  component: UsaTag,
  title: 'Components/UsaTag',
  argTypes: {
    size: {
      options: ['', 'big'],
      control: {
        type: 'radio',
        labels: {
          '': 'default',
        },
      },
    },
    tag: {
      control: {
        type: 'text',
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
  components: { UsaTag },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTag :tag="tag" :size="size">{{ content }}</UsaTag>`,
})

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
}

export const Big = Template.bind({})
Big.args = {
  ...defaultProps,
  size: 'big',
}

export const CustomTag = Template.bind({})
CustomTag.args = {
  ...defaultProps,
  tag: 'div',
  content: 'Test (div)',
}
