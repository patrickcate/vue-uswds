import UsaProcessList from './UsaProcessList.vue'

export default {
  component: UsaProcessList,
  title: 'Components/UsaProcessList',
  argTypes: {
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    defaultSlot: '<li>Test</li>',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaProcessList },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaProcessList>${args.defaultSlot}</UsaProcessList>`,
})

export const DefaultProcessList = DefaultTemplate.bind({})
DefaultProcessList.storyName = 'Default'
