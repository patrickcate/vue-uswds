import UsaAccordionItem from './UsaAccordionItem.vue'
import UsaAccordion from '@/components/UsaAccordion'

const defaultProps = {
  id: UsaAccordionItem.props.id.default,
  label: UsaAccordionItem.props.label.default,
  open: UsaAccordionItem.props.open.default,
  customClasses: UsaAccordionItem.props.customClasses.default(),
}

export default {
  component: UsaAccordionItem,
  title: 'Components/UsaAccordionItem',
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    open: {
      control: { type: 'boolean' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'slot:label': {
      control: { type: 'text' },
      name: 'label',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    label: defaultProps.label,
    open: defaultProps.open,
    customClasses: defaultProps.customClasses,
    'slot:label': '',
    default: '',
  },
  render: args => ({
    components: { UsaAccordion, UsaAccordionItem },
    props: Object.keys(UsaAccordionItem.props),
    setup() {
      return { args }
    },
    template: `<UsaAccordionItem :id="args.id" :label="args.label" :open="args.open" :custom-classes="args.customClasses">
      <template #label>{{ args['slot:label'] }}</template>
      <template #default>{{ args.default }}</template>
    </UsaAccordionItem>`,
  }),
  decorators: [
    story => ({
      components: { story, UsaAccordion },
      template: '<UsaAccordion><story /></UsaAccordion>',
    }),
  ],
}

export const DefaultAccordionItem = {
  args: {
    ...defaultProps,
    label: 'Accordion 1',
    default: 'Accordion 1 Content',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>\n\t<UsaAccordionItem label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\n</UsaAccordion>`,
      },
    },
  },
}

export const LabelSlotAccordionItem = {
  args: {
    ...defaultProps,
    'slot:label': 'Custom Label',
    default: 'Accordion 1 Content',
  },
  name: 'Label Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>\n\t<UsaAccordionItem>\n\t\t<template #label>Custom Label</template>\n\t\t<template #default>Accordion 1 Content</template>\n\t</UsaAccordionItem>\n</UsaAccordion>`,
      },
    },
  },
}

export const DefaultOpenAccordionItem = {
  args: {
    ...defaultProps,
    open: true,
    label: 'Accordion 1',
    default: 'Accordion 1 Content',
  },
  name: 'Open by Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>\n\t<UsaAccordionItem :open="true" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\n</UsaAccordion>`,
      },
    },
  },
}

export const CustomIdAccordionItem = {
  args: {
    ...defaultProps,
    id: 'custom-id',
    label: 'Accordion 1',
    default: 'Accordion 1 Content',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>\n\t<UsaAccordionItem id="custom-id" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\n</UsaAccordion>`,
      },
    },
  },
}

export const CustomClassesAccordionItem = {
  args: {
    ...defaultProps,
    customClasses: {
      heading: ['custom-heading-class'],
      button: ['custom-button-class'],
      content: ['custom-content-class'],
    },
    label: 'Accordion 1',
    default: 'Accordion 1 Content',
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaAccordion>\n\t<UsaAccordionItem :custom-classes="{ heading: ['custom-heading-class'] }" label="Accordion 1">Accordion 1 Content</UsaAccordionItem>\n</UsaAccordion>`,
      },
    },
  },
}
