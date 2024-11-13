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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    label: defaultProps.label,
    sortable: defaultProps.sortable,
    currentSortedHeader: defaultProps.currentSortedHeader,
    currentSortDirection: defaultProps.currentSortDirection,
    default: '',
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
  render: args => ({
    components: { UsaTableHeaderCell },
    props: Object.keys(UsaTableHeaderCell.props),
    setup() {
      return { args }
    },
    template: `<UsaTableHeaderCell
      :id="args.id"
      :label="args.label"
      :sortable="args.sortable"
      :current-sorted-header="args.currentSortedHeader"
      :current-sort-direction="args.currentSortDirection"
    >
      <template v-if="!!args.default" #default>${args.default}</template>
    </UsaTableHeaderCell>`,
  }),
}

export const DefaultTableHeaderCell = {
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableHeaderCell id="test-header-id" label="Test header" />`,
      },
    },
  },
}

export const SortableTableHeaderCell = {
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
  },
  name: 'Sortable',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" />`,
      },
    },
  },
}

export const AscendingSortTableHeaderCell = {
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    currentSortedHeader: 'test-header-id',
    currentSortDirection: 'ascending',
  },
  name: 'Ascending',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="ascending" />`,
      },
    },
  },
}

export const DescendingSortTableHeaderCell = {
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    currentSortedHeader: 'test-header-id',
    currentSortDirection: 'descending',
  },
  name: 'Descending',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true" current-sorted-header="test-header-id" current-sort-direction="descending" />`,
      },
    },
  },
}

export const CustomSlotTableHeaderCell = {
  args: {
    ...defaultProps,
    id: 'test-header-id',
    label: 'Test header',
    sortable: true,
    default: '<em>Custom header label text here...</em>',
  },
  name: 'Custom Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableHeaderCell id="test-header-id" label="Test header" :sortable="true"><em>Custom header label text here...</em></UsaTableHeaderCell>`,
      },
    },
  },
}
