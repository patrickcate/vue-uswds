import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaIdentifierRequiredLinks from './UsaIdentifierRequiredLinks.vue'

describe('UsaIdentifierRequiredLinks', () => {
  let testLinks

  beforeEach(() => {
    testLinks = [
      {
        to: '/test-1',
        text: 'Test link 1',
      },
      {
        href: '/test-2',
        text: 'Test link 2',
      },
    ]
  })
  it('renders the component', () => {
    mount(UsaIdentifierRequiredLinks, {})

    cy.get('.usa-identifier__section--required-links')
      .should('have.class', 'usa-identifier__section')
      .and('have.attr', 'aria-label')
      .and('contain', 'Important links')

    cy.get('.usa-identifier__container').should('exist')
    cy.get('.usa-identifier__required-links-list').should('exist')
    cy.get('.usa-identifier__required-links-item').should('not.exist')
    cy.get('.usa-identifier__required-link').should('not.exist')
  })

  it('renders list of required links', () => {
    mount(UsaIdentifierRequiredLinks, {
      props: {
        ariaLabel: 'Test aria label',
        items: testLinks,
      },
    })

    cy.get('.usa-identifier__section--required-links')
      .should('have.attr', 'aria-label')
      .and('contain', 'Test aria label')

    cy.get('.usa-identifier__required-links-list').should('exist')

    cy.get('.usa-identifier__required-links-item').should('have.length', 2)

    cy.get(
      '.usa-identifier__required-links-item:nth-of-type(1) .usa-identifier__required-link'
    )
      .as('firstLink')
      .should('have.attr', 'to')
      .and('contain', '/test-1')
    cy.get('@firstLink')
      .should('have.class', 'usa-link')
      .and('contain', 'Test link 1')

    cy.get(
      '.usa-identifier__required-links-item:nth-of-type(2) .usa-identifier__required-link'
    )
      .as('secondLink')
      .should('have.attr', 'href')
      .and('contain', '/test-2')
    cy.get('@secondLink')
      .should('have.class', 'usa-link')
      .and('contain', 'Test link 2')
  })
})
