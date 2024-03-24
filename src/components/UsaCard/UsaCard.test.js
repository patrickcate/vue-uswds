import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import UsaCard from './UsaCard.vue'

describe('UsaCard', () => {
  const testMedia = h(
    'img',
    {
      src: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      alt: 'A placeholder image',
    },
    null,
  )

  const testContent = h(
    'p',
    null,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
  )

  const testFooter = h('div', null, [
    h('button', { className: 'usa-button' }, 'Visit Florida Keys'),
  ])

  it('renders the component', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card',
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('div.usa-card').should('exist')
    cy.get('.usa-card__container').should('exist')
    cy.get('header.usa-card__header').should('exist')
    cy.get('h2.usa-card__heading').should('exist')
    cy.get('.usa-card__media').should('exist')
    cy.get('.usa-card__img').should('exist')
    cy.get('.usa-card__body').should('exist')
    cy.get('.usa-card__footer').should('exist')
  })

  it('correct CSS classes are applied for each prop value', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card prop classes',
        flag: true,
        headerFirst: true,
        insetMedia: true,
        mediaPosition: 'right',
        headerExdent: true,
        mediaExdent: true,
        bodyExdent: true,
        footerExdent: true,
        customClasses: {},
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('.usa-card--header-first').should('exist')
    cy.get('.usa-card--flag').should('exist')
    cy.get('.usa-card--media-right').should('exist')
    cy.get('.usa-card__header--exdent').should('exist')
    cy.get('.usa-card__media--inset').should('exist')
    cy.get('.usa-card__media--exdent').should('exist')
    cy.get('.usa-card__body--exdent').should('exist')
    cy.get('.usa-card__footer--exdent').should('exist')
  })

  it('uses the `heading` slot content', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card',
      },
      slots: {
        heading: () => 'Custom slot heading text',
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('.usa-card__heading').should('contain', 'Custom slot heading text')
  })

  it('renders custom heading tag', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card w/ h4 heading tag',
        headingTag: 'h4',
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('h4.usa-card__heading').should('exist')
  })

  it('does not render header if prop or slot is not used', () => {
    cy.mount(UsaCard, {
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('.usa-card__heading').should('not.exist')
  })

  it('renders custom card tag', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card w/ custom element',
        cardTag: 'section',
      },
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('section.usa-card').should('exist')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaCard, {
      props: {
        heading: 'Card w/ custom classes',
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
      slots: {
        media: () => testMedia,
        default: () => testContent,
        footer: () => testFooter,
      },
    })

    cy.get('.test-container-class').should('exist')
    cy.get('.test-header-class').should('exist')
    cy.get('.test-heading-class').should('exist')
    cy.get('.test-media-class').should('exist')
    cy.get('.test-img-class').should('exist')
    cy.get('.test-body-class').should('exist')
    cy.get('.test-footer-class').should('exist')
  })
})
