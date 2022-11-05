import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import { h } from 'vue'
import UsaNavSecondary from './UsaNavSecondary.vue'

describe('UsaNavSecondary', () => {
  let testLinks

  beforeEach(() => {
    testLinks = [
      {
        to: '/first-link',
        text: 'First link',
      },
      {
        href: '/second-link',
        text: 'Second link',
      },
    ]
  })

  it('renders the component', () => {
    mount(UsaNavSecondary, {
      slots: {
        search: () => h('span', {}, 'Test search slot'),
      },
    })

    cy.get('.usa-nav__secondary').should('not.exist')
    cy.get('.usa-nav__secondary-links').should('not.exist')
    cy.get('.usa-nav__secondary-item').should('not.exist')
    cy.get('.usa-nav__secondary-item a').should('not.exist')

    cy.get('span').should('contain', 'Test search slot')
  })

  it('displays nothing if search slot is not used or header is not `extended` variant', () => {
    mount(UsaNavSecondary, {})

    cy.get('[data-v-app]').children().should('not.exist')
  })

  it('displays list of links', () => {
    mount(UsaNavSecondary, {
      props: {
        items: testLinks,
      },
      slots: {
        search: () => 'Test search slot',
      },
      global: {
        provide: {
          isExtendedHeader: true,
        },
      },
    })

    cy.get('.usa-nav__secondary-links').should('exist')

    cy.get('.usa-nav__secondary-item').should('have.length', 2)
    cy.get('.usa-nav__secondary-item:nth-of-type(1) a')
      .as('firstLink')
      .should('have.attr', 'to')
      .and('contain', '/first-link')
    cy.get('@firstLink').should('contain', 'First link')

    cy.get('.usa-nav__secondary-item a').should('have.length', 2)
    cy.get('.usa-nav__secondary-item:nth-of-type(2) a')
      .as('secondLink')
      .should('have.attr', 'href')
      .and('contain', '/second-link')
    cy.get('@secondLink').should('contain', 'Second link')

    cy.get('.usa-nav__secondary').should('contain', 'Test search slot')
  })
})
