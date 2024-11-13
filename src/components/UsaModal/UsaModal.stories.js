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
      table: {
        category: 'props',
      },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    footer: {
      control: { type: 'text' },
    },
    'close-button': {
      control: { type: 'text' },
    },
    closeButton: {
      control: { type: 'text' },
      name: 'closeButton (deprecated: use `close-button`)',
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
    default: '<p>You have unsaved changes that will be lost.</p>',
    'slot:heading': '',
    footer: `<ul class="usa-button-group">
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
    'close-button': '',
  },
  render: args => ({
    components: { UsaModal },
    props: Object.keys(UsaModal.props),
    setup() {
      const visible = ref(args.visible)
      return { args, visible }
    },
    template: `<UsaModal
    :size="args.size"
    :id="args.id"
    v-model:visible="args.visible"
    :force-action="args.forceAction"
    :close-button-label="args.closeButtonLabel"
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :custom-classes="args.customClasses"
  >
    <template v-if="!!args['slot:heading']" #heading>${args['slot:heading']}</template>
    <template v-if="!!args.default" #default>${args.default}</template>
    <template v-if="!!args.footer" #footer>${args.footer}</template>
    <template v-if="!!args['close-button']" #close-button>${args['close-button']}</template>
    <template v-else-if="!!args.closeButton" #close-button>${args.closeButton}</template>
  </UsaModal>`,
  }),
}

export const DefaultModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
  },
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const LargeModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
    size: 'lg',
  },
  name: 'Large Size',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" :visible="true" size="lg"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const ForceActionModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    visible: true,
    forceAction: true,
  },
  name: 'Force Action',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" :visible="true" :force-action="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const CustomIdModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    id: 'custom-id',
    visible: true,
  },
  name: 'Custom ID',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" id="custom-id" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const CustomCloseButtonLabelModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    closeButtonLabel: 'Custom close modal button label',
    visible: true,
  },
  name: 'Custom Close Button AriaLabel',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" :close-button-label="Custom close modal button label" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const HeadingSlotHeroModal = {
  args: {
    ...defaultProps,
    visible: true,
    'slot:heading': 'Custom heading slot',
  },
  name: 'Heading Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal :visible="true"><template #heading>Custom heading slot</template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const CustomHeadingTagModal = {
  args: {
    ...defaultProps,
    heading: 'Are you sure you want to continue?',
    headingTag: 'h4',
    visible: true,
  },
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" heading-tag="h4" :visible="true"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const CustomCloseButtonSlotModal = {
  args: {
    ...defaultProps,
    visible: true,
    heading: 'Are you sure you want to continue?',
    'close-button':
      '<button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button>',
  },
  name: 'Custom Close Button Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal :visible="true" heading="Are you sure you want to continue?"><template #close-button><button type="button" style="align-self: flex-end" @click="visible = false">Custom Close</button></template><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}

export const CustomClassesModal = {
  args: {
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
  },
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaModal heading="Are you sure you want to continue?" :visible="true" :custom-classes=" {
      focusTrap: ['test-focus-trap-class'],
      modal: ['test-modal-class'],
      overlay: ['test-overlay-class'],
      content: ['test-content-class'],
      main: ['test-main-class'],
      heading: ['test-heading-class'],
      description: ['test-description-class'],
      footer: ['test-footer-class'],
    }"><template #default><p>You have unsaved changes that will be lost.</p></template><template #footer><button type="button" class="usa-button" @click="visible = false">Continue without saving</button></template></UsaModal>`,
      },
    },
  },
}
