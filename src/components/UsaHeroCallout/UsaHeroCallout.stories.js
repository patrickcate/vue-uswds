import UsaHeroCallout from './UsaHeroCallout.vue'
import UsaHero from '@/components/UsaHero'

const defaultProps = {
  headingAlt: 'Hero callout:',
  heading: 'Bring attention to a project priority',
  headingTag: 'h1',
  customClasses: {
    heading: [],
    headingAlt: [],
  },
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
  template: `<UsaHero background-image="'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/dist/img/hero.png'" aria-label="Introduction">
    <UsaHeroCallout
      :heading="heading"
      :heading-alt="headingAlt"
      :heading-tag="headingTag"
      :custom-classes="customClasses"
    >
      <template #headingAlt>${args.headingAltSlot}</template>
      <template #heading>${args.headingSlot}</template>
      <template #default>${args.defaultSlot}</template>
    </UsaHeroCallout>
  </UsaHero>`,
})

export const DefaultHeroCallout = DefaultTemplate.bind({})
DefaultHeroCallout.args = {
  ...defaultProps,
}
DefaultHeroCallout.storyName = 'Default'

export const HeadingSlotHeroCallout = DefaultTemplate.bind({})
HeadingSlotHeroCallout.args = {
  ...defaultProps,
  headingSlot: 'Custom heading slot',
}
HeadingSlotHeroCallout.storyName = 'Heading Slot'

export const HeadingAltSlotHeroCallout = DefaultTemplate.bind({})
HeadingAltSlotHeroCallout.args = {
  ...defaultProps,
  headingAltSlot: 'Custom heading alt slot',
}
HeadingAltSlotHeroCallout.storyName = 'Heading Alt Slot'

export const CustomHeadingTagHeroCallout = DefaultTemplate.bind({})
CustomHeadingTagHeroCallout.args = {
  ...defaultProps,
  headingTag: 'h4',
}
CustomHeadingTagHeroCallout.storyName = 'Custom Heading Tag'

export const CustomClassesHeroCallout = DefaultTemplate.bind({})
CustomClassesHeroCallout.args = {
  ...defaultProps,
  customClasses: {
    heading: ['test-heading-class'],
    headingAlt: ['test-heading-alt-class'],
  },
}
CustomClassesHeroCallout.storyName = 'Custom Classes'
