import UsaSidenavSublist from './UsaSidenavSublist.vue'

const defaultProps = {
  items: [
    {
      to: '/test-page-1',
      text: 'Test Page 1',
    },
    {
      to: '/test-page-2',
      text: 'Test Page 2',
      children: [
        {
          to: '/test-page-2-1',
          text: 'Test Page 2.1',
        },
        {
          to: '/test-page-2-2',
          text: 'Test Page 2.2',
        },
      ],
    },
    {
      to: '/test-page-3',
      text: 'Test Page 3',
    },
  ],
  customClasses: {
    item: [],
    link: [],
    sublist: [],
  },
}

export default {
  component: UsaSidenavSublist,
  title: 'Components/UsaSidenavSublist',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.items,
    customClasses: defaultProps.customClasses,
    defaultSlot: '',
  },
  decorators: [
    () => ({
      template:
        '<ul class="usa-sidenav"><li class="usa-sidenav__item"><a href="/parent-page">Parent Page</a></li><story /></ul>',
    }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSidenavSublist },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaSidenavSublist :items="items" :custom-classes="customClasses"><template v-if="${!!args.defaultSlot}" #default="{ items }">${
    args.defaultSlot
  }</template></UsaSidenavSublist>`,
})

export const DefaultSidenavSublist = DefaultTemplate.bind({})
DefaultSidenavSublist.args = {
  ...defaultProps,
}
DefaultSidenavSublist.storyName = 'Default'

export const CustomClassesSidenavSublist = DefaultTemplate.bind({})
CustomClassesSidenavSublist.args = {
  ...defaultProps,
  customClasses: {
    item: ['test-item-class'],
    link: ['test-link-class'],
    sublist: ['test-sublist-class'],
  },
}
CustomClassesSidenavSublist.storyName = 'Custom Classes'

export const ScopedSlotSidenavSublist = DefaultTemplate.bind({})
ScopedSlotSidenavSublist.args = {
  ...defaultProps,
  defaultSlot: `<li v-for="item in items" :key="item.text">{{ item.to }}</li>`,
}
ScopedSlotSidenavSublist.storyName = 'Scoped Slot'
