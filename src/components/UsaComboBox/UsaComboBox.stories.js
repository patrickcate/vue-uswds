import { ref } from 'vue'
import UsaComboBox from './UsaComboBox.vue'
import { testData } from '@/components/UsaComboBox/UsaComboBox.fixtures.js'

const defaultProps = {
  options: UsaComboBox.props.options.default(),
  modelValue: UsaComboBox.props.modelValue.default,
  label: UsaComboBox.props.label.default,
  required: UsaComboBox.props.required.default,
  disabled: UsaComboBox.props.disabled.default,
  readonly: UsaComboBox.props.readonly.default,
  error: UsaComboBox.props.error.default,
  id: UsaComboBox.props.id.default,
  clearButtonAriaLabel: UsaComboBox.props.clearButtonAriaLabel.default,
  toggleButtonAriaLabel: UsaComboBox.props.toggleButtonAriaLabel.default,
  customClasses: UsaComboBox.props.customClasses.default(),
}

export default {
  component: UsaComboBox,
  title: 'Components/UsaComboBox',
  argTypes: {
    options: {
      control: { type: 'object' },
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
    options: defaultProps.options,
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
    components: { UsaComboBox },
    props: Object.keys(UsaComboBox.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaComboBox
    :options="args.options"
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
    <template v-if="!!args.status" #status="{ filteredOptions }">${args.status}</template>
    <template v-if="!!args['assistive-hint']" #assistive-hint>${args['assistive-hint']}</template>
  </UsaComboBox>`,
  }),
}

export const DefaultComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" />`,
      },
    },
  },
}

export const DefaultValueComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    modelValue: 'raspberry',
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" v-model="ref('raspberry')" />`,
      },
    },
  },
}

export const HintComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}"><template #hint>Choose wisely</template></UsaComboBox>`,
      },
    },
  },
}

export const ErrorComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :error="true"><template #error-message>Error message here</template></UsaComboBox>`,
      },
    },
  },
}

export const RequiredComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :required="true" />`,
      },
    },
  },
}

export const DisabledComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    disabled: true,
    modelValue: 'raspberry',
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :disabled="true" v-model="ref('raspberry')" />`,
      },
    },
  },
}

export const ReadonlyComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    readonly: true,
    modelValue: 'raspberry',
  },
  name: 'Readonly',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :readonly="true" v-model="ref('raspberry')" />`,
      },
    },
  },
}

export const CustomIdComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" id="custom-id" />`,
      },
    },
  },
}

export const ClearButtonAriaLabelComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    modelValue: 'pomegranate',
    clearButtonAriaLabel: 'Custom clear aria label',
  },
  name: 'Custom Clear Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" clear-button-aria-label="Custom clear aria label" v-model="ref('pomegranate')" />`,
      },
    },
  },
}

export const ToggleButtonAriaLabelComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    toggleButtonAriaLabel: 'Custom toggle aria label',
  },
  name: 'Custom Toggle Button Aria Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" toggle-button-aria-label="Custom toggle aria label" />`,
      },
    },
  },
}

export const LabelSlotComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}"><template #label><em>Label slot content</em></template></UsaComboBox>`,
      },
    },
  },
}

export const NoResultsSlotComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'no-results': `<em>Sorry, didn't find that.</em>`,
  },
  name: 'No Results Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}"><template #no-results><em>Sorry, didn't find that.</em></template></UsaComboBox>`,
      },
    },
  },
}

export const StatusScopedSlotComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    status: 'Total options available: {{ filteredOptions.length }}',
  },
  name: 'Status Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}"><template #status="{ filteredOptions }">Total options available: {{ filteredOptions.length }}</template></UsaComboBox>`,
      },
    },
  },
}

export const AssistiveHintSlotComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
    'assistive-hint': `<em>Some custom hint text for screenreaders.</em>`,
  },
  name: 'Assistive Hint Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}"><template #assistive-hint><em>Some custom hint text for screenreaders.</em></template></UsaComboBox>`,
      },
    },
  },
}

export const CustomClassesComboBox = {
  args: {
    ...defaultProps,
    label: 'Fruit',
    options: testData,
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
        code: `<UsaComboBox label="Fruit" :options="${JSON.stringify(testData)}" :custom-classes="{ \n\tformGroup: ['test-form-group-class'], \n\tcomponent: ['test-component-class'], \n\tlabel: ['test-label-class'], \n\tinput: ['test-input-class'], \n\tlist: ['test-list-class'] }"\n><template #hint>Choose wisely</template></UsaComboBox>`,
      },
    },
  },
}
