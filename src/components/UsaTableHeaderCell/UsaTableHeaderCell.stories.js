import UsaTableHeaderCell from './UsaTableHeaderCell.vue'

const defaultProps = {
  id: UsaTableHeaderCell.props.id.default,
  label: UsaTableHeaderCell.props.label.default,
  sortable: UsaTableHeaderCell.props.sortable.default,
  currentSortedHeader: UsaTableHeaderCell.props.currentSortedHeader.default,
  currentSortDirection: UsaTableHeaderCell.props.currentSortDirection.default,
}

export default {
  component: UsaTableHeaderCell,
  title: 'Components/UsaTableHeaderCell',
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    sortable: {
      control: { type: 'boolean' },
    },
    currentSortedHeader: {
      control: { type: 'text' },
    },
    currentSortDirection: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    label: defaultProps.label,
    sortable: defaultProps.sortable,
    currentSortedHeader: defaultProps.currentSortedHeader,
    currentSortDirection: defaultProps.currentSortDirection,
    defaultSlot: '',
  },
  decorators: [
    () => ({
      template:
        '<table class="usa-table"><thead><tr><story /></tr></thead></table>',
      provide: {
        updateCurrentSortedHeader: () => {},
        toggleSortDirection: () => {},
      },
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTableHeaderCell },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTableHeaderCell
    :id="id"
    :label="label"
    :sortable="sortable"
    :current-sorted-header="currentSortedHeader"
    :current-sort-direction="currentSortDirection"
  >
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
  </UsaTableHeaderCell>`,
})

export const DefaultTableHeaderCell = DefaultTemplate.bind({})
DefaultTableHeaderCell.args = {
  ...defaultProps,
  id: 'test-header-id',
  label: 'Test header',
}
DefaultTableHeaderCell.storyName = 'Default'

export const SortableTableHeaderCell = DefaultTemplate.bind({})
SortableTableHeaderCell.args = {
  ...defaultProps,
  id: 'test-header-id',
  label: 'Test header',
  sortable: true,
}
SortableTableHeaderCell.storyName = 'Sortable'

export const AscendingSortTableHeaderCell = DefaultTemplate.bind({})
AscendingSortTableHeaderCell.args = {
  ...defaultProps,
  id: 'test-header-id',
  label: 'Test header',
  sortable: true,
  currentSortedHeader: 'test-header-id',
  currentSortDirection: 'ascending',
}
AscendingSortTableHeaderCell.storyName = 'Ascending'

export const DescendingSortTableHeaderCell = DefaultTemplate.bind({})
DescendingSortTableHeaderCell.args = {
  ...defaultProps,
  id: 'test-header-id',
  label: 'Test header',
  sortable: true,
  currentSortedHeader: 'test-header-id',
  currentSortDirection: 'descending',
}
DescendingSortTableHeaderCell.storyName = 'Descending'

export const CustomSlotTableHeaderCell = DefaultTemplate.bind({})
CustomSlotTableHeaderCell.args = {
  ...defaultProps,
  id: 'test-header-id',
  label: 'Test header',
  sortable: true,
  defaultSlot: '<em>Custom header label text here...</em>',
}
CustomSlotTableHeaderCell.storyName = 'Custom Slot'
