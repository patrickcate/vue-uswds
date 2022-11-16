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
    default: {
      control: { type: 'text' },
    },
    'menu-button': {
      control: { type: 'text' },
    },
  },
  args: {
    menuButtonLabel: defaultProps.menuButtonLabel,
    customClasses: defaultProps.customClasses,
    default: '',
    'menu-button': '',
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
    <template v-if="${!!args.default}" #default>${args.default}</template>
    <template v-if="${!!args[
      'menu-button'
    ]}" #menu-button="{ menuButtonLabel }">${args['menu-button']}</template>
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
  default: 'Your Logo Here',
}
DefaultSlotNavbar.storyName = 'Default Slot'

export const MenuButtonScopedSlotNavbar = DefaultTemplate.bind({})
MenuButtonScopedSlotNavbar.args = {
  ...defaultProps,
  'menu-button': '<em>My {{ menuButtonLabel }}</em>',
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
