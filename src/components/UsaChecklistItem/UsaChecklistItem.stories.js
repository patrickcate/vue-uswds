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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    checked: defaultProps.checked,
    defaultSlot: '',
  },
  decorators: [
    () => ({
      template:
        '<ul class="usa-checklist" style="margin-left: 40px"><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaChecklistItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaChecklistItem :checked="checked">
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
  </UsaChecklistItem>`,
})

export const DefaultChecklistItem = DefaultTemplate.bind({})
DefaultChecklistItem.args = {
  ...defaultProps,
  defaultSlot: 'Test item',
}
DefaultChecklistItem.storyName = 'Default'

export const CheckedChecklistItem = DefaultTemplate.bind({})
CheckedChecklistItem.args = {
  ...defaultProps,
  defaultSlot: 'Test item',
  checked: true,
}
CheckedChecklistItem.storyName = 'Checked'
