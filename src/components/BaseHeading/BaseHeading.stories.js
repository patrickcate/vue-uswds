import BaseHeading from './BaseHeading.vue'

const defaultProps = {
  tag: BaseHeading.props.tag.default,
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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    tag: defaultProps.tag,
    default: '',
  },
  render: args => ({
    components: { BaseHeading },
    props: Object.keys(BaseHeading.props),
    setup() {
      return { args }
    },
    template: `<BaseHeading :tag="args.tag">{{ args.default }}</BaseHeading>`,
  }),
}

export const DefaultBaseHeading = {
  args: {
    ...defaultProps,
    default: 'Default Heading',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h2">Default Heading</BaseHeading>`,
      },
    },
  },
}

export const Level1BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h1 Heading',
    tag: 'h1',
  },
  name: 'Heading Level 1',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h1">h1 Heading</BaseHeading>`,
      },
    },
  },
}

export const Level2BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h2 Heading',
    tag: 'h2',
  },
  name: 'Heading Level 2',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h2">h2 Heading</BaseHeading>`,
      },
    },
  },
}

export const Level3BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h3 Heading',
    tag: 'h3',
  },
  name: 'Heading Level 3',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h3">h3 Heading</BaseHeading>`,
      },
    },
  },
}

export const Level4BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h4 Heading',
    tag: 'h4',
  },
  name: 'Heading Level 4',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h4">h4 Heading</BaseHeading>`,
      },
    },
  },
}

export const Level5BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h5 Heading',
    tag: 'h5',
  },
  name: 'Heading Level 5',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h5">h5 Heading</BaseHeading>`,
      },
    },
  },
}

export const Level6BaseHeading = {
  args: {
    ...defaultProps,
    default: 'h6 Heading',
    tag: 'h6',
  },
  name: 'Heading Level 6',
  parameters: {
    docs: {
      source: {
        code: `<BaseHeading tag="h6">h6 Heading</BaseHeading>`,
      },
    },
  },
}
