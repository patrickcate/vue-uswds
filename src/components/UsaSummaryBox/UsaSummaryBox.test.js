import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaSummaryBox from './UsaSummaryBox.vue'

describe('UsaSummaryBox', () => {
  const defaultSlotContent = `Test slot content.`

  it('renders the component', () => {
    mount(UsaSummaryBox, {
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-summary-box')
      .should('have.attr', 'role')
      .and('contain', 'region')
    cy.get('.usa-summary-box__body').should('exist')
    cy.get('.usa-summary-box__heading').should('contain', 'Key information')
    cy.get('.usa-summary-box__text').should('contain', defaultSlotContent)
  })

  it('renders custom heading text', () => {
    mount(UsaSummaryBox, {
      props: {
        heading: 'Custom heading text',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-summary-box__heading').should('contain', 'Custom heading text')
  })

  it('aria-labelledby attribute matches id', () => {
    mount(UsaSummaryBox, {
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-summary-box')
      .invoke('attr', 'aria-labelledby')
      .then(ariaLabeledBy => {
        expect(ariaLabeledBy).to.not.be.empty
        cy.get('.usa-summary-box__heading').should('have.id', ariaLabeledBy)
      })
  })

  it('uses custom id prop', () => {
    mount(UsaSummaryBox, {
      props: {
        id: 'custom-id',
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.usa-summary-box')
      .should('have.attr', 'aria-labelledby')
      .and('contain', 'custom-id')

    cy.get('.usa-summary-box__heading').should('have.id', 'custom-id')
  })

  it('adds custom CSS classes', () => {
    mount(UsaSummaryBox, {
      props: {
        customClasses: {
          body: ['test-body-class'],
          heading: ['test-heading-class'],
          text: ['test-text-class'],
        },
      },
      slots: {
        default: () => defaultSlotContent,
      },
    })

    cy.get('.test-body-class').should('exist')
    cy.get('.test-heading-class').should('exist')
    cy.get('.test-text-class').should('exist')
  })
})
