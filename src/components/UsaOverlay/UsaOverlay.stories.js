import UsaOverlay from './UsaOverlay.vue'

const defaultProps = {
  visible: false,
}

export default {
  component: UsaOverlay,
  title: 'Components/UsaOverlay',
  argTypes: {
    visible: {
      control: { type: 'boolean' },
    },
  },
  args: {
    visible: defaultProps.visible,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaOverlay },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaOverlay :visible="visible"></UsaOverlay>`,
})

export const DefaultOverlay = DefaultTemplate.bind({})
DefaultOverlay.args = {
  ...defaultProps,
}
DefaultOverlay.storyName = 'Default'

export const VisibleOverlay = DefaultTemplate.bind({})
VisibleOverlay.args = {
  ...defaultProps,
  visible: true,
}
VisibleOverlay.storyName = 'Visible'
