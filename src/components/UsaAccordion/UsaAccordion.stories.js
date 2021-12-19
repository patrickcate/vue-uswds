import UsaAccordion from './UsaAccordion.vue'
import UsaAccordionItem from '@/components/UsaAccordionItem'

const defaultProps = {
  bordered: false,
  multiselectable: false,
  headingTag: 'h2',
}

export default {
  component: UsaAccordion,
  title: 'Components/UsaAccordion',
  argTypes: {
    bordered: {
      control: { type: 'boolean' },
    },
    multiselectable: {
      control: { type: 'boolean' },
    },
    headingTag: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    bordered: defaultProps.bordered,
    multiselectable: defaultProps.multiselectable,
    headingTag: defaultProps.headingTag,
    defaultSlot: `
      <UsaAccordionItem label="Accordion 1" open>Accordion 1 Content</UsaAccordionItem>
      <UsaAccordionItem label="Accordion 2" open>Accordion 2 Content</UsaAccordionItem>
      <UsaAccordionItem label="Accordion 3">Accordion 3 Content</UsaAccordionItem>
      `,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaAccordion, UsaAccordionItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaAccordion
    :bordered="bordered"
    :multiselectable="multiselectable"
    :headingTag="headingTag"
    >${args.defaultSlot}</UsaAccordion>`,
})

export const DefaultAccordion = DefaultTemplate.bind({})
DefaultAccordion.args = {
  ...defaultProps,
}
DefaultAccordion.storyName = 'Default'

export const BorderedAccordion = DefaultTemplate.bind({})
BorderedAccordion.args = {
  ...defaultProps,
  bordered: true,
}
BorderedAccordion.storyName = 'Bordered'

export const MultiselectableAccordion = DefaultTemplate.bind({})
MultiselectableAccordion.args = {
  ...defaultProps,
  multiselectable: true,
}
MultiselectableAccordion.storyName = 'Multiselectable'

export const CustomHeadingTagAccordion = DefaultTemplate.bind({})
CustomHeadingTagAccordion.args = {
  ...defaultProps,
  headingTag: 'h4',
}
CustomHeadingTagAccordion.storyName = 'Custom Heading Tag'
