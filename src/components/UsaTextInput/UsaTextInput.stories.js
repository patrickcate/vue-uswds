import { ref } from 'vue'
import UsaTextInput from './UsaTextInput.vue'

const defaultProps = {
  type: UsaTextInput.props.type.default,
  width: UsaTextInput.props.width.default,
  modelValue: UsaTextInput.props.modelValue.default,
  label: UsaTextInput.props.label.default,
  group: UsaTextInput.props.group.default,
  required: UsaTextInput.props.required.default,
  error: UsaTextInput.props.error.default,
  id: UsaTextInput.props.id.default,
  customClasses: UsaTextInput.props.customClasses.default(),
}

export default {
  component: UsaTextInput,
  title: 'Components/UsaTextInput',
  argTypes: {
    type: {
      control: { type: 'text' },
    },
    width: {
      options: [
        '',
        '2xs',
        'xs',
        'sm',
        'small',
        'md',
        'medium',
        'lg',
        'xl',
        '2xl',
      ],
      control: {
        type: 'select',
      },
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
    group: {
      control: { type: 'boolean' },
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
    'input-prefix': {
      control: { type: 'text' },
    },
    'input-suffix': {
      control: { type: 'text' },
    },
  },
  args: {
    type: defaultProps.type,
    width: defaultProps.width,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    group: defaultProps.group,
    required: defaultProps.required,
    error: defaultProps.error,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    hint: '',
    'error-message': '',
    'input-prefix': '',
    'input-suffix': '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
  render: args => ({
    components: { UsaTextInput },
    props: Object.keys(UsaTextInput.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaTextInput
      v-bind="args.$attrs"
      :type="args.type"
      :width="args.width"
      :group="args.group"
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
      <template v-if="!!args['input-prefix']" #input-prefix>${args['input-prefix']}</template>
      <template v-if="!!args['input-suffix']" #input-suffix>${args['input-suffix']}</template>
    </UsaTextInput>`,
  }),
}

export const DefaultTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" />`,
      },
    },
  },
}

export const DefaultValueTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    modelValue: `I am some default text`,
  },
  name: 'Default Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" v-model="ref('I am some default text')" />`,
      },
    },
  },
}

export const InputTypeTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    type: 'number',
  },
  name: 'Input Type',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" type="number" />`,
      },
    },
  },
}

export const WidthTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    width: 'sm',
  },
  name: 'Width',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" width="sm" />`,
      },
    },
  },
}

export const HintTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label"><template #hint>Choose wisely</template></UsaTextInput>`,
      },
    },
  },
}

export const ErrorTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" :error="true"><template #error-message>Error message here</template></UsaTextInput>`,
      },
    },
  },
}

export const RequiredTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" :required="true" />`,
      },
    },
  },
}

export const GroupedTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    group: true,
  },
  name: 'Group Input Elements',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" :group="true" />`,
      },
    },
  },
}

export const LabelSlotTextInput = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput><template #label><em>Label slot content</em></template></UsaTextInput>`,
      },
    },
  },
}

export const PrefixSlotTextInput = {
  args: {
    ...defaultProps,
    'input-prefix': '@',
  },
  name: 'Input Prefix',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput><template #input-prefix>@</template></UsaTextInput>`,
      },
    },
  },
}

export const SuffixSlotTextInput = {
  args: {
    ...defaultProps,
    'input-suffix': '%',
  },
  name: 'Input Suffix',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput><template #input-suffix>%</template></UsaTextInput>`,
      },
    },
  },
}

export const PrefixAndSuffixSlotTextInput = {
  args: {
    ...defaultProps,
    'input-prefix': '@',
    'input-suffix': '%',
  },
  name: 'Input Prefix & Suffix',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput><template #input-prefix>@</template><template #input-suffix>%</template></UsaTextInput>`,
      },
    },
  },
}

export const CustomIdTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" id="custom-id" />`,
      },
    },
  },
}

export const CustomClassesTextInput = {
  args: {
    ...defaultProps,
    label: 'Text input label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
      inputGroup: ['test-input-group-class'],
      inputPrefix: ['test-input-prefix-class'],
      inputSuffix: ['test-input-suffix-class'],
    },
    'input-prefix': '@',
    'input-suffix': '%',
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextInput label="Text input label" :custom-classes="{ \n\tcomponent: ['test-component-class'], \n\tlabel: ['test-label-class'], \n\tinputGroup: ['test-input-group-class'], \n\tinputPrefix: ['test-input-prefix-class'], \n\tinputSuffix: ['test-input-suffix-class'] }\n">\n\t<template #input-prefix>@</template>\n\t<template #input-suffix>%</template>\n</UsaTextInput>`,
      },
    },
  },
}
