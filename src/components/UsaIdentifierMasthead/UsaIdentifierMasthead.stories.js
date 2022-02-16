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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    descriptionAriaLabel: defaultProps.descriptionAriaLabel,
    defaultSlot: '',
    logosSlot: '',
    domainSlot: '',
    disclaimerSlot: '',
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
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.logosSlot}" #logos>${args.logosSlot}</template>
    <template v-if="${!!args.domainSlot}" #domain>${args.domainSlot}</template>
    <template v-if="${!!args.disclaimerSlot}" #disclaimer>${
    args.disclaimerSlot
  }</template>
  </UsaIdentifierMasthead>`,
})

export const DefaultIdentifierMasthead = DefaultTemplate.bind({})
DefaultIdentifierMasthead.args = {
  ...defaultProps,
  defaultSlot: `Your identifer content here`,
}
DefaultIdentifierMasthead.storyName = 'Default'

export const LogosSlotIdentifierMasthead = DefaultTemplate.bind({})
LogosSlotIdentifierMasthead.args = {
  ...defaultProps,
  logosSlot: `<a href="javascript:void(0);" class="usa-identifier__logo">
  <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
</a>`,
}
LogosSlotIdentifierMasthead.storyName = 'Logos Slot'

export const DomainSlotIdentifierMasthead = DefaultTemplate.bind({})
DomainSlotIdentifierMasthead.args = {
  ...defaultProps,
  domainSlot: `domain.gov`,
}
DomainSlotIdentifierMasthead.storyName = 'Domain Slot'

export const DisclaimerSlotIdentifierMasthead = DefaultTemplate.bind({})
DisclaimerSlotIdentifierMasthead.args = {
  ...defaultProps,
  disclaimerSlot: `An official website of the
  <a href="javascript:void(0);">Parent agency</a>`,
}
DisclaimerSlotIdentifierMasthead.storyName = 'Disclaimer Slot'

export const CustomAriaLabelsIdentifierMasthead = DefaultTemplate.bind({})
CustomAriaLabelsIdentifierMasthead.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria label',
  descriptionAriaLabel: 'Custom description aria label',
  logosSlot: `<a href="javascript:void(0);" class="usa-identifier__logo">
  <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>`,
  domainSlot: `domain.gov`,
  disclaimerSlot: `An official website of the
  <a href="javascript:void(0);">Parent agency</a>`,
}
CustomAriaLabelsIdentifierMasthead.storyName = 'Custom Aria Labels'
