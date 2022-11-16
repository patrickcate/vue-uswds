import UsaTableSortButton from './UsaTableSortButton.vue'

const defaultProps = {
  headerId: UsaTableSortButton.props.headerId.default,
  headerLabel: UsaTableSortButton.props.headerLabel.default,
  currentSortDirection: UsaTableSortButton.props.currentSortDirection.default,
}

export default {
  component: UsaTableSortButton,
  title: 'Components/UsaTableSortButton',
  argTypes: {
    headerId: {
      control: { type: 'text' },
    },
    headerLabel: {
      control: { type: 'text' },
    },
    currentSortDirection: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    headerId: defaultProps.headerId,
    headerLabel: defaultProps.headerLabel,
    currentSortDirection: defaultProps.currentSortDirection,
    default: '',
  },
  decorators: [
    () => ({
      template:
        '<table class="usa-table"><thead><tr><story /></tr></thead></table>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTableSortButton },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTableSortButton
    :header-id="headerId"
    :header-label="headerLabel"
    :current-sort-direction="currentSortDirection"
  >
    <template v-if="${!!args.default}" #default>${args.default}</template>
  </UsaTableSortButton>`,
})

export const DefaultTableSortButton = DefaultTemplate.bind({})
DefaultTableSortButton.args = {
  ...defaultProps,
  headerId: 'test-header-id',
  headerLabel: 'Test header',
}
DefaultTableSortButton.decorators = [
  () => ({
    template: `<th data-sortable="true">${DefaultTableSortButton.args.headerLabel}<story /></th>`,
  }),
]
DefaultTableSortButton.storyName = 'Default'

export const AscendingTableSortButton = DefaultTemplate.bind({})
AscendingTableSortButton.args = {
  ...defaultProps,
  headerId: 'test-header-id',
  headerLabel: 'Test header',
  currentSortDirection: 'ascending',
}
AscendingTableSortButton.decorators = [
  () => ({
    template: `<th data-sortable="true" aria-sort="ascending">${DefaultTableSortButton.args.headerLabel}<story /></th>`,
  }),
]
AscendingTableSortButton.storyName = 'Ascending'

export const DescendingTableSortButton = DefaultTemplate.bind({})
DescendingTableSortButton.args = {
  ...defaultProps,
  headerId: 'test-header-id',
  headerLabel: 'Test header',
  currentSortDirection: 'descending',
}
DescendingTableSortButton.decorators = [
  () => ({
    template: `<th data-sortable="true" aria-sort="descending">${DefaultTableSortButton.args.headerLabel}<story /></th>`,
  }),
]
DescendingTableSortButton.storyName = 'Descending'

export const CustomSlotTableSortButton = DefaultTemplate.bind({})
CustomSlotTableSortButton.args = {
  ...defaultProps,
  headerId: 'test-header-id',
  headerLabel: 'Test header',
  default: '<em>Custom icon here...</em>',
}
CustomSlotTableSortButton.storyName = 'Custom Slot'
