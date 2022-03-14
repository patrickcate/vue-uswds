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
    primarySlot: {
      control: { type: 'text' },
    },
    secondarySlot: {
      control: { type: 'text' },
    },
    closeButtonSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    closeButtonLabel: defaultProps.closeButtonLabel,
    customClasses: defaultProps.customClasses,
    primarySlot: '<div>Primary nav here</div>',
    secondarySlot: '<div>Secondary nav here</div>',
    closeButtonSlot: '',
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
    <template v-if="${!!args.primarySlot}" #primary>${
    args.primarySlot
  }</template>
    <template v-if="${!!args.secondarySlot}" #secondary>${
    args.secondarySlot
  }</template>
    <template v-if="${!!args.closeButtonSlot}" #close-button="{closeButtonLabel}">${
    args.closeButtonSlot
  }</template>
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
  closeButtonSlot: '<em>Close Me</em>',
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
