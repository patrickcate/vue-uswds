import { ref } from 'vue'
import UsaModal from './UsaModal.vue'

const defaultProps = {
  size: '',
  id: '',
  visible: true,
  forceAction: false,
  heading: 'Are you sure you want to continue?',
  headingTag: 'h2',
  closeButtonLabel: 'Close this window',
  customClasses: {
    focusTrap: [],
    modal: [],
    overlay: [],
    content: [],
    main: [],
    heading: [],
    description: [],
    footer: [],
  },
}

export default {
  component: UsaModal,
  title: 'Components/UsaModal',
  argTypes: {
    size: {
      options: ['', 'lg'],
      control: {
        labels: {
          '': 'Default',
        },
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
    :forceAction="forceAction"
    :closeButtonLabel="closeButtonLabel"
    :heading="heading"
    :headingTag="headingTag"
    :customClasses="customClasses"
  >
    <template #heading>${args.headingSlot}</template>
    <template #default>${args.defaultSlot}</template>
    <template #footer>${args.footerSlot}</template>
    <template #closeButton>${args.closeButtonSlot}</template>
  </UsaModal>`,
})

export const DefaultModal = DefaultTemplate.bind({})
DefaultModal.args = {
  ...defaultProps,
  visible: true,
}
DefaultModal.storyName = 'Default'

export const LargeModal = DefaultTemplate.bind({})
LargeModal.args = {
  ...defaultProps,
  visible: true,
  size: 'lg',
}
LargeModal.storyName = 'Large Size'

export const ForceActionModal = DefaultTemplate.bind({})
LargeModal.args = {
  ...defaultProps,
  visible: true,
  forceAction: 'true',
}
ForceActionModal.storyName = 'Force Action'

export const CustomIdModal = DefaultTemplate.bind({})
CustomIdModal.args = {
  ...defaultProps,
  id: 'custom-id',
}
CustomIdModal.storyName = 'Custom ID'

export const CustomCloseButtonLabelModal = DefaultTemplate.bind({})
CustomCloseButtonLabelModal.args = {
  ...defaultProps,
  closeButtonLabel: 'Custom close modal button label',
}
CustomCloseButtonLabelModal.storyName = 'Custom Close Button AriaLabel'

export const HeadingSlotHeroModal = DefaultTemplate.bind({})
HeadingSlotHeroModal.args = {
  ...defaultProps,
  headingSlot: 'Custom heading slot',
}
HeadingSlotHeroModal.storyName = 'Heading Slot'

export const CustomHeadingTagModal = DefaultTemplate.bind({})
CustomHeadingTagModal.args = {
  ...defaultProps,
  headingTag: 'h4',
}
CustomHeadingTagModal.storyName = 'Custom Heading Tag'

export const CustomCloseButtonSlotModal = DefaultTemplate.bind({})
CustomCloseButtonSlotModal.args = {
  ...defaultProps,
  closeButtonSlot:
    '<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>',
}
CustomCloseButtonSlotModal.storyName = 'Custom Close Button Slot'

export const CustomClassesModal = DefaultTemplate.bind({})
CustomClassesModal.args = {
  ...defaultProps,
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