import UsaIcon from './UsaIcon.vue'

const defaultProps = {
  // Name is required.
  name: 'flag',
  size: UsaIcon.props.size.default,
  ariaHidden: UsaIcon.props.ariaHidden.default,
  role: UsaIcon.props.role.default,
  focusable: UsaIcon.props.focusable.default,
}

export default {
  component: UsaIcon,
  title: 'Components/UsaIcon',
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    size: {
      options: ['', '3', '4', '5', '6', '7', '8', '9'],
      control: {
        type: 'select',
      },
    },
    ariaHidden: {
      control: { type: 'boolean' },
    },
    role: {
      control: { type: 'text' },
    },
    focusable: {
      control: { type: 'boolean' },
    },
    titleSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    name: defaultProps.name,
    size: defaultProps.size,
    ariaHidden: defaultProps.ariaHidden,
    role: defaultProps.role,
    focusable: defaultProps.focusable,
    titleSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIcon },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIcon
    :name="name"
    :size="size"
    :aria-hidden="ariaHidden"
    :role="role"
    :focusable="focusable"
  >
    <template v-if="${!!args.titleSlot}" #title>${args.titleSlot}</template>
  </UsaIcon>`,
})

export const DefaultIcon = DefaultTemplate.bind({})
DefaultIcon.args = {
  ...defaultProps,
}
DefaultIcon.storyName = 'Default'

export const CustomSizeIcon = DefaultTemplate.bind({})
CustomSizeIcon.args = {
  ...defaultProps,
  size: '9',
}
CustomSizeIcon.storyName = 'Custom Size'

export const TitleSlotIcon = DefaultTemplate.bind({})
TitleSlotIcon.args = {
  ...defaultProps,
  titleSlot: '<title>Flag icon</title>',
}
TitleSlotIcon.storyName = 'Title Slot'
