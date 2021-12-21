import UsaCollection from './UsaCollection.vue'
import UsaCollectionItem from '@/components/UsaCollectionItem'
import UsaCollectionHeading from '@/components/UsaCollectionHeading'

const defaultProps = { condensed: false }

const testCollectionItem = `
  <UsaCollectionItem
    href="https://www.performance.gov/presidents-winners-press-release/"
    heading="Gears of Government President's Award winners"
  >
    Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
  </UsaCollectionItem>
`

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
    defaultSlot: testCollectionItem,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollection, UsaCollectionItem, UsaCollectionHeading },
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
