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
  customClasses: {
    list: [],
    item: [],
    link: [],
    sublist: [],
  },
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
    beforeSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    afterSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    ariaLabel: defaultProps.ariaLabel,
    items: defaultProps.items,
    customClasses: defaultProps.customClasses,
    beforeSlot: '',
    defaultSlot: '',
    afterSlot: '',
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
      <template #before> ${args.beforeSlot}</template>
      <template #default="{ items }"> ${args.defaultSlot}</template>
      <template #after> ${args.afterSlot}</template>
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
  beforeSlot: 'Above Sidenav',
}
BeforeSlotSidenav.storyName = 'Before Slot'

export const AfterSlotSidenav = DefaultTemplate.bind({})
AfterSlotSidenav.args = {
  ...defaultProps,
  afterSlot: 'Below Sidenav',
}
AfterSlotSidenav.storyName = 'After Slot'

export const ScopedSlotSidenav = DefaultTemplate.bind({})
ScopedSlotSidenav.args = {
  ...defaultProps,
  defaultSlot: `<li v-for="item in items" :key="item.text">{{ item.to }}</li>`,
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
