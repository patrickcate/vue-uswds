import UsaIdentifier from './UsaIdentifier.vue'

export default {
  component: UsaIdentifier,
  title: 'Components/UsaIdentifier',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentifier },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentifier>${args.default}</UsaIdentifier>`,
})

export const DefaultIdentifier = DefaultTemplate.bind({})
DefaultIdentifier.args = {}
DefaultIdentifier.storyName = 'Default'
