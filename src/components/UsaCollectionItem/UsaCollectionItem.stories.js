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
  render: args => ({
    components: {
      UsaCollectionItem,
      UsaCollectionCalendar,
      UsaCollectionMeta,
      UsaCollectionMetaItem,
    },
    props: Object.keys(UsaCollectionItem.props),
    setup() {
      return { args }
    },
    template: `<UsaCollectionItem
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :href="args.href"
    :to="args.to"
    :router-component-name="args.routerComponentName"
    :custom-classes="args.customClasses"
  >
    <template #media v-if="!!args.media">${args.media}</template>
    <template #calendar v-if="!!args.calendar">${args.calendar}</template>
    <template #heading v-if="!!args['slot:heading']">${args['slot:heading']}</template>
    <template #description v-if="!!args.description">{{
      args.description
    }}</template>
    <template #default v-if="!!args.default">${args.default}</template>
    <template #meta v-if="!!args.meta">${args.meta}</template>
  </UsaCollectionItem>`,
  }),
}

export const DefaultCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection Item',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection Item">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`,
      },
    },
  },
}

export const MediaCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection w/ Media',
    media: testMedia,
  },
  name: 'Collection w/ Media',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection w/ Media"><template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`,
      },
    },
  },
}

export const CalendarCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection w/ Calendar',
    media: '',
    calendar:
      '<UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" />',
  },
  name: 'Collection w/ Calendar',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection w/ Calendar">\n\t<template #calendar><UsaCollectionCalendar datetime="2021-01-01" month="Jan" day="1" /></template>\n\t<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>\n</UsaCollectionItem>`,
      },
    },
  },
}

export const MetaItemsCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection w/ Meta Items',
    media: testMedia,
    meta: `<UsaCollectionMeta aria-label="Topics">
        <UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>
        <UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>
      </UsaCollectionMeta>`,
  },
  name: 'Collection w/ Meta Items',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection w/ Meta Items">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template>\n\t<template #meta>\n\t\t<UsaCollectionMeta aria-label="Topics">\n\t\t\t<UsaCollectionMetaItem class="usa-tag">Meta 1</UsaCollectionMetaItem>\n\t\t\t<UsaCollectionMetaItem class="usa-tag">Meta 2</UsaCollectionMetaItem>\n\t\t</UsaCollectionMeta>\n\t</template>\n</UsaCollectionItem>`,
      },
    },
  },
}

export const CustomHeadingTagCollectionItem = {
  args: {
    ...defaultProps,
    headingTag: 'h4',
    heading: 'Custom heading tag',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Custom heading tag" heading-tag="h4">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`,
      },
    },
  },
}

export const HeadingSlotCollectionItem = {
  args: {
    ...defaultProps,
    'slot:heading': 'Custom header slot',
  },
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading-tag="h4"><template #heading>Custom header slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`,
      },
    },
  },
}

export const DescriptionSlotCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection Item w/ description slot',
    description: 'Custom description slot',
  },
  name: 'Description Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection Item w/ description slot"><template #heading>Custom header slot</template><template #description>Custom description slot</template><template #default>Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</template></UsaCollectionItem>`,
      },
    },
  },
}

export const CustomClassesCollectionItem = {
  args: {
    ...defaultProps,
    heading: 'Collection Item',
    customClasses: {
      media: ['test-media-class'],
      heading: ['test-heading-class'],
      link: ['test-link-class'],
      description: ['test-description-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaCollectionItem heading="Collection Item" :custom-classes="{ media: ['test-media-class'],
      heading: ['test-heading-class'],
      link: ['test-link-class'],
      description: ['test-description-class'] }">Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.</UsaCollectionItem>`,
      },
    },
  },
}
