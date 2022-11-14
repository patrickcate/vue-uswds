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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaChecklistItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaChecklistItem :checked="checked" :aria-label="ariaLabel">
    <template v-if="${!!args.default}" #default>${args.default}</template>
  </UsaChecklistItem>`,
})

export const DefaultChecklistItem = DefaultTemplate.bind({})
DefaultChecklistItem.args = {
  ...defaultProps,
  default: 'Test item',
}
DefaultChecklistItem.storyName = 'Default'

export const CheckedChecklistItem = DefaultTemplate.bind({})
CheckedChecklistItem.args = {
  ...defaultProps,
  default: 'Test item',
  checked: true,
}
CheckedChecklistItem.storyName = 'Checked'

export const CustomAriaLabelChecklistItem = DefaultTemplate.bind({})
CustomAriaLabelChecklistItem.args = {
  ...defaultProps,
  default: 'Test item',
  ariaLabel: 'is invalid',
}
CustomAriaLabelChecklistItem.storyName = 'Custom Aria Label'
