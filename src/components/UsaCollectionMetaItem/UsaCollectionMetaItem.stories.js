import UsaCollectionMetaItem from './UsaCollectionMetaItem.vue'

const defaultProps = {}

export default {
  component: UsaCollectionMetaItem,
  title: 'Components/UsaCollectionMetaItem',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: 'Test collection meta item',
  },
  decorators: [
    () => ({ template: '<ul class="usa-collection__meta"><story /></ul>' }),
  ],
  render: args => ({
    components: { UsaCollectionMetaItem },
    props: [],
    setup() {
      return { args }
    },
    template: `<UsaCollectionMetaItem>${args.default}</UsaCollectionMetaItem>`,
  }),
}

export const DefaultCollectionMetaItem = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionMetaItem>Test collection meta item</UsaCollectionMetaItem>`,
      },
    },
  },
}
