import UsaIconList from './UsaIconList.vue'
import UsaIconListItem from '@/components/UsaIconListItem'

const defaultProps = {
  color: UsaIconList.props.color.default,
  size: UsaIconList.props.size.default,
}

export default {
  component: UsaIconList,
  title: 'Components/UsaIconList',
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    color: defaultProps.color,
    size: defaultProps.size,
    default: `<UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem>`,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIconList, UsaIconListItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIconList
    :color="color"
    :size="size"
  >${args.default}</UsaIconList>`,
})

export const DefaultIconList = DefaultTemplate.bind({})
DefaultIconList.args = {
  ...defaultProps,
}
DefaultIconList.storyName = 'Default'

export const ColorIconList = DefaultTemplate.bind({})
ColorIconList.args = {
  ...defaultProps,
  color: 'success',
}
ColorIconList.storyName = 'Color'

export const SingleSizeIconList = DefaultTemplate.bind({})
SingleSizeIconList.args = {
  ...defaultProps,
  size: 'lg',
}
SingleSizeIconList.storyName = 'Single Size'

export const ResponsiveSizesIconList = DefaultTemplate.bind({})
ResponsiveSizesIconList.args = {
  ...defaultProps,
  size: {
    mobile: 'lg',
    tablet: 'xl',
    desktop: '2xl',
  },
}
ResponsiveSizesIconList.storyName = 'Responsive Sizes'
