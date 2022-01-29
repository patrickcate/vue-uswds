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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIdentiferMoreInfo },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIdentiferMoreInfo
    :aria-label="ariaLabel"
    :description="description"
    :link-text="linkText"
    :link-url="linkUrl"
  />`,
})

export const DefaultIdentiferMoreInfo = DefaultTemplate.bind({})
DefaultIdentiferMoreInfo.args = {
  ...defaultProps,
}
DefaultIdentiferMoreInfo.storyName = 'Default'

export const CustomTextIdentiferMoreInfo = DefaultTemplate.bind({})
CustomTextIdentiferMoreInfo.args = {
  ...defaultProps,
  ariaLabel: 'Custom aria-label',
  description: 'Custom description',
  linkText: 'Custom link',
  linkUrl: '/custom-url',
}
CustomTextIdentiferMoreInfo.storyName = 'Custom Text'
