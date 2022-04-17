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
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterSecondarySection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterSecondarySection :custom-classes="customClasses">${args.defaultSlot}</UsaFooterSecondarySection>`,
})

export const DefaultFooterSecondarySection = DefaultTemplate.bind({})
DefaultFooterSecondarySection.args = {
  ...defaultProps,
  defaultSlot: 'Footer secondary content here',
}
DefaultFooterSecondarySection.storyName = 'Default'

export const CustomClassesFooterSecondarySection = DefaultTemplate.bind({})
CustomClassesFooterSecondarySection.args = {
  ...defaultProps,
  defaultSlot: 'Footer secondary content here',
  customClasses: {
    container: ['test-container-class'],
  },
}
CustomClassesFooterSecondarySection.storyName = 'Custom CSS Classes'
