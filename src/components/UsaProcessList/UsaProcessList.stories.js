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
  render: args => ({
    components: { UsaProcessList, UsaProcessListItem },
    props: Object.keys(UsaProcessList.props),
    setup() {
      return { args }
    },
    template: `<UsaProcessList :heading-tag="args.headingTag">${args.default}</UsaProcessList>`,
  }),
}

export const DefaultProcessList = {
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessList><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>`,
      },
    },
  },
}

export const CustomHeadingTagProcessList = {
  args: {
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaProcessList heading-tag="h4"><UsaProcessListItem heading="Test step 1"><p>Test body.</p></UsaProcessListItem></UsaProcessList>`,
      },
    },
  },
}
