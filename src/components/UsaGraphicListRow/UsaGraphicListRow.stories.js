import UsaGraphicListRow from './UsaGraphicListRow.vue'

const defaultProps = {}

const slotContent = `
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
`

export default {
  component: UsaGraphicListRow,
  title: 'Components/UsaGraphicListRow',
  argTypes: {
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    default: slotContent,
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaGraphicListRow },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaGraphicListRow class="grid-row grid-gap">${args.default}</UsaGraphicListRow>`,
})

export const DefaultGraphicListRow = DefaultTemplate.bind({})
DefaultGraphicListRow.args = {
  ...defaultProps,
}
DefaultGraphicListRow.storyName = 'Default'

// TODO: Document grid and `usa-graphic-list__heading` classes needing to be added.
