import UsaAccordion from './UsaAccordion.vue'
import UsaAccordionItem from '@/components/UsaAccordionItem'
import { DefaultAccordionItem } from '@/components/UsaAccordionItem/UsaAccordionItem.stories.js'

const defaultProps = {
  bordered: UsaAccordion.props.bordered.default,
  multiselectable: UsaAccordion.props.multiselectable.default,
  headingTag: UsaAccordion.props.headingTag.default,
}

const defaultItems = `
\t<UsaAccordionItem label="Accordion 1" open>Accordion 1 Content</UsaAccordionItem>
\t<UsaAccordionItem label="Accordion 2">Accordion 2 Content</UsaAccordionItem>
\t<UsaAccordionItem label="Accordion 3">Accordion 3 Content</UsaAccordionItem>`

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
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    bordered: defaultProps.bordered,
    multiselectable: defaultProps.multiselectable,
    headingTag: defaultProps.headingTag,
  },
  render: args => ({
    components: { UsaAccordion, UsaAccordionItem },
    props: Object.keys(UsaAccordion.props),
    setup() {
      return { args }
    },
    template: `
    <UsaAccordion
      :bordered="args.bordered"
      :multiselectable="args.multiselectable"
      :headingTag="args.headingTag"
    >
      \t<UsaAccordionItem label="Accordion 1" open>Accordion 1 Content</UsaAccordionItem>
      \t<UsaAccordionItem label="Accordion 2">Accordion 2 Content</UsaAccordionItem>
      \t<UsaAccordionItem label="Accordion 3">Accordion 3 Content</UsaAccordionItem></UsaAccordion>`,
  }),
}

export const DefaultAccordion = {
  args: {
    ...defaultProps,
    default: DefaultAccordionItem,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>${defaultItems}\n</UsaAccordion>`,
      },
    },
  },
}

export const BorderedAccordion = {
  args: {
    ...defaultProps,
    bordered: true,
  },
  name: 'Bordered',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion :bordered="true">${defaultItems}\n</UsaAccordion>`,
      },
    },
  },
}

export const MultiselectableAccordion = {
  args: {
    ...defaultProps,
    multiselectable: true,
  },
  name: 'Multiselectable',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion :multiselectable="true">${defaultItems}\n</UsaAccordion>`,
      },
    },
  },
}

export const CustomHeadingTagAccordion = {
  args: {
    ...defaultProps,
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion heading-tag="h4">${defaultItems}\n</UsaAccordion>`,
      },
    },
  },
}
