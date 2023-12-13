import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaLink from './UsaLink.vue'

describe('UsaLink', () => {
  it('renders the component with the correct CSS classes', () => {
    cy.mount(UsaLink, {
      props: {
        to: '/test-page',
        alt: true,
        external: true,
      },
      attrs: {
        class: 'custom-class',
      },
      slots: {
        default: () => 'test link',
      },
      global: {
        mocks: {
          $router: true,
          $nuxt: false,
        },
      },
    })

    cy.get('.usa-link')
      .should('contain', 'test link')
      .and('have.class', 'usa-link--alt')
      .and('have.class', 'usa-link--external')
      .and('have.class', 'custom-class')

    cy.get('router-link').should('have.attr', 'to').and('contain', '/test-page')

    cy.get('.usa-link').should('not.have.attr', 'alt')
    cy.get('.usa-link').should('not.have.attr', 'external')
  })

  it('renders as a static `a` tag', () => {
    cy.mount(UsaLink, {
      props: {
        href: '/test-page',
      },
      slots: {
        default: () => 'test link',
      },
    })

    cy.get('.usa-link')
      .should('contain', 'test link')
      .should('have.attr', 'href')
      .and('contain', '/test-page')
  })
})
