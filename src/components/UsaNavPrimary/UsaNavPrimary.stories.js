import UsaNavPrimary from './UsaNavPrimary.vue'

const testItems = [
  {
    href: '/section-1',
    text: 'Section 1',
  },
  {
    href: 'https://google.com',
    text: 'Google',
    attrs: {
      target: '_blank',
    },
  },
  {
    to: {
      path: '/section-2',
    },
    text: 'Section 2',
    cols: 2,
    attrs: {
      'data-test': 'test',
    },
    children: [
      {
        to: '/section-2/page-1',
        text: 'Section 2 - Page 1',
        col: 1,
        routerComponentName: 'router-link',
      },
      {
        id: 'section-2-page-2',
        to: '/section-2/page-2',
        text: 'Section 2 - Page 2',
        col: 1,
        routerComponentName: 'nuxt-link',
      },
      {
        to: '/section-2/page-3',
        text: 'Section 2 - Page 3',
        routerComponentName: 'g-link',
        attrs: {
          target: '_blank',
        },
        col: 1,
        children: [],
      },
      {
        to: '/section-2/page-4',
        text: 'Section 2 - Page 4',
        col: 2,
        children: [
          {
            href: '/section-2/page-4/sub-section-1',
            text: 'Section 2 - Page 4 - Sub Section 1',
            col: 1,
          },
        ],
      },
      {
        href: '/section-2/page-5',
        text: 'Section 2 - Page 5',
        col: 2,
      },
    ],
  },
  {
    to: {
      path: '/section-3',
    },
    text: 'Section 3',
    children: [
      {
        href: '/section-3/page-1',
        text: 'Section 3 - Page 1',
      },
    ],
  },
]

const defaultProps = {
  items: UsaNavPrimary.props.items.default(),
}

export default {
  component: UsaNavPrimary,
  title: 'Components/UsaNavPrimary',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.items,
    default: '',
  },
  decorators: [
    () => ({
      template: '<story />',
      provide: {
        closeMobileMenu: () => {},
      },
    }),
  ],
  render: args => ({
    components: { UsaNavPrimary },
    props: Object.keys(UsaNavPrimary.props),
    setup() {
      return { args }
    },
    template: `<UsaNavPrimary
    :items="args.items">
      <template #default="{ items }">${args.default}</template>
    </UsaNavPrimary>`,
  }),
}

export const DefaultNavPrimary = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavPrimary :items="${(JSON.stringify(testItems), null, '\t')}"></UsaNavPrimary>`,
      },
    },
  },
}

export const ScopedDefaultSlotNavPrimary = {
  args: {
    ...defaultProps,
    items: [
      {
        href: '#',
        text: 'Test nav link 1',
      },
      {
        href: '#',
        text: 'Test nav link 2',
      },
      {
        href: '#',
        text: 'Test nav link 3',
      },
    ],
    default:
      '<a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a>',
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavPrimary :items="${
          (JSON.stringify([
            {
              href: '#',
              text: 'Test nav link 1',
            },
            {
              href: '#',
              text: 'Test nav link 2',
            },
            {
              href: '#',
              text: 'Test nav link 3',
            },
          ]),
          null,
          '\t')
        }"><template #default="{ items }"><a v-for="item in items" :href="item.href" :key="item.text" class="usa-nav__primary-item">{{ item.text }}</a></template></UsaNavPrimary>`,
      },
    },
  },
}
