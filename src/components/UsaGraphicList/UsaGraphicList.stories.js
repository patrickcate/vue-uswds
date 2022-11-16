import UsaGraphicList from './UsaGraphicList.vue'
import UsaGraphicListRow from '@/components/UsaGraphicListRow'

const defaultProps = {
  variant: UsaGraphicList.props.variant.default,
  customClasses: UsaGraphicList.props.customClasses.default(),
}

const GraphicListRows = `
  <UsaGraphicListRow class="grid-row grid-gap">
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Graphic headings can vary.</h2>
        <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>
      </div>
    </div>
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Stick to 6 or fewer words.</h2>
        <p>Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>
      </div>
    </div>
  </UsaGraphicListRow>

  <UsaGraphicListRow class="grid-row grid-gap">
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Never highlight anything without a goal.</h2>
        <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>
      </div>
    </div>
    <div class="usa-media-block tablet:grid-col">
      <img class="usa-media-block__img" src="/assets/img/circle-124.png" alt="">
      <div class="usa-media-block__body">
        <h2 class="usa-graphic-list__heading">Could also have 2 or 6.</h2>
        <p>In addition to your goal, find out your users' goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>
      </div>
    </div>
  </UsaGraphicListRow>
`

export default {
  component: UsaGraphicList,
  title: 'Components/UsaGraphicList',
  argTypes: {
    variant: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: defaultProps.variant,
    customClasses: defaultProps.customClasses,
    default: GraphicListRows,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaGraphicList, UsaGraphicListRow },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaGraphicList :variant="variant" :custom-classes="customClasses">${args.default}</UsaGraphicList>`,
})

export const DefaultGraphicList = DefaultTemplate.bind({})
DefaultGraphicList.args = {
  ...defaultProps,
}
DefaultGraphicList.storyName = 'Default'

export const LightGraphicList = DefaultTemplate.bind({})
LightGraphicList.args = {
  ...defaultProps,
  variant: 'light',
}
LightGraphicList.storyName = 'Light'

export const CustomClassesGraphicList = DefaultTemplate.bind({})
CustomClassesGraphicList.args = {
  ...defaultProps,
  customClasses: {
    container: ['custom-container-class'],
  },
}
CustomClassesGraphicList.storyName = 'Custom Classes'
