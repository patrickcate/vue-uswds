import UsaChecklist from './UsaChecklist.vue'

const testItems = [
  {
    id: 'item1',
    text: 'Use at least one uppercase character',
    checked: false,
    ariaLabel: 'is valid',
  },
  {
    id: 'item2',
    text: 'Use at least one number',
    checked: true,
    ariaLabel: 'is valid',
  },
  {
    text: 'Use at least one symbol',
    checked: false,
    ariaLabel: 'is invalid',
  },
]

const defaultProps = {
  items: UsaChecklist.props.items.default(),
}

export default {
  component: UsaChecklist,
  title: 'Components/UsaChecklist',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.items,
    default: '',
  },
  decorators: [
    () => ({
      template:
        '<ul class="usa-checklist" style="margin-left: 40px"><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaChecklist },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaChecklist :items="items">
    <template v-if="${!!args.default}" #default>${args.default}</template>
  </UsaChecklist>`,
})

export const DefaultChecklist = DefaultTemplate.bind({})
DefaultChecklist.args = {
  ...defaultProps,
  items: testItems,
}
DefaultChecklist.storyName = 'Default'

export const CustomSlotContentChecklist = DefaultTemplate.bind({})
CustomSlotContentChecklist.args = {
  ...defaultProps,
  default: '<li>A custom item</li>',
}
CustomSlotContentChecklist.storyName = 'Custom Slot Content'
