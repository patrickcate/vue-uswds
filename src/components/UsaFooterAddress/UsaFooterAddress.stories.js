import UsaFooterAddress from './UsaFooterAddress.vue'

const defaultProps = {
  heading: UsaFooterAddress.props.heading.default,
  email: UsaFooterAddress.props.email.default,
  phone: UsaFooterAddress.props.phone.default,
  phoneUrl: UsaFooterAddress.props.phoneUrl.default,
}

export default {
  component: UsaFooterAddress,
  title: 'Components/UsaFooterAddress',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    email: {
      control: { type: 'text' },
    },
    phone: {
      control: { type: 'text' },
    },
    phoneUrl: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    email: defaultProps.email,
    phone: defaultProps.phone,
    phoneUrl: defaultProps.phoneUrl,
    default: '',
  },
  render: args => ({
    components: { UsaFooterAddress },
    props: Object.keys(UsaFooterAddress.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterAddress
      :heading="args.heading"
      :email="args.email"
      :phone="args.phone"
      :phoneUrl="args.phoneUrl"
    >${args.default}</UsaFooterAddress>`,
  }),
}

export const DefaultFooterAddress = {
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    email: 'info@agency.gov',
    phone: '(800) 555-GOVT',
    phoneUrl: '1-800-555-5555',
  },
  decorators: [
    () => ({
      template: `<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`,
    }),
  ],
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>`,
      },
    },
  },
}

export const SlimFooterAddress = {
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    email: 'info@agency.gov',
    phone: '(800) 555-GOVT',
    phoneUrl: '1-800-555-5555',
  },
  decorators: [
    () => ({
      template: `<div class="usa-footer">
          <div class="usa-footer__primary-section">
            <div class="usa-footer__primary-container grid-row">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`,
      provide: {
        footerVariant: 'slim',
      },
    }),
  ],
  name: 'Slim Footer',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterAddress heading="Agency Contact Center" email="info@agency.gov" phone="(800) 555-GOVT" phoneUrl="1-800-555-5555"></UsaFooterAddress>`,
      },
    },
  },
}

export const DefaultSlotFooterAddress = {
  args: {
    ...defaultProps,
    heading: 'Agency Contact Center',
    default: '<em>Custom footer address markup here...</em>',
  },
  decorators: [
    () => ({
      template: `<div class="usa-footer">
          <div class="usa-footer__secondary-section">
            <div class="grid-container">
              <div class="usa-footer__contact-links"><story /></div>
            </div>
          </div>
        </div>`,
    }),
  ],
  name: 'Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterAddress heading="Agency Contact Center"><em>Custom footer address markup here...</em></UsaFooterAddress>`,
      },
    },
  },
}
