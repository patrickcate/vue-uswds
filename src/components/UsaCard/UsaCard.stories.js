import UsaCard from './UsaCard.vue'

const defaultProps = {
  cardTag: 'div',
  heading: 'Card',
  headingTag: 'h2',
  flag: false,
  headerFirst: false,
  insetMedia: false,
  mediaPosition: 'left',
  headerExdent: false,
  mediaExdent: false,
  bodyExdent: false,
  footerExdent: false,
  customClasses: {
    container: [],
    header: [],
    heading: [],
    media: [],
    img: [],
    body: [],
    footer: [],
  },
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
    headingSlot: {
      control: { type: 'text' },
    },
    mediaSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    footerSlot: {
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
    headingSlot: '',
    mediaSlot:
      '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',
    defaultSlot:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>',
    footerSlot:
      '<div><button class="usa-button">Visit Florida Keys</button></div>',
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
    <template #heading v-if="${!!args.headingSlot}">${
    args.headingSlot
  }</template>
    <template #media v-if="${!!args.mediaSlot}">${args.mediaSlot}</template>
    <template #default v-if="${!!args.defaultSlot}">${
    args.defaultSlot
  }</template>
    <template #footer v-if="${!!args.footerSlot}">${args.footerSlot}</template>
  </UsaCard>`,
})

export const DefaultCard = DefaultTemplate.bind({})
DefaultCard.args = {
  ...defaultProps,
}
DefaultCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
DefaultCard.storyName = 'Default'

export const HeaderFirstTagCard = DefaultTemplate.bind({})
HeaderFirstTagCard.args = {
  ...defaultProps,
  headerFirst: true,
}
HeaderFirstTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
HeaderFirstTagCard.storyName = 'Header First'

export const NoMediaCard = DefaultTemplate.bind({})
NoMediaCard.args = {
  ...defaultProps,
  mediaSlot: '',
}
NoMediaCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoMediaCard.storyName = 'No Media'

export const NoHeaderCard = DefaultTemplate.bind({})
NoHeaderCard.args = {
  ...defaultProps,
  heading: '',
  headingSlot: '',
}
NoHeaderCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoHeaderCard.storyName = 'No Header'

export const NoFooterCard = DefaultTemplate.bind({})
NoFooterCard.args = {
  ...defaultProps,
  footerSlot: '',
}
NoFooterCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
NoFooterCard.storyName = 'No Footer'

export const CustomCardTagCard = DefaultTemplate.bind({})
CustomCardTagCard.args = {
  ...defaultProps,
  cardTag: 'section',
}
CustomCardTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
CustomCardTagCard.storyName = 'Custom Card Tag'

export const InsetMediaCard = DefaultTemplate.bind({})
InsetMediaCard.args = {
  ...defaultProps,
  insetMedia: true,
}
InsetMediaCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
InsetMediaCard.storyName = 'Inset Media'

export const CustomHeadingTagCard = DefaultTemplate.bind({})
CustomHeadingTagCard.args = {
  ...defaultProps,
  headingTag: 'h4',
}
CustomHeadingTagCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
CustomHeadingTagCard.storyName = 'Custom Heading Tag'

export const HeadingSlotCard = DefaultTemplate.bind({})
HeadingSlotCard.args = {
  ...defaultProps,
  headingSlot: 'Custom header slot',
}
HeadingSlotCard.decorators = [
  () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
]
HeadingSlotCard.storyName = 'Header Slot'

export const CustomClassesCard = DefaultTemplate.bind({})
CustomClassesCard.args = {
  ...defaultProps,
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
}
FlagLayoutCard.storyName = 'Flag Layout'

export const FlagLayoutMediaRightCard = DefaultTemplate.bind({})
FlagLayoutMediaRightCard.args = {
  ...defaultProps,
  flag: true,
  mediaPosition: 'right',
}
FlagLayoutMediaRightCard.storyName = 'Flag Layout w/ Media Right'
