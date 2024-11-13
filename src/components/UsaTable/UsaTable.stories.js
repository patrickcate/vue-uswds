import UsaTable from './UsaTable.vue'
import UsaTableHeaderCell from '../UsaTableHeaderCell/UsaTableHeaderCell.vue'
import UsaTableSortButton from '../UsaTableSortButton/UsaTableSortButton.vue'

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
  subcomponents: { UsaTableHeaderCell, UsaTableSortButton },
  title: 'Components/UsaTable',
  argTypes: {
    caption: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
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
      table: {
        category: 'props',
      },
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
    'slot:caption': {
      control: { type: 'text' },
      name: 'caption',
      table: {
        category: 'slots',
      },
    },
    'slot:headers': {
      control: { type: 'text' },
      name: 'headers',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
    'table-announcement': {
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
    'slot:caption': '',
    'slot:headers': '',
    default: '',
    'table-announcement': '',
  },
  render: args => ({
    components: { UsaTable },
    props: Object.keys(UsaTable.props),
    setup() {
      return { args }
    },
    template: `<UsaTable
      :caption="args.caption"
      :borderless="args.borderless"
      :striped="args.striped"
      :compact="args.compact"
      :scrollable="args.scrollable"
      :stacked="args.stacked"
      :stackedHeader="args.stackedHeader"
      :headers="args.headers"
      :rows="args.rows"
      :defaultSortDirection="args.defaultSortDirection"
      :defaultSortHeader="args.defaultSortHeader"
    >
      <template v-if="!!args['slot:caption']" #caption>${args['slot:caption']}</template>
      <template v-if="!!args['slot:headers']" #headers="{ headers }">${args['slot:headers']}</template>
      <template v-if="!!args.default" #default>${args.default}</template>
      <template v-if="!!args['table-announcement']" #table-announcement="{ currentSortedHeader, currentSortDirection, currentSortedHeaderLabel, tableCaption }">${args['table-announcement']}</template>
    </UsaTable>`,
  }),
}

export const DefaultTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}"></UsaTable>`,
      },
    },
  },
}

export const CaptionTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    caption: 'A table caption',
  },
  name: 'Caption',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" caption="A table caption"></UsaTable>`,
      },
    },
  },
}

export const BorderlessTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    borderless: true,
  },
  name: 'Borderless',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :borderless="true"></UsaTable>`,
      },
    },
  },
}

export const StripedTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return { ...header }
    }),
    rows: testRows,
    striped: true,
  },
  name: 'Striped',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :striped="true"></UsaTable>`,
      },
    },
  },
}

export const CompactTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    compact: true,
  },
  name: 'Compact',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :compact="true"></UsaTable>`,
      },
    },
  },
}

export const ScrollableTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    scrollable: true,
    caption: 'Resize to small screen...',
  },
  name: 'Scrollable',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :scrollable="true" caption="Resize to small screen..."></UsaTable>`,
      },
    },
  },
}

export const StackedTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    stacked: true,
    caption: 'Resize to small screen...',
  },
  name: 'Stacked',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :stacked="true" caption="Resize to small screen..."></UsaTable>`,
      },
    },
  },
}

export const StackedHeaderTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    stackedHeader: true,
    caption: 'Resize to small screen...',
  },
  name: 'Stacked Header',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}" :stacked-header="true" caption="Resize to small screen..."></UsaTable>`,
      },
    },
  },
}

export const SortableTable = {
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows,
  },
  name: 'Sortable',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(testHeaders, null, '\t')}" \n:rows="${JSON.stringify(testRows, null, '\t')}"></UsaTable>`,
      },
    },
  },
}

export const DefaultSortTable = {
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows,
    defaultSortHeader: 'percent',
    defaultSortDirection: 'descending',
  },
  name: 'Sortable w/ Defaults',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(testHeaders, null, '\t')}" \n:rows="${JSON.stringify(testRows, null, '\t')}" default-sort-header="percent" default-sort-direction="descending"></UsaTable>`,
      },
    },
  },
}

export const CaptionSlotTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    'slot:caption': '<em>A table caption slot</em>',
  },
  name: 'Caption Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}" \n:rows="${JSON.stringify(testRows, null, '\t')}"><template #caption><em>A table caption slot</em></template></UsaTable>`,
      },
    },
  },
}

export const HeadersSlotTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    'slot:headers':
      '<th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th>',
  },
  name: 'Headers Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :rows="${JSON.stringify(testRows, null, '\t')}"><template #headers><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></template></UsaTable>`,
      },
    },
  },
}

export const DefaultRowsSlotTable = {
  args: {
    ...defaultProps,
    headers: testHeaders.map(({ ...header }) => {
      header.sortable = false
      return header
    }),
    rows: testRows,
    default: '<td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td>',
  },
  name: 'Default (Rows) Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(
          testHeaders.map(({ ...header }) => {
            header.sortable = false
            return header
          }),
          null,
          '\t',
        )}"><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td><td>Cell 4</td></tr></UsaTable>`,
      },
    },
  },
}

export const TableAnnouncementSlotTable = {
  args: {
    ...defaultProps,
    headers: testHeaders,
    rows: testRows,
    caption: 'Inspect aria-live region...',
    'table-announcement':
      'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}',
  },
  name: 'Table Announcement Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTable :headers="${JSON.stringify(testHeaders, null, '\t')}" \n:rows="${JSON.stringify(testRows, null, '\t')}" caption="Inspect aria-live region..."><template #table-announcement="{currentSortedHeaderLabel, currentSortedHeader, currentSortDirection, tableCaption}">'Sorted By: {{ currentSortedHeaderLabel }} ({{ currentSortedHeader }}), Direction: {{ currentSortDirection }}, Table Caption: {{ tableCaption }}'></template></UsaTable>`,
      },
    },
  },
}
