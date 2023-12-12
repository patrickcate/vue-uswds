import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaFormGroup from './UsaFormGroup.vue'

describe('UsaFormGroup', () => {
  it('renders the component', () => {
    cy.mount(UsaFormGroup, {
      attrs: {
        id: 'test-id',
        'data-test': 'Test data attribute',
        class: 'test-class',
      },
      slots: {
        default: () => 'Test form group content',
      },
    })
      .its('wrapper')
      .as('wrapper')

    cy.get('.usa-form-group').should('not.exist')
    cy.get('*').should('contain', 'Test form group content')

    cy.get('@wrapper').invoke('setProps', { group: true })

    cy.get('.usa-form-group')
      .as('formGroup')
      .should('have.class', 'test-class')
      .and('have.attr', 'data-test')
      .and('contain', 'Test data attribute')

    cy.get('@formGroup').should('not.have.class', 'usa-form-group--error')

    cy.get('@formGroup').should('have.id', 'test-id')

    cy.get('@formGroup').should('contain', 'Test form group content')

    cy.get('@wrapper').invoke('setProps', { error: true })

    cy.get('@formGroup').should('have.class', 'usa-form-group--error')

    cy.get('@wrapper').invoke('setProps', { group: false })

    cy.get('@formGroup').should('not.exist')
  })
})
