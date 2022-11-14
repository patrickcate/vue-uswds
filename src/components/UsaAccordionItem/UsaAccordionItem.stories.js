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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaAccordion, UsaAccordionItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaAccordion>
    <UsaAccordionItem :id="id" :label="label" :open="open" :custom-classes="customClasses">
      <template v-if="${!!args['slot:label']}" #label>${
    args['slot:label']
  }</template>
      <template v-if="${!!args.default}" #default>${args.default}</template>
    </UsaAccordionItem>
  </UsaAccordion>`,
})

export const DefaultAccordionItem = DefaultTemplate.bind({})
DefaultAccordionItem.args = {
  ...defaultProps,
  label: 'Accordion 1',
  default: 'Accordion 1 Content',
}
DefaultAccordionItem.storyName = 'Default'

export const LabelSlotAccordionItem = DefaultTemplate.bind({})
LabelSlotAccordionItem.args = {
  ...defaultProps,
  'slot:label': 'Custom Label',
  default: 'Accordion 1 Content',
}
LabelSlotAccordionItem.storyName = 'Label Slot'

export const DefaultOpenAccordionItem = DefaultTemplate.bind({})
DefaultOpenAccordionItem.args = {
  ...defaultProps,
  open: true,
  label: 'Accordion 1',
  default: 'Accordion 1 Content',
}
DefaultOpenAccordionItem.storyName = 'Open by Default'

export const CustomIdAccordionItem = DefaultTemplate.bind({})
CustomIdAccordionItem.args = {
  ...defaultProps,
  id: 'custom-id',
  label: 'Accordion 1',
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
  label: 'Accordion 1',
  default: 'Accordion 1 Content',
}
CustomClassesAccordionItem.storyName = 'Custom Classes'
