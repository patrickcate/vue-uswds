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
  render: args => ({
    components: { UsaSummaryBox },
    props: Object.keys(UsaSummaryBox.props),
    setup() {
      return { args }
    },
    template: `
      <UsaSummaryBox :id="args.id" :heading="args.heading" :heading-tag="args.headingTag" :custom-classes="args.customClasses">
        <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
        <template v-if="!!args.default" #default>${args.default}</template>
      </UsaSummaryBox>`,
  }),
}

export const DefaultSummaryBox = {
  args: {
    ...defaultProps,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>`,
      },
    },
  },
}

export const CustomHeadingSummaryBox = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading',
  },
  name: 'Custom Heading',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox heading="Custom Heading">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
        </UsaSummaryBox>`,
      },
    },
  },
}

export const HeadingSlotSummaryBox = {
  args: {
    ...defaultProps,
    'slot:heading': '<em>Custom Heading Slot</em>',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox><template #heading><em>Custom Heading Slot</em></template><template #default>
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul></template>
      </UsaSummaryBox>`,
      },
    },
  },
}

export const CustomHeadingTagSummaryBox = {
  args: {
    ...defaultProps,
    heading: 'Custom Heading Tag',
    headingTag: 'h4',
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox heading="Custom Heading" heading-tag="h4">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`,
      },
    },
  },
}

export const CustomIdSummaryBox = {
  args: {
    ...defaultProps,
    id: 'custom-id',
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox id="custom-id">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`,
      },
    },
  },
}

export const CustomClassesSummaryBox = {
  args: {
    ...defaultProps,
    customClasses: {
      body: ['test-body-class'],
      heading: ['test-heading-class'],
      text: ['test-text-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaSummaryBox :custom-classes="{ body: ['test-body-class'], heading: ['test-heading-class'], text: ['test-text-class'] }">
        <ul class="usa-list">
          <li>If you are under a winter storm warning, <a class="usa-summary-box__link" href="#">find shelter</a> right away.</li>
          <li>Sign up for <a class="usa-summary-box__link" href="#">your community's warning system</a>.</li>
          <li>Learn the signs of, and basic treatments for, <a class="usa-summary-box__link" href="#">frostbite</a> and <a class="usa-summary-box__link" href="#">hypothermia</a>.</li>
          <li>Gather emergency supplies for your <a class="usa-summary-box__link" href="#">home</a> and your <a class="usa-summary-box__link" href="#">car</a>.</li>
        </ul>
      </UsaSummaryBox>`,
      },
    },
  },
}
