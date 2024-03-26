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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    default: '<li class="usa-collection__meta-item">Test meta item</li>',
  },
  render: args => ({
    components: { UsaCollectionMeta },
    props: Object.keys(UsaCollectionMeta.props),
    setup() {
      return { args }
    },
    template: `<UsaCollectionMeta :aria-label="args.ariaLabel">${args.default}</UsaCollectionMeta>`,
  }),
}

export const DefaultCollectionMeta = {
  args: {
    ...defaultProps,
    ariaLabel: 'Test aria label',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionMeta aria-label="Test aria label"><li class="usa-collection__meta-item">Test meta item</li></UsaCollectionMeta>`,
      },
    },
  },
}
