import { ref } from 'vue'
import UsaPagination from './UsaPagination.vue'

function generateTestItems(numberOfItems, contents) {
  const items = []

  for (let i = 0; i < numberOfItems; i++) {
    let link = { ...contents }

    if (link.to) {
      link.to = link.to.replace('#', i + 1)
    }

    if (link.href) {
      link.href = link.href.replace('#', i + 1)
    }

    items.push(link)
  }

  return items
}

const defaultProps = {
  items: generateTestItems(8, {}),
  unbounded: UsaPagination.props.unbounded.default,
  currentPage: UsaPagination.props.currentPage.default,
  ariaLabel: UsaPagination.props.ariaLabel.default,
  previousLinkText: UsaPagination.props.previousLinkText.default,
  nextLinkText: UsaPagination.props.nextLinkText.default,
  firstPageAriaLabel: UsaPagination.props.firstPageAriaLabel.default,
  previousPageAriaLabel: UsaPagination.props.previousPageAriaLabel.default,
  numberPageAriaLabel: UsaPagination.props.numberPageAriaLabel.default,
  nextPageAriaLabel: UsaPagination.props.nextPageAriaLabel.default,
  lastPageAriaLabel: UsaPagination.props.lastPageAriaLabel.default,
  overflowAriaLabel: UsaPagination.props.overflowAriaLabel.default,
  customClasses: UsaPagination.props.customClasses.default(),
}

export default {
  component: UsaPagination,
  title: 'Components/UsaPagination',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    unbounded: {
      control: { type: 'boolean' },
    },
    currentPage: {
      control: { type: 'number', disable: true },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    previousLinkText: {
      control: { type: 'text' },
    },
    nextLinkText: {
      control: { type: 'text' },
    },
    firstPageAriaLabel: {
      control: { type: 'text' },
    },
    previousPageAriaLabel: {
      control: { type: 'text' },
    },
    numberPageAriaLabel: {
      control: { type: 'text' },
    },
    nextPageAriaLabel: {
      control: { type: 'text' },
    },
    lastPageAriaLabel: {
      control: { type: 'text' },
    },
    overflowAriaLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    previous: {
      control: { type: 'text' },
    },
    'previous-icon': {
      control: { type: 'text' },
    },
    previousIcon: {
      control: { type: 'text' },
      name: 'previousIcon (deprecated: use `previous-icon`)',
    },
    'previous-label': {
      control: { type: 'text' },
    },
    previousLabel: {
      control: { type: 'text' },
      name: 'previousLabel (deprecated: use `previous-label`)',
    },
    next: {
      control: { type: 'text' },
    },
    'next-icon': {
      control: { type: 'text' },
    },
    nextIcon: {
      control: { type: 'text' },
      name: 'nextIcon (deprecated: use `next-icon`)',
    },
    'next-label': {
      control: { type: 'text' },
    },
    nextLabel: {
      control: { type: 'text' },
      name: 'nextLabel (deprecated: use `next-label`)',
    },
  },
  args: {
    items: defaultProps.items,
    currentPage: defaultProps.currentPage,
    unbounded: defaultProps.unbounded,
    ariaLabel: defaultProps.ariaLabel,
    previousLinkText: defaultProps.previousLinkText,
    nextLinkText: defaultProps.nextLinkText,
    firstPageAriaLabel: defaultProps.firstPageAriaLabel,
    previousPageAriaLabel: defaultProps.previousPageAriaLabel,
    numberPageAriaLabel: defaultProps.numberPageAriaLabel,
    nextPageAriaLabel: defaultProps.nextPageAriaLabel,
    lastPageAriaLabel: defaultProps.lastPageAriaLabel,
    overflowAriaLabel: defaultProps.overflowAriaLabel,
    customClasses: defaultProps.customClasses,
    previous: '',
    'previous-icon': '',
    'previous-label': '',
    next: '',
    'next-icon': '',
    'next-label': '',
  },
  render: args => ({
    components: { UsaPagination },
    props: Object.keys(UsaPagination.props),
    setup() {
      const currentPage = ref(args.currentPage)
      return { args, currentPage }
    },
    template: `<UsaPagination
    :items="args.items"
    :unbounded="args.unbounded"
    v-model:current-page="args.currentPage"
    :aria-label="args.ariaLabel"
    :previous-link-text="args.previousLinkText"
    :next-link-text="args.nextLinkText"
    :first-page-aria-label="args.firstPageAriaLabel"
    :previous-page-aria-label="args.previousPageAriaLabel"
    :number-page-aria-label="args.numberPageAriaLabel"
    :next-page-aria-label="args.nextPageAriaLabel"
    :last-page-aria-label="args.lastPageAriaLabel"
    :overflow-aria-label="args.overflowAriaLabel"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args.previous" #previous="{ isFirstPage, toPreviousPage }">${args.previous}</template>
    <template v-if="!!args['previous-icon']" #previous-icon>${args['previous-icon']}</template>
    <template v-else-if="!!args.previousIcon" #previousIcon>${args.previousIcon}</template>
    <template v-if="!!args['previous-label']" #previous-label>${args['previous-label']}</template>
    <template v-else-if="!!args.previousLabel" #previousLabel>${args.previousLabel}</template>
    <template v-if="!!args.next" #next="{ isLastPage, toNextPage }">${args.next}</template>
    <template v-if="!!args['next-icon']" #next-icon>${args['next-icon']}</template>
    <template v-else-if="!!args.nextIcon" #nextIcon>${args.nextIcon}</template>
    <template v-if="!!args['next-label']" #next-label>${args['next-label']}</template>
    <template v-else-if="!!args.nextLabel" #nextLabel>${args.nextLabel}</template>
  </UsaPagination>`,
  }),
}

export const DefaultPagination = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="items"></UsaPagination>`,
      },
    },
  },
}

export const MiddlePagePagination = {
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
  },
  name: 'Middle Page',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(12, {}), null, '\t')}" :current-page="6"></UsaPagination>`,
      },
    },
  },
}

export const LastPagePagination = {
  args: {
    ...defaultProps,
    currentPage: 8,
  },
  name: 'Last Page',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(12, {}), null, '\t')}" :current-page="8"></UsaPagination>`,
      },
    },
  },
}

export const LessThanSevenSlotsPagination = {
  args: {
    ...defaultProps,
    items: generateTestItems(7, {}),
  },
  name: 'Less Than 7 Slots',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(7, {}), null, '\t')}"></UsaPagination>`,
      },
    },
  },
}

export const UnboundedPagination = {
  args: {
    ...defaultProps,
    unbounded: true,
  },
  name: 'Unbounded',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="items" :unbounded="true"></UsaPagination>`,
      },
    },
  },
}

export const CustomLinkTextPagination = {
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    previousLinkText: 'Back',
    nextLinkText: 'Forward',
  },
  name: 'Custom Link Text',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(12, {}), null, '\t')}" :current-page="6" previous-link-text="Back" next-link-text="Forward"></UsaPagination>`,
      },
    },
  },
}

export const CustomClassPagination = {
  args: {
    ...defaultProps,
    customClasses: {
      list: ['custom-list-class'],
    },
  },
  name: 'Custom Class',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="items" :custom-classes="{ list: ['custom-list-class'] }"></UsaPagination>`,
      },
    },
  },
}

export const CustomSlotContentPagination = {
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    previous: 'Test Previous Slot',
    next: 'Test Next Slot',
  },
  name: 'Custom Prev/Next Slot Content',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(12, {}), null, '\t')}" :current-page="6"><template #previous>Test Previous Slot</template><template #next>Test Next Slot</template></UsaPagination>`,
      },
    },
  },
}

export const CustomIconLabelSlotContentPagination = {
  args: {
    ...defaultProps,
    items: generateTestItems(12, {}),
    currentPage: 6,
    'previous-icon': '&lt;',
    'previous-label': 'Test Label Slot',
    'next-label': 'Test Label Slot',
    'next-icon': '&gt;',
  },
  name: 'Custom Icon/Label Slot Content',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="${JSON.stringify(generateTestItems(12, {}), null, '\t')}" :current-page="6"><template #previous-icon>&lt;</template><template #previous-label>Test Label Slot</template><template #next-label>Test Label Slot</template><template #next-icon>&gt;</template></UsaPagination>`,
      },
    },
  },
}

export const ScopedSlotPagination = {
  args: {
    ...defaultProps,
    previous: 'is first page: {{ isFirstPage }}',
    next: 'is last page: {{ isLastPage }}',
  },
  name: 'Scoped Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaPagination :items="items"><template #previous="{ isFirstPage }">is first page: {{ isFirstPage }}</template><template #next="{ isLastPage }">is last page: {{ isLastPage }}</template></UsaPagination>`,
      },
    },
  },
}
