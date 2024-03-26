import UsaFooterSecondarySection from './UsaFooterSecondarySection.vue'

const defaultProps = {
  customClasses: UsaFooterSecondarySection.props.customClasses.default(),
}

export default {
  component: UsaFooterSecondarySection,
  title: 'Components/UsaFooterSecondarySection',
  argTypes: {
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaFooterSecondarySection },
    props: Object.keys(UsaFooterSecondarySection.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterSecondarySection :custom-classes="args.customClasses">${args.default}</UsaFooterSecondarySection>`,
  }),
}

export const DefaultFooterSecondarySection = {
  args: {
    ...defaultProps,
    default: 'Footer secondary content here',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterSecondarySection>Footer secondary content here</UsaFooterSecondarySection>`,
      },
    },
  },
}

export const CustomClassesFooterSecondarySection = {
  args: {
    ...defaultProps,
    default: 'Footer secondary content here',
    customClasses: {
      container: ['test-container-class'],
    },
  },
  name: 'Custom CSS Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterSecondarySection :custom-classes="{ container: ['test-container-class'] }">Footer secondary content here</UsaFooterSecondarySection>`,
      },
    },
  },
}
