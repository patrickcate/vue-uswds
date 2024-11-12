import UsaIdentiferMoreInfo from './UsaIdentiferMoreInfo.vue'

const defaultProps = {
  ariaLabel: UsaIdentiferMoreInfo.props.ariaLabel.default,
  description: UsaIdentiferMoreInfo.props.description.default,
  linkText: UsaIdentiferMoreInfo.props.linkText.default,
  linkUrl: UsaIdentiferMoreInfo.props.linkUrl.default,
}

export default {
  component: UsaIdentiferMoreInfo,
  title: 'Components/UsaIdentiferMoreInfo',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
    },
    linkUrl: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    description: defaultProps.description,
    linkText: defaultProps.linkText,
    linkUrl: defaultProps.linkUrl,
  },
  decorators: [
    () => ({
      template: '<div class="usa-identifier"><story /></div>',
    }),
  ],
  render: args => ({
    components: { UsaIdentiferMoreInfo },
    props: Object.keys(UsaIdentiferMoreInfo.props),
    setup() {
      return { args }
    },
    template: `<UsaIdentiferMoreInfo
      :aria-label="args.ariaLabel"
      :description="args.description"
      :link-text="args.linkText"
      :link-url="args.linkUrl"
    />`,
  }),
}

export const DefaultIdentiferMoreInfo = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentiferMoreInfo></UsaIdentiferMoreInfo>`,
      },
    },
  },
}

export const CustomTextIdentiferMoreInfo = {
  args: {
    ...defaultProps,
    ariaLabel: 'Custom aria-label',
    description: 'Custom description',
    linkText: 'Custom link',
    linkUrl: '/custom-url',
  },
  name: 'Custom Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaIdentiferMoreInfo aria-label="Custom aria-label" description="Custom description" link-text="Custom link" link-url="/custom-url"></UsaIdentiferMoreInfo>`,
      },
    },
  },
}
