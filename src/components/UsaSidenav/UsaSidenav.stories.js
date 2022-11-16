import UsaSidenav from './UsaSidenav.vue'

const defaultProps = {
  ariaLabel: UsaSidenav.props.ariaLabel.default,
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
  customClasses: UsaSidenav.props.customClasses.default(),
}

export default {
  component: UsaSidenav,
  title: 'Components/UsaSidenav',
  argTypes: {
    ariaLabel: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    before: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    after: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    items: defaultProps.items,
    customClasses: defaultProps.customClasses,
    beforebefore: '',
    default: '',
    after: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSidenav },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaSidenav
    :aria-label="ariaLabel"
    :items="items"
    :custom-classes="customClasses">
      <template v-if="${!!args.before}" #before>${args.before}</template>
      <template v-if="${!!args.default}" #default="{ items }">${
    args.default
  }</template>
      <template v-if="${!!args.after}" #after>${args.after}</template>
    </UsaSidenav>`,
})

export const DefaultSidenav = DefaultTemplate.bind({})
DefaultSidenav.args = {
  ...defaultProps,
}
DefaultSidenav.storyName = 'Default'

export const BeforeSlotSidenav = DefaultTemplate.bind({})
BeforeSlotSidenav.args = {
  ...defaultProps,
  before: 'Above Sidenav',
}
BeforeSlotSidenav.storyName = 'Before Slot'

export const AfterSlotSidenav = DefaultTemplate.bind({})
AfterSlotSidenav.args = {
  ...defaultProps,
  after: 'Below Sidenav',
}
AfterSlotSidenav.storyName = 'After Slot'

export const ScopedSlotSidenav = DefaultTemplate.bind({})
ScopedSlotSidenav.args = {
  ...defaultProps,
  default: `<li v-for="item in items" :key="item.text">{{ item.to }}</li>`,
}
ScopedSlotSidenav.storyName = 'Scoped Slot'

export const CustomClassesSidenav = DefaultTemplate.bind({})
CustomClassesSidenav.args = {
  ...defaultProps,
  customClasses: {
    list: ['test-list-class'],
    item: ['test-item-class'],
    link: ['test-link-class'],
    sublist: ['test-sublist-class'],
  },
}
CustomClassesSidenav.storyName = 'Custom Classes'
