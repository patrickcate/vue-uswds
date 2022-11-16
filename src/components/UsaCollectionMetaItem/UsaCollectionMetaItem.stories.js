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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionMetaItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionMetaItem>${args.default}</UsaCollectionMetaItem>`,
})

export const DefaultCollectionMetaItem = DefaultTemplate.bind({})
DefaultCollectionMetaItem.args = {
  ...defaultProps,
}
DefaultCollectionMetaItem.storyName = 'Default'
