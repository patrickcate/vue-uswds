import { ref } from 'vue'
import UsaModal from './UsaModal.vue'

const defaultProps = {
  size: UsaModal.props.size.default,
  id: UsaModal.props.id.default,
  visible: UsaModal.props.visible.default,
  forceAction: UsaModal.props.forceAction.default,
  heading: UsaModal.props.heading.default,
  headingTag: UsaModal.props.headingTag.default,
  closeButtonLabel: UsaModal.props.closeButtonLabel.default,
  customClasses: UsaModal.props.customClasses.default(),
}

export default {
  component: UsaModal,
  title: 'Components/UsaModal',
  argTypes: {
    size: {
      options: ['', 'lg'],
      control: {
        type: 'select',
      },
    },
    id: {
      control: { type: 'text' },
    },
    visible: {
      control: { type: 'boolean' },
    },
    forceAction: {
      control: { type: 'boolean' },
    },
    closeButtonLabel: {
      control: { type: 'text' },
    },
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
    footerSlot: {
      control: { type: 'text' },
    },
    closeButtonSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    size: defaultProps.size,
    id: defaultProps.id,
    visible: defaultProps.visible,
    forceAction: defaultProps.forceAction,
    closeButtonLabel: defaultProps.closeButtonLabel,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    customClasses: defaultProps.customClasses,
    defaultSlot: '<p>You have unsaved changes that will be lost.</p>',
    headingSlot: '',
    footerSlot: `<ul class="usa-button-group">
      <li class="usa-button-group__item">
        <button type="button" class="usa-button" @click="visible = false">
          Continue without saving
        </button>
      </li>
      <li class="usa-button-group__item">
        <button
          type="button"
          class="usa-button usa-button--unstyled padding-105 text-center" @click="visible = false"
        >
          Go back
        </button>
      </li>
    </ul>`,
    closeButtonSlot: '',
  },
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaModal },
  props: Object.keys(argTypes),
  setup() {
    const visible = ref(args.visible)
    return { ...args, visible }
  },
  template: `<UsaModal
    :size="size"
    :id="id"
    v-model:visible="visible"
    :force-action="forceAction"
    :close-button-label="closeButtonLabel"
    :heading="heading"
    :heading-tag="headingTag"
    :custom-classes="customClasses"
  >
    <template v-if="${!!args.headingSlot}" #heading>${
    args.headingSlot
  }</template>
    <template v-if="${!!args.defaultSlot}" #default>${
    args.defaultSlot
  }</template>
    <template v-if="${!!args.footerSlot}" #footer>${args.footerSlot}</template>
    <template v-if="${!!args.closeButtonSlot}" #closeButton>${
    args.closeButtonSlot
  }</template>
  </UsaModal>`,
})

export const DefaultModal = DefaultTemplate.bind({})
DefaultModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  visible: true,
}
DefaultModal.storyName = 'Default'

export const LargeModal = DefaultTemplate.bind({})
LargeModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  visible: true,
  size: 'lg',
}
LargeModal.storyName = 'Large Size'

export const ForceActionModal = DefaultTemplate.bind({})
ForceActionModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  visible: true,
  forceAction: true,
}
ForceActionModal.storyName = 'Force Action'

export const CustomIdModal = DefaultTemplate.bind({})
CustomIdModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  id: 'custom-id',
  visible: true,
}
CustomIdModal.storyName = 'Custom ID'

export const CustomCloseButtonLabelModal = DefaultTemplate.bind({})
CustomCloseButtonLabelModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  closeButtonLabel: 'Custom close modal button label',
  visible: true,
}
CustomCloseButtonLabelModal.storyName = 'Custom Close Button AriaLabel'

export const HeadingSlotHeroModal = DefaultTemplate.bind({})
HeadingSlotHeroModal.args = {
  ...defaultProps,
  visible: true,
  headingSlot: 'Custom heading slot',
}
HeadingSlotHeroModal.storyName = 'Heading Slot'

export const CustomHeadingTagModal = DefaultTemplate.bind({})
CustomHeadingTagModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  headingTag: 'h4',
  visible: true,
}
CustomHeadingTagModal.storyName = 'Custom Heading Tag'

export const CustomCloseButtonSlotModal = DefaultTemplate.bind({})
CustomCloseButtonSlotModal.args = {
  ...defaultProps,
  visible: true,
  heading: 'Are you sure you want to continue?',
  closeButtonSlot:
    '<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>',
}
CustomCloseButtonSlotModal.storyName = 'Custom Close Button Slot'

export const CustomClassesModal = DefaultTemplate.bind({})
CustomClassesModal.args = {
  ...defaultProps,
  heading: 'Are you sure you want to continue?',
  visible: true,
  customClasses: {
    focusTrap: ['test-focus-trap-class'],
    modal: ['test-modal-class'],
    overlay: ['test-overlay-class'],
    content: ['test-content-class'],
    main: ['test-main-class'],
    heading: ['test-heading-class'],
    description: ['test-description-class'],
    footer: ['test-footer-class'],
  },
}
CustomClassesModal.storyName = 'Custom Classes'
