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
  render: args => ({
    components: { UsaIdentifierMasthead },
    props: Object.keys(UsaIdentifierMasthead.props),
    setup() {
      return { args }
    },
    template: `<UsaIdentifierMasthead
    :aria-label="args.ariaLabel" :description-aria-label="args.descriptionAriaLabel"
  >
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args.logos" #logos>${args.logos}</template>
    <template v-if="!!args.domain" #domain>${args.domain}</template>
    <template v-if="!!args.disclaimer" #disclaimer>${args.disclaimer}</template>
  </UsaIdentifierMasthead>`,
  }),
}

export const DefaultIdentifierMasthead = {
  args: {
    ...defaultProps,
    default: `Your identifer content here`,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierMasthead>Your identifer content here</UsaIdentifierMasthead>`,
      },
    },
  },
}

export const LogosSlotIdentifierMasthead = {
  args: {
    ...defaultProps,
    logos: `<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a>`,
  },
  name: 'Logos Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierMasthead><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
  </a></template></UsaIdentifierMasthead>
       `,
      },
    },
  },
}

export const DomainSlotIdentifierMasthead = {
  args: {
    ...defaultProps,
    domain: `domain.gov`,
  },
  name: 'Domain Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierMasthead><template #domain>domain.gov</template></UsaIdentifierMasthead>`,
      },
    },
  },
}

export const DisclaimerSlotIdentifierMasthead = {
  args: {
    ...defaultProps,
    disclaimer: `An official website of the
    <a href="javascript:void(0);">Parent agency</a>`,
  },
  name: 'Disclaimer Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierMasthead><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>`,
      },
    },
  },
}

export const CustomAriaLabelsIdentifierMasthead = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria label',
    descriptionAriaLabel: 'Custom description aria label',
    logos: `<a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a>`,
    domain: `domain.gov`,
    disclaimer: `An official website of the
    <a href="javascript:void(0);">Parent agency</a>`,
  },
  name: 'Custom Aria Labels',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentifierMasthead aria-label="Custom aria label" description-aria-label="Custom description aria label"><template #logos><a href="javascript:void(0);" class="usa-identifier__logo">
    <img class="usa-identifier__logo-img" src="/assets/img/circle-gray-20.svg" alt="Parent agency logo" role="img">
    </a></template><template #domain>domain.gov</template><template #disclaimer>An official website of the <a href="javascript:void(0);">Parent agency</a></template></UsaIdentifierMasthead>`,
      },
    },
  },
}
