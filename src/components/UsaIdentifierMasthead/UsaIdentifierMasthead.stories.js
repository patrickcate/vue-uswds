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
    <template #default>${args.defaultSlot}</template>
    <template #logos>${args.logosSlot}</template>
    <template #domain>${args.domainSlot}</template>
    <template #disclaimer>${args.disclaimerSlot}</template>
  </UsaIdentifierMasthead>`,
})

export const DefaultIdentifierMasthead = DefaultTemplate.bind({})
DefaultIdentifierMasthead.args = {
  ...defaultProps,
  defaultSlot: `<div class="usa-identifier__logos">
      <a href="javascript:void(0);" class="usa-identifier__logo">
        <img class="usa-identifier__logo-img" src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
      </a>
    </div>
    <div class="usa-identifier__identity" aria-label="Agency description">
      <p class="usa-identifier__identity-domain">domain.gov</p>
      <p class="usa-identifier__identity-disclaimer">
        An official website of the
        <a href="javascript:void(0);">Parent agency</a>
      </p>
    </div>`,
}
DefaultIdentifierMasthead.storyName = 'Default'

export const LogosSlotIdentifierMasthead = DefaultTemplate.bind({})
LogosSlotIdentifierMasthead.args = {
  ...defaultProps,
  logosSlot: `<a href="javascript:void(0);" class="usa-identifier__logo">
  <img class="usa-identifier__logo-img" src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
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
  <img class="usa-identifier__logo-img" src="https://designsystem.digital.gov/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>`,
  domainSlot: `domain.gov`,
  disclaimerSlot: `An official website of the
  <a href="javascript:void(0);">Parent agency</a>`,
}
CustomAriaLabelsIdentifierMasthead.storyName = 'Custom Aria Labels'
