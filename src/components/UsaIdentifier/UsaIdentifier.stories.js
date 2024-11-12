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
  render: args => ({
    components: { UsaIdentifier },
    props: [],
    setup() {
      return { args }
    },
    template: `<UsaIdentifier>${args.default}</UsaIdentifier>`,
  }),
}

export const DefaultIdentifier = {
  args: {
    default: 'Test',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifier>Test</UsaIdentifier>`,
      },
    },
  },
}
