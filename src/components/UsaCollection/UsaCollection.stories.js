import UsaCollection from './UsaCollection.vue'
import UsaCollectionItem from '@/components/UsaCollectionItem'
import UsaCollectionHeading from '@/components/UsaCollectionHeading'

const defaultProps = { condensed: UsaCollection.props.condensed.default }

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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    condensed: defaultProps.condensed,
    default: testCollectionItem,
  },
  render: args => ({
    components: { UsaCollection, UsaCollectionItem, UsaCollectionHeading },
    props: Object.keys(UsaCollection.props),
    setup() {
      return { args }
    },
    template: `<UsaCollection :condensed="args.condensed">${args.default}</UsaCollection>`,
  }),
}

export const DefaultCollection = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollection>${testCollectionItem}</UsaCollection>`,
      },
    },
  },
}

export const CondensedCollection = {
  args: {
    ...defaultProps,
    condensed: true,
  },
  name: 'Condensed',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollection :condensed="true">${testCollectionItem}</UsaCollection>`,
      },
    },
  },
}
