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
      table: {
        category: 'props',
      },
    },
    heading: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'heading-alt': {
      control: { type: 'text' },
      table: {
        category: 'slots',
      },
    },
    'slot:headingAlt': {
      control: { type: 'text' },
      name: 'headingAlt (deprecated: use `heading-alt`)',
      table: {
        category: 'slots',
      },
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
    headingTag: defaultProps.headingTag,
    headingAlt: defaultProps.headingAlt,
    heading: defaultProps.heading,
    customClasses: defaultProps.customClasses,
    'heading-alt': '',
    'slot:heading': '',
    default:
      "<p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>",
  },
  render: args => ({
    components: { UsaHeroCallout, UsaHero },
    props: Object.keys(UsaHeroCallout.props),
    setup() {
      return { args }
    },
    template: `<UsaHero background-image="https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg" aria-label="Introduction">
    <UsaHeroCallout
      :heading="args.heading"
      :heading-alt="args.headingAlt"
      :heading-tag="args.headingTag"
      :custom-classes="args.customClasses"
    >
      <template v-if="!!args['heading-alt']" #heading-alt>${args['heading-alt']}</template>
      <template v-else-if="!!args['slot:heading-alt']" #headingAlt>${args['slot:heading-alt']}</template>
      <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
      <template v-if="!!args.default" #default>${args.default}</template>
    </UsaHeroCallout>
  </UsaHero>`,
  }),
}

export const DefaultHeroCallout = {
  args: {
    ...defaultProps,
    headingAlt: 'Hero callout:',
    heading: 'Bring attention to a project priority',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`,
      },
    },
  },
}

export const HeadingSlotHeroCallout = {
  args: {
    ...defaultProps,
    'slot:heading': 'Custom heading slot',
    headingAlt: 'Hero callout:',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeroCallout heading-alt="Hero callout:"><template #heading>Custom heading slot</template><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`,
      },
    },
  },
}

export const HeadingAltSlotHeroCallout = {
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    'heading-alt': 'Custom heading alt slot',
  },
  name: 'Heading Alt Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeroCallout heading="Bring attention to a project priority"><template #heading-alt>Custom heading alt slot</template><template #default><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></template></UsaHeroCallout>`,
      },
    },
  },
}

export const CustomHeadingTagHeroCallout = {
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    headingAlt: 'Custom heading alt slot',
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" heading-tag="h4"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`,
      },
    },
  },
}

export const CustomClassesHeroCallout = {
  args: {
    ...defaultProps,
    heading: 'Bring attention to a project priority',
    headingAlt: 'Custom heading alt slot',
    customClasses: {
      heading: ['test-heading-class'],
      headingAlt: ['test-heading-alt-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Custom heading alt slot" :custom-classes="{heading: ['test-heading-class'], headingAlt: ['test-heading-alt-class']}"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout>`,
      },
    },
  },
}
