import { ref } from 'vue'
import UsaTimePicker from './UsaTimePicker.vue'

const defaultProps = {
  minTime: UsaTimePicker.props.minTime.default,
  maxTime: UsaTimePicker.props.maxTime.default,
  step: UsaTimePicker.props.step.default,
  modelValue: UsaTimePicker.props.modelValue.default,
  label: UsaTimePicker.props.label.default,
  required: UsaTimePicker.props.required.default,
  disabled: UsaTimePicker.props.disabled.default,
  readonly: UsaTimePicker.props.readonly.default,
  error: UsaTimePicker.props.error.default,
  id: UsaTimePicker.props.id.default,
  clearButtonAriaLabel: UsaTimePicker.props.clearButtonAriaLabel.default,
  toggleButtonAriaLabel: UsaTimePicker.props.toggleButtonAriaLabel.default,
  customClasses: UsaTimePicker.props.customClasses.default(),
}

export default {
  component: UsaTimePicker,
  title: 'Components/UsaTimePicker',
  argTypes: {
    minTime: {
      control: { type: 'text' },
    },
    maxTime: {
      control: { type: 'text' },
    },
    step: {
      control: { type: 'number' },
    },
    modelValue: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    clearButtonAriaLabel: {
      control: { type: 'text' },
    },
    toggleButtonAriaLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
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
    'no-results': {
      control: { type: 'text' },
    },
    status: {
      control: { type: 'text' },
    },
    'assistive-hint': {
      control: { type: 'text' },
    },
  },
  args: {
    minTime: defaultProps.minTime,
    maxTime: defaultProps.maxTime,
    step: defaultProps.step,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    disabled: defaultProps.disabled,
    readonly: defaultProps.readonly,
    error: defaultProps.error,
    id: defaultProps.id,
    clearButtonAriaLabel: defaultProps.clearButtonAriaLabel,
    toggleButtonAriaLabel: defaultProps.toggleButtonAriaLabel,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    hint: '',
    'error-message': '',
    'no-results': '',
    status: '',
    'assistive-hint': '',
  },
  render: args => ({
    components: { UsaTimePicker },
    props: Object.keys(UsaTimePicker.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaTimePicker
      :min-time="args.minTime"
      :max-time="args.maxTime"
      :step="args.step"
      :label="args.label"
      :required="args.required"
      :disabled="args.disabled"
      :readonly="args.readonly"
      :error="args.error"
      :id="args.id"
      :clear-button-aria-label="args.clearButtonAriaLabel"
      :toggle-button-aria-label="args.toggleButtonAriaLabel"
      :custom-classes="args.customClasses"
      v-model="args.modelValue"
    >
      <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
      <template v-if="!!args.hint" #hint>${args.hint}</template>
      <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
      <template v-if="!!args['no-results']" #no-results>${args['no-results']}</template>
      <template v-if="!!args.status" #status>${args.status}</template>
      <template v-if="!!args['assistive-hint']" #assistive-hint>${args['assistive-hint']}</template>
    </UsaTimePicker>`,
  }),
}

export const DefaultTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" />`,
      },
    },
  },
}

export const DefaultValueTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    modelValue: '09:00',
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" v-model="ref('09:00')" />`,
      },
    },
  },
}

export const MinMaxTimePicker = {
  args: {
    ...defaultProps,
    label: 'Custom time range',
    minTime: '09:00',
    maxTime: '13:00',
  },
  name: 'Min/Max Time',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Custom time range" min-time="09:00" max-time="13:00" />`,
      },
    },
  },
}

export const StepTimePicker = {
  args: {
    ...defaultProps,
    label: 'Custom step',
    step: 15,
  },
  name: 'Step',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Custom step" step="15" />`,
      },
    },
  },
}

export const HintTimePicker = {
  args: {
    ...defaultProps,
    label: 'Hint',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Hint"><template #hint>Choose wisely</template></UsaTimePicker>`,
      },
    },
  },
}

export const ErrorTimePicker = {
  args: {
    ...defaultProps,
    label: 'Error',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Error" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageTimePicker = {
  args: {
    ...defaultProps,
    label: 'Error',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Error" :error="true"><template #error-message>Error message here</template></UsaTimePicker>`,
      },
    },
  },
}

export const RequiredTimePicker = {
  args: {
    ...defaultProps,
    label: 'Required',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Required" :required="true" />`,
      },
    },
  },
}

export const DisabledTimePicker = {
  args: {
    ...defaultProps,
    label: 'Disabled',
    disabled: true,
    modelValue: '15:00',
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Disabled" :disabled="true" v-model="ref('15:00')" />`,
      },
    },
  },
}

export const ReadonlyTimePicker = {
  args: {
    ...defaultProps,
    label: 'Readonly time',
    readonly: true,
    modelValue: '15:00',
  },
  name: 'Readonly',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Readonly time" :readonly="true" v-model="ref('15:00')" />`,
      },
    },
  },
}

export const CustomIdTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" id="custom-id" />`,
      },
    },
  },
}

export const ClearButtonAriaLabelTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    modelValue: '15:00',
    clearButtonAriaLabel: 'Custom clear aria label',
  },
  name: 'Custom Clear Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" v-model="ref('15:00')" :clear-button-aria-label="Custom clear aria label" />`,
      },
    },
  },
}

export const ToggleButtonAriaLabelTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    toggleButtonAriaLabel: 'Custom toggle aria label',
  },
  name: 'Custom Toggle Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" :toggle-button-aria-label="Custom toggle aria label" />`,
      },
    },
  },
}

export const LabelSlotTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker><template #label><em>Label slot content</em></template></UsaTimePicker>`,
      },
    },
  },
}

export const NoResultsSlotTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    'no-results': `<em>Sorry, didn't find that.</em>`,
  },
  name: 'No Results Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time"><template #no-results><em>Sorry, didn't find that.</em></template></UsaTimePicker>`,
      },
    },
  },
}

export const StatusScopedSlotTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    status: 'Total options available: {{ filteredOptions.length }}',
  },
  name: 'Status Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaTimePicker>`,
      },
    },
  },
}

export const AssistiveHintSlotTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    'assistive-hint': `<em>Some custom hint text for screenreaders.</em>`,
  },
  name: 'Assistive Hint Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaTimePicker>`,
      },
    },
  },
}

export const CustomClassesTimePicker = {
  args: {
    ...defaultProps,
    label: 'Time',
    hint: 'Choose wisely',
    customClasses: {
      formGroup: ['test-form-group-class'],
      component: ['test-component-class'],
      label: ['test-label-class'],
      input: ['test-input-class'],
      list: ['test-list-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaTimePicker label="Time" hint="Choose wisely" :custom-classes="{ \n\tformGroup: ['test-form-group-class'], \n\tcomponent: ['test-component-class'], \n\tlabel: ['test-label-class'], \n\tinput: ['test-input-class'], \n\tlist: ['test-list-class'],
      \n}" />`,
      },
    },
  },
}
