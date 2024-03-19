import UsaCard from './UsaCard.vue'

const defaultProps = {
  cardTag: UsaCard.props.cardTag.default,
  heading: UsaCard.props.heading.default,
  headingTag: UsaCard.props.headingTag.default,
  flag: UsaCard.props.flag.default,
  headerFirst: UsaCard.props.headerFirst.default,
  insetMedia: UsaCard.props.insetMedia.default,
  mediaPosition: UsaCard.props.mediaPosition.default,
  headerExdent: UsaCard.props.headerExdent.default,
  mediaExdent: UsaCard.props.mediaExdent.default,
  bodyExdent: UsaCard.props.bodyExdent.default,
  footerExdent: UsaCard.props.footerExdent.default,
  customClasses: UsaCard.props.customClasses.default(),
}

export default {
  component: UsaCard,
  title: 'Components/UsaCard',
  argTypes: {
    cardTag: {
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
      control: {
        type: 'select',
      },
    },
    flag: {
      control: { type: 'boolean' },
    },
    insetMedia: {
      control: { type: 'boolean' },
    },
    mediaPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
    headerExdent: {
      control: { type: 'boolean' },
    },
    mediaExdent: {
      control: { type: 'boolean' },
    },
    bodyExdent: {
      control: { type: 'boolean' },
    },
    footerExdent: {
      control: { type: 'boolean' },
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
    media: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    footer: {
      control: { type: 'text' },
    },
  },
  args: {
    cardTag: defaultProps.cardTag,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    flag: defaultProps.flag,
    headerFirst: defaultProps.headerFirst,
    mediaPosition: defaultProps.mediaPosition,
    headerExdent: defaultProps.headerExdent,
    insetMedia: defaultProps.insetMedia,
    mediaExdent: defaultProps.mediaExdent,
    bodyExdent: defaultProps.bodyExdent,
    footerExdent: defaultProps.footerExdent,
    customClasses: defaultProps.customClasses,
    'slot:heading': '',
    media:
      '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',
    default:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>',
    footer:
      '<div><button type="button" class="usa-button">Visit Florida Keys</button></div>',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCard },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCard
    :card-tag="cardTag"
    :heading="heading"
    :heading-tag="headingTag"
    :flag="flag"
    :header-first="headerFirst"
    :inset-media="insetMedia"
    :media-position="mediaPosition"
    :header-exdent="headerExdent"
    :media-exdent="mediaExdent"
    :body-exdent="bodyExdent"
    :footer-exdent="footerExdent"
    :custom-classes="customClasses"
  >
    <template #heading v-if="${!!args['slot:heading']}">${
      args['slot:heading']
    }</template>
    <template #media v-if="${!!args.media}">${args.media}</template>
    <template #default v-if="${!!args.default}">${args.default}</template>
    <template #footer v-if="${!!args.footer}">${args.footer}</template>
  </UsaCard>`,
})

export const DefaultCard = DefaultTemplate.bind({})
DefaultCard.args = {
  ...defaultProps,
  heading: 'Card',
}
DefaultCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
DefaultCard.storyName = 'Default'

export const HeaderFirstTagCard = DefaultTemplate.bind({})
HeaderFirstTagCard.args = {
  ...defaultProps,
  headerFirst: true,
  heading: 'Card',
}
HeaderFirstTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
HeaderFirstTagCard.storyName = 'Header First'

export const NoMediaCard = DefaultTemplate.bind({})
NoMediaCard.args = {
  ...defaultProps,
  media: '',
  heading: 'Card',
}
NoMediaCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoMediaCard.storyName = 'No Media'

export const NoHeaderCard = DefaultTemplate.bind({})
NoHeaderCard.args = {
  ...defaultProps,
  heading: '',
  'slot:heading': '',
}
NoHeaderCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoHeaderCard.storyName = 'No Header'

export const NoFooterCard = DefaultTemplate.bind({})
NoFooterCard.args = {
  ...defaultProps,
  footer: '',
  heading: 'Card',
}
NoFooterCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoFooterCard.storyName = 'No Footer'

export const CustomCardTagCard = DefaultTemplate.bind({})
CustomCardTagCard.args = {
  ...defaultProps,
  cardTag: 'section',
  heading: 'Card',
}
CustomCardTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
CustomCardTagCard.storyName = 'Custom Card Tag'

export const InsetMediaCard = DefaultTemplate.bind({})
InsetMediaCard.args = {
  ...defaultProps,
  insetMedia: true,
  heading: 'Card',
}
InsetMediaCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
InsetMediaCard.storyName = 'Inset Media'

export const CustomHeadingTagCard = DefaultTemplate.bind({})
CustomHeadingTagCard.args = {
  ...defaultProps,
  headingTag: 'h4',
  heading: 'Card',
}
CustomHeadingTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
CustomHeadingTagCard.storyName = 'Custom Heading Tag'

export const HeadingSlotCard = DefaultTemplate.bind({})
HeadingSlotCard.args = {
  ...defaultProps,
  'slot:heading': 'Custom header slot',
}
HeadingSlotCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
HeadingSlotCard.storyName = 'Header Slot'

export const CustomClassesCard = DefaultTemplate.bind({})
CustomClassesCard.args = {
  ...defaultProps,
  heading: 'Card',
  customClasses: {
    container: ['test-container-class'],
    header: ['test-header-class'],
    heading: ['test-heading-class'],
    media: ['test-media-class'],
    img: ['test-img-class'],
    body: ['test-body-class'],
    footer: ['test-footer-class'],
  },
}
CustomClassesCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
CustomClassesCard.storyName = 'Custom Classes'

export const FlagLayoutCard = DefaultTemplate.bind({})
FlagLayoutCard.args = {
  ...defaultProps,
  flag: true,
  heading: 'Card',
}
FlagLayoutCard.storyName = 'Flag Layout'

export const FlagLayoutMediaRightCard = DefaultTemplate.bind({})
FlagLayoutMediaRightCard.args = {
  ...defaultProps,
  flag: true,
  mediaPosition: 'right',
  heading: 'Card',
}
FlagLayoutMediaRightCard.storyName = 'Flag Layout w/ Media Right'
