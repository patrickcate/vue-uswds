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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    tag: defaultProps.tag,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { BaseHeading },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<BaseHeading :tag="tag">${args.defaultSlot}</BaseHeading>`,
})

export const DefaultBaseHeading = DefaultTemplate.bind({})
DefaultBaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'Default Heading',
}
DefaultBaseHeading.storyName = 'Default'

export const Level1BaseHeading = DefaultTemplate.bind({})
Level1BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h1 Heading',
  tag: 'h1',
}
Level1BaseHeading.storyName = 'Heading Level 1'

export const Level2BaseHeading = DefaultTemplate.bind({})
Level2BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h2 Heading',
  tag: 'h2',
}
Level2BaseHeading.storyName = 'Heading Level 2'

export const Level3BaseHeading = DefaultTemplate.bind({})
Level3BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h3 Heading',
  tag: 'h3',
}
Level3BaseHeading.storyName = 'Heading Level 3'

export const Level4BaseHeading = DefaultTemplate.bind({})
Level4BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h4 Heading',
  tag: 'h4',
}
Level4BaseHeading.storyName = 'Heading Level 4'

export const Level5BaseHeading = DefaultTemplate.bind({})
Level5BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h5 Heading',
  tag: 'h5',
}
Level5BaseHeading.storyName = 'Heading Level 5'

export const Level6BaseHeading = DefaultTemplate.bind({})
Level6BaseHeading.args = {
  ...defaultProps,
  defaultSlot: 'h6 Heading',
  tag: 'h6',
}
Level6BaseHeading.storyName = 'Heading Level 6'
