import { ref } from 'vue'
import UsaCheckbox from './UsaCheckbox.vue'

const defaultProps = {
  tile: UsaCheckbox.props.tile.default,
  modelValue: UsaCheckbox.props.modelValue.default,
  label: UsaCheckbox.props.label.default,
  description: UsaCheckbox.props.description.default,
  id: UsaCheckbox.props.id.default,
  customClasses: UsaCheckbox.props.customClasses.default(),
}

export default {
  component: UsaCheckbox,
  title: 'Components/UsaCheckbox',
  argTypes: {
    tile: {
      control: { type: 'boolean' },
    },
    modelValue: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    'slot:description': {
      control: { type: 'text' },
    },
  },
  args: {
    tile: defaultProps.tile,
    modelValue: defaultProps.modelValue,
    label: defaultProps.label,
    description: defaultProps.description,
    id: defaultProps.id,
    customClasses: defaultProps.customClasses,
    default: '',
    'slot:description': '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-form usa-form--large"><story /></div>',
    }),
  ],
  render: args => ({
    components: { UsaCheckbox },
    props: Object.keys(UsaCheckbox.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaCheckbox
    v-bind="args.$attrs"
    :tile="args.tile"
    :label="args.label"
    :description="args.description"
    :id="args.id"
    :custom-classes="args.customClasses"
    v-model="args.modelValue"
  >
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args['slot:description']" #description>${args['slot:description']}</template>
  </UsaCheckbox>`,
  }),
}

export const DefaultCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth"></UsaCheckbox>`,
      },
    },
  },
}

export const WithDescriptionCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    description:
      'This is optional text that can be used to describe the label in more detail.',
  },
  name: 'Default w/ Description',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>`,
      },
    },
  },
}

export const CheckedByDefaultCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    modelValue: true,
  },
  name: 'Checked by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" v-model="ref(true)"></UsaCheckbox>`,
      },
    },
  },
}

export const TileCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
  },
  name: 'Tile',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" :tile="true"></UsaCheckbox>`,
      },
    },
  },
}

export const TileWithDescriptionCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
    description:
      'This is optional text that can be used to describe the label in more detail.',
  },
  name: 'Tile w/ Description',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaCheckbox>`,
      },
    },
  },
}

export const TileCheckedByDefaultCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
    modelValue: true,
  },
  name: 'Tile Checked by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaCheckbox>`,
      },
    },
  },
}

export const LabelSlotCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    default: 'Custom label slot content',
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox>Custom label slot content</UsaCheckbox>`,
      },
    },
  },
}

export const DescriptionSlotCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    'slot:description': '<em>Custom description slot content</em>',
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth"><template #description><em>Custom description slot content</em></template></UsaCheckbox>`,
      },
    },
  },
}

export const CustomIdCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" id="custom-id"></UsaCheckbox>`,
      },
    },
  },
}

export const CustomClassesCheckbox = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    customClasses: {
      component: ['test-component-class'],
      label: ['test-label-class'],
      description: ['test-description-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaCheckbox label="Sojourner Truth" :custom-classes="{ component: ['test-component-class'], label: ['test-label-class'], description:  ['test-description-class'] }"></UsaCheckbox>`,
      },
    },
  },
}
