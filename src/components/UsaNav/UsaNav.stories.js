import UsaNav from './UsaNav.vue'
import UsaNavbar from '@/components/UsaNavbar'

const defaultProps = {
  ariaLabel: UsaNav.props.ariaLabel.default,
  closeButtonLabel: UsaNav.props.closeButtonLabel.default,
  customClasses: UsaNav.props.customClasses.default(),
}

export default {
  component: UsaNav,
  title: 'Components/UsaNav',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    closeButtonLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    primary: {
      control: { type: 'text' },
    },
    secondary: {
      control: { type: 'text' },
    },
    'close-button': {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    closeButtonLabel: defaultProps.closeButtonLabel,
    customClasses: defaultProps.customClasses,
    primary: '<div>Primary nav here</div>',
    secondary: '<div>Secondary nav here</div>',
    'close-button': '',
  },
  decorators: [
    () => ({
      components: { UsaNavbar },
      template: '<UsaNavbar><story /></UsaNavbar>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNav },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaNav
    :aria-label="ariaLabel"
    :close-button-label="closeButtonLabel"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.primary}" #primary>${args.primary}</template>
    <template v-if="${!!args.secondary}" #secondary>${args.secondary}</template>
    <template v-if="${!!args[
      'close-button'
    ]}" #close-button="{closeButtonLabel}">${args['close-button']}</template>
  </UsaNav>`,
})

export const DefaultNav = DefaultTemplate.bind({})
DefaultNav.args = {
  ...defaultProps,
}
DefaultNav.storyName = 'Default'

export const AriaLabelNav = DefaultTemplate.bind({})
AriaLabelNav.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
}
AriaLabelNav.storyName = 'Custom Aria Label'

export const CloseButtonLabelNav = DefaultTemplate.bind({})
CloseButtonLabelNav.args = {
  ...defaultProps,
  closeButtonLabel: 'Custom aria label',
}
CloseButtonLabelNav.storyName = 'Close Button Label'

export const CloseButtonSlotNav = DefaultTemplate.bind({})
CloseButtonSlotNav.args = {
  ...defaultProps,
  'close-button': '<em>Close Me</em>',
}
CloseButtonSlotNav.storyName = 'Close Button Slot'

export const CustomClassesNav = DefaultTemplate.bind({})
CustomClassesNav.args = {
  ...defaultProps,
  customClasses: {
    button: ['custom-button-class'],
  },
}
CustomClassesNav.storyName = 'Custom Classes'
