import UsaSkipnav from './UsaSkipnav.vue'

const defaultProps = {
  // Has no default value.
  anchor: '#main-content',
}

export default {
  component: UsaSkipnav,
  title: 'Components/UsaSkipnav',
  argTypes: {
    anchor: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    anchor: defaultProps.anchor,
    default: 'Test skip link',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSkipnav },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaSkipnav :anchor="anchor">${args.default}</UsaSkipnav>`,
})

export const DefaultSkipnav = DefaultTemplate.bind({})
DefaultSkipnav.args = {}
DefaultSkipnav.storyName = 'Default'
