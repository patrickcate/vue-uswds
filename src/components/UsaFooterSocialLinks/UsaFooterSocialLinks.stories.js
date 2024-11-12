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
  render: args => ({
    components: { UsaFooterSocialLinks },
    props: Object.keys(UsaFooterSocialLinks.props),
    setup() {
      return { args }
    },
    template: `<UsaFooterSocialLinks
    class="grid-row grid-gap-1"
    :items="args.items"
    :custom-classes="args.customClasses"
  ></UsaFooterSocialLinks>`,
  }),
}

export const DefaultFooterSocialLinks = {
  args: {
    ...defaultProps,
    items: testItems,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterSocialLinks :items="${JSON.stringify(testItems, null, '\t')}"></UsaFooterSocialLinks>`,
      },
    },
  },
}

export const CustomClassesFooterSocialLinks = {
  args: {
    ...defaultProps,
    items: testItems,
    customClasses: {
      gridCol: ['grid-col-auto', 'test-grid-col-class'],
      link: ['test-link-class'],
      icon: ['test-icon-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaFooterSocialLinks :items="${JSON.stringify(testItems, null, '\t')}" :custom-classes="{ gridCol: ['grid-col-auto', 'test-grid-col-class'], link: ['test-link-class'], icon: ['test-icon-class'] }"></UsaFooterSocialLinks>`,
      },
    },
  },
}
