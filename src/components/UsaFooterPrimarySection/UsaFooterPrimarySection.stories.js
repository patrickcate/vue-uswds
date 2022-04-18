import UsaFooterPrimarySection from './UsaFooterPrimarySection.vue'

export default {
  component: UsaFooterPrimarySection,
  title: 'Components/UsaFooterPrimarySection',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterPrimarySection },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterPrimarySection>${args.defaultSlot}</UsaFooterPrimarySection>`,
})

export const DefaultFooterPrimarySection = DefaultTemplate.bind({})
DefaultFooterPrimarySection.args = {
  defaultSlot: 'Test primary footer content',
}
DefaultFooterPrimarySection.storyName = 'Default'
