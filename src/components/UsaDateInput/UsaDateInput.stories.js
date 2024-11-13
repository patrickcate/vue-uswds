import UsaDateInput from './UsaDateInput.vue'

const defaultProps = {
  label: UsaDateInput.props.label.default,
  day: UsaDateInput.props.day.default,
  month: UsaDateInput.props.month.default,
  year: UsaDateInput.props.year.default,
  dateOrder: UsaDateInput.props.dateOrder.default(),
  dateLabels: UsaDateInput.props.dateLabels.default(),
  monthAsSelect: UsaDateInput.props.monthAsSelect.default,
  monthEmptyLabel: UsaDateInput.props.monthEmptyLabel.default,
  monthOptions: UsaDateInput.props.monthOptions.default(),
  name: UsaDateInput.props.name.default,
  required: UsaDateInput.props.required.default,
  error: UsaDateInput.props.error.default,
  id: UsaDateInput.props.id.default,
}

export default {
  component: UsaDateInput,
  title: 'Components/UsaDateInput',
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    day: {
      control: { type: 'text' },
    },
    month: {
      control: { type: 'text' },
    },
    year: {
      control: { type: 'text' },
    },
    dateOrder: {
      control: { type: 'object' },
    },
    dateLabels: {
      control: { type: 'object' },
    },
    monthAsSelect: {
      control: { type: 'boolean' },
    },
    monthEmptyLabel: {
      control: { type: 'text' },
    },
    monthOptions: {
      control: { type: 'object' },
    },
    name: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    'slot:label': {
      control: { type: 'text' },
      name: 'label',
      table: {
        category: 'slots',
      },
    },
    hint: {
      control: { type: 'text' },
    },
    'error-message': {
      control: { type: 'text' },
    },
  },
  args: {
    label: defaultProps.label,
    day: defaultProps.day,
    month: defaultProps.month,
    year: defaultProps.year,
    dateOrder: defaultProps.dateOrder,
    dateLabels: defaultProps.dateLabels,
    monthAsSelect: defaultProps.monthAsSelect,
    monthEmptyLabel: defaultProps.monthEmptyLabel,
    monthOptions: defaultProps.monthOptions,
    name: defaultProps.name,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    'slot:label': '',
    hint: '',
    'error-message': '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
  render: args => ({
    components: { UsaDateInput },
    props: Object.keys(UsaDateInput.props),
    setup() {
      return { args }
    },
    template: `<UsaDateInput
    :label="args.label"
    :day="args.day"
    :month="args.month"
    :year="args.year"
    :dateOrder="args.dateOrder"
    :dateLabels="args.dateLabels"
    :monthAsSelect="args.monthAsSelect"
    :monthEmptyLabel="args.monthEmptyLabel"
    :monthOptions="args.monthOptions"
    :name="args.name"
    :required="args.required"
    :error="args.error"
    :id="args.id"
  >
    <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
    <template v-if="!!args.hint" #hint>${args.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
  </UsaDateInput>`,
  }),
}

export const DefaultDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" />`,
      },
    },
  },
}

export const DefaultValueDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    day: '01',
    month: '12',
    year: '2021',
  },
  name: 'Default Date Values',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" day="01" month="12" year="2021" />`,
      },
    },
  },
}

export const HintDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    hint: 'DD-MM-YYYY',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" hint="DD-MM-YYYY" />`,
      },
    },
  },
}

export const ErrorMessageDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error w/ Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" :error="true" error-message="Error message here" />`,
      },
    },
  },
}

export const RequiredDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" :required="true" />`,
      },
    },
  },
}

export const NameAttrDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    name: 'expiration',
  },
  name: 'Custom Name Attribute',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" name="expiration" />`,
      },
    },
  },
}

export const CustomOrderDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateOrder: ['year', 'month', 'day'],
  },
  name: 'Custom Input Order',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" :date-order="['year', 'month', 'day']" />`,
      },
    },
  },
}

export const ExcludeInputsDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateOrder: ['year', 'month'],
  },
  name: 'Exclude Inputs',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" :date-order="['year', 'month']" />`,
      },
    },
  },
}

export const CustomInputLabelsDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    dateLabels: { month: 'MM', day: 'DD', year: 'YYYY' },
  },
  name: 'Custom Input Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" :date-labels="{ month: 'MM', day: 'DD', year: 'YYYY' }" />`,
      },
    },
  },
}

export const MonthAsSelectDateInput = {
  args: {
    ...defaultProps,
    label: 'Month as select form element',
    monthAsSelect: true,
  },
  name: 'Month as Select form element',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Month as select form element" :month-as-select="true" />`,
      },
    },
  },
}

export const CustomMonthSelectEmptyLabelDateInput = {
  args: {
    ...defaultProps,
    label: 'Custom month empty label',
    monthAsSelect: true,
    monthEmptyLabel: 'Choose a month',
  },
  name: 'Custom Month Empty Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Custom month empty label" :month-as-select="true" month-empty-label="Choose a month" />`,
      },
    },
  },
}

export const CustomMonthOptionsDateInput = {
  args: {
    ...defaultProps,
    label: 'Custom month options',
    monthAsSelect: true,
    monthOptions: [
      {
        value: 'January',
        text: 'Jan - 1',
      },
      {
        value: 'February',
        text: 'Feb - 2',
      },
      {
        value: 'March',
        text: 'Mar - 3',
      },
      {
        value: 'April',
        text: 'Apr - 4',
      },
      {
        value: 'May',
        text: 'May - 5',
      },
      {
        value: 'June',
        text: 'Jun - 6',
      },
      {
        value: 'July',
        text: 'Jul - 7',
      },
      {
        value: 'August',
        text: 'Aug - 8',
      },
      {
        value: 'September',
        text: 'Sep - 9',
      },
      {
        value: 'October',
        text: 'Oct - 10',
      },
      {
        value: 'November',
        text: 'Nov - 11',
      },
      {
        value: 'December',
        text: 'Dec - 12',
      },
    ],
  },
  name: 'Custom Month Options',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Custom month options" :month-as-select="true" :month-options="[
          { value: 'January', text: 'Jan - 1' },
          { value: 'February', text: 'Feb - 2' },
          { value: 'March', text: 'Mar - 3' },
          { value: 'April', text: 'Apr - 4' },
          { value: 'May', text: 'May - 5' },
          { value: 'June', text: 'Jun - 6' },
          { value: 'July', text: 'Jul - 7' },
          { value: 'August', text: 'Aug - 8' },
          { value: 'September', text: 'Sep - 9' },
          { value: 'October', text: 'Oct - 10' },
          { value: 'November', text: 'Nov - 11' },
          { value: 'December', text: 'Dec - 12' },
        ]" />`,
      },
    },
  },
}

export const LabelSlotDateInput = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput><template #label><em>Label slot content</em></template></UsaDateInput>`,
      },
    },
  },
}

export const CustomIdDateInput = {
  args: {
    ...defaultProps,
    label: 'Date input label',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaDateInput label="Date input label" id="custom-id" />`,
      },
    },
  },
}
