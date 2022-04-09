import UsaTable from './UsaTable.vue'

// TODO: Add examples of overriding individual header and body rows.

const testHeaders = [
  {
    id: 'alphabetical',
    label: 'Alphabetical',
    sortable: true,
    headerRow: true,
  },
  {
    id: 'month',
    label: 'Month',
    sortable: true,
  },
  {
    id: 'percent',
    label: 'Percent',
    sortable: true,
  },
  {
    id: 'count',
    label: 'Count',
    sortable: true,
  },
]

const testRows = [
  {
    alphabetical: 'Tango',
    month: {
      sortValue: 3,
      displayValue: 'March',
    },
    percent: {
      sortValue: 0.206,
      displayValue: '20.6%',
    },
    count: {
      sortValue: 23612,
      displayValue: '23,612',
    },
  },
  {
    alphabetical: 'Foxtrot',
    month: {
      sortValue: 4,
      displayValue: 'April',
    },
    percent: {
      sortValue: 0.026,
      displayValue: '2.6%',
    },
    count: -32,
  },
  {
    alphabetical: 'Hilo',
    month: {
      sortValue: 1,
      displayValue: 'January',
    },
    percent: {
      sortValue: -3.006,
      displayValue: '-3.6%',
    },
    count: {
      sortValue: 0.002,
      displayValue: '0.002',
    },
  },
  {
    alphabetical: 'Bravo',
    month: {
      sortValue: 12,
      displayValue: 'December',
    },
    percent: {
      sortValue: -0.036,
      displayValue: '-300.6%',
    },
    count: 0,
  },
]

const defaultProps = {
  caption: UsaTable.props.caption.default,
  borderless: UsaTable.props.borderless.default,
  striped: UsaTable.props.striped.default,
  compact: UsaTable.props.compact.default,
  scrollable: UsaTable.props.scrollable.default,
  stacked: UsaTable.props.stacked.default,
  stackedHeader: UsaTable.props.stackedHeader.default,
  headers: UsaTable.props.headers.default(),
  rows: UsaTable.props.rows.default(),
  defaultSortDirection: UsaTable.props.defaultSortDirection.default,
  defaultSortHeader: UsaTable.props.defaultSortHeader.default,
}

export default {
  component: UsaTable,
  title: 'Components/UsaTable',
  argTypes: {
    caption: {
      control: { type: 'text' },
    },
    borderless: {
      control: { type: 'boolean' },
    },
    striped: {
      control: { type: 'boolean' },
    },
    compact: {
      control: { type: 'boolean' },
    },
    scrollable: {
      control: { type: 'boolean' },
    },
    stacked: {
      control: { type: 'boolean' },
    },
    stackedHeader: {
      control: { type: 'boolean' },
    },
    headers: {
      control: { type: 'object' },
    },
    rows: {
      control: { type: 'object' },
    },
    defaultSortDirection: {
      control: { type: 'text' },
    },
    defaultSortHeader: {
      control: { type: 'text' },
    },
    captionSlot: {
      control: { type: 'text' },
    },
    headersSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    tableAnnouncementSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    caption: defaultProps.caption,
    borderless: defaultProps.borderless,
    striped: defaultProps.striped,
    compact: defaultProps.compact,
    scrollable: defaultProps.scrollable,
    stacked: defaultProps.stacked,
    stackedHeader: defaultProps.stackedHeader,
    headers: defaultProps.headers,
    rows: defaultProps.rows,
    defaultSortDirection: defaultProps.defaultSortDirection,
    defaultSortHeader: defaultProps.defaultSortHeader,
    captionSlot: '',
    headersSlot: '',
    defaultSlot: '',
    tableAnnouncementSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTable },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTable
    :caption="caption"
    :borderless="borderless"
    :striped="striped"
    :compact="compact"
    :scrollable="scrollable"
    :stacked="stacked"
    :stackedHeader="stackedHeader"
    :headers="headers"
    :rows="rows"
    :defaultSortDirection="defaultSortDirection"
    :defaultSortHeader="defaultSortHeader"
  >
    <template v-if="${!!args.captionSlot}" #caption>${
    args.captionSlot
  }</template>
    <template v-if="${!!args.headersSlot}" #headers="{ headers }">${
    args.headersSlot
  }</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.tableAnnouncementSlot}" #table-announcement="{ currentSortedHeader, currentSortDirection, currentSortedHeaderLabel, tableCaption }">${
    args.tableAnnouncementSlot
  }</template>
  </UsaTable>`,
})

export const DefaultTable = DefaultTemplate.bind({})
DefaultTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
}
DefaultTable.storyName = 'Default'

export const CaptionTable = DefaultTemplate.bind({})
CaptionTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  caption: 'A table caption',
}
CaptionTable.storyName = 'Caption'

export const BorderlessTable = DefaultTemplate.bind({})
BorderlessTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  borderless: true,
}
BorderlessTable.storyName = 'Borderless'

export const StripedTable = DefaultTemplate.bind({})
StripedTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return { ...header }
  }),
  rows: testRows,
  striped: true,
}
StripedTable.storyName = 'Striped'

export const CompactTable = DefaultTemplate.bind({})
CompactTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  compact: true,
}
CompactTable.storyName = 'Compact'

export const ScrollableTable = DefaultTemplate.bind({})
ScrollableTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  scrollable: true,
  caption: 'Resize to small screen...',
}
ScrollableTable.storyName = 'Scrollable'

export const StackedTable = DefaultTemplate.bind({})
StackedTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  stacked: true,
  caption: 'Resize to small screen...',
}
StackedTable.storyName = 'Stacked'

export const StackedHeaderTable = DefaultTemplate.bind({})
StackedHeaderTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  stackedHeader: true,
  caption: 'Resize to small screen...',
}
StackedHeaderTable.storyName = 'Stacked Header'

export const SortableTable = DefaultTemplate.bind({})
SortableTable.args = {
  ...defaultProps,
  headers: testHeaders,
  rows: testRows,
}
SortableTable.storyName = 'Sortable'

export const DefaultSortTable = DefaultTemplate.bind({})
DefaultSortTable.args = {
  ...defaultProps,
  headers: testHeaders,
  rows: testRows,
  defaultSortHeader: 'percent',
  defaultSortDirection: 'descending',
}
DefaultSortTable.storyName = 'Sortable w/ Defaults'

export const CaptionSlotTable = DefaultTemplate.bind({})
CaptionSlotTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  captionSlot: '<em>A table caption slot</em>',
}
CaptionSlotTable.storyName = 'Caption Slot'

export const HeadersSlotTable = DefaultTemplate.bind({})
HeadersSlotTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  headersSlot:
    '<th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th>',
}
HeadersSlotTable.storyName = 'Headers Slot'

export const DefaultRowsSlotTable = DefaultTemplate.bind({})
DefaultRowsSlotTable.args = {
  ...defaultProps,
  headers: testHeaders.map(({ ...header }) => {
    header.sortable = false
    return header
  }),
  rows: testRows,
  defaultSlot: '<td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td>',
}
DefaultRowsSlotTable.storyName = 'Default (Rows) Slot'

export const TableAnnouncementSlotTable = DefaultTemplate.bind({})
TableAnnouncementSlotTable.args = {
  ...defaultProps,
  headers: testHeaders,
  rows: testRows,
  caption: 'Inspect aria-live region...',
  tableAnnouncementSlot:
    'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}',
}
TableAnnouncementSlotTable.storyName = 'Table Announcement Slot'
