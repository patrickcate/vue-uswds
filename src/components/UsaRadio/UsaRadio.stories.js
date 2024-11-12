import { ref } from 'vue'
import UsaRadio from './UsaRadio.vue'

const defaultProps = {
  tile: UsaRadio.props.tile.default,
  modelValue: UsaRadio.props.modelValue.default,
  label: UsaRadio.props.label.default,
  description: UsaRadio.props.description.default,
  id: UsaRadio.props.id.default,
  customClasses: UsaRadio.props.customClasses.default(),
}

export default {
  component: UsaRadio,
  title: 'Components/UsaRadio',
  argTypes: {
    tile: {
      control: { type: 'boolean' },
    },
    modelValue: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    id: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    'slot:description': {
      control: { type: 'text' },
      name: 'description',
      table: {
        category: 'slots',
      },
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
    components: { UsaRadio },
    props: Object.keys(UsaRadio.props),
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `<UsaRadio
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
  </UsaRadio>`,
  }),
}

export const DefaultRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio label="Sojourner Truth"></UsaRadio>`,
      },
    },
  },
}

export const WithDescriptionRadio = {
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
        code: `<UsaRadio label="Sojourner Truth" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>`,
      },
    },
  },
}

export const CheckedByDefaultRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    modelValue: true,
  },
  name: 'Checked by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio label="Sojourner Truth" v-model="ref(true)"></UsaRadio>`,
      },
    },
  },
}

export const TileRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    tile: true,
  },
  name: 'Tile',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio label="Sojourner Truth" :tile="true"></UsaRadio>`,
      },
    },
  },
}

export const TileWithDescriptionRadio = {
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
        code: `<UsaRadio label="Sojourner Truth" :tile="true" description="This is optional text that can be used to describe the label in more detail."></UsaRadio>`,
      },
    },
  },
}

export const TileCheckedByDefaultRadio = {
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
        code: `<UsaRadio label="Sojourner Truth" :tile="true" v-model="ref(true)"></UsaRadio>`,
      },
    },
  },
}

export const LabelSlotRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    default: 'Custom label slot content',
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio><template #label>Custom label slot content</template></UsaRadio>`,
      },
    },
  },
}

export const DescriptionSlotRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    'slot:description': 'Custom description slot content',
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio label="Sojourner Truth"><template #description>Custom description slot content</template></UsaRadio>`,
      },
    },
  },
}

export const CustomIdRadio = {
  args: {
    ...defaultProps,
    label: 'Sojourner Truth',
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaRadio label="Sojourner Truth" id="custom-id"></UsaRadio>`,
      },
    },
  },
}

export const CustomClassesRadio = {
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
        code: `<UsaRadio label="Sojourner Truth" :custom-classes="{'test-component-class': true, 'test-label-class': true, 'test-description-class': true}"></UsaRadio>`,
      },
    },
  },
}
