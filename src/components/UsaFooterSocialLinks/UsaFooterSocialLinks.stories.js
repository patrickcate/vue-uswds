import UsaFooterSocialLinks from './UsaFooterSocialLinks.vue'

const testItems = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: '/assets/img/usa-icons/facebook.svg',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '/assets/img/usa-icons/twitter.svg',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: '/assets/img/usa-icons/youtube.svg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/assets/img/usa-icons/instagram.svg',
  },
  {
    id: 'rss',
    name: 'RSS',
    href: '#',
    icon: '/assets/img/usa-icons/rss_feed.svg',
  },
]

const defaultProps = {
  items: UsaFooterSocialLinks.props.items.default(),
  customClasses: UsaFooterSocialLinks.props.customClasses.default(),
}

export default {
  component: UsaFooterSocialLinks,
  title: 'Components/UsaFooterSocialLinks',
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
  },
  items: defaultProps.cols,
  customClasses: defaultProps.customClasses,
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaFooterSocialLinks },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaFooterSocialLinks
    class="grid-row grid-gap-1"
    :items="items"
    :custom-classes="customClasses"
  ></UsaFooterSocialLinks>`,
})

export const DefaultFooterSocialLinks = DefaultTemplate.bind({})
DefaultFooterSocialLinks.args = {
  ...defaultProps,
  items: testItems,
}
DefaultFooterSocialLinks.storyName = 'Default'

export const CustomClassesFooterSocialLinks = DefaultTemplate.bind({})
CustomClassesFooterSocialLinks.args = {
  ...defaultProps,
  items: testItems,
  customClasses: {
    gridCol: ['grid-col-auto', 'test-grid-col-class'],
    link: ['test-link-class'],
    icon: ['test-icon-class'],
  },
}
CustomClassesFooterSocialLinks.storyName = 'Custom Classes'
