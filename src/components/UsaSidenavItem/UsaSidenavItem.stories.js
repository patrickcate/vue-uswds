import UsaSidenavItem from './UsaSidenavItem.vue'

const defaultProps = {
  item: {
    to: '/test-page-1',
    text: 'Test Page 1',
  },
  customClasses: UsaSidenavItem.props.customClasses.default(),
}

export default {
  component: UsaSidenavItem,
  title: 'Components/UsaSidenavItem',
  argTypes: {
    item: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    sublist: {
      control: { type: 'text' },
    },
  },
  args: {
    item: defaultProps.item,
    customClasses: defaultProps.customClasses,
    default: '',
    sublist: '',
  },
  decorators: [() => ({ template: '<ul class="usa-sidenav"><story /></ul>' })],
  render: args => ({
    components: { UsaSidenavItem },
    props: Object.keys(UsaSidenavItem.props),
    setup() {
      return { args }
    },
    template: `<UsaSidenavItem :item="args.item" :custom-classes="args.customClasses"><template v-if="!!args.default" #default="{ item }">${args.default}</template><template v-if="!!args.sublist" #sublist="{ sublist }">${args.sublist}</template></UsaSidenavItem>`,
  }),
}

export const DefaultSidenavItem = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenavItem :item="item"></UsaSidenavItem>`,
      },
    },
  },
}

export const CustomClassesSidenavItem = {
  args: {
    ...defaultProps,
    item: {
      to: '/test-page-1',
      text: 'Test Page 1',
      children: [
        {
          to: '/test-page-1-1',
          text: 'Test Page 1.1',
        },
        {
          to: '/test-page-1-2',
          text: 'Test Page 1.2',
        },
        {
          to: '/test-page-1-3',
          text: 'Test Page 1.3',
        },
      ],
    },
    customClasses: {
      item: ['test-item-class'],
      link: ['test-link-class'],
      sublist: ['test-sublist-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenavItem :item="item" :custom-classes="{ item: 'test-item-class', link: 'test-link-class', sublist: 'test-sublist-class' }"></UsaSidenavItem>`,
      },
    },
  },
}

export const SublistSidenavItem = {
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page',
      children: [
        {
          to: '/parent-page/sublist',
          text: 'Sublist',
        },
      ],
    },
  },
  name: 'With Sublist',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenavItem :item="{
            to: '/parent-page',
            text: 'Parent page',
            children: [
                {
                to: '/parent-page/sublist',
                text: 'Sublist',
                },
            ],
        }"></UsaSidenavItem>`,
      },
    },
  },
}

export const ScopedDefaultSlotSidenavItem = {
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page',
    },
    default: `<strong>{{ item.to }} &rarr;</strong>`,
  },
  name: 'Scoped Default Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page' }"><template #default="{ item }"><strong>{{ item.to }} &rarr;</strong></template></UsaSidenavItem>`,
      },
    },
  },
}

export const ScopedSublistSlotSidenavItem = {
  args: {
    ...defaultProps,
    item: {
      to: '/parent-page',
      text: 'Parent page',
      children: [
        {
          to: '/parent-page/sublist',
          text: 'Sublist',
        },
      ],
    },
    sublist: `<li>{{ sublist[0].text }} &rarr;</li>`,
  },
  name: 'Scoped Sublist Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSidenavItem :item="{ to: '/parent-page', text: 'Parent page', children: [{ to: '/parent-page/sublist', text: 'Sublist' }]}"><template #sublist="{ sublist }"><li>{{ sublist[0].text }} &rarr;</li></template></UsaSidenavItem>`,
      },
    },
  },
}
