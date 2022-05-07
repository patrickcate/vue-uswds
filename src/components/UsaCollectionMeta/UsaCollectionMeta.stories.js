import UsaCollectionMeta from './UsaCollectionMeta.vue'

const defaultProps = {
  ariaLabel: UsaCollectionMeta.props.ariaLabel.default,
}

export default {
  component: UsaCollectionMeta,
  title: 'Components/UsaCollectionMeta',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    defaultSlot: '<li class="usa-collection__meta-item">Test meta item</li>',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionMeta },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionMeta :aria-label="ariaLabel">${args.defaultSlot}</UsaCollectionMeta>`,
})

export const DefaultCollectionMeta = DefaultTemplate.bind({})
DefaultCollectionMeta.args = {
  ...defaultProps,
  ariaLabel: 'Test aria label',
}
DefaultCollectionMeta.storyName = 'Default'
