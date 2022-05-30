import UsaTooltip from './UsaTooltip.vue'

const defaultProps = {
  label: UsaTooltip.props.label.default,
  id: UsaTooltip.props.id.default,
  wrapperTag: UsaTooltip.props.wrapperTag.default,
  tag: UsaTooltip.props.tag.default,
  position: UsaTooltip.props.position.default,
  customClasses: UsaTooltip.props.customClasses.default(),
}

export default {
  component: UsaTooltip,
  title: 'Components/UsaTooltip',
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    id: {
      control: { type: 'text' },
    },
    wrapperTag: {
      control: { type: 'text' },
    },
    tag: {
      control: { type: 'text' },
    },
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    labelSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    label: defaultProps.label,
    id: defaultProps.id,
    wrapperTag: defaultProps.wrapperTag,
    tag: defaultProps.tag,
    position: defaultProps.position,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    labelSlot: '',
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; align-items: center"><div style="margin: auto"><story /></div></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaTooltip },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaTooltip
    :label="label"
    :id="id"
    :wrapperTag="wrapperTag"
    :tag="tag"
    :position="position"
    :customClasses="customClasses"
  >
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.labelSlot}" #label>${args.labelSlot}</template>
 </UsaTooltip>`,
})

export const DefaultTooltip = DefaultTemplate.bind({})
DefaultTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  defaultSlot: 'Tooltip trigger element',
}
DefaultTooltip.storyName = 'Default'

export const TopPositionTooltip = DefaultTemplate.bind({})
TopPositionTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  position: 'top',
  defaultSlot: 'Top tooltip',
}
TopPositionTooltip.storyName = 'Top Position'

export const BottomPositionTooltip = DefaultTemplate.bind({})
BottomPositionTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  position: 'bottom',
  defaultSlot: 'Bottom tooltip',
}
BottomPositionTooltip.storyName = 'Bottom Position'

export const LeftPositionTooltip = DefaultTemplate.bind({})
LeftPositionTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  position: 'left',
  defaultSlot: 'Left tooltip',
}
LeftPositionTooltip.storyName = 'Left Position'

export const RightPositionTooltip = DefaultTemplate.bind({})
RightPositionTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  position: 'right',
  defaultSlot: 'Right tooltip',
}
RightPositionTooltip.storyName = 'Right Position'

export const CustomIdTooltip = DefaultTemplate.bind({})
CustomIdTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  id: 'test-custom-id',
  defaultSlot: 'Tooltip using custom ID',
}
CustomIdTooltip.storyName = 'Custom ID'

export const CustomWrapperComponentTagsTooltip = DefaultTemplate.bind({})
CustomWrapperComponentTagsTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  wrapperTag: 'div',
  tag: 'abbr',
  defaultSlot: 'Custom tags tooltip',
}
CustomWrapperComponentTagsTooltip.storyName =
  'Custom Wrapper and Component tags'

export const LabelSlotTooltip = DefaultTemplate.bind({})
LabelSlotTooltip.args = {
  ...defaultProps,
  labelSlot: '<em>Label w/ HTML</em>>',
  defaultSlot: 'Tooltip using label slot',
}
LabelSlotTooltip.storyName = 'Label Slot'

export const CustomClassesTooltip = DefaultTemplate.bind({})
CustomClassesTooltip.args = {
  ...defaultProps,
  label: 'Test tooltip',
  defaultSlot: 'Uses custom CSS classes',
  customClasses: {
    component: ['test-component-class'],
    label: ['test-label-class'],
  },
}
CustomClassesTooltip.storyName = 'Custom Classes'
