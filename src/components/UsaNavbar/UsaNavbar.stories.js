import { ref } from 'vue'
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
  render: args => ({
    components: { UsaNavbar },
    props: Object.keys(UsaNavbar.props),
    setup() {
      return { args }
    },
    template: `<UsaNavbar
    :menu-button-label="args.menuButtonLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args['menu-button']" #menu-button="{ menuButtonLabel }">${args['menu-button']}</template>
  </UsaNavbar>`,
  }),
  decorators: [
    () => ({
      template: '<story />',
      provide: {
        mobileMenuId: ref(''),
        isMobileMenuOpen: ref(false),
        toggleMobileMenu: () => {},
      },
    }),
  ],
}

export const DefaultNavbar = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavbar></UsaNavbar>`,
      },
    },
  },
}

export const MenuButtonLabelNavbar = {
  args: {
    ...defaultProps,
    menuButtonLabel: 'Open Menu',
  },
  name: 'Menu Button Label',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavbar menu-button-label="Open Menu"></UsaNavbar>`,
      },
    },
  },
}

export const DefaultSlotNavbar = {
  args: {
    ...defaultProps,
    default: 'Your Logo Here',
  },
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavbar>Your Logo Here</UsaNavbar>`,
      },
    },
  },
}

export const MenuButtonScopedSlotNavbar = {
  args: {
    ...defaultProps,
    'menu-button': '<em>My {{ menuButtonLabel }}</em>',
  },
  name: 'Menu Button Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavbar><template #menu-button="{ menuButtonLabel }"><em>My {{ menuButtonLabel }}</em></template></UsaNavbar>`,
      },
    },
  },
}

export const CustomClassesNavbar = {
  args: {
    ...defaultProps,
    customClasses: {
      button: ['test-button-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavbar :custom-classes="{ button: ['test-button-class'] }"></UsaNavbar>`,
      },
    },
  },
}
