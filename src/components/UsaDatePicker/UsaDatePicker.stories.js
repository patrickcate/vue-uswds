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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaDatePicker },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaDatePicker
    v-model="modelValue"
    :min-date="minDate"
    :max-date="maxDate"
    :range-type="rangeType"
    :month-labels="monthLabels"
    :day-of-week-labels="dayOfWeekLabels"
    :day-of-week-abbreviation-labels="dayOfWeekAbbreviationLabels"
    :toggle-button-aria-label="toggleButtonAriaLabel"
    :previous-year-button-label="previousYearButtonLabel"
    :next-year-button-label="nextYearButtonLabel"
    :previous-month-button-label="previousMonthButtonLabel"
    :next-month-button-label="nextMonthButtonLabel"
    :year-selection-button-label="yearSelectionButtonLabel"
    :month-selection-button-label="monthSelectionButtonLabel"
    :previous-years-button-label="previousYearsButtonLabel"
    :next-years-button-label="nextYearsButtonLabel"
    :label="label"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :id="id"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args['slot:label']}" #label>${
    args['slot:label']
  }</template>
    <template v-if="${!!args.hint}" #hint>${args.hint}</template>
    <template v-if="${!!args['error-message']}" #error-message>${
    args['error-message']
  }</template>
    <template v-if="${!!args.status}" #status="{
      open,
      isPristine,
      selectorMode,
      selectedDate,
      highlightedDate,
      activeMonthLabel,
      activeYear,
      yearRangeStart,
      yearRangeStop
    }">${args.status}</template>
  </UsaDatePicker>`,
})

export const DefaultDatePicker = DefaultTemplate.bind({})
DefaultDatePicker.args = {
  ...defaultProps,
}
DefaultDatePicker.storyName = 'Default'

export const SelectedDateDatePicker = DefaultTemplate.bind({})
SelectedDateDatePicker.args = {
  ...defaultProps,
  modelValue: '2001-04-09',
}
SelectedDateDatePicker.storyName = 'Selected Date'

export const MinDateDatePicker = DefaultTemplate.bind({})
MinDateDatePicker.args = {
  ...defaultProps,
  minDate: '2020-01-15',
}
MinDateDatePicker.storyName = 'Min Date'

export const MaxDateDatePicker = DefaultTemplate.bind({})
MaxDateDatePicker.args = {
  ...defaultProps,
  maxDate: '2023-12-15',
}
MaxDateDatePicker.storyName = 'Max Date'

export const RangeTypeDateDatePicker = DefaultTemplate.bind({})
RangeTypeDateDatePicker.args = {
  ...defaultProps,
  rangeType: 'start',
}
RangeTypeDateDatePicker.storyName = 'Range Type'

export const CustomLabelsDateDatePicker = DefaultTemplate.bind({})
CustomLabelsDateDatePicker.args = {
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
}
CustomLabelsDateDatePicker.storyName = 'Custom Labels'

export const HintDatePicker = DefaultTemplate.bind({})
HintDatePicker.args = {
  ...defaultProps,
  label: 'Hint date picker',
  hint: 'Choose wisely',
}
HintDatePicker.storyName = 'Hint'

export const ErrorDatePicker = DefaultTemplate.bind({})
ErrorDatePicker.args = {
  ...defaultProps,
  label: 'Error date picker',
  error: true,
}
ErrorDatePicker.storyName = 'Error'

export const ErrorMessageDatePicker = DefaultTemplate.bind({})
ErrorMessageDatePicker.args = {
  ...defaultProps,
  label: 'Error message date picker',
  error: true,
  'error-message': 'Error message here',
}
ErrorMessageDatePicker.storyName = 'Error Message'

export const RequiredDatePicker = DefaultTemplate.bind({})
RequiredDatePicker.args = {
  ...defaultProps,
  label: 'Required date picker',
  required: true,
}
RequiredDatePicker.storyName = 'Required'

export const DisabledDatePicker = DefaultTemplate.bind({})
DisabledDatePicker.args = {
  ...defaultProps,
  label: 'Disabled date picker',
  disabled: true,
}
DisabledDatePicker.storyName = 'Disabled'

export const ReadOnlyDatePicker = DefaultTemplate.bind({})
ReadOnlyDatePicker.args = {
  ...defaultProps,
  label: 'Readonly date picker',
  readonly: true,
}
ReadOnlyDatePicker.storyName = 'Readonly'

export const LabelSlotDatePicker = DefaultTemplate.bind({})
LabelSlotDatePicker.args = {
  ...defaultProps,
  'slot:label': `<em>Label slot content</em>`,
}
LabelSlotDatePicker.storyName = 'Label Slot'

export const ScreenReaderStatusSlotDatePicker = DefaultTemplate.bind({})
ScreenReaderStatusSlotDatePicker.args = {
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
}
ScreenReaderStatusSlotDatePicker.storyName = 'Screen Reader Status Slot'

export const CustomIdDatePicker = DefaultTemplate.bind({})
CustomIdDatePicker.args = {
  ...defaultProps,
  label: 'Custom ID date picker',
  id: 'custom-id',
}
CustomIdDatePicker.storyName = 'Custom ID'

export const CustomClassesDatePicker = DefaultTemplate.bind({})
CustomClassesDatePicker.args = {
  ...defaultProps,
  label: 'Custom classes date picker',
  customClasses: {
    formGroup: ['test-form-group-class'],
    component: ['test-component-class'],
    label: ['test-label-class'],
    input: ['test-input-class'],
  },
}
CustomClassesDatePicker.storyName = 'Custom CSS Classes'
