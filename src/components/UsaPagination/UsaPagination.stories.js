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
    :overflow-aria-label="overflowAriaLabel"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.previous}" #previous="{ isFirstPage, toPreviousPage }">${
    args.previous
  }</template>
    <template v-if="${!!args['previous-icon']}" #previous-icon>${
    args['previous-icon']
  }</template>
    <template v-else-if="${!!args.previousIcon}" #previousIcon>${
    args.previousIcon
  }</template>
    <template v-if="${!!args['previous-label']}" #previous-label>${
    args['previous-label']
  }</template>
    <template v-else-if="${!!args.previousLabel}" #previousLabel>${
    args.previousLabel
  }</template>
    <template v-if="${!!args.next}" #next="{ isLastPage, toNextPage }">${
    args.next
  }</template>
    <template v-if="${!!args['next-icon']}" #next-icon>${
    args['next-icon']
  }</template>
    <template v-else-if="${!!args.nextIcon}" #nextIcon>${
    args.nextIcon
  }</template>
    <template v-if="${!!args['next-label']}" #next-label>${
    args['next-label']
  }</template>
    <template v-else-if="${!!args.nextLabel}" #nextLabel>${
    args.nextLabel
  }</template>
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
  previous: 'Test Previous Slot',
  next: 'Test Next Slot',
}
CustomSlotContentPagination.storyName = 'Custom Prev/Next Slot Content'

export const CustomIconLabelSlotContentPagination = DefaultTemplate.bind({})
CustomIconLabelSlotContentPagination.args = {
  ...defaultProps,
  items: generateTestItems(12, {}),
  currentPage: 6,
  'previous-icon': '&lt;',
  'previous-label': 'Test Label Slot',
  'next-label': 'Test Label Slot',
  'next-icon': '&gt;',
}
CustomIconLabelSlotContentPagination.storyName =
  'Custom Icon/Label Slot Content'

export const ScopedSlotPagination = DefaultTemplate.bind({})
ScopedSlotPagination.args = {
  ...defaultProps,
  previous: 'is first page: {{ isFirstPage }}',
  next: 'is last page: {{ isLastPage }}',
}
ScopedSlotPagination.storyName = 'Scoped Slot'
