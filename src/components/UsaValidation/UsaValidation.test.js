import { mount } from '@cypress/vue'
import UsaValidation from './UsaValidation.vue'

describe('UsaValidation', () => {
  it('renders the component', () => {
    const testItems = [
      {
        id: 'item1',
        checked: false,
        text: 'Test item 1',
      },
      {
        id: 'item2',
        checked: true,
        text: 'Test item 2',
      },
      {
        checked: false,
        text: 'Test item 3',
      },
    ]

    mount(UsaValidation, {
      props: {
        items: testItems,
        heading: 'Test heading',
        headingTag: 'h4',
        customClasses: {
          body: ['test-body-class'],
          heading: ['test-heading-class'],
        },
      },
    })

    cy.get('.usa-alert--validation')
      .should('have.class', 'usa-alert')
      .and('have.class', 'usa-alert--info')

    cy.get('.usa-alert__body').should('have.class', 'test-body-class')

    cy.get('.usa-alert--validation h4')
      .should('have.class', 'test-heading-class')
      .should('contain', 'Test heading')

    cy.get('.usa-alert--validation .usa-checklist .usa-checklist__item').should(
      'have.length',
      3
    )
  })
})
