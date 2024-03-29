import UsaTag from './UsaTag.vue'

const defaultProps = {
  size: UsaTag.props.size.default,
  tag: UsaTag.props.tag.default,
}

export default {
  component: UsaTag,
  title: 'Components/UsaTag',
  argTypes: {
    size: {
      options: ['', 'big'],
      control: {
        type: 'radio',
      },
    },
    tag: {
      control: {
        type: 'text',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    tag: defaultProps.tag,
    default: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTag },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTag :tag="tag" :size="size">${args.default}</UsaTag>`,
})

export const DefaultTag = DefaultTemplate.bind({})
DefaultTag.args = {
  ...defaultProps,
}
DefaultTag.storyName = 'Default'

export const BigTag = DefaultTemplate.bind({})
BigTag.args = {
  ...defaultProps,
  size: 'big',
}
BigTag.storyName = 'Big'

export const CustomElementTag = DefaultTemplate.bind({})
CustomElementTag.args = {
  ...defaultProps,
  tag: 'div',
  default: 'Test (div)',
}
CustomElementTag.storyName = 'Custom Element'
