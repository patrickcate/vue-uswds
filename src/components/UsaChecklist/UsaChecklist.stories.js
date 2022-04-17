import UsaChecklist from './UsaChecklist.vue'

const testItems = [
  {
    id: 'item1',
    checked: false,
    text: 'Test item 1',
  },
  {
    id: 'item2',
    checked: true,
    text: 'Test item 2',
  },
  {
    checked: false,
    text: 'Test item 3',
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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.items,
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
  components: { UsaChecklist },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaChecklist :items="items">
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
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
  defaultSlot: '<li>A custom item</li>',
}
CustomSlotContentChecklist.storyName = 'Custom Slot Content'
