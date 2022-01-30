import UsaIdentifier from './UsaIdentifier.vue'

export default {
  component: UsaIdentifier,
  title: 'Components/UsaIdentifier',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentifier },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentifier>${args.defaultSlot}</UsaIdentifier>`,
})

export const DefaultIdentifier = DefaultTemplate.bind({})
DefaultIdentifier.args = {}
DefaultIdentifier.storyName = 'Default'
