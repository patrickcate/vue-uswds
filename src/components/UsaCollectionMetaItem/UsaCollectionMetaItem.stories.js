import UsaCollectionMetaItem from './UsaCollectionMetaItem.vue'

const defaultProps = {}

export default {
  component: UsaCollectionMetaItem,
  title: 'Components/UsaCollectionMetaItem',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: 'Test collection meta item',
  },
  decorators: [
    () => ({ template: '<ul class="usa-collection__meta"><story /></ul>' }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionMetaItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionMetaItem>${args.defaultSlot}</UsaCollectionMetaItem>`,
})

export const DefaultCollectionMetaItem = DefaultTemplate.bind({})
DefaultCollectionMetaItem.args = {
  ...defaultProps,
}
DefaultCollectionMetaItem.storyName = 'Default'
