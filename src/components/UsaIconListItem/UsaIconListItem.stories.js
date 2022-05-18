import UsaIconListItem from './UsaIconListItem.vue'

const defaultProps = {
  // Name is required.
  icon: 'flag',
  title: UsaIconListItem.props.title.default,
  titleTag: UsaIconListItem.props.titleTag.default,
  customClasses: UsaIconListItem.props.customClasses.default(),
}

export default {
  component: UsaIconListItem,
  title: 'Components/UsaIconListItem',
  argTypes: {
    icon: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    titleTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    iconSlot: {
      control: { type: 'text' },
    },
    titleSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    icon: defaultProps.icon,
    title: defaultProps.title,
    titleTag: defaultProps.titleTag,
    customClasses: defaultProps.customClasses,
    iconSlot: '',
    titleSlot: '',
    defaultSlot:
      '<p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p>',
  },
  decorators: [
    () => ({
      template: '<ul class="usa-icon-list"><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaIconListItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaIconListItem
    :icon="icon"
    :title="title"
    :title-tag="titleTag"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.iconSlot}" #icon>${args.iconSlot}</template>
    <template v-if="${!!args.titleSlot}" #title>${args.titleSlot}</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
  </UsaIconListItem>`,
})

export const DefaultIconListItem = DefaultTemplate.bind({})
DefaultIconListItem.args = {
  ...defaultProps,
}
DefaultIconListItem.storyName = 'Default'

export const TitleIconListItem = DefaultTemplate.bind({})
TitleIconListItem.args = {
  ...defaultProps,
  icon: 'bug_report',
  title: 'Icon list item title',
}
TitleIconListItem.storyName = 'Item Title'

export const TitleTagIconListItem = DefaultTemplate.bind({})
TitleTagIconListItem.args = {
  ...defaultProps,
  icon: 'format_size',
  title: 'Icon list item title',
  titleTag: 'h4',
}
TitleTagIconListItem.storyName = 'Custom Title Tag'

export const IconSlotIconListItem = DefaultTemplate.bind({})
IconSlotIconListItem.args = {
  ...defaultProps,
  title: 'Icon list item title',
  iconSlot: `<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#push_pin"></use></svg>`,
}
IconSlotIconListItem.storyName = 'Icon Slot'

export const TitleSlotIconListItem = DefaultTemplate.bind({})
TitleSlotIconListItem.args = {
  ...defaultProps,
  icon: 'directions',
  titleSlot: '<em>Icon slot title</em>',
}
TitleSlotIconListItem.storyName = 'Title Slot'

export const CustomClassesIconListItem = DefaultTemplate.bind({})
CustomClassesIconListItem.args = {
  ...defaultProps,
  icon: 'chat',
  customClasses: {
    icon: ['test-icon-class'],
    content: ['test-content-class'],
    title: ['test-title-class'],
  },
}
CustomClassesIconListItem.storyName = 'Custom Classes'
