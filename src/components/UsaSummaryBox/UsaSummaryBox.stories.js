import UsaSummaryBox from './UsaSummaryBox.vue'

const defaultProps = {
  id: UsaSummaryBox.props.id.default,
  heading: UsaSummaryBox.props.heading.default,
  headingTag: UsaSummaryBox.props.headingTag.default,
  customClasses: UsaSummaryBox.props.customClasses.default(),
}

export default {
  component: UsaSummaryBox,
  title: 'Components/UsaSummaryBox',
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    id: defaultProps.id,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    'slot:heading': '',
    default: `<ul class="usa-list">
      <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
      <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
      <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
      <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
    </ul>`,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSummaryBox },
  props: Object.keys(argTypes),
  setup() {
    return {
      ...args,
    }
  },
  template: `
  <UsaSummaryBox :id="id" :heading="heading" :heading-tag="headingTag" :custom-classes="customClasses">
    <template v-if="${!!args['slot:heading']}" #heading>${
    args['slot:heading']
  }</template>
    <template v-if="${!!args.default}" #default>${args.default}</template>
  </UsaSummaryBox>`,
})

export const DefaultSummaryBox = DefaultTemplate.bind({})
DefaultSummaryBox.args = {
  ...defaultProps,
}
DefaultSummaryBox.storyName = 'Default'

export const CustomHeadingSummaryBox = DefaultTemplate.bind({})
CustomHeadingSummaryBox.args = {
  ...defaultProps,
  heading: 'Custom Heading',
}
CustomHeadingSummaryBox.storyName = 'Custom Heading'

export const HeadingSlotSummaryBox = DefaultTemplate.bind({})
HeadingSlotSummaryBox.args = {
  ...defaultProps,
  'slot:heading': '<em>Custom Heading Slot</em>',
}
HeadingSlotSummaryBox.storyName = 'Heading Slot'

export const CustomHeadingTagSummaryBox = DefaultTemplate.bind({})
CustomHeadingTagSummaryBox.args = {
  ...defaultProps,
  heading: 'Custom Heading Tag',
  headingTag: 'h4',
}
CustomHeadingTagSummaryBox.storyName = 'Custom Heading Tag'

export const CustomIdSummaryBox = DefaultTemplate.bind({})
CustomIdSummaryBox.args = {
  ...defaultProps,
  id: 'custom-id',
}
CustomIdSummaryBox.storyName = 'Custom ID'

export const CustomClassesSummaryBox = DefaultTemplate.bind({})
CustomClassesSummaryBox.args = {
  ...defaultProps,
  customClasses: {
    body: ['test-body-class'],
    heading: ['test-heading-class'],
    text: ['test-text-class'],
  },
}
CustomClassesSummaryBox.storyName = 'Custom Classes'
