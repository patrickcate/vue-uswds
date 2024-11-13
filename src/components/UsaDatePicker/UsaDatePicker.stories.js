import { ref } from 'vue'
import UsaDatePicker from './UsaDatePicker.vue'

const defaultProps = {
  modelValue: UsaDatePicker.props.modelValue.default,
  minDate: UsaDatePicker.props.minDate.default,
  maxDate: UsaDatePicker.props.maxDate.default,
  rangeType: UsaDatePicker.props.rangeType.default,
  monthLabels: UsaDatePicker.props.monthLabels.default(),
  dayOfWeekLabels: UsaDatePicker.props.dayOfWeekLabels.default(),
  dayOfWeekAbbreviationLabels:
    UsaDatePicker.props.dayOfWeekAbbreviationLabels.default(),
  toggleButtonAriaLabel: UsaDatePicker.props.toggleButtonAriaLabel.default,
  previousYearButtonLabel: UsaDatePicker.props.previousYearButtonLabel.default,
  nextYearButtonLabel: UsaDatePicker.props.nextYearButtonLabel.default,
  previousMonthButtonLabel:
    UsaDatePicker.props.previousMonthButtonLabel.default,
  nextMonthButtonLabel: UsaDatePicker.props.nextMonthButtonLabel.default,
  monthSelectionButtonLabel:
    UsaDatePicker.props.monthSelectionButtonLabel.default,
  yearSelectionButtonLabel:
    UsaDatePicker.props.yearSelectionButtonLabel.default,
  previousYearsButtonLabel:
    UsaDatePicker.props.previousYearsButtonLabel.default,
  nextYearsButtonLabel: UsaDatePicker.props.nextYearsButtonLabel.default,
  label: UsaDatePicker.props.label.default,
  readonly: UsaDatePicker.props.readonly.default,
  disabled: UsaDatePicker.props.disabled.default,
  required: UsaDatePicker.props.required.default,
  error: UsaDatePicker.props.error.default,
  id: UsaDatePicker.props.id.default,
  customClasses: UsaDatePicker.props.customClasses.default(),
}

export default {
  component: UsaDatePicker,
  title: 'Components/UsaDatePicker',
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    minDate: {
      control: { type: 'text' },
    },
    maxDate: {
      control: { type: 'text' },
    },
    rangeType: {
      options: ['', 'start', 'end'],
      control: {
        type: 'select',
      },
    },
    monthLabels: {
      control: { type: 'object' },
    },
    dayOfWeekLabels: {
      control: { type: 'object' },
    },
    dayOfWeekAbbreviationLabels: {
      control: { type: 'object' },
    },
    toggleButtonAriaLabel: {
      control: { type: 'text' },
    },
    previousYearButtonLabel: {
      control: { type: 'text' },
    },
    nextYearButtonLabel: {
      control: { type: 'text' },
    },
    previousMonthButtonLabel: {
      control: { type: 'text' },
    },
    nextMonthButtonLabel: {
      control: { type: 'text' },
    },
    monthSelectionButtonLabel: {
      control: { type: 'text' },
    },
    yearSelectionButtonLabel: {
      control: { type: 'text' },
    },
    previousYearsButtonLabel: {
      control: { type: 'text' },
    },
    nextYearsButtonLabel: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    required: {
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
    status: {
      control: { type: 'text' },
    },
  },
  args: {
    modelValue: defaultProps.modelValue,
    minDate: defaultProps.minDate,
    maxDate: defaultProps.maxDate,
    rangeType: defaultProps.rangeType,
    monthLabels: defaultProps.monthLabels,
    toggleButtonAriaLabel: defaultProps.toggleButtonAriaLabel,
    dayOfWeekLabels: defaultProps.dayOfWeekLabels,
    dayOfWeekAbbreviationLabels: defaultProps.dayOfWeekAbbreviationLabels,
    previousYearButtonLabel: defaultProps.previousYearButtonLabel,
    nextYearButtonLabel: defaultProps.nextYearButtonLabel,
    previousMonthButtonLabel: defaultProps.previousMonthButtonLabel,
    nextMonthButtonLabel: defaultProps.nextMonthButtonLabel,
    monthSelectionButtonLabel: defaultProps.monthSelectionButtonLabel,
    yearSelectionButtonLabel: defaultProps.yearSelectionButtonLabel,
    previousYearsButtonLabel: defaultProps.previousYearsButtonLabel,
    nextYearsButtonLabel: defaultProps.nextYearsButtonLabel,
    label: defaultProps.label,
    required: defaultProps.required,
    disabled: defaultProps.disabled,
    readonly: defaultProps.readonly,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    hint: '',
    'error-message': '',
    status: '',
  },
  render: args => ({
    components: { UsaDatePicker },
    props: Object.keys(UsaDatePicker.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaDatePicker
    v-model="args.modelValue"
    :min-date="args.minDate"
    :max-date="args.maxDate"
    :range-type="args.rangeType"
    :month-labels="args.monthLabels"
    :day-of-week-labels="args.dayOfWeekLabels"
    :day-of-week-abbreviation-labels="args.dayOfWeekAbbreviationLabels"
    :toggle-button-aria-label="args.toggleButtonAriaLabel"
    :previous-year-button-label="args.previousYearButtonLabel"
    :next-year-button-label="args.nextYearButtonLabel"
    :previous-month-button-label="args.previousMonthButtonLabel"
    :next-month-button-label="args.nextMonthButtonLabel"
    :year-selection-button-label="args.yearSelectionButtonLabel"
    :month-selection-button-label="args.monthSelectionButtonLabel"
    :previous-years-button-label="args.previousYearsButtonLabel"
    :next-years-button-label="args.nextYearsButtonLabel"
    :label="args.label"
    :required="args.required"
    :disabled="args.disabled"
    :readonly="args.readonly"
    :error="args.error"
    :id="args.id"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
    <template v-if="!!args.hint" #hint>${args.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
    <template v-if="!!args.status" #status="{
      open,
      isPristine,
      selectorMode,
      selectedDate,
      highlightedDate,
      activeMonthLabel,
      activeYear,
      yearRangeStart,
      yearRangeStop
    }">{{ args.status }}</template>
  </UsaDatePicker>`,
  }),
}

export const DefaultDatePicker = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker />`,
      },
    },
  },
}

export const SelectedDateDatePicker = {
  args: {
    ...defaultProps,
    modelValue: '2001-04-09',
  },
  name: 'Selected Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker v-model="ref('2001-04-09')" />`,
      },
    },
  },
}

export const MinDateDatePicker = {
  args: {
    ...defaultProps,
    minDate: '2020-01-15',
  },
  name: 'Min Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker min-date="2020-01-15" />`,
      },
    },
  },
}

export const MaxDateDatePicker = {
  args: {
    ...defaultProps,
    maxDate: '2023-12-15',
  },
  name: 'Max Date',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker max-date="2023-12-15" />`,
      },
    },
  },
}

export const RangeTypeDateDatePicker = {
  args: {
    ...defaultProps,
    rangeType: 'start',
  },
  name: 'Range Type',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker range-type="start" />`,
      },
    },
  },
}

export const CustomLabelsDateDatePicker = {
  args: {
    ...defaultProps,
    monthLabels: [
      'Month 1',
      'Month 2',
      'Month 3',
      'Month 4',
      'Month 5',
      'Month 6',
      'Month 7',
      'Month 8',
      'Month 9',
      'Month 10',
      'Month 11',
      'Month 12',
    ],
    dayOfWeekLabels: [
      'Day A',
      'Day B',
      'Day C',
      'Day D',
      'Day E',
      'Day F',
      'Day G',
    ],
    dayOfWeekAbbreviationLabels: ['1', '2', '3', '4', '5', '6', '7'],
    toggleButtonAriaLabel: 'Test toggle button',
    previousYearButtonLabel: 'Test previous year button label',
    nextYearButtonLabel: 'Test next year button label',
    previousMonthButtonLabel: 'Test previous month button label',
    nextMonthButtonLabel: 'Test next month button label',
    yearSelectionButtonLabel: 'Test year %s is selected',
    monthSelectionButtonLabel: 'Test month %s is selected',
    previousYearsButtonLabel: 'Test navigate back 12 years',
    nextYearsButtonLabel: 'Test navigate forward 12 years',
  },
  name: 'Custom Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker :month-labels="[
        'Month 1',
        'Month 2',
        'Month 3',
        'Month 4',
        'Month 5',
        'Month 6',
        'Month 7',
        'Month 8',
        'Month 9',
        'Month 10',
        'Month 11',
        'Month 12',
      ]" :day-of-week-labels="[
        'Day A',
        'Day B',
        'Day C',
        'Day D',
        'Day E',
        'Day F',
        'Day G',
      ]" :day-of-week-abbreviation-labels="[1, 2, 3, 4, 5, 6, 7]" toggle-button-aria-label="Test toggle button"
        previous-year-button-label="Test previous year button label" next-year-button-label="Test next year button label"
        previous-month-button-label="Test previous month button label" next-month-button-label="Test next month button label"
        year-selection-button-label="Test year %s is selected" month-selection-button-label="Test month %s is selected"
        previous-years-button-label="Test navigate back 12 years" next-years-button-label="Test navigate forward 12 years" />`,
      },
    },
  },
}

export const HintDatePicker = {
  args: {
    ...defaultProps,
    label: 'Hint date picker',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Hint date picker" hint="Choose wisely" />`,
      },
    },
  },
}

export const ErrorDatePicker = {
  args: {
    ...defaultProps,
    label: 'Error date picker',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Error date picker" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageDatePicker = {
  args: {
    ...defaultProps,
    label: 'Error message date picker',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Error message date picker" :error="true" error-message="Error message here" />`,
      },
    },
  },
}

export const RequiredDatePicker = {
  args: {
    ...defaultProps,
    label: 'Required date picker',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Required date picker" :required="true" />`,
      },
    },
  },
}

export const DisabledDatePicker = {
  args: {
    ...defaultProps,
    label: 'Disabled date picker',
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Disabled date picker" :disabled="true" />`,
      },
    },
  },
}

export const ReadOnlyDatePicker = {
  args: {
    ...defaultProps,
    label: 'Readonly date picker',
    readonly: true,
  },
  name: 'Readonly',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Readonly date picker" :readonly="true" />`,
      },
    },
  },
}

export const LabelSlotDatePicker = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker><template #label><em>Label slot content</em></template></UsaDatePicker>`,
      },
    },
  },
}

export const ScreenReaderStatusSlotDatePicker = {
  args: {
    ...defaultProps,
    label: 'Screen reader status slot',
    status: `Is open: {{ open }}<br>
      Is pristine: {{ isPristine }}<br>
      Selector Mode: {{ selectorMode }}<br>
      Selected Date: {{ selectedDate }}<br>
      Highlighted Date: {{ highlightedDate }}<br>
      Active Month Label: {{ activeMonthLabel }}<br>
      Active Year: {{ activeYear }}<br>
      Year Range Start: {{ yearRangeStart }}<br>
      Year Range Stop: {{ yearRangeStop }}<br>
    `,
  },
  name: 'Screen Reader Status Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Screen reader status slot"><template #status="{ open, isPristine, selectorMode, selectedDate, highlightedDate, activeMonthLabel, activeYear, yearRangeStart, yearRangeStop }">Is open: {{ open }}<br>
      Is pristine: {{ isPristine }}<br>
      Selector Mode: {{ selectorMode }}<br>
      Selected Date: {{ selectedDate }}<br>
      Highlighted Date: {{ highlightedDate }}<br>
      Active Month Label: {{ activeMonthLabel }}<br>
      Active Year: {{ activeYear }}<br>
      Year Range Start: {{ yearRangeStart }}<br>
      Year Range Stop: {{ yearRangeStop }}<br></template></UsaDatePicker>`,
      },
    },
  },
}

export const CustomIdDatePicker = {
  args: {
    ...defaultProps,
    label: 'Custom ID date picker',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Custom ID date picker" id="custom-id" />`,
      },
    },
  },
}

export const CustomClassesDatePicker = {
  args: {
    ...defaultProps,
    label: 'Custom classes date picker',
    customClasses: {
      formGroup: ['test-form-group-class'],
      component: ['test-component-class'],
      label: ['test-label-class'],
      input: ['test-input-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaDatePicker label="Custom classes date picker" :custom-classes="{ formGroup: ['test-form-group-class'], component: ['test-component-class'], label: ['test-label-class'], input: ['test-input-class'] }" />`,
      },
    },
  },
}
