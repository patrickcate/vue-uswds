import UsaBanner from './UsaBanner.vue'

const defaultProps = {
  open: UsaBanner.props.open.default,
  id: UsaBanner.props.id.default,
  ariaLabel: UsaBanner.props.ariaLabel.default,
  headerText: UsaBanner.props.headerText.default,
  actionText: UsaBanner.props.actionText.default,
  customClasses: UsaBanner.props.customClasses.default(),
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
    flag: {
      control: { type: 'text' },
    },
    button: {
      control: { type: 'text' },
    },
    default: {
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
    flag: '',
    button: '',
    default: '',
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
    <template v-if="${!!args.flag}" #flag>${args.flag}</template>
    <template v-if="${!!args.button}" #button>${args.button}</template>
    <template v-if="${!!args.default}" #default>${args.default}</template>
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
  flag: 'Custom Flag Icon',
}
FlagSlotBanner.storyName = 'Flag Slot'

export const ButtonSlotBanner = DefaultTemplate.bind({})
ButtonSlotBanner.args = {
  ...defaultProps,
  button: 'Custom Button Text',
}
ButtonSlotBanner.storyName = 'Button Slot'

export const DefaultSlotBanner = DefaultTemplate.bind({})
DefaultSlotBanner.args = {
  ...defaultProps,
  open: true,
  default: 'Custom Banner Content',
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

export const ActionTextBanner = DefaultTemplate.bind({})
ActionTextBanner.args = {
  ...defaultProps,
  actionText: 'Custom action text',
}
ActionTextBanner.storyName = 'Custom Action Text'
