import { ref } from 'vue'
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

const isExtendedHeader = ref(true)

export default {
  component: UsaNavSecondary,
  title: 'Components/UsaNavSecondary',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    search: {
      control: { type: 'text' },
    },
  },
  args: {
    items: defaultProps.testLinks,
    default: '',
    search: '',
  },
  render: args => ({
    components: { UsaNavSecondary },
    props: Object.keys(UsaNavSecondary.props),
    provide: { isExtendedHeader },
    setup() {
      return { args }
    },
    template: `<UsaNavSecondary :items="args.items">
    <template v-if="!!args.default" :items="args.items" #default>{{args.default}}</template>
    <template v-if="!!args.search" #search>{{ args.search }}</template>
  </UsaNavSecondary>`,
  }),
}

export const DefaultNavSecondary = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSecondary :items="${(JSON.stringify(defaultProps.items), null, '\t')}"></UsaNavSecondary>`,
      },
    },
  },
}

export const SearchSlotNavSecondary = {
  args: {
    ...defaultProps,
    search: `<form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form>`,
  },
  name: 'Search Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaNavSecondary :items="${(JSON.stringify(defaultProps.items), null, '\t')}"><template #search><form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="extended-search-field-en-small">Search</label>
      <input class="usa-input" id="extended-search-field-en-small" type="search" name="search">
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search">
      </button>
  </form></UsaNavSecondary>`,
      },
    },
  },
}
