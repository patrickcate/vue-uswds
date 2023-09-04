import { ref } from 'vue'
import UsaCheckbox from './UsaCheckbox.vue'

const defaultProps = {
  tile: UsaCheckbox.props.tile.default,
  modelValue: UsaCheckbox.props.modelValue.default,
  label: UsaCheckbox.props.label.default,
  description: UsaCheckbox.props.description.default,
  disabled: UsaCheckbox.props.disabled.default,
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
    disabled: {
      control: { type: 'boolean' },
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
    disabled: defaultProps.disabled,
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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCheckbox },
  props: Object.keys(argTypes),
  setup() {
    const modelValue = ref(args.modelValue)
    return { ...args, modelValue }
  },
  template: `<UsaCheckbox
    v-bind="$attrs"
    :tile="tile"
    :label="label"
    :description="description"
    :disabled="disabled"
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
  >
    <template v-if="${!!args.default}" #default>${args.default}</template>
    <template v-if="${!!args['slot:description']}" #description>${
    args['slot:description']
  }</template>
  </UsaCheckbox>`,
})

export const DefaultCheckbox = DefaultTemplate.bind({})
DefaultCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
}
DefaultCheckbox.storyName = 'Default'

export const WithDescriptionCheckbox = DefaultTemplate.bind({})
WithDescriptionCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  description:
    'This is optional text that can be used to describe the label in more detail.',
}
WithDescriptionCheckbox.storyName = 'Default w/ Description'

export const CheckedByDefaultCheckbox = DefaultTemplate.bind({})
CheckedByDefaultCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  modelValue: true,
}
CheckedByDefaultCheckbox.storyName = 'Checked by Default'

export const DisabledCheckbox = DefaultTemplate.bind({})
DisabledCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  modelValue: true,
  disabled: true,
}
DisabledCheckbox.storyName = 'Disabled'

export const TileCheckbox = DefaultTemplate.bind({})
TileCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
}
TileCheckbox.storyName = 'Tile'

export const TileWithDescriptionCheckbox = DefaultTemplate.bind({})
TileWithDescriptionCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
  description:
    'This is optional text that can be used to describe the label in more detail.',
}
TileWithDescriptionCheckbox.storyName = 'Tile w/ Description'

export const TileCheckedByDefaultCheckbox = DefaultTemplate.bind({})
TileCheckedByDefaultCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
  modelValue: true,
}
TileCheckedByDefaultCheckbox.storyName = 'Tile Checked by Default'

export const LabelSlotCheckbox = DefaultTemplate.bind({})
LabelSlotCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  default: 'Custom label slot content',
}
LabelSlotCheckbox.storyName = 'Label Slot'

export const DescriptionSlotCheckbox = DefaultTemplate.bind({})
DescriptionSlotCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  'slot:description': '<em>Custom description slot content</em>',
}
DescriptionSlotCheckbox.storyName = 'Description Slot'

export const CustomIdCheckbox = DefaultTemplate.bind({})
CustomIdCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  id: 'custom-id',
}
CustomIdCheckbox.storyName = 'Custom ID'

export const CustomClassesCheckbox = DefaultTemplate.bind({})
CustomClassesCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
    description: ['test-description-class'],
  },
}
CustomClassesCheckbox.storyName = 'Custom CSS Classes'
