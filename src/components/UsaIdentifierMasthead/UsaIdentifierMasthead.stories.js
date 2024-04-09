import UsaIdentifierMasthead from './UsaIdentifierMasthead.vue'

const defaultProps = {
  ariaLabel: UsaIdentifierMasthead.props.ariaLabel.default,
  descriptionAriaLabel:
    UsaIdentifierMasthead.props.descriptionAriaLabel.default,
}

export default {
  component: UsaIdentifierMasthead,
  title: 'Components/UsaIdentifierMasthead',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    descriptionAriaLabel: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    logos: {
      control: { type: 'text' },
    },
    domain: {
      control: { type: 'text' },
    },
    disclaimer: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    descriptionAriaLabel: defaultProps.descriptionAriaLabel,
    default: '',
    logos: '',
    domain: '',
    disclaimer: '',
  },
  decorators: [
    () => ({
      template: '<div class="usa-identifier"><story /></div>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentifierMasthead },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentifierMasthead
    :aria-label="ariaLabel" :description-aria-label="descriptionAriaLabel"
  >
    <template v-if="${!!args.default}" #default>${args.default}</template>
    <template v-if="${!!args.logos}" #logos>${args.logos}</template>
    <template v-if="${!!args.domain}" #domain>${args.domain}</template>
    <template v-if="${!!args.disclaimer}" #disclaimer>${
      args.disclaimer
    }</template>
  </UsaIdentifierMasthead>`,
})

export const DefaultIdentifierMasthead = DefaultTemplate.bind({})
DefaultIdentifierMasthead.args = {
  ...defaultProps,
  default: `Your identifer content here`,
}
DefaultIdentifierMasthead.storyName = 'Default'

export const LogosSlotIdentifierMasthead = DefaultTemplate.bind({})
LogosSlotIdentifierMasthead.args = {
  ...defaultProps,
  logos: `<a href="javascript:void(0);" class="usa-identifier__logo">
  <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
</a>`,
}
LogosSlotIdentifierMasthead.storyName = 'Logos Slot'

export const DomainSlotIdentifierMasthead = DefaultTemplate.bind({})
DomainSlotIdentifierMasthead.args = {
  ...defaultProps,
  domain: `domain.gov`,
}
DomainSlotIdentifierMasthead.storyName = 'Domain Slot'

export const DisclaimerSlotIdentifierMasthead = DefaultTemplate.bind({})
DisclaimerSlotIdentifierMasthead.args = {
  ...defaultProps,
  disclaimer: `An official website of the
  <a href="javascript:void(0);">Parent agency</a>`,
}
DisclaimerSlotIdentifierMasthead.storyName = 'Disclaimer Slot'

export const CustomAriaLabelsIdentifierMasthead = DefaultTemplate.bind({})
CustomAriaLabelsIdentifierMasthead.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
  descriptionAriaLabel: 'Custom description aria label',
  logos: `<a href="javascript:void(0);" class="usa-identifier__logo">
  <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>`,
  domain: `domain.gov`,
  disclaimer: `An official website of the
  <a href="javascript:void(0);">Parent agency</a>`,
}
CustomAriaLabelsIdentifierMasthead.storyName = 'Custom Aria Labels'
