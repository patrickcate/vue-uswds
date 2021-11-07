import UsaSummaryBox from './UsaSummaryBox.vue'

const defaultProps = {
  heading: 'Key information',
  headingTag: 'h2',
  customClasses: {
    body: [],
    heading: [],
    text: [],
  },
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
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    defaultSlot: `<ul class="usa-list">
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
  template: `<UsaSummaryBox :id="id" :heading="heading" :heading-tag="headingTag">${args.defaultSlot}</UsaSummaryBox>`,
})

export const DefaultSummaryBox = DefaultTemplate.bind({})
DefaultSummaryBox.args = {
  ...defaultProps,
}
DefaultSummaryBox.storyName = 'Default'
