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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterSecondarySection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterSecondarySection :custom-classes="customClasses">${args.default}</UsaFooterSecondarySection>`,
})

export const DefaultFooterSecondarySection = DefaultTemplate.bind({})
DefaultFooterSecondarySection.args = {
  ...defaultProps,
  default: 'Footer secondary content here',
}
DefaultFooterSecondarySection.storyName = 'Default'

export const CustomClassesFooterSecondarySection = DefaultTemplate.bind({})
CustomClassesFooterSecondarySection.args = {
  ...defaultProps,
  default: 'Footer secondary content here',
  customClasses: {
    container: ['test-container-class'],
  },
}
CustomClassesFooterSecondarySection.storyName = 'Custom CSS Classes'
