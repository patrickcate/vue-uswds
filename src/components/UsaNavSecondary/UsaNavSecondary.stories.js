import UsaNavSecondary from './UsaNavSecondary.vue'

const defaultProps = {
  items: [
    {
      to: '/first-link',
      text: 'First link',
    },
    {
      href: '/second-link',
      text: 'Second link',
    },
  ],
}

export default {
  component: UsaNavSecondary,
  title: 'Components/UsaNavSecondary',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    searchSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.testLinks,
    searchSlot: '',
  },
}

const isExtendedHeader = true

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaNavSecondary },
  props: Object.keys(argTypes),
  provide: { isExtendedHeader },
  setup() {
    return { ...args }
  },
  template: `<UsaNavSecondary :items="items">
    <template #search>${args.searchSlot}</template>
  </UsaNavSecondary>`,
})

export const DefaultNavSecondary = DefaultTemplate.bind({})
DefaultNavSecondary.args = {
  ...defaultProps,
}
DefaultNavSecondary.storyName = 'Default'

export const SearchSlotNavSecondary = DefaultTemplate.bind({})
SearchSlotNavSecondary.args = {
  ...defaultProps,
  searchSlot: `<form class="usa-search usa-search--small" role="search">
    <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
    <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
    <button class="usa-button" type="submit">
      <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
    </button>
</form>`,
}
SearchSlotNavSecondary.storyName = 'Search Slot'
