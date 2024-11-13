import UsaHero from './UsaHero.vue'
import UsaHeroCallout from '../UsaHeroCallout'

const defaultProps = {
  backgroundImage: UsaHero.props.backgroundImage.default,
  ariaLabel: UsaHero.props.ariaLabel.default,
  customClasses: UsaHero.props.customClasses.default(),
}

export default {
  component: UsaHero,
  subcomponents: { UsaHeroCallout },
  title: 'Components/UsaHero',
  argTypes: {
    backgroundImage: {
      control: { type: 'text' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    backgroundImage: defaultProps.backgroundImage,
    ariaLabel: defaultProps.ariaLabel,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  render: args => ({
    components: { UsaHero },
    props: Object.keys(UsaHero.props),
    setup() {
      return { args }
    },
    template: `<UsaHero :background-image="args.backgroundImage" :aria-label="args.ariaLabel" :custom-classes="args.customClasses">${args.default}</UsaHero>`,
  }),
}

export const DefaultHero = {
  args: {
    ...defaultProps,
    backgroundImage:
      'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg',
    ariaLabel: 'Introduction',
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>`,
      },
    },
  },
}

export const CustomClassesHero = {
  args: {
    ...defaultProps,
    backgroundImage:
      'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.sites.pages.cloud.gov/preview/uswds/uswds/develop/hero.jpg',
    ariaLabel: 'Introduction',
    customClasses: {
      gridContainer: ['test-grid-container-class'],
    },
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaHero :background-image="backgroundImage" :aria-label="ariaLabel" :custom-classes="{gridContainer: ['test-grid-container-class']}"><UsaHeroCallout heading="Bring attention to a project priority" heading-alt="Hero callout:"><p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p></UsaHeroCallout></UsaHero>`,
      },
    },
  },
}
