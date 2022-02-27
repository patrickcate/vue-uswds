import UsaNavbar from './UsaNavbar.vue'

const defaultProps = {
  menuButtonLabel: UsaNavbar.props.menuButtonLabel.default,
  customClasses: UsaNavbar.props.customClasses.default(),
}

export default {
  component: UsaNavbar,
  title: 'Components/UsaNavbar',
  argTypes: {
    menuButtonLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    menuButtonSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    menuButtonLabel: defaultProps.menuButtonLabel,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
    menuButtonSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavbar },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNavbar
    :menu-button-label="menuButtonLabel"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.menuButtonSlot}" #menu-button="{ menuButtonLabel }">${
    args.menuButtonSlot
  }</template>
  </UsaNavbar>`,
})

export const DefaultNavbar = DefaultTemplate.bind({})
DefaultNavbar.args = {
  ...defaultProps,
}
DefaultNavbar.storyName = 'Default'

export const MenuButtonLabelNavbar = DefaultTemplate.bind({})
MenuButtonLabelNavbar.args = {
  ...defaultProps,
  menuButtonLabel: 'Open Menu',
}
MenuButtonLabelNavbar.storyName = 'Menu Button Label'

export const DefaultSlotNavbar = DefaultTemplate.bind({})
DefaultSlotNavbar.args = {
  ...defaultProps,
  defaultSlot: 'Your Logo Here',
}
DefaultSlotNavbar.storyName = 'Default Slot'

export const MenuButtonScopedSlotNavbar = DefaultTemplate.bind({})
MenuButtonScopedSlotNavbar.args = {
  ...defaultProps,
  menuButtonSlot: '<em>My {{ menuButtonLabel }}</em>',
}
MenuButtonScopedSlotNavbar.storyName = 'Menu Button Scoped Slot'

export const CustomClassesNavbar = DefaultTemplate.bind({})
CustomClassesNavbar.args = {
  ...defaultProps,
  customClasses: {
    button: ['test-button-class'],
  },
}
CustomClassesNavbar.storyName = 'Custom Classes'
