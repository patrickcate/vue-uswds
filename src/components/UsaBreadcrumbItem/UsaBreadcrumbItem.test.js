import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaBreadcrumbItem from './UsaBreadcrumbItem.vue'

describe('UsaBreadcrumbItem', () => {
  it('renders the component', () => {
    mount(UsaBreadcrumbItem, {
      props: {
        href: '/test-page',
      },
      slots: {
        default: () => 'Test breadcrumb',
      },
    })

    cy.get('li.usa-breadcrumb__list-item')
      .as('breadcrumb')
      .should('not.have.attr', 'aria-current')

    cy.get('@breadcrumb')
      .find('a.usa-breadcrumb__link')
      .should('have.attr', 'href')
      .and('contain', '/test-page')
    cy.get('@breadcrumb').find('span').should('contain', 'Test breadcrumb')
  })

  it('adds correct `current` item markup if explicity set', () => {
    mount(UsaBreadcrumbItem, {
      props: {
        href: '/test-page',
        current: true,
      },
      slots: {
        default: () => 'Test breadcrumb',
      },
    })

    cy.get('li.usa-breadcrumb__list-item')
      .as('breadcrumb')
      .should('have.attr', 'aria-current')
      .and('contain', 'page')

    cy.get('@breadcrumb').find('a').should('not.exist')
    cy.get('@breadcrumb').find('span').should('contain', 'Test breadcrumb')
  })

  it('adds custom CSS classes', () => {
    mount(UsaBreadcrumbItem, {
      props: {
        props: {
          href: '/test-page',
        },
        customClasses: {
          link: ['test-link-class'],
          span: ['test-span-class'],
        },
      },
      slots: {
        default: () => 'Test breadcrumb',
      },
    })

    cy.get('.test-link-class').should('exist')
    cy.get('.test-span-class').should('exist')
  })
})
