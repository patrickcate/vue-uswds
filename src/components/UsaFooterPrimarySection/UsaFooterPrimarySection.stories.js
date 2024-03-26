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
  render: args => ({
    components: { UsaFooterPrimarySection },
    props: [],
    setup() {
      return { args }
    },
    template: `<UsaFooterPrimarySection>${args.default}</UsaFooterPrimarySection>`,
  }),
}

export const DefaultFooterPrimarySection = {
  args: {
    default: 'Test primary footer content',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterPrimarySection>Test primary footer content</UsaFooterPrimarySection>`,
      },
    },
  },
}
