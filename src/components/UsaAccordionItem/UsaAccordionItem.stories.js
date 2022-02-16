import UsaAccordionItem from './UsaAccordionItem.vue'
import UsaAccordion from '@/components/UsaAccordion'

const defaultProps = {
  label: 'Accordion 1',
  headingTag: 'h2',
  open: false,
  customClasses: {
    heading: [],
    button: [],
    content: [],
  },
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
    },
    open: {
      control: { type: 'boolean' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    labelSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    id: '',
    label: defaultProps.label,
    open: defaultProps.open,
    customClasses: defaultProps.customClasses,
    labelSlot: '',
    defaultSlot: 'Accordion 1 Content',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaAccordion, UsaAccordionItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaAccordion>
    <UsaAccordionItem :id="id" :label="label" :open="open" :custom-classes="customClasses">
      <template v-if="${!!args.labelSlot}" #label>${args.labelSlot}</template>
      <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    </UsaAccordionItem>
  </UsaAccordion>`,
})

export const DefaultAccordionItem = DefaultTemplate.bind({})
DefaultAccordionItem.args = {
  ...defaultProps,
}
DefaultAccordionItem.storyName = 'Default'

export const LabelSlotAccordionItem = DefaultTemplate.bind({})
LabelSlotAccordionItem.args = {
  ...defaultProps,
  labelSlot: 'Custom Label',
}
LabelSlotAccordionItem.storyName = 'Label Slot'

export const DefaultOpenAccordionItem = DefaultTemplate.bind({})
DefaultOpenAccordionItem.args = {
  ...defaultProps,
  open: true,
}
DefaultOpenAccordionItem.storyName = 'Open by Default'

export const CustomIdAccordionItem = DefaultTemplate.bind({})
CustomIdAccordionItem.args = {
  ...defaultProps,
  id: 'custom-id',
}
CustomIdAccordionItem.storyName = 'Custom ID'

export const CustomClassesAccordionItem = DefaultTemplate.bind({})
CustomClassesAccordionItem.args = {
  ...defaultProps,
  customClasses: {
    heading: ['custom-heading-class'],
    button: ['custom-button-class'],
    content: ['custom-content-class'],
  },
}
CustomClassesAccordionItem.storyName = 'Custom Classes'
