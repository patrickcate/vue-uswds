import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterAddress from './UsaFooterAddress.vue'

describe('UsaFooterAddress', () => {
  it('renders the component in a non-slim footer', () => {
    mount(UsaFooterAddress, {
      props: {
        heading: 'Test header',
        email: 'example@example.com',
        phone: '(555) 555-5555',
        phoneUrl: '+1-555-555-5555',
      },
      attrs: {
        'data-test': 'test-attr',
      },
    })

    cy.get('p.usa-footer__contact-heading')
      .should('contain', 'Test header')
      .and('not.have.attr', 'data-test')

    cy.get('address.usa-footer__address').should(
      'have.attr',
      'data-test',
      'test-attr'
    )

    cy.get('.usa-footer__contact-info')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__contact-info > div:nth-of-type(1)').should(
      'have.class',
      'grid-col-auto'
    )
    cy.get('.usa-footer__contact-info > div:nth-of-type(2)').should(
      'have.class',
      'grid-col-auto'
    )

    cy.get('.usa-footer__contact-info > div:nth-of-type(1) a')
      .should('have.attr', 'href', 'tel:+1-555-555-5555')
      .and('contain', '(555) 555-5555')

    cy.get('.usa-footer__contact-info > div:nth-of-type(2) a')
      .should('have.attr', 'href', 'mailto:example@example.com')
      .and('contain', 'example@example.com')
  })

  it('renders the component in a `slim` footer variant', () => {
    mount(UsaFooterAddress, {
      props: {
        heading: 'Test header',
        email: 'example@example.com',
        phone: '(555) 555-5555',
        phoneUrl: '+1-555-555-5555',
      },
      attrs: {
        'data-test': 'test-attr',
      },
      global: {
        provide: { footerVariant: 'slim' },
      },
    })

    cy.get('p.usa-footer__contact-heading').should('not.exist')

    cy.get('address.usa-footer__address').should(
      'have.attr',
      'data-test',
      'test-attr'
    )

    cy.get('.usa-footer__address > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__address > div > div:nth-of-type(1)')
      .should('have.class', 'grid-col-auto')
      .and('have.class', 'mobile-lg:grid-col-12')
      .and('have.class', 'desktop:grid-col-auto')

    cy.get('.usa-footer__address > div > div:nth-of-type(2)')
      .should('have.class', 'grid-col-auto')
      .and('have.class', 'mobile-lg:grid-col-12')
      .and('have.class', 'desktop:grid-col-auto')

    cy.get(
      '.usa-footer__address > div > div:nth-of-type(1) .usa-footer__contact-info'
    ).should('exist')
    cy.get(
      '.usa-footer__address > div > div:nth-of-type(2) .usa-footer__contact-info'
    ).should('exist')

    cy.get(
      '.usa-footer__address > div > div:nth-of-type(1) > .usa-footer__contact-info a'
    )
      .should('have.attr', 'href', 'tel:+1-555-555-5555')
      .and('contain', '(555) 555-5555')

    cy.get(
      '.usa-footer__address > div > div:nth-of-type(2) > .usa-footer__contact-info a'
    )
      .should('have.attr', 'href', 'mailto:example@example.com')
      .and('contain', 'example@example.com')
  })

  it('does not render missing prop markup in a non-slim footer', () => {
    mount(UsaFooterAddress, {})

    cy.get('p.usa-footer__contact-heading').should('not.exist')

    cy.get('address.usa-footer__address').should('exist')

    cy.get('.usa-footer__address > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__address > div').children().should('have.length', 0)
  })

  it('does not render missing prop markup in a `slim` footer variant', () => {
    mount(UsaFooterAddress, {
      global: {
        provide: { footerVariant: 'slim' },
      },
    })

    cy.get('p.usa-footer__contact-heading').should('not.exist')

    cy.get('address.usa-footer__address').should('exist')

    cy.get('.usa-footer__address > div')
      .should('have.class', 'grid-row')
      .and('have.class', 'grid-gap')

    cy.get('.usa-footer__address > div').children().should('have.length', 0)
  })

  it('CSS classes use custom grid prefix and separator in a non-slim footer', () => {
    mount(UsaFooterAddress, {
      props: {
        heading: 'Test header',
        email: 'example@example.com',
        phone: '(555) 555-5555',
        phoneUrl: '+1-555-555-5555',
      },
      global: {
        provide: {
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.usa-footer__address > div')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap')

    cy.get('.usa-footer__contact-info')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap')

    cy.get('.usa-footer__contact-info > div:nth-of-type(1)').should(
      'have.class',
      'test-grid-namespace-col-auto'
    )
    cy.get('.usa-footer__contact-info > div:nth-of-type(2)').should(
      'have.class',
      'test-grid-namespace-col-auto'
    )
  })

  it('CSS classes use custom grid prefix and separator in a `slim` footer variant', () => {
    mount(UsaFooterAddress, {
      props: {
        heading: 'Test header',
        email: 'example@example.com',
        phone: '(555) 555-5555',
        phoneUrl: '+1-555-555-5555',
      },
      global: {
        provide: {
          footerVariant: 'slim',
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('.usa-footer__address > div')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap')

    cy.get('.usa-footer__address > div > div:nth-of-type(1)')
      .should('have.class', 'test-grid-namespace-col-auto')
      .and('have.class', 'mobile-lg@test-grid-namespace-col-12')
      .and('have.class', 'desktop@test-grid-namespace-col-auto')

    cy.get('.usa-footer__address > div > div:nth-of-type(2)')
      .should('have.class', 'test-grid-namespace-col-auto')
      .and('have.class', 'mobile-lg@test-grid-namespace-col-12')
      .and('have.class', 'desktop@test-grid-namespace-col-auto')
  })

  it('uses default slot', () => {
    mount(UsaFooterAddress, {
      slots: {
        default: () => 'Custom slot content',
      },
    })

    cy.get('.usa-footer__address').should('contain', 'Custom slot content')
  })
})
