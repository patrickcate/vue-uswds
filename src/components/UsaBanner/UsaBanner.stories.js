import UsaBanner from './UsaBanner.vue'

const defaultProps = {
  open: false,
  id: '',
  ariaLabel: 'Official government website',
  headerText: 'An official website of the United States government',
  actionText: "Here's how you know",
  customClasses: {
    accordion: [],
    bannerHeader: [],
    bannerInner: [],
    button: [],
    bannerContent: [],
  },
}

export default {
  component: UsaBanner,
  title: 'Components/UsaBanner',
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    id: {
      control: { type: 'text' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    headerText: {
      control: { type: 'text' },
    },
    actionText: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    flagSlot: {
      control: { type: 'text' },
    },
    buttonSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    open: defaultProps.open,
    id: defaultProps.id,
    ariaLabel: defaultProps.ariaLabel,
    headerText: defaultProps.headerText,
    actionText: defaultProps.actionText,
    customClasses: defaultProps.customClasses,
    flagSlot: '',
    buttonSlot: '',
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaBanner },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaBanner
    :id="id"
    :open="open"
    :ariaLabel="ariaLabel"
    :headerText="headerText"
    :actionText="actionText"
    :customClasses="customClasses"
  >
    <template #flag>${args.flagSlot}</template>
    <template #button>${args.buttonSlot}</template>
    <template #default>${args.defaultSlot}</template>
  </UsaBanner>`,
})

export const DefaultBanner = DefaultTemplate.bind({})
DefaultBanner.args = {
  ...defaultProps,
}
DefaultBanner.storyName = 'Default'

export const DefaultOpenBanner = DefaultTemplate.bind({})
DefaultOpenBanner.args = {
  ...defaultProps,
  open: true,
}
DefaultOpenBanner.storyName = 'Open by Default'

export const CustomIdBanner = DefaultTemplate.bind({})
CustomIdBanner.args = {
  ...defaultProps,
  id: 'custom-id',
}
CustomIdBanner.storyName = 'Custom ID'

export const FlagSlotBanner = DefaultTemplate.bind({})
FlagSlotBanner.args = {
  ...defaultProps,
  flagSlot: 'Custom Flag Icon',
}
FlagSlotBanner.storyName = 'Flag Slot'

export const ButtonSlotBanner = DefaultTemplate.bind({})
ButtonSlotBanner.args = {
  ...defaultProps,
  buttonSlot: 'Custom Button Text',
}
ButtonSlotBanner.storyName = 'Button Slot'

export const DefaultSlotBanner = DefaultTemplate.bind({})
DefaultSlotBanner.args = {
  ...defaultProps,
  open: true,
  defaultSlot: 'Custom Banner Content',
}
DefaultSlotBanner.storyName = 'Default Slot'

export const CustomClassesBanner = DefaultTemplate.bind({})
CustomClassesBanner.args = {
  ...defaultProps,
  customClasses: {
    accordion: ['custom-accordion-class'],
    bannerHeader: ['custom-banner-header-class'],
    bannerInner: ['custom-banner-inner-class'],
    button: ['custom-button-class'],
    bannerContent: ['custom-banner-content-class'],
  },
}
CustomClassesBanner.storyName = 'Custom Classes'

export const AriaLabelBanner = DefaultTemplate.bind({})
AriaLabelBanner.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
}
AriaLabelBanner.storyName = 'Custom Aria Label'

export const HeaderTextBanner = DefaultTemplate.bind({})
HeaderTextBanner.args = {
  ...defaultProps,
  headerText: 'Custom header text',
}
HeaderTextBanner.storyName = 'Custom Header Text'

export const ActionTextlBanner = DefaultTemplate.bind({})
ActionTextlBanner.args = {
  ...defaultProps,
  actionText: 'Custom action text',
}
ActionTextlBanner.storyName = 'Custom Action Text'
