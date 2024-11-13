import UsaChecklistItem from './UsaChecklistItem.vue'

const defaultProps = {
  checked: UsaChecklistItem.props.checked.default,
}

export default {
  component: UsaChecklistItem,
  title: 'Components/UsaChecklistItem',
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
  },
  args: {
    checked: defaultProps.checked,
    ariaLabel: '',
  },
  decorators: [
    () => ({
      template:
        '<ul class="usa-checklist" style="margin-left: 40px"><story /></ul>',
    }),
  ],
  render: args => ({
    components: { UsaChecklistItem },
    props: Object.keys(UsaChecklistItem.props),
    setup() {
      return { args }
    },
    template: `<UsaChecklistItem :checked="args.checked" :aria-label="args.ariaLabel">
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaChecklistItem>`,
  }),
}

export const DefaultChecklistItem = {
  args: {
    ...defaultProps,
    default: 'Test item',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaChecklistItem>Test item</UsaChecklistItem>`,
      },
    },
  },
}

export const CheckedChecklistItem = {
  args: {
    ...defaultProps,
    default: 'Test item',
    checked: true,
  },
  name: 'Checked',
  parameters: {
    docs: {
      source: {
        code: `<UsaChecklistItem :checked="true">Test item</UsaChecklistItem>`,
      },
    },
  },
}

export const CustomAriaLabelChecklistItem = {
  args: {
    ...defaultProps,
    default: 'Test item',
    ariaLabel: 'is invalid',
  },
  name: 'Custom Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaChecklistItem aria-label="is invalid">Test item</UsaChecklistItem>`,
      },
    },
  },
}
