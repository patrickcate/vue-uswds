import UsaInPageNav from './UsaInPageNav.vue'
import { testSlotContent1 } from './UsaInPageNav.fixtures.js'

const defaultProps = {
  title: UsaInPageNav.props.title.default,
  mainContentSelector: UsaInPageNav.props.mainContentSelector.default,
  headingLevel: UsaInPageNav.props.headingLevel.default,
  headingElements: UsaInPageNav.props.headingElements.default(),
  minimumHeadingCount: UsaInPageNav.props.minimumHeadingCount.default,
  scrollOffset: UsaInPageNav.props.scrollOffset.default,
  rootMargin: UsaInPageNav.props.rootMargin.default,
  threshold: UsaInPageNav.props.threshold.default,
  customClasses: UsaInPageNav.props.customClasses.default(),
}
export default {
  component: UsaInPageNav,
  title: 'Components/UsaInPageNav',
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    mainContentSelector: {
      control: { type: 'text' },
    },
    headingLevel: {
      control: { type: 'text' },
    },
    headingElements: {
      control: { type: 'object' },
    },
    minimumHeadingCount: {
      control: { type: 'number' },
    },
    scrollOffset: {
      control: { type: 'number' },
    },
    rootMargin: {
      control: { type: 'text' },
    },
    threshold: {
      control: { type: 'number' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    title: defaultProps.title,
    mainContentSelector: defaultProps.mainContentSelector,
    headingLevel: defaultProps.headingLevel,
    headingElements: defaultProps.headingElements,
    minimumHeadingCount: defaultProps.minimumHeadingCount,
    scrollOffset: defaultProps.scrollOffset,
    rootMargin: defaultProps.rootMargin,
    threshold: defaultProps.threshold,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaInPageNav },
    props: Object.keys(UsaInPageNav.props),
    setup() {
      return { args }
    },
    template: `<UsaInPageNav
      :title="args.title"
      :main-content-selector="args.mainContentSelector"
      :heading-level="args.headingLevel"
      :heading-elements="args.headingElements"
      :minimum-heading-count="args.minimumHeadingCount"
      :scroll-offset="args.scrollOffset"
      :root-margin="args.rootMargin"
      :threshold="args.threshold"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args.default" #default>${args.default}</template>
    </UsaInPageNav>`,
  }),
}

export const DefaultUsaInPageNav = {
  args: {
    ...defaultProps,
    default: testSlotContent1,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaInPageNav>${testSlotContent1}</UsaInPageNav>`,
      },
    },
  },
}
