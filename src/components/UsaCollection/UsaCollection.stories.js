import UsaCollection from './UsaCollection.vue'

const defaultProps = { condensed: false }

export default {
  component: UsaCollection,
  title: 'Components/UsaCollection',
  argTypes: {
    condensed: {
      control: { type: 'boolean' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    condensed: defaultProps.condensed,
    defaultSlot: 'Test',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollection :condensed="condensed">${args.defaultSlot}</UsaCollection>`,
})

export const DefaultCollection = DefaultTemplate.bind({})
DefaultCollection.args = {
  ...defaultProps,
}
DefaultCollection.storyName = 'Default'

export const CondensedCollection = DefaultTemplate.bind({})
CondensedCollection.args = {
  ...defaultProps,
  condensed: true,
}
CondensedCollection.storyName = 'Condensed'
