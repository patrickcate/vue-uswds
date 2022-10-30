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
    defaultSlot: {
      control: { type: 'text' },
    },
    descriptionSlot: {
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
    defaultSlot: '',
    descriptionSlot: '',
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
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
  >
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.descriptionSlot}" #description>${
    args.descriptionSlot
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
  defaultSlot: 'Custom label slot content',
}
LabelSlotCheckbox.storyName = 'Label Slot'

export const DescriptionSlotCheckbox = DefaultTemplate.bind({})
DescriptionSlotCheckbox.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  descriptionSlot: 'Custom description slot content',
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
