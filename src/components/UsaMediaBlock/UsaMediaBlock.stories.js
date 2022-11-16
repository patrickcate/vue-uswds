import UsaMediaBlock from './UsaMediaBlock.vue'

const defaultProps = {
  customClasses: UsaMediaBlock.props.customClasses.default(),
}

export default {
  component: UsaMediaBlock,
  title: 'Components/UsaMediaBlock',
  argTypes: {
    customClasses: {
      control: { type: 'object' },
    },
    media: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    customClasses: defaultProps.customClasses,
    media: 'Media',
    default: 'Body',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaMediaBlock },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `
  <UsaMediaBlock :custom-classes="customClasses">
    <template v-if="${!!args.media}" #media>${args.media}</template>
    <template v-if="${!!args.default}" #default>${args.default}</template>
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
    body: ['test-body-class'],
  },
}
CustomClassesMediaBlock.storyName = 'Custom Classes'
