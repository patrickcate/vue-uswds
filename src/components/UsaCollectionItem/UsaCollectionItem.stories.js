import UsaCollectionItem from './UsaCollectionItem.vue'
import UsaCollectionCalendar from '@/components/UsaCollectionCalendar'
import UsaCollectionMeta from '@/components/UsaCollectionMeta'
import UsaCollectionMetaItem from '@/components/UsaCollectionMetaItem'

const defaultProps = {
  heading: UsaCollectionItem.props.heading.default,
  headingTag: UsaCollectionItem.props.headingTag.default,
  href: UsaCollectionItem.props.href.default,
  to: UsaCollectionItem.props.to.default,
  routerComponentName: UsaCollectionItem.props.routerComponentName.default,
  customClasses: UsaCollectionItem.props.customClasses.default(),
}

const testMedia =
  '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">'

export default {
  component: UsaCollectionItem,
  title: 'Components/UsaCollectionItem',
  argTypes: {
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    href: {
      control: { type: 'text' },
    },
    to: {
      control: { type: 'text' },
    },
    routerComponentName: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    media: {
      control: { type: 'text' },
    },
    calendar: {
      control: { type: 'text' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    description: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    meta: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    customClasses: defaultProps.customClasses,
    media: '',
    calendar: '',
    'slot:heading': '',
    description: '',
    default: `Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.`,
    meta: '',
  },
  decorators: [
    () => ({ template: '<ul class="usa-collection"><story /></ul>' }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: {
    UsaCollectionItem,
    UsaCollectionCalendar,
    UsaCollectionMeta,
    UsaCollectionMetaItem,
  },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionItem
    :heading="heading"
    :heading-tag="headingTag"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :custom-classes="customClasses"
  >
    <template #media v-if="${!!args.media}">${args.media}</template>
    <template #calendar v-if="${!!args.calendar}">${args.calendar}</template>
    <template #heading v-if="${!!args['slot:heading']}">${
    args['slot:heading']
  }</template>
    <template #description v-if="${!!args.description}">${
    args.description
  }</template>
    <template #default v-if="${!!args.default}">${args.default}</template>
    <template #meta v-if="${!!args.meta}">${args.meta}</template>
  </UsaCollectionItem>`,
})

export const DefaultCollectionItem = DefaultTemplate.bind({})
DefaultCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection Item',
}
DefaultCollectionItem.storyName = 'Default'

export const MediaCollectionItem = DefaultTemplate.bind({})
MediaCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection w/ Media',
  media: testMedia,
}
MediaCollectionItem.storyName = 'Collection w/ Media'

export const CalendarCollectionItem = DefaultTemplate.bind({})
CalendarCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection w/ Calendar',
  media: '',
  calendar:
    '<UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" />',
}
CalendarCollectionItem.storyName = 'Collection w/ Calendar'

export const MetaItemsCollectionItem = DefaultTemplate.bind({})
MetaItemsCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection w/ Meta Items',
  media: testMedia,
  meta: `<UsaCollectionMeta aria-label="Topics">
      <UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
      <UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
    </UsaCollectionMeta>`,
}
MetaItemsCollectionItem.storyName = 'Collection w/ Meta Items'

export const CustomHeadingTagCollectionItem = DefaultTemplate.bind({})
CustomHeadingTagCollectionItem.args = {
  ...defaultProps,
  headingTag: 'h4',
  heading: 'Custom heading tag',
}
CustomHeadingTagCollectionItem.storyName = 'Custom Heading Tag'

export const HeadingSlotCollectionItem = DefaultTemplate.bind({})
HeadingSlotCollectionItem.args = {
  ...defaultProps,
  'slot:heading': 'Custom header slot',
}
HeadingSlotCollectionItem.storyName = 'Header Slot'

export const DescriptionSlotCollectionItem = DefaultTemplate.bind({})
DescriptionSlotCollectionItem.args = {
  ...defaultProps,
  'slot:heading': 'Custom header slot',
  description: 'Custom description slot',
}
DescriptionSlotCollectionItem.storyName = 'Description Slot'

export const CustomClassesCollectionItem = DefaultTemplate.bind({})
CustomClassesCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection Item',
  customClasses: {
    media: ['test-media-class'],
    heading: ['test-heading-class'],
    link: ['test-link-class'],
    description: ['test-description-class'],
  },
}
CustomClassesCollectionItem.storyName = 'Custom Classes'
