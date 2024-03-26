import UsaCard from './UsaCard.vue'

const defaultProps = {
  cardTag: UsaCard.props.cardTag.default,
  heading: UsaCard.props.heading.default,
  headingTag: UsaCard.props.headingTag.default,
  flag: UsaCard.props.flag.default,
  headerFirst: UsaCard.props.headerFirst.default,
  insetMedia: UsaCard.props.insetMedia.default,
  mediaPosition: UsaCard.props.mediaPosition.default,
  headerExdent: UsaCard.props.headerExdent.default,
  mediaExdent: UsaCard.props.mediaExdent.default,
  bodyExdent: UsaCard.props.bodyExdent.default,
  footerExdent: UsaCard.props.footerExdent.default,
  customClasses: UsaCard.props.customClasses.default(),
}

export default {
  component: UsaCard,
  title: 'Components/UsaCard',
  argTypes: {
    cardTag: {
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
      control: {
        type: 'select',
      },
    },
    flag: {
      control: { type: 'boolean' },
    },
    insetMedia: {
      control: { type: 'boolean' },
    },
    mediaPosition: {
      options: ['left', 'right'],
      control: {
        type: 'select',
      },
    },
    headerExdent: {
      control: { type: 'boolean' },
    },
    mediaExdent: {
      control: { type: 'boolean' },
    },
    bodyExdent: {
      control: { type: 'boolean' },
    },
    footerExdent: {
      control: { type: 'boolean' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    'slot:heading': {
      control: { type: 'text' },
      name: 'heading',
      table: {
        category: 'slots',
      },
    },
    media: {
      control: { type: 'text' },
    },
    default: {
      control: { type: 'text' },
    },
    footer: {
      control: { type: 'text' },
    },
  },
  args: {
    cardTag: defaultProps.cardTag,
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    flag: defaultProps.flag,
    headerFirst: defaultProps.headerFirst,
    mediaPosition: defaultProps.mediaPosition,
    headerExdent: defaultProps.headerExdent,
    insetMedia: defaultProps.insetMedia,
    mediaExdent: defaultProps.mediaExdent,
    bodyExdent: defaultProps.bodyExdent,
    footerExdent: defaultProps.footerExdent,
    customClasses: defaultProps.customClasses,
    'slot:heading': '',
    media:
      '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">',
    default:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p>',
    footer:
      '<div><button type="button" class="usa-button">Visit Florida Keys</button></div>',
  },
  render: args => ({
    components: { UsaCard },
    props: Object.keys(UsaCard.props),
    setup() {
      return { args }
    },
    template: `<UsaCard
    :card-tag="args.cardTag"
    :heading="args.heading"
    :heading-tag="args.headingTag"
    :flag="args.flag"
    :header-first="args.headerFirst"
    :inset-media="args.insetMedia"
    :media-position="args.mediaPosition"
    :header-exdent="args.headerExdent"
    :media-exdent="args.mediaExdent"
    :body-exdent="args.bodyExdent"
    :footer-exdent="args.footerExdent"
    :custom-classes="args.customClasses"
  >
    <template #heading v-if="!!args['slot:heading']">${args['slot:heading']}</template>
    <template #media v-if="!!args.media">${args.media}</template>
    <template #default v-if="!!args.default">${args.default}</template>
    <template #footer v-if="!!args.footer">${args.footer}</template>
  </UsaCard>`,
  }),
}

export const DefaultCard = {
  args: {
    ...defaultProps,
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Default',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const HeaderFirstTagCard = {
  args: {
    ...defaultProps,
    headerFirst: true,
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Header First',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard :header-first="true" heading="Card">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const NoMediaCard = {
  args: {
    ...defaultProps,
    media: '',
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'No Media',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card">\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const NoHeaderCard = {
  args: {
    ...defaultProps,
    heading: '',
    'slot:heading': '',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'No Header',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard>\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const NoFooterCard = {
  args: {
    ...defaultProps,
    footer: '',
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'No Footer',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n</UsaCard>`,
      },
    },
  },
}

export const CustomCardTagCard = {
  args: {
    ...defaultProps,
    cardTag: 'section',
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Custom Card Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" card-tag="section">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const InsetMediaCard = {
  args: {
    ...defaultProps,
    insetMedia: true,
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Inset Media',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" :inset-media="true">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const CustomHeadingTagCard = {
  args: {
    ...defaultProps,
    headingTag: 'h4',
    heading: 'Card',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Custom Heading Tag',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" heading-tag="h4">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const HeadingSlotCard = {
  args: {
    ...defaultProps,
    'slot:heading': 'Custom header slot',
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Header Slot',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard>\n\t<template #heading>Custom header slot</template>\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const CustomClassesCard = {
  args: {
    ...defaultProps,
    heading: 'Card',
    customClasses: {
      container: ['test-container-class'],
      header: ['test-header-class'],
      heading: ['test-heading-class'],
      media: ['test-media-class'],
      img: ['test-img-class'],
      body: ['test-body-class'],
      footer: ['test-footer-class'],
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 50%;"><story /></div>' }),
  ],
  name: 'Custom Classes',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" :custom-classes="{ container: ['test-container-class'], header: ['test-header-class'], heading: ['test-heading-class'], media: ['test-media-class'], img: ['test-img-class'], body: ['test-body-class'], footer: ['test-footer-class'] }">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const FlagLayoutCard = {
  args: {
    ...defaultProps,
    flag: true,
    heading: 'Card',
  },
  name: 'Flag Layout',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" :flag="true">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}

export const FlagLayoutMediaRightCard = {
  args: {
    ...defaultProps,
    flag: true,
    mediaPosition: 'right',
    heading: 'Card',
  },
  name: 'Flag Layout w/ Media Right',
  parameters: {
    docs: {
      source: {
        code: `<UsaCard heading="Card" :flag="true" media-position="right">\n\t<template #media><img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image"></template>\n\t<template #default><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</p></template>\n\t<template #footer><div><button type="button" class="usa-button">Visit Florida Keys</button></div></template>\n</UsaCard>`,
      },
    },
  },
}
