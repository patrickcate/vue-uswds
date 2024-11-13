import UsaProcessList from '@/components/UsaProcessList'
import UsaProcessListItem from './UsaProcessListItem.vue'

const defaultProps = {
  heading: UsaProcessListItem.props.heading.default,
  headingTag: UsaProcessListItem.props.headingTag.default,
  customClasses: UsaProcessListItem.props.customClasses.default(),
}

export default {
  component: UsaProcessListItem,
  title: 'Components/UsaProcessListItem',
  argTypes: {
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    'slot:heading': '',
    default:
      '<p>Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.</p>',
  },
  render: args => ({
    components: { UsaProcessList, UsaProcessListItem },
    props: Object.keys(UsaProcessListItem.props),
    setup() {
      return { args }
    },
    template: `
    <UsaProcessList>
      <UsaProcessListItem :heading="args.heading" :heading-tag="args.headingTag" :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
        <template v-if="!!args.default" #default>${args.default}</template>
      </UsaProcessListItem>
    </UsaProcessList>
  `,
  }),
}

export const DefaultProcessListItem = {
  args: {
    ...defaultProps,
    heading: 'Start a process',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessListItem heading="Start a process"></UsaProcessListItem>`,
      },
    },
  },
}

export const CustomHeadingTagProcessListItem = {
  args: {
    ...defaultProps,
    heading: 'Start a process',
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessListItem heading="Start a process" heading-tag="h4"></UsaProcessListItem>`,
      },
    },
  },
}

export const CustomClassesProcessListItem = {
  args: {
    ...defaultProps,
    heading: 'Start a process',
    customClasses: {
      heading: ['test-heading-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessListItem heading="Start a process" :custom-classes="{'heading': ['test-heading-class']}"></UsaProcessListItem>`,
      },
    },
  },
}

export const HeadingSlotProcessListItem = {
  args: {
    ...defaultProps,
    'slot:heading': 'Custom Heading Slot',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessListItem>\n\t<template #heading>Custom Heading Slot</template>\n</UsaProcessListItem>`,
      },
    },
  },
}
