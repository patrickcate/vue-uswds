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
  render: args => ({
    components: { UsaTag },
    props: Object.keys(UsaTag.props),
    setup() {
      return { args }
    },
    template: `<UsaTag :tag="args.tag" :size="args.size">${args.default}</UsaTag>`,
  }),
}

export const DefaultTag = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTag>Test</UsaTag>`,
      },
    },
  },
}

export const BigTag = {
  args: {
    ...defaultProps,
    size: 'big',
  },
  name: 'Big',
  parameters: {
    docs: {
      source: {
        code: `<UsaTag size="big">Test</UsaTag>`,
      },
    },
  },
}

export const CustomElementTag = {
  args: {
    ...defaultProps,
    tag: 'div',
    default: 'Test (div)',
  },
  name: 'Custom Element',
  parameters: {
    docs: {
      source: {
        code: `<UsaTag tag="div">Test (div)</UsaTag>`,
      },
    },
  },
}
