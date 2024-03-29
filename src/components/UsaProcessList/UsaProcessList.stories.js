import UsaProcessList from './UsaProcessList.vue'
import UsaProcessListItem from '@/components/UsaProcessListItem'

const defaultProps = {
  headingTag: UsaProcessList.props.headingTag.default,
}

export default {
  component: UsaProcessList,
  title: 'Components/UsaProcessList',
  argTypes: {
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    headingTag: defaultProps.headingTag,
    default:
      '<UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem>',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaProcessList, UsaProcessListItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaProcessList :heading-tag="headingTag">${args.default}</UsaProcessList>`,
})

export const DefaultProcessList = DefaultTemplate.bind({})
DefaultProcessList.storyName = 'Default'

export const CustomHeadingTagProcessList = DefaultTemplate.bind()
CustomHeadingTagProcessList.args = {
  headingTag: 'h4',
}
CustomHeadingTagProcessList.storyName = 'Custom Heading Tag'
