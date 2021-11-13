import UsaProcessList from '@/components/UsaProcessList'
import UsaProcessListItem from './UsaProcessListItem.vue'

const defaultProps = {
  heading: '',
  headingTag: 'h2',
  customClasses: {
    heading: [],
  },
}

export default {
  component: UsaProcessListItem,
  title: 'Components/UsaProcessListItem',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    headingSlot: '',
    defaultSlot:
      '<p>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.</p>',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaProcessList, UsaProcessListItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
    <UsaProcessList>
      <UsaProcessListItem :heading="heading" :heading-tag="headingTag" :custom-classes="customClasses">
        <template #heading>${args.headingSlot}</template>
        <template #default>${args.defaultSlot}</template>
      </UsaProcessListItem>
    </UsaProcessList>
  `,
})

export const DefaultProcessListItem = DefaultTemplate.bind({})
DefaultProcessListItem.args = {
  ...defaultProps,
  heading: 'Start a process',
}
DefaultProcessListItem.storyName = 'Default'

export const CustomHeadingTagProcessListItem = DefaultTemplate.bind({})
CustomHeadingTagProcessListItem.args = {
  ...defaultProps,
  heading: 'Start a process',
  headingTag: 'h4',
}
CustomHeadingTagProcessListItem.storyName = 'Custom Heading Tag'

export const CustomClassesProcessListItem = DefaultTemplate.bind({})
CustomClassesProcessListItem.args = {
  ...defaultProps,
  heading: 'Start a process',
  customClasses: {
    heading: ['test-heading-class'],
  },
}
CustomClassesProcessListItem.storyName = 'Custom Classes'

export const HeadingSlotProcessListItem = DefaultTemplate.bind({})
HeadingSlotProcessListItem.args = {
  ...defaultProps,
  headingSlot: 'Custom Heading Slot',
}
HeadingSlotProcessListItem.storyName = 'Heading Slot'
