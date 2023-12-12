import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaMediaBlock from './UsaMediaBlock.vue'

describe('UsaMediaBlock', () => {
  it('renders the component', () => {
    cy.mount(UsaMediaBlock, {
      slots: {
        media: () => 'Test media slot',
        default: () => 'Test default slot',
      },
    })

    cy.get('.usa-media-block').should('exist')
    cy.get('.usa-media-block__img').should('contain', 'Test media slot')
    cy.get('.usa-media-block__body').should('contain', 'Test default slot')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaMediaBlock, {
      props: {
        customClasses: {
          media: ['test-media-class'],
          body: ['test-body-class'],
        },
      },
    })

    cy.get('.test-media-class').should('exist')
    cy.get('.test-body-class').should('exist')
  })
})
