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
      table: {
        category: 'props',
      },
    },
    title: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
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
    'slot:icon': {
      control: { type: 'text' },
      name: 'icon',
      table: {
        category: 'slots',
      },
    },
    'slot:title': {
      control: { type: 'text' },
      name: 'title',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    icon: defaultProps.icon,
    title: defaultProps.title,
    titleTag: defaultProps.titleTag,
    customClasses: defaultProps.customClasses,
    'slot:icon': '',
    'slot:title': '',
    default:
      '<p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p>',
  },
  decorators: [
    () => ({
      template: '<ul class="usa-icon-list"><story /></ul>',
    }),
  ],
  render: args => ({
    components: { UsaIconListItem },
    props: Object.keys(UsaIconListItem.props),
    setup() {
      return { args }
    },
    template: `<UsaIconListItem
    :icon="args.icon"
    :title="args.title"
    :title-tag="args.titleTag"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['slot:icon']" #icon>${args['slot:icon']}</template>
    <template v-if="!!args['slot:title']" #title>${args['slot:title']}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
  </UsaIconListItem>`,
  }),
}

export const DefaultIconListItem = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="flag"><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}

export const TitleIconListItem = {
  args: {
    ...defaultProps,
    icon: 'bug_report',
    title: 'Icon list item title',
  },
  name: 'Item Title',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="bug_report" title="Icon list item title"><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}

export const TitleTagIconListItem = {
  args: {
    ...defaultProps,
    icon: 'format_size',
    title: 'Icon list item title',
    titleTag: 'h4',
  },
  name: 'Custom Title Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="format_size" title="Icon list item title" title-tag="h4"><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}

export const IconSlotIconListItem = {
  args: {
    ...defaultProps,
    title: 'Icon list item title',
    'slot:icon': `<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#push_pin"></use></svg>`,
  },
  name: 'Icon Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="flag" title="Icon list item title"><template #icon><svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#push_pin"></use></svg></template><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}

export const TitleSlotIconListItem = {
  args: {
    ...defaultProps,
    icon: 'directions',
    'slot:title': '<em>Icon slot title</em>',
  },
  name: 'Title Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="directions"><template #title><em>Icon slot title</em></template><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}

export const CustomClassesIconListItem = {
  args: {
    ...defaultProps,
    icon: 'chat',
    customClasses: {
      icon: ['test-icon-class'],
      content: ['test-content-class'],
      title: ['test-title-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaIconListItem icon="chat" :custom-classes="{ icon: ['test-icon-class'], content: ['test-content-class'], title: ['test-title-class'] }"><p>An icon list reinforces the meaning and visibility of individual list items with a leading icon.</p></UsaIconListItem>`,
      },
    },
  },
}
