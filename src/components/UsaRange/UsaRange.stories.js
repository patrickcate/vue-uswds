import { ref } from 'vue'
import UsaRange from './UsaRange.vue'

const defaultProps = {
  min: UsaRange.props.min.default,
  max: UsaRange.props.max.default,
  unit: UsaRange.props.unit.default,
  preposition: UsaRange.props.preposition.default,
  modelValue: UsaRange.props.modelValue.default,
  label: UsaRange.props.label.default,
  required: UsaRange.props.required.default,
  error: UsaRange.props.error.default,
  id: UsaRange.props.id.default,
  customClasses: UsaRange.props.customClasses.default(),
}

export default {
  component: UsaRange,
  title: 'Components/UsaRange',
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    unit: {
      control: { type: 'text' },
    },
    preposition: {
      control: { type: 'text' },
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
    error: {
      control: { type: 'boolean' },
    },
    id: {
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
  },
  args: {
    min: defaultProps.min,
    max: defaultProps.max,
    unit: defaultProps.unit,
    preposition: defaultProps.preposition,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
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
    components: { UsaRange },
    props: Object.keys(UsaRange.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaRange
      v-bind="args.$attrs"
      :min="args.min"
      :max="args.max"
      :unit="args.unit"
      :preposition="args.preposition"
      :label="args.label"
      :required="args.required"
      :error="args.error"
      :id="args.id"
      :custom-classes="args.customClasses"
      v-model="args.modelValue"
    >
      <template v-if="!!args['slot:label']" #label>${args['slot:label']}</template>
      <template v-if="!!args.hint" #hint>${args.hint}</template>
      <template v-if="!!args['error-message']" #error-message>${args['error-message']}</template>
    </UsaRange>`,
  }),
}

export const DefaultRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" />`,
      },
    },
  },
}

export const DefaultValueRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    modelValue: '75',
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" v-model="ref('75')" />`,
      },
    },
  },
}

export const CustomUnitAndPrepositionRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    modelValue: '75',
    unit: 'degrees',
    preposition: 'out of a total',
  },
  name: 'Custom Unit and Preposition',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" v-model="ref('75')" unit="degrees" preposition="out of a total" />`,
      },
    },
  },
}

export const HintRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" hint="Choose wisely" />`,
      },
    },
  },
}

export const ErrorRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" :error="true"><template #error-message>Error message here</template></UsaRange>`,
      },
    },
  },
}

export const RequiredRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" :required="true" />`,
      },
    },
  },
}

export const LabelSlotRange = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label"><template #label><em>Label slot content</em></template></UsaRange>`,
      },
    },
  },
}

export const CustomIdRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" id="custom-id" />`,
      },
    },
  },
}

export const CustomClassesRange = {
  args: {
    ...defaultProps,
    label: 'Range label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaRange label="Range label" :custom-classes="{'component': ['test-component-class'], 'label': ['test-label-class']}" />`,
      },
    },
  },
}
