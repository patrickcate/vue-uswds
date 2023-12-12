import '@module/@uswds/uswds/dist/css/uswds.min.css'
import UsaCollectionHeading from './UsaCollectionHeading.vue'

describe('UsaCollectionHeading', () => {
  it('renders the component', () => {
    cy.mount(UsaCollectionHeading, {
      props: {
        header: 'Test header text',
        href: '/test-page',
        customClasses: {},
      },
    })

    cy.get('h2.usa-collection__heading a')
      .should('have.class', 'usa-link')
      .and('have.attr', 'href')
      .and('contain', '/test-page')

    cy.get('.usa-collection__heading a')
      .should('have.attr', 'class')
      .and('equal', 'usa-link')
  })

  it('uses the `heading` slot content', () => {
    cy.mount(UsaCollectionHeading, {
      props: {
        header: 'Test header text',
      },
      slots: {
        default: () => 'Custom slot heading text',
      },
    })

    cy.get('.usa-collection__heading').should(
      'contain',
      'Custom slot heading text'
    )
  })

  it('renders custom heading tag', () => {
    cy.mount(UsaCollectionHeading, {
      props: {
        header: 'Test header text',
        headingTag: 'h4',
      },
    })

    cy.get('h4.usa-collection__heading').should('exist')
  })

  it('renders the custom router link tag and props', () => {
    cy.mount(UsaCollectionHeading, {
      props: {
        heading: 'Test header text',
        to: '/test-page',
        routerComponentName: 'router-link',
      },
    })

    cy.get('router-link').should('have.attr', 'to').and('contain', '/test-page')
  })

  it('adds custom CSS classes', () => {
    cy.mount(UsaCollectionHeading, {
      props: {
        header: 'Test header text',
        customClasses: {
          link: ['test-link-class'],
        },
      },
    })

    cy.get('a.test-link-class').should('exist')
  })
})
