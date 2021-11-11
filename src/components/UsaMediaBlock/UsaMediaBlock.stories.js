import UsaMediaBlock from './UsaMediaBlock.vue'

const defaultProps = {
  customClasses: {
    media: [],
    body: [],
  },
}

export default {
  component: UsaMediaBlock,
  title: 'Components/UsaMediaBlock',
  argTypes: {
    customClasses: {
      control: { type: 'object' },
    },
    mediaSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    customClasses: defaultProps.customClasses,
    mediaSlot: 'Media',
    defaultSlot: 'Body',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaMediaBlock },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
  <UsaMediaBlock>
    <template #media>${args.mediaSlot}</template>
    <template #default>${args.defaultSlot}</template>
  </UsaMediaBlock>`,
})

export const DefaultMediaBlock = DefaultTemplate.bind({})
DefaultMediaBlock.args = {
  ...defaultProps,
}
DefaultMediaBlock.storyName = 'Default'

export const CustomClassesMediaBlock = DefaultTemplate.bind({})
CustomClassesMediaBlock.args = {
  ...defaultProps,
  customClasses: {
    media: ['test-media-class'],
    default: ['test-body-class'],
  },
}
CustomClassesMediaBlock.storyName = 'Custom Classes'
