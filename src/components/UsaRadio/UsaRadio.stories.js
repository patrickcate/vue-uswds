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
  components: { UsaRadio },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaRadio
    v-bind="$attrs"
    :tile="tile"
    :label="label"
    :description="description"
    :id="id"
    :custom-classes="customClasses"
    v-model="modelValue"
  >
    <template #default>${args.defaultSlot}</template>
    <template #description>${args.descriptionSlot}</template>
  </UsaRadio>`,
})

export const DefaultRadio = DefaultTemplate.bind({})
DefaultRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
}
DefaultRadio.storyName = 'Default'

export const WithDescriptionRadio = DefaultTemplate.bind({})
WithDescriptionRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  description:
    'This is optional text that can be used to describe the label in more detail.',
}
WithDescriptionRadio.storyName = 'Default w/ Description'

export const CheckedByDefaultRadio = DefaultTemplate.bind({})
CheckedByDefaultRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  checked: true,
}
CheckedByDefaultRadio.storyName = 'Checked by Default'

export const TileRadio = DefaultTemplate.bind({})
TileRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
}
TileRadio.storyName = 'Tile'

export const TileWithDescriptionRadio = DefaultTemplate.bind({})
TileWithDescriptionRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
  description:
    'This is optional text that can be used to describe the label in more detail.',
}
TileWithDescriptionRadio.storyName = 'Tile w/ Description'

export const TileCheckedByDefaultRadio = DefaultTemplate.bind({})
TileCheckedByDefaultRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  tile: true,
  checked: true,
}
TileCheckedByDefaultRadio.storyName = 'Tile Checked by Default'

export const LabelSlotRadio = DefaultTemplate.bind({})
LabelSlotRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  defaultSlot: 'Custom label slot content',
}
LabelSlotRadio.storyName = 'Label Slot'

export const DescriptionSlotRadio = DefaultTemplate.bind({})
DescriptionSlotRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  descriptionSlot: 'Custom description slot content',
}
DescriptionSlotRadio.storyName = 'Description Slot'

export const CustomIdRadio = DefaultTemplate.bind({})
CustomIdRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  id: 'custom-id',
}
CustomIdRadio.storyName = 'Custom ID'

export const CustomClassesRadio = DefaultTemplate.bind({})
CustomClassesRadio.args = {
  ...defaultProps,
  label: 'Sojourner Truth',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
    description: ['test-description-class'],
  },
}
CustomClassesRadio.storyName = 'Custom CSS Classes'
