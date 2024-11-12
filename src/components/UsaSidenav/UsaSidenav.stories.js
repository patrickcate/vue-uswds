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
    before: '',
    default: '',
    after: '',
  },
  render: args => ({
    components: { UsaSidenav },
    props: Object.keys(UsaSidenav.props),
    setup() {
      return { args }
    },
    template: `<UsaSidenav
    :aria-label="args.ariaLabel"
    :items="args.items"
    :custom-classes="args.customClasses">
      <template v-if="!!args.before" #before>${args.before}</template>
      <template v-if="!!args.default" #default="{ items }">${args.default}</template>
      <template v-if="!!args.after" #after>${args.after}</template>
    </UsaSidenav>`,
  }),
}

export const DefaultSidenav = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenav :items="items"></UsaSidenav>`,
      },
    },
  },
}

export const BeforeSlotSidenav = {
  args: {
    ...defaultProps,
    before: 'Before Sidenav',
  },
  name: 'Before Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenav :items="items"><template #before>Before Sidenav</template></UsaSidenav>`,
      },
    },
  },
}

export const AfterSlotSidenav = {
  args: {
    ...defaultProps,
    after: 'After Sidenav',
  },
  name: 'After Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenav :items="items"><template #after>After Sidenav</template></UsaSidenav>`,
      },
    },
  },
}

export const ScopedSlotSidenav = {
  args: {
    ...defaultProps,
    default: `<li v-for="item in items" :key="item.text">{{ item.to }}</li>`,
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenav :items="items"><template #default="{ items }"><li v-for="item in items" :key="item.text">{{ item.to }}</li></template></UsaSidenav>`,
      },
    },
  },
}

export const CustomClassesSidenav = {
  args: {
    ...defaultProps,
    customClasses: {
      list: ['test-list-class'],
      item: ['test-item-class'],
      link: ['test-link-class'],
      sublist: ['test-sublist-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenav :items="items" :custom-classes="{ list: ['test-list-class'], item: ['test-item-class'], link: ['test-link-class'], sublist: ['test-sublist-class'] }"></UsaSidenav>`,
      },
    },
  },
}
