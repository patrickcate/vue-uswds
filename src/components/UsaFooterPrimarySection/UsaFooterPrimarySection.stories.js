import UsaFooterPrimarySection from './UsaFooterPrimarySection.vue'

export default {
  component: UsaFooterPrimarySection,
  title: 'Components/UsaFooterPrimarySection',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterPrimarySection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterPrimarySection>${args.default}</UsaFooterPrimarySection>`,
})

export const DefaultFooterPrimarySection = DefaultTemplate.bind({})
DefaultFooterPrimarySection.args = {
  default: 'Test primary footer content',
}
DefaultFooterPrimarySection.storyName = 'Default'
