import UsaBannerContent from './UsaBannerContent.vue'

const defaultProps = {}

export default {
  component: UsaBannerContent,
  title: 'Components/UsaBannerContent',
  argTypes: {
    tldIconSlot: {
      control: { type: 'text' },
    },
    tldDescriptionSlot: {
      control: { type: 'text' },
    },
    httpsIconSlot: {
      control: { type: 'text' },
    },
    httpsDescriptionSlot: {
      control: { type: 'text' },
    },
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaBannerContent },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaBannerContent>
    <template v-if="${!!args.tldIconSlot}" #tldIcon>${
    args.tldIconSlot
  }</template>
    <template v-if="${!!args.tldDescriptionSlot}" #tldDescription>${
    args.tldDescriptionSlot
  }</template>
    <template v-if="${!!args.httpsIconSlot}" #httpsIcon>${
    args.httpsIconSlot
  }</template>
    <template v-if="${!!args.httpsDescriptionSlot}" #httpsDescription>${
    args.httpsDescriptionSlot
  }</template>
  </UsaBannerContent>`,
})

export const DefaultBannerContent = DefaultTemplate.bind({})
DefaultBannerContent.args = {
  ...defaultProps,
}
DefaultBannerContent.storyName = 'Default'

export const CustomSlotBannerContent = DefaultTemplate.bind({})
CustomSlotBannerContent.args = {
  ...defaultProps,
  tldIconSlot: 'Custom TLD Icon',
  tldDescriptionSlot: 'Custom TLD Desciption',
  httpsIconSlot: 'Custom HTTPS Icon',
  httpsDescriptionSlot: 'Custom HTTPS Desciption',
}
CustomSlotBannerContent.storyName = 'Custom Slot Content'
