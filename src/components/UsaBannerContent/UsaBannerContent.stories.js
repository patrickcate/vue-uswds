import UsaBannerContent from './UsaBannerContent.vue'

const defaultProps = {}

export default {
  component: UsaBannerContent,
  title: 'Components/UsaBannerContent',
  argTypes: {
    'tld-icon': {
      control: { type: 'text' },
    },
    tldIcon: {
      control: { type: 'text' },
      name: 'tldIcon (deprecated: use `tld-icon`)',
    },
    'tld-description': {
      control: { type: 'text' },
    },
    tldDescription: {
      control: { type: 'text' },
      name: 'tldDescription (deprecated: use `tld-description`)',
    },
    'https-icon': {
      control: { type: 'text' },
    },
    httpsIcon: {
      control: { type: 'text' },
      name: 'httpsIcon (deprecated: use `https-icon`)',
    },
    'https-description': {
      control: { type: 'text' },
    },
    httpsDescription: {
      control: { type: 'text' },
      name: 'httpsDescription (deprecated: use `https-description`)',
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
    <template v-if="${!!args['tld-icon']}" #tld-icon>${
      args['tld-icon']
    }</template>
    <template v-else-if="${!!args.tldIcon}" #tldIcon>${args.tldIcon}</template>
    <template v-if="${!!args['tld-description']}" #tld-description>${
      args['tld-description']
    }</template>
    <template v-else-if="${!!args.tldDescription}" #tldDescription>${
      args.tldDescription
    }</template>
    <template v-if="${!!args['https-icon']}" #https-icon>${
      args['https-icon']
    }</template>
    <template v-else-if="${!!args.httpsIcon}" #httpsIcon>${
      args.httpsIcon
    }</template>
    <template v-if="${!!args['https-description']}" #https-description>${
      args['https-description']
    }</template>
    <template v-else-if="${!!args.httpsDescription}" #httpsDescription>${
      args.httpsDescription
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
  'tld-icon': 'Custom TLD Icon',
  'tld-description': 'Custom TLD Desciption',
  'https-icon': 'Custom HTTPS Icon',
  'https-description': 'Custom HTTPS Desciption',
}
CustomSlotBannerContent.storyName = 'Custom Slot Content'
