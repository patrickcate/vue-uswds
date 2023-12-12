import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaTag from './UsaTag.vue'

describe('UsaTag', () => {
  it('renders the component', () => {
    cy.mount(UsaTag, {
      slots: {
        default: () => 'Test',
      },
    })
    cy.get('span.usa-tag').should('contain', 'Test')
  })

  it('renders the size class', () => {
    cy.mount(UsaTag, {
      slots: {
        default: () => 'Test',
      },
      props: {
        size: 'big',
      },
    })
    cy.get('.usa-tag--big').should('exist')
  })

  it('renders as a custom HTML element', () => {
    cy.mount(UsaTag, {
      slots: {
        default: () => 'Test',
      },
      props: {
        tag: 'div',
      },
    })
    cy.get('div.usa-tag').should('exist')
  })

  it('warns in console about invalid size', () => {
    cy.stub(window.console, 'warn').as('consoleWarn')

    cy.mount(UsaTag, {
      slots: {
        default: () => 'Test',
      },
      props: {
        size: 'notasize',
      },
    })

    cy.get('span.usa-tag').should('contain', 'Test')

    cy.get('@consoleWarn').should(
      'be.calledWith',
      `'notasize' is not a valid tag size`
    )
  })
})
