import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaFooterMenu from './UsaFooterMenu.vue'

const testItems = [
  {
    href: '/test-1',
    text: 'Test Item 1',
  },
  {
    to: '/test-2',
    text: 'Test Item 2',
    routerComponentName: 'nuxt-link',
  },
  {
    id: 'test-3',
    to: '/test-3',
    text: 'Test Item 3',
  },
]

describe('UsaFooterMenu', () => {
  it('renders the component', () => {
    mount(UsaFooterMenu, {
      props: {
        items: testItems,
      },
    })

    cy.get('ul').should('have.class', 'grid-row').and('have.class', 'grid-gap')

    cy.get('li')
      .should('have.length', 3)
      .and('have.class', 'usa-footer__primary-content')
      .and('have.class', 'mobile-lg:grid-col-6')
      .and('have.class', 'desktop:grid-col-auto')

    cy.get('li:nth-of-type(1) a')
      .should('have.class', 'usa-footer__primary-link')
      .and('have.attr', 'href', '/test-1')
      .and('contain', 'Test Item 1')

    cy.get('li:nth-of-type(2) nuxt-link')
      .should('have.class', 'usa-footer__primary-link')
      .and('have.attr', 'to', '/test-2')
      .and('contain', 'Test Item 2')

    cy.get('li:nth-of-type(3) a')
      .should('have.class', 'usa-footer__primary-link')
      .and('have.attr', 'to', '/test-3')
      .and('contain', 'Test Item 3')
  })

  it('uses custom grid prefix and separator', () => {
    mount(UsaFooterMenu, {
      props: {
        items: testItems,
      },
      global: {
        provide: {
          'vueUswds.prefixSeparator': '@',
          'vueUswds.gridNamespace': 'test-grid-namespace-',
        },
      },
    })

    cy.get('ul')
      .should('have.class', 'test-grid-namespace-row')
      .and('have.class', 'test-grid-namespace-gap')

    cy.get('li')
      .and('have.class', 'mobile-lg@test-grid-namespace-col-6')
      .and('have.class', 'desktop@test-grid-namespace-col-auto')
  })

  it('adds custom CSS classes', () => {
    mount(UsaFooterMenu, {
      props: {
        items: testItems,
        customClasses: {
          gridRow: ['test-grid-row-class'],
          gridCol: ['test-grid-col-class'],
        },
      },
    })

    cy.get('ul').should('have.class', 'test-grid-row-class')

    cy.get('li').and('have.class', 'test-grid-col-class')
  })
})
