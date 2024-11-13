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
  render: args => ({
    components: { UsaIconList, UsaIconListItem },
    props: Object.keys(UsaIconList.props),
    setup() {
      return { args }
    },
    template: `<UsaIconList
    :color="args.color"
    :size="args.size"
  >${args.default}</UsaIconList>`,
  }),
}

export const DefaultIconList = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconList><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>`,
      },
    },
  },
}

export const ColorIconList = {
  args: {
    ...defaultProps,
    color: 'success',
  },
  name: 'Color',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconList color="success"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconList>`,
      },
    },
  },
}

export const SingleSizeIconList = {
  args: {
    ...defaultProps,
    size: 'lg',
  },
  name: 'Single Size',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconsList size="lg"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>`,
      },
    },
  },
}

export const ResponsiveSizesIconList = {
  args: {
    ...defaultProps,
    size: {
      mobile: 'lg',
      tablet: 'xl',
      desktop: '2xl',
    },
  },
  name: 'Responsive Sizes',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconsList :size="{ mobile: 'lg', tablet: 'xl', desktop: '2xl' }"><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem><UsaIconListItem icon="check_circle">Icon list item</UsaIconListItem></UsaIconsList>`,
      },
    },
  },
}
