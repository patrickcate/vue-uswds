import UsaHeroCallout from './UsaHeroCallout.vue'
import UsaHero from '@/components/UsaHero'

const defaultProps = {
  headingAlt: UsaHeroCallout.props.headingAlt.default,
  heading: UsaHeroCallout.props.heading.default,
  headingTag: UsaHeroCallout.props.headingTag.default,
  customClasses: UsaHeroCallout.props.customClasses.default(),
}

export default {
  component: UsaHeroCallout,
  title: 'Components/UsaHeroCallout',
  argTypes: {
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    headingAlt: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    headingAltSlot: {
      control: { type: 'text' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    headingTag: defaultProps.headingTag,
    headingAlt: defaultProps.headingAlt,
    heading: defaultProps.heading,
    customClasses: defaultProps.customClasses,
    headingAltSlot: '',
    headingSlot: '',
    defaultSlot:
      "<p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>",
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaHeroCallout, UsaHero },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaHero background-image="https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/hero.png" aria-label="Introduction">
    <UsaHeroCallout
      :heading="heading"
      :heading-alt="headingAlt"
      :heading-tag="headingTag"
      :custom-classes="customClasses"
    >
      <template v-if="${!!args.headingAltSlot}" #headingAlt>${
    args.headingAltSlot
  }</template>
      <template v-if="${!!args.headingSlot}" #heading>${
    args.headingSlot
  }</template>
      <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    </UsaHeroCallout>
  </UsaHero>`,
})

export const DefaultHeroCallout = DefaultTemplate.bind({})
DefaultHeroCallout.args = {
  ...defaultProps,
  headingAlt: 'Hero callout:',
  heading: 'Bring attention to a project priority',
}
DefaultHeroCallout.storyName = 'Default'

export const HeadingSlotHeroCallout = DefaultTemplate.bind({})
HeadingSlotHeroCallout.args = {
  ...defaultProps,
  headingSlot: 'Custom heading slot',
  headingAlt: 'Hero callout:',
}
HeadingSlotHeroCallout.storyName = 'Heading Slot'

export const HeadingAltSlotHeroCallout = DefaultTemplate.bind({})
HeadingAltSlotHeroCallout.args = {
  ...defaultProps,
  heading: 'Bring attention to a project priority',
  headingAltSlot: 'Custom heading alt slot',
}
HeadingAltSlotHeroCallout.storyName = 'Heading Alt Slot'

export const CustomHeadingTagHeroCallout = DefaultTemplate.bind({})
CustomHeadingTagHeroCallout.args = {
  ...defaultProps,
  heading: 'Bring attention to a project priority',
  headingAlt: 'Custom heading alt slot',
  headingTag: 'h4',
}
CustomHeadingTagHeroCallout.storyName = 'Custom Heading Tag'

export const CustomClassesHeroCallout = DefaultTemplate.bind({})
CustomClassesHeroCallout.args = {
  ...defaultProps,
  heading: 'Bring attention to a project priority',
  headingAlt: 'Custom heading alt slot',
  customClasses: {
    heading: ['test-heading-class'],
    headingAlt: ['test-heading-alt-class'],
  },
}
CustomClassesHeroCallout.storyName = 'Custom Classes'
