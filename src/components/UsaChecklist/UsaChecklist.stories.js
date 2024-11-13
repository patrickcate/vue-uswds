import UsaChecklist from './UsaChecklist.vue'
import UsaChecklistItem from '../UsaChecklistItem/UsaChecklistItem.vue'

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
  subcomponents: { UsaChecklistItem },
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
  render: args => ({
    components: { UsaChecklist },
    props: Object.keys(UsaChecklist.props),
    setup() {
      return { args }
    },
    template: `<UsaChecklist :items="args.items">
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaChecklist>`,
  }),
}

export const DefaultChecklist = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaChecklist :items="[
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
]"></UsaChecklist>`,
      },
    },
  },
}

export const CustomSlotContentChecklist = {
  args: {
    ...defaultProps,
    default: '<li>A custom item</li>',
  },
  name: 'Custom Slot Content',
  parameters: {
    docs: {
      source: {
        code: `<UsaChecklist><li>A custom item</li></UsaChecklist>`,
      },
    },
  },
}
