import '@module/@uswds/uswds/dist/css/uswds.min.css'
import { h } from 'vue'
import { mount } from '@cypress/vue'
import UsaBreadcrumb from './UsaBreadcrumb.vue'

describe('UsaBreadcrumb', () => {
  let testBreadcrumbs

  beforeEach(() => {
    testBreadcrumbs = [
      {
        to: '/',
        text: 'Home',
        id: 'home',
      },
      {
        to: '/breadcrumb-1',
        text: 'Breadcrumb 1',
      },
      {
        href: '/breadcrumb-2',
        text: 'Breadcrumb 2',
      },
      {
        to: '/breadcrumb-3',
        text: 'Current Page',
      },
    ]
  })

  it('renders the component', () => {
    mount(UsaBreadcrumb, {
      props: {
        items: testBreadcrumbs,
      },
    }).as('wrapper')

    cy.get('nav.usa-breadcrumb')
      .should('have.attr', 'aria-label')
      .and('contain', 'Breadcrumbs')

    cy.get('ol.usa-breadcrumb__list').should('exist')

    // First breadcrumb item.
    cy.get('li.usa-breadcrumb__list-item:nth-child(1)').as('firstBreadcrumb')
    cy.get('@firstBreadcrumb')
      .find('a.usa-breadcrumb__link')
      .should('have.attr', 'to')
      .and('contain', '/')
    cy.get('@firstBreadcrumb').find('span').should('contain', 'Home')

    // Second breadcrumb item.
    cy.get('li.usa-breadcrumb__list-item:nth-child(2)').as('secondBreadcrumb')
    cy.get('@secondBreadcrumb')
      .find('a.usa-breadcrumb__link')
      .should('have.attr', 'to')
      .and('contain', '/breadcrumb-1')
    cy.get('@secondBreadcrumb').find('span').should('contain', 'Breadcrumb 1')

    // Third breadcrumb item.
    cy.get('li.usa-breadcrumb__list-item:nth-child(3)').as('thirdBreadcrumb')
    cy.get('@thirdBreadcrumb')
      .find('a.usa-breadcrumb__link')
      .should('have.attr', 'href')
      .and('contain', '/breadcrumb-2')
    cy.get('@thirdBreadcrumb').find('span').should('contain', 'Breadcrumb 2')

    // Last breadcrumb item.
    cy.get('li.usa-breadcrumb__list-item:nth-child(4)')
      .as('lastBreadcrumb')
      .should('have.attr', 'aria-current')
      .and('contain', 'page')

    // If the `current` prop is not set on any items, it is automatically
    // added to the last item.
    cy.get('@lastBreadcrumb').find('a').should('not.exist')
    cy.get('@lastBreadcrumb').find('span').should('contain', 'Current Page')

    // Check that `wrap` prop class is added.
    cy.get('@wrapper').invoke('setProps', { wrap: true })
    cy.get('nav.usa-breadcrumb').should('have.class', 'usa-breadcrumb--wrap')

    // Check that `aria-label` prop can be customized.
    cy.get('@wrapper').invoke('setProps', { ariaLabel: 'Custom Label' })
    cy.get('nav.usa-breadcrumb')
      .should('have.attr', 'aria-label')
      .and('contain', 'Custom Label')
  })

  it('adds correct `current` item markup if explicity set', () => {
    testBreadcrumbs[1].current = true

    mount(UsaBreadcrumb, {
      props: {
        items: testBreadcrumbs,
      },
    })

    cy.get('li.usa-breadcrumb__list-item:nth-child(2)')
      .as('secondBreadcrumb')
      .should('have.attr', 'aria-current')
      .and('contain', 'page')
    cy.get('@secondBreadcrumb').find('a').should('not.exist')
    cy.get('@secondBreadcrumb').find('span').should('contain', 'Breadcrumb 1')

    cy.get('li.usa-breadcrumb__list-item:nth-child(4)')
      .as('lastBreadcrumb')
      .should('not.have.attr', 'aria-current')
    cy.get('@lastBreadcrumb')
      .find('a.usa-breadcrumb__link')
      .should('have.attr', 'to')
      .and('contain', '/breadcrumb-3')
    cy.get('@lastBreadcrumb').find('span').should('contain', 'Current Page')
  })

  it('adds custom CSS classes', () => {
    mount(UsaBreadcrumb, {
      props: {
        items: testBreadcrumbs,
        customClasses: {
          list: ['test-list-class'],
          item: ['test-item-class'],
          link: ['test-link-class'],
          span: ['test-span-class'],
        },
      },
    })

    cy.get('.test-list-class').should('exist')
    cy.get('.test-item-class').should('exist')
    cy.get('.test-link-class').should('exist')
    cy.get('.test-span-class').should('exist')
  })

  it('uses the `default` slot content', () => {
    mount(UsaBreadcrumb, {
      props: {
        items: testBreadcrumbs,
      },
      slots: {
        default: () => h('li', null, 'Test default slot'),
      },
    })

    cy.get('.usa-breadcrumb__list')
      .find('li')
      .should('contain', 'Test default slot')
  })

  it('does not render list if no items', () => {
    mount(UsaBreadcrumb, {})

    cy.get('ol').as('list').should('exist')

    cy.get('@list').children().should('have.length', 0)
  })
})
