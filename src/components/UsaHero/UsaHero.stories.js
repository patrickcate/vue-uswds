import UsaHero from './UsaHero.vue'

const defaultProps = {
  backgroundImage: UsaHero.props.backgroundImage.default,
  ariaLabel: UsaHero.props.ariaLabel.default,
  customClasses: UsaHero.props.customClasses.default(),
}

export default {
  component: UsaHero,
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
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaHero },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaHero :background-image="backgroundImage"
  :aria-label="ariaLabel" :custom-classes="customClasses">${args.default}</UsaHero>`,
})

export const DefaultHero = DefaultTemplate.bind({})
DefaultHero.args = {
  ...defaultProps,
  backgroundImage:
    'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/hero.png',
  ariaLabel: 'Introduction',
}
DefaultHero.storyName = 'Default'

export const CustomClassesHero = DefaultTemplate.bind({})
CustomClassesHero.args = {
  ...defaultProps,
  backgroundImage:
    'https://federalist-3b6ba08e-0df4-44c9-ac73-6fc193b0e19c.app.cloud.gov/preview/uswds/uswds/develop/hero.png',
  ariaLabel: 'Introduction',
  customClasses: {
    gridContainer: ['test-grid-container-class'],
  },
}
CustomClassesHero.storyName = 'Custom Classes'
