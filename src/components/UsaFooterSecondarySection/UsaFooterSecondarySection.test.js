import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterSecondarySection from './UsaFooterSecondarySection.vue'

describe('UsaFooterSecondarySection', () => {
  it('renders the component', () => {
    mount(UsaFooterSecondarySection, {})

    cy.get('div.usa-footer__secondary-section').should('exist')
    cy.get('div.usa-footer__secondary-section .grid-container').should(
      'be.empty'
    )
  })

  it('adds custom CSS classes', () => {
    mount(UsaFooterSecondarySection, {
      props: {
        customClasses: {
          container: ['test-container-class'],
        },
      },
      slots: {
        default: () => 'Test footer content',
      },
    })

    cy.get('.usa-footer__secondary-section .test-container-class')
      .should('not.have.class', 'grid-container')
      .and('contain', 'Test footer content')
  })
})
