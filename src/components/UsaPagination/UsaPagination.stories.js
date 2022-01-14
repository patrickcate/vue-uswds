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
  unbounded: false,
  currentPage: 1,
  ariaLabel: 'Pagination',
  previousLinkText: 'Previous',
  nextLinkText: 'Next',
  firstPageAriaLabel: 'First page, page #',
  previousPageAriaLabel: 'Previous page',
  numberPageAriaLabel: 'Page #',
  nextPageAriaLabel: 'Next page',
  lastPageAriaLabel: 'Last page, page #',
  customClasses: {
    list: [],
  },
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
    customClasses: {
      control: { type: 'object' },
    },
    previousSlot: {
      control: { type: 'text' },
    },
    previousIconSlot: {
      control: { type: 'text' },
    },
    previousLabelSlot: {
      control: { type: 'text' },
    },
    nextSlot: {
      control: { type: 'text' },
    },
    nextIconSlot: {
      control: { type: 'text' },
    },
    nextLabelSlot: {
      control: { type: 'text' },
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
    customClasses: defaultProps.customClasses,
    previousSlot: '',
    previousIconSlot: '',
    previousLabelSlot: '',
    nextSlot: '',
    nextIconSlot: '',
    nextLabelSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaPagination },
  props: Object.keys(argTypes),
  setup() {
    const currentPage = ref(args.currentPage)
    return { ...args, currentPage }
  },
  template: `<UsaPagination
    :items="items"
    :unbounded="unbounded"
    v-model:current-page="currentPage"
    :aria-label="ariaLabel"
    :previous-link-text="previousLinkText"
    :next-link-text="nextLinkText"
    :first-page-aria-label="firstPageAriaLabel"
    :previous-page-aria-label="previousPageAriaLabel"
    :number-page-aria-label="numberPageAriaLabel"
    :next-page-aria-label="nextPageAriaLabel"
    :last-page-aria-label="lastPageAriaLabel"
    :custom-classes="customClasses"
  >
    <template #previous="{ isFirstPage, toPreviousPage }">${args.previousSlot}</template>
    <template #previousIcon>${args.previousIconSlot}</template>
    <template #previousLabel>${args.previousLabelSlot}</template>
    <template #next="{ isLastPage, toNextPage }">${args.nextSlot}</template>
    <template #nextIcon>${args.nextIconSlot}</template>
    <template #nextLabel>${args.nextLabelSlot}</template>
  </UsaPagination>`,
})

export const DefaultPagination = DefaultTemplate.bind({})
DefaultPagination.args = {
  ...defaultProps,
}
DefaultPagination.storyName = 'Default'

export const MiddlePagePagination = DefaultTemplate.bind({})
MiddlePagePagination.args = {
  ...defaultProps,
  items: generateTestItems(12, {}),
  currentPage: 6,
}
MiddlePagePagination.storyName = 'Middle Page'

export const LastPagePagination = DefaultTemplate.bind({})
LastPagePagination.args = {
  ...defaultProps,
  currentPage: 8,
}
LastPagePagination.storyName = 'Last Page'

export const LessThanSevenSlotsPagination = DefaultTemplate.bind({})
LessThanSevenSlotsPagination.args = {
  ...defaultProps,
  items: generateTestItems(7, {}),
}
LessThanSevenSlotsPagination.storyName = 'Less Than 7 Slots'

export const UnboundedPagination = DefaultTemplate.bind({})
UnboundedPagination.args = {
  ...defaultProps,
  unbounded: true,
}
UnboundedPagination.storyName = 'Unbounded'

export const CustomLinkTextPagination = DefaultTemplate.bind({})
CustomLinkTextPagination.args = {
  ...defaultProps,
  items: generateTestItems(12, {}),
  currentPage: 6,
  previousLinkText: 'Back',
  nextLinkText: 'Forward',
}
CustomLinkTextPagination.storyName = 'Custom Link Text'

export const CustomClassPagination = DefaultTemplate.bind({})
CustomClassPagination.args = {
  ...defaultProps,
  customClasses: {
    list: ['custom-list-class'],
  },
}
CustomClassPagination.storyName = 'Custom Class'

export const CustomSlotContentPagination = DefaultTemplate.bind({})
CustomSlotContentPagination.args = {
  ...defaultProps,
  items: generateTestItems(12, {}),
  currentPage: 6,
  previousSlot: 'Test Previous Slot',
  nextSlot: 'Test Next Slot',
}
CustomSlotContentPagination.storyName = 'Custom Prev/Next Slot Content'

export const CustomIconLabelSlotContentPagination = DefaultTemplate.bind({})
CustomIconLabelSlotContentPagination.args = {
  ...defaultProps,
  items: generateTestItems(12, {}),
  currentPage: 6,
  previousIconSlot: '&lt;',
  previousLabelSlot: 'Test Label Slot',
  nextLabelSlot: 'Test Label Slot',
  nextIconSlot: '&gt;',
}
CustomIconLabelSlotContentPagination.storyName =
  'Custom Icon/Label Slot Content'

export const ScopedSlotPagination = DefaultTemplate.bind({})
ScopedSlotPagination.args = {
  ...defaultProps,
  previousSlot: 'is first page: {{ isFirstPage }}',
  nextSlot: 'is last page: {{ isLastPage }}',
}
ScopedSlotPagination.storyName = 'Scoped Slot'
