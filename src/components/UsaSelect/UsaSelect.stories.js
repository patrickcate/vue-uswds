import { ref } from 'vue'
import UsaSelect from './UsaSelect.vue'

const testOptions = [
  {
    value: 1,
    text: 'Item 1',
    disabled: true,
  },
  {
    value: 2,
    text: 'Item 2',
  },
  {
    group: 'Item 3',
    options: [
      {
        value: 3.1,
        text: 'Item 3.1',
      },
      {
        value: 3.2,
        text: 'Item 3.2',
        disabled: true,
      },
      {
        value: 3.3,
        text: 'Item 3.3',
      },
    ],
  },
  {
    value: 4,
    text: 'Item 4',
  },
  {
    group: 'Item 5',
    disabled: true,
    options: [
      {
        value: 5.1,
        text: 'Item 5.1',
      },
      {
        value: 5.2,
        text: 'Item 5.2',
      },
    ],
  },
]

const defaultProps = {
  options: UsaSelect.props.options.default(),
  emptyLabel: UsaSelect.props.emptyLabel.default,
  modelValue: UsaSelect.props.modelValue.default,
  label: UsaSelect.props.label.default,
  required: UsaSelect.props.required.default,
  error: UsaSelect.props.error.default,
  id: UsaSelect.props.id.default,
  customClasses: UsaSelect.props.customClasses.default(),
}

export default {
  component: UsaSelect,
  title: 'Components/UsaSelect',
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    emptyLabel: {
      control: { type: 'text' },
    },
    modelValue: {
      control: { type: 'text' },
    },
    group: {
      control: { type: 'boolean' },
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
    error: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
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
    options: defaultProps.options,
    emptyLabel: defaultProps.emptyLabel,
    modelValue: defaultProps.modelValue,
    group: defaultProps.group,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    default: '',
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
    components: { UsaSelect },
    props: Object.keys(UsaSelect.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaSelect
    v-bind="args.$attrs"
    :options="args.options"
    :empty-label="args.emptyLabel"
    :group="args.group"
    :label="args.label"
    :required="args.required"
    :error="args.error"
    :id="args.id"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
    <template v-if="!!args.default" #default="{ options }">${args.default}</template>
    <template v-if="!!args.hint" #hint>${args.hint}</template>
    <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
  </UsaSelect>`,
  }),
}

export const DefaultSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options"></UsaSelect>`,
      },
    },
  },
}

export const DefaultByDefaultSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    modelValue: '2',
  },
  name: 'Selected by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :model-value="2"></UsaSelect>`,
      },
    },
  },
}

export const HintSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" hint="Choose wisely"></UsaSelect>`,
      },
    },
  },
}

export const ErrorSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :error="true"></UsaSelect>`,
      },
    },
  },
}

export const ErrorMessageSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :error="true"><template #error-message>Error message here</template></UsaSelect>`,
      },
    },
  },
}

export const GroupedSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    group: true,
  },
  name: 'Group Elements',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :group="true"></UsaSelect>`,
      },
    },
  },
}

export const RequiredSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :required="true"></UsaSelect>`,
      },
    },
  },
}

export const CustomEmptyLabelSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    emptyLabel: 'Custom empty label',
  },
  name: 'Custom Empty Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" emptyLabel="Custom empty label"></UsaSelect>`,
      },
    },
  },
}

export const LabelSlotSelect = {
  args: {
    ...defaultProps,
    options: testOptions,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect :options="options"><template #label><em>Label slot content</em></template></UsaSelect>`,
      },
    },
  },
}

export const ScopedSlotSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    default: `<option :value="options[0].value">{{ options[0].value }}</option>`,
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options"><template #default><option :value="options[0].value">{{ options[0].value }}</option></template></UsaSelect>`,
      },
    },
  },
}

export const CustomIdSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" id="custom-id"></UsaSelect>`,
      },
    },
  },
}

export const CustomClassesSelect = {
  args: {
    ...defaultProps,
    label: 'Select label',
    options: testOptions,
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSelect label="Select label" :options="options" :custom-classes="{component: ['test-component-class'], label: ['test-label-class']}"></UsaSelect>`,
      },
    },
  },
}
