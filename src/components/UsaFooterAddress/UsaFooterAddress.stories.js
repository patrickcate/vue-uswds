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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    email: defaultProps.email,
    phone: defaultProps.phone,
    phoneUrl: defaultProps.phoneUrl,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterAddress },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterAddress
    :heading="heading"
    :email="email"
    :phone="phone"
    :phoneUrl="phoneUrl"
  >${args.defaultSlot}</UsaFooterAddress>`,
})

export const DefaultFooterAddress = DefaultTemplate.bind({})
DefaultFooterAddress.args = {
  ...defaultProps,
  heading: 'Agency Contact Center',
  email: 'info@agency.gov',
  phone: '(800) 555-GOVT',
  phoneUrl: '1-800-555-5555',
}
DefaultFooterAddress.decorators = [
  () => ({
    template: `<div class="usa-footer">
        <div class="usa-footer__secondary-section">
          <div class="grid-container">
            <div class="usa-footer__contact-links"><story /></div>
          </div>
        </div>
      </div>`,
  }),
]
DefaultFooterAddress.storyName = 'Default'

export const SlimFooterAddress = DefaultTemplate.bind({})
SlimFooterAddress.args = {
  ...defaultProps,
  heading: 'Agency Contact Center',
  email: 'info@agency.gov',
  phone: '(800) 555-GOVT',
  phoneUrl: '1-800-555-5555',
}

SlimFooterAddress.decorators = [
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
]
SlimFooterAddress.storyName = 'Slim Footer'

export const DefaultSlotFooterAddress = DefaultTemplate.bind({})
DefaultSlotFooterAddress.args = {
  ...defaultProps,
  heading: 'Agency Contact Center',
  defaultSlot: '<em>Custom footer address markup here...</em>',
}
DefaultSlotFooterAddress.decorators = [
  () => ({
    template: `<div class="usa-footer">
        <div class="usa-footer__secondary-section">
          <div class="grid-container">
            <div class="usa-footer__contact-links"><story /></div>
          </div>
        </div>
      </div>`,
  }),
]
DefaultSlotFooterAddress.storyName = 'Default Slot'
