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
  render: args => ({
    components: { UsaTableSortButton },
    props: Object.keys(UsaTableSortButton.props),
    setup() {
      return { args }
    },
    template: `<UsaTableSortButton
      :header-id="args.headerId"
      :header-label="args.headerLabel"
      :current-sort-direction="args.currentSortDirection"
    >
      <template v-if="!!args.default" #default>${args.default}</template>
    </UsaTableSortButton>`,
  }),
  decorators: [
    () => ({
      template:
        '<table class="usa-table"><thead><tr><story /></tr></thead></table>',
    }),
  ],
}

export const DefaultTableSortButton = {
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableSortButton header-id="test-header-id" header-label="Test header"></UsaTableSortButton>`,
      },
    },
  },
}

export const AscendingTableSortButton = {
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    currentSortDirection: 'ascending',
  },
  name: 'Ascending',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="ascending"></UsaTableSortButton>`,
      },
    },
  },
}

export const DescendingTableSortButton = {
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    currentSortDirection: 'descending',
  },
  name: 'Descending',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableSortButton header-id="test-header-id" header-label="Test header" current-sort-direction="descending"></UsaTableSortButton>`,
      },
    },
  },
}

export const CustomSlotTableSortButton = {
  args: {
    ...defaultProps,
    headerId: 'test-header-id',
    headerLabel: 'Test header',
    default: '<em>Custom icon here...</em>',
  },
  name: 'Custom Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTableSortButton header-id="test-header-id" header-label="Test header"><em>Custom icon here...</em></UsaTableSortButton>`,
      },
    },
  },
}
