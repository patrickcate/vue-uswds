import { ref } from 'vue'
import UsaTextarea from './UsaTextarea.vue'

const defaultProps = {
  width: UsaTextarea.props.width.default,
  modelValue: UsaTextarea.props.modelValue.default,
  label: UsaTextarea.props.label.default,
  required: UsaTextarea.props.required.default,
  error: UsaTextarea.props.error.default,
  id: UsaTextarea.props.id.default,
  customClasses: UsaTextarea.props.customClasses.default(),
}

export default {
  component: UsaTextarea,
  title: 'Components/UsaTextarea',
  argTypes: {
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
    width: defaultProps.width,
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
    components: { UsaTextarea },
    props: Object.keys(UsaTextarea.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaTextarea
      v-bind="$attrs"
      :width="args.width"
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
    </UsaTextarea>`,
  }),
}

export const DefaultTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: ``,
      },
    },
  },
}

export const DefaultTextTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    modelValue: `I'm some default text.`,
  },
  name: 'Default Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" v-model="ref('I'm some default text.')" />`,
      },
    },
  },
}

export const WidthTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    width: '2xl',
  },
  name: 'Width',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" width="2xl" />`,
      },
    },
  },
}

export const HintTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    hint: 'Choose wisely',
  },
  name: 'Hint',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label"><template #hint>Choose wisely</template></UsaTextarea>`,
      },
    },
  },
}

export const ErrorTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    error: true,
  },
  name: 'Error',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" :error="true" />`,
      },
    },
  },
}

export const ErrorMessageTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    error: true,
    'error-message': 'Error message here',
  },
  name: 'Error Message',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" :error="true"><template #error-message>Error message here</template></UsaTextarea>`,
      },
    },
  },
}

export const RequiredTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" :required="true" />`,
      },
    },
  },
}

export const LabelSlotTextarea = {
  args: {
    ...defaultProps,
    'slot:label': `<em>Label slot content</em>`,
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea><template #label><em>Label slot content</em></template></UsaTextarea>`,
      },
    },
  },
}

export const CustomIdTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" id="custom-id" />`,
      },
    },
  },
}

export const CustomClassesTextarea = {
  args: {
    ...defaultProps,
    label: 'Textarea label',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaTextarea label="Textarea label" :custom-classes="{ component: 'test-component-class', label: 'test-label-class' }" />`,
      },
    },
  },
}
