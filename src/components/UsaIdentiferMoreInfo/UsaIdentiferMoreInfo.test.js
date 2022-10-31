import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaIdentiferMoreInfo from './UsaIdentiferMoreInfo.vue'

describe('UsaIdentiferMoreInfo', () => {
  it('renders the component', () => {
    mount(UsaIdentiferMoreInfo, {})

    cy.get('.usa-identifier__section')
      .should('have.class', 'usa-identifier__section--usagov')
      .and('have.attr', 'aria-label')
      .and('contain', 'U.S. government information and services')

    cy.get('.usa-identifier__container').should('exist')
    cy.get('.usa-identifier__usagov-description').should(
      'contain',
      'Looking for U.S. government information and services?'
    )

    cy.get('.usa-identifier__container .usa-link')
      .should('have.attr', 'href')
      .and('contain', 'https://www.usa.gov')

    cy.get('.usa-identifier__container .usa-link').should(
      'contain',
      'Visit USA.gov'
    )
  })

  it('use custom prop text', () => {
    mount(UsaIdentiferMoreInfo, {
      props: {
        ariaLabel: 'Test aria label',
        description: 'Test description',
        linkText: 'Test link text',
        linkUrl: '/test-link-url',
      },
    })

    cy.get('.usa-identifier__section')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test aria label')

    cy.get('.usa-identifier__usagov-description').should(
      'contain',
      'Test description'
    )

    cy.get('.usa-identifier__container .usa-link')
      .should('have.attr', 'href')
      .and('contain', '/test-link-url')

    cy.get('.usa-identifier__container .usa-link').should(
      'contain',
      'Test link text'
    )
  })
})
